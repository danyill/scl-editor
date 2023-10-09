declare const sCLTags: readonly ["SCL", "SubNetwork", "GOOSESecurity", "SMVSecurity", "ConnectivityNode", "SubFunction", "Function", "TapChanger", "SubEquipment", "GeneralEquipment", "PowerTransformer", "TransformerWinding", "ConductingEquipment", "Substation", "VoltageLevel", "Bay", "Process", "Line", "EqSubFunction", "EqFunction", "ConnectedAP", "PhysConn", "SDO", "DO", "DAI", "SDI", "DOI", "Inputs", "RptEnabled", "Server", "ServerAt", "SettingControl", "Communication", "Log", "LDevice", "DataSet", "AccessPoint", "IED", "NeutralPoint", "SampledValueControl", "GSEControl", "LogControl", "ReportControl", "GSE", "SMV", "BDA", "DA", "LNodeType", "DOType", "DAType", "EnumType", "Text", "Private", "Hitem", "AccessControl", "Header", "LNode", "Val", "Voltage", "Services", "Subject", "IssuerName", "MinTime", "MaxTime", "Association", "FCDA", "ClientLN", "IEDName", "ExtRef", "Protocol", "LN0", "LN", "FileHandling", "TimeSyncProt", "CommProt", "SGEdit", "ConfSG", "GetDirectory", "GetDataObjectDefinition", "DataObjectDirectory", "GetDataSetValue", "SetDataSetValue", "DataSetDirectory", "ReadWrite", "TimerActivatedControl", "GetCBValues", "GSEDir", "ConfLdName", "DynAssociation", "SettingGroups", "GSSE", "GOOSE", "ConfReportControl", "SMVsc", "DynDataSet", "ConfDataSet", "ConfLogControl", "ConfSigRef", "ReportSettings", "LogSettings", "GSESettings", "SMVSettings", "ConfLNs", "ClientServices", "SupSubscription", "ValueHandling", "RedProt", "McSecurity", "KDC", "Address", "P", "ProtNs", "EnumVal", "Terminal", "BitRate", "Authentication", "DataTypeTemplates", "History", "OptFields", "SmvOpts", "TrgOps", "SamplesPerSec", "SmpRate", "SecPerSamples"];
export declare type SCLTag = typeof sCLTags[number];
export declare function isSCLTag(tag: string): tag is SCLTag;
export declare const relatives: Record<SCLTag, {
    parents: SCLTag[];
    children: SCLTag[];
}>;
export declare function getReference(parent: Element, tag: SCLTag): Element | null;
export {};
