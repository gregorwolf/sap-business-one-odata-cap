/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChartOfAccountsRequestBuilder } from './ChartOfAccountsRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAccountTypes } from './BoAccountTypes';
import { SpedContabilAccountPurposeCode } from './SpedContabilAccountPurposeCode';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ChartOfAccounts" of service "SAPB1".
 */
export class ChartOfAccounts extends EntityV4 implements ChartOfAccountsType {
  /**
   * Technical entity name for ChartOfAccounts.
   */
  static _entityName = 'ChartOfAccounts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Balance.
   * @nullable
   */
  balance?: number;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: BoYesNoEnum;
  /**
   * Budget Account.
   * @nullable
   */
  budgetAccount?: BoYesNoEnum;
  /**
   * Active Account.
   * @nullable
   */
  activeAccount?: BoYesNoEnum;
  /**
   * Primary Account.
   * @nullable
   */
  primaryAccount?: BoYesNoEnum;
  /**
   * Account Level.
   * @nullable
   */
  accountLevel?: number;
  /**
   * Data Export Code.
   * @nullable
   */
  dataExportCode?: string;
  /**
   * Father Account Key.
   * @nullable
   */
  fatherAccountKey?: string;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: string;
  /**
   * Rate Conversion.
   * @nullable
   */
  rateConversion?: BoYesNoEnum;
  /**
   * Tax Liable Account.
   * @nullable
   */
  taxLiableAccount?: BoYesNoEnum;
  /**
   * Tax Exempt Account.
   * @nullable
   */
  taxExemptAccount?: BoYesNoEnum;
  /**
   * External Recon No.
   * @nullable
   */
  externalReconNo?: number;
  /**
   * Internal Recon No.
   * @nullable
   */
  internalReconNo?: number;
  /**
   * Account Type.
   * @nullable
   */
  accountType?: BoAccountTypes;
  /**
   * Acct Currency.
   * @nullable
   */
  acctCurrency?: string;
  /**
   * Balance Syscurr.
   * @nullable
   */
  balanceSyscurr?: number;
  /**
   * Balance Frgn Curr.
   * @nullable
   */
  balanceFrgnCurr?: number;
  /**
   * Protected.
   * @nullable
   */
  protected?: BoYesNoEnum;
  /**
   * Reconciled Account.
   * @nullable
   */
  reconciledAccount?: BoYesNoEnum;
  /**
   * Liable For Advances.
   * @nullable
   */
  liableForAdvances?: BoYesNoEnum;
  /**
   * Foreign Name.
   * @nullable
   */
  foreignName?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Revaluation Coordinated.
   * @nullable
   */
  revaluationCoordinated?: BoYesNoEnum;
  /**
   * Lock Manual Transaction.
   * @nullable
   */
  lockManualTransaction?: BoYesNoEnum;
  /**
   * Format Code.
   * @nullable
   */
  formatCode?: string;
  /**
   * Allow Change Vat Group.
   * @nullable
   */
  allowChangeVatGroup?: BoYesNoEnum;
  /**
   * Default Vat Group.
   * @nullable
   */
  defaultVatGroup?: string;
  /**
   * Category.
   * @nullable
   */
  category?: number;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: string;
  /**
   * Loading Type.
   * @nullable
   */
  loadingType?: BoYesNoEnum;
  /**
   * Loading Factor Code.
   * @nullable
   */
  loadingFactorCode?: string;
  /**
   * Loading Factor Code 2.
   * @nullable
   */
  loadingFactorCode2?: string;
  /**
   * Loading Factor Code 3.
   * @nullable
   */
  loadingFactorCode3?: string;
  /**
   * Loading Factor Code 4.
   * @nullable
   */
  loadingFactorCode4?: string;
  /**
   * Loading Factor Code 5.
   * @nullable
   */
  loadingFactorCode5?: string;
  /**
   * Planning Level.
   * @nullable
   */
  planningLevel?: string;
  /**
   * Datev Account.
   * @nullable
   */
  datevAccount?: string;
  /**
   * Datev Auto Account.
   * @nullable
   */
  datevAutoAccount?: BoYesNoEnum;
  /**
   * Datev First Data Entry.
   * @nullable
   */
  datevFirstDataEntry?: BoYesNoEnum;
  /**
   * Allow Multiple Linking.
   * @nullable
   */
  allowMultipleLinking?: BoYesNoEnum;
  /**
   * Project Relevant.
   * @nullable
   */
  projectRelevant?: BoYesNoEnum;
  /**
   * Distribution Rule Relevant.
   * @nullable
   */
  distributionRuleRelevant?: BoYesNoEnum;
  /**
   * Distribution Rule 2 Relevant.
   * @nullable
   */
  distributionRule2Relevant?: BoYesNoEnum;
  /**
   * Distribution Rule 3 Relevant.
   * @nullable
   */
  distributionRule3Relevant?: BoYesNoEnum;
  /**
   * Distribution Rule 4 Relevant.
   * @nullable
   */
  distributionRule4Relevant?: BoYesNoEnum;
  /**
   * Distribution Rule 5 Relevant.
   * @nullable
   */
  distributionRule5Relevant?: BoYesNoEnum;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: string;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: string;
  /**
   * Account Purpose Code.
   * @nullable
   */
  accountPurposeCode?: SpedContabilAccountPurposeCode;
  /**
   * Referential Account Code.
   * @nullable
   */
  referentialAccountCode?: string;
  /**
   * Valid For.
   * @nullable
   */
  validFor?: BoYesNoEnum;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: string;
  /**
   * Frozen For.
   * @nullable
   */
  frozenFor?: BoYesNoEnum;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: Moment;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: Moment;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: string;
  /**
   * Block Manual Posting.
   * @nullable
   */
  blockManualPosting?: BoYesNoEnum;
  /**
   * Cash Flow Relevant.
   * @nullable
   */
  cashFlowRelevant?: BoYesNoEnum;
  /**
   * Pcn 874 Report Relevant.
   * @nullable
   */
  pcn874ReportRelevant?: BoYesNoEnum;
  /**
   * Primary Closing Account.
   * @nullable
   */
  primaryClosingAccount?: string;
  /**
   * Cost Accounting Only.
   * @nullable
   */
  costAccountingOnly?: BoYesNoEnum;
  /**
   * Cost Element Relevant.
   * @nullable
   */
  costElementRelevant?: BoYesNoEnum;
  /**
   * Cost Element Code.
   * @nullable
   */
  costElementCode?: string;
  /**
   * One-to-many navigation property to the [[WorkOrders]] entity.
   */
  workOrders!: WorkOrders[];
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[CustomsGroups]] entity.
   */
  customsGroups!: CustomsGroups[];
  /**
   * One-to-many navigation property to the [[AccrualTypes]] entity.
   */
  accrualTypes!: AccrualTypes[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups[];
  /**
   * One-to-many navigation property to the [[VatGroups]] entity.
   */
  vatGroups!: VatGroups[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[BankPages]] entity.
   */
  bankPages!: BankPages[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[CreditCards]] entity.
   */
  creditCards!: CreditCards[];
  /**
   * One-to-many navigation property to the [[FaAccountDeterminations]] entity.
   */
  faAccountDeterminations!: FaAccountDeterminations[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[Quotations]] entity.
   */
  quotations!: Quotations[];
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency!: Currencies;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[AccountCategory]] entity.
   */
  accountCategory!: AccountCategory;
  /**
   * One-to-one navigation property to the [[TransactionCodes]] entity.
   */
  transactionCode2!: TransactionCodes;
  /**
   * One-to-one navigation property to the [[DistributionRules]] entity.
   */
  distributionRule!: DistributionRules;
  /**
   * One-to-one navigation property to the [[CostElements]] entity.
   */
  costElement!: CostElements;
  /**
   * One-to-many navigation property to the [[InventoryGenExits]] entity.
   */
  inventoryGenExits!: InventoryGenExits[];
  /**
   * One-to-many navigation property to the [[PurchaseRequests]] entity.
   */
  purchaseRequests!: PurchaseRequests[];
  /**
   * One-to-many navigation property to the [[ReturnRequest]] entity.
   */
  returnRequest!: ReturnRequest[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[PurchaseReturns]] entity.
   */
  purchaseReturns!: PurchaseReturns[];
  /**
   * One-to-many navigation property to the [[Invoices]] entity.
   */
  invoices!: Invoices[];
  /**
   * One-to-many navigation property to the [[CreditNotes]] entity.
   */
  creditNotes!: CreditNotes[];
  /**
   * One-to-many navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlaces!: BusinessPlaces[];
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[AdditionalExpenses]] entity.
   */
  additionalExpenses!: AdditionalExpenses[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[SalesTaxAuthorities]] entity.
   */
  salesTaxAuthorities!: SalesTaxAuthorities[];
  /**
   * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-many navigation property to the [[Returns]] entity.
   */
  returns!: Returns[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[PurchaseInvoices]] entity.
   */
  purchaseInvoices!: PurchaseInvoices[];
  /**
   * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoice]] entity.
   */
  correctionInvoice!: CorrectionInvoice[];
  /**
   * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes[];
  /**
   * One-to-many navigation property to the [[DunningTerms]] entity.
   */
  dunningTerms!: DunningTerms[];
  /**
   * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
   */
  purchaseDownPayments!: PurchaseDownPayments[];
  /**
   * One-to-many navigation property to the [[ExpenseTypes]] entity.
   */
  expenseTypes!: ExpenseTypes[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[HouseBankAccounts]] entity.
   */
  houseBankAccounts!: HouseBankAccounts[];
  /**
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `ChartOfAccounts`.
   * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
   */
  static builder(): EntityBuilderType<ChartOfAccounts, ChartOfAccountsType> {
    return EntityV4.entityBuilder(ChartOfAccounts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ChartOfAccounts` entity type.
   * @returns A `ChartOfAccounts` request builder.
   */
  static requestBuilder(): ChartOfAccountsRequestBuilder {
    return new ChartOfAccountsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChartOfAccounts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
   */
  static customField(fieldName: string): CustomFieldV4<ChartOfAccounts> {
    return EntityV4.customFieldSelector(fieldName, ChartOfAccounts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { Warehouses, WarehousesType } from './Warehouses';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { CustomsGroups, CustomsGroupsType } from './CustomsGroups';
import { AccrualTypes, AccrualTypesType } from './AccrualTypes';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { VatGroups, VatGroupsType } from './VatGroups';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { BankPages, BankPagesType } from './BankPages';
import { Items, ItemsType } from './Items';
import { CreditCards, CreditCardsType } from './CreditCards';
import { FaAccountDeterminations, FaAccountDeterminationsType } from './FaAccountDeterminations';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { Currencies, CurrenciesType } from './Currencies';
import { Projects, ProjectsType } from './Projects';
import { AccountCategory, AccountCategoryType } from './AccountCategory';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { CostElements, CostElementsType } from './CostElements';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Orders, OrdersType } from './Orders';
import { AdditionalExpenses, AdditionalExpensesType } from './AdditionalExpenses';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { SalesTaxAuthorities, SalesTaxAuthoritiesType } from './SalesTaxAuthorities';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { DunningTerms, DunningTermsType } from './DunningTerms';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface ChartOfAccountsType {
  code?: string | null;
  name?: string | null;
  balance?: number | null;
  cashAccount?: BoYesNoEnum | null;
  budgetAccount?: BoYesNoEnum | null;
  activeAccount?: BoYesNoEnum | null;
  primaryAccount?: BoYesNoEnum | null;
  accountLevel?: number | null;
  dataExportCode?: string | null;
  fatherAccountKey?: string | null;
  externalCode?: string | null;
  rateConversion?: BoYesNoEnum | null;
  taxLiableAccount?: BoYesNoEnum | null;
  taxExemptAccount?: BoYesNoEnum | null;
  externalReconNo?: number | null;
  internalReconNo?: number | null;
  accountType?: BoAccountTypes | null;
  acctCurrency?: string | null;
  balanceSyscurr?: number | null;
  balanceFrgnCurr?: number | null;
  protected?: BoYesNoEnum | null;
  reconciledAccount?: BoYesNoEnum | null;
  liableForAdvances?: BoYesNoEnum | null;
  foreignName?: string | null;
  details?: string | null;
  projectCode?: string | null;
  revaluationCoordinated?: BoYesNoEnum | null;
  lockManualTransaction?: BoYesNoEnum | null;
  formatCode?: string | null;
  allowChangeVatGroup?: BoYesNoEnum | null;
  defaultVatGroup?: string | null;
  category?: number | null;
  transactionCode?: string | null;
  loadingType?: BoYesNoEnum | null;
  loadingFactorCode?: string | null;
  loadingFactorCode2?: string | null;
  loadingFactorCode3?: string | null;
  loadingFactorCode4?: string | null;
  loadingFactorCode5?: string | null;
  planningLevel?: string | null;
  datevAccount?: string | null;
  datevAutoAccount?: BoYesNoEnum | null;
  datevFirstDataEntry?: BoYesNoEnum | null;
  allowMultipleLinking?: BoYesNoEnum | null;
  projectRelevant?: BoYesNoEnum | null;
  distributionRuleRelevant?: BoYesNoEnum | null;
  distributionRule2Relevant?: BoYesNoEnum | null;
  distributionRule3Relevant?: BoYesNoEnum | null;
  distributionRule4Relevant?: BoYesNoEnum | null;
  distributionRule5Relevant?: BoYesNoEnum | null;
  bplid?: number | null;
  bplName?: string | null;
  vatRegNum?: string | null;
  accountPurposeCode?: SpedContabilAccountPurposeCode | null;
  referentialAccountCode?: string | null;
  validFor?: BoYesNoEnum | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  validRemarks?: string | null;
  frozenFor?: BoYesNoEnum | null;
  frozenFrom?: Moment | null;
  frozenTo?: Moment | null;
  frozenRemarks?: string | null;
  blockManualPosting?: BoYesNoEnum | null;
  cashFlowRelevant?: BoYesNoEnum | null;
  pcn874ReportRelevant?: BoYesNoEnum | null;
  primaryClosingAccount?: string | null;
  costAccountingOnly?: BoYesNoEnum | null;
  costElementRelevant?: BoYesNoEnum | null;
  costElementCode?: string | null;
  workOrders: WorkOrdersType[];
  warehouses: WarehousesType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  customsGroups: CustomsGroupsType[];
  accrualTypes: AccrualTypesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  itemGroups: ItemGroupsType[];
  vatGroups: VatGroupsType[];
  vendorPayments: VendorPaymentsType[];
  bankPages: BankPagesType[];
  items: ItemsType[];
  creditCards: CreditCardsType[];
  faAccountDeterminations: FaAccountDeterminationsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  currency: CurrenciesType;
  project: ProjectsType;
  accountCategory: AccountCategoryType;
  transactionCode2: TransactionCodesType;
  distributionRule: DistributionRulesType;
  costElement: CostElementsType;
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  businessPlaces: BusinessPlacesType[];
  orders: OrdersType[];
  additionalExpenses: AdditionalExpensesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  salesTaxAuthorities: SalesTaxAuthoritiesType[];
  wizardPaymentMethods: WizardPaymentMethodsType[];
  paymentDrafts: PaymentDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  dunningTerms: DunningTermsType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  expenseTypes: ExpenseTypesType[];
  purchaseOrders: PurchaseOrdersType[];
  houseBankAccounts: HouseBankAccountsType[];
  withholdingTaxCodes: WithholdingTaxCodesType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace ChartOfAccounts {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<ChartOfAccounts> = new StringField('Code', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ChartOfAccounts> = new StringField('Name', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[balance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE: NumberField<ChartOfAccounts> = new NumberField('Balance', ChartOfAccounts, 'Edm.Double');
  /**
   * Static representation of the [[cashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('CashAccount', ChartOfAccounts);
  /**
   * Static representation of the [[budgetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('BudgetAccount', ChartOfAccounts);
  /**
   * Static representation of the [[activeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('ActiveAccount', ChartOfAccounts);
  /**
   * Static representation of the [[primaryAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('PrimaryAccount', ChartOfAccounts);
  /**
   * Static representation of the [[accountLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_LEVEL: NumberField<ChartOfAccounts> = new NumberField('AccountLevel', ChartOfAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[dataExportCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_EXPORT_CODE: StringField<ChartOfAccounts> = new StringField('DataExportCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[fatherAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FATHER_ACCOUNT_KEY: StringField<ChartOfAccounts> = new StringField('FatherAccountKey', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ChartOfAccounts> = new StringField('ExternalCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[rateConversion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE_CONVERSION: EnumField<ChartOfAccounts> = new EnumField('RateConversion', ChartOfAccounts);
  /**
   * Static representation of the [[taxLiableAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_LIABLE_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('TaxLiableAccount', ChartOfAccounts);
  /**
   * Static representation of the [[taxExemptAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPT_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('TaxExemptAccount', ChartOfAccounts);
  /**
   * Static representation of the [[externalReconNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_RECON_NO: NumberField<ChartOfAccounts> = new NumberField('ExternalReconNo', ChartOfAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[internalReconNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_RECON_NO: NumberField<ChartOfAccounts> = new NumberField('InternalReconNo', ChartOfAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: EnumField<ChartOfAccounts> = new EnumField('AccountType', ChartOfAccounts);
  /**
   * Static representation of the [[acctCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCT_CURRENCY: StringField<ChartOfAccounts> = new StringField('AcctCurrency', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[balanceSyscurr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_SYSCURR: NumberField<ChartOfAccounts> = new NumberField('Balance_syscurr', ChartOfAccounts, 'Edm.Double');
  /**
   * Static representation of the [[balanceFrgnCurr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_FRGN_CURR: NumberField<ChartOfAccounts> = new NumberField('Balance_FrgnCurr', ChartOfAccounts, 'Edm.Double');
  /**
   * Static representation of the [[protected]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROTECTED: EnumField<ChartOfAccounts> = new EnumField('Protected', ChartOfAccounts);
  /**
   * Static representation of the [[reconciledAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONCILED_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('ReconciledAccount', ChartOfAccounts);
  /**
   * Static representation of the [[liableForAdvances]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIABLE_FOR_ADVANCES: EnumField<ChartOfAccounts> = new EnumField('LiableForAdvances', ChartOfAccounts);
  /**
   * Static representation of the [[foreignName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_NAME: StringField<ChartOfAccounts> = new StringField('ForeignName', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<ChartOfAccounts> = new StringField('Details', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<ChartOfAccounts> = new StringField('ProjectCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[revaluationCoordinated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVALUATION_COORDINATED: EnumField<ChartOfAccounts> = new EnumField('RevaluationCoordinated', ChartOfAccounts);
  /**
   * Static representation of the [[lockManualTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCK_MANUAL_TRANSACTION: EnumField<ChartOfAccounts> = new EnumField('LockManualTransaction', ChartOfAccounts);
  /**
   * Static representation of the [[formatCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAT_CODE: StringField<ChartOfAccounts> = new StringField('FormatCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[allowChangeVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_CHANGE_VAT_GROUP: EnumField<ChartOfAccounts> = new EnumField('AllowChangeVatGroup', ChartOfAccounts);
  /**
   * Static representation of the [[defaultVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_VAT_GROUP: StringField<ChartOfAccounts> = new StringField('DefaultVatGroup', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: NumberField<ChartOfAccounts> = new NumberField('Category', ChartOfAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[transactionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE: StringField<ChartOfAccounts> = new StringField('TransactionCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[loadingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_TYPE: EnumField<ChartOfAccounts> = new EnumField('LoadingType', ChartOfAccounts);
  /**
   * Static representation of the [[loadingFactorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_FACTOR_CODE: StringField<ChartOfAccounts> = new StringField('LoadingFactorCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[loadingFactorCode2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_FACTOR_CODE_2: StringField<ChartOfAccounts> = new StringField('LoadingFactorCode2', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[loadingFactorCode3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_FACTOR_CODE_3: StringField<ChartOfAccounts> = new StringField('LoadingFactorCode3', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[loadingFactorCode4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_FACTOR_CODE_4: StringField<ChartOfAccounts> = new StringField('LoadingFactorCode4', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[loadingFactorCode5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOADING_FACTOR_CODE_5: StringField<ChartOfAccounts> = new StringField('LoadingFactorCode5', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[planningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNING_LEVEL: StringField<ChartOfAccounts> = new StringField('PlanningLevel', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[datevAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEV_ACCOUNT: StringField<ChartOfAccounts> = new StringField('DatevAccount', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[datevAutoAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEV_AUTO_ACCOUNT: EnumField<ChartOfAccounts> = new EnumField('DatevAutoAccount', ChartOfAccounts);
  /**
   * Static representation of the [[datevFirstDataEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEV_FIRST_DATA_ENTRY: EnumField<ChartOfAccounts> = new EnumField('DatevFirstDataEntry', ChartOfAccounts);
  /**
   * Static representation of the [[allowMultipleLinking]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_MULTIPLE_LINKING: EnumField<ChartOfAccounts> = new EnumField('AllowMultipleLinking', ChartOfAccounts);
  /**
   * Static representation of the [[projectRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('ProjectRelevant', ChartOfAccounts);
  /**
   * Static representation of the [[distributionRuleRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('DistributionRuleRelevant', ChartOfAccounts);
  /**
   * Static representation of the [[distributionRule2Relevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_2_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('DistributionRule2Relevant', ChartOfAccounts);
  /**
   * Static representation of the [[distributionRule3Relevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_3_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('DistributionRule3Relevant', ChartOfAccounts);
  /**
   * Static representation of the [[distributionRule4Relevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_4_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('DistributionRule4Relevant', ChartOfAccounts);
  /**
   * Static representation of the [[distributionRule5Relevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_5_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('DistributionRule5Relevant', ChartOfAccounts);
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<ChartOfAccounts> = new NumberField('BPLID', ChartOfAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<ChartOfAccounts> = new StringField('BPLName', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<ChartOfAccounts> = new StringField('VATRegNum', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[accountPurposeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_PURPOSE_CODE: EnumField<ChartOfAccounts> = new EnumField('AccountPurposeCode', ChartOfAccounts);
  /**
   * Static representation of the [[referentialAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENTIAL_ACCOUNT_CODE: StringField<ChartOfAccounts> = new StringField('ReferentialAccountCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[validFor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FOR: EnumField<ChartOfAccounts> = new EnumField('ValidFor', ChartOfAccounts);
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<ChartOfAccounts> = new DateField('ValidFrom', ChartOfAccounts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<ChartOfAccounts> = new DateField('ValidTo', ChartOfAccounts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_REMARKS: StringField<ChartOfAccounts> = new StringField('ValidRemarks', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[frozenFor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_FOR: EnumField<ChartOfAccounts> = new EnumField('FrozenFor', ChartOfAccounts);
  /**
   * Static representation of the [[frozenFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_FROM: DateField<ChartOfAccounts> = new DateField('FrozenFrom', ChartOfAccounts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_TO: DateField<ChartOfAccounts> = new DateField('FrozenTo', ChartOfAccounts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_REMARKS: StringField<ChartOfAccounts> = new StringField('FrozenRemarks', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[blockManualPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_MANUAL_POSTING: EnumField<ChartOfAccounts> = new EnumField('BlockManualPosting', ChartOfAccounts);
  /**
   * Static representation of the [[cashFlowRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_FLOW_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('CashFlowRelevant', ChartOfAccounts);
  /**
   * Static representation of the [[pcn874ReportRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PCN_874_REPORT_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('PCN874ReportRelevant', ChartOfAccounts);
  /**
   * Static representation of the [[primaryClosingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_CLOSING_ACCOUNT: StringField<ChartOfAccounts> = new StringField('PrimaryClosingAccount', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the [[costAccountingOnly]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ACCOUNTING_ONLY: EnumField<ChartOfAccounts> = new EnumField('CostAccountingOnly', ChartOfAccounts);
  /**
   * Static representation of the [[costElementRelevant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ELEMENT_RELEVANT: EnumField<ChartOfAccounts> = new EnumField('CostElementRelevant', ChartOfAccounts);
  /**
   * Static representation of the [[costElementCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ELEMENT_CODE: StringField<ChartOfAccounts> = new StringField('CostElementCode', ChartOfAccounts, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ORDERS: OneToManyLink<ChartOfAccounts, WorkOrders> = new OneToManyLink('WorkOrders', ChartOfAccounts, WorkOrders);
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<ChartOfAccounts, Warehouses> = new OneToManyLink('Warehouses', ChartOfAccounts, Warehouses);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<ChartOfAccounts, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', ChartOfAccounts, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[customsGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_GROUPS: OneToManyLink<ChartOfAccounts, CustomsGroups> = new OneToManyLink('CustomsGroups', ChartOfAccounts, CustomsGroups);
  /**
   * Static representation of the one-to-many navigation property [[accrualTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_TYPES: OneToManyLink<ChartOfAccounts, AccrualTypes> = new OneToManyLink('AccrualTypes', ChartOfAccounts, AccrualTypes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<ChartOfAccounts, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', ChartOfAccounts, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToManyLink<ChartOfAccounts, ItemGroups> = new OneToManyLink('ItemGroups', ChartOfAccounts, ItemGroups);
  /**
   * Static representation of the one-to-many navigation property [[vatGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUPS: OneToManyLink<ChartOfAccounts, VatGroups> = new OneToManyLink('VatGroups', ChartOfAccounts, VatGroups);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<ChartOfAccounts, VendorPayments> = new OneToManyLink('VendorPayments', ChartOfAccounts, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_PAGES: OneToManyLink<ChartOfAccounts, BankPages> = new OneToManyLink('BankPages', ChartOfAccounts, BankPages);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<ChartOfAccounts, Items> = new OneToManyLink('Items', ChartOfAccounts, Items);
  /**
   * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARDS: OneToManyLink<ChartOfAccounts, CreditCards> = new OneToManyLink('CreditCards', ChartOfAccounts, CreditCards);
  /**
   * Static representation of the one-to-many navigation property [[faAccountDeterminations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FA_ACCOUNT_DETERMINATIONS: OneToManyLink<ChartOfAccounts, FaAccountDeterminations> = new OneToManyLink('FAAccountDeterminations', ChartOfAccounts, FaAccountDeterminations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<ChartOfAccounts, DeliveryNotes> = new OneToManyLink('DeliveryNotes', ChartOfAccounts, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<ChartOfAccounts, BusinessPartners> = new OneToManyLink('BusinessPartners', ChartOfAccounts, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<ChartOfAccounts, Quotations> = new OneToManyLink('Quotations', ChartOfAccounts, Quotations);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<ChartOfAccounts, Currencies> = new OneToOneLink('Currency', ChartOfAccounts, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<ChartOfAccounts, Projects> = new OneToOneLink('Project', ChartOfAccounts, Projects);
  /**
   * Static representation of the one-to-one navigation property [[accountCategory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CATEGORY: OneToOneLink<ChartOfAccounts, AccountCategory> = new OneToOneLink('AccountCategory', ChartOfAccounts, AccountCategory);
  /**
   * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE_2: OneToOneLink<ChartOfAccounts, TransactionCodes> = new OneToOneLink('TransactionCode2', ChartOfAccounts, TransactionCodes);
  /**
   * Static representation of the one-to-one navigation property [[distributionRule]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE: OneToOneLink<ChartOfAccounts, DistributionRules> = new OneToOneLink('DistributionRule', ChartOfAccounts, DistributionRules);
  /**
   * Static representation of the one-to-one navigation property [[costElement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ELEMENT: OneToOneLink<ChartOfAccounts, CostElements> = new OneToOneLink('CostElement', ChartOfAccounts, CostElements);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<ChartOfAccounts, InventoryGenExits> = new OneToManyLink('InventoryGenExits', ChartOfAccounts, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<ChartOfAccounts, PurchaseRequests> = new OneToManyLink('PurchaseRequests', ChartOfAccounts, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<ChartOfAccounts, ReturnRequest> = new OneToManyLink('ReturnRequest', ChartOfAccounts, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<ChartOfAccounts, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', ChartOfAccounts, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<ChartOfAccounts, PurchaseReturns> = new OneToManyLink('PurchaseReturns', ChartOfAccounts, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<ChartOfAccounts, Invoices> = new OneToManyLink('Invoices', ChartOfAccounts, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<ChartOfAccounts, CreditNotes> = new OneToManyLink('CreditNotes', ChartOfAccounts, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACES: OneToManyLink<ChartOfAccounts, BusinessPlaces> = new OneToManyLink('BusinessPlaces', ChartOfAccounts, BusinessPlaces);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<ChartOfAccounts, Orders> = new OneToManyLink('Orders', ChartOfAccounts, Orders);
  /**
   * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_EXPENSES: OneToManyLink<ChartOfAccounts, AdditionalExpenses> = new OneToManyLink('AdditionalExpenses', ChartOfAccounts, AdditionalExpenses);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<ChartOfAccounts, DownPayments> = new OneToManyLink('DownPayments', ChartOfAccounts, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<ChartOfAccounts, Drafts> = new OneToManyLink('Drafts', ChartOfAccounts, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_AUTHORITIES: OneToManyLink<ChartOfAccounts, SalesTaxAuthorities> = new OneToManyLink('SalesTaxAuthorities', ChartOfAccounts, SalesTaxAuthorities);
  /**
   * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHODS: OneToManyLink<ChartOfAccounts, WizardPaymentMethods> = new OneToManyLink('WizardPaymentMethods', ChartOfAccounts, WizardPaymentMethods);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<ChartOfAccounts, PaymentDrafts> = new OneToManyLink('PaymentDrafts', ChartOfAccounts, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<ChartOfAccounts, Returns> = new OneToManyLink('Returns', ChartOfAccounts, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<ChartOfAccounts, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', ChartOfAccounts, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', ChartOfAccounts, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', ChartOfAccounts, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<ChartOfAccounts, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', ChartOfAccounts, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<ChartOfAccounts, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', ChartOfAccounts, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<ChartOfAccounts, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', ChartOfAccounts, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<ChartOfAccounts, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', ChartOfAccounts, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[dunningTerms]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_TERMS: OneToManyLink<ChartOfAccounts, DunningTerms> = new OneToManyLink('DunningTerms', ChartOfAccounts, DunningTerms);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<ChartOfAccounts, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', ChartOfAccounts, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_TYPES: OneToManyLink<ChartOfAccounts, ExpenseTypes> = new OneToManyLink('ExpenseTypes', ChartOfAccounts, ExpenseTypes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<ChartOfAccounts, PurchaseOrders> = new OneToManyLink('PurchaseOrders', ChartOfAccounts, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNTS: OneToManyLink<ChartOfAccounts, HouseBankAccounts> = new OneToManyLink('HouseBankAccounts', ChartOfAccounts, HouseBankAccounts);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<ChartOfAccounts, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', ChartOfAccounts, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<ChartOfAccounts, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', ChartOfAccounts, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<ChartOfAccounts, IncomingPayments> = new OneToManyLink('IncomingPayments', ChartOfAccounts, IncomingPayments);
  /**
   * All fields of the ChartOfAccounts entity.
   */
  export const _allFields: Array<StringField<ChartOfAccounts> | NumberField<ChartOfAccounts> | EnumField<ChartOfAccounts> | DateField<ChartOfAccounts> | OneToManyLink<ChartOfAccounts, WorkOrders> | OneToManyLink<ChartOfAccounts, Warehouses> | OneToManyLink<ChartOfAccounts, InventoryGenEntries> | OneToManyLink<ChartOfAccounts, CustomsGroups> | OneToManyLink<ChartOfAccounts, AccrualTypes> | OneToManyLink<ChartOfAccounts, PurchaseQuotations> | OneToManyLink<ChartOfAccounts, ItemGroups> | OneToManyLink<ChartOfAccounts, VatGroups> | OneToManyLink<ChartOfAccounts, VendorPayments> | OneToManyLink<ChartOfAccounts, BankPages> | OneToManyLink<ChartOfAccounts, Items> | OneToManyLink<ChartOfAccounts, CreditCards> | OneToManyLink<ChartOfAccounts, FaAccountDeterminations> | OneToManyLink<ChartOfAccounts, DeliveryNotes> | OneToManyLink<ChartOfAccounts, BusinessPartners> | OneToManyLink<ChartOfAccounts, Quotations> | OneToOneLink<ChartOfAccounts, Currencies> | OneToOneLink<ChartOfAccounts, Projects> | OneToOneLink<ChartOfAccounts, AccountCategory> | OneToOneLink<ChartOfAccounts, TransactionCodes> | OneToOneLink<ChartOfAccounts, DistributionRules> | OneToOneLink<ChartOfAccounts, CostElements> | OneToManyLink<ChartOfAccounts, InventoryGenExits> | OneToManyLink<ChartOfAccounts, PurchaseRequests> | OneToManyLink<ChartOfAccounts, ReturnRequest> | OneToManyLink<ChartOfAccounts, GlAccountAdvancedRules> | OneToManyLink<ChartOfAccounts, PurchaseReturns> | OneToManyLink<ChartOfAccounts, Invoices> | OneToManyLink<ChartOfAccounts, CreditNotes> | OneToManyLink<ChartOfAccounts, BusinessPlaces> | OneToManyLink<ChartOfAccounts, Orders> | OneToManyLink<ChartOfAccounts, AdditionalExpenses> | OneToManyLink<ChartOfAccounts, DownPayments> | OneToManyLink<ChartOfAccounts, Drafts> | OneToManyLink<ChartOfAccounts, SalesTaxAuthorities> | OneToManyLink<ChartOfAccounts, WizardPaymentMethods> | OneToManyLink<ChartOfAccounts, PaymentDrafts> | OneToManyLink<ChartOfAccounts, Returns> | OneToManyLink<ChartOfAccounts, CorrectionInvoiceReversal> | OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoice> | OneToManyLink<ChartOfAccounts, CorrectionPurchaseInvoiceReversal> | OneToManyLink<ChartOfAccounts, PurchaseInvoices> | OneToManyLink<ChartOfAccounts, PurchaseDeliveryNotes> | OneToManyLink<ChartOfAccounts, CorrectionInvoice> | OneToManyLink<ChartOfAccounts, PurchaseCreditNotes> | OneToManyLink<ChartOfAccounts, DunningTerms> | OneToManyLink<ChartOfAccounts, PurchaseDownPayments> | OneToManyLink<ChartOfAccounts, ExpenseTypes> | OneToManyLink<ChartOfAccounts, PurchaseOrders> | OneToManyLink<ChartOfAccounts, HouseBankAccounts> | OneToManyLink<ChartOfAccounts, WithholdingTaxCodes> | OneToManyLink<ChartOfAccounts, GoodsReturnRequest> | OneToManyLink<ChartOfAccounts, IncomingPayments>> = [
    ChartOfAccounts.CODE,
    ChartOfAccounts.NAME,
    ChartOfAccounts.BALANCE,
    ChartOfAccounts.CASH_ACCOUNT,
    ChartOfAccounts.BUDGET_ACCOUNT,
    ChartOfAccounts.ACTIVE_ACCOUNT,
    ChartOfAccounts.PRIMARY_ACCOUNT,
    ChartOfAccounts.ACCOUNT_LEVEL,
    ChartOfAccounts.DATA_EXPORT_CODE,
    ChartOfAccounts.FATHER_ACCOUNT_KEY,
    ChartOfAccounts.EXTERNAL_CODE,
    ChartOfAccounts.RATE_CONVERSION,
    ChartOfAccounts.TAX_LIABLE_ACCOUNT,
    ChartOfAccounts.TAX_EXEMPT_ACCOUNT,
    ChartOfAccounts.EXTERNAL_RECON_NO,
    ChartOfAccounts.INTERNAL_RECON_NO,
    ChartOfAccounts.ACCOUNT_TYPE,
    ChartOfAccounts.ACCT_CURRENCY,
    ChartOfAccounts.BALANCE_SYSCURR,
    ChartOfAccounts.BALANCE_FRGN_CURR,
    ChartOfAccounts.PROTECTED,
    ChartOfAccounts.RECONCILED_ACCOUNT,
    ChartOfAccounts.LIABLE_FOR_ADVANCES,
    ChartOfAccounts.FOREIGN_NAME,
    ChartOfAccounts.DETAILS,
    ChartOfAccounts.PROJECT_CODE,
    ChartOfAccounts.REVALUATION_COORDINATED,
    ChartOfAccounts.LOCK_MANUAL_TRANSACTION,
    ChartOfAccounts.FORMAT_CODE,
    ChartOfAccounts.ALLOW_CHANGE_VAT_GROUP,
    ChartOfAccounts.DEFAULT_VAT_GROUP,
    ChartOfAccounts.CATEGORY,
    ChartOfAccounts.TRANSACTION_CODE,
    ChartOfAccounts.LOADING_TYPE,
    ChartOfAccounts.LOADING_FACTOR_CODE,
    ChartOfAccounts.LOADING_FACTOR_CODE_2,
    ChartOfAccounts.LOADING_FACTOR_CODE_3,
    ChartOfAccounts.LOADING_FACTOR_CODE_4,
    ChartOfAccounts.LOADING_FACTOR_CODE_5,
    ChartOfAccounts.PLANNING_LEVEL,
    ChartOfAccounts.DATEV_ACCOUNT,
    ChartOfAccounts.DATEV_AUTO_ACCOUNT,
    ChartOfAccounts.DATEV_FIRST_DATA_ENTRY,
    ChartOfAccounts.ALLOW_MULTIPLE_LINKING,
    ChartOfAccounts.PROJECT_RELEVANT,
    ChartOfAccounts.DISTRIBUTION_RULE_RELEVANT,
    ChartOfAccounts.DISTRIBUTION_RULE_2_RELEVANT,
    ChartOfAccounts.DISTRIBUTION_RULE_3_RELEVANT,
    ChartOfAccounts.DISTRIBUTION_RULE_4_RELEVANT,
    ChartOfAccounts.DISTRIBUTION_RULE_5_RELEVANT,
    ChartOfAccounts.BPLID,
    ChartOfAccounts.BPL_NAME,
    ChartOfAccounts.VAT_REG_NUM,
    ChartOfAccounts.ACCOUNT_PURPOSE_CODE,
    ChartOfAccounts.REFERENTIAL_ACCOUNT_CODE,
    ChartOfAccounts.VALID_FOR,
    ChartOfAccounts.VALID_FROM,
    ChartOfAccounts.VALID_TO,
    ChartOfAccounts.VALID_REMARKS,
    ChartOfAccounts.FROZEN_FOR,
    ChartOfAccounts.FROZEN_FROM,
    ChartOfAccounts.FROZEN_TO,
    ChartOfAccounts.FROZEN_REMARKS,
    ChartOfAccounts.BLOCK_MANUAL_POSTING,
    ChartOfAccounts.CASH_FLOW_RELEVANT,
    ChartOfAccounts.PCN_874_REPORT_RELEVANT,
    ChartOfAccounts.PRIMARY_CLOSING_ACCOUNT,
    ChartOfAccounts.COST_ACCOUNTING_ONLY,
    ChartOfAccounts.COST_ELEMENT_RELEVANT,
    ChartOfAccounts.COST_ELEMENT_CODE,
    ChartOfAccounts.WORK_ORDERS,
    ChartOfAccounts.WAREHOUSES,
    ChartOfAccounts.INVENTORY_GEN_ENTRIES,
    ChartOfAccounts.CUSTOMS_GROUPS,
    ChartOfAccounts.ACCRUAL_TYPES,
    ChartOfAccounts.PURCHASE_QUOTATIONS,
    ChartOfAccounts.ITEM_GROUPS,
    ChartOfAccounts.VAT_GROUPS,
    ChartOfAccounts.VENDOR_PAYMENTS,
    ChartOfAccounts.BANK_PAGES,
    ChartOfAccounts.ITEMS,
    ChartOfAccounts.CREDIT_CARDS,
    ChartOfAccounts.FA_ACCOUNT_DETERMINATIONS,
    ChartOfAccounts.DELIVERY_NOTES,
    ChartOfAccounts.BUSINESS_PARTNERS,
    ChartOfAccounts.QUOTATIONS,
    ChartOfAccounts.CURRENCY,
    ChartOfAccounts.PROJECT,
    ChartOfAccounts.ACCOUNT_CATEGORY,
    ChartOfAccounts.TRANSACTION_CODE_2,
    ChartOfAccounts.DISTRIBUTION_RULE,
    ChartOfAccounts.COST_ELEMENT,
    ChartOfAccounts.INVENTORY_GEN_EXITS,
    ChartOfAccounts.PURCHASE_REQUESTS,
    ChartOfAccounts.RETURN_REQUEST,
    ChartOfAccounts.GL_ACCOUNT_ADVANCED_RULES,
    ChartOfAccounts.PURCHASE_RETURNS,
    ChartOfAccounts.INVOICES,
    ChartOfAccounts.CREDIT_NOTES,
    ChartOfAccounts.BUSINESS_PLACES,
    ChartOfAccounts.ORDERS,
    ChartOfAccounts.ADDITIONAL_EXPENSES,
    ChartOfAccounts.DOWN_PAYMENTS,
    ChartOfAccounts.DRAFTS,
    ChartOfAccounts.SALES_TAX_AUTHORITIES,
    ChartOfAccounts.WIZARD_PAYMENT_METHODS,
    ChartOfAccounts.PAYMENT_DRAFTS,
    ChartOfAccounts.RETURNS,
    ChartOfAccounts.CORRECTION_INVOICE_REVERSAL,
    ChartOfAccounts.CORRECTION_PURCHASE_INVOICE,
    ChartOfAccounts.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    ChartOfAccounts.PURCHASE_INVOICES,
    ChartOfAccounts.PURCHASE_DELIVERY_NOTES,
    ChartOfAccounts.CORRECTION_INVOICE,
    ChartOfAccounts.PURCHASE_CREDIT_NOTES,
    ChartOfAccounts.DUNNING_TERMS,
    ChartOfAccounts.PURCHASE_DOWN_PAYMENTS,
    ChartOfAccounts.EXPENSE_TYPES,
    ChartOfAccounts.PURCHASE_ORDERS,
    ChartOfAccounts.HOUSE_BANK_ACCOUNTS,
    ChartOfAccounts.WITHHOLDING_TAX_CODES,
    ChartOfAccounts.GOODS_RETURN_REQUEST,
    ChartOfAccounts.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ChartOfAccounts> = new AllFields('*', ChartOfAccounts);
  /**
   * All key fields of the ChartOfAccounts entity.
   */
  export const _keyFields: Array<Field<ChartOfAccounts>> = [ChartOfAccounts.CODE];
  /**
   * Mapping of all key field names to the respective static field property ChartOfAccounts.
   */
  export const _keys: { [keys: string]: Field<ChartOfAccounts> } = ChartOfAccounts._keyFields.reduce((acc: { [keys: string]: Field<ChartOfAccounts> }, field: Field<ChartOfAccounts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
