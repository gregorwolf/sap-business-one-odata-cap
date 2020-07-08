/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ExtendedAdminInfo, ExtendedAdminInfoField } from './ExtendedAdminInfo';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createAdminInfo(json: any): AdminInfo {
  return AdminInfo.build(json);
}

/**
 * AdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdminInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AdminInfo.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.companyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CompanyName', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.printingHeader]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printingHeader: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrintingHeader', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.phoneNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PhoneNumber1', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.phoneNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PhoneNumber2', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FaxNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.eMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('eMail', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.managingDirector]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  managingDirector: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManagingDirector', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.chartofAccountsTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  chartofAccountsTemplate: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ChartofAccountsTemplate', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.localCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LocalCurrency', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.systemCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SystemCurrency', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.standardUnitofLength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardUnitofLength: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StandardUnitofLength', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.weightUnitDefault]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightUnitDefault: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WeightUnitDefault', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.minimumAmountfor347Report]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimumAmountfor347Report: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimumAmountfor347Report', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCountry', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxOffice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxOffice', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.deductionFileNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductionFileNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DeductionFileNo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxPercentage', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.advancesonCorpIncomeTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  advancesonCorpIncomeTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdvancesonCorpIncomeTax', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.withTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WithTax', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.withholdingTaxTdctPercnt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxTdctPercnt: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WithholdingTaxTdctPercnt', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.withholdingTaxDdctExpired]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxDdctExpired: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WithholdingTaxDdctExpired', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[AdminInfo.withholdingTaxDdctOffice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxDdctOffice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingTaxDdctOffice', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.altNameForApInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForApInvoice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AltNameForApInvoice', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.altNameforCreditMemo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameforCreditMemo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AltNameforCreditMemo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.altNameForGoodsReceipt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForGoodsReceipt: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AltNameForGoodsReceipt', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.altNameForGoodsReturn]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForGoodsReturn: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AltNameForGoodsReturn', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.altNameForPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNameForPurchase: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AltNameForPurchase', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultCustomerPaymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultCustomerPaymentTerms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultCustomerPaymentTerms', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.defaultVendorPaymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultVendorPaymentTerms: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultVendorPaymentTerms', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.priceListforCostPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListforCostPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListforCostPrice', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.companyColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyColor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CompanyColor', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.totalsAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalsAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalsAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.accuracyofQuantities]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accuracyofQuantities: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccuracyofQuantities', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.priceAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.rateAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rateAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RateAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.percentageAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentageAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PercentageAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.measuringAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measuringAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MeasuringAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.queryAccuracy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryAccuracy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('QueryAccuracy', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.addressinForeignLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressinForeignLanguage: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressinForeignLanguage', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.letterHeaderinForeignLangu]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  letterHeaderinForeignLangu: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LetterHeaderinForeignLangu', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.phoneNumber1ForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber1ForeignLang: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PhoneNumber1ForeignLang', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.phoneNumber2ForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumber2ForeignLang: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PhoneNumber2ForeignLang', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.faxNumberForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumberForeignLang: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FaxNumberForeignLang', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.managingDirectorForeignLan]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  managingDirectorForeignLan: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManagingDirectorForeignLan', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.dateSeparator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateSeparator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DateSeparator', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.isrType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ISRType', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.isrBillerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrBillerId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ISRBillerID', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultWarehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultWarehouse', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxDefinitionforVatitem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinitionforVatitem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxDefinitionforVatitem', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxDefinitionforVatservice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinitionforVatservice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxDefinitionforVatservice', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxGroupforPurchaseItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroupforPurchaseItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxGroupforPurchaseItem', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.taxGroupforServicePurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroupforServicePurchase: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxGroupforServicePurchase', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.customerIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerIdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerIdNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultBudgetCostAssessMt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBudgetCostAssessMt: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultBudgetCostAssessMt', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.fileNumberinIncomeTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileNumberinIncomeTax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileNumberinIncomeTax', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultBankNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultBankNo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultBankAccount', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultBranch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBranch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultBranch', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.serviceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServiceCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.servicePassword]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  servicePassword: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServicePassword', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.paramFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paramFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ParamFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.excelFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  excelFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExcelFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.federalTaxId2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID2', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.federalTaxId3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID3', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.decimalSeparator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decimalSeparator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DecimalSeparator', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.thousandsSeparator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thousandsSeparator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ThousandsSeparator', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.maxHistory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxHistory: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxHistory', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.bpTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpTypeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPTypeCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.pbsNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pbsNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PBSNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.pbsGroupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pbsGroupNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PBSGroupNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.organizationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  organizationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OrganizationNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.accountSegmentsSeparator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountSegmentsSeparator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountSegmentsSeparator', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.sDefaultWtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sDefaultWtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SDefaultWTCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.withholdingTaxPHandle]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxPHandle: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingTaxPHandle', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.pDefaultWtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pDefaultWtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PDefaultWTCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.holidaysName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  holidaysName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('HolidaysName', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.orderBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderBlock: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OrderBlock', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.orderingParty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderingParty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OrderingParty', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.certificateNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  certificateNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CertificateNo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expirationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpirationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[AdminInfo.nationalInsuranceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nationalInsuranceNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NationalInsuranceNo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.sDfltItwt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sDfltItwt: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SDfltITWT', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.pDfltItwt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pDfltItwt: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PDfltITWT', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.daysBackward]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  daysBackward: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DaysBackward', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.daysForward]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  daysForward: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DaysForward', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.defaultDunningTerm]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultDunningTerm: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultDunningTerm', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.defaultBankAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBankAccountKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultBankAccountKey', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.additionalIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalIdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalIdNumber', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.uniqueTaxPayerReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uniqueTaxPayerReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UniqueTaxPayerReference', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.employerReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employerReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmployerReference', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.periodStatusChangeDelay]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodStatusChangeDelay: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PeriodStatusChangeDelay', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.grossProfitPercentForServiceDocuments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossProfitPercentForServiceDocuments: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossProfitPercentForServiceDocuments', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.xmlFileFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  xmlFileFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('XMLFileFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.generalManager]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generalManager: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GeneralManager', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.generalManagerForeignLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generalManagerForeignLanguage: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GeneralManagerForeignLanguage', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.wtAccumAmountAp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAccumAmountAp: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAccumAmountAP', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.wtAccumAmountAr]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAccumAmountAr: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAccumAmountAR', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.gtsOutboundFolder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsOutboundFolder: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GTSOutboundFolder', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.gtsInboundFolder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsInboundFolder: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GTSInboundFolder', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.gtsSeparateCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsSeparateCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GTSSeparateCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.gtsDefaultChecker]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsDefaultChecker: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GTSDefaultChecker', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.gtsDefaultPayee]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsDefaultPayee: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GTSDefaultPayee', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.gtsMaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gtsMaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GTSMaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.startingInFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingInFiscalYear: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StartingInFiscalYear', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.reportAccordingTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportAccordingTo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReportAccordingTo', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.maximumNumberOfDaysForDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumNumberOfDaysForDueDate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximumNumberOfDaysForDueDate', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.aliasName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aliasName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AliasName', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.boletoFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boletoFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BoletoFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.maxDaysForCancel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxDaysForCancel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxDaysForCancel', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.sirenNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sirenNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SirenNo', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.institutionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  institutionCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InstitutionCode', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[AdminInfo.account]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  account: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Account', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.enableMultipleSchedulings]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableMultipleSchedulings: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EnableMultipleSchedulings', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.inventoryPostingHighlightVariance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingHighlightVariance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryPostingHighlightVariance', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.inventoryCountingHighlightVariance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightVariance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryCountingHighlightVariance', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.inventoryCountingHighlightMaxVariance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightMaxVariance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryCountingHighlightMaxVariance', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.inventoryCountingHighlightCountersDifference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingHighlightCountersDifference: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryCountingHighlightCountersDifference', this, 'Edm.Double');
  /**
   * Representation of the [[AdminInfo.sepaCreditorId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sepaCreditorId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SEPACreditorID', this, 'Edm.String');
  /**
   * Representation of the [[AdminInfo.extendedAdminInfo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extendedAdminInfo: ExtendedAdminInfoField<EntityT> = new ExtendedAdminInfoField('ExtendedAdminInfo', this);
}

export namespace AdminInfo {
  export function build(json: { [keys: string]: FieldType | ExtendedAdminInfo }): AdminInfo {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      CompanyName: (companyName: string) => ({ companyName: edmToTs(companyName, 'Edm.String') }),
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      PrintingHeader: (printingHeader: string) => ({ printingHeader: edmToTs(printingHeader, 'Edm.String') }),
      PhoneNumber1: (phoneNumber1: string) => ({ phoneNumber1: edmToTs(phoneNumber1, 'Edm.String') }),
      PhoneNumber2: (phoneNumber2: string) => ({ phoneNumber2: edmToTs(phoneNumber2, 'Edm.String') }),
      FaxNumber: (faxNumber: string) => ({ faxNumber: edmToTs(faxNumber, 'Edm.String') }),
      eMail: (eMail: string) => ({ eMail: edmToTs(eMail, 'Edm.String') }),
      ManagingDirector: (managingDirector: string) => ({ managingDirector: edmToTs(managingDirector, 'Edm.String') }),
      ChartofAccountsTemplate: (chartofAccountsTemplate: string) => ({ chartofAccountsTemplate: edmToTs(chartofAccountsTemplate, 'Edm.String') }),
      LocalCurrency: (localCurrency: string) => ({ localCurrency: edmToTs(localCurrency, 'Edm.String') }),
      SystemCurrency: (systemCurrency: string) => ({ systemCurrency: edmToTs(systemCurrency, 'Edm.String') }),
      StandardUnitofLength: (standardUnitofLength: number) => ({ standardUnitofLength: edmToTs(standardUnitofLength, 'Edm.Int32') }),
      WeightUnitDefault: (weightUnitDefault: number) => ({ weightUnitDefault: edmToTs(weightUnitDefault, 'Edm.Int32') }),
      MinimumAmountfor347Report: (minimumAmountfor347Report: number) => ({ minimumAmountfor347Report: edmToTs(minimumAmountfor347Report, 'Edm.Double') }),
      BankCountry: (bankCountry: string) => ({ bankCountry: edmToTs(bankCountry, 'Edm.String') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      TaxOffice: (taxOffice: string) => ({ taxOffice: edmToTs(taxOffice, 'Edm.String') }),
      DeductionFileNo: (deductionFileNo: string) => ({ deductionFileNo: edmToTs(deductionFileNo, 'Edm.String') }),
      TaxPercentage: (taxPercentage: number) => ({ taxPercentage: edmToTs(taxPercentage, 'Edm.Double') }),
      AdvancesonCorpIncomeTax: (advancesonCorpIncomeTax: number) => ({ advancesonCorpIncomeTax: edmToTs(advancesonCorpIncomeTax, 'Edm.Double') }),
      WithTax: (withTax: number) => ({ withTax: edmToTs(withTax, 'Edm.Double') }),
      WithholdingTaxTdctPercnt: (withholdingTaxTdctPercnt: number) => ({ withholdingTaxTdctPercnt: edmToTs(withholdingTaxTdctPercnt, 'Edm.Double') }),
      WithholdingTaxDdctExpired: (withholdingTaxDdctExpired: Moment) => ({ withholdingTaxDdctExpired: edmToTs(withholdingTaxDdctExpired, 'Edm.DateTimeOffset') }),
      WithholdingTaxDdctOffice: (withholdingTaxDdctOffice: string) => ({ withholdingTaxDdctOffice: edmToTs(withholdingTaxDdctOffice, 'Edm.String') }),
      AltNameForApInvoice: (altNameForApInvoice: string) => ({ altNameForApInvoice: edmToTs(altNameForApInvoice, 'Edm.String') }),
      AltNameforCreditMemo: (altNameforCreditMemo: string) => ({ altNameforCreditMemo: edmToTs(altNameforCreditMemo, 'Edm.String') }),
      AltNameForGoodsReceipt: (altNameForGoodsReceipt: string) => ({ altNameForGoodsReceipt: edmToTs(altNameForGoodsReceipt, 'Edm.String') }),
      AltNameForGoodsReturn: (altNameForGoodsReturn: string) => ({ altNameForGoodsReturn: edmToTs(altNameForGoodsReturn, 'Edm.String') }),
      AltNameForPurchase: (altNameForPurchase: string) => ({ altNameForPurchase: edmToTs(altNameForPurchase, 'Edm.String') }),
      DefaultCustomerPaymentTerms: (defaultCustomerPaymentTerms: number) => ({ defaultCustomerPaymentTerms: edmToTs(defaultCustomerPaymentTerms, 'Edm.Int32') }),
      DefaultVendorPaymentTerms: (defaultVendorPaymentTerms: number) => ({ defaultVendorPaymentTerms: edmToTs(defaultVendorPaymentTerms, 'Edm.Int32') }),
      PriceListforCostPrice: (priceListforCostPrice: number) => ({ priceListforCostPrice: edmToTs(priceListforCostPrice, 'Edm.Int32') }),
      CompanyColor: (companyColor: number) => ({ companyColor: edmToTs(companyColor, 'Edm.Int32') }),
      TotalsAccuracy: (totalsAccuracy: number) => ({ totalsAccuracy: edmToTs(totalsAccuracy, 'Edm.Int32') }),
      AccuracyofQuantities: (accuracyofQuantities: number) => ({ accuracyofQuantities: edmToTs(accuracyofQuantities, 'Edm.Int32') }),
      PriceAccuracy: (priceAccuracy: number) => ({ priceAccuracy: edmToTs(priceAccuracy, 'Edm.Int32') }),
      RateAccuracy: (rateAccuracy: number) => ({ rateAccuracy: edmToTs(rateAccuracy, 'Edm.Int32') }),
      PercentageAccuracy: (percentageAccuracy: number) => ({ percentageAccuracy: edmToTs(percentageAccuracy, 'Edm.Int32') }),
      MeasuringAccuracy: (measuringAccuracy: number) => ({ measuringAccuracy: edmToTs(measuringAccuracy, 'Edm.Int32') }),
      QueryAccuracy: (queryAccuracy: number) => ({ queryAccuracy: edmToTs(queryAccuracy, 'Edm.Int32') }),
      AddressinForeignLanguage: (addressinForeignLanguage: string) => ({ addressinForeignLanguage: edmToTs(addressinForeignLanguage, 'Edm.String') }),
      DefaultTaxCode: (defaultTaxCode: string) => ({ defaultTaxCode: edmToTs(defaultTaxCode, 'Edm.String') }),
      LetterHeaderinForeignLangu: (letterHeaderinForeignLangu: string) => ({ letterHeaderinForeignLangu: edmToTs(letterHeaderinForeignLangu, 'Edm.String') }),
      PhoneNumber1ForeignLang: (phoneNumber1ForeignLang: string) => ({ phoneNumber1ForeignLang: edmToTs(phoneNumber1ForeignLang, 'Edm.String') }),
      PhoneNumber2ForeignLang: (phoneNumber2ForeignLang: string) => ({ phoneNumber2ForeignLang: edmToTs(phoneNumber2ForeignLang, 'Edm.String') }),
      FaxNumberForeignLang: (faxNumberForeignLang: string) => ({ faxNumberForeignLang: edmToTs(faxNumberForeignLang, 'Edm.String') }),
      ManagingDirectorForeignLan: (managingDirectorForeignLan: string) => ({ managingDirectorForeignLan: edmToTs(managingDirectorForeignLan, 'Edm.String') }),
      DateSeparator: (dateSeparator: string) => ({ dateSeparator: edmToTs(dateSeparator, 'Edm.String') }),
      ISRType: (isrType: number) => ({ isrType: edmToTs(isrType, 'Edm.Int32') }),
      ISRBillerID: (isrBillerId: string) => ({ isrBillerId: edmToTs(isrBillerId, 'Edm.String') }),
      DefaultWarehouse: (defaultWarehouse: string) => ({ defaultWarehouse: edmToTs(defaultWarehouse, 'Edm.String') }),
      TaxDefinitionforVatitem: (taxDefinitionforVatitem: string) => ({ taxDefinitionforVatitem: edmToTs(taxDefinitionforVatitem, 'Edm.String') }),
      TaxDefinitionforVatservice: (taxDefinitionforVatservice: string) => ({ taxDefinitionforVatservice: edmToTs(taxDefinitionforVatservice, 'Edm.String') }),
      TaxGroupforPurchaseItem: (taxGroupforPurchaseItem: string) => ({ taxGroupforPurchaseItem: edmToTs(taxGroupforPurchaseItem, 'Edm.String') }),
      TaxGroupforServicePurchase: (taxGroupforServicePurchase: string) => ({ taxGroupforServicePurchase: edmToTs(taxGroupforServicePurchase, 'Edm.String') }),
      CustomerIdNumber: (customerIdNumber: string) => ({ customerIdNumber: edmToTs(customerIdNumber, 'Edm.String') }),
      DefaultBudgetCostAssessMt: (defaultBudgetCostAssessMt: number) => ({ defaultBudgetCostAssessMt: edmToTs(defaultBudgetCostAssessMt, 'Edm.Int32') }),
      FileNumberinIncomeTax: (fileNumberinIncomeTax: string) => ({ fileNumberinIncomeTax: edmToTs(fileNumberinIncomeTax, 'Edm.String') }),
      DefaultBankNo: (defaultBankNo: string) => ({ defaultBankNo: edmToTs(defaultBankNo, 'Edm.String') }),
      DefaultBankAccount: (defaultBankAccount: string) => ({ defaultBankAccount: edmToTs(defaultBankAccount, 'Edm.String') }),
      DefaultBranch: (defaultBranch: string) => ({ defaultBranch: edmToTs(defaultBranch, 'Edm.String') }),
      ServiceCode: (serviceCode: string) => ({ serviceCode: edmToTs(serviceCode, 'Edm.String') }),
      ServicePassword: (servicePassword: string) => ({ servicePassword: edmToTs(servicePassword, 'Edm.String') }),
      ParamFolderPath: (paramFolderPath: string) => ({ paramFolderPath: edmToTs(paramFolderPath, 'Edm.String') }),
      ExcelFolderPath: (excelFolderPath: string) => ({ excelFolderPath: edmToTs(excelFolderPath, 'Edm.String') }),
      FederalTaxID2: (federalTaxId2: string) => ({ federalTaxId2: edmToTs(federalTaxId2, 'Edm.String') }),
      FederalTaxID3: (federalTaxId3: string) => ({ federalTaxId3: edmToTs(federalTaxId3, 'Edm.String') }),
      DecimalSeparator: (decimalSeparator: string) => ({ decimalSeparator: edmToTs(decimalSeparator, 'Edm.String') }),
      ThousandsSeparator: (thousandsSeparator: string) => ({ thousandsSeparator: edmToTs(thousandsSeparator, 'Edm.String') }),
      MaxHistory: (maxHistory: number) => ({ maxHistory: edmToTs(maxHistory, 'Edm.Int32') }),
      BPTypeCode: (bpTypeCode: string) => ({ bpTypeCode: edmToTs(bpTypeCode, 'Edm.String') }),
      PBSNumber: (pbsNumber: string) => ({ pbsNumber: edmToTs(pbsNumber, 'Edm.String') }),
      PBSGroupNumber: (pbsGroupNumber: string) => ({ pbsGroupNumber: edmToTs(pbsGroupNumber, 'Edm.String') }),
      OrganizationNumber: (organizationNumber: string) => ({ organizationNumber: edmToTs(organizationNumber, 'Edm.String') }),
      AccountSegmentsSeparator: (accountSegmentsSeparator: string) => ({ accountSegmentsSeparator: edmToTs(accountSegmentsSeparator, 'Edm.String') }),
      SDefaultWTCode: (sDefaultWtCode: string) => ({ sDefaultWtCode: edmToTs(sDefaultWtCode, 'Edm.String') }),
      WithholdingTaxPHandle: (withholdingTaxPHandle: string) => ({ withholdingTaxPHandle: edmToTs(withholdingTaxPHandle, 'Edm.String') }),
      PDefaultWTCode: (pDefaultWtCode: string) => ({ pDefaultWtCode: edmToTs(pDefaultWtCode, 'Edm.String') }),
      HolidaysName: (holidaysName: string) => ({ holidaysName: edmToTs(holidaysName, 'Edm.String') }),
      OrderBlock: (orderBlock: string) => ({ orderBlock: edmToTs(orderBlock, 'Edm.String') }),
      OrderingParty: (orderingParty: string) => ({ orderingParty: edmToTs(orderingParty, 'Edm.String') }),
      CertificateNo: (certificateNo: string) => ({ certificateNo: edmToTs(certificateNo, 'Edm.String') }),
      ExpirationDate: (expirationDate: Moment) => ({ expirationDate: edmToTs(expirationDate, 'Edm.DateTimeOffset') }),
      NationalInsuranceNo: (nationalInsuranceNo: string) => ({ nationalInsuranceNo: edmToTs(nationalInsuranceNo, 'Edm.String') }),
      SDfltITWT: (sDfltItwt: string) => ({ sDfltItwt: edmToTs(sDfltItwt, 'Edm.String') }),
      PDfltITWT: (pDfltItwt: string) => ({ pDfltItwt: edmToTs(pDfltItwt, 'Edm.String') }),
      DaysBackward: (daysBackward: number) => ({ daysBackward: edmToTs(daysBackward, 'Edm.Int32') }),
      DaysForward: (daysForward: number) => ({ daysForward: edmToTs(daysForward, 'Edm.Int32') }),
      DefaultDunningTerm: (defaultDunningTerm: string) => ({ defaultDunningTerm: edmToTs(defaultDunningTerm, 'Edm.String') }),
      DefaultBankAccountKey: (defaultBankAccountKey: number) => ({ defaultBankAccountKey: edmToTs(defaultBankAccountKey, 'Edm.Int32') }),
      AdditionalIdNumber: (additionalIdNumber: string) => ({ additionalIdNumber: edmToTs(additionalIdNumber, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      UniqueTaxPayerReference: (uniqueTaxPayerReference: string) => ({ uniqueTaxPayerReference: edmToTs(uniqueTaxPayerReference, 'Edm.String') }),
      EmployerReference: (employerReference: string) => ({ employerReference: edmToTs(employerReference, 'Edm.String') }),
      PeriodStatusChangeDelay: (periodStatusChangeDelay: number) => ({ periodStatusChangeDelay: edmToTs(periodStatusChangeDelay, 'Edm.Int32') }),
      GrossProfitPercentForServiceDocuments: (grossProfitPercentForServiceDocuments: number) => ({ grossProfitPercentForServiceDocuments: edmToTs(grossProfitPercentForServiceDocuments, 'Edm.Double') }),
      XMLFileFolderPath: (xmlFileFolderPath: string) => ({ xmlFileFolderPath: edmToTs(xmlFileFolderPath, 'Edm.String') }),
      GeneralManager: (generalManager: string) => ({ generalManager: edmToTs(generalManager, 'Edm.String') }),
      GeneralManagerForeignLanguage: (generalManagerForeignLanguage: string) => ({ generalManagerForeignLanguage: edmToTs(generalManagerForeignLanguage, 'Edm.String') }),
      WTAccumAmountAP: (wtAccumAmountAp: number) => ({ wtAccumAmountAp: edmToTs(wtAccumAmountAp, 'Edm.Double') }),
      WTAccumAmountAR: (wtAccumAmountAr: number) => ({ wtAccumAmountAr: edmToTs(wtAccumAmountAr, 'Edm.Double') }),
      GTSOutboundFolder: (gtsOutboundFolder: string) => ({ gtsOutboundFolder: edmToTs(gtsOutboundFolder, 'Edm.String') }),
      GTSInboundFolder: (gtsInboundFolder: string) => ({ gtsInboundFolder: edmToTs(gtsInboundFolder, 'Edm.String') }),
      GTSSeparateCode: (gtsSeparateCode: string) => ({ gtsSeparateCode: edmToTs(gtsSeparateCode, 'Edm.String') }),
      GTSDefaultChecker: (gtsDefaultChecker: number) => ({ gtsDefaultChecker: edmToTs(gtsDefaultChecker, 'Edm.Int32') }),
      GTSDefaultPayee: (gtsDefaultPayee: number) => ({ gtsDefaultPayee: edmToTs(gtsDefaultPayee, 'Edm.Int32') }),
      GTSMaxAmount: (gtsMaxAmount: number) => ({ gtsMaxAmount: edmToTs(gtsMaxAmount, 'Edm.Double') }),
      StartingInFiscalYear: (startingInFiscalYear: number) => ({ startingInFiscalYear: edmToTs(startingInFiscalYear, 'Edm.Int32') }),
      ReportAccordingTo: (reportAccordingTo: number) => ({ reportAccordingTo: edmToTs(reportAccordingTo, 'Edm.Int32') }),
      MaximumNumberOfDaysForDueDate: (maximumNumberOfDaysForDueDate: number) => ({ maximumNumberOfDaysForDueDate: edmToTs(maximumNumberOfDaysForDueDate, 'Edm.Int32') }),
      AliasName: (aliasName: string) => ({ aliasName: edmToTs(aliasName, 'Edm.String') }),
      BoletoFolderPath: (boletoFolderPath: string) => ({ boletoFolderPath: edmToTs(boletoFolderPath, 'Edm.String') }),
      MaxDaysForCancel: (maxDaysForCancel: number) => ({ maxDaysForCancel: edmToTs(maxDaysForCancel, 'Edm.Int32') }),
      SirenNo: (sirenNo: string) => ({ sirenNo: edmToTs(sirenNo, 'Edm.String') }),
      InstitutionCode: (institutionCode: string) => ({ institutionCode: edmToTs(institutionCode, 'Edm.String') }),
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      Account: (account: string) => ({ account: edmToTs(account, 'Edm.String') }),
      EnableMultipleSchedulings: (enableMultipleSchedulings: string) => ({ enableMultipleSchedulings: edmToTs(enableMultipleSchedulings, 'Edm.String') }),
      InventoryPostingHighlightVariance: (inventoryPostingHighlightVariance: number) => ({ inventoryPostingHighlightVariance: edmToTs(inventoryPostingHighlightVariance, 'Edm.Double') }),
      InventoryCountingHighlightVariance: (inventoryCountingHighlightVariance: number) => ({ inventoryCountingHighlightVariance: edmToTs(inventoryCountingHighlightVariance, 'Edm.Double') }),
      InventoryCountingHighlightMaxVariance: (inventoryCountingHighlightMaxVariance: number) => ({ inventoryCountingHighlightMaxVariance: edmToTs(inventoryCountingHighlightMaxVariance, 'Edm.Double') }),
      InventoryCountingHighlightCountersDifference: (inventoryCountingHighlightCountersDifference: number) => ({ inventoryCountingHighlightCountersDifference: edmToTs(inventoryCountingHighlightCountersDifference, 'Edm.Double') }),
      SEPACreditorID: (sepaCreditorId: string) => ({ sepaCreditorId: edmToTs(sepaCreditorId, 'Edm.String') }),
      ExtendedAdminInfo: (extendedAdminInfo: ExtendedAdminInfo) => ({ extendedAdminInfo: ExtendedAdminInfo.build(extendedAdminInfo) })
    });
  }
}
