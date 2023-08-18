/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAccountTypes } from './BoAccountTypes';
import { SpedContabilAccountPurposeCode } from './SpedContabilAccountPurposeCode';
import { Warehouses, WarehousesType } from './Warehouses';
import { AccrualTypes, AccrualTypesType } from './AccrualTypes';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { VatGroups, VatGroupsType } from './VatGroups';
import { Items, ItemsType } from './Items';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';
import {
  CorrectionPurchaseInvoice,
  CorrectionPurchaseInvoiceType
} from './CorrectionPurchaseInvoice';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { Orders, OrdersType } from './Orders';
import {
  FaAccountDeterminations,
  FaAccountDeterminationsType
} from './FaAccountDeterminations';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  AdditionalExpenses,
  AdditionalExpensesType
} from './AdditionalExpenses';
import { CustomsGroups, CustomsGroupsType } from './CustomsGroups';
import { Currencies, CurrenciesType } from './Currencies';
import { Projects, ProjectsType } from './Projects';
import { AccountCategory, AccountCategoryType } from './AccountCategory';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { CostElements, CostElementsType } from './CostElements';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  SalesTaxAuthorities,
  SalesTaxAuthoritiesType
} from './SalesTaxAuthorities';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { DunningTerms, DunningTermsType } from './DunningTerms';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { DownPayments, DownPaymentsType } from './DownPayments';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import { BankPages, BankPagesType } from './BankPages';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { CreditCards, CreditCardsType } from './CreditCards';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "ChartOfAccounts" of service "SAPB1".
 */
