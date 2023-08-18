/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesPersons } from './SalesPersons';
import { SalesPersonsRequestBuilder } from './SalesPersonsRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { StockTransfersApi } from './StockTransfersApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { CommissionGroupsApi } from './CommissionGroupsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { OrdersApi } from './OrdersApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { InventoryTransferRequestsApi } from './InventoryTransferRequestsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { StockTransferDraftsApi } from './StockTransferDraftsApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { ContactsApi } from './ContactsApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { ActivitiesApi } from './ActivitiesApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { ProjectManagementsApi } from './ProjectManagementsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
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
export class SalesPersonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesPersons<DeSerializersT>, DeSerializersT>
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
  ): SalesPersonsApi<DeSerializersT> {
    return new SalesPersonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commissionGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMISSION_GROUP_2: OneToOneLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CommissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOpportunitiesApi<DeSerializersT>,
      UserDefaultGroupsApi<DeSerializersT>,
      StockTransfersApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      CommissionGroupsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      InventoryTransferRequestsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      StockTransferDraftsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      ContactsApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      ActivitiesApi<DeSerializersT>,
      PurchaseOrdersApi<DeSerializersT>,
      QuotationsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      ProjectManagementsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_OPPORTUNITIES: new OneToManyLink(
        'SalesOpportunities',
        this,
        linkedApis[0]
      ),
      USER_DEFAULT_GROUPS: new OneToManyLink(
        'UserDefaultGroups',
        this,
        linkedApis[1]
      ),
      STOCK_TRANSFERS: new OneToManyLink('StockTransfers', this, linkedApis[2]),
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[3]
      ),
      COMMISSION_GROUP_2: new OneToOneLink(
        'CommissionGroup2',
        this,
        linkedApis[4]
      ),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[5]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[6]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[7]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[8]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[9]
      ),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[10]),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[11]),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[12]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[13]),
      INVENTORY_TRANSFER_REQUESTS: new OneToManyLink(
        'InventoryTransferRequests',
        this,
        linkedApis[14]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[15]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[16]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[17]
      ),
      STOCK_TRANSFER_DRAFTS: new OneToManyLink(
        'StockTransferDrafts',
        this,
        linkedApis[18]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[19]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[20]),
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[21]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[22]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[23]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[24]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[25]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[26]
      ),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[27]),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[28]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[29]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[30]),
      PROJECT_MANAGEMENTS: new OneToManyLink(
        'ProjectManagements',
        this,
        linkedApis[31]
      ),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[32]
      ),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[33]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[34]
      )
    };
    return this;
  }

  entityConstructor = SalesPersons;

  requestBuilder(): SalesPersonsRequestBuilder<DeSerializersT> {
    return new SalesPersonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesPersons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesPersons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesPersons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesPersons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesPersons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_EMPLOYEE_CODE: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_EMPLOYEE_NAME: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_FOR_SALES_EMPLOYEE: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_GROUP: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCKED: EnumField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACTIVE: EnumField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AUFTEILUNG_VK: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AUFTEILUNG_EK: OrderableEdmTypeField<
      SalesPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commissionGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMISSION_GROUP_2: OneToOneLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CommissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      SalesPersons<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesPersons<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesEmployeeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_EMPLOYEE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesEmployeeCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesEmployeeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_EMPLOYEE_NAME: fieldBuilder.buildEdmTypeField(
          'SalesEmployeeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link commissionForSalesEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_FOR_SALES_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'CommissionForSalesEmployee',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP: fieldBuilder.buildEdmTypeField(
          'CommissionGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true),
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE: fieldBuilder.buildEdmTypeField('Mobile', 'Edm.String', true),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link uAufteilungVk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AUFTEILUNG_VK: fieldBuilder.buildEdmTypeField(
          'U_AufteilungVK',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAufteilungEk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AUFTEILUNG_EK: fieldBuilder.buildEdmTypeField(
          'U_AufteilungEK',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesPersons)
      };
    }

    return this._schema;
  }
}
