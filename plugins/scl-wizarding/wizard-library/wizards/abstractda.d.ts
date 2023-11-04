import { TemplateResult } from 'lit';
import { Edit } from '@openscd/open-scd-core';
import '@material/mwc-list/mwc-list-item';
import '../../foundation/components/scl-textfield.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-checkbox.js';
export declare function renderAbstractDataAttributeContent(name: string | null, desc: string | null, bType: string, types: Element[], type: string | null, sAddr: string | null, valKind: string | null, valImport: string | null, Val: string | null, data: Element): TemplateResult[];
export declare function getValAction(oldVal: Element | null, Val: string | null, abstractda: Element): Edit[];
