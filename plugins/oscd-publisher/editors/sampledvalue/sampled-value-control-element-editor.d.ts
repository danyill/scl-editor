import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import type { Checkbox } from '@material/mwc-checkbox';
import '../../foundation/components/scl-checkbox.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-textfield.js';
import type { SclCheckbox } from '../../foundation/components/scl-checkbox.js';
import type { SclSelect } from '../../foundation/components/scl-select.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
export declare class SampledValueControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    /** SCL change indicator */
    editCount: number;
    get sMV(): Element | null;
    private sMVdiff;
    private smvOptsDiff;
    private sampledValueControlDiff;
    private onSampledValueControlInputChange;
    private saveSampledValueControlChanges;
    private onSMVInputChange;
    private saveSMVChanges;
    private onSmvOptsInputChange;
    private saveSmvOptsChanges;
    sampledValueControlInputs?: (SclTextfield | SclSelect | SclCheckbox)[];
    sMVInputs?: SclTextfield[];
    smvOptsInputs?: SclCheckbox[];
    instType?: Checkbox;
    private renderSmvContent;
    private renderSmvOptsContent;
    private renderOtherElements;
    private renderSmvControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
