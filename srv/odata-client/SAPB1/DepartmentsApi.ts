/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Departments } from './Departments';
import { DepartmentsRequestBuilder } from './DepartmentsRequestBuilder';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { OrdersApi } from './OrdersApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { UsersApi } from './UsersApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DepartmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Departments<DeSerializersT>, DeSerializersT>
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
  ): DepartmentsApi<DeSerializersT> {
    return new DepartmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link users} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Departments<DeSerializersT>,
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
      EmployeesInfoApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
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
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[6]),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[7]),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[8]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[9]),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[10]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[11]),
      USERS: new OneToManyLink('Users', this, linkedApis[12]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[13]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[14]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[15]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[16]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[17]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[18]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[19]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[20]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[21]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[22]),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[23]
      ),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[24]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[25]
      )
    };
    return this;
  }

  entityConstructor = Departments;

  requestBuilder(): DepartmentsRequestBuilder<DeSerializersT> {
    return new DepartmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Departments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Departments<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Departments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Departments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Departments, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Departments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link users} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Departments<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Departments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Departments)
      };
    }

    return this._schema;
  }
}
