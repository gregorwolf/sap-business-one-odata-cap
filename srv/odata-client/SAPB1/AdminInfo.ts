/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedAdminInfo, ExtendedAdminInfoField } from './ExtendedAdminInfo';
import {
  ElectronicReportInfo,
  ElectronicReportInfoField
} from './ElectronicReportInfo';
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
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * AdminInfo
 */
export interface AdminInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Company Name.
   * @nullable
   */
  companyName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Printing Header.
   * @nullable
   */
  printingHeader?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone Number 1.
   * @nullable
   */
  phoneNumber1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone Number 2.
   * @nullable
   */
  phoneNumber2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Managing Director.
   * @nullable
   */
  managingDirector?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Chartof Accounts Template.
   * @nullable
   */
  chartofAccountsTemplate?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Local Currency.
   * @nullable
   */
  localCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * System Currency.
   * @nullable
   */
  systemCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Balancewith Minus Sign.
   * @nullable
   */
  creditBalancewithMinusSign?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Standard Unitof Length.
   * @nullable
   */
  standardUnitofLength?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight Unit Default.
   * @nullable
   */
  weightUnitDefault?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Direct Indirect Rate.
   * @nullable
   */
  directIndirectRate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Minimum Amountfor 347 Report.
   * @nullable
   */
  minimumAmountfor347Report?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Set Items Warehouses.
   * @nullable
   */
  setItemsWarehouses?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Deduction File No.
   * @nullable
   */
  deductionFileNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Collection.
   * @nullable
   */
  taxCollection?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Definition.
   * @nullable
   */
  taxDefinition?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Percentage.
   * @nullable
   */
  taxPercentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Advanceson Corp Income Tax.
   * @nullable
   */
  advancesonCorpIncomeTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * With Tax.
   * @nullable
   */
  withTax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withholding Tax Vendor Ddct.
   * @nullable
   */
  withholdingTaxVendorDdct?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Customers Deductionat Source.
   * @nullable
   */
  customersDeductionatSource?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Withholding Tax Tdct Percnt.
   * @nullable
   */
  withholdingTaxTdctPercnt?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withholding Tax Ddct Expired.
   * @nullable
   */
  withholdingTaxDdctExpired?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Withholding Tax Ddct Office.
   * @nullable
   */
  withholdingTaxDdctOffice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Commitment Restriction.
   * @nullable
   */
  commitmentRestriction?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Credit Restriction.
   * @nullable
   */
  creditRestriction?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Restrict Sales.
   * @nullable
   */
  restrictSales?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Restrict Del Notes Po.
   * @nullable
   */
  restrictDelNotesPo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Restrict Orders.
   * @nullable
   */
  restrictOrders?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Consider Del Notesin Sales R.
   * @nullable
   */
  considerDelNotesinSalesR?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Credit Deposit Type.
   * @nullable
   */
  creditDepositType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Use Tax.
   * @nullable
   */
  useTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Split Po.
   * @nullable
   */
  splitPo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Alt Name For Ap Invoice.
   * @nullable
   */
  altNameForApInvoice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alt Namefor Credit Memo.
   * @nullable
   */
  altNameforCreditMemo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alt Name For Goods Receipt.
   * @nullable
   */
  altNameForGoodsReceipt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alt Name For Goods Return.
   * @nullable
   */
  altNameForGoodsReturn?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alt Name For Purchase.
   * @nullable
   */
  altNameForPurchase?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alert Typefor Wh Stock.
   * @nullable
   */
  alertTypeforWhStock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Set Commissionby Customer.
   * @nullable
   */
  setCommissionbyCustomer?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Set Commissionby Item.
   * @nullable
   */
  setCommissionbyItem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Set Commissionby Se.
   * @nullable
   */
  setCommissionbySe?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Customer Payment Terms.
   * @nullable
   */
  defaultCustomerPaymentTerms?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Default Vendor Payment Terms.
   * @nullable
   */
  defaultVendorPaymentTerms?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Calculate Gross Profitper Tra.
   * @nullable
   */
  calculateGrossProfitperTra?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Price Listfor Cost Price.
   * @nullable
   */
  priceListforCostPrice?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gross Profit After Sale.
   * @nullable
   */
  grossProfitAfterSale?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Display Pricefor Price Only.
   * @nullable
   */
  displayPriceforPriceOnly?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Calculate Taxin Sales Quotati.
   * @nullable
   */
  calculateTaxinSalesQuotati?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Field.
   * @nullable
   */
  baseField?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Allow Closed Sales Quotations.
   * @nullable
   */
  allowClosedSalesQuotations?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * User Conversion Code.
   * @nullable
   */
  userConversionCode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Company Color.
   * @nullable
   */
  companyColor?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Totals Accuracy.
   * @nullable
   */
  totalsAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Accuracyof Quantities.
   * @nullable
   */
  accuracyofQuantities?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Price Accuracy.
   * @nullable
   */
  priceAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Rate Accuracy.
   * @nullable
   */
  rateAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Percentage Accuracy.
   * @nullable
   */
  percentageAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Measuring Accuracy.
   * @nullable
   */
  measuringAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Query Accuracy.
   * @nullable
   */
  queryAccuracy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Addressin Foreign Language.
   * @nullable
   */
  addressinForeignLanguage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Tax Code.
   * @nullable
   */
  defaultTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Letter Headerin Foreign Langu.
   * @nullable
   */
  letterHeaderinForeignLangu?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone Number 1 Foreign Lang.
   * @nullable
   */
  phoneNumber1ForeignLang?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone Number 2 Foreign Lang.
   * @nullable
   */
  phoneNumber2ForeignLang?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fax Number Foreign Lang.
   * @nullable
   */
  faxNumberForeignLang?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Managing Director Foreign Lan.
   * @nullable
   */
  managingDirectorForeignLan?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Template.
   * @nullable
   */
  timeTemplate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Date Template.
   * @nullable
   */
  dateTemplate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Date Separator.
   * @nullable
   */
  dateSeparator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fc Check Account.
   * @nullable
   */
  fcCheckAccount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Changed Existing Orders.
   * @nullable
   */
  changedExistingOrders?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Multi Currency Check.
   * @nullable
   */
  multiCurrencyCheck?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Isr Type.
   * @nullable
   */
  isrType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Display Rounding Remark.
   * @nullable
   */
  displayRoundingRemark?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block System Currency Editing.
   * @nullable
   */
  blockSystemCurrencyEditing?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Posting Date Editing.
   * @nullable
   */
  blockPostingDateEditing?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Warehouse.
   * @nullable
   */
  defaultWarehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block Tax Date.
   * @nullable
   */
  blockTaxDate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Definitionfor Vatitem.
   * @nullable
   */
  taxDefinitionforVatitem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Definitionfor Vatservice.
   * @nullable
   */
  taxDefinitionforVatservice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Groupfor Purchase Item.
   * @nullable
   */
  taxGroupforPurchaseItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Groupfor Service Purchase.
   * @nullable
   */
  taxGroupforServicePurchase?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Calculate Budget.
   * @nullable
   */
  calculateBudget?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Customer Id Number.
   * @nullable
   */
  customerIdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block Budget.
   * @nullable
   */
  blockBudget?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Budget Alert.
   * @nullable
   */
  budgetAlert?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Purchase Orders.
   * @nullable
   */
  blockPurchaseOrders?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Bookkeeping.
   * @nullable
   */
  blockBookkeeping?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Budget Cost Assess Mt.
   * @nullable
   */
  defaultBudgetCostAssessMt?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Continuous Stock Management.
   * @nullable
   */
  continuousStockManagement?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Continuous Stock System.
   * @nullable
   */
  continuousStockSystem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Round Tax Amounts.
   * @nullable
   */
  roundTaxAmounts?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Del Notesfor Purchase.
   * @nullable
   */
  blockDelNotesforPurchase?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * File Numberin Income Tax.
   * @nullable
   */
  fileNumberinIncomeTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Bank No.
   * @nullable
   */
  defaultBankNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Bank Account.
   * @nullable
   */
  defaultBankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Branch.
   * @nullable
   */
  defaultBranch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use Pa System.
   * @nullable
   */
  usePaSystem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Service Password.
   * @nullable
   */
  servicePassword?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Param Folder Path.
   * @nullable
   */
  paramFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Excel Folder Path.
   * @nullable
   */
  excelFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Federal Tax Id 2.
   * @nullable
   */
  federalTaxId2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Federal Tax Id 3.
   * @nullable
   */
  federalTaxId3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Decimal Separator.
   * @nullable
   */
  decimalSeparator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Thousands Separator.
   * @nullable
   */
  thousandsSeparator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Display Currencyonthe Right.
   * @nullable
   */
  displayCurrencyontheRight?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Alertby Warehouse.
   * @nullable
   */
  alertbyWarehouse?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Price System.
   * @nullable
   */
  priceSystem?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Wholding Tax Ded Hierarchy.
   * @nullable
   */
  wholdingTaxDedHierarchy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Confirmation.
   * @nullable
   */
  docConfirmation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Defaultfor Batch Status.
   * @nullable
   */
  defaultforBatchStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Gl Method.
   * @nullable
   */
  glMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Unique Serial No.
   * @nullable
   */
  uniqueSerialNo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Max History.
   * @nullable
   */
  maxHistory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Change Def Recon Ap Accounts.
   * @nullable
   */
  changeDefReconApAccounts?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Change Def Recon Ar Accounts.
   * @nullable
   */
  changeDefReconArAccounts?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bp Type Code.
   * @nullable
   */
  bpTypeCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pbs Number.
   * @nullable
   */
  pbsNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pbs Group Number.
   * @nullable
   */
  pbsGroupNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Organization Number.
   * @nullable
   */
  organizationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Segments Separator.
   * @nullable
   */
  accountSegmentsSeparator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Display Bookkeeping Window.
   * @nullable
   */
  displayBookkeepingWindow?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * S Handle Wt.
   * @nullable
   */
  sHandleWt?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * S Default Wt Code.
   * @nullable
   */
  sDefaultWtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Withholding Tax P Handle.
   * @nullable
   */
  withholdingTaxPHandle?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * P Default Wt Code.
   * @nullable
   */
  pDefaultWtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wt Liable Expense.
   * @nullable
   */
  wtLiableExpense?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Use Negative Amounts.
   * @nullable
   */
  useNegativeAmounts?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Holidays Name.
   * @nullable
   */
  holidaysName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Order Block.
   * @nullable
   */
  orderBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rounding Method.
   * @nullable
   */
  roundingMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Adress From Wh.
   * @nullable
   */
  adressFromWh?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ordering Party.
   * @nullable
   */
  orderingParty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Certificate No.
   * @nullable
   */
  certificateNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * National Insurance No.
   * @nullable
   */
  nationalInsuranceNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Order Confirmed.
   * @nullable
   */
  salesOrderConfirmed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Purchase Order Confirmed.
   * @nullable
   */
  purchaseOrderConfirmed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * S Dflt Itwt.
   * @nullable
   */
  sDfltItwt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * P Dflt Itwt.
   * @nullable
   */
  pDfltItwt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Account Currency.
   * @nullable
   */
  defaultAccountCurrency?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Deferred Taxfor Vendors.
   * @nullable
   */
  deferredTaxforVendors?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Create Auto Vat Linein Jdt.
   * @nullable
   */
  createAutoVatLineinJdt?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Consume Forecast.
   * @nullable
   */
  consumeForecast?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Consumption Method.
   * @nullable
   */
  consumptionMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Days Backward.
   * @nullable
   */
  daysBackward?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Days Forward.
   * @nullable
   */
  daysForward?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Default Dunning Term.
   * @nullable
   */
  defaultDunningTerm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Bank Account Key.
   * @nullable
   */
  defaultBankAccountKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Multi Language Support Enable.
   * @nullable
   */
  multiLanguageSupportEnable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Allow Future Posting Date.
   * @nullable
   */
  allowFuturePostingDate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Calculate Row Discount.
   * @nullable
   */
  calculateRowDiscount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bank Statement Installed.
   * @nullable
   */
  bankStatementInstalled?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Unique Tax Payer Reference.
   * @nullable
   */
  uniqueTaxPayerReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Employer Reference.
   * @nullable
   */
  employerReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Period Status Auto Change.
   * @nullable
   */
  periodStatusAutoChange?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Period Status Change Delay.
   * @nullable
   */
  periodStatusChangeDelay?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gross Profit Percent For Service Documents.
   * @nullable
   */
  grossProfitPercentForServiceDocuments?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Xml File Folder Path.
   * @nullable
   */
  xmlFileFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pick List.
   * @nullable
   */
  pickList?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * General Manager.
   * @nullable
   */
  generalManager?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * General Manager Foreign Language.
   * @nullable
   */
  generalManagerForeignLanguage?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Use Production Profit And Loss Account.
   * @nullable
   */
  useProductionProfitAndLossAccount?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Wt Accum Amount Ap.
   * @nullable
   */
  wtAccumAmountAp?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Wt Accum Amount Ar.
   * @nullable
   */
  wtAccumAmountAr?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Copy Exchange Rate In Copy To.
   * @nullable
   */
  copyExchangeRateInCopyTo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Gts Outbound Folder.
   * @nullable
   */
  gtsOutboundFolder?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gts Inbound Folder.
   * @nullable
   */
  gtsInboundFolder?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gts Separate Code.
   * @nullable
   */
  gtsSeparateCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gts Default Checker.
   * @nullable
   */
  gtsDefaultChecker?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gts Default Payee.
   * @nullable
   */
  gtsDefaultPayee?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Gts Max Amount.
   * @nullable
   */
  gtsMaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gts Response To Exceeding.
   * @nullable
   */
  gtsResponseToExceeding?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Application Of Ifrs.
   * @nullable
   */
  applicationOfIfrs?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Starting In Fiscal Year.
   * @nullable
   */
  startingInFiscalYear?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Report According To.
   * @nullable
   */
  reportAccordingTo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Copy Open Rows To Delivery.
   * @nullable
   */
  copyOpenRowsToDelivery?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Approval Procedure In Di.
   * @nullable
   */
  enableApprovalProcedureInDi?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Update Doc After Approval.
   * @nullable
   */
  enableUpdateDocAfterApproval?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Update Draft During Approval.
   * @nullable
   */
  enableUpdateDraftDuringApproval?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Enable Authorizer Update Pending Draft.
   * @nullable
   */
  enableAuthorizerUpdatePendingDraft?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Issue Primarily By.
   * @nullable
   */
  issuePrimarilyBy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Remove Unpriced Value.
   * @nullable
   */
  isRemoveUnpricedValue?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Advanced Gl Account Determination.
   * @nullable
   */
  enableAdvancedGlAccountDetermination?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Create Online Quotation.
   * @nullable
   */
  createOnlineQuotation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Printer Connected.
   * @nullable
   */
  isPrinterConnected?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Branches.
   * @nullable
   */
  enableBranches?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ie Mandatory Validation.
   * @nullable
   */
  ieMandatoryValidation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Payment Due Dates.
   * @nullable
   */
  enablePaymentDueDates?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Maximum Number Of Days For Due Date.
   * @nullable
   */
  maximumNumberOfDaysForDueDate?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Alias Name.
   * @nullable
   */
  aliasName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Enable Centralized Incoming Payments.
   * @nullable
   */
  enableCentralizedIncomingPayments?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Enable Centralized Outgoing Payments.
   * @nullable
   */
  enableCentralizedOutgoingPayments?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Tax Rate Determination.
   * @nullable
   */
  taxRateDetermination?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Boleto Folder Path.
   * @nullable
   */
  boletoFolderPath?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Allow Multiple Ba On Same Period.
   * @nullable
   */
  allowMultipleBaOnSamePeriod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Multiple Ba On Same Ap Document.
   * @nullable
   */
  blockMultipleBaOnSameApDocument?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Block Multiple Ba On Same Ar Document.
   * @nullable
   */
  blockMultipleBaOnSameArDocument?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Display Cancel Doc In Report.
   * @nullable
   */
  displayCancelDocInReport?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Max Days For Cancel.
   * @nullable
   */
  maxDaysForCancel?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reuse Document Num.
   * @nullable
   */
  reuseDocumentNum?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reuse Nota Fiscal Num.
   * @nullable
   */
  reuseNotaFiscalNum?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Auto Add Uo M.
   * @nullable
   */
  autoAddUoM?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Auto Add Package.
   * @nullable
   */
  autoAddPackage?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Display Inactive Price List In Reports.
   * @nullable
   */
  displayInactivePriceListInReports?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Display Inactive Price List In Documents.
   * @nullable
   */
  displayInactivePriceListInDocuments?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Display Inactive Price List In Settings.
   * @nullable
   */
  displayInactivePriceListInSettings?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Apply Base Inactive Status To Special Prices.
   * @nullable
   */
  applyBaseInactiveStatusToSpecialPrices?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Apply Base Inactive Status To Period Volume Discounts.
   * @nullable
   */
  applyBaseInactiveStatusToPeriodVolumeDiscounts?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Apply Base Inactive Status To Price Lists.
   * @nullable
   */
  applyBaseInactiveStatusToPriceLists?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Price Proceed Method.
   * @nullable
   */
  priceProceedMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Remove Update Prices Based On Non Standard Price Lists.
   * @nullable
   */
  removeUpdatePricesBasedOnNonStandardPriceLists?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Siren No.
   * @nullable
   */
  sirenNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Institution Code.
   * @nullable
   */
  institutionCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Set Resources Warehouses.
   * @nullable
   */
  setResourcesWarehouses?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Stock Negative Quantity.
   * @nullable
   */
  blockStockNegativeQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Use Parent Wip In Components.
   * @nullable
   */
  useParentWipInComponents?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Update Ba Price And Planned Amount.
   * @nullable
   */
  enableUpdateBaPriceAndPlannedAmount?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Auto Assign Only Valid Apba.
   * @nullable
   */
  autoAssignOnlyValidApba?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Auto Assign Only Valid Arba.
   * @nullable
   */
  autoAssignOnlyValidArba?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Action When Deviate From Ba For Po.
   * @nullable
   */
  actionWhenDeviateFromBaForPo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Action When Deviate From Ba For Grpo.
   * @nullable
   */
  actionWhenDeviateFromBaForGrpo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Action When Deviate From Ba For Accounting.
   * @nullable
   */
  actionWhenDeviateFromBaForAccounting?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account.
   * @nullable
   */
  account?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Enable Multiple Schedulings.
   * @nullable
   */
  enableMultipleSchedulings?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Display Batch Qty Uo M By.
   * @nullable
   */
  displayBatchQtyUoMBy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Allow In Bound Posting With Zero Price.
   * @nullable
   */
  allowInBoundPostingWithZeroPrice?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Inventory Posting Highlight Variance.
   * @nullable
   */
  inventoryPostingHighlightVariance?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Inventory Posting Release Only Serial And Batch.
   * @nullable
   */
  inventoryPostingReleaseOnlySerialAndBatch?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Inventory Counting Highlight Variance.
   * @nullable
   */
  inventoryCountingHighlightVariance?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Inventory Counting Highlight Max Variance.
   * @nullable
   */
  inventoryCountingHighlightMaxVariance?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Inventory Counting Highlight Counters Difference.
   * @nullable
   */
  inventoryCountingHighlightCountersDifference?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Copy Single Counter To Individual Counter.
   * @nullable
   */
  copySingleCounterToIndividualCounter?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Close Counted Rows With Zero Difference.
   * @nullable
   */
  closeCountedRowsWithZeroDifference?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Close Counted Rows Without Confirmation.
   * @nullable
   */
  closeCountedRowsWithoutConfirmation?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Calculate In Whse Qty Based On Posting Date.
   * @nullable
   */
  calculateInWhseQtyBasedOnPostingDate?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Refresh In Whse Qty In Di.
   * @nullable
   */
  refreshInWhseQtyInDi?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sepa Creditor Id.
   * @nullable
   */
  sepaCreditorId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Data Ownership Manage By.
   * @nullable
   */
  dataOwnershipManageBy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Allow Bp With No Owner.
   * @nullable
   */
  allowBpWithNoOwner?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Separate Price Mode.
   * @nullable
   */
  enableSeparatePriceMode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable External Tax.
   * @nullable
   */
  enableExternalTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Number Of Char In Month.
   * @nullable
   */
  numberOfCharInMonth?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sales Ln W Tax.
   * @nullable
   */
  salesLnWTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sales Post Payment Category Ln W Tax.
   * @nullable
   */
  salesPostPaymentCategoryLnWTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sales Apply Exh Rates Ln W Tax.
   * @nullable
   */
  salesApplyExhRatesLnWTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Purchase Ln W Tax.
   * @nullable
   */
  purchaseLnWTax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Purchase Post Payment Category Ln W Tax.
   * @nullable
   */
  purchasePostPaymentCategoryLnWTax?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Purchase Apply Exh Rates Ln W Tax Wx.
   * @nullable
   */
  purchaseApplyExhRatesLnWTaxWx?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Use Default Price List.
   * @nullable
   */
  useDefaultPriceList?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Customer Price List.
   * @nullable
   */
  defaultCustomerPriceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Default Vendor Price List.
   * @nullable
   */
  defaultVendorPriceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Eori Number.
   * @nullable
   */
  eoriNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Copy Attachments From Base To Target.
   * @nullable
   */
  copyAttachmentsFromBaseToTarget?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Copy Attachments From Bom.
   * @nullable
   */
  copyAttachmentsFromBom?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Dont Overwrite Atc With Same Name.
   * @nullable
   */
  dontOverwriteAtcWithSameName?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Extended Admin Info.
   * @nullable
   */
  extendedAdminInfo?: DeserializedType<
    DeSerializersT,
    'SAPB1.ExtendedAdminInfo'
  >;
  /**
   * Electronic Report Info.
   * @nullable
   */
  electronicReportInfo?: DeserializedType<
    DeSerializersT,
    'SAPB1.ElectronicReportInfo'
  >;
}

