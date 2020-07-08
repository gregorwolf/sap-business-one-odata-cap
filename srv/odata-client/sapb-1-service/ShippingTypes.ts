/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingTypesRequestBuilder } from './ShippingTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ShippingTypes" of service "SAPB1".
 */
export class ShippingTypes extends Entity implements ShippingTypesType {
  /**
   * Technical entity name for ShippingTypes.
   */
  static _entityName = 'ShippingTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ShippingTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Website.
   * @nullable
   */
  website?: string;
  /**
   * One-to-many navigation property to the [[LandedCosts]] entity.
   */
  landedCosts!: LandedCosts[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
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
   * Returns an entity builder to construct instances `ShippingTypes`.
   * @returns A builder that constructs instances of entity type `ShippingTypes`.
   */
  static builder(): EntityBuilderType<ShippingTypes, ShippingTypesTypeForceMandatory> {
    return Entity.entityBuilder(ShippingTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ShippingTypes` entity type.
   * @returns A `ShippingTypes` request builder.
   */
  static requestBuilder(): ShippingTypesRequestBuilder {
    return new ShippingTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShippingTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ShippingTypes`.
   */
  static customField(fieldName: string): CustomField<ShippingTypes> {
    return Entity.customFieldSelector(fieldName, ShippingTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { LandedCosts, LandedCostsType } from './LandedCosts';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { Items, ItemsType } from './Items';
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

export interface ShippingTypesType {
  code?: number;
  name?: string;
  website?: string;
  landedCosts: LandedCostsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  items: ItemsType[];
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

export interface ShippingTypesTypeForceMandatory {
  code: number;
  name: string;
  website: string;
  landedCosts: LandedCostsType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  items: ItemsType[];
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

export namespace ShippingTypes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ShippingTypes> = new NumberField('Code', ShippingTypes, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ShippingTypes> = new StringField('Name', ShippingTypes, 'Edm.String');
  /**
   * Static representation of the [[website]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEBSITE: StringField<ShippingTypes> = new StringField('Website', ShippingTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COSTS: OneToManyLink<ShippingTypes, LandedCosts> = new OneToManyLink('LandedCosts', ShippingTypes, LandedCosts);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<ShippingTypes, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', ShippingTypes, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<ShippingTypes, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', ShippingTypes, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<ShippingTypes, Items> = new OneToManyLink('Items', ShippingTypes, Items);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<ShippingTypes, DeliveryNotes> = new OneToManyLink('DeliveryNotes', ShippingTypes, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<ShippingTypes, BusinessPartners> = new OneToManyLink('BusinessPartners', ShippingTypes, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<ShippingTypes, Quotations> = new OneToManyLink('Quotations', ShippingTypes, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<ShippingTypes, InventoryGenExits> = new OneToManyLink('InventoryGenExits', ShippingTypes, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<ShippingTypes, PurchaseRequests> = new OneToManyLink('PurchaseRequests', ShippingTypes, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<ShippingTypes, ReturnRequest> = new OneToManyLink('ReturnRequest', ShippingTypes, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<ShippingTypes, BlanketAgreements> = new OneToManyLink('BlanketAgreements', ShippingTypes, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<ShippingTypes, PurchaseReturns> = new OneToManyLink('PurchaseReturns', ShippingTypes, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<ShippingTypes, Invoices> = new OneToManyLink('Invoices', ShippingTypes, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<ShippingTypes, CreditNotes> = new OneToManyLink('CreditNotes', ShippingTypes, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<ShippingTypes, Orders> = new OneToManyLink('Orders', ShippingTypes, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<ShippingTypes, DownPayments> = new OneToManyLink('DownPayments', ShippingTypes, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<ShippingTypes, Drafts> = new OneToManyLink('Drafts', ShippingTypes, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<ShippingTypes, Returns> = new OneToManyLink('Returns', ShippingTypes, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<ShippingTypes, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', ShippingTypes, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<ShippingTypes, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', ShippingTypes, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<ShippingTypes, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', ShippingTypes, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<ShippingTypes, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', ShippingTypes, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<ShippingTypes, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', ShippingTypes, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<ShippingTypes, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', ShippingTypes, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<ShippingTypes, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', ShippingTypes, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<ShippingTypes, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', ShippingTypes, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<ShippingTypes, PurchaseOrders> = new OneToManyLink('PurchaseOrders', ShippingTypes, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<ShippingTypes, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', ShippingTypes, GoodsReturnRequest);
  /**
   * All fields of the ShippingTypes entity.
   */
  export const _allFields: Array<NumberField<ShippingTypes> | StringField<ShippingTypes> | OneToManyLink<ShippingTypes, LandedCosts> | OneToManyLink<ShippingTypes, InventoryGenEntries> | OneToManyLink<ShippingTypes, PurchaseQuotations> | OneToManyLink<ShippingTypes, Items> | OneToManyLink<ShippingTypes, DeliveryNotes> | OneToManyLink<ShippingTypes, BusinessPartners> | OneToManyLink<ShippingTypes, Quotations> | OneToManyLink<ShippingTypes, InventoryGenExits> | OneToManyLink<ShippingTypes, PurchaseRequests> | OneToManyLink<ShippingTypes, ReturnRequest> | OneToManyLink<ShippingTypes, BlanketAgreements> | OneToManyLink<ShippingTypes, PurchaseReturns> | OneToManyLink<ShippingTypes, Invoices> | OneToManyLink<ShippingTypes, CreditNotes> | OneToManyLink<ShippingTypes, Orders> | OneToManyLink<ShippingTypes, DownPayments> | OneToManyLink<ShippingTypes, Drafts> | OneToManyLink<ShippingTypes, Returns> | OneToManyLink<ShippingTypes, CorrectionInvoiceReversal> | OneToManyLink<ShippingTypes, CorrectionPurchaseInvoice> | OneToManyLink<ShippingTypes, CorrectionPurchaseInvoiceReversal> | OneToManyLink<ShippingTypes, PurchaseInvoices> | OneToManyLink<ShippingTypes, PurchaseDeliveryNotes> | OneToManyLink<ShippingTypes, CorrectionInvoice> | OneToManyLink<ShippingTypes, PurchaseCreditNotes> | OneToManyLink<ShippingTypes, PurchaseDownPayments> | OneToManyLink<ShippingTypes, PurchaseOrders> | OneToManyLink<ShippingTypes, GoodsReturnRequest>> = [
    ShippingTypes.CODE,
    ShippingTypes.NAME,
    ShippingTypes.WEBSITE,
    ShippingTypes.LANDED_COSTS,
    ShippingTypes.INVENTORY_GEN_ENTRIES,
    ShippingTypes.PURCHASE_QUOTATIONS,
    ShippingTypes.ITEMS,
    ShippingTypes.DELIVERY_NOTES,
    ShippingTypes.BUSINESS_PARTNERS,
    ShippingTypes.QUOTATIONS,
    ShippingTypes.INVENTORY_GEN_EXITS,
    ShippingTypes.PURCHASE_REQUESTS,
    ShippingTypes.RETURN_REQUEST,
    ShippingTypes.BLANKET_AGREEMENTS,
    ShippingTypes.PURCHASE_RETURNS,
    ShippingTypes.INVOICES,
    ShippingTypes.CREDIT_NOTES,
    ShippingTypes.ORDERS,
    ShippingTypes.DOWN_PAYMENTS,
    ShippingTypes.DRAFTS,
    ShippingTypes.RETURNS,
    ShippingTypes.CORRECTION_INVOICE_REVERSAL,
    ShippingTypes.CORRECTION_PURCHASE_INVOICE,
    ShippingTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    ShippingTypes.PURCHASE_INVOICES,
    ShippingTypes.PURCHASE_DELIVERY_NOTES,
    ShippingTypes.CORRECTION_INVOICE,
    ShippingTypes.PURCHASE_CREDIT_NOTES,
    ShippingTypes.PURCHASE_DOWN_PAYMENTS,
    ShippingTypes.PURCHASE_ORDERS,
    ShippingTypes.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ShippingTypes> = new AllFields('*', ShippingTypes);
  /**
   * All key fields of the ShippingTypes entity.
   */
  export const _keyFields: Array<Field<ShippingTypes>> = [ShippingTypes.CODE];
  /**
   * Mapping of all key field names to the respective static field property ShippingTypes.
   */
  export const _keys: { [keys: string]: Field<ShippingTypes> } = ShippingTypes._keyFields.reduce((acc: { [keys: string]: Field<ShippingTypes> }, field: Field<ShippingTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
