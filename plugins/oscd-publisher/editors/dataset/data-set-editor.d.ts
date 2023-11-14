import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import './data-set-element-editor.js';
import '../../foundation/components/action-filtered-list.js';
import type { ActionFilteredList } from '../../foundation/components/action-filtered-list.js';
export declare class DataSetEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedDataSet?: Element;
    get childCount(): number;
    selectionList: ActionFilteredList;
    selectDataSetButton: Button;
    /** Resets selected GOOSE, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private selectDataSet;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
