export declare const gseControlDoc = "\n<SCL>\n    <Communication>\n        <SubNetwork name=\"subNet\" >\n            <ConnectedAP iedName=\"IED\" apName=\"AP1\" >\n                <GSE ldInst=\"ldInst1\" cbName=\"gse2\" >\n                    <Address>\n                        <P type=\"MAC-Address\">01-0C-CD-01-00-01</P>\n                        <P type=\"APPID\">0001</P>\n                        <P type=\"VLAN-ID\">001</P>\n                        <P type=\"VLAN-PRIORITY\">3</P>\n                    </Address>\n                    <MinTime unit=\"s\" multiplier=\"m\">2</MinTime>\n                    <MaxTime unit=\"s\" multiplier=\"m\">200</MaxTime>\n                </GSE>\n                <GSE ldInst=\"ldInst1\" cbName=\"gse3\" >\n                    <Address>\n                        <P xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:type=\"tP_MAC\" type=\"MAC-Address\">01-0C-CD-01-00-02</P>\n                        <P type=\"APPID\">0002</P>\n                    </Address>\n                </GSE>\n            </ConnectedAP>\n        </SubNetwork>\n    </Communication>\n    <IED name=\"IED\" >\n        <Services>\n            <ConfDataSet max=\"15\" />\n            <GOOSE max=\"15\" />\n        </Services>\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <LDevice inst=\"ldInst1\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <DataSet name=\"datSet2\">\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <GSEControl name=\"gse1\" type=\"GSSE\" appID=\"\" securityEnabled=\"Signature\" fixedOffs=\"true\" />\n                        <GSEControl name=\"gse2\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" datSet=\"datSet\" />\n                        <GSEControl name=\"gse3\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" />\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\" />\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <IED name=\"IED2\" >\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <LDevice inst=\"ldInst1\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <GSEControl name=\"gse1\" type=\"GSSE\" appID=\"\" securityEnabled=\"Signature\" fixedOffs=\"true\" />\n                        <GSEControl name=\"gse2\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" />\n                        <GSEControl name=\"gse3\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" />\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\" />\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <DataTypeTemplates>\n        <LNodeType lnClass=\"LLN0\" id=\"LLN0\">\n            <DO name=\"Beh\" type=\"ENS\"/>\n        </LNodeType>\n        <LNodeType lnClass=\"MMXU\" id=\"MMXU\">\n            <DO name=\"PhV\" type=\"WYE\"/>\n        </LNodeType>\n        <DOType cdc=\"ENS\" id=\"ENS\">\n            <DA name=\"stVal\" bType=\"Enum\" fc=\"ST\" />\n            <DA name=\"q\" bType=\"Quality\" fc=\"ST\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"ST\" />\n            <DA name=\"dc\" bType=\"VisString255\" fc=\"DC\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"WYE\">\n            <SDO name=\"phsA\" type=\"CMV\" />\n            <SDO name=\"phsB\" type=\"CMV\" />\n            <SDO name=\"phsC\" type=\"CMV\" />\n            <SDO name=\"phRes\" type=\"CustomWYE\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"CustomWYE\" >\n            <SDO name=\"phsA\" type=\"CMV\" />\n        </DOType>\n        <DOType cdc=\"CMV\" id=\"CMV\">\n            <DA name=\"cVal\" bType=\"Struct\" type=\"Vector\" fc=\"MX\"/>\n            <DA name=\"q\" bType=\"Quality\" fc=\"MX\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"MX\" />\n            <DA name=\"d\" bType=\"VisibleString255\" fc=\"DC\" />\n        </DOType>\n        <DAType id=\"Vector\" >\n            <BDA name=\"mag\" bType=\"Struct\" type=\"AnalogueValue\" />\n            <BDA name=\"ang\" bType=\"Struct\" type=\"AnalogueValue\" />\n        </DAType>\n        <DAType id=\"AnalogueValue\" >\n            <BDA name=\"f\" bType=\"FLOAT32\" />\n        </DAType>    \n        </DataTypeTemplates>\n</SCL>\n";
export declare const otherGseControlDoc = "\n<SCL>\n    <Communication>\n        <SubNetwork name=\"subNet\" >\n            <ConnectedAP iedName=\"IED\" apName=\"AP1\" >\n                <GSE ldInst=\"ldInst1\" cbName=\"gse2\" >\n                    <Address>\n                        <P type=\"MAC-Address\">01-0C-CD-01-00-01</P>\n                        <P type=\"APPID\">0001</P>\n                        <P type=\"VLAN-ID\">001</P>\n                        <P type=\"VLAN-PRIORITY\">3</P>\n                    </Address>\n                    <MinTime unit=\"s\" multiplier=\"m\">2</MinTime>\n                    <MaxTime unit=\"s\" multiplier=\"m\">200</MaxTime>\n                </GSE>\n                <GSE ldInst=\"ldInst1\" cbName=\"gse3\" >\n                    <Address>\n                        <P xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:type=\"tP_MAC\" type=\"MAC-Address\">01-0C-CD-01-00-02</P>\n                        <P type=\"APPID\">0002</P>\n                    </Address>\n                </GSE>\n            </ConnectedAP>\n        </SubNetwork>\n    </Communication>\n    <IED name=\"IED\" >\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <LDevice inst=\"ldInst1\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <GSEControl name=\"gse1\" type=\"GSSE\" appID=\"\" securityEnabled=\"Signature\" fixedOffs=\"true\" />\n                        <GSEControl name=\"gse3\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" />\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\" />\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <IED name=\"IED2\" >\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <LDevice inst=\"ldInst1\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <GSEControl name=\"gse1\" type=\"GSSE\" appID=\"\" securityEnabled=\"Signature\" fixedOffs=\"true\" />\n                        <GSEControl name=\"gse3\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" />\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\" />\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <DataTypeTemplates>\n        <LNodeType lnClass=\"LLN0\" id=\"LLN0\">\n            <DO name=\"Beh\" type=\"ENS\"/>\n        </LNodeType>\n        <LNodeType lnClass=\"MMXU\" id=\"MMXU\">\n            <DO name=\"PhV\" type=\"WYE\"/>\n        </LNodeType>\n        <DOType cdc=\"ENS\" id=\"ENS\">\n            <DA name=\"stVal\" bType=\"Enum\" fc=\"ST\" />\n            <DA name=\"q\" bType=\"Quality\" fc=\"ST\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"ST\" />\n            <DA name=\"dc\" bType=\"VisString255\" fc=\"DC\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"WYE\">\n            <SDO name=\"phsA\" type=\"CMV\" />\n            <SDO name=\"phsB\" type=\"CMV\" />\n            <SDO name=\"phsC\" type=\"CMV\" />\n            <SDO name=\"phRes\" type=\"CustomWYE\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"CustomWYE\" >\n            <SDO name=\"phsA\" type=\"CMV\" />\n        </DOType>\n        <DOType cdc=\"CMV\" id=\"CMV\">\n            <DA name=\"cVal\" bType=\"Struct\" type=\"Vector\" fc=\"MX\"/>\n            <DA name=\"q\" bType=\"Quality\" fc=\"MX\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"MX\" />\n            <DA name=\"d\" bType=\"VisibleString255\" fc=\"DC\" />\n        </DOType>\n        <DAType id=\"Vector\" >\n            <BDA name=\"mag\" bType=\"Struct\" type=\"AnalogueValue\" />\n            <BDA name=\"ang\" bType=\"Struct\" type=\"AnalogueValue\" />\n        </DAType>\n        <DAType id=\"AnalogueValue\" >\n            <BDA name=\"f\" bType=\"FLOAT32\" />\n        </DAType>    \n        </DataTypeTemplates>\n</SCL>\n";
export declare const gseControlDocWithDescs = "\n<SCL xmlns=\"http://www.iec.ch/61850/2003/SCL\" version=\"2007\" revision=\"B\" release=\"4\">\n    <Header id=\"ReportControl with description\" version=\"1\" revision=\"1\" toolID=\"OpenSCD, tada!\" nameStructure=\"IEDName\">\n    </Header>\n    <IED name=\"IED\">\n        <Services>\n            <ConfDataSet max=\"15\" />\n            <GOOSE max=\"15\" />\n        </Services>\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <Authentication></Authentication>\n                <LDevice inst=\"ldInst1\" desc=\"Control\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\" desc=\"\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                        <GSEControl name=\"gse2\" type=\"GOOSE\" appID=\"someAppID\" desc=\"GOOSE with GSE\" datSet=\"datSet\" />\n                        <DOI name=\"Beh\">\n                            <DAI name=\"d\">\n                                <Val>Behaviour of IEC 61850 Test Mode</Val>\n                            </DAI>\n                        </DOI>\n                        <DOI name=\"Mod\" desc=\"Preferred description, just the Mode thanks\">\n                            <DAI name=\"d\">\n                                <Val>Mode of IEC 61850 Test Mode - not actually used</Val>\n                            </DAI>\n                        </DOI>\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst1\" prefix=\"prefix\" lnClass=\"MMXU\" lnInst=\"1\" doName=\"PhV.phsA\" daName=\"cVal.mag.f\" fc=\"MX\" />\n                            <FCDA ldInst=\"ldInst1\" prefix=\"prefix\" lnClass=\"MMXU\" lnInst=\"1\" doName=\"PhV.phsA\" daName=\"q\" fc=\"MX\" />\n                        </DataSet>\n                    </LN>\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <IED name=\"IED2\">\n        <AccessPoint name=\"AP1\">\n            <Server>\n                <Authentication></Authentication>\n                <LDevice inst=\"ldInst1\">\n                    <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"LLN0\" desc=\"A happy LN0\">\n                        <DataSet name=\"datSet\">\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"stVal\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Beh\" daName=\"q\" fc=\"ST\" />\n                            <FCDA ldInst=\"ldInst1\" prefix=\"\" lnClass=\"LLN0\" doName=\"Mod\" daName=\"t\" fc=\"ST\" />\n                        </DataSet>\n                    </LN0>\n                    <LN prefix=\"prefix\" lnClass=\"MMXU\" inst=\"1\" lnType=\"MMXU\" />\n                </LDevice>\n            </Server>\n        </AccessPoint>\n    </IED>\n    <DataTypeTemplates>\n        <LNodeType lnClass=\"LLN0\" id=\"LLN0\">\n            <DO name=\"Beh\" type=\"ENS\"/>\n        </LNodeType>\n        <LNodeType lnClass=\"MMXU\" id=\"MMXU\">\n            <DO name=\"PhV\" type=\"WYE\"/>\n        </LNodeType>\n        <DOType cdc=\"ENS\" id=\"ENS\">\n            <DA name=\"stVal\" bType=\"Enum\" fc=\"ST\" />\n            <DA name=\"q\" bType=\"Quality\" fc=\"ST\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"ST\" />\n            <DA name=\"dc\" bType=\"VisString255\" fc=\"DC\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"WYE\">\n            <SDO name=\"phsA\" type=\"CMV\" />\n            <SDO name=\"phsB\" type=\"CMV\" />\n            <SDO name=\"phsC\" type=\"CMV\" />\n            <SDO name=\"phRes\" type=\"CustomWYE\" />\n        </DOType>\n        <DOType cdc=\"WYE\" id=\"CustomWYE\">\n            <SDO name=\"phsA\" type=\"CMV\" />\n        </DOType>\n        <DOType cdc=\"CMV\" id=\"CMV\">\n            <DA name=\"cVal\" bType=\"Struct\" type=\"Vector\" fc=\"MX\"/>\n            <DA name=\"q\" bType=\"Quality\" fc=\"MX\" />\n            <DA name=\"t\" bType=\"Timestamp\" fc=\"MX\" />\n            <DA name=\"d\" bType=\"VisString255\" fc=\"DC\" />\n        </DOType>\n        <DAType id=\"Vector\">\n            <BDA name=\"mag\" bType=\"Struct\" type=\"AnalogueValue\" />\n            <BDA name=\"ang\" bType=\"Struct\" type=\"AnalogueValue\" />\n        </DAType>\n        <DAType id=\"AnalogueValue\">\n            <BDA name=\"f\" bType=\"FLOAT32\" />\n        </DAType>\n    </DataTypeTemplates>\n</SCL>\n";
