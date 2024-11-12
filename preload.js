const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onFileOpen: (callback) => {
    console.log("hi");
    ipcRenderer.on("file-opened", (_event, path) => callback(path));
  },
  openFile: () => {
    console.log("openFile");
    ipcRenderer.invoke("dialog:openFile");
  },
  readFile: (filePath) => ipcRenderer.invoke("read-file", filePath),
});
