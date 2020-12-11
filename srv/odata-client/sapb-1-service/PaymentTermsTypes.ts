/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentTermsTypesRequestBuilder } from './PaymentTermsTypesRequestBuilder';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { BoOpenIncPayment } from './BoOpenIncPayment';
import { BoBaselineDate } from './BoBaselineDate';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentTermsTypes" of service "SAPB1".
 */
export class PaymentTermsTypes extends EntityV4 implements PaymentTermsTypesType {
  /**
   * Technical entity name for PaymentTermsTypes.
   */
  static _entityName = 'PaymentTermsTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Group Number.
   * @nullable
   */
  groupNumber?: number;
  /**
   * Payment Terms Group Name.
   * @nullable
   */
  paymentTermsGroupName?: string;
  /**
   * Start From.
   * @nullable
   */
  startFrom?: BoPayTermDueTypes;
  /**
   * Number Of Additional Months.
   * @nullable
   */
  numberOfAdditionalMonths?: number;
  /**
   * Number Of Additional Days.
   * @nullable
   */
  numberOfAdditionalDays?: number;
  /**
   * Credit Limit.
   * @nullable
   */
  creditLimit?: number;
  /**
   * General Discount.
   * @nullable
   */
  generalDiscount?: number;
  /**
   * Interest On Arrears.
   * @nullable
   */
  interestOnArrears?: number;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: number;
  /**
   * Load Limit.
   * @nullable
   */
  loadLimit?: number;
  /**
   * Open Receipt.
   * @nullable
   */
  openReceipt?: BoOpenIncPayment;
  /**
   * Discount Code.
   * @nullable
   */
  discountCode?: string;
  /**
   * Dunning Code.
   * @nullable
   */
  dunningCode?: string;
  /**
   * Baseline Date.
   * @nullable
   */
  baselineDate?: BoBaselineDate;
  /**
   * Number Of Installments.
   * @nullable
   */
  numberOfInstallments?: number;
  /**
   * Number Of Tolerance Days.
   * @nullable
   */
  numberOfToleranceDays?: number;
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList!: PriceLists;
  /**
   * One-to-one navigation property to the [[CashDiscounts]] entity.
   */
  cashDiscount!: CashDiscounts;
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
   * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods[];
  /**
   * One-to-many navigation property to the [[StockTransferDrafts]] entity.
   */
  stockTransferDrafts!: StockTransferDrafts[];
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
   * Returns an entity builder to construct instances of `PaymentTermsTypes`.
   * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
   */
  static builder(): EntityBuilderType<PaymentTermsTypes, PaymentTermsTypesType> {
    return EntityV4.entityBuilder(PaymentTermsTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentTermsTypes` entity type.
   * @returns A `PaymentTermsTypes` request builder.
   */
  static requestBuilder(): PaymentTermsTypesRequestBuilder {
    return new PaymentTermsTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentTermsTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<PaymentTermsTypes> {
    return EntityV4.customFieldSelector(fieldName, PaymentTermsTypes);
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
import { PriceLists, PriceListsType } from './PriceLists';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
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
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
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

export interface PaymentTermsTypesType {
  groupNumber?: number | null;
  paymentTermsGroupName?: string | null;
  startFrom?: BoPayTermDueTypes | null;
  numberOfAdditionalMonths?: number | null;
  numberOfAdditionalDays?: number | null;
  creditLimit?: number | null;
  generalDiscount?: number | null;
  interestOnArrears?: number | null;
  priceListNo?: number | null;
  loadLimit?: number | null;
  openReceipt?: BoOpenIncPayment | null;
  discountCode?: string | null;
  dunningCode?: string | null;
  baselineDate?: BoBaselineDate | null;
  numberOfInstallments?: number | null;
  numberOfToleranceDays?: number | null;
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  priceList: PriceListsType;
  cashDiscount: CashDiscountsType;
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
  inventoryTransferRequests: InventoryTransferRequestsType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  wizardPaymentMethods: WizardPaymentMethodsType[];
  stockTransferDrafts: StockTransferDraftsType[];
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

export namespace PaymentTermsTypes {
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<PaymentTermsTypes> = new NumberField('GroupNumber', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the [[paymentTermsGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_GROUP_NAME: StringField<PaymentTermsTypes> = new StringField('PaymentTermsGroupName', PaymentTermsTypes, 'Edm.String');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<PaymentTermsTypes> = new EnumField('StartFrom', PaymentTermsTypes);
  /**
   * Static representation of the [[numberOfAdditionalMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_ADDITIONAL_MONTHS: NumberField<PaymentTermsTypes> = new NumberField('NumberOfAdditionalMonths', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the [[numberOfAdditionalDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_ADDITIONAL_DAYS: NumberField<PaymentTermsTypes> = new NumberField('NumberOfAdditionalDays', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the [[creditLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_LIMIT: NumberField<PaymentTermsTypes> = new NumberField('CreditLimit', PaymentTermsTypes, 'Edm.Double');
  /**
   * Static representation of the [[generalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERAL_DISCOUNT: NumberField<PaymentTermsTypes> = new NumberField('GeneralDiscount', PaymentTermsTypes, 'Edm.Double');
  /**
   * Static representation of the [[interestOnArrears]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_ON_ARREARS: NumberField<PaymentTermsTypes> = new NumberField('InterestOnArrears', PaymentTermsTypes, 'Edm.Double');
  /**
   * Static representation of the [[priceListNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NO: NumberField<PaymentTermsTypes> = new NumberField('PriceListNo', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the [[loadLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOAD_LIMIT: NumberField<PaymentTermsTypes> = new NumberField('LoadLimit', PaymentTermsTypes, 'Edm.Double');
  /**
   * Static representation of the [[openReceipt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_RECEIPT: EnumField<PaymentTermsTypes> = new EnumField('OpenReceipt', PaymentTermsTypes);
  /**
   * Static representation of the [[discountCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_CODE: StringField<PaymentTermsTypes> = new StringField('DiscountCode', PaymentTermsTypes, 'Edm.String');
  /**
   * Static representation of the [[dunningCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_CODE: StringField<PaymentTermsTypes> = new StringField('DunningCode', PaymentTermsTypes, 'Edm.String');
  /**
   * Static representation of the [[baselineDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASELINE_DATE: EnumField<PaymentTermsTypes> = new EnumField('BaselineDate', PaymentTermsTypes);
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<PaymentTermsTypes> = new NumberField('NumberOfInstallments', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the [[numberOfToleranceDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_TOLERANCE_DAYS: NumberField<PaymentTermsTypes> = new NumberField('NumberOfToleranceDays', PaymentTermsTypes, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<PaymentTermsTypes, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', PaymentTermsTypes, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<PaymentTermsTypes, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', PaymentTermsTypes, PurchaseQuotations);
  /**
   * Static representation of the one-to-one navigation property [[priceList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: OneToOneLink<PaymentTermsTypes, PriceLists> = new OneToOneLink('PriceList', PaymentTermsTypes, PriceLists);
  /**
   * Static representation of the one-to-one navigation property [[cashDiscount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT: OneToOneLink<PaymentTermsTypes, CashDiscounts> = new OneToOneLink('CashDiscount', PaymentTermsTypes, CashDiscounts);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<PaymentTermsTypes, DeliveryNotes> = new OneToManyLink('DeliveryNotes', PaymentTermsTypes, DeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<PaymentTermsTypes, BusinessPartners> = new OneToManyLink('BusinessPartners', PaymentTermsTypes, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<PaymentTermsTypes, Quotations> = new OneToManyLink('Quotations', PaymentTermsTypes, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<PaymentTermsTypes, InventoryGenExits> = new OneToManyLink('InventoryGenExits', PaymentTermsTypes, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<PaymentTermsTypes, PurchaseRequests> = new OneToManyLink('PurchaseRequests', PaymentTermsTypes, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<PaymentTermsTypes, ReturnRequest> = new OneToManyLink('ReturnRequest', PaymentTermsTypes, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<PaymentTermsTypes, BlanketAgreements> = new OneToManyLink('BlanketAgreements', PaymentTermsTypes, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<PaymentTermsTypes, PurchaseReturns> = new OneToManyLink('PurchaseReturns', PaymentTermsTypes, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<PaymentTermsTypes, Invoices> = new OneToManyLink('Invoices', PaymentTermsTypes, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<PaymentTermsTypes, CreditNotes> = new OneToManyLink('CreditNotes', PaymentTermsTypes, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<PaymentTermsTypes, Orders> = new OneToManyLink('Orders', PaymentTermsTypes, Orders);
  /**
   * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<PaymentTermsTypes, InventoryTransferRequests> = new OneToManyLink('InventoryTransferRequests', PaymentTermsTypes, InventoryTransferRequests);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<PaymentTermsTypes, DownPayments> = new OneToManyLink('DownPayments', PaymentTermsTypes, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<PaymentTermsTypes, Drafts> = new OneToManyLink('Drafts', PaymentTermsTypes, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHODS: OneToManyLink<PaymentTermsTypes, WizardPaymentMethods> = new OneToManyLink('WizardPaymentMethods', PaymentTermsTypes, WizardPaymentMethods);
  /**
   * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_DRAFTS: OneToManyLink<PaymentTermsTypes, StockTransferDrafts> = new OneToManyLink('StockTransferDrafts', PaymentTermsTypes, StockTransferDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<PaymentTermsTypes, Returns> = new OneToManyLink('Returns', PaymentTermsTypes, Returns);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<PaymentTermsTypes, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', PaymentTermsTypes, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', PaymentTermsTypes, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', PaymentTermsTypes, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<PaymentTermsTypes, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', PaymentTermsTypes, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<PaymentTermsTypes, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', PaymentTermsTypes, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<PaymentTermsTypes, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', PaymentTermsTypes, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<PaymentTermsTypes, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', PaymentTermsTypes, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<PaymentTermsTypes, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', PaymentTermsTypes, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<PaymentTermsTypes, PurchaseOrders> = new OneToManyLink('PurchaseOrders', PaymentTermsTypes, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<PaymentTermsTypes, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', PaymentTermsTypes, GoodsReturnRequest);
  /**
   * All fields of the PaymentTermsTypes entity.
   */
  export const _allFields: Array<NumberField<PaymentTermsTypes> | StringField<PaymentTermsTypes> | EnumField<PaymentTermsTypes> | OneToManyLink<PaymentTermsTypes, InventoryGenEntries> | OneToManyLink<PaymentTermsTypes, PurchaseQuotations> | OneToOneLink<PaymentTermsTypes, PriceLists> | OneToOneLink<PaymentTermsTypes, CashDiscounts> | OneToManyLink<PaymentTermsTypes, DeliveryNotes> | OneToManyLink<PaymentTermsTypes, BusinessPartners> | OneToManyLink<PaymentTermsTypes, Quotations> | OneToManyLink<PaymentTermsTypes, InventoryGenExits> | OneToManyLink<PaymentTermsTypes, PurchaseRequests> | OneToManyLink<PaymentTermsTypes, ReturnRequest> | OneToManyLink<PaymentTermsTypes, BlanketAgreements> | OneToManyLink<PaymentTermsTypes, PurchaseReturns> | OneToManyLink<PaymentTermsTypes, Invoices> | OneToManyLink<PaymentTermsTypes, CreditNotes> | OneToManyLink<PaymentTermsTypes, Orders> | OneToManyLink<PaymentTermsTypes, InventoryTransferRequests> | OneToManyLink<PaymentTermsTypes, DownPayments> | OneToManyLink<PaymentTermsTypes, Drafts> | OneToManyLink<PaymentTermsTypes, WizardPaymentMethods> | OneToManyLink<PaymentTermsTypes, StockTransferDrafts> | OneToManyLink<PaymentTermsTypes, Returns> | OneToManyLink<PaymentTermsTypes, CorrectionInvoiceReversal> | OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoice> | OneToManyLink<PaymentTermsTypes, CorrectionPurchaseInvoiceReversal> | OneToManyLink<PaymentTermsTypes, PurchaseInvoices> | OneToManyLink<PaymentTermsTypes, PurchaseDeliveryNotes> | OneToManyLink<PaymentTermsTypes, CorrectionInvoice> | OneToManyLink<PaymentTermsTypes, PurchaseCreditNotes> | OneToManyLink<PaymentTermsTypes, PurchaseDownPayments> | OneToManyLink<PaymentTermsTypes, PurchaseOrders> | OneToManyLink<PaymentTermsTypes, GoodsReturnRequest>> = [
    PaymentTermsTypes.GROUP_NUMBER,
    PaymentTermsTypes.PAYMENT_TERMS_GROUP_NAME,
    PaymentTermsTypes.START_FROM,
    PaymentTermsTypes.NUMBER_OF_ADDITIONAL_MONTHS,
    PaymentTermsTypes.NUMBER_OF_ADDITIONAL_DAYS,
    PaymentTermsTypes.CREDIT_LIMIT,
    PaymentTermsTypes.GENERAL_DISCOUNT,
    PaymentTermsTypes.INTEREST_ON_ARREARS,
    PaymentTermsTypes.PRICE_LIST_NO,
    PaymentTermsTypes.LOAD_LIMIT,
    PaymentTermsTypes.OPEN_RECEIPT,
    PaymentTermsTypes.DISCOUNT_CODE,
    PaymentTermsTypes.DUNNING_CODE,
    PaymentTermsTypes.BASELINE_DATE,
    PaymentTermsTypes.NUMBER_OF_INSTALLMENTS,
    PaymentTermsTypes.NUMBER_OF_TOLERANCE_DAYS,
    PaymentTermsTypes.INVENTORY_GEN_ENTRIES,
    PaymentTermsTypes.PURCHASE_QUOTATIONS,
    PaymentTermsTypes.PRICE_LIST,
    PaymentTermsTypes.CASH_DISCOUNT,
    PaymentTermsTypes.DELIVERY_NOTES,
    PaymentTermsTypes.BUSINESS_PARTNERS,
    PaymentTermsTypes.QUOTATIONS,
    PaymentTermsTypes.INVENTORY_GEN_EXITS,
    PaymentTermsTypes.PURCHASE_REQUESTS,
    PaymentTermsTypes.RETURN_REQUEST,
    PaymentTermsTypes.BLANKET_AGREEMENTS,
    PaymentTermsTypes.PURCHASE_RETURNS,
    PaymentTermsTypes.INVOICES,
    PaymentTermsTypes.CREDIT_NOTES,
    PaymentTermsTypes.ORDERS,
    PaymentTermsTypes.INVENTORY_TRANSFER_REQUESTS,
    PaymentTermsTypes.DOWN_PAYMENTS,
    PaymentTermsTypes.DRAFTS,
    PaymentTermsTypes.WIZARD_PAYMENT_METHODS,
    PaymentTermsTypes.STOCK_TRANSFER_DRAFTS,
    PaymentTermsTypes.RETURNS,
    PaymentTermsTypes.CORRECTION_INVOICE_REVERSAL,
    PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE,
    PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    PaymentTermsTypes.PURCHASE_INVOICES,
    PaymentTermsTypes.PURCHASE_DELIVERY_NOTES,
    PaymentTermsTypes.CORRECTION_INVOICE,
    PaymentTermsTypes.PURCHASE_CREDIT_NOTES,
    PaymentTermsTypes.PURCHASE_DOWN_PAYMENTS,
    PaymentTermsTypes.PURCHASE_ORDERS,
    PaymentTermsTypes.GOODS_RETURN_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentTermsTypes> = new AllFields('*', PaymentTermsTypes);
  /**
   * All key fields of the PaymentTermsTypes entity.
   */
  export const _keyFields: Array<Field<PaymentTermsTypes>> = [PaymentTermsTypes.GROUP_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property PaymentTermsTypes.
   */
  export const _keys: { [keys: string]: Field<PaymentTermsTypes> } = PaymentTermsTypes._keyFields.reduce((acc: { [keys: string]: Field<PaymentTermsTypes> }, field: Field<PaymentTermsTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
