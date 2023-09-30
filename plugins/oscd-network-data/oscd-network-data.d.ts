import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-snackbar';
import '@material/mwc-switch';
import type { Snackbar } from '@material/mwc-snackbar';
/** @returns the cartesian product of `arrays` */
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export default class NetworkData extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    subscriptionCount: number;
    successMessage: Snackbar;
    run(): Promise<void>;
    getEditCount(): number;
    render(): TemplateResult;
}
