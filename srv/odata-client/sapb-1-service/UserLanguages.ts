/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserLanguagesRequestBuilder } from './UserLanguagesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserLanguages" of service "SAPB1".
 */
export class UserLanguages extends Entity implements UserLanguagesType {
  /**
   * Technical entity name for UserLanguages.
   */
  static _entityName = 'UserLanguages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserLanguages.
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
   * Language Short Name.
   * @nullable
   */
  languageShortName?: string;
  /**
   * Language Full Name.
   * @nullable
   */
  languageFullName?: string;
  /**
   * Related System Language.
   * @nullable
   */
  relatedSystemLanguage?: number;
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
   * Returns an entity builder to construct instances `UserLanguages`.
   * @returns A builder that constructs instances of entity type `UserLanguages`.
   */
  static builder(): EntityBuilderType<UserLanguages, UserLanguagesTypeForceMandatory> {
    return Entity.entityBuilder(UserLanguages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserLanguages` entity type.
   * @returns A `UserLanguages` request builder.
   */
  static requestBuilder(): UserLanguagesRequestBuilder {
    return new UserLanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserLanguages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserLanguages`.
   */
  static customField(fieldName: string): CustomField<UserLanguages> {
    return Entity.customFieldSelector(fieldName, UserLanguages);
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

export interface UserLanguagesType {
  code?: number;
  languageShortName?: string;
  languageFullName?: string;
  relatedSystemLanguage?: number;
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

export interface UserLanguagesTypeForceMandatory {
  code: number;
  languageShortName: string;
  languageFullName: string;
  relatedSystemLanguage: number;
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

export namespace UserLanguages {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<UserLanguages> = new NumberField('Code', UserLanguages, 'Edm.Int32');
  /**
   * Static representation of the [[languageShortName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_SHORT_NAME: StringField<UserLanguages> = new StringField('LanguageShortName', UserLanguages, 'Edm.String');
  /**
   * Static representation of the [[languageFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_FULL_NAME: StringField<UserLanguages> = new StringField('LanguageFullName', UserLanguages, 'Edm.String');
  /**
   * Static representation of the [[relatedSystemLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_SYSTEM_LANGUAGE: NumberField<UserLanguages> = new NumberField('RelatedSystemLanguage', UserLanguages, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<UserLanguages, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', UserLanguages, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<UserLanguages, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', UserLanguages, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<UserLanguages, DeliveryNotes> = new OneToManyLink('DeliveryNotes', UserLanguages, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<UserLanguages, BusinessPartners> = new OneToManyLink('BusinessPartners', UserLanguages, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<UserLanguages, Quotations> = new OneToManyLink('Quotations', UserLanguages, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<UserLanguages, InventoryGenExits> = new OneToManyLink('InventoryGenExits', UserLanguages, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<UserLanguages, PurchaseRequests> = new OneToManyLink('PurchaseRequests', UserLanguages, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<UserLanguages, ReturnRequest> = new OneToManyLink('ReturnRequest', UserLanguages, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<UserLanguages, PurchaseReturns> = new OneToManyLink('PurchaseReturns', UserLanguages, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<UserLanguages, Invoices> = new OneToManyLink('Invoices', UserLanguages, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<UserLanguages, CreditNotes> = new OneToManyLink('CreditNotes', UserLanguages, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<UserLanguages, Orders> = new OneToManyLink('Orders', UserLanguages, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<UserLanguages, DownPayments> = new OneToManyLink('DownPayments', UserLanguages, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<UserLanguages, Drafts> = new OneToManyLink('Drafts', UserLanguages, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<UserLanguages, Returns> = new OneToManyLink('Returns', UserLanguages, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<UserLanguages, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', UserLanguages, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<UserLanguages, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', UserLanguages, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<UserLanguages, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', UserLanguages, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<UserLanguages, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', UserLanguages, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<UserLanguages, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', UserLanguages, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<UserLanguages, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', UserLanguages, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<UserLanguages, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', UserLanguages, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<UserLanguages, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', UserLanguages, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<UserLanguages, PurchaseOrders> = new OneToManyLink('PurchaseOrders', UserLanguages, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<UserLanguages, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', UserLanguages, GoodsReturnRequest);
  /**
   * All fields of the UserLanguages entity.
   */
  export const _allFields: Array<NumberField<UserLanguages> | StringField<UserLanguages> | OneToManyLink<UserLanguages, InventoryGenEntries> | OneToManyLink<UserLanguages, PurchaseQuotations> | OneToManyLink<UserLanguages, DeliveryNotes> | OneToManyLink<UserLanguages, BusinessPartners> | OneToManyLink<UserLanguages, Quotations> | OneToManyLink<UserLanguages, InventoryGenExits> | OneToManyLink<UserLanguages, PurchaseRequests> | OneToManyLink<UserLanguages, ReturnRequest> | OneToManyLink<UserLanguages, PurchaseReturns> | OneToManyLink<UserLanguages, Invoices> | OneToManyLink<UserLanguages, CreditNotes> | OneToManyLink<UserLanguages, Orders> | OneToManyLink<UserLanguages, DownPayments> | OneToManyLink<UserLanguages, Drafts> | OneToManyLink<UserLanguages, Returns> | OneToManyLink<UserLanguages, CorrectionInvoiceReversal> | OneToManyLink<UserLanguages, CorrectionPurchaseInvoice> | OneToManyLink<UserLanguages, CorrectionPurchaseInvoiceReversal> | OneToManyLink<UserLanguages, PurchaseInvoices> | OneToManyLink<UserLanguages, PurchaseDeliveryNotes> | OneToManyLink<UserLanguages, CorrectionInvoice> | OneToManyLink<UserLanguages, PurchaseCreditNotes> | OneToManyLink<UserLanguages, PurchaseDownPayments> | OneToManyLink<UserLanguages, PurchaseOrders> | OneToManyLink<UserLanguages, GoodsReturnRequest>> = [
    UserLanguages.CODE,
    UserLanguages.LANGUAGE_SHORT_NAME,
    UserLanguages.LANGUAGE_FULL_NAME,
    UserLanguages.RELATED_SYSTEM_LANGUAGE,
    UserLanguages.INVENTORY_GEN_ENTRIES,
    UserLanguages.PURCHASE_QUOTATIONS,
    UserLanguages.DELIVERY_NOTES,
    UserLanguages.BUSINESS_PARTNERS,
    UserLanguages.QUOTATIONS,
    UserLanguages.INVENTORY_GEN_EXITS,
    UserLanguages.PURCHASE_REQUESTS,
    UserLanguages.RETURN_REQUEST,
    UserLanguages.PURCHASE_RETURNS,
    UserLanguages.INVOICES,
    UserLanguages.CREDIT_NOTES,
    UserLanguages.ORDERS,
    UserLanguages.DOWN_PAYMENTS,
    UserLanguages.DRAFTS,
    UserLanguages.RETURNS,
    UserLanguages.CORRECTION_INVOICE_REVERSAL,
    UserLanguages.CORRECTION_PURCHASE_INVOICE,
    UserLanguages.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    UserLanguages.PURCHASE_INVOICES,
    UserLanguages.PURCHASE_DELIVERY_NOTES,
    UserLanguages.CORRECTION_INVOICE,
    UserLanguages.PURCHASE_CREDIT_NOTES,
    UserLanguages.PURCHASE_DOWN_PAYMENTS,
    UserLanguages.PURCHASE_ORDERS,
    UserLanguages.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserLanguages> = new AllFields('*', UserLanguages);
  /**
   * All key fields of the UserLanguages entity.
   */
  export const _keyFields: Array<Field<UserLanguages>> = [UserLanguages.CODE];
  /**
   * Mapping of all key field names to the respective static field property UserLanguages.
   */
  export const _keys: { [keys: string]: Field<UserLanguages> } = UserLanguages._keyFields.reduce((acc: { [keys: string]: Field<UserLanguages> }, field: Field<UserLanguages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
