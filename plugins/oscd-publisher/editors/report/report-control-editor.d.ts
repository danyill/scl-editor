import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import '../dataset/data-set-element-editor.js';
import './report-control-element-editor.js';
import '../../foundation/components/scl-filtered-list.js';
import type { SclFilteredList } from '../../foundation/components/scl-filtered-list.js';
export declare class ReportControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedReportControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: SclFilteredList;
    selectReportControlButton: Button;
    selectDataSetDialog: Dialog;
    /** Resets selected Report and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private addNewDataSet;
    private selectDataSet;
    private selectReportControl;
    private renderSelectDataSetDialog;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
