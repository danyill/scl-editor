import { LitElement, TemplateResult } from 'lit';
import '../../foundation/components/scl-checkbox.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-textfield.js';
import type { SclCheckbox } from '../../foundation/components/scl-checkbox.js';
import type { SclSelect } from '../../foundation/components/scl-select.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
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
    optFieldsInputs?: SclCheckbox[];
    trgOpsInputs?: SclCheckbox[];
    reportControlInputs?: (SclTextfield | SclSelect | SclCheckbox)[];
    rptEnabledInput: SclTextfield;
    private renderOptFieldsContent;
    private renderTrgOpsContent;
    private renderChildElements;
    private renderReportControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
