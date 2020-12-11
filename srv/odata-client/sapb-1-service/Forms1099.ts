/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Forms1099RequestBuilder } from './Forms1099RequestBuilder';
import { Boxes1099 } from './Boxes1099';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Forms1099" of service "SAPB1".
 */
export class Forms1099 extends EntityV4 implements Forms1099Type {
  /**
   * Technical entity name for Forms1099.
   */
  static _entityName = 'Forms1099';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Form Code.
   * @nullable
   */
  formCode?: number;
  /**
   * Form 1099.
   * @nullable
   */
  form1099?: string;
  /**
   * Boxes 1099.
   * @nullable
   */
  boxes1099?: Boxes1099[];
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
   * Returns an entity builder to construct instances of `Forms1099`.
   * @returns A builder that constructs instances of entity type `Forms1099`.
   */
  static builder(): EntityBuilderType<Forms1099, Forms1099Type> {
    return EntityV4.entityBuilder(Forms1099);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Forms1099` entity type.
   * @returns A `Forms1099` request builder.
   */
  static requestBuilder(): Forms1099RequestBuilder {
    return new Forms1099RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Forms1099`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Forms1099`.
   */
  static customField(fieldName: string): CustomFieldV4<Forms1099> {
    return EntityV4.customFieldSelector(fieldName, Forms1099);
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

export interface Forms1099Type {
  formCode?: number | null;
  form1099?: string | null;
  boxes1099?: Boxes1099[] | null;
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

export namespace Forms1099 {
  /**
   * Static representation of the [[formCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CODE: NumberField<Forms1099> = new NumberField('FormCode', Forms1099, 'Edm.Int32');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: StringField<Forms1099> = new StringField('Form1099', Forms1099, 'Edm.String');
  /**
   * Static representation of the [[boxes1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOXES_1099: CollectionField<Forms1099, Boxes1099> = new CollectionField('Boxes1099', Forms1099, Boxes1099);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<Forms1099, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', Forms1099, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<Forms1099, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', Forms1099, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<Forms1099, DeliveryNotes> = new OneToManyLink('DeliveryNotes', Forms1099, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Forms1099, BusinessPartners> = new OneToManyLink('BusinessPartners', Forms1099, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<Forms1099, Quotations> = new OneToManyLink('Quotations', Forms1099, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<Forms1099, InventoryGenExits> = new OneToManyLink('InventoryGenExits', Forms1099, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<Forms1099, PurchaseRequests> = new OneToManyLink('PurchaseRequests', Forms1099, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<Forms1099, ReturnRequest> = new OneToManyLink('ReturnRequest', Forms1099, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<Forms1099, PurchaseReturns> = new OneToManyLink('PurchaseReturns', Forms1099, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<Forms1099, Invoices> = new OneToManyLink('Invoices', Forms1099, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<Forms1099, CreditNotes> = new OneToManyLink('CreditNotes', Forms1099, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<Forms1099, Orders> = new OneToManyLink('Orders', Forms1099, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<Forms1099, DownPayments> = new OneToManyLink('DownPayments', Forms1099, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<Forms1099, Drafts> = new OneToManyLink('Drafts', Forms1099, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<Forms1099, Returns> = new OneToManyLink('Returns', Forms1099, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<Forms1099, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', Forms1099, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<Forms1099, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', Forms1099, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<Forms1099, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', Forms1099, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<Forms1099, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', Forms1099, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<Forms1099, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', Forms1099, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<Forms1099, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', Forms1099, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<Forms1099, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', Forms1099, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<Forms1099, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', Forms1099, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<Forms1099, PurchaseOrders> = new OneToManyLink('PurchaseOrders', Forms1099, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<Forms1099, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', Forms1099, GoodsReturnRequest);
  /**
   * All fields of the Forms1099 entity.
   */
  export const _allFields: Array<NumberField<Forms1099> | StringField<Forms1099> | CollectionField<Forms1099, Boxes1099> | OneToManyLink<Forms1099, InventoryGenEntries> | OneToManyLink<Forms1099, PurchaseQuotations> | OneToManyLink<Forms1099, DeliveryNotes> | OneToManyLink<Forms1099, BusinessPartners> | OneToManyLink<Forms1099, Quotations> | OneToManyLink<Forms1099, InventoryGenExits> | OneToManyLink<Forms1099, PurchaseRequests> | OneToManyLink<Forms1099, ReturnRequest> | OneToManyLink<Forms1099, PurchaseReturns> | OneToManyLink<Forms1099, Invoices> | OneToManyLink<Forms1099, CreditNotes> | OneToManyLink<Forms1099, Orders> | OneToManyLink<Forms1099, DownPayments> | OneToManyLink<Forms1099, Drafts> | OneToManyLink<Forms1099, Returns> | OneToManyLink<Forms1099, CorrectionInvoiceReversal> | OneToManyLink<Forms1099, CorrectionPurchaseInvoice> | OneToManyLink<Forms1099, CorrectionPurchaseInvoiceReversal> | OneToManyLink<Forms1099, PurchaseInvoices> | OneToManyLink<Forms1099, PurchaseDeliveryNotes> | OneToManyLink<Forms1099, CorrectionInvoice> | OneToManyLink<Forms1099, PurchaseCreditNotes> | OneToManyLink<Forms1099, PurchaseDownPayments> | OneToManyLink<Forms1099, PurchaseOrders> | OneToManyLink<Forms1099, GoodsReturnRequest>> = [
    Forms1099.FORM_CODE,
    Forms1099.FORM_1099,
    Forms1099.BOXES_1099,
    Forms1099.INVENTORY_GEN_ENTRIES,
    Forms1099.PURCHASE_QUOTATIONS,
    Forms1099.DELIVERY_NOTES,
    Forms1099.BUSINESS_PARTNERS,
    Forms1099.QUOTATIONS,
    Forms1099.INVENTORY_GEN_EXITS,
    Forms1099.PURCHASE_REQUESTS,
    Forms1099.RETURN_REQUEST,
    Forms1099.PURCHASE_RETURNS,
    Forms1099.INVOICES,
    Forms1099.CREDIT_NOTES,
    Forms1099.ORDERS,
    Forms1099.DOWN_PAYMENTS,
    Forms1099.DRAFTS,
    Forms1099.RETURNS,
    Forms1099.CORRECTION_INVOICE_REVERSAL,
    Forms1099.CORRECTION_PURCHASE_INVOICE,
    Forms1099.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    Forms1099.PURCHASE_INVOICES,
    Forms1099.PURCHASE_DELIVERY_NOTES,
    Forms1099.CORRECTION_INVOICE,
    Forms1099.PURCHASE_CREDIT_NOTES,
    Forms1099.PURCHASE_DOWN_PAYMENTS,
    Forms1099.PURCHASE_ORDERS,
    Forms1099.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Forms1099> = new AllFields('*', Forms1099);
  /**
   * All key fields of the Forms1099 entity.
   */
  export const _keyFields: Array<Field<Forms1099>> = [Forms1099.FORM_CODE];
  /**
   * Mapping of all key field names to the respective static field property Forms1099.
   */
  export const _keys: { [keys: string]: Field<Forms1099> } = Forms1099._keyFields.reduce((acc: { [keys: string]: Field<Forms1099> }, field: Field<Forms1099>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
