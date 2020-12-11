import { PaymentTermsTypesRequestBuilder } from './PaymentTermsTypesRequestBuilder';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { BoOpenIncPayment } from './BoOpenIncPayment';
import { BoBaselineDate } from './BoBaselineDate';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PaymentTermsTypes" of service "SAPB1".
 */
export declare class PaymentTermsTypes extends EntityV4 implements PaymentTermsTypesType {
    /**
     * Technical entity name for PaymentTermsTypes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Group Number.
     * @nullable
     */
    groupNumber?: number;
    /**
     * Payment Terms Group Name.
     * @nullable
     */
    paymentTermsGroupName?: string;
    /**
     * Start From.
     * @nullable
     */
    startFrom?: BoPayTermDueTypes;
    /**
     * Number Of Additional Months.
     * @nullable
     */
    numberOfAdditionalMonths?: number;
    /**
     * Number Of Additional Days.
     * @nullable
     */
    numberOfAdditionalDays?: number;
    /**
     * Credit Limit.
     * @nullable
     */
    creditLimit?: number;
    /**
     * General Discount.
     * @nullable
     */
    generalDiscount?: number;
    /**
     * Interest On Arrears.
     * @nullable
     */
    interestOnArrears?: number;
    /**
     * Price List No.
     * @nullable
     */
    priceListNo?: number;
    /**
     * Load Limit.
     * @nullable
     */
    loadLimit?: number;
    /**
     * Open Receipt.
     * @nullable
     */
    openReceipt?: BoOpenIncPayment;
    /**
     * Discount Code.
     * @nullable
     */
    discountCode?: string;
    /**
     * Dunning Code.
     * @nullable
     */
    dunningCode?: string;
    /**
     * Baseline Date.
     * @nullable
     */
    baselineDate?: BoBaselineDate;
    /**
     * Number Of Installments.
     * @nullable
     */
    numberOfInstallments?: number;
    /**
     * Number Of Tolerance Days.
     * @nullable
     */
    numberOfToleranceDays?: number;
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList: PriceLists;
    /**
     * One-to-one navigation property to the [[CashDiscounts]] entity.
     */
    cashDiscount: CashDiscounts;
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
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
     */
    inventoryTransferRequests: InventoryTransferRequests[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethods: WizardPaymentMethods[];
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
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * Returns an entity builder to construct instances of `PaymentTermsTypes`.
     * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
     */
    static builder(): EntityBuilderType<PaymentTermsTypes, PaymentTermsTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentTermsTypes` entity type.
     * @returns A `PaymentTermsTypes` request builder.
     */
    static requestBuilder(): PaymentTermsTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentTermsTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<PaymentTermsTypes>;
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
import { PriceLists, PriceListsType } from './PriceLists';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Orders, OrdersType } from './Orders';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
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
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
export interface PaymentTermsTypesType {
    groupNumber?: number | null;
    paymentTermsGroupName?: string | null;
    startFrom?: BoPayTermDueTypes | null;
    numberOfAdditionalMonths?: number | null;
    numberOfAdditionalDays?: number | null;
    creditLimit?: number | null;
    generalDiscount?: number | null;
    interestOnArrears?: number | null;
    priceListNo?: number | null;
    loadLimit?: number | null;
    openReceipt?: BoOpenIncPayment | null;
    discountCode?: string | null;
    dunningCode?: string | null;
    baselineDate?: BoBaselineDate | null;
    numberOfInstallments?: number | null;
    numberOfToleranceDays?: number | null;
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    priceList: PriceListsType;
    cashDiscount: CashDiscountsType;
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    blanketAgreements: BlanketAgreementsType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    inventoryTransferRequests: InventoryTransferRequestsType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
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
    purchaseOrders: PurchaseOrdersType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export declare namespace PaymentTermsTypes {
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NUMBER: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[paymentTermsGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_GROUP_NAME: StringField<PaymentTermsTypes>;
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_FROM: EnumField<PaymentTermsTypes>;
    /**
     * Static representation of the [[numberOfAdditionalMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_ADDITIONAL_MONTHS: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[numberOfAdditionalDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_ADDITIONAL_DAYS: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[creditLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_LIMIT: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[generalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERAL_DISCOUNT: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[interestOnArrears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_ON_ARREARS: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NO: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[loadLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOAD_LIMIT: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[openReceipt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPEN_RECEIPT: EnumField<PaymentTermsTypes>;
    /**
     * Static representation of the [[discountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_CODE: StringField<PaymentTermsTypes>;
    /**
     * Static representation of the [[dunningCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_CODE: StringField<PaymentTermsTypes>;
    /**
     * Static representation of the [[baselineDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASELINE_DATE: EnumField<PaymentTermsTypes>;
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_INSTALLMENTS: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the [[numberOfToleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_TOLERANCE_DAYS: NumberField<PaymentTermsTypes>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<PaymentTermsTypes, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<PaymentTermsTypes, PurchaseQuotations>;
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: OneToOneLink<PaymentTermsTypes, PriceLists>;
    /**
     * Static representation of the one-to-one navigation property [[cashDiscount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_DISCOUNT: OneToOneLink<PaymentTermsTypes, CashDiscounts>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<PaymentTermsTypes, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<PaymentTermsTypes, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<PaymentTermsTypes, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<PaymentTermsTypes, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<PaymentTermsTypes, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<PaymentTermsTypes, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<PaymentTermsTypes, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<PaymentTermsTypes, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<PaymentTermsTypes, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<PaymentTermsTypes, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<PaymentTermsTypes, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<PaymentTermsTypes, InventoryTransferRequests>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<PaymentTermsTypes, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<PaymentTermsTypes, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHODS: OneToManyLink<PaymentTermsTypes, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<PaymentTermsTypes, StockTransferDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<PaymentTermsTypes, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<PaymentTermsTypes, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<PaymentTermsTypes, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<PaymentTermsTypes, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<PaymentTermsTypes, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<PaymentTermsTypes, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<PaymentTermsTypes, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<PaymentTermsTypes, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<PaymentTermsTypes, GoodsReturnRequest>;
    /**
     * All fields of the PaymentTermsTypes entity.
     */
    const _allFields: Array<NumberField<PaymentTermsTypes> | StringField<PaymentTermsTypes> | EnumField<PaymentTermsTypes> | OneToManyLink<PaymentTermsTypes, InventoryGenEntries> | OneToManyLink<PaymentTermsTypes, PurchaseQuotations> | OneToOneLink<PaymentTermsTypes, PriceLists> | OneToOneLink<PaymentTermsTypes, CashDiscounts> | OneToManyLink<PaymentTermsTypes, DeliveryNotes> | OneToManyLink<PaymentTermsTypes, BusinessPartners> | OneToManyLink<PaymentTermsTypes, Quotations> | OneToManyLink<PaymentTermsTypes, InventoryGenExits> | OneToManyLink<PaymentTermsTypes, PurchaseRequests> | OneToManyLink<PaymentTermsTypes, ReturnRequest> | OneToManyLink<PaymentTermsTypes, BlanketAgreements> | OneToManyLink<PaymentTermsTypes, PurchaseReturns> | OneToManyLink<PaymentTermsTypes, Invoices> | OneToManyLink<PaymentTermsTypes, CreditNotes> | OneToManyLink<PaymentTermsTypes, Orders> | OneToManyLink<PaymentTermsTypes, InventoryTransferRequests> | OneToManyLink<PaymentTermsTypes, DownPayments> | OneToManyLink<PaymentTermsTypes, Drafts> | OneToManyLink<PaymentTermsTypes, WizardPaymentMethods> | OneToManyLink<PaymentTermsTypes, StockTransferDrafts> | OneToManyLink<PaymentTermsTypes, Returns> | OneToManyLink<PaymentTermsTypes, CorrectionInvoiceReversal> | OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoice> | OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoiceReversal> | OneToManyLink<PaymentTermsTypes, PurchaseInvoices> | OneToManyLink<PaymentTermsTypes, PurchaseDeliveryNotes> | OneToManyLink<PaymentTermsTypes, CorrectionInvoice> | OneToManyLink<PaymentTermsTypes, PurchaseCreditNotes> | OneToManyLink<PaymentTermsTypes, PurchaseDownPayments> | OneToManyLink<PaymentTermsTypes, PurchaseOrders> | OneToManyLink<PaymentTermsTypes, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentTermsTypes>;
    /**
     * All key fields of the PaymentTermsTypes entity.
     */
    const _keyFields: Array<Field<PaymentTermsTypes>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentTermsTypes.
     */
    const _keys: {
        [keys: string]: Field<PaymentTermsTypes>;
    };
}
//# sourceMappingURL=PaymentTermsTypes.d.ts.map