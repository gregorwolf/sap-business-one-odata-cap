/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentTermsTypes } from './PaymentTermsTypes';
import { PaymentTermsTypesRequestBuilder } from './PaymentTermsTypesRequestBuilder';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { OrdersApi } from './OrdersApi';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { InventoryTransferRequestsApi } from './InventoryTransferRequestsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { StockTransferDraftsApi } from './StockTransferDraftsApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { PriceListsApi } from './PriceListsApi';
import { CashDiscountsApi } from './CashDiscountsApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { BoOpenIncPayment } from './BoOpenIncPayment';
import { BoBaselineDate } from './BoBaselineDate';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentTermsTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PaymentTermsTypesApi<DeSerializersT> {
    return new PaymentTermsTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST: OneToOneLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseQuotationsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      InventoryTransferRequestsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      StockTransferDraftsApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      PurchaseOrdersApi<DeSerializersT>,
      QuotationsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      PriceListsApi<DeSerializersT>,
      CashDiscountsApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[0]
      ),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[1]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[2]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[3]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[4]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[5]
      ),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[6]),
      WIZARD_PAYMENT_METHODS: new OneToManyLink(
        'WizardPaymentMethods',
        this,
        linkedApis[7]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[8]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[9]),
      INVENTORY_TRANSFER_REQUESTS: new OneToManyLink(
        'InventoryTransferRequests',
        this,
        linkedApis[10]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[11]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[12]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[13]
      ),
      STOCK_TRANSFER_DRAFTS: new OneToManyLink(
        'StockTransferDrafts',
        this,
        linkedApis[14]
      ),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[15]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[16]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[17]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[18]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[19]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[20]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[21]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[22]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[23]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[24]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[25]),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[26]
      ),
      PRICE_LIST: new OneToOneLink('PriceList', this, linkedApis[27]),
      CASH_DISCOUNT: new OneToOneLink('CashDiscount', this, linkedApis[28]),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[29]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[30]
      )
    };
    return this;
  }

  entityConstructor = PaymentTermsTypes;

  requestBuilder(): PaymentTermsTypesRequestBuilder<DeSerializersT> {
    return new PaymentTermsTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentTermsTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentTermsTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PaymentTermsTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentTermsTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NUMBER: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_TERMS_GROUP_NAME: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_FROM: EnumField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      BoPayTermDueTypes,
      true,
      true
    >;
    NUMBER_OF_ADDITIONAL_MONTHS: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMBER_OF_ADDITIONAL_DAYS: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GENERAL_DISCOUNT: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INTEREST_ON_ARREARS: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRICE_LIST_NO: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOAD_LIMIT: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OPEN_RECEIPT: EnumField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      BoOpenIncPayment,
      true,
      true
    >;
    DISCOUNT_CODE: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_CODE: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASELINE_DATE: EnumField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      BoBaselineDate,
      true,
      true
    >;
    NUMBER_OF_INSTALLMENTS: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMBER_OF_TOLERANCE_DAYS: OrderableEdmTypeField<
      PaymentTermsTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST: OneToOneLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      PaymentTermsTypes<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentTermsTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GroupNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link paymentTermsGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FROM: fieldBuilder.buildEnumField(
          'StartFrom',
          BoPayTermDueTypes,
          true
        ),
        /**
         * Static representation of the {@link numberOfAdditionalMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ADDITIONAL_MONTHS: fieldBuilder.buildEdmTypeField(
          'NumberOfAdditionalMonths',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link numberOfAdditionalDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ADDITIONAL_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfAdditionalDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link generalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'GeneralDiscount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link interestOnArrears} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_ON_ARREARS: fieldBuilder.buildEdmTypeField(
          'InterestOnArrears',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link priceListNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST_NO: fieldBuilder.buildEdmTypeField(
          'PriceListNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link loadLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_LIMIT: fieldBuilder.buildEdmTypeField(
          'LoadLimit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link openReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_RECEIPT: fieldBuilder.buildEnumField(
          'OpenReceipt',
          BoOpenIncPayment,
          true
        ),
        /**
         * Static representation of the {@link discountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_CODE: fieldBuilder.buildEdmTypeField(
          'DunningCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baselineDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASELINE_DATE: fieldBuilder.buildEnumField(
          'BaselineDate',
          BoBaselineDate,
          true
        ),
        /**
         * Static representation of the {@link numberOfInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'NumberOfInstallments',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link numberOfToleranceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_TOLERANCE_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfToleranceDays',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentTermsTypes)
      };
    }

    return this._schema;
  }
}
