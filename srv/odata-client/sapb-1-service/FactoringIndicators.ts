/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FactoringIndicatorsRequestBuilder } from './FactoringIndicatorsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "FactoringIndicators" of service "SAPB1".
 */
export class FactoringIndicators extends Entity implements FactoringIndicatorsType {
  /**
   * Technical entity name for FactoringIndicators.
   */
  static _entityName = 'FactoringIndicators';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FactoringIndicators.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Indicator Code.
   * @nullable
   */
  indicatorCode?: string;
  /**
   * Indicator Name.
   * @nullable
   */
  indicatorName?: string;
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];
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
   * Returns an entity builder to construct instances `FactoringIndicators`.
   * @returns A builder that constructs instances of entity type `FactoringIndicators`.
   */
  static builder(): EntityBuilderType<FactoringIndicators, FactoringIndicatorsTypeForceMandatory> {
    return Entity.entityBuilder(FactoringIndicators);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FactoringIndicators` entity type.
   * @returns A `FactoringIndicators` request builder.
   */
  static requestBuilder(): FactoringIndicatorsRequestBuilder {
    return new FactoringIndicatorsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FactoringIndicators`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FactoringIndicators`.
   */
  static customField(fieldName: string): CustomField<FactoringIndicators> {
    return Entity.customFieldSelector(fieldName, FactoringIndicators);
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
import { JournalEntries, JournalEntriesType } from './JournalEntries';
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

export interface FactoringIndicatorsType {
  indicatorCode?: string;
  indicatorName?: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  journalEntries: JournalEntriesType[];
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

export interface FactoringIndicatorsTypeForceMandatory {
  indicatorCode: string;
  indicatorName: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  journalEntries: JournalEntriesType[];
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

export namespace FactoringIndicators {
  /**
   * Static representation of the [[indicatorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR_CODE: StringField<FactoringIndicators> = new StringField('IndicatorCode', FactoringIndicators, 'Edm.String');
  /**
   * Static representation of the [[indicatorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR_NAME: StringField<FactoringIndicators> = new StringField('IndicatorName', FactoringIndicators, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<FactoringIndicators, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', FactoringIndicators, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<FactoringIndicators, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', FactoringIndicators, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<FactoringIndicators, JournalEntries> = new OneToManyLink('JournalEntries', FactoringIndicators, JournalEntries);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<FactoringIndicators, DeliveryNotes> = new OneToManyLink('DeliveryNotes', FactoringIndicators, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<FactoringIndicators, BusinessPartners> = new OneToManyLink('BusinessPartners', FactoringIndicators, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<FactoringIndicators, Quotations> = new OneToManyLink('Quotations', FactoringIndicators, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<FactoringIndicators, InventoryGenExits> = new OneToManyLink('InventoryGenExits', FactoringIndicators, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<FactoringIndicators, PurchaseRequests> = new OneToManyLink('PurchaseRequests', FactoringIndicators, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<FactoringIndicators, ReturnRequest> = new OneToManyLink('ReturnRequest', FactoringIndicators, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<FactoringIndicators, PurchaseReturns> = new OneToManyLink('PurchaseReturns', FactoringIndicators, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<FactoringIndicators, Invoices> = new OneToManyLink('Invoices', FactoringIndicators, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<FactoringIndicators, CreditNotes> = new OneToManyLink('CreditNotes', FactoringIndicators, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<FactoringIndicators, Orders> = new OneToManyLink('Orders', FactoringIndicators, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<FactoringIndicators, DownPayments> = new OneToManyLink('DownPayments', FactoringIndicators, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<FactoringIndicators, Drafts> = new OneToManyLink('Drafts', FactoringIndicators, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<FactoringIndicators, Returns> = new OneToManyLink('Returns', FactoringIndicators, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<FactoringIndicators, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', FactoringIndicators, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<FactoringIndicators, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', FactoringIndicators, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<FactoringIndicators, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', FactoringIndicators, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<FactoringIndicators, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', FactoringIndicators, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<FactoringIndicators, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', FactoringIndicators, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<FactoringIndicators, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', FactoringIndicators, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<FactoringIndicators, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', FactoringIndicators, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<FactoringIndicators, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', FactoringIndicators, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<FactoringIndicators, PurchaseOrders> = new OneToManyLink('PurchaseOrders', FactoringIndicators, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<FactoringIndicators, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', FactoringIndicators, GoodsReturnRequest);
  /**
   * All fields of the FactoringIndicators entity.
   */
  export const _allFields: Array<StringField<FactoringIndicators> | OneToManyLink<FactoringIndicators, InventoryGenEntries> | OneToManyLink<FactoringIndicators, PurchaseQuotations> | OneToManyLink<FactoringIndicators, JournalEntries> | OneToManyLink<FactoringIndicators, DeliveryNotes> | OneToManyLink<FactoringIndicators, BusinessPartners> | OneToManyLink<FactoringIndicators, Quotations> | OneToManyLink<FactoringIndicators, InventoryGenExits> | OneToManyLink<FactoringIndicators, PurchaseRequests> | OneToManyLink<FactoringIndicators, ReturnRequest> | OneToManyLink<FactoringIndicators, PurchaseReturns> | OneToManyLink<FactoringIndicators, Invoices> | OneToManyLink<FactoringIndicators, CreditNotes> | OneToManyLink<FactoringIndicators, Orders> | OneToManyLink<FactoringIndicators, DownPayments> | OneToManyLink<FactoringIndicators, Drafts> | OneToManyLink<FactoringIndicators, Returns> | OneToManyLink<FactoringIndicators, CorrectionInvoiceReversal> | OneToManyLink<FactoringIndicators, CorrectionPurchaseInvoice> | OneToManyLink<FactoringIndicators, CorrectionPurchaseInvoiceReversal> | OneToManyLink<FactoringIndicators, PurchaseInvoices> | OneToManyLink<FactoringIndicators, PurchaseDeliveryNotes> | OneToManyLink<FactoringIndicators, CorrectionInvoice> | OneToManyLink<FactoringIndicators, PurchaseCreditNotes> | OneToManyLink<FactoringIndicators, PurchaseDownPayments> | OneToManyLink<FactoringIndicators, PurchaseOrders> | OneToManyLink<FactoringIndicators, GoodsReturnRequest>> = [
    FactoringIndicators.INDICATOR_CODE,
    FactoringIndicators.INDICATOR_NAME,
    FactoringIndicators.INVENTORY_GEN_ENTRIES,
    FactoringIndicators.PURCHASE_QUOTATIONS,
    FactoringIndicators.JOURNAL_ENTRIES,
    FactoringIndicators.DELIVERY_NOTES,
    FactoringIndicators.BUSINESS_PARTNERS,
    FactoringIndicators.QUOTATIONS,
    FactoringIndicators.INVENTORY_GEN_EXITS,
    FactoringIndicators.PURCHASE_REQUESTS,
    FactoringIndicators.RETURN_REQUEST,
    FactoringIndicators.PURCHASE_RETURNS,
    FactoringIndicators.INVOICES,
    FactoringIndicators.CREDIT_NOTES,
    FactoringIndicators.ORDERS,
    FactoringIndicators.DOWN_PAYMENTS,
    FactoringIndicators.DRAFTS,
    FactoringIndicators.RETURNS,
    FactoringIndicators.CORRECTION_INVOICE_REVERSAL,
    FactoringIndicators.CORRECTION_PURCHASE_INVOICE,
    FactoringIndicators.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    FactoringIndicators.PURCHASE_INVOICES,
    FactoringIndicators.PURCHASE_DELIVERY_NOTES,
    FactoringIndicators.CORRECTION_INVOICE,
    FactoringIndicators.PURCHASE_CREDIT_NOTES,
    FactoringIndicators.PURCHASE_DOWN_PAYMENTS,
    FactoringIndicators.PURCHASE_ORDERS,
    FactoringIndicators.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FactoringIndicators> = new AllFields('*', FactoringIndicators);
  /**
   * All key fields of the FactoringIndicators entity.
   */
  export const _keyFields: Array<Field<FactoringIndicators>> = [FactoringIndicators.INDICATOR_CODE];
  /**
   * Mapping of all key field names to the respective static field property FactoringIndicators.
   */
  export const _keys: { [keys: string]: Field<FactoringIndicators> } = FactoringIndicators._keyFields.reduce((acc: { [keys: string]: Field<FactoringIndicators> }, field: Field<FactoringIndicators>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
