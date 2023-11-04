import { TemplateResult } from 'lit';
import '../../foundation/components/scl-textfield.js';
import { Wizard } from '../foundation.js';
type Content = {
    name: string | null;
    desc: string | null;
    type: string | null;
    reservedNames: string[];
};
export declare function contentFunctionWizard(content: Content): TemplateResult[];
export declare function createFunctionWizard(parent: Element): Wizard;
export declare function editFunctionWizard(element: Element): Wizard;
export {};
