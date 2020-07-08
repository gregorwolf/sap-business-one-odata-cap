/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxWebSitesRequestBuilder } from './TaxWebSitesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "TaxWebSites" of service "SAPB1".
 */
export class TaxWebSites extends Entity implements TaxWebSitesType {
  /**
   * Technical entity name for TaxWebSites.
   */
  static _entityName = 'TaxWebSites';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TaxWebSites.
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
   * Web Site Name.
   * @nullable
   */
  webSiteName?: string;
  /**
   * Web Site Url.
   * @nullable
   */
  webSiteUrl?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
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
   * One-to-many navigation property to the [[TaxInvoiceReport]] entity.
   */
  taxInvoiceReport!: TaxInvoiceReport[];
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
   * Returns an entity builder to construct instances `TaxWebSites`.
   * @returns A builder that constructs instances of entity type `TaxWebSites`.
   */
  static builder(): EntityBuilderType<TaxWebSites, TaxWebSitesTypeForceMandatory> {
    return Entity.entityBuilder(TaxWebSites);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TaxWebSites` entity type.
   * @returns A `TaxWebSites` request builder.
   */
  static requestBuilder(): TaxWebSitesRequestBuilder {
    return new TaxWebSitesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxWebSites`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TaxWebSites`.
   */
  static customField(fieldName: string): CustomField<TaxWebSites> {
    return Entity.customFieldSelector(fieldName, TaxWebSites);
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
import { TaxInvoiceReport, TaxInvoiceReportType } from './TaxInvoiceReport';
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

export interface TaxWebSitesType {
  absEntry?: number;
  webSiteName?: string;
  webSiteUrl?: string;
  description?: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  taxInvoiceReport: TaxInvoiceReportType[];
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

export interface TaxWebSitesTypeForceMandatory {
  absEntry: number;
  webSiteName: string;
  webSiteUrl: string;
  description: string;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartners: BusinessPartnersType[];
  quotations: QuotationsType[];
  taxInvoiceReport: TaxInvoiceReportType[];
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

export namespace TaxWebSites {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<TaxWebSites> = new NumberField('AbsEntry', TaxWebSites, 'Edm.Int32');
  /**
   * Static representation of the [[webSiteName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEB_SITE_NAME: StringField<TaxWebSites> = new StringField('WebSiteName', TaxWebSites, 'Edm.String');
  /**
   * Static representation of the [[webSiteUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEB_SITE_URL: StringField<TaxWebSites> = new StringField('WebSiteURL', TaxWebSites, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TaxWebSites> = new StringField('Description', TaxWebSites, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<TaxWebSites, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', TaxWebSites, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<TaxWebSites, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', TaxWebSites, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<TaxWebSites, DeliveryNotes> = new OneToManyLink('DeliveryNotes', TaxWebSites, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<TaxWebSites, BusinessPartners> = new OneToManyLink('BusinessPartners', TaxWebSites, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<TaxWebSites, Quotations> = new OneToManyLink('Quotations', TaxWebSites, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[taxInvoiceReport]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_REPORT: OneToManyLink<TaxWebSites, TaxInvoiceReport> = new OneToManyLink('TaxInvoiceReport', TaxWebSites, TaxInvoiceReport);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<TaxWebSites, InventoryGenExits> = new OneToManyLink('InventoryGenExits', TaxWebSites, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<TaxWebSites, PurchaseRequests> = new OneToManyLink('PurchaseRequests', TaxWebSites, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<TaxWebSites, ReturnRequest> = new OneToManyLink('ReturnRequest', TaxWebSites, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<TaxWebSites, PurchaseReturns> = new OneToManyLink('PurchaseReturns', TaxWebSites, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<TaxWebSites, Invoices> = new OneToManyLink('Invoices', TaxWebSites, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<TaxWebSites, CreditNotes> = new OneToManyLink('CreditNotes', TaxWebSites, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<TaxWebSites, Orders> = new OneToManyLink('Orders', TaxWebSites, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<TaxWebSites, DownPayments> = new OneToManyLink('DownPayments', TaxWebSites, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<TaxWebSites, Drafts> = new OneToManyLink('Drafts', TaxWebSites, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<TaxWebSites, Returns> = new OneToManyLink('Returns', TaxWebSites, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<TaxWebSites, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', TaxWebSites, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<TaxWebSites, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', TaxWebSites, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<TaxWebSites, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', TaxWebSites, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<TaxWebSites, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', TaxWebSites, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<TaxWebSites, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', TaxWebSites, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<TaxWebSites, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', TaxWebSites, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<TaxWebSites, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', TaxWebSites, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<TaxWebSites, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', TaxWebSites, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<TaxWebSites, PurchaseOrders> = new OneToManyLink('PurchaseOrders', TaxWebSites, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<TaxWebSites, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', TaxWebSites, GoodsReturnRequest);
  /**
   * All fields of the TaxWebSites entity.
   */
  export const _allFields: Array<NumberField<TaxWebSites> | StringField<TaxWebSites> | OneToManyLink<TaxWebSites, InventoryGenEntries> | OneToManyLink<TaxWebSites, PurchaseQuotations> | OneToManyLink<TaxWebSites, DeliveryNotes> | OneToManyLink<TaxWebSites, BusinessPartners> | OneToManyLink<TaxWebSites, Quotations> | OneToManyLink<TaxWebSites, TaxInvoiceReport> | OneToManyLink<TaxWebSites, InventoryGenExits> | OneToManyLink<TaxWebSites, PurchaseRequests> | OneToManyLink<TaxWebSites, ReturnRequest> | OneToManyLink<TaxWebSites, PurchaseReturns> | OneToManyLink<TaxWebSites, Invoices> | OneToManyLink<TaxWebSites, CreditNotes> | OneToManyLink<TaxWebSites, Orders> | OneToManyLink<TaxWebSites, DownPayments> | OneToManyLink<TaxWebSites, Drafts> | OneToManyLink<TaxWebSites, Returns> | OneToManyLink<TaxWebSites, CorrectionInvoiceReversal> | OneToManyLink<TaxWebSites, CorrectionPurchaseInvoice> | OneToManyLink<TaxWebSites, CorrectionPurchaseInvoiceReversal> | OneToManyLink<TaxWebSites, PurchaseInvoices> | OneToManyLink<TaxWebSites, PurchaseDeliveryNotes> | OneToManyLink<TaxWebSites, CorrectionInvoice> | OneToManyLink<TaxWebSites, PurchaseCreditNotes> | OneToManyLink<TaxWebSites, PurchaseDownPayments> | OneToManyLink<TaxWebSites, PurchaseOrders> | OneToManyLink<TaxWebSites, GoodsReturnRequest>> = [
    TaxWebSites.ABS_ENTRY,
    TaxWebSites.WEB_SITE_NAME,
    TaxWebSites.WEB_SITE_URL,
    TaxWebSites.DESCRIPTION,
    TaxWebSites.INVENTORY_GEN_ENTRIES,
    TaxWebSites.PURCHASE_QUOTATIONS,
    TaxWebSites.DELIVERY_NOTES,
    TaxWebSites.BUSINESS_PARTNERS,
    TaxWebSites.QUOTATIONS,
    TaxWebSites.TAX_INVOICE_REPORT,
    TaxWebSites.INVENTORY_GEN_EXITS,
    TaxWebSites.PURCHASE_REQUESTS,
    TaxWebSites.RETURN_REQUEST,
    TaxWebSites.PURCHASE_RETURNS,
    TaxWebSites.INVOICES,
    TaxWebSites.CREDIT_NOTES,
    TaxWebSites.ORDERS,
    TaxWebSites.DOWN_PAYMENTS,
    TaxWebSites.DRAFTS,
    TaxWebSites.RETURNS,
    TaxWebSites.CORRECTION_INVOICE_REVERSAL,
    TaxWebSites.CORRECTION_PURCHASE_INVOICE,
    TaxWebSites.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    TaxWebSites.PURCHASE_INVOICES,
    TaxWebSites.PURCHASE_DELIVERY_NOTES,
    TaxWebSites.CORRECTION_INVOICE,
    TaxWebSites.PURCHASE_CREDIT_NOTES,
    TaxWebSites.PURCHASE_DOWN_PAYMENTS,
    TaxWebSites.PURCHASE_ORDERS,
    TaxWebSites.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TaxWebSites> = new AllFields('*', TaxWebSites);
  /**
   * All key fields of the TaxWebSites entity.
   */
  export const _keyFields: Array<Field<TaxWebSites>> = [TaxWebSites.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property TaxWebSites.
   */
  export const _keys: { [keys: string]: Field<TaxWebSites> } = TaxWebSites._keyFields.reduce((acc: { [keys: string]: Field<TaxWebSites> }, field: Field<TaxWebSites>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
