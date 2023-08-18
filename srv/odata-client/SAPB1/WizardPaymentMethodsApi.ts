/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WizardPaymentMethods } from './WizardPaymentMethods';
import { WizardPaymentMethodsRequestBuilder } from './WizardPaymentMethodsRequestBuilder';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { OrdersApi } from './OrdersApi';
import { UsersApi } from './UsersApi';
import { CountriesApi } from './CountriesApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { HouseBankAccountsApi } from './HouseBankAccountsApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
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
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { CurrencyRestriction } from './CurrencyRestriction';
import { BoPaymentTypeEnum } from './BoPaymentTypeEnum';
import { BoPaymentMeansEnum } from './BoPaymentMeansEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDueDateEnum } from './BoDueDateEnum';
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
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WizardPaymentMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
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
  ): WizardPaymentMethodsApi<DeSerializersT> {
    return new WizardPaymentMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link houseBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNT: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
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
      UsersApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      PaymentTermsTypesApi<DeSerializersT>,
      HouseBankAccountsApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
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
      USER: new OneToOneLink('User', this, linkedApis[7]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[8]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[9]),
      PAYMENT_TERMS_TYPE: new OneToOneLink(
        'PaymentTermsType',
        this,
        linkedApis[10]
      ),
      HOUSE_BANK_ACCOUNT: new OneToOneLink(
        'HouseBankAccount',
        this,
        linkedApis[11]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[12]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[13]),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[14]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[15]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[16]
      ),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[17]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[18]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[19]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[20]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[21]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[22]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[23]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[24]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[25]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[26]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[27]),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[28]
      ),
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

  entityConstructor = WizardPaymentMethods;

  requestBuilder(): WizardPaymentMethodsRequestBuilder<DeSerializersT> {
    return new WizardPaymentMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WizardPaymentMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WizardPaymentMethods<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WizardPaymentMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WizardPaymentMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAYMENT_METHOD_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoPaymentTypeEnum,
      true,
      true
    >;
    PAYMENT_MEANS: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoPaymentMeansEnum,
      true,
      true
    >;
    CHECK_ADDRESS: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CHECK_BANK_DETAILS: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COLLECTION_AUTHORIZATION_CHECK: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BLOCK_FOREIGN_PAYMENT: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BLOCK_FOREIGN_BANK: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CURRENCY_RESTRICTION: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    POST_OFFICE_BANK: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MINIMUM_AMOUNT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAXIMUM_AMOUNT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DEFAULT_BANK: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BANK_COUNTRY: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACCOUNT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENT_COLLECTION: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SENDFOR_ACCEPTANCE: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP_BY_DATE: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEPOSIT_NORM: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_MEMO: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP_BY_PAYMENT_REFERENCE: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP_INVOICESBY_PAY: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DUE_DATE_SELECTION: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoDueDateEnum,
      true,
      true
    >;
    PAYMENT_TERMS_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTTO_GL_INTERIM_ACCOUNT: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BANK_ACCOUNT_KEY: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCEPTED: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORTFOLIO_ID: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUR_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTION_1: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTION_2: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_PLACE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_DLL: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP_INVOICES_BY_PAY_TO_BANK: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP_INVOICES_BY_CURRENCY: EnumField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BANK_CHARGE_RATE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REPORT_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCEL_INSTRUCTION: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCURENCE_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOVEMENT_CODE: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT: OrderableEdmTypeField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_RESTRICTIONS: CollectionField<
      WizardPaymentMethods<DeSerializers>,
      DeSerializersT,
      CurrencyRestriction,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link houseBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNT: OneToOneLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      WizardPaymentMethods<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WizardPaymentMethods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link paymentMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentMethodCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', BoPaymentTypeEnum, true),
        /**
         * Static representation of the {@link paymentMeans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_MEANS: fieldBuilder.buildEnumField(
          'PaymentMeans',
          BoPaymentMeansEnum,
          true
        ),
        /**
         * Static representation of the {@link checkAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_ADDRESS: fieldBuilder.buildEnumField(
          'CheckAddress',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link checkBankDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_BANK_DETAILS: fieldBuilder.buildEnumField(
          'CheckBankDetails',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link collectionAuthorizationCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_AUTHORIZATION_CHECK: fieldBuilder.buildEnumField(
          'CollectionAuthorizationCheck',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link blockForeignPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_FOREIGN_PAYMENT: fieldBuilder.buildEnumField(
          'BlockForeignPayment',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link blockForeignBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_FOREIGN_BANK: fieldBuilder.buildEnumField(
          'BlockForeignBank',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link currencyRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_RESTRICTION: fieldBuilder.buildEnumField(
          'CurrencyRestriction',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link postOfficeBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_OFFICE_BANK: fieldBuilder.buildEnumField(
          'PostOfficeBank',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link minimumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maximumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link defaultBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BANK: fieldBuilder.buildEdmTypeField(
          'DefaultBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'BankCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true),
        /**
         * Static representation of the {@link keyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_CODE: fieldBuilder.buildEdmTypeField('KeyCode', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'TransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        /**
         * Static representation of the {@link agentCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_COLLECTION: fieldBuilder.buildEnumField(
          'AgentCollection',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link sendforAcceptance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDFOR_ACCEPTANCE: fieldBuilder.buildEnumField(
          'SendforAcceptance',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link groupByDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_BY_DATE: fieldBuilder.buildEnumField(
          'GroupByDate',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link depositNorm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_NORM: fieldBuilder.buildEdmTypeField(
          'DepositNorm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_MEMO: fieldBuilder.buildEnumField('DebitMemo', BoYesNoEnum, true),
        /**
         * Static representation of the {@link groupByPaymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_BY_PAYMENT_REFERENCE: fieldBuilder.buildEnumField(
          'GroupByPaymentReference',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link groupInvoicesbyPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_INVOICESBY_PAY: fieldBuilder.buildEnumField(
          'GroupInvoicesbyPay',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link dueDateSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_SELECTION: fieldBuilder.buildEnumField(
          'DueDateSelection',
          BoDueDateEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentTermsCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link posttoGlInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTTO_GL_INTERIM_ACCOUNT: fieldBuilder.buildEnumField(
          'PosttoGLInterimAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link bankAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'BankAccountKey',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEdmTypeField('DocType', 'Edm.String', true),
        /**
         * Static representation of the {@link accepted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCEPTED: fieldBuilder.buildEdmTypeField(
          'Accepted',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portfolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_ID: fieldBuilder.buildEdmTypeField(
          'PortfolioID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUR_CODE: fieldBuilder.buildEdmTypeField('CurCode', 'Edm.String', true),
        /**
         * Static representation of the {@link instruction1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_1: fieldBuilder.buildEdmTypeField(
          'Instruction1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instruction2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_2: fieldBuilder.buildEdmTypeField(
          'Instruction2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_PLACE: fieldBuilder.buildEdmTypeField(
          'PaymentPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeDll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_DLL: fieldBuilder.buildEdmTypeField(
          'BarcodeDll',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link groupInvoicesByPayToBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_INVOICES_BY_PAY_TO_BANK: fieldBuilder.buildEnumField(
          'GroupInvoicesByPayToBank',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link groupInvoicesByCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_INVOICES_BY_CURRENCY: fieldBuilder.buildEnumField(
          'GroupInvoicesByCurrency',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link bankChargeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHARGE_RATE: fieldBuilder.buildEdmTypeField(
          'BankChargeRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link reportCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_CODE: fieldBuilder.buildEdmTypeField(
          'ReportCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancelInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'CancelInstruction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link occurenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURENCE_CODE: fieldBuilder.buildEdmTypeField(
          'OccurenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link movementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'MovementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT: fieldBuilder.buildEdmTypeField(
          'DirectDebit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyRestrictions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_RESTRICTIONS: fieldBuilder.buildCollectionField(
          'CurrencyRestrictions',
          CurrencyRestriction,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WizardPaymentMethods)
      };
    }

    return this._schema;
  }
}
