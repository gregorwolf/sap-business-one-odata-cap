/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NfModelsRequestBuilder } from './NfModelsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NFModels" of service "SAPB1".
 */
export class NfModels extends EntityV4 implements NfModelsType {
  /**
   * Technical entity name for NfModels.
   */
  static _entityName = 'NFModels';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: string;
  /**
   * Nfm Name.
   * @nullable
   */
  nfmName?: string;
  /**
   * Nfm Description.
   * @nullable
   */
  nfmDescription?: string;
  /**
   * Nfm Code.
   * @nullable
   */
  nfmCode?: string;
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[FiscalPrinter]] entity.
   */
  fiscalPrinter!: FiscalPrinter[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
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
   * Returns an entity builder to construct instances of `NfModels`.
   * @returns A builder that constructs instances of entity type `NfModels`.
   */
  static builder(): EntityBuilderType<NfModels, NfModelsType> {
    return EntityV4.entityBuilder(NfModels);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NfModels` entity type.
   * @returns A `NfModels` request builder.
   */
  static requestBuilder(): NfModelsRequestBuilder {
    return new NfModelsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NfModels`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NfModels`.
   */
  static customField(fieldName: string): CustomFieldV4<NfModels> {
    return EntityV4.customFieldSelector(fieldName, NfModels);
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
import { FiscalPrinter, FiscalPrinterType } from './FiscalPrinter';
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
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';

export interface NfModelsType {
  absEntry?: string | null;
  nfmName?: string | null;
  nfmDescription?: string | null;
  nfmCode?: string | null;
  inventoryGenEntries: InventoryGenEntriesType[];
  fiscalPrinter: FiscalPrinterType[];
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
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  purchaseOrders: PurchaseOrdersType[];
  goodsReturnRequest: GoodsReturnRequestType[];
}

export namespace NfModels {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: StringField<NfModels> = new StringField('AbsEntry', NfModels, 'Edm.String');
  /**
   * Static representation of the [[nfmName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NFM_NAME: StringField<NfModels> = new StringField('NFMName', NfModels, 'Edm.String');
  /**
   * Static representation of the [[nfmDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NFM_DESCRIPTION: StringField<NfModels> = new StringField('NFMDescription', NfModels, 'Edm.String');
  /**
   * Static representation of the [[nfmCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NFM_CODE: StringField<NfModels> = new StringField('NFMCode', NfModels, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<NfModels, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', NfModels, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[fiscalPrinter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_PRINTER: OneToManyLink<NfModels, FiscalPrinter> = new OneToManyLink('FiscalPrinter', NfModels, FiscalPrinter);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<NfModels, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', NfModels, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<NfModels, DeliveryNotes> = new OneToManyLink('DeliveryNotes', NfModels, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<NfModels, Quotations> = new OneToManyLink('Quotations', NfModels, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<NfModels, InventoryGenExits> = new OneToManyLink('InventoryGenExits', NfModels, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<NfModels, PurchaseRequests> = new OneToManyLink('PurchaseRequests', NfModels, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<NfModels, ReturnRequest> = new OneToManyLink('ReturnRequest', NfModels, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<NfModels, PurchaseReturns> = new OneToManyLink('PurchaseReturns', NfModels, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<NfModels, Invoices> = new OneToManyLink('Invoices', NfModels, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<NfModels, CreditNotes> = new OneToManyLink('CreditNotes', NfModels, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<NfModels, Orders> = new OneToManyLink('Orders', NfModels, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<NfModels, DownPayments> = new OneToManyLink('DownPayments', NfModels, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<NfModels, Drafts> = new OneToManyLink('Drafts', NfModels, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<NfModels, Returns> = new OneToManyLink('Returns', NfModels, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<NfModels, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', NfModels, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<NfModels, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', NfModels, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<NfModels, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', NfModels, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<NfModels, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', NfModels, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<NfModels, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', NfModels, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<NfModels, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', NfModels, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<NfModels, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', NfModels, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<NfModels, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', NfModels, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<NfModels, PurchaseOrders> = new OneToManyLink('PurchaseOrders', NfModels, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<NfModels, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', NfModels, GoodsReturnRequest);
  /**
   * All fields of the NfModels entity.
   */
  export const _allFields: Array<StringField<NfModels> | OneToManyLink<NfModels, InventoryGenEntries> | OneToManyLink<NfModels, FiscalPrinter> | OneToManyLink<NfModels, PurchaseQuotations> | OneToManyLink<NfModels, DeliveryNotes> | OneToManyLink<NfModels, Quotations> | OneToManyLink<NfModels, InventoryGenExits> | OneToManyLink<NfModels, PurchaseRequests> | OneToManyLink<NfModels, ReturnRequest> | OneToManyLink<NfModels, PurchaseReturns> | OneToManyLink<NfModels, Invoices> | OneToManyLink<NfModels, CreditNotes> | OneToManyLink<NfModels, Orders> | OneToManyLink<NfModels, DownPayments> | OneToManyLink<NfModels, Drafts> | OneToManyLink<NfModels, Returns> | OneToManyLink<NfModels, CorrectionInvoiceReversal> | OneToManyLink<NfModels, CorrectionPurchaseInvoice> | OneToManyLink<NfModels, CorrectionPurchaseInvoiceReversal> | OneToManyLink<NfModels, PurchaseInvoices> | OneToManyLink<NfModels, PurchaseDeliveryNotes> | OneToManyLink<NfModels, CorrectionInvoice> | OneToManyLink<NfModels, PurchaseCreditNotes> | OneToManyLink<NfModels, PurchaseDownPayments> | OneToManyLink<NfModels, PurchaseOrders> | OneToManyLink<NfModels, GoodsReturnRequest>> = [
    NfModels.ABS_ENTRY,
    NfModels.NFM_NAME,
    NfModels.NFM_DESCRIPTION,
    NfModels.NFM_CODE,
    NfModels.INVENTORY_GEN_ENTRIES,
    NfModels.FISCAL_PRINTER,
    NfModels.PURCHASE_QUOTATIONS,
    NfModels.DELIVERY_NOTES,
    NfModels.QUOTATIONS,
    NfModels.INVENTORY_GEN_EXITS,
    NfModels.PURCHASE_REQUESTS,
    NfModels.RETURN_REQUEST,
    NfModels.PURCHASE_RETURNS,
    NfModels.INVOICES,
    NfModels.CREDIT_NOTES,
    NfModels.ORDERS,
    NfModels.DOWN_PAYMENTS,
    NfModels.DRAFTS,
    NfModels.RETURNS,
    NfModels.CORRECTION_INVOICE_REVERSAL,
    NfModels.CORRECTION_PURCHASE_INVOICE,
    NfModels.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    NfModels.PURCHASE_INVOICES,
    NfModels.PURCHASE_DELIVERY_NOTES,
    NfModels.CORRECTION_INVOICE,
    NfModels.PURCHASE_CREDIT_NOTES,
    NfModels.PURCHASE_DOWN_PAYMENTS,
    NfModels.PURCHASE_ORDERS,
    NfModels.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NfModels> = new AllFields('*', NfModels);
  /**
   * All key fields of the NfModels entity.
   */
  export const _keyFields: Array<Field<NfModels>> = [NfModels.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property NfModels.
   */
  export const _keys: { [keys: string]: Field<NfModels> } = NfModels._keyFields.reduce((acc: { [keys: string]: Field<NfModels> }, field: Field<NfModels>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
