import { TemplateResult } from 'lit';
import '../../foundation/components/oscd-textfield.js';
import '../../foundation/components/oscd-checkbox.js';
import { Wizard } from '../foundation.js';
type ContentOptions = {
    name: string | null;
    desc: string | null;
    type: string | null;
    virtual: string | null;
    reservedNames: string[];
};
export declare function contentGeneralEquipmentWizard(content: ContentOptions): TemplateResult[];
export declare function createGeneralEquipmentWizard(parent: Element): Wizard;
export declare function editGeneralEquipmentWizard(element: Element): Wizard;
export {};