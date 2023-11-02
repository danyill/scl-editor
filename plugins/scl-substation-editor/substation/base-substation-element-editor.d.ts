import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import type { IconButton } from '@material/mwc-icon-button';
import type { Menu } from '@material/mwc-menu';
/** base class hosting global properties and the remove method */
export default class BaseSubstationElementEditor extends LitElement {
    /** The edited `Function` element */
    element: Element;
    /** indicator for changes element */
    editCount: number;
    /** Whether function type element shall be shown */
    showfunctions: boolean;
    addMenu?: Menu;
    addButton: IconButton;
    private openCreateWizard;
    openEditWizard(): void;
    removeElement(): void;
    updated(): void;
    private renderAddButtons;
    renderAddButton(): TemplateResult;
}
