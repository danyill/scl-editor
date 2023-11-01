import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-formfield';
import '@material/mwc-checkbox';
import type { Checkbox } from '@material/mwc-checkbox';
import '../../foundation/components/oscd-checkbox.js';
import '../../foundation/components/oscd-select.js';
import '../../foundation/components/oscd-textfield.js';
import type { OscdCheckbox } from '../../foundation/components/oscd-checkbox.js';
import type { OscdSelect } from '../../foundation/components/oscd-select.js';
import type { OscdTextfield } from '../../foundation/components/oscd-textfield.js';
export declare class GseControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    /** SCL change indicator */
    editCount: number;
    get gSE(): Element | null | undefined;
    private gSEdiff;
    private gSEControlDiff;
    private onGSEControlInputChange;
    private saveGSEControlChanges;
    private onGSEInputChange;
    private saveGSEChanges;
    gSEInputs?: OscdTextfield[];
    gSEControlInputs?: (OscdTextfield | OscdSelect | OscdCheckbox)[];
    instType?: Checkbox;
    private renderGseContent;
    private renderGseControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
