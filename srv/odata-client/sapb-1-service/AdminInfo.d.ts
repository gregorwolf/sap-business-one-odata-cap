import { Moment } from 'moment';
import { ExtendedAdminInfo, ExtendedAdminInfoField } from './ExtendedAdminInfo';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AdminInfo
 */
export interface AdminInfo {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Company Name.
     * @nullable
     */
    companyName?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Printing Header.
     * @nullable
     */
    printingHeader?: string;
    /**
     * Phone Number 1.
     * @nullable
     */
    phoneNumber1?: string;
    /**
     * Phone Number 2.
     * @nullable
     */
    phoneNumber2?: string;
    /**
     * Fax Number.
     * @nullable
     */
    faxNumber?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Managing Director.
     * @nullable
     */
    managingDirector?: string;
    /**
     * Chartof Accounts Template.
     * @nullable
     */
    chartofAccountsTemplate?: string;
    /**
     * Local Currency.
     * @nullable
     */
    localCurrency?: string;
    /**
     * System Currency.
     * @nullable
     */
    systemCurrency?: string;
    /**
     * Standard Unitof Length.
     * @nullable
     */
    standardUnitofLength?: number;
    /**
     * Weight Unit Default.
     * @nullable
     */
    weightUnitDefault?: number;
    /**
     * Minimum Amountfor 347 Report.
     * @nullable
     */
    minimumAmountfor347Report?: number;
    /**
     * Bank Country.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Tax Office.
     * @nullable
     */
    taxOffice?: string;
    /**
     * Deduction File No.
     * @nullable
     */
    deductionFileNo?: string;
    /**
     * Tax Percentage.
     * @nullable
     */
    taxPercentage?: number;
    /**
     * Advanceson Corp Income Tax.
     * @nullable
     */
    advancesonCorpIncomeTax?: number;
    /**
     * With Tax.
     * @nullable
     */
    withTax?: number;
    /**
     * Withholding Tax Tdct Percnt.
     * @nullable
     */
    withholdingTaxTdctPercnt?: number;
    /**
     * Withholding Tax Ddct Expired.
     * @nullable
     */
    withholdingTaxDdctExpired?: Moment;
    /**
     * Withholding Tax Ddct Office.
     * @nullable
     */
    withholdingTaxDdctOffice?: string;
    /**
     * Alt Name For Ap Invoice.
     * @nullable
     */
    altNameForApInvoice?: string;
    /**
     * Alt Namefor Credit Memo.
     * @nullable
     */
    altNameforCreditMemo?: string;
    /**
     * Alt Name For Goods Receipt.
     * @nullable
     */
    altNameForGoodsReceipt?: string;
    /**
     * Alt Name For Goods Return.
     * @nullable
     */
    altNameForGoodsReturn?: string;
    /**
     * Alt Name For Purchase.
     * @nullable
     */
    altNameForPurchase?: string;
    /**
     * Default Customer Payment Terms.
     * @nullable
     */
    defaultCustomerPaymentTerms?: number;
    /**
     * Default Vendor Payment Terms.
     * @nullable
     */
    defaultVendorPaymentTerms?: number;
    /**
     * Price Listfor Cost Price.
     * @nullable
     */
    priceListforCostPrice?: number;
    /**
     * Company Color.
     * @nullable
     */
    companyColor?: number;
    /**
     * Totals Accuracy.
     * @nullable
     */
    totalsAccuracy?: number;
    /**
     * Accuracyof Quantities.
     * @nullable
     */
    accuracyofQuantities?: number;
    /**
     * Price Accuracy.
     * @nullable
     */
    priceAccuracy?: number;
    /**
     * Rate Accuracy.
     * @nullable
     */
    rateAccuracy?: number;
    /**
     * Percentage Accuracy.
     * @nullable
     */
    percentageAccuracy?: number;
    /**
     * Measuring Accuracy.
     * @nullable
     */
    measuringAccuracy?: number;
    /**
     * Query Accuracy.
     * @nullable
     */
    queryAccuracy?: number;
    /**
     * Addressin Foreign Language.
     * @nullable
     */
    addressinForeignLanguage?: string;
    /**
     * Default Tax Code.
     * @nullable
     */
    defaultTaxCode?: string;
    /**
     * Letter Headerin Foreign Langu.
     * @nullable
     */
    letterHeaderinForeignLangu?: string;
    /**
     * Phone Number 1 Foreign Lang.
     * @nullable
     */
    phoneNumber1ForeignLang?: string;
    /**
     * Phone Number 2 Foreign Lang.
     * @nullable
     */
    phoneNumber2ForeignLang?: string;
    /**
     * Fax Number Foreign Lang.
     * @nullable
     */
    faxNumberForeignLang?: string;
    /**
     * Managing Director Foreign Lan.
     * @nullable
     */
    managingDirectorForeignLan?: string;
    /**
     * Date Separator.
     * @nullable
     */
    dateSeparator?: string;
    /**
     * Isr Type.
     * @nullable
     */
    isrType?: number;
    /**
     * Isr Biller Id.
     * @nullable
     */
    isrBillerId?: string;
    /**
     * Default Warehouse.
     * @nullable
     */
    defaultWarehouse?: string;
    /**
     * Tax Definitionfor Vatitem.
     * @nullable
     */
    taxDefinitionforVatitem?: string;
    /**
     * Tax Definitionfor Vatservice.
     * @nullable
     */
    taxDefinitionforVatservice?: string;
    /**
     * Tax Groupfor Purchase Item.
     * @nullable
     */
    taxGroupforPurchaseItem?: string;
    /**
     * Tax Groupfor Service Purchase.
     * @nullable
     */
    taxGroupforServicePurchase?: string;
    /**
     * Customer Id Number.
     * @nullable
     */
    customerIdNumber?: string;
    /**
     * Default Budget Cost Assess Mt.
     * @nullable
     */
    defaultBudgetCostAssessMt?: number;
    /**
     * File Numberin Income Tax.
     * @nullable
     */
    fileNumberinIncomeTax?: string;
    /**
     * Default Bank No.
     * @nullable
     */
    defaultBankNo?: string;
    /**
     * Default Bank Account.
     * @nullable
     */
    defaultBankAccount?: string;
    /**
     * Default Branch.
     * @nullable
     */
    defaultBranch?: string;
    /**
     * Service Code.
     * @nullable
     */
    serviceCode?: string;
    /**
     * Service Password.
     * @nullable
     */
    servicePassword?: string;
    /**
     * Param Folder Path.
     * @nullable
     */
    paramFolderPath?: string;
    /**
     * Excel Folder Path.
     * @nullable
     */
    excelFolderPath?: string;
    /**
     * Federal Tax Id 2.
     * @nullable
     */
    federalTaxId2?: string;
    /**
     * Federal Tax Id 3.
     * @nullable
     */
    federalTaxId3?: string;
    /**
     * Decimal Separator.
     * @nullable
     */
    decimalSeparator?: string;
    /**
     * Thousands Separator.
     * @nullable
     */
    thousandsSeparator?: string;
    /**
     * Max History.
     * @nullable
     */
    maxHistory?: number;
    /**
     * Bp Type Code.
     * @nullable
     */
    bpTypeCode?: string;
    /**
     * Pbs Number.
     * @nullable
     */
    pbsNumber?: string;
    /**
     * Pbs Group Number.
     * @nullable
     */
    pbsGroupNumber?: string;
    /**
     * Organization Number.
     * @nullable
     */
    organizationNumber?: string;
    /**
     * Account Segments Separator.
     * @nullable
     */
    accountSegmentsSeparator?: string;
    /**
     * S Default Wt Code.
     * @nullable
     */
    sDefaultWtCode?: string;
    /**
     * Withholding Tax P Handle.
     * @nullable
     */
    withholdingTaxPHandle?: string;
    /**
     * P Default Wt Code.
     * @nullable
     */
    pDefaultWtCode?: string;
    /**
     * Holidays Name.
     * @nullable
     */
    holidaysName?: string;
    /**
     * Order Block.
     * @nullable
     */
    orderBlock?: string;
    /**
     * Ordering Party.
     * @nullable
     */
    orderingParty?: string;
    /**
     * Certificate No.
     * @nullable
     */
    certificateNo?: string;
    /**
     * Expiration Date.
     * @nullable
     */
    expirationDate?: Moment;
    /**
     * National Insurance No.
     * @nullable
     */
    nationalInsuranceNo?: string;
    /**
     * S Dflt Itwt.
     * @nullable
     */
    sDfltItwt?: string;
    /**
     * P Dflt Itwt.
     * @nullable
     */
    pDfltItwt?: string;
    /**
     * Days Backward.
     * @nullable
     */
    daysBackward?: number;
    /**
     * Days Forward.
     * @nullable
     */
    daysForward?: number;
    /**
     * Default Dunning Term.
     * @nullable
     */
    defaultDunningTerm?: string;
    /**
     * Default Bank Account Key.
     * @nullable
     */
    defaultBankAccountKey?: number;
    /**
     * Additional Id Number.
     * @nullable
     */
    additionalIdNumber?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Unique Tax Payer Reference.
     * @nullable
     */
    uniqueTaxPayerReference?: string;
    /**
     * Employer Reference.
     * @nullable
     */
    employerReference?: string;
    /**
     * Period Status Change Delay.
     * @nullable
     */
    periodStatusChangeDelay?: number;
    /**
     * Gross Profit Percent For Service Documents.
     * @nullable
     */
    grossProfitPercentForServiceDocuments?: number;
    /**
     * Xml File Folder Path.
     * @nullable
     */
    xmlFileFolderPath?: string;
    /**
     * General Manager.
     * @nullable
     */
    generalManager?: string;
    /**
     * General Manager Foreign Language.
     * @nullable
     */
    generalManagerForeignLanguage?: string;
    /**
     * Wt Accum Amount Ap.
     * @nullable
     */
    wtAccumAmountAp?: number;
    /**
     * Wt Accum Amount Ar.
     * @nullable
     */
    wtAccumAmountAr?: number;
    /**
     * Gts Outbound Folder.
     * @nullable
     */
    gtsOutboundFolder?: string;
    /**
     * Gts Inbound Folder.
     * @nullable
     */
    gtsInboundFolder?: string;
    /**
     * Gts Separate Code.
     * @nullable
     */
    gtsSeparateCode?: string;
    /**
     * Gts Default Checker.
     * @nullable
     */
    gtsDefaultChecker?: number;
    /**
     * Gts Default Payee.
     * @nullable
     */
    gtsDefaultPayee?: number;
    /**
     * Gts Max Amount.
     * @nullable
     */
    gtsMaxAmount?: number;
    /**
     * Starting In Fiscal Year.
     * @nullable
     */
    startingInFiscalYear?: number;
    /**
     * Report According To.
     * @nullable
     */
    reportAccordingTo?: number;
    /**
     * Maximum Number Of Days For Due Date.
     * @nullable
     */
    maximumNumberOfDaysForDueDate?: number;
    /**
     * Alias Name.
     * @nullable
     */
    aliasName?: string;
    /**
     * Boleto Folder Path.
     * @nullable
     */
    boletoFolderPath?: string;
    /**
     * Max Days For Cancel.
     * @nullable
     */
    maxDaysForCancel?: number;
    /**
     * Siren No.
     * @nullable
     */
    sirenNo?: string;
    /**
     * Institution Code.
     * @nullable
     */
    institutionCode?: string;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Account.
     * @nullable
     */
    account?: string;
    /**
     * Enable Multiple Schedulings.
     * @nullable
     */
    enableMultipleSchedulings?: string;
    /**
     * Inventory Posting Highlight Variance.
     * @nullable
     */
    inventoryPostingHighlightVariance?: number;
    /**
     * Inventory Counting Highlight Variance.
     * @nullable
     */
    inventoryCountingHighlightVariance?: number;
    /**
     * Inventory Counting Highlight Max Variance.
     * @nullable
     */
    inventoryCountingHighlightMaxVariance?: number;
    /**
     * Inventory Counting Highlight Counters Difference.
     * @nullable
     */
    inventoryCountingHighlightCountersDifference?: number;
    /**
     * Sepa Creditor Id.
     * @nullable
     */
    sepaCreditorId?: string;
    /**
     * Extended Admin Info.
     * @nullable
     */
    extendedAdminInfo?: ExtendedAdminInfo;
}
/**
 * @deprecated Since v1.6.0. Use [[AdminInfo.build]] instead.
 */
