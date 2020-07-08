import { PosDailySummaryRequestBuilder } from './PosDailySummaryRequestBuilder';
import { Moment } from 'moment';
import { PosTotalizer } from './PosTotalizer';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "POSDailySummary" of service "SAPB1".
 */
export declare class PosDailySummary extends Entity implements PosDailySummaryType {
    /**
     * Technical entity name for PosDailySummary.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PosDailySummary.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Equipment No.
     * @nullable
     */
    equipmentNo?: string;
    /**
     * Counter Position.
     * @nullable
     */
    counterPosition?: number;
    /**
     * Reset Counter Position.
     * @nullable
     */
    resetCounterPosition?: number;
    /**
     * Operation Counter.
     * @nullable
     */
    operationCounter?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Gross Sales.
     * @nullable
     */
    grossSales?: number;
    /**
     * Pis Total.
     * @nullable
     */
    pisTotal?: number;
    /**
     * Cofins Total.
     * @nullable
     */
    cofinsTotal?: number;
    /**
     * Pos Totalizer Collection.
     * @nullable
     */
    posTotalizerCollection?: PosTotalizer[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
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
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
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
     * One-to-one navigation property to the [[FiscalPrinter]] entity.
     */
    fiscalPrinter: FiscalPrinter;
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
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * Returns an entity builder to construct instances `PosDailySummary`.
     * @returns A builder that constructs instances of entity type `PosDailySummary`.
     */
    static builder(): EntityBuilderType<PosDailySummary, PosDailySummaryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PosDailySummary` entity type.
     * @returns A `PosDailySummary` request builder.
     */
    static requestBuilder(): PosDailySummaryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PosDailySummary`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PosDailySummary`.
     */
    static customField(fieldName: string): CustomField<PosDailySummary>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Orders, OrdersType } from './Orders';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { FiscalPrinter, FiscalPrinterType } from './FiscalPrinter';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
export interface PosDailySummaryType {
    absEntry?: number;
    date?: Moment;
    equipmentNo?: string;
    counterPosition?: number;
    resetCounterPosition?: number;
    operationCounter?: number;
    total?: number;
    grossSales?: number;
    pisTotal?: number;
    cofinsTotal?: number;
    posTotalizerCollection?: PosTotalizer[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    deliveryNotes: DeliveryNotesType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    fiscalPrinter: FiscalPrinterType;
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    purchaseOrders: PurchaseOrdersType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export interface PosDailySummaryTypeForceMandatory {
    absEntry: number;
    date: Moment;
    equipmentNo: string;
    counterPosition: number;
    resetCounterPosition: number;
    operationCounter: number;
    total: number;
    grossSales: number;
    pisTotal: number;
    cofinsTotal: number;
    posTotalizerCollection: PosTotalizer[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    deliveryNotes: DeliveryNotesType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    fiscalPrinter: FiscalPrinterType;
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    purchaseOrders: PurchaseOrdersType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export declare namespace PosDailySummary {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<PosDailySummary>;
    /**
     * Static representation of the [[equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_NO: StringField<PosDailySummary>;
    /**
     * Static representation of the [[counterPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTER_POSITION: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[resetCounterPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESET_COUNTER_POSITION: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[operationCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION_COUNTER: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[grossSales]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROSS_SALES: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[pisTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PIS_TOTAL: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[cofinsTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COFINS_TOTAL: NumberField<PosDailySummary>;
    /**
     * Static representation of the [[posTotalizerCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_TOTALIZER_COLLECTION: CollectionField<PosDailySummary>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<PosDailySummary, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<PosDailySummary, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<PosDailySummary, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<PosDailySummary, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<PosDailySummary, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<PosDailySummary, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<PosDailySummary, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<PosDailySummary, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<PosDailySummary, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<PosDailySummary, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<PosDailySummary, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<PosDailySummary, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<PosDailySummary, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<PosDailySummary, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<PosDailySummary, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<PosDailySummary, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<PosDailySummary, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-one navigation property [[fiscalPrinter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_PRINTER: OneToOneLink<PosDailySummary, FiscalPrinter>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<PosDailySummary, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<PosDailySummary, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<PosDailySummary, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<PosDailySummary, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<PosDailySummary, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<PosDailySummary, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<PosDailySummary, GoodsReturnRequest>;
    /**
     * All fields of the PosDailySummary entity.
     */
    const _allFields: Array<NumberField<PosDailySummary> | DateField<PosDailySummary> | StringField<PosDailySummary> | CollectionField<PosDailySummary> | OneToManyLink<PosDailySummary, InventoryGenEntries> | OneToManyLink<PosDailySummary, PurchaseQuotations> | OneToManyLink<PosDailySummary, DeliveryNotes> | OneToManyLink<PosDailySummary, Quotations> | OneToManyLink<PosDailySummary, InventoryGenExits> | OneToManyLink<PosDailySummary, PurchaseRequests> | OneToManyLink<PosDailySummary, ReturnRequest> | OneToManyLink<PosDailySummary, PurchaseReturns> | OneToManyLink<PosDailySummary, Invoices> | OneToManyLink<PosDailySummary, CreditNotes> | OneToManyLink<PosDailySummary, Orders> | OneToManyLink<PosDailySummary, DownPayments> | OneToManyLink<PosDailySummary, Drafts> | OneToManyLink<PosDailySummary, Returns> | OneToManyLink<PosDailySummary, CorrectionInvoiceReversal> | OneToManyLink<PosDailySummary, CorrectionPurchaseInvoice> | OneToManyLink<PosDailySummary, CorrectionPurchaseInvoiceReversal> | OneToOneLink<PosDailySummary, FiscalPrinter> | OneToManyLink<PosDailySummary, PurchaseInvoices> | OneToManyLink<PosDailySummary, PurchaseDeliveryNotes> | OneToManyLink<PosDailySummary, CorrectionInvoice> | OneToManyLink<PosDailySummary, PurchaseCreditNotes> | OneToManyLink<PosDailySummary, PurchaseDownPayments> | OneToManyLink<PosDailySummary, PurchaseOrders> | OneToManyLink<PosDailySummary, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PosDailySummary>;
    /**
     * All key fields of the PosDailySummary entity.
     */
    const _keyFields: Array<Field<PosDailySummary>>;
    /**
     * Mapping of all key field names to the respective static field property PosDailySummary.
     */
    const _keys: {
        [keys: string]: Field<PosDailySummary>;
    };
}
//# sourceMappingURL=PosDailySummary.d.ts.map