/**
 * AdminInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdminInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AdminInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AdminInfo.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.companyName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.address} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.printingHeader} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printingHeader: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PrintingHeader',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.phoneNumber1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PhoneNumber1', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.phoneNumber2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PhoneNumber2', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.faxNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.eMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('eMail', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.managingDirector} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  managingDirector: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManagingDirector',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.chartofAccountsTemplate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  chartofAccountsTemplate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ChartofAccountsTemplate',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.localCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocalCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.systemCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.creditBalancewithMinusSign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditBalancewithMinusSign: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CreditBalancewithMinusSign',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.standardUnitofLength} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardUnitofLength: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StandardUnitofLength',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.weightUnitDefault} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightUnitDefault: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightUnitDefault',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.directIndirectRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  directIndirectRate: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DirectIndirectRate',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.minimumAmountfor347Report} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountfor347Report: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MinimumAmountfor347Report',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.setItemsWarehouses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setItemsWarehouses: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SetItemsWarehouses',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.bankCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankCountry', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.taxOffice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxOffice', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.deductionFileNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductionFileNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeductionFileNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.taxCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCollection: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxCollection', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.taxDefinition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinition: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaxDefinition', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.taxPercentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPercentage', 'Edm.Double', true);
  /**
   * Representation of the {@link AdminInfo.advancesonCorpIncomeTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  advancesonCorpIncomeTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdvancesonCorpIncomeTax',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.withTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WithTax', 'Edm.Double', true);
  /**
   * Representation of the {@link AdminInfo.withholdingTaxVendorDdct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxVendorDdct: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'WithholdingTaxVendorDdct',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.customersDeductionatSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customersDeductionatSource: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CustomersDeductionatSource',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.withholdingTaxTdctPercnt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxTdctPercnt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholdingTaxTdctPercnt',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.withholdingTaxDdctExpired} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxDdctExpired: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholdingTaxDdctExpired',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link AdminInfo.withholdingTaxDdctOffice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxDdctOffice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholdingTaxDdctOffice',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.commitmentRestriction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commitmentRestriction: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CommitmentRestriction',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.creditRestriction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditRestriction: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CreditRestriction', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.restrictSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  restrictSales: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('RestrictSales', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.restrictDelNotesPo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  restrictDelNotesPo: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RestrictDelNotesPO',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.restrictOrders} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  restrictOrders: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('RestrictOrders', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.considerDelNotesinSalesR} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  considerDelNotesinSalesR: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConsiderDelNotesinSalesR',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.creditDepositType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditDepositType: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CreditDepositType', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.useTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UseTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.splitPo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  splitPo: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SplitPO', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.altNameForApInvoice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForApInvoice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AltNameForApInvoice',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.altNameforCreditMemo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameforCreditMemo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AltNameforCreditMemo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.altNameForGoodsReceipt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForGoodsReceipt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AltNameForGoodsReceipt',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.altNameForGoodsReturn} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForGoodsReturn: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AltNameForGoodsReturn',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.altNameForPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AltNameForPurchase',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.alertTypeforWhStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTypeforWhStock: EnumField<
    EntityT,
    DeSerializersT,
    BoAlertTypeforWhStockEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AlertTypeforWHStock',
    BoAlertTypeforWhStockEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.setCommissionbyCustomer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setCommissionbyCustomer: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SetCommissionbyCustomer',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.setCommissionbyItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setCommissionbyItem: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SetCommissionbyItem',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.setCommissionbySe} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setCommissionbySe: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('SetCommissionbySE', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.defaultCustomerPaymentTerms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultCustomerPaymentTerms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultCustomerPaymentTerms',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultVendorPaymentTerms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultVendorPaymentTerms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultVendorPaymentTerms',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.calculateGrossProfitperTra} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateGrossProfitperTra: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CalculateGrossProfitperTra',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.priceListforCostPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListforCostPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PriceListforCostPrice',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.grossProfitAfterSale} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitAfterSale: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GrossProfitAfterSale',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayPriceforPriceOnly} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayPriceforPriceOnly: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayPriceforPriceOnly',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.calculateTaxinSalesQuotati} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateTaxinSalesQuotati: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CalculateTaxinSalesQuotati',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.baseField} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseField: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('BaseField', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.allowClosedSalesQuotations} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowClosedSalesQuotations: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowClosedSalesQuotations',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.userConversionCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userConversionCode: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UserConversionCode',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.companyColor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyColor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CompanyColor', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.totalsAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalsAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalsAccuracy', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.accuracyofQuantities} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accuracyofQuantities: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccuracyofQuantities',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.priceAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceAccuracy', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.rateAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rateAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RateAccuracy', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.percentageAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentageAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PercentageAccuracy',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.measuringAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measuringAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MeasuringAccuracy',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.queryAccuracy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryAccuracy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('QueryAccuracy', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.addressinForeignLanguage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressinForeignLanguage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AddressinForeignLanguage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultTaxCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.letterHeaderinForeignLangu} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterHeaderinForeignLangu: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LetterHeaderinForeignLangu',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.phoneNumber1ForeignLang} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber1ForeignLang: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PhoneNumber1ForeignLang',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.phoneNumber2ForeignLang} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber2ForeignLang: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PhoneNumber2ForeignLang',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.faxNumberForeignLang} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumberForeignLang: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FaxNumberForeignLang',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.managingDirectorForeignLan} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  managingDirectorForeignLan: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManagingDirectorForeignLan',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.timeTemplate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeTemplate: EnumField<
    EntityT,
    DeSerializersT,
    BoTimeTemplate,
    true,
    false
  > = this._fieldBuilder.buildEnumField('TimeTemplate', BoTimeTemplate, true);
  /**
   * Representation of the {@link AdminInfo.dateTemplate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTemplate: EnumField<
    EntityT,
    DeSerializersT,
    BoDateTemplate,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DateTemplate', BoDateTemplate, true);
  /**
   * Representation of the {@link AdminInfo.dateSeparator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateSeparator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DateSeparator', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.fcCheckAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fcCheckAccount: EnumField<
    EntityT,
    DeSerializersT,
    BoCurrencyCheck,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'FCCheckAccount',
    BoCurrencyCheck,
    true
  );
  /**
   * Representation of the {@link AdminInfo.changedExistingOrders} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedExistingOrders: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ChangedExistingOrders',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.multiCurrencyCheck} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multiCurrencyCheck: EnumField<
    EntityT,
    DeSerializersT,
    BoCurrencyCheck,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MultiCurrencyCheck',
    BoCurrencyCheck,
    true
  );
  /**
   * Representation of the {@link AdminInfo.isrType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ISRType', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.displayRoundingRemark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayRoundingRemark: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayRoundingRemark',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.isrBillerId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrBillerId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ISRBillerID', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.blockSystemCurrencyEditing} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockSystemCurrencyEditing: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockSystemCurrencyEditing',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockPostingDateEditing} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockPostingDateEditing: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockPostingDateEditing',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultWarehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultWarehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultWarehouse',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockTaxDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockTaxDate: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('BlockTaxDate', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.taxDefinitionforVatitem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinitionforVatitem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxDefinitionforVatitem',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.taxDefinitionforVatservice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinitionforVatservice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxDefinitionforVatservice',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.taxGroupforPurchaseItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroupforPurchaseItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxGroupforPurchaseItem',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.taxGroupforServicePurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroupforServicePurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxGroupforServicePurchase',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.calculateBudget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateBudget: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CalculateBudget', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.customerIdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerIdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerIdNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockBudget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockBudget: EnumField<EntityT, DeSerializersT, BoBlockBudget, true, false> =
    this._fieldBuilder.buildEnumField('BlockBudget', BoBlockBudget, true);
  /**
   * Representation of the {@link AdminInfo.budgetAlert} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetAlert: EnumField<EntityT, DeSerializersT, BoBudgetAlert, true, false> =
    this._fieldBuilder.buildEnumField('BudgetAlert', BoBudgetAlert, true);
  /**
   * Representation of the {@link AdminInfo.blockPurchaseOrders} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockPurchaseOrders: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockPurchaseOrders',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockBookkeeping} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockBookkeeping: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('BlockBookkeeping', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.defaultBudgetCostAssessMt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBudgetCostAssessMt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultBudgetCostAssessMt',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.continuousStockManagement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  continuousStockManagement: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ContinuousStockManagement',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.continuousStockSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  continuousStockSystem: EnumField<
    EntityT,
    DeSerializersT,
    BoInventorySystem,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ContinuousStockSystem',
    BoInventorySystem,
    true
  );
  /**
   * Representation of the {@link AdminInfo.roundTaxAmounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundTaxAmounts: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('RoundTaxAmounts', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.blockDelNotesforPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockDelNotesforPurchase: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockDelNotesforPurchase',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.fileNumberinIncomeTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileNumberinIncomeTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FileNumberinIncomeTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.deferredTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deferredTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('DeferredTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.defaultBankNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DefaultBankNo', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.defaultBankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultBankAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultBranch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBranch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DefaultBranch', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.usePaSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usePaSystem: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('UsePASystem', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.serviceCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ServiceCode', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.servicePassword} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  servicePassword: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ServicePassword',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.paramFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paramFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ParamFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.excelFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  excelFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExcelFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.federalTaxId2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID2', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.federalTaxId3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID3', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.decimalSeparator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decimalSeparator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DecimalSeparator',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.thousandsSeparator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thousandsSeparator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ThousandsSeparator',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayCurrencyontheRight} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayCurrencyontheRight: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayCurrencyontheRight',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.alertbyWarehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertbyWarehouse: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('AlertbyWarehouse', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.priceSystem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceSystem: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PriceSystem', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.wholdingTaxDedHierarchy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wholdingTaxDedHierarchy: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'WholdingTaxDedHierarchy',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.docConfirmation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docConfirmation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DocConfirmation', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.defaultforBatchStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultforBatchStatus: EnumField<
    EntityT,
    DeSerializersT,
    BoDefaultBatchStatus,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DefaultforBatchStatus',
    BoDefaultBatchStatus,
    true
  );
  /**
   * Representation of the {@link AdminInfo.glMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glMethod: EnumField<EntityT, DeSerializersT, BoGlMethods, true, false> =
    this._fieldBuilder.buildEnumField('GLMethod', BoGlMethods, true);
  /**
   * Representation of the {@link AdminInfo.uniqueSerialNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uniqueSerialNo: EnumField<
    EntityT,
    DeSerializersT,
    BoUniqueSerialNumber,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UniqueSerialNo',
    BoUniqueSerialNumber,
    true
  );
  /**
   * Representation of the {@link AdminInfo.maxHistory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxHistory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaxHistory', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.changeDefReconApAccounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeDefReconApAccounts: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ChangeDefReconAPAccounts',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.changeDefReconArAccounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeDefReconArAccounts: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ChangeDefReconARAccounts',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.bpTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPTypeCode', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.pbsNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pbsNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PBSNumber', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.pbsGroupNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pbsGroupNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PBSGroupNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.organizationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  organizationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OrganizationNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.accountSegmentsSeparator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountSegmentsSeparator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountSegmentsSeparator',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayBookkeepingWindow} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayBookkeepingWindow: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayBookkeepingWindow',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.sHandleWt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sHandleWt: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SHandleWT', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.sDefaultWtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sDefaultWtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SDefaultWTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.withholdingTaxPHandle} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxPHandle: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholdingTaxPHandle',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.pDefaultWtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pDefaultWtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PDefaultWTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.wtLiableExpense} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtLiableExpense: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('WTLiableExpense', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.useNegativeAmounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useNegativeAmounts: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UseNegativeAmounts',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.holidaysName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  holidaysName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HolidaysName', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.orderBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OrderBlock', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.roundingMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingMethod: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('RoundingMethod', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.adressFromWh} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  adressFromWh: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AdressFromWH', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.orderingParty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderingParty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OrderingParty', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.certificateNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  certificateNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CertificateNo', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.expirationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expirationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpirationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link AdminInfo.nationalInsuranceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nationalInsuranceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NationalInsuranceNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.salesOrderConfirmed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesOrderConfirmed: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SalesOrderConfirmed',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.purchaseOrderConfirmed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOrderConfirmed: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PurchaseOrderConfirmed',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.sDfltItwt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sDfltItwt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SDfltITWT', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.pDfltItwt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pDfltItwt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PDfltITWT', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.defaultAccountCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultAccountCurrency: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DefaultAccountCurrency',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.deferredTaxforVendors} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deferredTaxforVendors: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DeferredTaxforVendors',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.createAutoVatLineinJdt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createAutoVatLineinJdt: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CreateAutoVATLineinJDT',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.consumeForecast} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumeForecast: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ConsumeForecast', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.consumptionMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consumptionMethod: EnumField<
    EntityT,
    DeSerializersT,
    BoConsumptionMethod,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConsumptionMethod',
    BoConsumptionMethod,
    true
  );
  /**
   * Representation of the {@link AdminInfo.daysBackward} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  daysBackward: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DaysBackward', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.daysForward} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  daysForward: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DaysForward', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.defaultDunningTerm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultDunningTerm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultDunningTerm',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultBankAccountKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankAccountKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultBankAccountKey',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.multiLanguageSupportEnable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multiLanguageSupportEnable: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MultiLanguageSupportEnable',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.allowFuturePostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowFuturePostingDate: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowFuturePostingDate',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.additionalIdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalIdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalIdNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.calculateRowDiscount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateRowDiscount: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CalculateRowDiscount',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.bankStatementInstalled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatementInstalled: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BankStatementInstalled',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.uniqueTaxPayerReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uniqueTaxPayerReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UniqueTaxPayerReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.employerReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employerReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EmployerReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.periodStatusAutoChange} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodStatusAutoChange: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PeriodStatusAutoChange',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.periodStatusChangeDelay} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodStatusChangeDelay: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodStatusChangeDelay',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.grossProfitPercentForServiceDocuments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitPercentForServiceDocuments: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossProfitPercentForServiceDocuments',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.xmlFileFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  xmlFileFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'XMLFileFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.pickList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickList: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PickList', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.generalManager} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generalManager: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GeneralManager',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.generalManagerForeignLanguage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generalManagerForeignLanguage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GeneralManagerForeignLanguage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.useProductionProfitAndLossAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useProductionProfitAndLossAccount: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UseProductionProfitAndLossAccount',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.wtAccumAmountAp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAccumAmountAp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WTAccumAmountAP',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.wtAccumAmountAr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAccumAmountAr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WTAccumAmountAR',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.copyExchangeRateInCopyTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyExchangeRateInCopyTo: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyExchangeRateInCopyTo',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsOutboundFolder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsOutboundFolder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GTSOutboundFolder',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsInboundFolder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsInboundFolder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GTSInboundFolder',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsSeparateCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsSeparateCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GTSSeparateCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsDefaultChecker} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsDefaultChecker: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GTSDefaultChecker',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsDefaultPayee} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsDefaultPayee: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GTSDefaultPayee',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.gtsMaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsMaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GTSMaxAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link AdminInfo.gtsResponseToExceeding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsResponseToExceeding: EnumField<
    EntityT,
    DeSerializersT,
    GtsResponseToExceedingEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GTSResponseToExceeding',
    GtsResponseToExceedingEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.applicationOfIfrs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applicationOfIfrs: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ApplicationOfIFRS', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.startingInFiscalYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingInFiscalYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartingInFiscalYear',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.reportAccordingTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportAccordingTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReportAccordingTo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.copyOpenRowsToDelivery} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyOpenRowsToDelivery: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyOpenRowsToDelivery',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableApprovalProcedureInDi} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableApprovalProcedureInDi: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableApprovalProcedureInDI',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableUpdateDocAfterApproval} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableUpdateDocAfterApproval: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableUpdateDocAfterApproval',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableUpdateDraftDuringApproval} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableUpdateDraftDuringApproval: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableUpdateDraftDuringApproval',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableAuthorizerUpdatePendingDraft} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableAuthorizerUpdatePendingDraft: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableAuthorizerUpdatePendingDraft',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.issuePrimarilyBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuePrimarilyBy: EnumField<
    EntityT,
    DeSerializersT,
    IssuePrimarilyByEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'IssuePrimarilyBy',
    IssuePrimarilyByEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.isRemoveUnpricedValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isRemoveUnpricedValue: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'IsRemoveUnpricedValue',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableAdvancedGlAccountDetermination} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableAdvancedGlAccountDetermination: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableAdvancedGLAccountDetermination',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.createOnlineQuotation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createOnlineQuotation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CreateOnlineQuotation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.isPrinterConnected} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isPrinterConnected: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'IsPrinterConnected',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableBranches} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableBranches: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EnableBranches', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.ieMandatoryValidation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ieMandatoryValidation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'IEMandatoryValidation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enablePaymentDueDates} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enablePaymentDueDates: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnablePaymentDueDates',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.maximumNumberOfDaysForDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumNumberOfDaysForDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaximumNumberOfDaysForDueDate',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.aliasName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aliasName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AliasName', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.enableCentralizedIncomingPayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableCentralizedIncomingPayments: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableCentralizedIncomingPayments',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableCentralizedOutgoingPayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableCentralizedOutgoingPayments: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableCentralizedOutgoingPayments',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.taxRateDetermination} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRateDetermination: EnumField<
    EntityT,
    DeSerializersT,
    TaxRateDeterminationEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TaxRateDetermination',
    TaxRateDeterminationEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.boletoFolderPath} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boletoFolderPath: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BoletoFolderPath',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.allowMultipleBaOnSamePeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowMultipleBaOnSamePeriod: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowMultipleBAOnSamePeriod',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockMultipleBaOnSameApDocument} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockMultipleBaOnSameApDocument: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockMultipleBAOnSameAPDocument',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockMultipleBaOnSameArDocument} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockMultipleBaOnSameArDocument: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockMultipleBAOnSameARDocument',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayCancelDocInReport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayCancelDocInReport: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayCancelDocInReport',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.maxDaysForCancel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxDaysForCancel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaxDaysForCancel',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.reuseDocumentNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reuseDocumentNum: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ReuseDocumentNum', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.reuseNotaFiscalNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reuseNotaFiscalNum: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReuseNotaFiscalNum',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.autoAddUoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAddUoM: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AutoAddUoM', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.autoAddPackage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAddPackage: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AutoAddPackage', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.displayInactivePriceListInReports} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayInactivePriceListInReports: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayInactivePriceListInReports',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayInactivePriceListInDocuments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayInactivePriceListInDocuments: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayInactivePriceListInDocuments',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayInactivePriceListInSettings} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayInactivePriceListInSettings: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayInactivePriceListInSettings',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.applyBaseInactiveStatusToSpecialPrices} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applyBaseInactiveStatusToSpecialPrices: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ApplyBaseInactiveStatusToSpecialPrices',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.applyBaseInactiveStatusToPeriodVolumeDiscounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applyBaseInactiveStatusToPeriodVolumeDiscounts: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ApplyBaseInactiveStatusToPeriodVolumeDiscounts',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.applyBaseInactiveStatusToPriceLists} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applyBaseInactiveStatusToPriceLists: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ApplyBaseInactiveStatusToPriceLists',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.priceProceedMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceProceedMethod: EnumField<
    EntityT,
    DeSerializersT,
    PriceProceedMethodEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PriceProceedMethod',
    PriceProceedMethodEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.removeUpdatePricesBasedOnNonStandardPriceLists} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  removeUpdatePricesBasedOnNonStandardPriceLists: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RemoveUpdatePricesBasedOnNonStandardPriceLists',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.sirenNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sirenNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SirenNo', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.institutionCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  institutionCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InstitutionCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.setResourcesWarehouses} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setResourcesWarehouses: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SetResourcesWarehouses',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.blockStockNegativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockStockNegativeQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BlockStockNegativeQuantity',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.useParentWipInComponents} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useParentWipInComponents: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UseParentWIPInComponents',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableUpdateBaPriceAndPlannedAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableUpdateBaPriceAndPlannedAmount: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableUpdateBAPriceAndPlannedAmount',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.autoAssignOnlyValidApba} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAssignOnlyValidApba: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutoAssignOnlyValidAPBA',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.autoAssignOnlyValidArba} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAssignOnlyValidArba: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutoAssignOnlyValidARBA',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.actionWhenDeviateFromBaForPo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionWhenDeviateFromBaForPo: EnumField<
    EntityT,
    DeSerializersT,
    BaDivationAlertLevelEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ActionWhenDeviateFromBAForPO',
    BaDivationAlertLevelEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.actionWhenDeviateFromBaForGrpo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionWhenDeviateFromBaForGrpo: EnumField<
    EntityT,
    DeSerializersT,
    BaDivationAlertLevelEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ActionWhenDeviateFromBAForGRPO',
    BaDivationAlertLevelEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.actionWhenDeviateFromBaForAccounting} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionWhenDeviateFromBaForAccounting: EnumField<
    EntityT,
    DeSerializersT,
    BaDivationAlertLevelEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ActionWhenDeviateFromBAForAccounting',
    BaDivationAlertLevelEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true);
  /**
   * Representation of the {@link AdminInfo.account} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  account: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Account', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.enableMultipleSchedulings} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableMultipleSchedulings: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EnableMultipleSchedulings',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.displayBatchQtyUoMBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayBatchQtyUoMBy: EnumField<
    EntityT,
    DeSerializersT,
    DisplayBatchQtyUoMByEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayBatchQtyUoMBy',
    DisplayBatchQtyUoMByEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.allowInBoundPostingWithZeroPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowInBoundPostingWithZeroPrice: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowInBoundPostingWithZeroPrice',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.inventoryPostingHighlightVariance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingHighlightVariance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryPostingHighlightVariance',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.inventoryPostingReleaseOnlySerialAndBatch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingReleaseOnlySerialAndBatch: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'InventoryPostingReleaseOnlySerialAndBatch',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.inventoryCountingHighlightVariance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightVariance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryCountingHighlightVariance',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.inventoryCountingHighlightMaxVariance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightMaxVariance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryCountingHighlightMaxVariance',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.inventoryCountingHighlightCountersDifference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightCountersDifference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryCountingHighlightCountersDifference',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AdminInfo.copySingleCounterToIndividualCounter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copySingleCounterToIndividualCounter: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopySingleCounterToIndividualCounter',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.closeCountedRowsWithZeroDifference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closeCountedRowsWithZeroDifference: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CloseCountedRowsWithZeroDifference',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.closeCountedRowsWithoutConfirmation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closeCountedRowsWithoutConfirmation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CloseCountedRowsWithoutConfirmation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.calculateInWhseQtyBasedOnPostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateInWhseQtyBasedOnPostingDate: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CalculateInWhseQtyBasedOnPostingDate',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.refreshInWhseQtyInDi} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refreshInWhseQtyInDi: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RefreshInWhseQtyInDI',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.sepaCreditorId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sepaCreditorId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SEPACreditorID',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AdminInfo.dataOwnershipManageBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataOwnershipManageBy: EnumField<
    EntityT,
    DeSerializersT,
    BoDataOwnershipManageMethodEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DataOwnershipManageBy',
    BoDataOwnershipManageMethodEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.allowBpWithNoOwner} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowBpWithNoOwner: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowBPWithNoOwner',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableSeparatePriceMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSeparatePriceMode: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableSeparatePriceMode',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.enableExternalTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableExternalTax: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('EnableExternalTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.numberOfCharInMonth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfCharInMonth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NumberOfCharInMonth',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.salesLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesLnWTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SalesLnWTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.salesPostPaymentCategoryLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesPostPaymentCategoryLnWTax: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SalesPostPaymentCategoryLnWTax',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.salesApplyExhRatesLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesApplyExhRatesLnWTax: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SalesApplyExhRatesLnWTax',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.purchaseLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseLnWTax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PurchaseLnWTax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AdminInfo.purchasePostPaymentCategoryLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchasePostPaymentCategoryLnWTax: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PurchasePostPaymentCategoryLnWTax',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.purchaseApplyExhRatesLnWTaxWx} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseApplyExhRatesLnWTaxWx: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PurchaseApplyExhRatesLnWTaxWX',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.useDefaultPriceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useDefaultPriceList: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'UseDefaultPriceList',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultCustomerPriceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultCustomerPriceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultCustomerPriceList',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.defaultVendorPriceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultVendorPriceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultVendorPriceList',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link AdminInfo.eoriNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eoriNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EORINumber', 'Edm.String', true);
  /**
   * Representation of the {@link AdminInfo.copyAttachmentsFromBaseToTarget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyAttachmentsFromBaseToTarget: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyAttachmentsFromBaseToTarget',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.copyAttachmentsFromBom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyAttachmentsFromBom: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyAttachmentsFromBOM',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.dontOverwriteAtcWithSameName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dontOverwriteAtcWithSameName: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DontOverwriteAtcWithSameName',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link AdminInfo.extendedAdminInfo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extendedAdminInfo: ExtendedAdminInfoField<
    EntityT,
    DeSerializersT,
    true,
    false
  > = this._fieldBuilder.buildComplexTypeField(
    'ExtendedAdminInfo',
    ExtendedAdminInfoField,
    true
  );
  /**
   * Representation of the {@link AdminInfo.electronicReportInfo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicReportInfo: ElectronicReportInfoField<
    EntityT,
    DeSerializersT,
    true,
    false
  > = this._fieldBuilder.buildComplexTypeField(
    'ElectronicReportInfo',
    ElectronicReportInfoField,
    true
  );

  /**
   * Creates an instance of AdminInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AdminInfo, fieldOptions);
  }
}

export namespace AdminInfo {
  /**
   * Metadata information on all properties of the `AdminInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AdminInfo>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CompanyName',
      name: 'companyName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address',
      name: 'address',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Country',
      name: 'country',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PrintingHeader',
      name: 'printingHeader',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PhoneNumber1',
      name: 'phoneNumber1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PhoneNumber2',
      name: 'phoneNumber2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FaxNumber',
      name: 'faxNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'eMail',
      name: 'eMail',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ManagingDirector',
      name: 'managingDirector',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChartofAccountsTemplate',
      name: 'chartofAccountsTemplate',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LocalCurrency',
      name: 'localCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemCurrency',
      name: 'systemCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditBalancewithMinusSign',
      name: 'creditBalancewithMinusSign',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StandardUnitofLength',
      name: 'standardUnitofLength',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WeightUnitDefault',
      name: 'weightUnitDefault',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DirectIndirectRate',
      name: 'directIndirectRate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MinimumAmountfor347Report',
      name: 'minimumAmountfor347Report',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SetItemsWarehouses',
      name: 'setItemsWarehouses',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BankCountry',
      name: 'bankCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FederalTaxID',
      name: 'federalTaxId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxOffice',
      name: 'taxOffice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeductionFileNo',
      name: 'deductionFileNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxCollection',
      name: 'taxCollection',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxDefinition',
      name: 'taxDefinition',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxPercentage',
      name: 'taxPercentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdvancesonCorpIncomeTax',
      name: 'advancesonCorpIncomeTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithTax',
      name: 'withTax',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithholdingTaxVendorDdct',
      name: 'withholdingTaxVendorDdct',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CustomersDeductionatSource',
      name: 'customersDeductionatSource',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WithholdingTaxTdctPercnt',
      name: 'withholdingTaxTdctPercnt',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithholdingTaxDdctExpired',
      name: 'withholdingTaxDdctExpired',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'WithholdingTaxDdctOffice',
      name: 'withholdingTaxDdctOffice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CommitmentRestriction',
      name: 'commitmentRestriction',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreditRestriction',
      name: 'creditRestriction',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RestrictSales',
      name: 'restrictSales',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RestrictDelNotesPO',
      name: 'restrictDelNotesPo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RestrictOrders',
      name: 'restrictOrders',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ConsiderDelNotesinSalesR',
      name: 'considerDelNotesinSalesR',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreditDepositType',
      name: 'creditDepositType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UseTax',
      name: 'useTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SplitPO',
      name: 'splitPo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AltNameForApInvoice',
      name: 'altNameForApInvoice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AltNameforCreditMemo',
      name: 'altNameforCreditMemo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AltNameForGoodsReceipt',
      name: 'altNameForGoodsReceipt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AltNameForGoodsReturn',
      name: 'altNameForGoodsReturn',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AltNameForPurchase',
      name: 'altNameForPurchase',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AlertTypeforWHStock',
      name: 'alertTypeforWhStock',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SetCommissionbyCustomer',
      name: 'setCommissionbyCustomer',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SetCommissionbyItem',
      name: 'setCommissionbyItem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SetCommissionbySE',
      name: 'setCommissionbySe',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultCustomerPaymentTerms',
      name: 'defaultCustomerPaymentTerms',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DefaultVendorPaymentTerms',
      name: 'defaultVendorPaymentTerms',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CalculateGrossProfitperTra',
      name: 'calculateGrossProfitperTra',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PriceListforCostPrice',
      name: 'priceListforCostPrice',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GrossProfitAfterSale',
      name: 'grossProfitAfterSale',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayPriceforPriceOnly',
      name: 'displayPriceforPriceOnly',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CalculateTaxinSalesQuotati',
      name: 'calculateTaxinSalesQuotati',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseField',
      name: 'baseField',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowClosedSalesQuotations',
      name: 'allowClosedSalesQuotations',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UserConversionCode',
      name: 'userConversionCode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CompanyColor',
      name: 'companyColor',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TotalsAccuracy',
      name: 'totalsAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccuracyofQuantities',
      name: 'accuracyofQuantities',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PriceAccuracy',
      name: 'priceAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RateAccuracy',
      name: 'rateAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PercentageAccuracy',
      name: 'percentageAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MeasuringAccuracy',
      name: 'measuringAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'QueryAccuracy',
      name: 'queryAccuracy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AddressinForeignLanguage',
      name: 'addressinForeignLanguage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultTaxCode',
      name: 'defaultTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LetterHeaderinForeignLangu',
      name: 'letterHeaderinForeignLangu',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PhoneNumber1ForeignLang',
      name: 'phoneNumber1ForeignLang',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PhoneNumber2ForeignLang',
      name: 'phoneNumber2ForeignLang',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FaxNumberForeignLang',
      name: 'faxNumberForeignLang',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ManagingDirectorForeignLan',
      name: 'managingDirectorForeignLan',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TimeTemplate',
      name: 'timeTemplate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DateTemplate',
      name: 'dateTemplate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DateSeparator',
      name: 'dateSeparator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FCCheckAccount',
      name: 'fcCheckAccount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ChangedExistingOrders',
      name: 'changedExistingOrders',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MultiCurrencyCheck',
      name: 'multiCurrencyCheck',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ISRType',
      name: 'isrType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DisplayRoundingRemark',
      name: 'displayRoundingRemark',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ISRBillerID',
      name: 'isrBillerId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockSystemCurrencyEditing',
      name: 'blockSystemCurrencyEditing',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockPostingDateEditing',
      name: 'blockPostingDateEditing',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultWarehouse',
      name: 'defaultWarehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockTaxDate',
      name: 'blockTaxDate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxDefinitionforVatitem',
      name: 'taxDefinitionforVatitem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxDefinitionforVatservice',
      name: 'taxDefinitionforVatservice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxGroupforPurchaseItem',
      name: 'taxGroupforPurchaseItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxGroupforServicePurchase',
      name: 'taxGroupforServicePurchase',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CalculateBudget',
      name: 'calculateBudget',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CustomerIdNumber',
      name: 'customerIdNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockBudget',
      name: 'blockBudget',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BudgetAlert',
      name: 'budgetAlert',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockPurchaseOrders',
      name: 'blockPurchaseOrders',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockBookkeeping',
      name: 'blockBookkeeping',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultBudgetCostAssessMt',
      name: 'defaultBudgetCostAssessMt',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ContinuousStockManagement',
      name: 'continuousStockManagement',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ContinuousStockSystem',
      name: 'continuousStockSystem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RoundTaxAmounts',
      name: 'roundTaxAmounts',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockDelNotesforPurchase',
      name: 'blockDelNotesforPurchase',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FileNumberinIncomeTax',
      name: 'fileNumberinIncomeTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeferredTax',
      name: 'deferredTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultBankNo',
      name: 'defaultBankNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultBankAccount',
      name: 'defaultBankAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultBranch',
      name: 'defaultBranch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UsePASystem',
      name: 'usePaSystem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ServiceCode',
      name: 'serviceCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ServicePassword',
      name: 'servicePassword',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ParamFolderPath',
      name: 'paramFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExcelFolderPath',
      name: 'excelFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FederalTaxID2',
      name: 'federalTaxId2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FederalTaxID3',
      name: 'federalTaxId3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DecimalSeparator',
      name: 'decimalSeparator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ThousandsSeparator',
      name: 'thousandsSeparator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayCurrencyontheRight',
      name: 'displayCurrencyontheRight',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AlertbyWarehouse',
      name: 'alertbyWarehouse',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PriceSystem',
      name: 'priceSystem',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WholdingTaxDedHierarchy',
      name: 'wholdingTaxDedHierarchy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocConfirmation',
      name: 'docConfirmation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultforBatchStatus',
      name: 'defaultforBatchStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GLMethod',
      name: 'glMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UniqueSerialNo',
      name: 'uniqueSerialNo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MaxHistory',
      name: 'maxHistory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ChangeDefReconAPAccounts',
      name: 'changeDefReconApAccounts',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ChangeDefReconARAccounts',
      name: 'changeDefReconArAccounts',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BPTypeCode',
      name: 'bpTypeCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PBSNumber',
      name: 'pbsNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PBSGroupNumber',
      name: 'pbsGroupNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OrganizationNumber',
      name: 'organizationNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountSegmentsSeparator',
      name: 'accountSegmentsSeparator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayBookkeepingWindow',
      name: 'displayBookkeepingWindow',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SHandleWT',
      name: 'sHandleWt',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SDefaultWTCode',
      name: 'sDefaultWtCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WithholdingTaxPHandle',
      name: 'withholdingTaxPHandle',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PDefaultWTCode',
      name: 'pDefaultWtCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WTLiableExpense',
      name: 'wtLiableExpense',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UseNegativeAmounts',
      name: 'useNegativeAmounts',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'HolidaysName',
      name: 'holidaysName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OrderBlock',
      name: 'orderBlock',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RoundingMethod',
      name: 'roundingMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AdressFromWH',
      name: 'adressFromWh',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OrderingParty',
      name: 'orderingParty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CertificateNo',
      name: 'certificateNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpirationDate',
      name: 'expirationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'NationalInsuranceNo',
      name: 'nationalInsuranceNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesOrderConfirmed',
      name: 'salesOrderConfirmed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PurchaseOrderConfirmed',
      name: 'purchaseOrderConfirmed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SDfltITWT',
      name: 'sDfltItwt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PDfltITWT',
      name: 'pDfltItwt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultAccountCurrency',
      name: 'defaultAccountCurrency',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DeferredTaxforVendors',
      name: 'deferredTaxforVendors',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreateAutoVATLineinJDT',
      name: 'createAutoVatLineinJdt',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ConsumeForecast',
      name: 'consumeForecast',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ConsumptionMethod',
      name: 'consumptionMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DaysBackward',
      name: 'daysBackward',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DaysForward',
      name: 'daysForward',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DefaultDunningTerm',
      name: 'defaultDunningTerm',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultBankAccountKey',
      name: 'defaultBankAccountKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MultiLanguageSupportEnable',
      name: 'multiLanguageSupportEnable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowFuturePostingDate',
      name: 'allowFuturePostingDate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AdditionalIdNumber',
      name: 'additionalIdNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'State',
      name: 'state',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CalculateRowDiscount',
      name: 'calculateRowDiscount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BankStatementInstalled',
      name: 'bankStatementInstalled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UniqueTaxPayerReference',
      name: 'uniqueTaxPayerReference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EmployerReference',
      name: 'employerReference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PeriodStatusAutoChange',
      name: 'periodStatusAutoChange',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PeriodStatusChangeDelay',
      name: 'periodStatusChangeDelay',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GrossProfitPercentForServiceDocuments',
      name: 'grossProfitPercentForServiceDocuments',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'XMLFileFolderPath',
      name: 'xmlFileFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PickList',
      name: 'pickList',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GeneralManager',
      name: 'generalManager',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GeneralManagerForeignLanguage',
      name: 'generalManagerForeignLanguage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseProductionProfitAndLossAccount',
      name: 'useProductionProfitAndLossAccount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WTAccumAmountAP',
      name: 'wtAccumAmountAp',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WTAccumAmountAR',
      name: 'wtAccumAmountAr',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CopyExchangeRateInCopyTo',
      name: 'copyExchangeRateInCopyTo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GTSOutboundFolder',
      name: 'gtsOutboundFolder',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GTSInboundFolder',
      name: 'gtsInboundFolder',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GTSSeparateCode',
      name: 'gtsSeparateCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GTSDefaultChecker',
      name: 'gtsDefaultChecker',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GTSDefaultPayee',
      name: 'gtsDefaultPayee',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GTSMaxAmount',
      name: 'gtsMaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GTSResponseToExceeding',
      name: 'gtsResponseToExceeding',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ApplicationOfIFRS',
      name: 'applicationOfIfrs',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StartingInFiscalYear',
      name: 'startingInFiscalYear',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReportAccordingTo',
      name: 'reportAccordingTo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CopyOpenRowsToDelivery',
      name: 'copyOpenRowsToDelivery',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableApprovalProcedureInDI',
      name: 'enableApprovalProcedureInDi',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableUpdateDocAfterApproval',
      name: 'enableUpdateDocAfterApproval',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableUpdateDraftDuringApproval',
      name: 'enableUpdateDraftDuringApproval',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableAuthorizerUpdatePendingDraft',
      name: 'enableAuthorizerUpdatePendingDraft',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IssuePrimarilyBy',
      name: 'issuePrimarilyBy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsRemoveUnpricedValue',
      name: 'isRemoveUnpricedValue',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableAdvancedGLAccountDetermination',
      name: 'enableAdvancedGlAccountDetermination',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreateOnlineQuotation',
      name: 'createOnlineQuotation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsPrinterConnected',
      name: 'isPrinterConnected',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableBranches',
      name: 'enableBranches',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IEMandatoryValidation',
      name: 'ieMandatoryValidation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnablePaymentDueDates',
      name: 'enablePaymentDueDates',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MaximumNumberOfDaysForDueDate',
      name: 'maximumNumberOfDaysForDueDate',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AliasName',
      name: 'aliasName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EnableCentralizedIncomingPayments',
      name: 'enableCentralizedIncomingPayments',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableCentralizedOutgoingPayments',
      name: 'enableCentralizedOutgoingPayments',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxRateDetermination',
      name: 'taxRateDetermination',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BoletoFolderPath',
      name: 'boletoFolderPath',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AllowMultipleBAOnSamePeriod',
      name: 'allowMultipleBaOnSamePeriod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockMultipleBAOnSameAPDocument',
      name: 'blockMultipleBaOnSameApDocument',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockMultipleBAOnSameARDocument',
      name: 'blockMultipleBaOnSameArDocument',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayCancelDocInReport',
      name: 'displayCancelDocInReport',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MaxDaysForCancel',
      name: 'maxDaysForCancel',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReuseDocumentNum',
      name: 'reuseDocumentNum',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReuseNotaFiscalNum',
      name: 'reuseNotaFiscalNum',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoAddUoM',
      name: 'autoAddUoM',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoAddPackage',
      name: 'autoAddPackage',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayInactivePriceListInReports',
      name: 'displayInactivePriceListInReports',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayInactivePriceListInDocuments',
      name: 'displayInactivePriceListInDocuments',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayInactivePriceListInSettings',
      name: 'displayInactivePriceListInSettings',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ApplyBaseInactiveStatusToSpecialPrices',
      name: 'applyBaseInactiveStatusToSpecialPrices',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ApplyBaseInactiveStatusToPeriodVolumeDiscounts',
      name: 'applyBaseInactiveStatusToPeriodVolumeDiscounts',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ApplyBaseInactiveStatusToPriceLists',
      name: 'applyBaseInactiveStatusToPriceLists',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PriceProceedMethod',
      name: 'priceProceedMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RemoveUpdatePricesBasedOnNonStandardPriceLists',
      name: 'removeUpdatePricesBasedOnNonStandardPriceLists',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SirenNo',
      name: 'sirenNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InstitutionCode',
      name: 'institutionCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SetResourcesWarehouses',
      name: 'setResourcesWarehouses',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockStockNegativeQuantity',
      name: 'blockStockNegativeQuantity',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UseParentWIPInComponents',
      name: 'useParentWipInComponents',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableUpdateBAPriceAndPlannedAmount',
      name: 'enableUpdateBaPriceAndPlannedAmount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoAssignOnlyValidAPBA',
      name: 'autoAssignOnlyValidApba',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoAssignOnlyValidARBA',
      name: 'autoAssignOnlyValidArba',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActionWhenDeviateFromBAForPO',
      name: 'actionWhenDeviateFromBaForPo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActionWhenDeviateFromBAForGRPO',
      name: 'actionWhenDeviateFromBaForGrpo',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActionWhenDeviateFromBAForAccounting',
      name: 'actionWhenDeviateFromBaForAccounting',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Series',
      name: 'series',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Account',
      name: 'account',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EnableMultipleSchedulings',
      name: 'enableMultipleSchedulings',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayBatchQtyUoMBy',
      name: 'displayBatchQtyUoMBy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowInBoundPostingWithZeroPrice',
      name: 'allowInBoundPostingWithZeroPrice',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InventoryPostingHighlightVariance',
      name: 'inventoryPostingHighlightVariance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryPostingReleaseOnlySerialAndBatch',
      name: 'inventoryPostingReleaseOnlySerialAndBatch',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InventoryCountingHighlightVariance',
      name: 'inventoryCountingHighlightVariance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryCountingHighlightMaxVariance',
      name: 'inventoryCountingHighlightMaxVariance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryCountingHighlightCountersDifference',
      name: 'inventoryCountingHighlightCountersDifference',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CopySingleCounterToIndividualCounter',
      name: 'copySingleCounterToIndividualCounter',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CloseCountedRowsWithZeroDifference',
      name: 'closeCountedRowsWithZeroDifference',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CloseCountedRowsWithoutConfirmation',
      name: 'closeCountedRowsWithoutConfirmation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CalculateInWhseQtyBasedOnPostingDate',
      name: 'calculateInWhseQtyBasedOnPostingDate',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RefreshInWhseQtyInDI',
      name: 'refreshInWhseQtyInDi',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SEPACreditorID',
      name: 'sepaCreditorId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DataOwnershipManageBy',
      name: 'dataOwnershipManageBy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowBPWithNoOwner',
      name: 'allowBpWithNoOwner',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableSeparatePriceMode',
      name: 'enableSeparatePriceMode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableExternalTax',
      name: 'enableExternalTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NumberOfCharInMonth',
      name: 'numberOfCharInMonth',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SalesLnWTax',
      name: 'salesLnWTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SalesPostPaymentCategoryLnWTax',
      name: 'salesPostPaymentCategoryLnWTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SalesApplyExhRatesLnWTax',
      name: 'salesApplyExhRatesLnWTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PurchaseLnWTax',
      name: 'purchaseLnWTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PurchasePostPaymentCategoryLnWTax',
      name: 'purchasePostPaymentCategoryLnWTax',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PurchaseApplyExhRatesLnWTaxWX',
      name: 'purchaseApplyExhRatesLnWTaxWx',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UseDefaultPriceList',
      name: 'useDefaultPriceList',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultCustomerPriceList',
      name: 'defaultCustomerPriceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DefaultVendorPriceList',
      name: 'defaultVendorPriceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EORINumber',
      name: 'eoriNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CopyAttachmentsFromBaseToTarget',
      name: 'copyAttachmentsFromBaseToTarget',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CopyAttachmentsFromBOM',
      name: 'copyAttachmentsFromBom',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DontOverwriteAtcWithSameName',
      name: 'dontOverwriteAtcWithSameName',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ExtendedAdminInfo',
      name: 'extendedAdminInfo',
      type: ExtendedAdminInfo,
      isCollection: false
    },
    {
      originalName: 'ElectronicReportInfo',
      name: 'electronicReportInfo',
      type: ElectronicReportInfo,
      isCollection: false
    }
  ];
}
