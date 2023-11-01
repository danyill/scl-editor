import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import '../dataset/data-set-element-editor.js';
import './gse-control-element-editor.js';
import '../../foundation/components/oscd-filtered-list.js';
import type { OscdFilteredList } from '../../foundation/components/oscd-filtered-list.js';
export declare class GseControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedGseControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: OscdFilteredList;
    selectGSEControlButton: Button;
    selectDataSetDialog: Dialog;
    /** Resets selected GOOSE and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private selectDataSet;
    private selectGSEControl;
    private renderSelectDataSetDialog;
    private renderElementEditorContainer;
    renderSelectionList(): TemplateResult;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
