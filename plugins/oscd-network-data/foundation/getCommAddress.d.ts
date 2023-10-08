/**
 * Looks up Communication section GSE or SMV addresses based on the control block
 * within the IED section (GSEControl or SampledValueControl).
 * @param ctrlBlock - SCL control block element (GSEControl or SampledValueControl)
 * @returns SCL GSE or SMV address element or null if not found.
 */
export declare function getCommAddress(ctrlBlock: Element): Element | null;