export class ChartOfAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChartOfAccountsType<T>
{
  /**
   * Technical entity name for ChartOfAccounts.
   */
  static _entityName = 'ChartOfAccounts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ChartOfAccounts entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance.
   * @nullable
   */
  balance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: BoYesNoEnum | null;
  /**
   * Budget Account.
   * @nullable
   */
  budgetAccount?: BoYesNoEnum | null;
  /**
   * Active Account.
   * @nullable
   */
  activeAccount?: BoYesNoEnum | null;
  /**
   * Primary Account.
   * @nullable
   */
  primaryAccount?: BoYesNoEnum | null;
  /**
   * Account Level.
   * @nullable
   */
  accountLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Data Export Code.
   * @nullable
   */
  dataExportCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Account Key.
   * @nullable
   */
  fatherAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Conversion.
   * @nullable
   */
  rateConversion?: BoYesNoEnum | null;
  /**
   * Tax Liable Account.
   * @nullable
   */
  taxLiableAccount?: BoYesNoEnum | null;
  /**
   * Tax Exempt Account.
   * @nullable
   */
  taxExemptAccount?: BoYesNoEnum | null;
  /**
   * External Recon No.
   * @nullable
   */
  externalReconNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Internal Recon No.
   * @nullable
   */
  internalReconNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Account Type.
   * @nullable
   */
  accountType?: BoAccountTypes | null;
  /**
   * Acct Currency.
   * @nullable
   */
  acctCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance Syscurr.
   * @nullable
   */
  balanceSyscurr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Balance Frgn Curr.
   * @nullable
   */
  balanceFrgnCurr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Protected.
   * @nullable
   */
  protected?: BoYesNoEnum | null;
  /**
   * Reconciled Account.
   * @nullable
   */
  reconciledAccount?: BoYesNoEnum | null;
  /**
   * Liable For Advances.
   * @nullable
   */
  liableForAdvances?: BoYesNoEnum | null;
  /**
   * Foreign Name.
   * @nullable
   */
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Coordinated.
   * @nullable
   */
  revaluationCoordinated?: BoYesNoEnum | null;
  /**
   * Lock Manual Transaction.
   * @nullable
   */
  lockManualTransaction?: BoYesNoEnum | null;
  /**
   * Format Code.
   * @nullable
   */
  formatCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Change Vat Group.
   * @nullable
   */
  allowChangeVatGroup?: BoYesNoEnum | null;
  /**
   * Default Vat Group.
   * @nullable
   */
  defaultVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Type.
   * @nullable
   */
  loadingType?: BoYesNoEnum | null;
  /**
   * Loading Factor Code.
   * @nullable
   */
  loadingFactorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Factor Code 2.
   * @nullable
   */
  loadingFactorCode2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Factor Code 3.
   * @nullable
   */
  loadingFactorCode3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Factor Code 4.
   * @nullable
   */
  loadingFactorCode4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Factor Code 5.
   * @nullable
   */
  loadingFactorCode5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Level.
   * @nullable
   */
  planningLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Datev Account.
   * @nullable
   */
  datevAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Datev Auto Account.
   * @nullable
   */
  datevAutoAccount?: BoYesNoEnum | null;
  /**
   * Datev First Data Entry.
   * @nullable
   */
  datevFirstDataEntry?: BoYesNoEnum | null;
  /**
   * Allow Multiple Linking.
   * @nullable
   */
  allowMultipleLinking?: BoYesNoEnum | null;
  /**
   * Project Relevant.
   * @nullable
   */
  projectRelevant?: BoYesNoEnum | null;
  /**
   * Distribution Rule Relevant.
   * @nullable
   */
  distributionRuleRelevant?: BoYesNoEnum | null;
  /**
   * Distribution Rule 2 Relevant.
   * @nullable
   */
  distributionRule2Relevant?: BoYesNoEnum | null;
  /**
   * Distribution Rule 3 Relevant.
   * @nullable
   */
  distributionRule3Relevant?: BoYesNoEnum | null;
  /**
   * Distribution Rule 4 Relevant.
   * @nullable
   */
  distributionRule4Relevant?: BoYesNoEnum | null;
  /**
   * Distribution Rule 5 Relevant.
   * @nullable
   */
  distributionRule5Relevant?: BoYesNoEnum | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Purpose Code.
   * @nullable
   */
  accountPurposeCode?: SpedContabilAccountPurposeCode | null;
  /**
   * Referential Account Code.
   * @nullable
   */
  referentialAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid For.
   * @nullable
   */
  validFor?: BoYesNoEnum | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frozen For.
   * @nullable
   */
  frozenFor?: BoYesNoEnum | null;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Manual Posting.
   * @nullable
   */
  blockManualPosting?: BoYesNoEnum | null;
  /**
   * Cash Flow Relevant.
   * @nullable
   */
  cashFlowRelevant?: BoYesNoEnum | null;
  /**
   * Pcn 874 Report Relevant.
   * @nullable
   */
  pcn874ReportRelevant?: BoYesNoEnum | null;
  /**
   * Primary Closing Account.
   * @nullable
   */
  primaryClosingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Accounting Only.
   * @nullable
   */
  costAccountingOnly?: BoYesNoEnum | null;
  /**
   * Cost Element Relevant.
   * @nullable
   */
  costElementRelevant?: BoYesNoEnum | null;
  /**
   * Cost Element Code.
   * @nullable
   */
  costElementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Account Code.
   * @nullable
   */
  standardAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Taxonomy Code.
   * @nullable
   */
  taxonomyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Classification Category.
   * @nullable
   */
  incomeClassificationCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Income Classification Type.
   * @nullable
   */
  incomeClassificationType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Expense Classification Category.
   * @nullable
   */
  expenseClassificationCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Expense Classification Type.
   * @nullable
   */
  expenseClassificationType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp Ne Sta.
   * @nullable
   */
  uBpNeSta?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp G Lin T.
   * @nullable
   */
  uBpGLinT?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Typ Cb.
   * @nullable
   */
  uBpTypCb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Ty Imp.
   * @nullable
   */
  uBpTyImp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Je Se.
   * @nullable
   */
  uBpJeSe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Ip Se.
   * @nullable
   */
  uBpIpSe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Op Se.
   * @nullable
   */
  uBpOpSe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cor Fin Cls.
   * @nullable
   */
  uCorFinCls?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bd Erst.
   * @nullable
   */
  uBdErst?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bd Datev.
   * @nullable
   */
  uBdDatev?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bd Is Aut.
   * @nullable
   */
  uBdIsAut?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link AccrualTypes} entity.
   */
  accrualTypes!: AccrualTypes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link ItemGroups} entity.
   */
  itemGroups!: ItemGroups<T>[];
  /**
   * One-to-many navigation property to the {@link VatGroups} entity.
   */
  vatGroups!: VatGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoice} entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link FaAccountDeterminations} entity.
   */
  faAccountDeterminations!: FaAccountDeterminations<T>[];
  /**
   * One-to-many navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link AdditionalExpenses} entity.
   */
  additionalExpenses!: AdditionalExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link CustomsGroups} entity.
   */
  customsGroups!: CustomsGroups<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link AccountCategory} entity.
   */
  accountCategory?: AccountCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link TransactionCodes} entity.
   */
  transactionCode2?: TransactionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule?: DistributionRules<T> | null;
  /**
   * One-to-one navigation property to the {@link CostElements} entity.
   */
  costElement?: CostElements<T> | null;
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTaxAuthorities} entity.
   */
  salesTaxAuthorities!: SalesTaxAuthorities<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link DunningTerms} entity.
   */
  dunningTerms!: DunningTerms<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link DownPayments} entity.
   */
  downPayments!: DownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDownPayments} entity.
   */
  purchaseDownPayments!: PurchaseDownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseReturns} entity.
   */
  purchaseReturns!: PurchaseReturns<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrders} entity.
   */
  purchaseOrders!: PurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link Quotations} entity.
   */
  quotations!: Quotations<T>[];
  /**
   * One-to-many navigation property to the {@link Returns} entity.
   */
  returns!: Returns<T>[];
  /**
   * One-to-many navigation property to the {@link HouseBankAccounts} entity.
   */
  houseBankAccounts!: HouseBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link BankPages} entity.
   */
  bankPages!: BankPages<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseTypes} entity.
   */
  expenseTypes!: ExpenseTypes<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];
  /**
   * One-to-many navigation property to the {@link CreditCards} entity.
   */
  creditCards!: CreditCards<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: ChartOfAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface ChartOfAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  balance?: DeserializedType<T, 'Edm.Double'> | null;
  cashAccount?: BoYesNoEnum | null;
  budgetAccount?: BoYesNoEnum | null;
  activeAccount?: BoYesNoEnum | null;
  primaryAccount?: BoYesNoEnum | null;
  accountLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  dataExportCode?: DeserializedType<T, 'Edm.String'> | null;
  fatherAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  rateConversion?: BoYesNoEnum | null;
  taxLiableAccount?: BoYesNoEnum | null;
  taxExemptAccount?: BoYesNoEnum | null;
  externalReconNo?: DeserializedType<T, 'Edm.Int32'> | null;
  internalReconNo?: DeserializedType<T, 'Edm.Int32'> | null;
  accountType?: BoAccountTypes | null;
  acctCurrency?: DeserializedType<T, 'Edm.String'> | null;
  balanceSyscurr?: DeserializedType<T, 'Edm.Double'> | null;
  balanceFrgnCurr?: DeserializedType<T, 'Edm.Double'> | null;
  protected?: BoYesNoEnum | null;
  reconciledAccount?: BoYesNoEnum | null;
  liableForAdvances?: BoYesNoEnum | null;
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  revaluationCoordinated?: BoYesNoEnum | null;
  lockManualTransaction?: BoYesNoEnum | null;
  formatCode?: DeserializedType<T, 'Edm.String'> | null;
  allowChangeVatGroup?: BoYesNoEnum | null;
  defaultVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.Int32'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  loadingType?: BoYesNoEnum | null;
  loadingFactorCode?: DeserializedType<T, 'Edm.String'> | null;
  loadingFactorCode2?: DeserializedType<T, 'Edm.String'> | null;
  loadingFactorCode3?: DeserializedType<T, 'Edm.String'> | null;
  loadingFactorCode4?: DeserializedType<T, 'Edm.String'> | null;
  loadingFactorCode5?: DeserializedType<T, 'Edm.String'> | null;
  planningLevel?: DeserializedType<T, 'Edm.String'> | null;
  datevAccount?: DeserializedType<T, 'Edm.String'> | null;
  datevAutoAccount?: BoYesNoEnum | null;
  datevFirstDataEntry?: BoYesNoEnum | null;
  allowMultipleLinking?: BoYesNoEnum | null;
  projectRelevant?: BoYesNoEnum | null;
  distributionRuleRelevant?: BoYesNoEnum | null;
  distributionRule2Relevant?: BoYesNoEnum | null;
  distributionRule3Relevant?: BoYesNoEnum | null;
  distributionRule4Relevant?: BoYesNoEnum | null;
  distributionRule5Relevant?: BoYesNoEnum | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  accountPurposeCode?: SpedContabilAccountPurposeCode | null;
  referentialAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  validFor?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  frozenFor?: BoYesNoEnum | null;
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  blockManualPosting?: BoYesNoEnum | null;
  cashFlowRelevant?: BoYesNoEnum | null;
  pcn874ReportRelevant?: BoYesNoEnum | null;
  primaryClosingAccount?: DeserializedType<T, 'Edm.String'> | null;
  costAccountingOnly?: BoYesNoEnum | null;
  costElementRelevant?: BoYesNoEnum | null;
  costElementCode?: DeserializedType<T, 'Edm.String'> | null;
  standardAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  taxonomyCode?: DeserializedType<T, 'Edm.String'> | null;
  incomeClassificationCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  incomeClassificationType?: DeserializedType<T, 'Edm.Int32'> | null;
  expenseClassificationCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  expenseClassificationType?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpNeSta?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpGLinT?: DeserializedType<T, 'Edm.String'> | null;
  uBpTypCb?: DeserializedType<T, 'Edm.String'> | null;
  uBpTyImp?: DeserializedType<T, 'Edm.String'> | null;
  uBpJeSe?: DeserializedType<T, 'Edm.String'> | null;
  uBpIpSe?: DeserializedType<T, 'Edm.String'> | null;
  uBpOpSe?: DeserializedType<T, 'Edm.String'> | null;
  uCorFinCls?: DeserializedType<T, 'Edm.String'> | null;
  uBdErst?: DeserializedType<T, 'Edm.String'> | null;
  uBdDatev?: DeserializedType<T, 'Edm.String'> | null;
  uBdIsAut?: DeserializedType<T, 'Edm.String'> | null;
  warehouses: WarehousesType<T>[];
  accrualTypes: AccrualTypesType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  itemGroups: ItemGroupsType<T>[];
  vatGroups: VatGroupsType<T>[];
  items: ItemsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  orders: OrdersType<T>[];
  faAccountDeterminations: FaAccountDeterminationsType<T>[];
  wizardPaymentMethods: WizardPaymentMethodsType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  additionalExpenses: AdditionalExpensesType<T>[];
  customsGroups: CustomsGroupsType<T>[];
  currency?: CurrenciesType<T> | null;
  project?: ProjectsType<T> | null;
  accountCategory?: AccountCategoryType<T> | null;
  transactionCode2?: TransactionCodesType<T> | null;
  distributionRule?: DistributionRulesType<T> | null;
  costElement?: CostElementsType<T> | null;
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  salesTaxAuthorities: SalesTaxAuthoritiesType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  dunningTerms: DunningTermsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  houseBankAccounts: HouseBankAccountsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  bankPages: BankPagesType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  expenseTypes: ExpenseTypesType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
  creditCards: CreditCardsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
