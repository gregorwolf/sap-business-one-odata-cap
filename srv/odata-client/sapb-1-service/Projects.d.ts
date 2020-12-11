import { ProjectsRequestBuilder } from './ProjectsRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Projects" of service "SAPB1".
 */
export declare class Projects extends EntityV4 implements ProjectsType {
    /**
     * Technical entity name for Projects.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[JournalEntries]] entity.
     */
    journalEntries: JournalEntries[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[Quotations]] entity.
     */
    quotations: Quotations[];
    /**
     * One-to-many navigation property to the [[ProductTrees]] entity.
     */
    productTrees: ProductTrees[];
    /**
     * One-to-many navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccounts: ChartOfAccounts[];
    /**
     * One-to-many navigation property to the [[InventoryGenExits]] entity.
     */
    inventoryGenExits: InventoryGenExits[];
    /**
     * One-to-many navigation property to the [[PurchaseRequests]] entity.
     */
    purchaseRequests: PurchaseRequests[];
    /**
     * One-to-many navigation property to the [[ReturnRequest]] entity.
     */
    returnRequest: ReturnRequest[];
    /**
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
    /**
     * One-to-many navigation property to the [[PurchaseReturns]] entity.
     */
    purchaseReturns: PurchaseReturns[];
    /**
     * One-to-many navigation property to the [[Invoices]] entity.
     */
    invoices: Invoices[];
    /**
     * One-to-many navigation property to the [[CreditNotes]] entity.
     */
    creditNotes: CreditNotes[];
    /**
     * One-to-many navigation property to the [[BudgetScenarios]] entity.
     */
    budgetScenarios: BudgetScenarios[];
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[AdditionalExpenses]] entity.
     */
    additionalExpenses: AdditionalExpenses[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[Returns]] entity.
     */
    returns: Returns[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
     */
    correctionInvoiceReversal: CorrectionInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
     */
    correctionPurchaseInvoice: CorrectionPurchaseInvoice[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
     */
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[PurchaseInvoices]] entity.
     */
    purchaseInvoices: PurchaseInvoices[];
    /**
     * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
     */
    purchaseDeliveryNotes: PurchaseDeliveryNotes[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoice]] entity.
     */
    correctionInvoice: CorrectionInvoice[];
    /**
     * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
     */
    purchaseCreditNotes: PurchaseCreditNotes[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * One-to-many navigation property to the [[Deposits]] entity.
     */
    deposits: Deposits[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `Projects`.
     * @returns A builder that constructs instances of entity type `Projects`.
     */
    static builder(): EntityBuilderType<Projects, ProjectsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Projects` entity type.
     * @returns A `Projects` request builder.
     */
    static requestBuilder(): ProjectsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Projects`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Projects`.
     */
    static customField(fieldName: string): CustomFieldV4<Projects>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Projects {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Projects>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Projects>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<Projects>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<Projects>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<Projects>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<Projects, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<Projects, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<Projects, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<Projects, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRIES: OneToManyLink<Projects, JournalEntries>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<Projects, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<Projects, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<Projects, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<Projects, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREES: OneToManyLink<Projects, ProductTrees>;
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNTS: OneToManyLink<Projects, ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<Projects, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<Projects, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<Projects, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<Projects, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<Projects, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<Projects, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<Projects, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[budgetScenarios]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_SCENARIOS: OneToManyLink<Projects, BudgetScenarios>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<Projects, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_EXPENSES: OneToManyLink<Projects, AdditionalExpenses>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<Projects, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<Projects, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<Projects, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<Projects, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Projects, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Projects, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Projects, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<Projects, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<Projects, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<Projects, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<Projects, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Projects, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<Projects, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<Projects, ProjectManagements>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<Projects, GoodsReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPOSITS: OneToManyLink<Projects, Deposits>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<Projects, IncomingPayments>;
    /**
     * All fields of the Projects entity.
     */
    const _allFields: Array<StringField<Projects> | DateField<Projects> | EnumField<Projects> | OneToManyLink<Projects, SalesOpportunities> | OneToManyLink<Projects, InventoryGenEntries> | OneToManyLink<Projects, PurchaseQuotations> | OneToManyLink<Projects, VendorPayments> | OneToManyLink<Projects, JournalEntries> | OneToManyLink<Projects, ProductionOrders> | OneToManyLink<Projects, DeliveryNotes> | OneToManyLink<Projects, BusinessPartners> | OneToManyLink<Projects, Quotations> | OneToManyLink<Projects, ProductTrees> | OneToManyLink<Projects, ChartOfAccounts> | OneToManyLink<Projects, InventoryGenExits> | OneToManyLink<Projects, PurchaseRequests> | OneToManyLink<Projects, ReturnRequest> | OneToManyLink<Projects, BlanketAgreements> | OneToManyLink<Projects, PurchaseReturns> | OneToManyLink<Projects, Invoices> | OneToManyLink<Projects, CreditNotes> | OneToManyLink<Projects, BudgetScenarios> | OneToManyLink<Projects, Orders> | OneToManyLink<Projects, AdditionalExpenses> | OneToManyLink<Projects, DownPayments> | OneToManyLink<Projects, Drafts> | OneToManyLink<Projects, PaymentDrafts> | OneToManyLink<Projects, Returns> | OneToManyLink<Projects, CorrectionInvoiceReversal> | OneToManyLink<Projects, CorrectionPurchaseInvoice> | OneToManyLink<Projects, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Projects, PurchaseInvoices> | OneToManyLink<Projects, PurchaseDeliveryNotes> | OneToManyLink<Projects, CorrectionInvoice> | OneToManyLink<Projects, PurchaseCreditNotes> | OneToManyLink<Projects, PurchaseDownPayments> | OneToManyLink<Projects, PurchaseOrders> | OneToManyLink<Projects, ProjectManagements> | OneToManyLink<Projects, GoodsReturnRequest> | OneToManyLink<Projects, Deposits> | OneToManyLink<Projects, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Projects>;
    /**
     * All key fields of the Projects entity.
     */
    const _keyFields: Array<Field<Projects>>;
    /**
     * Mapping of all key field names to the respective static field property Projects.
     */
    const _keys: {
        [keys: string]: Field<Projects>;
    };
}
//# sourceMappingURL=Projects.d.ts.map