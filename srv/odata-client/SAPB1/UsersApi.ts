/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Users } from './Users';
import { UsersRequestBuilder } from './UsersRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { LegalDataApi } from './LegalDataApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { ServiceCallsApi } from './ServiceCallsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { PickListsApi } from './PickListsApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { OrdersApi } from './OrdersApi';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { ServiceContractsApi } from './ServiceContractsApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { MaterialRevaluationApi } from './MaterialRevaluationApi';
import { DraftsApi } from './DraftsApi';
import { ApprovalRequestsApi } from './ApprovalRequestsApi';
import { QueueApi } from './QueueApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { BranchesApi } from './BranchesApi';
import { DepartmentsApi } from './DepartmentsApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { SalesTaxAuthoritiesApi } from './SalesTaxAuthoritiesApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { SalesTaxAuthoritiesTypesApi } from './SalesTaxAuthoritiesTypesApi';
import { KnowledgeBaseSolutionsApi } from './KnowledgeBaseSolutionsApi';
import { ContactsApi } from './ContactsApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { CockpitsApi } from './CockpitsApi';
import { UserPermissionTreeApi } from './UserPermissionTreeApi';
import { ActivitiesApi } from './ActivitiesApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { SalesTaxCodesApi } from './SalesTaxCodesApi';
import { BankPagesApi } from './BankPagesApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { FormPreferencesApi } from './FormPreferencesApi';
import { UserPermissionItem } from './UserPermissionItem';
import { UserActionRecordItem } from './UserActionRecordItem';
import { UserGroupByUserItem } from './UserGroupByUserItem';
import { UserBranchAssignmentItem } from './UserBranchAssignmentItem';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSuppLangs } from './BoSuppLangs';
import { BoUserGroup } from './BoUserGroup';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Users<DeSerializersT>, DeSerializersT>
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
  ): UsersApi<DeSerializersT> {
    return new UsersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_DATA: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      LegalDataApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pickLists} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICK_LISTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PickListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link materialRevaluation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_REVALUATION: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      MaterialRevaluationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link queue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUEUE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      QueueApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH_2: OneToOneLink<
      Users<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT_2: OneToOneLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthoritiesTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cockpits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COCKPITS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CockpitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userPermissionTree} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_PERMISSION_TREE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      UserPermissionTreeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankPages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_PAGES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      BankPagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formPreferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORM_PREFERENCES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      FormPreferencesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOpportunitiesApi<DeSerializersT>,
      UserDefaultGroupsApi<DeSerializersT>,
      LegalDataApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      ServiceCallsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      PickListsApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      ServiceContractsApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      MaterialRevaluationApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ApprovalRequestsApi<DeSerializersT>,
      QueueApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      BranchesApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      SalesTaxAuthoritiesApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>,
      KnowledgeBaseSolutionsApi<DeSerializersT>,
      ContactsApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      CockpitsApi<DeSerializersT>,
      UserPermissionTreeApi<DeSerializersT>,
      ActivitiesApi<DeSerializersT>,
      PurchaseOrdersApi<DeSerializersT>,
      QuotationsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      SalesTaxCodesApi<DeSerializersT>,
      BankPagesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>,
      FormPreferencesApi<DeSerializersT>
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
      LEGAL_DATA: new OneToManyLink('LegalData', this, linkedApis[2]),
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[3]
      ),
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[4]),
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
      PICK_LISTS: new OneToManyLink('PickLists', this, linkedApis[9]),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[10]
      ),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[11]),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[12]),
      WIZARD_PAYMENT_METHODS: new OneToManyLink(
        'WizardPaymentMethods',
        this,
        linkedApis[13]
      ),
      SERVICE_CONTRACTS: new OneToManyLink(
        'ServiceContracts',
        this,
        linkedApis[14]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[15]
      ),
      MATERIAL_REVALUATION: new OneToManyLink(
        'MaterialRevaluation',
        this,
        linkedApis[16]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[17]),
      APPROVAL_REQUESTS: new OneToManyLink(
        'ApprovalRequests',
        this,
        linkedApis[18]
      ),
      QUEUE: new OneToManyLink('Queue', this, linkedApis[19]),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[20]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[21]),
      BRANCH_2: new OneToOneLink('Branch2', this, linkedApis[22]),
      DEPARTMENT_2: new OneToOneLink('Department2', this, linkedApis[23]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[24]
      ),
      SALES_TAX_AUTHORITIES: new OneToManyLink(
        'SalesTaxAuthorities',
        this,
        linkedApis[25]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[26]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[27]),
      SALES_TAX_AUTHORITIES_TYPES: new OneToManyLink(
        'SalesTaxAuthoritiesTypes',
        this,
        linkedApis[28]
      ),
      KNOWLEDGE_BASE_SOLUTIONS: new OneToManyLink(
        'KnowledgeBaseSolutions',
        this,
        linkedApis[29]
      ),
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[30]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[31]
      ),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[32]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[33]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[34]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[35]
      ),
      COCKPITS: new OneToManyLink('Cockpits', this, linkedApis[36]),
      USER_PERMISSION_TREE: new OneToManyLink(
        'UserPermissionTree',
        this,
        linkedApis[37]
      ),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[38]),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[39]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[40]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[41]),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[42]
      ),
      SALES_TAX_CODES: new OneToManyLink('SalesTaxCodes', this, linkedApis[43]),
      BANK_PAGES: new OneToManyLink('BankPages', this, linkedApis[44]),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[45]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[46]
      ),
      FORM_PREFERENCES: new OneToManyLink(
        'FormPreferences',
        this,
        linkedApis[47]
      )
    };
    return this;
  }

  entityConstructor = Users;

  requestBuilder(): UsersRequestBuilder<DeSerializersT> {
    return new UsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Users<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Users<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Users<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Users, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Users, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INTERNAL_KEY: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_PASSWORD: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_CODE: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPERUSER: EnumField<
      Users<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    E_MAIL: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE_NUMBER: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULTS: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LANGUAGE_CODE: EnumField<
      Users<DeSerializers>,
      DeSerializersT,
      BoSuppLangs,
      true,
      true
    >;
    LOCKED: EnumField<
      Users<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GROUP: EnumField<
      Users<DeSerializers>,
      DeSerializersT,
      BoUserGroup,
      true,
      true
    >;
    MAX_DISCOUNT_GENERAL: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_DISCOUNT_SALES: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_DISCOUNT_PURCHASE: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CASH_LIMIT: EnumField<
      Users<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MAX_CASH_AMT_FOR_INCMNG_PAYTS: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LAST_LOGOUT_DATE: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_LOGIN_TIME: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    LAST_LOGOUT_TIME: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    LAST_PASSWORD_CHANGE_TIME: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    LAST_PASSWORD_CHANGED_BY: OrderableEdmTypeField<
      Users<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PERMISSION: CollectionField<
      Users<DeSerializers>,
      DeSerializersT,
      UserPermissionItem,
      true,
      true
    >;
    USER_ACTION_RECORD: CollectionField<
      Users<DeSerializers>,
      DeSerializersT,
      UserActionRecordItem,
      true,
      true
    >;
    USER_GROUP_BY_USER: CollectionField<
      Users<DeSerializers>,
      DeSerializersT,
      UserGroupByUserItem,
      true,
      true
    >;
    USER_BRANCH_ASSIGNMENT: CollectionField<
      Users<DeSerializers>,
      DeSerializersT,
      UserBranchAssignmentItem,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_DATA: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      LegalDataApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pickLists} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICK_LISTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PickListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link materialRevaluation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_REVALUATION: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      MaterialRevaluationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link queue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUEUE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      QueueApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH_2: OneToOneLink<
      Users<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT_2: OneToOneLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthoritiesTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cockpits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COCKPITS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CockpitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userPermissionTree} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_PERMISSION_TREE: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      UserPermissionTreeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankPages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_PAGES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      BankPagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formPreferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORM_PREFERENCES: OneToManyLink<
      Users<DeSerializersT>,
      DeSerializersT,
      FormPreferencesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Users<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link internalKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_KEY: fieldBuilder.buildEdmTypeField(
          'InternalKey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link userPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PASSWORD: fieldBuilder.buildEdmTypeField(
          'UserPassword',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_CODE: fieldBuilder.buildEdmTypeField(
          'UserCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link superuser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPERUSER: fieldBuilder.buildEnumField('Superuser', BoYesNoEnum, true),
        /**
         * Static representation of the {@link eMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_MAIL: fieldBuilder.buildEdmTypeField('eMail', 'Edm.String', true),
        /**
         * Static representation of the {@link mobilePhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MobilePhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaults} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULTS: fieldBuilder.buildEdmTypeField(
          'Defaults',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'FaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.Int32', true),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link languageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE: fieldBuilder.buildEnumField(
          'LanguageCode',
          BoSuppLangs,
          true
        ),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true),
        /**
         * Static representation of the {@link group} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP: fieldBuilder.buildEnumField('Group', BoUserGroup, true),
        /**
         * Static representation of the {@link maxDiscountGeneral} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_GENERAL: fieldBuilder.buildEdmTypeField(
          'MaxDiscountGeneral',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxDiscountSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_SALES: fieldBuilder.buildEdmTypeField(
          'MaxDiscountSales',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxDiscountPurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_PURCHASE: fieldBuilder.buildEdmTypeField(
          'MaxDiscountPurchase',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cashLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_LIMIT: fieldBuilder.buildEnumField('CashLimit', BoYesNoEnum, true),
        /**
         * Static representation of the {@link maxCashAmtForIncmngPayts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_CASH_AMT_FOR_INCMNG_PAYTS: fieldBuilder.buildEdmTypeField(
          'MaxCashAmtForIncmngPayts',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link lastLogoutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_LOGOUT_DATE: fieldBuilder.buildEdmTypeField(
          'LastLogoutDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastLoginTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_LOGIN_TIME: fieldBuilder.buildEdmTypeField(
          'LastLoginTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link lastLogoutTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_LOGOUT_TIME: fieldBuilder.buildEdmTypeField(
          'LastLogoutTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link lastPasswordChangeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PASSWORD_CHANGE_TIME: fieldBuilder.buildEdmTypeField(
          'LastPasswordChangeTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link lastPasswordChangedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PASSWORD_CHANGED_BY: fieldBuilder.buildEdmTypeField(
          'LastPasswordChangedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPermission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PERMISSION: fieldBuilder.buildCollectionField(
          'UserPermission',
          UserPermissionItem,
          true
        ),
        /**
         * Static representation of the {@link userActionRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ACTION_RECORD: fieldBuilder.buildCollectionField(
          'UserActionRecord',
          UserActionRecordItem,
          true
        ),
        /**
         * Static representation of the {@link userGroupByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_BY_USER: fieldBuilder.buildCollectionField(
          'UserGroupByUser',
          UserGroupByUserItem,
          true
        ),
        /**
         * Static representation of the {@link userBranchAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_BRANCH_ASSIGNMENT: fieldBuilder.buildCollectionField(
          'UserBranchAssignment',
          UserBranchAssignmentItem,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Users)
      };
    }

    return this._schema;
  }
}
