import { TemplateResult } from 'lit';
import '../../foundation/components/scl-textfield.js';
import { Wizard, WizardActor } from '../foundation.js';
export declare function renderBayWizard(name: string | null, desc: string | null): TemplateResult[];
export declare function createAction(parent: Element): WizardActor;
export declare function createBayWizard(parent: Element): Wizard;
export declare function updateAction(element: Element): WizardActor;
export declare function editBayWizard(element: Element): Wizard;
