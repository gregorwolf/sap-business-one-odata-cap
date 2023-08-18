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
import type { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { BoOpenIncPayment } from './BoOpenIncPayment';
import { BoBaselineDate } from './BoBaselineDate';
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
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { Orders, OrdersType } from './Orders';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import {
  InventoryTransferRequests,
  InventoryTransferRequestsType
} from './InventoryTransferRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
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
import { PriceLists, PriceListsType } from './PriceLists';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';

/**
 * This class represents the entity "PaymentTermsTypes" of service "SAPB1".
 */
export class PaymentTermsTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentTermsTypesType<T>
{
  /**
   * Technical entity name for PaymentTermsTypes.
   */
  static _entityName = 'PaymentTermsTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PaymentTermsTypes entity
   */
  static _keys = ['GroupNumber'];
  /**
   * Group Number.
   */
  groupNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Terms Group Name.
   * @nullable
   */
  paymentTermsGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start From.
   * @nullable
   */
  startFrom?: BoPayTermDueTypes | null;
  /**
   * Number Of Additional Months.
   * @nullable
   */
  numberOfAdditionalMonths?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Number Of Additional Days.
   * @nullable
   */
  numberOfAdditionalDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Credit Limit.
   * @nullable
   */
  creditLimit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * General Discount.
   * @nullable
   */
  generalDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Interest On Arrears.
   * @nullable
   */
  interestOnArrears?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Load Limit.
   * @nullable
   */
  loadLimit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Open Receipt.
   * @nullable
   */
  openReceipt?: BoOpenIncPayment | null;
  /**
   * Discount Code.
   * @nullable
   */
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Code.
   * @nullable
   */
  dunningCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Baseline Date.
   * @nullable
   */
  baselineDate?: BoBaselineDate | null;
  /**
   * Number Of Installments.
   * @nullable
   */
  numberOfInstallments?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Number Of Tolerance Days.
   * @nullable
   */
  numberOfToleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTransferRequests} entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests<T>[];
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
   * One-to-many navigation property to the {@link StockTransferDrafts} entity.
   */
  stockTransferDrafts!: StockTransferDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
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
   * One-to-one navigation property to the {@link PriceLists} entity.
   */
  priceList?: PriceLists<T> | null;
  /**
   * One-to-one navigation property to the {@link CashDiscounts} entity.
   */
  cashDiscount?: CashDiscounts<T> | null;
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];

  constructor(readonly _entityApi: PaymentTermsTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentTermsTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupNumber: DeserializedType<T, 'Edm.Int32'>;
  paymentTermsGroupName?: DeserializedType<T, 'Edm.String'> | null;
  startFrom?: BoPayTermDueTypes | null;
  numberOfAdditionalMonths?: DeserializedType<T, 'Edm.Int32'> | null;
  numberOfAdditionalDays?: DeserializedType<T, 'Edm.Int32'> | null;
  creditLimit?: DeserializedType<T, 'Edm.Double'> | null;
  generalDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  interestOnArrears?: DeserializedType<T, 'Edm.Double'> | null;
  priceListNo?: DeserializedType<T, 'Edm.Int32'> | null;
  loadLimit?: DeserializedType<T, 'Edm.Double'> | null;
  openReceipt?: BoOpenIncPayment | null;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  dunningCode?: DeserializedType<T, 'Edm.String'> | null;
  baselineDate?: BoBaselineDate | null;
  numberOfInstallments?: DeserializedType<T, 'Edm.Int32'> | null;
  numberOfToleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseQuotations: PurchaseQuotationsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  orders: OrdersType<T>[];
  wizardPaymentMethods: WizardPaymentMethodsType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  inventoryTransferRequests: InventoryTransferRequestsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
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
  priceList?: PriceListsType<T> | null;
  cashDiscount?: CashDiscountsType<T> | null;
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
}
