import { LitElement, TemplateResult } from 'lit';
import '../../foundation/components/oscd-checkbox.js';
import '../../foundation/components/oscd-select.js';
import '../../foundation/components/oscd-textfield.js';
import type { OscdCheckbox } from '../../foundation/components/oscd-checkbox.js';
import type { OscdSelect } from '../../foundation/components/oscd-select.js';
import type { OscdTextfield } from '../../foundation/components/oscd-textfield.js';
export declare class ReportControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    /** SCL change indicator */
    editCount: number;
    private optFieldsDiff;
    private trgOpsDiff;
    private reportControlDiff;
    private onOptFieldsInputChange;
    private saveOptFieldChanges;
    private onTrgOpsInputChange;
    private saveTrgOpsChanges;
    private onReportControlInputChange;
    private saveReportControlChanges;
    optFieldsInputs?: OscdCheckbox[];
    trgOpsInputs?: OscdCheckbox[];
    reportControlInputs?: (OscdTextfield | OscdSelect | OscdCheckbox)[];
    rptEnabledInput: OscdTextfield;
    private renderOptFieldsContent;
    private renderTrgOpsContent;
    private renderChildElements;
    private renderReportControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
