/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentBlocksRequestBuilder } from './PaymentBlocksRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "PaymentBlocks" of service "SAPB1".
 */
export class PaymentBlocks extends Entity implements PaymentBlocksType {
  /**
   * Technical entity name for PaymentBlocks.
   */
  static _entityName = 'PaymentBlocks';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentBlocks.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Payment Block Code.
   * @nullable
   */
  paymentBlockCode?: string;
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
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
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
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
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];

  /**
   * Returns an entity builder to construct instances `PaymentBlocks`.
   * @returns A builder that constructs instances of entity type `PaymentBlocks`.
   */
  static builder(): EntityBuilderType<PaymentBlocks, PaymentBlocksTypeForceMandatory> {
    return Entity.entityBuilder(PaymentBlocks);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentBlocks` entity type.
   * @returns A `PaymentBlocks` request builder.
   */
  static requestBuilder(): PaymentBlocksRequestBuilder {
    return new PaymentBlocksRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentBlocks`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentBlocks`.
   */
  static customField(fieldName: string): CustomField<PaymentBlocks> {
    return Entity.customFieldSelector(fieldName, PaymentBlocks);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
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
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';

export interface PaymentBlocksType {
  absEntry?: number;
  paymentBlockCode?: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
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
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  purchaseOrders: PurchaseOrdersType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export interface PaymentBlocksTypeForceMandatory {
  absEntry: number;
  paymentBlockCode: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
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
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  purchaseOrders: PurchaseOrdersType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export namespace PaymentBlocks {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<PaymentBlocks> = new NumberField('AbsEntry', PaymentBlocks, 'Edm.Int32');
  /**
   * Static representation of the [[paymentBlockCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_CODE: StringField<PaymentBlocks> = new StringField('PaymentBlockCode', PaymentBlocks, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<PaymentBlocks, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', PaymentBlocks, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<PaymentBlocks, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', PaymentBlocks, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<PaymentBlocks, DeliveryNotes> = new OneToManyLink('DeliveryNotes', PaymentBlocks, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<PaymentBlocks, BusinessPartners> = new OneToManyLink('BusinessPartners', PaymentBlocks, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<PaymentBlocks, Quotations> = new OneToManyLink('Quotations', PaymentBlocks, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<PaymentBlocks, InventoryGenExits> = new OneToManyLink('InventoryGenExits', PaymentBlocks, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<PaymentBlocks, PurchaseRequests> = new OneToManyLink('PurchaseRequests', PaymentBlocks, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<PaymentBlocks, ReturnRequest> = new OneToManyLink('ReturnRequest', PaymentBlocks, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<PaymentBlocks, PurchaseReturns> = new OneToManyLink('PurchaseReturns', PaymentBlocks, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<PaymentBlocks, Invoices> = new OneToManyLink('Invoices', PaymentBlocks, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<PaymentBlocks, CreditNotes> = new OneToManyLink('CreditNotes', PaymentBlocks, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<PaymentBlocks, Orders> = new OneToManyLink('Orders', PaymentBlocks, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<PaymentBlocks, DownPayments> = new OneToManyLink('DownPayments', PaymentBlocks, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<PaymentBlocks, Drafts> = new OneToManyLink('Drafts', PaymentBlocks, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<PaymentBlocks, Returns> = new OneToManyLink('Returns', PaymentBlocks, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<PaymentBlocks, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', PaymentBlocks, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<PaymentBlocks, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', PaymentBlocks, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<PaymentBlocks, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', PaymentBlocks, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<PaymentBlocks, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', PaymentBlocks, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<PaymentBlocks, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', PaymentBlocks, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<PaymentBlocks, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', PaymentBlocks, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<PaymentBlocks, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', PaymentBlocks, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<PaymentBlocks, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', PaymentBlocks, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<PaymentBlocks, PurchaseOrders> = new OneToManyLink('PurchaseOrders', PaymentBlocks, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<PaymentBlocks, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', PaymentBlocks, GoodsReturnRequest);
  /**
   * All fields of the PaymentBlocks entity.
   */
  export const _allFields: Array<NumberField<PaymentBlocks> | StringField<PaymentBlocks> | OneToManyLink<PaymentBlocks, InventoryGenEntries> | OneToManyLink<PaymentBlocks, PurchaseQuotations> | OneToManyLink<PaymentBlocks, DeliveryNotes> | OneToManyLink<PaymentBlocks, BusinessPartners> | OneToManyLink<PaymentBlocks, Quotations> | OneToManyLink<PaymentBlocks, InventoryGenExits> | OneToManyLink<PaymentBlocks, PurchaseRequests> | OneToManyLink<PaymentBlocks, ReturnRequest> | OneToManyLink<PaymentBlocks, PurchaseReturns> | OneToManyLink<PaymentBlocks, Invoices> | OneToManyLink<PaymentBlocks, CreditNotes> | OneToManyLink<PaymentBlocks, Orders> | OneToManyLink<PaymentBlocks, DownPayments> | OneToManyLink<PaymentBlocks, Drafts> | OneToManyLink<PaymentBlocks, Returns> | OneToManyLink<PaymentBlocks, CorrectionInvoiceReversal> | OneToManyLink<PaymentBlocks, CorrectionPurchaseInvoice> | OneToManyLink<PaymentBlocks, CorrectionPurchaseInvoiceReversal> | OneToManyLink<PaymentBlocks, PurchaseInvoices> | OneToManyLink<PaymentBlocks, PurchaseDeliveryNotes> | OneToManyLink<PaymentBlocks, CorrectionInvoice> | OneToManyLink<PaymentBlocks, PurchaseCreditNotes> | OneToManyLink<PaymentBlocks, PurchaseDownPayments> | OneToManyLink<PaymentBlocks, PurchaseOrders> | OneToManyLink<PaymentBlocks, GoodsReturnRequest>> = [
    PaymentBlocks.ABS_ENTRY,
    PaymentBlocks.PAYMENT_BLOCK_CODE,
    PaymentBlocks.INVENTORY_GEN_ENTRIES,
    PaymentBlocks.PURCHASE_QUOTATIONS,
    PaymentBlocks.DELIVERY_NOTES,
    PaymentBlocks.BUSINESS_PARTNERS,
    PaymentBlocks.QUOTATIONS,
    PaymentBlocks.INVENTORY_GEN_EXITS,
    PaymentBlocks.PURCHASE_REQUESTS,
    PaymentBlocks.RETURN_REQUEST,
    PaymentBlocks.PURCHASE_RETURNS,
    PaymentBlocks.INVOICES,
    PaymentBlocks.CREDIT_NOTES,
    PaymentBlocks.ORDERS,
    PaymentBlocks.DOWN_PAYMENTS,
    PaymentBlocks.DRAFTS,
    PaymentBlocks.RETURNS,
    PaymentBlocks.CORRECTION_INVOICE_REVERSAL,
    PaymentBlocks.CORRECTION_PURCHASE_INVOICE,
    PaymentBlocks.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    PaymentBlocks.PURCHASE_INVOICES,
    PaymentBlocks.PURCHASE_DELIVERY_NOTES,
    PaymentBlocks.CORRECTION_INVOICE,
    PaymentBlocks.PURCHASE_CREDIT_NOTES,
    PaymentBlocks.PURCHASE_DOWN_PAYMENTS,
    PaymentBlocks.PURCHASE_ORDERS,
    PaymentBlocks.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentBlocks> = new AllFields('*', PaymentBlocks);
  /**
   * All key fields of the PaymentBlocks entity.
   */
  export const _keyFields: Array<Field<PaymentBlocks>> = [PaymentBlocks.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PaymentBlocks.
   */
  export const _keys: { [keys: string]: Field<PaymentBlocks> } = PaymentBlocks._keyFields.reduce((acc: { [keys: string]: Field<PaymentBlocks> }, field: Field<PaymentBlocks>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
