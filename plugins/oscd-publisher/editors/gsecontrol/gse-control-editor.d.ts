import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-dialog';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import type { IconButton } from '@material/mwc-icon-button';
import type { Dialog } from '@material/mwc-dialog';
import '../dataset/data-set-element-editor.js';
import './gse-control-element-editor.js';
import '../../foundation/components/action-filtered-list.js';
import type { ActionFilteredList } from '../../foundation/components/action-filtered-list.js';
export declare class GseControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedGseControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: ActionFilteredList;
    selectGSEControlButton: Button;
    selectDataSetDialog: Dialog;
    newDataSet: IconButton;
    changeDataSet: IconButton;
    /** Resets selected GOOSE and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private addNewDataSet;
    private selectDataSet;
    private selectGSEControl;
    private renderSelectDataSetDialog;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
