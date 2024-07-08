import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-tab-bar';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/dialog/dialog.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/menu/menu.js';
import '@material/web/icon/icon.js';
import '@openenergytools/filterable-lists/dist/selection-list.js';
import '@openenergytools/filterable-lists/dist/action-list.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import type { TabBar } from '@material/mwc-tab-bar';
import type { TextField } from '@material/web/textfield/internal/text-field.js';
import type { MdDialog } from '@material/web/dialog/dialog.js';
import type { SelectionList } from '@openenergytools/filterable-lists/dist/selection-list.js';
import type { MdIconButton } from '@material/web/iconbutton/icon-button.js';
import type { MdMenu } from '@material/web/menu/menu';
import { ControlBlockInfo } from './foundation/getMappingInfo.js';
type IED = {
    originalName: string;
    type: string;
    manufacturer: string;
    comment?: string;
    privates: {
        'OpenSCD-Stencil-Id': string;
        'OpenSCD-Stencil-Version': string;
    }[];
};
type Application = {
    version: string;
    description: string;
    deprecated: boolean;
    IEDS: Record<string, IED>;
    ControlBlocks: ControlBlockInfo[];
};
type ControlBlockTableMapping = {
    id: string;
    from: string;
    to: string;
};
type VersionedApplications = {
    category: string;
    name: string;
    description: string;
    versions: Application[];
};
type StencilData = {
    name: string;
    version: string;
    applications: VersionedApplications[];
};
/**
 * A plugin to allow templates of GOOSE and SV using the
 * later binding method based on a JSON description of a configuration.
 */
export default class Stencil extends LitElement {
    doc: XMLDocument;
    docName: string;
    editCount: number;
    tabIndex: number;
    iedMappingStencilData: ControlBlockInfo[];
    uniqueIeds: string[];
    stencilData: StencilData;
    selectedApplication: VersionedApplications | null;
    selectedAppVersion: Application | undefined;
    applicationSelectedIed: Element | null;
    applicationSelectedFunction: string | null;
    applicationSelectedFunctionReqs: IED | null;
    functionToIed: Map<string, string>;
    createEventListeners: boolean;
    showDeprecated: boolean;
    templateCreationStage: number;
    createCBsToRemove: ControlBlockTableMapping[];
    tabBarUI: TabBar;
    outputStencilUI: TextField;
    outputStencilViewUI: TextField;
    appCategory: TextField;
    appName: TextField;
    appDesc: TextField;
    appVer: TextField;
    appVerDesc: TextField;
    appDeprecated: MdCheckbox;
    stencilName: TextField;
    stencilVersion: TextField;
    iedTemplateSelectorUI: MdDialog;
    iedSelectorUI: MdDialog;
    selectionListUI: SelectionList;
    changeStenciLUI: HTMLInputElement;
    menuAppButtonUI: MdIconButton;
    menuAppUI: MdMenu;
    functionIedNamesUI: TextField[];
    constructor();
    addApplication(): void;
    saveStencilAsFile(): void;
    clearStencilCreateData(): void;
    clearIedTemplateSelection(): void;
    loadStencil(event: Event): Promise<void>;
    applyStencil(): void;
    resetApplication(): void;
    updated(): void;
    protected firstUpdated(): void;
    renderFunctionIedSelector(): TemplateResult;
    renderIedsForUse(): TemplateResult;
    renderUse(): TemplateResult;
    renderCbSelectionTable(): TemplateResult;
    renderIedsToFunctionNaming(): TemplateResult;
    renderOutputJSON(): TemplateResult;
    renderCreate(): TemplateResult;
    renderTemplateIedsSelector(): TemplateResult;
    renderView(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
