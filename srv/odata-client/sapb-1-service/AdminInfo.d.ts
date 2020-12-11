import { Moment } from 'moment';
import { ExtendedAdminInfo, ExtendedAdminInfoField } from './ExtendedAdminInfo';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAlertTypeforWhStockEnum } from './BoAlertTypeforWhStockEnum';
import { BoTimeTemplate } from './BoTimeTemplate';
import { BoDateTemplate } from './BoDateTemplate';
import { BoCurrencyCheck } from './BoCurrencyCheck';
import { BoBlockBudget } from './BoBlockBudget';
import { BoBudgetAlert } from './BoBudgetAlert';
import { BoInventorySystem } from './BoInventorySystem';
import { BoDefaultBatchStatus } from './BoDefaultBatchStatus';
import { BoGlMethods } from './BoGlMethods';
import { BoUniqueSerialNumber } from './BoUniqueSerialNumber';
import { BoConsumptionMethod } from './BoConsumptionMethod';
import { GtsResponseToExceedingEnum } from './GtsResponseToExceedingEnum';
import { IssuePrimarilyByEnum } from './IssuePrimarilyByEnum';
import { TaxRateDeterminationEnum } from './TaxRateDeterminationEnum';
import { PriceProceedMethodEnum } from './PriceProceedMethodEnum';
import { BaDivationAlertLevelEnum } from './BaDivationAlertLevelEnum';
import { DisplayBatchQtyUoMByEnum } from './DisplayBatchQtyUoMByEnum';
import { BoDataOwnershipManageMethodEnum } from './BoDataOwnershipManageMethodEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Credit Balancewith Minus Sign.
     * @nullable
     */
    creditBalancewithMinusSign?: BoYesNoEnum;
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
     * Direct Indirect Rate.
     * @nullable
     */
    directIndirectRate?: BoYesNoEnum;
    /**
     * Minimum Amountfor 347 Report.
     * @nullable
     */
    minimumAmountfor347Report?: number;
    /**
     * Set Items Warehouses.
     * @nullable
     */
    setItemsWarehouses?: BoYesNoEnum;
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
     * Tax Collection.
     * @nullable
     */
    taxCollection?: BoYesNoEnum;
    /**
     * Tax Definition.
     * @nullable
     */
    taxDefinition?: BoYesNoEnum;
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
     * Withholding Tax Vendor Ddct.
     * @nullable
     */
    withholdingTaxVendorDdct?: BoYesNoEnum;
    /**
     * Customers Deductionat Source.
     * @nullable
     */
    customersDeductionatSource?: BoYesNoEnum;
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
     * Commitment Restriction.
     * @nullable
     */
    commitmentRestriction?: BoYesNoEnum;
    /**
     * Credit Restriction.
     * @nullable
     */
    creditRestriction?: BoYesNoEnum;
    /**
     * Restrict Sales.
     * @nullable
     */
    restrictSales?: BoYesNoEnum;
    /**
     * Restrict Del Notes Po.
     * @nullable
     */
    restrictDelNotesPo?: BoYesNoEnum;
    /**
     * Restrict Orders.
     * @nullable
     */
    restrictOrders?: BoYesNoEnum;
    /**
     * Consider Del Notesin Sales R.
     * @nullable
     */
    considerDelNotesinSalesR?: BoYesNoEnum;
    /**
     * Credit Deposit Type.
     * @nullable
     */
    creditDepositType?: BoYesNoEnum;
    /**
     * Use Tax.
     * @nullable
     */
    useTax?: BoYesNoEnum;
    /**
     * Split Po.
     * @nullable
     */
    splitPo?: BoYesNoEnum;
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
     * Alert Typefor Wh Stock.
     * @nullable
     */
    alertTypeforWhStock?: BoAlertTypeforWhStockEnum;
    /**
     * Set Commissionby Customer.
     * @nullable
     */
    setCommissionbyCustomer?: BoYesNoEnum;
    /**
     * Set Commissionby Item.
     * @nullable
     */
    setCommissionbyItem?: BoYesNoEnum;
    /**
     * Set Commissionby Se.
     * @nullable
     */
    setCommissionbySe?: BoYesNoEnum;
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
     * Calculate Gross Profitper Tra.
     * @nullable
     */
    calculateGrossProfitperTra?: BoYesNoEnum;
    /**
     * Price Listfor Cost Price.
     * @nullable
     */
    priceListforCostPrice?: number;
    /**
     * Gross Profit After Sale.
     * @nullable
     */
    grossProfitAfterSale?: BoYesNoEnum;
    /**
     * Display Pricefor Price Only.
     * @nullable
     */
    displayPriceforPriceOnly?: BoYesNoEnum;
    /**
     * Calculate Taxin Sales Quotati.
     * @nullable
     */
    calculateTaxinSalesQuotati?: BoYesNoEnum;
    /**
     * Base Field.
     * @nullable
     */
    baseField?: BoYesNoEnum;
    /**
     * Allow Closed Sales Quotations.
     * @nullable
     */
    allowClosedSalesQuotations?: BoYesNoEnum;
    /**
     * User Conversion Code.
     * @nullable
     */
    userConversionCode?: BoYesNoEnum;
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
     * Time Template.
     * @nullable
     */
    timeTemplate?: BoTimeTemplate;
    /**
     * Date Template.
     * @nullable
     */
    dateTemplate?: BoDateTemplate;
    /**
     * Date Separator.
     * @nullable
     */
    dateSeparator?: string;
    /**
     * Fc Check Account.
     * @nullable
     */
    fcCheckAccount?: BoCurrencyCheck;
    /**
     * Changed Existing Orders.
     * @nullable
     */
    changedExistingOrders?: BoYesNoEnum;
    /**
     * Multi Currency Check.
     * @nullable
     */
    multiCurrencyCheck?: BoCurrencyCheck;
    /**
     * Isr Type.
     * @nullable
     */
    isrType?: number;
    /**
     * Display Rounding Remark.
     * @nullable
     */
    displayRoundingRemark?: BoYesNoEnum;
    /**
     * Isr Biller Id.
     * @nullable
     */
    isrBillerId?: string;
    /**
     * Block System Currency Editing.
     * @nullable
     */
    blockSystemCurrencyEditing?: BoYesNoEnum;
    /**
     * Block Posting Date Editing.
     * @nullable
     */
    blockPostingDateEditing?: BoYesNoEnum;
    /**
     * Default Warehouse.
     * @nullable
     */
    defaultWarehouse?: string;
    /**
     * Block Tax Date.
     * @nullable
     */
    blockTaxDate?: BoYesNoEnum;
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
     * Calculate Budget.
     * @nullable
     */
    calculateBudget?: BoYesNoEnum;
    /**
     * Customer Id Number.
     * @nullable
     */
    customerIdNumber?: string;
    /**
     * Block Budget.
     * @nullable
     */
    blockBudget?: BoBlockBudget;
    /**
     * Budget Alert.
     * @nullable
     */
    budgetAlert?: BoBudgetAlert;
    /**
     * Block Purchase Orders.
     * @nullable
     */
    blockPurchaseOrders?: BoYesNoEnum;
    /**
     * Block Bookkeeping.
     * @nullable
     */
    blockBookkeeping?: BoYesNoEnum;
    /**
     * Default Budget Cost Assess Mt.
     * @nullable
     */
    defaultBudgetCostAssessMt?: number;
    /**
     * Continuous Stock Management.
     * @nullable
     */
    continuousStockManagement?: BoYesNoEnum;
    /**
     * Continuous Stock System.
     * @nullable
     */
    continuousStockSystem?: BoInventorySystem;
    /**
     * Round Tax Amounts.
     * @nullable
     */
    roundTaxAmounts?: BoYesNoEnum;
    /**
     * Block Del Notesfor Purchase.
     * @nullable
     */
    blockDelNotesforPurchase?: BoYesNoEnum;
    /**
     * File Numberin Income Tax.
     * @nullable
     */
    fileNumberinIncomeTax?: string;
    /**
     * Deferred Tax.
     * @nullable
     */
    deferredTax?: BoYesNoEnum;
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
     * Use Pa System.
     * @nullable
     */
    usePaSystem?: BoYesNoEnum;
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
     * Display Currencyonthe Right.
     * @nullable
     */
    displayCurrencyontheRight?: BoYesNoEnum;
    /**
     * Alertby Warehouse.
     * @nullable
     */
    alertbyWarehouse?: BoYesNoEnum;
    /**
     * Price System.
     * @nullable
     */
    priceSystem?: BoYesNoEnum;
    /**
     * Wholding Tax Ded Hierarchy.
     * @nullable
     */
    wholdingTaxDedHierarchy?: BoYesNoEnum;
    /**
     * Doc Confirmation.
     * @nullable
     */
    docConfirmation?: BoYesNoEnum;
    /**
     * Defaultfor Batch Status.
     * @nullable
     */
    defaultforBatchStatus?: BoDefaultBatchStatus;
    /**
     * Gl Method.
     * @nullable
     */
    glMethod?: BoGlMethods;
    /**
     * Unique Serial No.
     * @nullable
     */
    uniqueSerialNo?: BoUniqueSerialNumber;
    /**
     * Max History.
     * @nullable
     */
    maxHistory?: number;
    /**
     * Change Def Recon Ap Accounts.
     * @nullable
     */
    changeDefReconApAccounts?: BoYesNoEnum;
    /**
     * Change Def Recon Ar Accounts.
     * @nullable
     */
    changeDefReconArAccounts?: BoYesNoEnum;
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
     * Display Bookkeeping Window.
     * @nullable
     */
    displayBookkeepingWindow?: BoYesNoEnum;
    /**
     * S Handle Wt.
     * @nullable
     */
    sHandleWt?: BoYesNoEnum;
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
     * Wt Liable Expense.
     * @nullable
     */
    wtLiableExpense?: BoYesNoEnum;
    /**
     * Use Negative Amounts.
     * @nullable
     */
    useNegativeAmounts?: BoYesNoEnum;
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
     * Rounding Method.
     * @nullable
     */
    roundingMethod?: BoYesNoEnum;
    /**
     * Adress From Wh.
     * @nullable
     */
    adressFromWh?: BoYesNoEnum;
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
     * Sales Order Confirmed.
     * @nullable
     */
    salesOrderConfirmed?: BoYesNoEnum;
    /**
     * Purchase Order Confirmed.
     * @nullable
     */
    purchaseOrderConfirmed?: BoYesNoEnum;
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
     * Default Account Currency.
     * @nullable
     */
    defaultAccountCurrency?: BoYesNoEnum;
    /**
     * Deferred Taxfor Vendors.
     * @nullable
     */
    deferredTaxforVendors?: BoYesNoEnum;
    /**
     * Create Auto Vat Linein Jdt.
     * @nullable
     */
    createAutoVatLineinJdt?: BoYesNoEnum;
    /**
     * Consume Forecast.
     * @nullable
     */
    consumeForecast?: BoYesNoEnum;
    /**
     * Consumption Method.
     * @nullable
     */
    consumptionMethod?: BoConsumptionMethod;
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
     * Multi Language Support Enable.
     * @nullable
     */
    multiLanguageSupportEnable?: BoYesNoEnum;
    /**
     * Allow Future Posting Date.
     * @nullable
     */
    allowFuturePostingDate?: BoYesNoEnum;
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
     * Calculate Row Discount.
     * @nullable
     */
    calculateRowDiscount?: BoYesNoEnum;
    /**
     * Bank Statement Installed.
     * @nullable
     */
    bankStatementInstalled?: BoYesNoEnum;
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
     * Period Status Auto Change.
     * @nullable
     */
    periodStatusAutoChange?: BoYesNoEnum;
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
     * Pick List.
     * @nullable
     */
    pickList?: BoYesNoEnum;
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
     * Use Production Profit And Loss Account.
     * @nullable
     */
    useProductionProfitAndLossAccount?: BoYesNoEnum;
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
     * Copy Exchange Rate In Copy To.
     * @nullable
     */
    copyExchangeRateInCopyTo?: BoYesNoEnum;
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
     * Gts Response To Exceeding.
     * @nullable
     */
    gtsResponseToExceeding?: GtsResponseToExceedingEnum;
    /**
     * Application Of Ifrs.
     * @nullable
     */
    applicationOfIfrs?: BoYesNoEnum;
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
     * Copy Open Rows To Delivery.
     * @nullable
     */
    copyOpenRowsToDelivery?: BoYesNoEnum;
    /**
     * Enable Approval Procedure In Di.
     * @nullable
     */
    enableApprovalProcedureInDi?: BoYesNoEnum;
    /**
     * Enable Update Doc After Approval.
     * @nullable
     */
    enableUpdateDocAfterApproval?: BoYesNoEnum;
    /**
     * Enable Update Draft During Approval.
     * @nullable
     */
    enableUpdateDraftDuringApproval?: BoYesNoEnum;
    /**
     * Issue Primarily By.
     * @nullable
     */
    issuePrimarilyBy?: IssuePrimarilyByEnum;
    /**
     * Is Remove Unpriced Value.
     * @nullable
     */
    isRemoveUnpricedValue?: BoYesNoEnum;
    /**
     * Enable Advanced Gl Account Determination.
     * @nullable
     */
    enableAdvancedGlAccountDetermination?: BoYesNoEnum;
    /**
     * Create Online Quotation.
     * @nullable
     */
    createOnlineQuotation?: BoYesNoEnum;
    /**
     * Is Printer Connected.
     * @nullable
     */
    isPrinterConnected?: BoYesNoEnum;
    /**
     * Enable Branches.
     * @nullable
     */
    enableBranches?: BoYesNoEnum;
    /**
     * Ie Mandatory Validation.
     * @nullable
     */
    ieMandatoryValidation?: BoYesNoEnum;
    /**
     * Enable Payment Due Dates.
     * @nullable
     */
    enablePaymentDueDates?: BoYesNoEnum;
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
     * Enable Centralized Incoming Payments.
     * @nullable
     */
    enableCentralizedIncomingPayments?: BoYesNoEnum;
    /**
     * Enable Centralized Outgoing Payments.
     * @nullable
     */
    enableCentralizedOutgoingPayments?: BoYesNoEnum;
    /**
     * Tax Rate Determination.
     * @nullable
     */
    taxRateDetermination?: TaxRateDeterminationEnum;
    /**
     * Boleto Folder Path.
     * @nullable
     */
    boletoFolderPath?: string;
    /**
     * Allow Multiple Ba On Same Period.
     * @nullable
     */
    allowMultipleBaOnSamePeriod?: BoYesNoEnum;
    /**
     * Block Multiple Ba On Same Ap Document.
     * @nullable
     */
    blockMultipleBaOnSameApDocument?: BoYesNoEnum;
    /**
     * Block Multiple Ba On Same Ar Document.
     * @nullable
     */
    blockMultipleBaOnSameArDocument?: BoYesNoEnum;
    /**
     * Display Cancel Doc In Report.
     * @nullable
     */
    displayCancelDocInReport?: BoYesNoEnum;
    /**
     * Max Days For Cancel.
     * @nullable
     */
    maxDaysForCancel?: number;
    /**
     * Reuse Document Num.
     * @nullable
     */
    reuseDocumentNum?: BoYesNoEnum;
    /**
     * Reuse Nota Fiscal Num.
     * @nullable
     */
    reuseNotaFiscalNum?: BoYesNoEnum;
    /**
     * Auto Add Uo M.
     * @nullable
     */
    autoAddUoM?: BoYesNoEnum;
    /**
     * Auto Add Package.
     * @nullable
     */
    autoAddPackage?: BoYesNoEnum;
    /**
     * Display Inactive Price List In Reports.
     * @nullable
     */
    displayInactivePriceListInReports?: BoYesNoEnum;
    /**
     * Display Inactive Price List In Documents.
     * @nullable
     */
    displayInactivePriceListInDocuments?: BoYesNoEnum;
    /**
     * Display Inactive Price List In Settings.
     * @nullable
     */
    displayInactivePriceListInSettings?: BoYesNoEnum;
    /**
     * Apply Base Inactive Status To Special Prices.
     * @nullable
     */
    applyBaseInactiveStatusToSpecialPrices?: BoYesNoEnum;
    /**
     * Apply Base Inactive Status To Period Volume Discounts.
     * @nullable
     */
    applyBaseInactiveStatusToPeriodVolumeDiscounts?: BoYesNoEnum;
    /**
     * Apply Base Inactive Status To Price Lists.
     * @nullable
     */
    applyBaseInactiveStatusToPriceLists?: BoYesNoEnum;
    /**
     * Price Proceed Method.
     * @nullable
     */
    priceProceedMethod?: PriceProceedMethodEnum;
    /**
     * Remove Update Prices Based On Non Standard Price Lists.
     * @nullable
     */
    removeUpdatePricesBasedOnNonStandardPriceLists?: BoYesNoEnum;
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
     * Set Resources Warehouses.
     * @nullable
     */
    setResourcesWarehouses?: BoYesNoEnum;
    /**
     * Block Stock Negative Quantity.
     * @nullable
     */
    blockStockNegativeQuantity?: BoYesNoEnum;
    /**
     * Use Parent Wip In Components.
     * @nullable
     */
    useParentWipInComponents?: BoYesNoEnum;
    /**
     * Enable Update Ba Price And Planned Amount.
     * @nullable
     */
    enableUpdateBaPriceAndPlannedAmount?: BoYesNoEnum;
    /**
     * Auto Assign Only Valid Apba.
     * @nullable
     */
    autoAssignOnlyValidApba?: BoYesNoEnum;
    /**
     * Auto Assign Only Valid Arba.
     * @nullable
     */
    autoAssignOnlyValidArba?: BoYesNoEnum;
    /**
     * Action When Deviate From Ba For Po.
     * @nullable
     */
    actionWhenDeviateFromBaForPo?: BaDivationAlertLevelEnum;
    /**
     * Action When Deviate From Ba For Grpo.
     * @nullable
     */
    actionWhenDeviateFromBaForGrpo?: BaDivationAlertLevelEnum;
    /**
     * Action When Deviate From Ba For Accounting.
     * @nullable
     */
    actionWhenDeviateFromBaForAccounting?: BaDivationAlertLevelEnum;
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
     * Display Batch Qty Uo M By.
     * @nullable
     */
    displayBatchQtyUoMBy?: DisplayBatchQtyUoMByEnum;
    /**
     * Allow In Bound Posting With Zero Price.
     * @nullable
     */
    allowInBoundPostingWithZeroPrice?: BoYesNoEnum;
    /**
     * Inventory Posting Highlight Variance.
     * @nullable
     */
    inventoryPostingHighlightVariance?: number;
    /**
     * Inventory Posting Release Only Serial And Batch.
     * @nullable
     */
    inventoryPostingReleaseOnlySerialAndBatch?: BoYesNoEnum;
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
     * Copy Single Counter To Individual Counter.
     * @nullable
     */
    copySingleCounterToIndividualCounter?: BoYesNoEnum;
    /**
     * Close Counted Rows With Zero Difference.
     * @nullable
     */
    closeCountedRowsWithZeroDifference?: BoYesNoEnum;
    /**
     * Close Counted Rows Without Confirmation.
     * @nullable
     */
    closeCountedRowsWithoutConfirmation?: BoYesNoEnum;
    /**
     * Calculate In Whse Qty Based On Posting Date.
     * @nullable
     */
    calculateInWhseQtyBasedOnPostingDate?: BoYesNoEnum;
    /**
     * Refresh In Whse Qty In Di.
     * @nullable
     */
    refreshInWhseQtyInDi?: BoYesNoEnum;
    /**
     * Sepa Creditor Id.
     * @nullable
     */
    sepaCreditorId?: string;
    /**
     * Data Ownership Manage By.
     * @nullable
     */
    dataOwnershipManageBy?: BoDataOwnershipManageMethodEnum;
    /**
     * Allow Bp With No Owner.
     * @nullable
     */
    allowBpWithNoOwner?: BoYesNoEnum;
    /**
     * Enable Separate Price Mode.
     * @nullable
     */
    enableSeparatePriceMode?: BoYesNoEnum;
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
export declare class AdminInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AdminInfo> {
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
     * Representation of the [[AdminInfo.creditBalancewithMinusSign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditBalancewithMinusSign: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.directIndirectRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    directIndirectRate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.minimumAmountfor347Report]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimumAmountfor347Report: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.setItemsWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setItemsWarehouses: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.taxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCollection: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxDefinition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDefinition: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.withholdingTaxVendorDdct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxVendorDdct: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.customersDeductionatSource]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customersDeductionatSource: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.commitmentRestriction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commitmentRestriction: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.creditRestriction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditRestriction: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.restrictSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    restrictSales: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.restrictDelNotesPo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    restrictDelNotesPo: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.restrictOrders]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    restrictOrders: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.considerDelNotesinSalesR]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    considerDelNotesinSalesR: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.creditDepositType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditDepositType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.useTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useTax: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.splitPo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    splitPo: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.alertTypeforWhStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertTypeforWhStock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.setCommissionbyCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setCommissionbyCustomer: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.setCommissionbyItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setCommissionbyItem: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.setCommissionbySe]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setCommissionbySe: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.calculateGrossProfitperTra]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateGrossProfitperTra: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.priceListforCostPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListforCostPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.grossProfitAfterSale]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossProfitAfterSale: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayPriceforPriceOnly]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayPriceforPriceOnly: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.calculateTaxinSalesQuotati]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateTaxinSalesQuotati: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.baseField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseField: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.allowClosedSalesQuotations]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowClosedSalesQuotations: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.userConversionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userConversionCode: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.timeTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    timeTemplate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.dateTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateTemplate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.dateSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateSeparator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.fcCheckAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fcCheckAccount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.changedExistingOrders]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changedExistingOrders: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.multiCurrencyCheck]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multiCurrencyCheck: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isrType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayRoundingRemark]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayRoundingRemark: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrBillerId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockSystemCurrencyEditing]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockSystemCurrencyEditing: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockPostingDateEditing]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockPostingDateEditing: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultWarehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockTaxDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockTaxDate: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.calculateBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateBudget: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.customerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerIdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockBudget: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.budgetAlert]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetAlert: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockPurchaseOrders]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockPurchaseOrders: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockBookkeeping]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockBookkeeping: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultBudgetCostAssessMt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBudgetCostAssessMt: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.continuousStockManagement]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    continuousStockManagement: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.continuousStockSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    continuousStockSystem: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.roundTaxAmounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roundTaxAmounts: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockDelNotesforPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockDelNotesforPurchase: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.fileNumberinIncomeTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileNumberinIncomeTax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deferredTax: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.usePaSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usePaSystem: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.displayCurrencyontheRight]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayCurrencyontheRight: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.alertbyWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertbyWarehouse: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.priceSystem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceSystem: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.wholdingTaxDedHierarchy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wholdingTaxDedHierarchy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.docConfirmation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docConfirmation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.defaultforBatchStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultforBatchStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.glMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.uniqueSerialNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uniqueSerialNo: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.maxHistory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxHistory: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.changeDefReconApAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeDefReconApAccounts: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.changeDefReconArAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeDefReconArAccounts: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.displayBookkeepingWindow]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayBookkeepingWindow: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sHandleWt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sHandleWt: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.wtLiableExpense]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtLiableExpense: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.useNegativeAmounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useNegativeAmounts: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.roundingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roundingMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.adressFromWh]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    adressFromWh: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.salesOrderConfirmed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesOrderConfirmed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.purchaseOrderConfirmed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseOrderConfirmed: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.defaultAccountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultAccountCurrency: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.deferredTaxforVendors]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deferredTaxforVendors: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.createAutoVatLineinJdt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    createAutoVatLineinJdt: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.consumeForecast]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    consumeForecast: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.consumptionMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    consumptionMethod: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.multiLanguageSupportEnable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multiLanguageSupportEnable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.allowFuturePostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowFuturePostingDate: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.calculateRowDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateRowDiscount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.bankStatementInstalled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankStatementInstalled: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.periodStatusAutoChange]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodStatusAutoChange: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.pickList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pickList: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.useProductionProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useProductionProfitAndLossAccount: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.copyExchangeRateInCopyTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    copyExchangeRateInCopyTo: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.gtsResponseToExceeding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gtsResponseToExceeding: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.applicationOfIfrs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applicationOfIfrs: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.copyOpenRowsToDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    copyOpenRowsToDelivery: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableApprovalProcedureInDi]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableApprovalProcedureInDi: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableUpdateDocAfterApproval]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableUpdateDocAfterApproval: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableUpdateDraftDuringApproval]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableUpdateDraftDuringApproval: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.issuePrimarilyBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    issuePrimarilyBy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isRemoveUnpricedValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isRemoveUnpricedValue: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableAdvancedGlAccountDetermination]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableAdvancedGlAccountDetermination: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    createOnlineQuotation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.isPrinterConnected]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isPrinterConnected: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableBranches]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableBranches: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.ieMandatoryValidation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ieMandatoryValidation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enablePaymentDueDates]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enablePaymentDueDates: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.enableCentralizedIncomingPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableCentralizedIncomingPayments: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableCentralizedOutgoingPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableCentralizedOutgoingPayments: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.taxRateDetermination]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxRateDetermination: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.boletoFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boletoFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.allowMultipleBaOnSamePeriod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowMultipleBaOnSamePeriod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockMultipleBaOnSameApDocument]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockMultipleBaOnSameApDocument: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockMultipleBaOnSameArDocument]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockMultipleBaOnSameArDocument: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayCancelDocInReport]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayCancelDocInReport: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.maxDaysForCancel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxDaysForCancel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reuseDocumentNum: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reuseNotaFiscalNum: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.autoAddUoM]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoAddUoM: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.autoAddPackage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoAddPackage: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayInactivePriceListInReports]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayInactivePriceListInReports: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayInactivePriceListInDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayInactivePriceListInDocuments: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.displayInactivePriceListInSettings]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayInactivePriceListInSettings: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.applyBaseInactiveStatusToSpecialPrices]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applyBaseInactiveStatusToSpecialPrices: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.applyBaseInactiveStatusToPeriodVolumeDiscounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applyBaseInactiveStatusToPeriodVolumeDiscounts: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.applyBaseInactiveStatusToPriceLists]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applyBaseInactiveStatusToPriceLists: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.priceProceedMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceProceedMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.removeUpdatePricesBasedOnNonStandardPriceLists]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    removeUpdatePricesBasedOnNonStandardPriceLists: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.setResourcesWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setResourcesWarehouses: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.blockStockNegativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockStockNegativeQuantity: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.useParentWipInComponents]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useParentWipInComponents: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableUpdateBaPriceAndPlannedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableUpdateBaPriceAndPlannedAmount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.autoAssignOnlyValidApba]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoAssignOnlyValidApba: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.autoAssignOnlyValidArba]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoAssignOnlyValidArba: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.actionWhenDeviateFromBaForPo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionWhenDeviateFromBaForPo: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.actionWhenDeviateFromBaForGrpo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionWhenDeviateFromBaForGrpo: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.actionWhenDeviateFromBaForAccounting]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionWhenDeviateFromBaForAccounting: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.displayBatchQtyUoMBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayBatchQtyUoMBy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.allowInBoundPostingWithZeroPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowInBoundPostingWithZeroPrice: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryPostingHighlightVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingHighlightVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.inventoryPostingReleaseOnlySerialAndBatch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingReleaseOnlySerialAndBatch: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[AdminInfo.copySingleCounterToIndividualCounter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    copySingleCounterToIndividualCounter: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.closeCountedRowsWithZeroDifference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closeCountedRowsWithZeroDifference: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.closeCountedRowsWithoutConfirmation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closeCountedRowsWithoutConfirmation: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.calculateInWhseQtyBasedOnPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateInWhseQtyBasedOnPostingDate: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.refreshInWhseQtyInDi]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refreshInWhseQtyInDi: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.sepaCreditorId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sepaCreditorId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.dataOwnershipManageBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dataOwnershipManageBy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.allowBpWithNoOwner]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowBpWithNoOwner: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.enableSeparatePriceMode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableSeparatePriceMode: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AdminInfo.extendedAdminInfo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    extendedAdminInfo: ExtendedAdminInfoField<EntityT>;
    /**
     * Creates an instance of AdminInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AdminInfo {
    /**
     * Metadata information on all properties of the `AdminInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AdminInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ExtendedAdminInfo;
    }): AdminInfo;
}
//# sourceMappingURL=AdminInfo.d.ts.map