import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import type { Checkbox } from '@material/mwc-checkbox';
import '../../foundation/components/oscd-checkbox.js';
import '../../foundation/components/oscd-select.js';
import '../../foundation/components/oscd-textfield.js';
import type { OscdCheckbox } from '../../foundation/components/oscd-checkbox.js';
import type { OscdSelect } from '../../foundation/components/oscd-select.js';
import type { OscdTextfield } from '../../foundation/components/oscd-textfield.js';
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
    sampledValueControlInputs?: (OscdTextfield | OscdSelect | OscdCheckbox)[];
    sMVInputs?: OscdTextfield[];
    smvOptsInputs?: OscdCheckbox[];
    instType?: Checkbox;
    private renderSmvContent;
    private renderSmvOptsContent;
    private renderOtherElements;
    private renderSmvControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
