import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-dialog';
import type { Dialog } from '@material/mwc-dialog';
import '@openscd/oscd-tree-grid';
import '../../foundation/components/scl-textfield.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
export declare class DataSetElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    private get name();
    private get desc();
    private someInputDiff;
    private onInputChange;
    private saveChanges;
    private saveDataObjects;
    private saveDataAttributes;
    inputs?: SclTextfield[];
    dataAttributePicker?: Dialog;
    dataObjectPicker?: Dialog;
    private renderHeader;
    private renderDataObjectPicker;
    private renderDataAttributePicker;
    private renderContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
