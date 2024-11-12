import { app, BrowserWindow, Menu, dialog, ipcMain } from "electron";
import * as fss from "fs";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import * as path from "path";
import isDev from "electron-is-dev";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const packageInfo = JSON.parse(fss.readFileSync("./package.json", "utf8"));

let mainWindow;

// const APP_ICON = path.join(__dirname, "build", "icons", "icon");

// const iconPath = () => {
//   return APP_ICON + (process.platform === "win32" ? ".ico" : ".png");
// };

const basePath = isDev ? __dirname : app.getAppPath();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
      // icon: path.resolve(basePath, "./build/icon.png"),
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.key.toLowerCase() === "i") {
      mainWindow.webContents.toggleDevTools();
      event.preventDefault();
    }
  });
}

function createAppMenu() {
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Open...",
          accelerator: "CmdOrCtrl+O",
          click: () => handleFileOpen(),
        },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      role: "help",
      submenu: [
        {
          label: "Learn More ↗️",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal(
              "https://github.com/transpower-nz/open-scd"
            );
          },
        },
        {
          label: "Documentation ↗️",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal(
              "https://transpower-nz.github.io/open-scd-docs"
            );
          },
        },
        {
          label: "About",
          click: () => {
            dialog.showMessageBox({
              title: "About",
              message: `${packageInfo.build?.productName ?? "Unknown"} v${
                packageInfo.version ?? "Unknown"
              }`,
              detail: `${
                packageInfo.description ?? "Unknown"
              }\n\nCopyright © ${new Date().getFullYear()} ${
                packageInfo.author ?? "Unknown"
              }`,
              buttons: ["OK"],
              icon: path.join(__dirname, "build/icon.png"),
            });
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
    filters: [
      {
        name: "SCL Files",
        extensions: ["scd", "icd", "iid", "ssd", "cid", "sed"],
      },
      { name: "All Files", extensions: ["*"] },
    ],
  });

  if (!canceled) {
    mainWindow.webContents.send("file-opened", filePaths[0]);
  }
}

ipcMain.handle("read-file", async (_, filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
});

ipcMain.handle("dialog:openFile", handleFileOpen);

app.whenReady().then(() => {
  createWindow();
  createAppMenu();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
