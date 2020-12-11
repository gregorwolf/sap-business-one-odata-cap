/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PosDailySummaryRequestBuilder } from './PosDailySummaryRequestBuilder';
import { Moment } from 'moment';
import { PosTotalizer } from './PosTotalizer';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "POSDailySummary" of service "SAPB1".
 */
export class PosDailySummary extends EntityV4 implements PosDailySummaryType {
  /**
   * Technical entity name for PosDailySummary.
   */
  static _entityName = 'POSDailySummary';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * One-to-one navigation property to the [[FiscalPrinter]] entity.
   */
  fiscalPrinter!: FiscalPrinter;
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
   * Returns an entity builder to construct instances of `PosDailySummary`.
   * @returns A builder that constructs instances of entity type `PosDailySummary`.
   */
  static builder(): EntityBuilderType<PosDailySummary, PosDailySummaryType> {
    return EntityV4.entityBuilder(PosDailySummary);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PosDailySummary` entity type.
   * @returns A `PosDailySummary` request builder.
   */
  static requestBuilder(): PosDailySummaryRequestBuilder {
    return new PosDailySummaryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PosDailySummary`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PosDailySummary`.
   */
  static customField(fieldName: string): CustomFieldV4<PosDailySummary> {
    return EntityV4.customFieldSelector(fieldName, PosDailySummary);
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
  absEntry?: number | null;
  date?: Moment | null;
  equipmentNo?: string | null;
  counterPosition?: number | null;
  resetCounterPosition?: number | null;
  operationCounter?: number | null;
  total?: number | null;
  grossSales?: number | null;
  pisTotal?: number | null;
  cofinsTotal?: number | null;
  posTotalizerCollection?: PosTotalizer[] | null;
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

export namespace PosDailySummary {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<PosDailySummary> = new NumberField('AbsEntry', PosDailySummary, 'Edm.Int32');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<PosDailySummary> = new DateField('Date', PosDailySummary, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[equipmentNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT_NO: StringField<PosDailySummary> = new StringField('EquipmentNo', PosDailySummary, 'Edm.String');
  /**
   * Static representation of the [[counterPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTER_POSITION: NumberField<PosDailySummary> = new NumberField('CounterPosition', PosDailySummary, 'Edm.Int32');
  /**
   * Static representation of the [[resetCounterPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESET_COUNTER_POSITION: NumberField<PosDailySummary> = new NumberField('ResetCounterPosition', PosDailySummary, 'Edm.Int32');
  /**
   * Static representation of the [[operationCounter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_COUNTER: NumberField<PosDailySummary> = new NumberField('OperationCounter', PosDailySummary, 'Edm.Int32');
  /**
   * Static representation of the [[total]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL: NumberField<PosDailySummary> = new NumberField('Total', PosDailySummary, 'Edm.Double');
  /**
   * Static representation of the [[grossSales]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROSS_SALES: NumberField<PosDailySummary> = new NumberField('GrossSales', PosDailySummary, 'Edm.Double');
  /**
   * Static representation of the [[pisTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PIS_TOTAL: NumberField<PosDailySummary> = new NumberField('PISTotal', PosDailySummary, 'Edm.Double');
  /**
   * Static representation of the [[cofinsTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COFINS_TOTAL: NumberField<PosDailySummary> = new NumberField('COFINSTotal', PosDailySummary, 'Edm.Double');
  /**
   * Static representation of the [[posTotalizerCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_TOTALIZER_COLLECTION: CollectionField<PosDailySummary, PosTotalizer> = new CollectionField('POSTotalizerCollection', PosDailySummary, PosTotalizer);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<PosDailySummary, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', PosDailySummary, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<PosDailySummary, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', PosDailySummary, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<PosDailySummary, DeliveryNotes> = new OneToManyLink('DeliveryNotes', PosDailySummary, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<PosDailySummary, Quotations> = new OneToManyLink('Quotations', PosDailySummary, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<PosDailySummary, InventoryGenExits> = new OneToManyLink('InventoryGenExits', PosDailySummary, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<PosDailySummary, PurchaseRequests> = new OneToManyLink('PurchaseRequests', PosDailySummary, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<PosDailySummary, ReturnRequest> = new OneToManyLink('ReturnRequest', PosDailySummary, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<PosDailySummary, PurchaseReturns> = new OneToManyLink('PurchaseReturns', PosDailySummary, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<PosDailySummary, Invoices> = new OneToManyLink('Invoices', PosDailySummary, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<PosDailySummary, CreditNotes> = new OneToManyLink('CreditNotes', PosDailySummary, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<PosDailySummary, Orders> = new OneToManyLink('Orders', PosDailySummary, Orders);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<PosDailySummary, DownPayments> = new OneToManyLink('DownPayments', PosDailySummary, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<PosDailySummary, Drafts> = new OneToManyLink('Drafts', PosDailySummary, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<PosDailySummary, Returns> = new OneToManyLink('Returns', PosDailySummary, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<PosDailySummary, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', PosDailySummary, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<PosDailySummary, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', PosDailySummary, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<PosDailySummary, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', PosDailySummary, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-one navigation property [[fiscalPrinter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_PRINTER: OneToOneLink<PosDailySummary, FiscalPrinter> = new OneToOneLink('FiscalPrinter', PosDailySummary, FiscalPrinter);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<PosDailySummary, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', PosDailySummary, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<PosDailySummary, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', PosDailySummary, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<PosDailySummary, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', PosDailySummary, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<PosDailySummary, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', PosDailySummary, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<PosDailySummary, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', PosDailySummary, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<PosDailySummary, PurchaseOrders> = new OneToManyLink('PurchaseOrders', PosDailySummary, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<PosDailySummary, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', PosDailySummary, GoodsReturnRequest);
  /**
   * All fields of the PosDailySummary entity.
   */
  export const _allFields: Array<NumberField<PosDailySummary> | DateField<PosDailySummary> | StringField<PosDailySummary> | CollectionField<PosDailySummary, PosTotalizer> | OneToManyLink<PosDailySummary, InventoryGenEntries> | OneToManyLink<PosDailySummary, PurchaseQuotations> | OneToManyLink<PosDailySummary, DeliveryNotes> | OneToManyLink<PosDailySummary, Quotations> | OneToManyLink<PosDailySummary, InventoryGenExits> | OneToManyLink<PosDailySummary, PurchaseRequests> | OneToManyLink<PosDailySummary, ReturnRequest> | OneToManyLink<PosDailySummary, PurchaseReturns> | OneToManyLink<PosDailySummary, Invoices> | OneToManyLink<PosDailySummary, CreditNotes> | OneToManyLink<PosDailySummary, Orders> | OneToManyLink<PosDailySummary, DownPayments> | OneToManyLink<PosDailySummary, Drafts> | OneToManyLink<PosDailySummary, Returns> | OneToManyLink<PosDailySummary, CorrectionInvoiceReversal> | OneToManyLink<PosDailySummary, CorrectionPurchaseInvoice> | OneToManyLink<PosDailySummary, CorrectionPurchaseInvoiceReversal> | OneToOneLink<PosDailySummary, FiscalPrinter> | OneToManyLink<PosDailySummary, PurchaseInvoices> | OneToManyLink<PosDailySummary, PurchaseDeliveryNotes> | OneToManyLink<PosDailySummary, CorrectionInvoice> | OneToManyLink<PosDailySummary, PurchaseCreditNotes> | OneToManyLink<PosDailySummary, PurchaseDownPayments> | OneToManyLink<PosDailySummary, PurchaseOrders> | OneToManyLink<PosDailySummary, GoodsReturnRequest>> = [
    PosDailySummary.ABS_ENTRY,
    PosDailySummary.DATE,
    PosDailySummary.EQUIPMENT_NO,
    PosDailySummary.COUNTER_POSITION,
    PosDailySummary.RESET_COUNTER_POSITION,
    PosDailySummary.OPERATION_COUNTER,
    PosDailySummary.TOTAL,
    PosDailySummary.GROSS_SALES,
    PosDailySummary.PIS_TOTAL,
    PosDailySummary.COFINS_TOTAL,
    PosDailySummary.POS_TOTALIZER_COLLECTION,
    PosDailySummary.INVENTORY_GEN_ENTRIES,
    PosDailySummary.PURCHASE_QUOTATIONS,
    PosDailySummary.DELIVERY_NOTES,
    PosDailySummary.QUOTATIONS,
    PosDailySummary.INVENTORY_GEN_EXITS,
    PosDailySummary.PURCHASE_REQUESTS,
    PosDailySummary.RETURN_REQUEST,
    PosDailySummary.PURCHASE_RETURNS,
    PosDailySummary.INVOICES,
    PosDailySummary.CREDIT_NOTES,
    PosDailySummary.ORDERS,
    PosDailySummary.DOWN_PAYMENTS,
    PosDailySummary.DRAFTS,
    PosDailySummary.RETURNS,
    PosDailySummary.CORRECTION_INVOICE_REVERSAL,
    PosDailySummary.CORRECTION_PURCHASE_INVOICE,
    PosDailySummary.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    PosDailySummary.FISCAL_PRINTER,
    PosDailySummary.PURCHASE_INVOICES,
    PosDailySummary.PURCHASE_DELIVERY_NOTES,
    PosDailySummary.CORRECTION_INVOICE,
    PosDailySummary.PURCHASE_CREDIT_NOTES,
    PosDailySummary.PURCHASE_DOWN_PAYMENTS,
    PosDailySummary.PURCHASE_ORDERS,
    PosDailySummary.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PosDailySummary> = new AllFields('*', PosDailySummary);
  /**
   * All key fields of the PosDailySummary entity.
   */
  export const _keyFields: Array<Field<PosDailySummary>> = [PosDailySummary.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PosDailySummary.
   */
  export const _keys: { [keys: string]: Field<PosDailySummary> } = PosDailySummary._keyFields.reduce((acc: { [keys: string]: Field<PosDailySummary> }, field: Field<PosDailySummary>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