export declare function createAdminInfo(json: any): AdminInfo;
/**
 * AdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AdminInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AdminInfo.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.companyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    companyName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.printingHeader]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    printingHeader: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.phoneNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phoneNumber1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.phoneNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phoneNumber2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faxNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.eMail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    eMail: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.managingDirector]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    managingDirector: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.chartofAccountsTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    chartofAccountsTemplate: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.localCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    localCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.systemCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.standardUnitofLength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    standardUnitofLength: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.weightUnitDefault]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    weightUnitDefault: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.minimumAmountfor347Report]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumAmountfor347Report: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxOffice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxOffice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.deductionFileNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductionFileNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPercentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.advancesonCorpIncomeTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    advancesonCorpIncomeTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.withTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.withholdingTaxTdctPercnt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxTdctPercnt: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.withholdingTaxDdctExpired]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxDdctExpired: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.withholdingTaxDdctOffice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxDdctOffice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.altNameForApInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    altNameForApInvoice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.altNameforCreditMemo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    altNameforCreditMemo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.altNameForGoodsReceipt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    altNameForGoodsReceipt: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.altNameForGoodsReturn]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    altNameForGoodsReturn: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.altNameForPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    altNameForPurchase: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultCustomerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultCustomerPaymentTerms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultVendorPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultVendorPaymentTerms: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.priceListforCostPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListforCostPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.companyColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    companyColor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.totalsAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalsAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.accuracyofQuantities]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accuracyofQuantities: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.priceAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.rateAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rateAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.percentageAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentageAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.measuringAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    measuringAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.queryAccuracy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queryAccuracy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.addressinForeignLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressinForeignLanguage: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.letterHeaderinForeignLangu]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    letterHeaderinForeignLangu: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.phoneNumber1ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phoneNumber1ForeignLang: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.phoneNumber2ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phoneNumber2ForeignLang: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.faxNumberForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faxNumberForeignLang: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.managingDirectorForeignLan]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    managingDirectorForeignLan: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.dateSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateSeparator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isrType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrBillerId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultWarehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxDefinitionforVatitem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDefinitionforVatitem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxDefinitionforVatservice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDefinitionforVatservice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxGroupforPurchaseItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxGroupforPurchaseItem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxGroupforServicePurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxGroupforServicePurchase: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.customerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerIdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBudgetCostAssessMt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBudgetCostAssessMt: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.fileNumberinIncomeTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileNumberinIncomeTax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBankNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBankNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBranch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBranch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.servicePassword]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    servicePassword: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.paramFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paramFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.excelFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    excelFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.federalTaxId2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.federalTaxId3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.decimalSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    decimalSeparator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.thousandsSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    thousandsSeparator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.maxHistory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxHistory: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.bpTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpTypeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.pbsNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pbsNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.pbsGroupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pbsGroupNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.organizationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    organizationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.accountSegmentsSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountSegmentsSeparator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sDefaultWtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sDefaultWtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.withholdingTaxPHandle]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxPHandle: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.pDefaultWtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pDefaultWtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.holidaysName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    holidaysName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.orderBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderBlock: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.orderingParty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderingParty: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.certificateNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    certificateNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expirationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.nationalInsuranceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nationalInsuranceNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sDfltItwt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sDfltItwt: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.pDfltItwt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pDfltItwt: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.daysBackward]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    daysBackward: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.daysForward]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    daysForward: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultDunningTerm]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultDunningTerm: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBankAccountKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalIdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.uniqueTaxPayerReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uniqueTaxPayerReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.employerReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employerReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.periodStatusChangeDelay]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodStatusChangeDelay: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.grossProfitPercentForServiceDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossProfitPercentForServiceDocuments: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.xmlFileFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    xmlFileFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.generalManager]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    generalManager: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.generalManagerForeignLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    generalManagerForeignLanguage: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.wtAccumAmountAp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAccumAmountAp: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.wtAccumAmountAr]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAccumAmountAr: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsOutboundFolder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsOutboundFolder: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsInboundFolder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsInboundFolder: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsSeparateCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsSeparateCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsDefaultChecker]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsDefaultChecker: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsDefaultPayee]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsDefaultPayee: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.gtsMaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsMaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.startingInFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startingInFiscalYear: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.reportAccordingTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportAccordingTo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.maximumNumberOfDaysForDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maximumNumberOfDaysForDueDate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aliasName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.boletoFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boletoFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.maxDaysForCancel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxDaysForCancel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sirenNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sirenNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.institutionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    institutionCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.account]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    account: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableMultipleSchedulings]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableMultipleSchedulings: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryPostingHighlightVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingHighlightVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryCountingHighlightVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingHighlightVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryCountingHighlightMaxVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingHighlightMaxVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryCountingHighlightCountersDifference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingHighlightCountersDifference: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sepaCreditorId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sepaCreditorId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.extendedAdminInfo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    extendedAdminInfo: ExtendedAdminInfoField<EntityT>;
}
export declare namespace AdminInfo {
    function build(json: {
        [keys: string]: FieldType | ExtendedAdminInfo;
    }): AdminInfo;
}
//# sourceMappingURL=AdminInfo.d.ts.map