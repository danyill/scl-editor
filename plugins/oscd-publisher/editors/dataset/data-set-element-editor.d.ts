import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-dialog';
import type { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import '@openscd/oscd-tree-grid';
import type { TreeGrid } from '@openscd/oscd-tree-grid';
import '../../foundation/components/scl-textfield.js';
import '../../foundation/components/action-filtered-list.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
import type { ActionFilteredList } from '../../foundation/components/action-filtered-list.js';
export declare class DataSetElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    private get name();
    private get desc();
    private get fcdaCount();
    private someDiffOnInputs;
    inputs: SclTextfield[];
    saveButton: Button;
    fcdaList: ActionFilteredList;
    daPickerButton: Button;
    daPickerDialog: Dialog;
    daPicker: TreeGrid;
    doPickerButton: Button;
    doPickerDialog: Dialog;
    doPicker: TreeGrid;
    private onInputChange;
    private saveChanges;
    private saveDataObjects;
    private saveDataAttributes;
    private onMoveFCDAUp;
    private onMoveFCDADown;
    updated(): void;
    private renderFCDAList;
    private renderDataObjectPicker;
    private renderDataAttributePicker;
    private renderDataPickers;
    private renderLimits;
    private renderDataSetAttributes;
    private renderHeader;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
