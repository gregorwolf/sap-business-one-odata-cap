/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { FactoringIndicatorsApi } from './FactoringIndicatorsApi';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';
import {
  CorrectionPurchaseInvoice,
  CorrectionPurchaseInvoiceType
} from './CorrectionPurchaseInvoice';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { Orders, OrdersType } from './Orders';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { DownPayments, DownPaymentsType } from './DownPayments';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';

/**
 * This class represents the entity "FactoringIndicators" of service "SAPB1".
 */
export class FactoringIndicators<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FactoringIndicatorsType<T>
{
  /**
   * Technical entity name for FactoringIndicators.
   */
  static _entityName = 'FactoringIndicators';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FactoringIndicators entity
   */
  static _keys = ['IndicatorCode'];
  /**
   * Indicator Code.
   */
  indicatorCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator Name.
   * @nullable
   */
  indicatorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoice} entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link DownPayments} entity.
   */
  downPayments!: DownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDownPayments} entity.
   */
  purchaseDownPayments!: PurchaseDownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseReturns} entity.
   */
  purchaseReturns!: PurchaseReturns<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrders} entity.
   */
  purchaseOrders!: PurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link Quotations} entity.
   */
  quotations!: Quotations<T>[];
  /**
   * One-to-many navigation property to the {@link Returns} entity.
   */
  returns!: Returns<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];

  constructor(readonly _entityApi: FactoringIndicatorsApi<T>) {
    super(_entityApi);
  }
}

export interface FactoringIndicatorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  indicatorCode: DeserializedType<T, 'Edm.String'>;
  indicatorName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseQuotations: PurchaseQuotationsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  journalEntries: JournalEntriesType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  orders: OrdersType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
}