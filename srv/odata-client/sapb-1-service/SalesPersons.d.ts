import { SalesPersonsRequestBuilder } from './SalesPersonsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesPersons" of service "SAPB1".
 */
export declare class SalesPersons extends EntityV4 implements SalesPersonsType {
    /**
     * Technical entity name for SalesPersons.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Sales Employee Code.
     * @nullable
     */
    salesEmployeeCode?: number;
    /**
     * Sales Employee Name.
     * @nullable
     */
    salesEmployeeName?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Commission For Sales Employee.
     * @nullable
     */
    commissionForSalesEmployee?: number;
    /**
     * Commission Group.
     * @nullable
     */
    commissionGroup?: number;
    /**
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
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
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-one navigation property to the [[CommissionGroups]] entity.
     */
    commissionGroup2: CommissionGroups;
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
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
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
     */
    inventoryTransferRequests: InventoryTransferRequests[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[StockTransferDrafts]] entity.
     */
    stockTransferDrafts: StockTransferDrafts[];
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
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
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
     * Returns an entity builder to construct instances of `SalesPersons`.
     * @returns A builder that constructs instances of entity type `SalesPersons`.
     */
    static builder(): EntityBuilderType<SalesPersons, SalesPersonsType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesPersons` entity type.
     * @returns A `SalesPersons` request builder.
     */
    static requestBuilder(): SalesPersonsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesPersons`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesPersons`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesPersons>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
import { Contacts, ContactsType } from './Contacts';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { Orders, OrdersType } from './Orders';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
export interface SalesPersonsType {
    salesEmployeeCode?: number | null;
    salesEmployeeName?: string | null;
    remarks?: string | null;
    commissionForSalesEmployee?: number | null;
    commissionGroup?: number | null;
    locked?: BoYesNoEnum | null;
    employeeId?: number | null;
    active?: BoYesNoEnum | null;
    salesOpportunities: SalesOpportunitiesType[];
    userDefaultGroups: UserDefaultGroupsType[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    commissionGroup2: CommissionGroupsType;
    contacts: ContactsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    stockTransfers: StockTransfersType[];
    orders: OrdersType[];
    inventoryTransferRequests: InventoryTransferRequestsType[];
    activities: ActivitiesType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    stockTransferDrafts: StockTransferDraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    employeesInfo: EmployeesInfoType[];
    purchaseOrders: PurchaseOrdersType[];
    projectManagements: ProjectManagementsType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export declare namespace SalesPersons {
    /**
     * Static representation of the [[salesEmployeeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE_CODE: NumberField<SalesPersons>;
    /**
     * Static representation of the [[salesEmployeeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE_NAME: StringField<SalesPersons>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<SalesPersons>;
    /**
     * Static representation of the [[commissionForSalesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_FOR_SALES_EMPLOYEE: NumberField<SalesPersons>;
    /**
     * Static representation of the [[commissionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP: NumberField<SalesPersons>;
    /**
     * Static representation of the [[locked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCKED: EnumField<SalesPersons>;
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ID: NumberField<SalesPersons>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<SalesPersons>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<SalesPersons, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<SalesPersons, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<SalesPersons, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<SalesPersons, PurchaseQuotations>;
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP_2: OneToOneLink<SalesPersons, CommissionGroups>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<SalesPersons, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<SalesPersons, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<SalesPersons, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<SalesPersons, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<SalesPersons, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<SalesPersons, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<SalesPersons, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<SalesPersons, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<SalesPersons, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<SalesPersons, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<SalesPersons, StockTransfers>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<SalesPersons, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<SalesPersons, InventoryTransferRequests>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<SalesPersons, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<SalesPersons, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<SalesPersons, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<SalesPersons, StockTransferDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<SalesPersons, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<SalesPersons, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<SalesPersons, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<SalesPersons, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<SalesPersons, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<SalesPersons, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<SalesPersons, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<SalesPersons, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<SalesPersons, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<SalesPersons, EmployeesInfo>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<SalesPersons, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<SalesPersons, ProjectManagements>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<SalesPersons, GoodsReturnRequest>;
    /**
     * All fields of the SalesPersons entity.
     */
    const _allFields: Array<NumberField<SalesPersons> | StringField<SalesPersons> | EnumField<SalesPersons> | OneToManyLink<SalesPersons, SalesOpportunities> | OneToManyLink<SalesPersons, UserDefaultGroups> | OneToManyLink<SalesPersons, InventoryGenEntries> | OneToManyLink<SalesPersons, PurchaseQuotations> | OneToOneLink<SalesPersons, CommissionGroups> | OneToManyLink<SalesPersons, Contacts> | OneToManyLink<SalesPersons, DeliveryNotes> | OneToManyLink<SalesPersons, BusinessPartners> | OneToManyLink<SalesPersons, Quotations> | OneToManyLink<SalesPersons, InventoryGenExits> | OneToManyLink<SalesPersons, PurchaseRequests> | OneToManyLink<SalesPersons, ReturnRequest> | OneToManyLink<SalesPersons, PurchaseReturns> | OneToManyLink<SalesPersons, Invoices> | OneToManyLink<SalesPersons, CreditNotes> | OneToManyLink<SalesPersons, StockTransfers> | OneToManyLink<SalesPersons, Orders> | OneToManyLink<SalesPersons, InventoryTransferRequests> | OneToManyLink<SalesPersons, Activities> | OneToManyLink<SalesPersons, DownPayments> | OneToManyLink<SalesPersons, Drafts> | OneToManyLink<SalesPersons, StockTransferDrafts> | OneToManyLink<SalesPersons, Returns> | OneToManyLink<SalesPersons, CorrectionInvoiceReversal> | OneToManyLink<SalesPersons, CorrectionPurchaseInvoice> | OneToManyLink<SalesPersons, CorrectionPurchaseInvoiceReversal> | OneToManyLink<SalesPersons, PurchaseInvoices> | OneToManyLink<SalesPersons, PurchaseDeliveryNotes> | OneToManyLink<SalesPersons, CorrectionInvoice> | OneToManyLink<SalesPersons, PurchaseCreditNotes> | OneToManyLink<SalesPersons, PurchaseDownPayments> | OneToManyLink<SalesPersons, EmployeesInfo> | OneToManyLink<SalesPersons, PurchaseOrders> | OneToManyLink<SalesPersons, ProjectManagements> | OneToManyLink<SalesPersons, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesPersons>;
    /**
     * All key fields of the SalesPersons entity.
     */
    const _keyFields: Array<Field<SalesPersons>>;
    /**
     * Mapping of all key field names to the respective static field property SalesPersons.
     */
    const _keys: {
        [keys: string]: Field<SalesPersons>;
    };
}
//# sourceMappingURL=SalesPersons.d.ts.map