/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectsRequestBuilder } from './ProjectsRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Projects" of service "SAPB1".
 */
export class Projects extends EntityV4 implements ProjectsType {
  /**
   * Technical entity name for Projects.
   */
  static _entityName = 'Projects';
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
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];
  /**
   * One-to-many navigation property to the [[ProductionOrders]] entity.
   */
  productionOrders!: ProductionOrders[];
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
   * One-to-many navigation property to the [[ProductTrees]] entity.
   */
  productTrees!: ProductTrees[];
  /**
   * One-to-many navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccounts!: ChartOfAccounts[];
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
   * One-to-many navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreements!: BlanketAgreements[];
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
   * One-to-many navigation property to the [[BudgetScenarios]] entity.
   */
  budgetScenarios!: BudgetScenarios[];
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
   * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
   */
  purchaseDownPayments!: PurchaseDownPayments[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[Deposits]] entity.
   */
  deposits!: Deposits[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `Projects`.
   * @returns A builder that constructs instances of entity type `Projects`.
   */
  static builder(): EntityBuilderType<Projects, ProjectsType> {
    return EntityV4.entityBuilder(Projects);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Projects` entity type.
   * @returns A `Projects` request builder.
   */
  static requestBuilder(): ProjectsRequestBuilder {
    return new ProjectsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Projects`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Projects`.
   */
  static customField(fieldName: string): CustomFieldV4<Projects> {
    return EntityV4.customFieldSelector(fieldName, Projects);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';
import { Orders, OrdersType } from './Orders';
import { AdditionalExpenses, AdditionalExpensesType } from './AdditionalExpenses';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { Deposits, DepositsType } from './Deposits';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface ProjectsType {
  code?: string | null;
  name?: string | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  active?: BoYesNoEnum | null;
  salesOpportunities: SalesOpportunitiesType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  vendorPayments: VendorPaymentsType[];
  journalEntries: JournalEntriesType[];
  productionOrders: ProductionOrdersType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  productTrees: ProductTreesType[];
  chartOfAccounts: ChartOfAccountsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  returnRequest: ReturnRequestType[];
  blanketAgreements: BlanketAgreementsType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  budgetScenarios: BudgetScenariosType[];
  orders: OrdersType[];
  additionalExpenses: AdditionalExpensesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  paymentDrafts: PaymentDraftsType[];
  returns: ReturnsType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  purchaseOrders: PurchaseOrdersType[];
  projectManagements: ProjectManagementsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  deposits: DepositsType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace Projects {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Projects> = new StringField('Code', Projects, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Projects> = new StringField('Name', Projects, 'Edm.String');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<Projects> = new DateField('ValidFrom', Projects, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<Projects> = new DateField('ValidTo', Projects, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<Projects> = new EnumField('Active', Projects);
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<Projects, SalesOpportunities> = new OneToManyLink('SalesOpportunities', Projects, SalesOpportunities);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<Projects, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', Projects, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<Projects, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', Projects, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<Projects, VendorPayments> = new OneToManyLink('VendorPayments', Projects, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<Projects, JournalEntries> = new OneToManyLink('JournalEntries', Projects, JournalEntries);
  /**
   * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCTION_ORDERS: OneToManyLink<Projects, ProductionOrders> = new OneToManyLink('ProductionOrders', Projects, ProductionOrders);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<Projects, DeliveryNotes> = new OneToManyLink('DeliveryNotes', Projects, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Projects, BusinessPartners> = new OneToManyLink('BusinessPartners', Projects, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<Projects, Quotations> = new OneToManyLink('Quotations', Projects, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TREES: OneToManyLink<Projects, ProductTrees> = new OneToManyLink('ProductTrees', Projects, ProductTrees);
  /**
   * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: OneToManyLink<Projects, ChartOfAccounts> = new OneToManyLink('ChartOfAccounts', Projects, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<Projects, InventoryGenExits> = new OneToManyLink('InventoryGenExits', Projects, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<Projects, PurchaseRequests> = new OneToManyLink('PurchaseRequests', Projects, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<Projects, ReturnRequest> = new OneToManyLink('ReturnRequest', Projects, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<Projects, BlanketAgreements> = new OneToManyLink('BlanketAgreements', Projects, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<Projects, PurchaseReturns> = new OneToManyLink('PurchaseReturns', Projects, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<Projects, Invoices> = new OneToManyLink('Invoices', Projects, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<Projects, CreditNotes> = new OneToManyLink('CreditNotes', Projects, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[budgetScenarios]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_SCENARIOS: OneToManyLink<Projects, BudgetScenarios> = new OneToManyLink('BudgetScenarios', Projects, BudgetScenarios);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<Projects, Orders> = new OneToManyLink('Orders', Projects, Orders);
  /**
   * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_EXPENSES: OneToManyLink<Projects, AdditionalExpenses> = new OneToManyLink('AdditionalExpenses', Projects, AdditionalExpenses);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<Projects, DownPayments> = new OneToManyLink('DownPayments', Projects, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<Projects, Drafts> = new OneToManyLink('Drafts', Projects, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<Projects, PaymentDrafts> = new OneToManyLink('PaymentDrafts', Projects, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<Projects, Returns> = new OneToManyLink('Returns', Projects, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Projects, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', Projects, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Projects, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', Projects, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Projects, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', Projects, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<Projects, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', Projects, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<Projects, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', Projects, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<Projects, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', Projects, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<Projects, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', Projects, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Projects, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', Projects, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<Projects, PurchaseOrders> = new OneToManyLink('PurchaseOrders', Projects, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<Projects, ProjectManagements> = new OneToManyLink('ProjectManagements', Projects, ProjectManagements);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<Projects, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', Projects, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[deposits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSITS: OneToManyLink<Projects, Deposits> = new OneToManyLink('Deposits', Projects, Deposits);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<Projects, IncomingPayments> = new OneToManyLink('IncomingPayments', Projects, IncomingPayments);
  /**
   * All fields of the Projects entity.
   */
  export const _allFields: Array<StringField<Projects> | DateField<Projects> | EnumField<Projects> | OneToManyLink<Projects, SalesOpportunities> | OneToManyLink<Projects, InventoryGenEntries> | OneToManyLink<Projects, PurchaseQuotations> | OneToManyLink<Projects, VendorPayments> | OneToManyLink<Projects, JournalEntries> | OneToManyLink<Projects, ProductionOrders> | OneToManyLink<Projects, DeliveryNotes> | OneToManyLink<Projects, BusinessPartners> | OneToManyLink<Projects, Quotations> | OneToManyLink<Projects, ProductTrees> | OneToManyLink<Projects, ChartOfAccounts> | OneToManyLink<Projects, InventoryGenExits> | OneToManyLink<Projects, PurchaseRequests> | OneToManyLink<Projects, ReturnRequest> | OneToManyLink<Projects, BlanketAgreements> | OneToManyLink<Projects, PurchaseReturns> | OneToManyLink<Projects, Invoices> | OneToManyLink<Projects, CreditNotes> | OneToManyLink<Projects, BudgetScenarios> | OneToManyLink<Projects, Orders> | OneToManyLink<Projects, AdditionalExpenses> | OneToManyLink<Projects, DownPayments> | OneToManyLink<Projects, Drafts> | OneToManyLink<Projects, PaymentDrafts> | OneToManyLink<Projects, Returns> | OneToManyLink<Projects, CorrectionInvoiceReversal> | OneToManyLink<Projects, CorrectionPurchaseInvoice> | OneToManyLink<Projects, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Projects, PurchaseInvoices> | OneToManyLink<Projects, PurchaseDeliveryNotes> | OneToManyLink<Projects, CorrectionInvoice> | OneToManyLink<Projects, PurchaseCreditNotes> | OneToManyLink<Projects, PurchaseDownPayments> | OneToManyLink<Projects, PurchaseOrders> | OneToManyLink<Projects, ProjectManagements> | OneToManyLink<Projects, GoodsReturnRequest> | OneToManyLink<Projects, Deposits> | OneToManyLink<Projects, IncomingPayments>> = [
    Projects.CODE,
    Projects.NAME,
    Projects.VALID_FROM,
    Projects.VALID_TO,
    Projects.ACTIVE,
    Projects.SALES_OPPORTUNITIES,
    Projects.INVENTORY_GEN_ENTRIES,
    Projects.PURCHASE_QUOTATIONS,
    Projects.VENDOR_PAYMENTS,
    Projects.JOURNAL_ENTRIES,
    Projects.PRODUCTION_ORDERS,
    Projects.DELIVERY_NOTES,
    Projects.BUSINESS_PARTNERS,
    Projects.QUOTATIONS,
    Projects.PRODUCT_TREES,
    Projects.CHART_OF_ACCOUNTS,
    Projects.INVENTORY_GEN_EXITS,
    Projects.PURCHASE_REQUESTS,
    Projects.RETURN_REQUEST,
    Projects.BLANKET_AGREEMENTS,
    Projects.PURCHASE_RETURNS,
    Projects.INVOICES,
    Projects.CREDIT_NOTES,
    Projects.BUDGET_SCENARIOS,
    Projects.ORDERS,
    Projects.ADDITIONAL_EXPENSES,
    Projects.DOWN_PAYMENTS,
    Projects.DRAFTS,
    Projects.PAYMENT_DRAFTS,
    Projects.RETURNS,
    Projects.CORRECTION_INVOICE_REVERSAL,
    Projects.CORRECTION_PURCHASE_INVOICE,
    Projects.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    Projects.PURCHASE_INVOICES,
    Projects.PURCHASE_DELIVERY_NOTES,
    Projects.CORRECTION_INVOICE,
    Projects.PURCHASE_CREDIT_NOTES,
    Projects.PURCHASE_DOWN_PAYMENTS,
    Projects.PURCHASE_ORDERS,
    Projects.PROJECT_MANAGEMENTS,
    Projects.GOODS_RETURN_REQUEST,
    Projects.DEPOSITS,
    Projects.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Projects> = new AllFields('*', Projects);
  /**
   * All key fields of the Projects entity.
   */
  export const _keyFields: Array<Field<Projects>> = [Projects.CODE];
  /**
   * Mapping of all key field names to the respective static field property Projects.
   */
  export const _keys: { [keys: string]: Field<Projects> } = Projects._keyFields.reduce((acc: { [keys: string]: Field<Projects> }, field: Field<Projects>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
