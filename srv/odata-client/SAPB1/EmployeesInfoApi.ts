/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeesInfo } from './EmployeesInfo';
import { EmployeesInfoRequestBuilder } from './EmployeesInfoRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { WarehousesApi } from './WarehousesApi';
import { ProfitCentersApi } from './ProfitCentersApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { ServiceCallsApi } from './ServiceCallsApi';
import { ItemsApi } from './ItemsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { EmployeeRolesSetupApi } from './EmployeeRolesSetupApi';
import { DepartmentsApi } from './DepartmentsApi';
import { BranchesApi } from './BranchesApi';
import { CountriesApi } from './CountriesApi';
import { UsersApi } from './UsersApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { EmployeeStatusApi } from './EmployeeStatusApi';
import { TerminationReasonApi } from './TerminationReasonApi';
import { BanksApi } from './BanksApi';
import { EmployeePositionApi } from './EmployeePositionApi';
import { EmployeeIdTypeApi } from './EmployeeIdTypeApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { OrdersApi } from './OrdersApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { InvoicesApi } from './InvoicesApi';
import { CampaignsApi } from './CampaignsApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { ProjectManagementTimeSheetApi } from './ProjectManagementTimeSheetApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { ActivitiesApi } from './ActivitiesApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { ProjectManagementsApi } from './ProjectManagementsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { EmployeeAbsenceInfo } from './EmployeeAbsenceInfo';
import { EmployeeEducationInfo } from './EmployeeEducationInfo';
import { EmployeeReviewsInfo } from './EmployeeReviewsInfo';
import { EmployeePreviousEmpoymentInfo } from './EmployeePreviousEmpoymentInfo';
import { EmployeeRolesInfo } from './EmployeeRolesInfo';
import { EmployeeSavingsPaymentInfo } from './EmployeeSavingsPaymentInfo';
import { EmployeeBranchAssignmentItem } from './EmployeeBranchAssignmentItem';
import { BoGenderTypes } from './BoGenderTypes';
import { BoSalaryCostUnits } from './BoSalaryCostUnits';
import { BoMeritalStatuses } from './BoMeritalStatuses';
import { EmployeeExemptionUnitEnum } from './EmployeeExemptionUnitEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EmployeePaymentMethodEnum } from './EmployeePaymentMethodEnum';
import { SpedContabilQualificationCodeEnum } from './SpedContabilQualificationCodeEnum';
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
export class EmployeesInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmployeesInfo<DeSerializersT>, DeSerializersT>
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
  ): EmployeesInfoApi<DeSerializersT> {
    return new EmployeesInfoApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRoleSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_ROLE_SETUP: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeRolesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT_2: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH_2: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_STATUS: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link terminationReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERMINATION_REASON: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      TerminationReasonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeePosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_POSITION: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeePositionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link profitCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeIdType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_ID_TYPE: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeIdTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagementTimeSheet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENT_TIME_SHEET: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProjectManagementTimeSheetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOpportunitiesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ProfitCentersApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      ServiceCallsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      EmployeeRolesSetupApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      BranchesApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      EmployeeStatusApi<DeSerializersT>,
      TerminationReasonApi<DeSerializersT>,
      BanksApi<DeSerializersT>,
      EmployeePositionApi<DeSerializersT>,
      ProfitCentersApi<DeSerializersT>,
      EmployeeIdTypeApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CampaignsApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      ProjectManagementTimeSheetApi<DeSerializersT>,
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
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[1]),
      PROFIT_CENTERS: new OneToManyLink('ProfitCenters', this, linkedApis[2]),
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[3]
      ),
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[4]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[5]),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[6]
      ),
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[7]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[8]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[9]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[10]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[11]
      ),
      EMPLOYEE_ROLE_SETUP: new OneToOneLink(
        'EmployeeRoleSetup',
        this,
        linkedApis[12]
      ),
      DEPARTMENT_2: new OneToOneLink('Department2', this, linkedApis[13]),
      BRANCH_2: new OneToOneLink('Branch2', this, linkedApis[14]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[15]),
      USER: new OneToOneLink('User', this, linkedApis[16]),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[17]),
      EMPLOYEE_STATUS: new OneToOneLink('EmployeeStatus', this, linkedApis[18]),
      TERMINATION_REASON: new OneToOneLink(
        'TerminationReason',
        this,
        linkedApis[19]
      ),
      BANK: new OneToOneLink('Bank', this, linkedApis[20]),
      EMPLOYEE_POSITION: new OneToOneLink(
        'EmployeePosition',
        this,
        linkedApis[21]
      ),
      PROFIT_CENTER: new OneToOneLink('ProfitCenter', this, linkedApis[22]),
      EMPLOYEE_ID_TYPE: new OneToOneLink(
        'EmployeeIDType',
        this,
        linkedApis[23]
      ),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[24]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[25]
      ),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[26]),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[27]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[28]),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[29]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[30]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[31]
      ),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[32]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[33]),
      CAMPAIGNS: new OneToManyLink('Campaigns', this, linkedApis[34]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[35]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[36]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[37]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[38]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[39]
      ),
      PROJECT_MANAGEMENT_TIME_SHEET: new OneToManyLink(
        'ProjectManagementTimeSheet',
        this,
        linkedApis[40]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[41]
      ),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[42]),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[43]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[44]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[45]),
      PROJECT_MANAGEMENTS: new OneToManyLink(
        'ProjectManagements',
        this,
        linkedApis[46]
      ),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[47]
      ),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[48]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[49]
      )
    };
    return this;
  }

  entityConstructor = EmployeesInfo;

  requestBuilder(): EmployeesInfoRequestBuilder<DeSerializersT> {
    return new EmployeesInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmployeesInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmployeesInfo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmployeesInfo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EmployeesInfo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_ID: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoGenderTypes,
      true,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_TYPE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WORK_STREET: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_BLOCK: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ZIP_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_CITY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_COUNTY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_COUNTRY_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_STATE_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANAGER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    APPLICATION_USER_ID: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_PERSON_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OFFICE_PHONE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFICE_EXTENSION: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAGER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_PHONE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_MAIL: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALARY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_UNIT: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoSalaryCostUnits,
      true,
      true
    >;
    EMPLOYEE_COSTS: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    EMPLOYEE_COST_UNIT: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoSalaryCostUnits,
      true,
      true
    >;
    TERMINATION_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TREMINATION_REASON: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BRANCH: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BRANCH_NUM: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_STREET: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_BLOCK: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_ZIP_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_CITY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_COUNTY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_COUNTRY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_STATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNTRY_OF_BIRTH: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARTIAL_STATUS: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoMeritalStatuses,
      true,
      true
    >;
    NUM_OF_CHILDREN: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ID_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSPORT_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSPORT_EXPIRATION_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PICTURE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALARY_CURRENCY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_COSTS_CURRENCY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_BUILDING_FLOOR_ROOM: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_BUILDING_FLOOR_ROOM: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COST_CENTER_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VACATION_PREVIOUS_YEAR: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VACATION_CURRENT_YEAR: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MUNICIPALITY_KEY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CLASS: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_TAX_LIABILITY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIGION: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_RELIGION: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTION_AMOUNT: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    EXEMPTION_UNIT: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeExemptionUnitEnum,
      true,
      true
    >;
    EXEMPTION_CURRENCY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_AMOUNT: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ADDITIONAL_UNIT: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeExemptionUnitEnum,
      true,
      true
    >;
    ADDITIONAL_CURRENCY: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OFFICE_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OFFICE_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEALTH_INSURANCE_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEALTH_INSURANCE_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEALTH_INSURANCE_TYPE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOCIAL_INSURANCE_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSION_STATUS: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDUCATION_STATUS: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GROUP: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TITLE_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CODE_FOR_DATEV: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEVIATING_BANK_ACCOUNT_OWNER: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SPOUSE_FIRST_NAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPOUSE_SURNAME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_EMPLOYEE_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_PLACE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeePaymentMethodEnum,
      true,
      true
    >;
    STD_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CPF: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTANT_RESPONSIBLE: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LEGAL_REPRESENTATIVE: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DIRF_RESPONSIBLE: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CRC_STATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ID_TYPE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PASSPORT_ISSUE_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PASSPORT_ISSUER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALIFICATION_CODE: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      SpedContabilQualificationCodeEnum,
      true,
      true
    >;
    PR_WEB_ACCESS: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PREVIOUS_PR_WEB_ACCESS: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WORK_STREET_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_STREET_NUMBER: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_VENDOR: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    EMPLOYEE_CODE: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    A_RET_SEFAZ: EnumField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    U_ZIEL_KB: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ZIELKON: OrderableEdmTypeField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EMPLOYEE_ABSENCE_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeAbsenceInfo,
      true,
      true
    >;
    EMPLOYEE_EDUCATION_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeEducationInfo,
      true,
      true
    >;
    EMPLOYEE_REVIEWS_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeReviewsInfo,
      true,
      true
    >;
    EMPLOYEE_PREVIOUS_EMPOYMENT_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeePreviousEmpoymentInfo,
      true,
      true
    >;
    EMPLOYEE_ROLES_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeRolesInfo,
      true,
      true
    >;
    EMPLOYEE_SAVINGS_PAYMENT_INFO_LINES: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeSavingsPaymentInfo,
      true,
      true
    >;
    EMPLOYEE_BRANCH_ASSIGNMENT: CollectionField<
      EmployeesInfo<DeSerializers>,
      DeSerializersT,
      EmployeeBranchAssignmentItem,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeRoleSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_ROLE_SETUP: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeRolesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT_2: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH_2: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_STATUS: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link terminationReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERMINATION_REASON: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      TerminationReasonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeePosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_POSITION: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeePositionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link profitCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeIdType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_ID_TYPE: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      EmployeeIdTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagementTimeSheet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENT_TIME_SHEET: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProjectManagementTimeSheetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      EmployeesInfo<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmployeesInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', BoGenderTypes, true),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'JobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_TYPE: fieldBuilder.buildEdmTypeField(
          'EmployeeType',
          'Edm.Int32',
          true
        ),
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
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.Int32', true),
        /**
         * Static representation of the {@link workStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_STREET: fieldBuilder.buildEdmTypeField(
          'WorkStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_BLOCK: fieldBuilder.buildEdmTypeField(
          'WorkBlock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'WorkZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CITY: fieldBuilder.buildEdmTypeField(
          'WorkCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_COUNTY: fieldBuilder.buildEdmTypeField(
          'WorkCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'WorkCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workStateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_STATE_CODE: fieldBuilder.buildEdmTypeField(
          'WorkStateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER: fieldBuilder.buildEdmTypeField('Manager', 'Edm.Int32', true),
        /**
         * Static representation of the {@link applicationUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_USER_ID: fieldBuilder.buildEdmTypeField(
          'ApplicationUserID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'SalesPersonCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link officePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_PHONE: fieldBuilder.buildEdmTypeField(
          'OfficePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link officeExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'OfficeExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAGER: fieldBuilder.buildEdmTypeField('Pager', 'Edm.String', true),
        /**
         * Static representation of the {@link homePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_PHONE: fieldBuilder.buildEdmTypeField(
          'HomePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link eMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_MAIL: fieldBuilder.buildEdmTypeField('eMail', 'Edm.String', true),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link statusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'StatusCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY: fieldBuilder.buildEdmTypeField('Salary', 'Edm.Double', true),
        /**
         * Static representation of the {@link salaryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_UNIT: fieldBuilder.buildEnumField(
          'SalaryUnit',
          BoSalaryCostUnits,
          true
        ),
        /**
         * Static representation of the {@link employeeCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_COSTS: fieldBuilder.buildEdmTypeField(
          'EmployeeCosts',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link employeeCostUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_COST_UNIT: fieldBuilder.buildEnumField(
          'EmployeeCostUnit',
          BoSalaryCostUnits,
          true
        ),
        /**
         * Static representation of the {@link terminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'TerminationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link treminationReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREMINATION_REASON: fieldBuilder.buildEdmTypeField(
          'TreminationReason',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'BankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBranchNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BRANCH_NUM: fieldBuilder.buildEdmTypeField(
          'BankBranchNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_STREET: fieldBuilder.buildEdmTypeField(
          'HomeStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_BLOCK: fieldBuilder.buildEdmTypeField(
          'HomeBlock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'HomeZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_CITY: fieldBuilder.buildEdmTypeField(
          'HomeCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_COUNTY: fieldBuilder.buildEdmTypeField(
          'HomeCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_COUNTRY: fieldBuilder.buildEdmTypeField(
          'HomeCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_STATE: fieldBuilder.buildEdmTypeField(
          'HomeState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'DateOfBirth',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link countryOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'CountryOfBirth',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link martialStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARTIAL_STATUS: fieldBuilder.buildEnumField(
          'MartialStatus',
          BoMeritalStatuses,
          true
        ),
        /**
         * Static representation of the {@link numOfChildren} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_CHILDREN: fieldBuilder.buildEdmTypeField(
          'NumOfChildren',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link idNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link citizenshipCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CitizenshipCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PassportNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passportExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'PassportExpirationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link picture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE: fieldBuilder.buildEdmTypeField('Picture', 'Edm.String', true),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link salaryCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalaryCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeCostsCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_COSTS_CURRENCY: fieldBuilder.buildEdmTypeField(
          'EmployeeCostsCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workBuildingFloorRoom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_BUILDING_FLOOR_ROOM: fieldBuilder.buildEdmTypeField(
          'WorkBuildingFloorRoom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeBuildingFloorRoom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_BUILDING_FLOOR_ROOM: fieldBuilder.buildEdmTypeField(
          'HomeBuildingFloorRoom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField('Position', 'Edm.Int32', true),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link costCenterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_CODE: fieldBuilder.buildEdmTypeField(
          'CostCenterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vacationPreviousYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VACATION_PREVIOUS_YEAR: fieldBuilder.buildEdmTypeField(
          'VacationPreviousYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link vacationCurrentYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VACATION_CURRENT_YEAR: fieldBuilder.buildEdmTypeField(
          'VacationCurrentYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link municipalityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUNICIPALITY_KEY: fieldBuilder.buildEdmTypeField(
          'MunicipalityKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CLASS: fieldBuilder.buildEdmTypeField(
          'TaxClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomeTaxLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_TAX_LIABILITY: fieldBuilder.buildEdmTypeField(
          'IncomeTaxLiability',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link religion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIGION: fieldBuilder.buildEdmTypeField(
          'Religion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerReligion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_RELIGION: fieldBuilder.buildEdmTypeField(
          'PartnerReligion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExemptionAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link exemptionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_UNIT: fieldBuilder.buildEnumField(
          'ExemptionUnit',
          EmployeeExemptionUnitEnum,
          true
        ),
        /**
         * Static representation of the {@link exemptionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExemptionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdditionalAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link additionalUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_UNIT: fieldBuilder.buildEnumField(
          'AdditionalUnit',
          EmployeeExemptionUnitEnum,
          true
        ),
        /**
         * Static representation of the {@link additionalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AdditionalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOfficeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OFFICE_NAME: fieldBuilder.buildEdmTypeField(
          'TaxOfficeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOfficeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OFFICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxOfficeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link healthInsuranceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEALTH_INSURANCE_NAME: fieldBuilder.buildEdmTypeField(
          'HealthInsuranceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link healthInsuranceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEALTH_INSURANCE_CODE: fieldBuilder.buildEdmTypeField(
          'HealthInsuranceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link healthInsuranceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEALTH_INSURANCE_TYPE: fieldBuilder.buildEdmTypeField(
          'HealthInsuranceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link socialInsuranceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOCIAL_INSURANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SocialInsuranceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSION_STATUS: fieldBuilder.buildEdmTypeField(
          'ProfessionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link educationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_STATUS: fieldBuilder.buildEdmTypeField(
          'EducationStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GROUP: fieldBuilder.buildEdmTypeField(
          'PersonGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTitleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE_CODE: fieldBuilder.buildEdmTypeField(
          'JobTitleCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCodeForDatev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE_FOR_DATEV: fieldBuilder.buildEdmTypeField(
          'BankCodeForDATEV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deviatingBankAccountOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVIATING_BANK_ACCOUNT_OWNER: fieldBuilder.buildEnumField(
          'DeviatingBankAccountOwner',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link spouseFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPOUSE_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'SpouseFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link spouseSurname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPOUSE_SURNAME: fieldBuilder.buildEdmTypeField(
          'SpouseSurname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalEmployeeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_EMPLOYEE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalEmployeeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'BirthPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEnumField(
          'PaymentMethod',
          EmployeePaymentMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link stdCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STD_CODE: fieldBuilder.buildEdmTypeField('STDCode', 'Edm.Int32', true),
        /**
         * Static representation of the {@link cpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPF: fieldBuilder.buildEdmTypeField('CPF', 'Edm.String', true),
        /**
         * Static representation of the {@link crcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_NUMBER: fieldBuilder.buildEdmTypeField(
          'CRCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountantResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTANT_RESPONSIBLE: fieldBuilder.buildEnumField(
          'AccountantResponsible',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link legalRepresentative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_REPRESENTATIVE: fieldBuilder.buildEnumField(
          'LegalRepresentative',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link dirfResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRF_RESPONSIBLE: fieldBuilder.buildEnumField(
          'DIRFResponsible',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link crcState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_STATE: fieldBuilder.buildEdmTypeField(
          'CRCState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link idType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID_TYPE: fieldBuilder.buildEdmTypeField('IDType', 'Edm.String', true),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link passportIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'PassportIssueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link passportIssuer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_ISSUER: fieldBuilder.buildEdmTypeField(
          'PassportIssuer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFICATION_CODE: fieldBuilder.buildEnumField(
          'QualificationCode',
          SpedContabilQualificationCodeEnum,
          true
        ),
        /**
         * Static representation of the {@link prWebAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PR_WEB_ACCESS: fieldBuilder.buildEnumField(
          'PRWebAccess',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link previousPrWebAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_PR_WEB_ACCESS: fieldBuilder.buildEnumField(
          'PreviousPRWebAccess',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link workStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homeStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'HomeStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_VENDOR: fieldBuilder.buildEdmTypeField(
          'LinkedVendor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link employeeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CODE: fieldBuilder.buildEdmTypeField(
          'EmployeeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aRetSefaz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        A_RET_SEFAZ: fieldBuilder.buildEnumField(
          'ARetSEFAZ',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uZielKb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZIEL_KB: fieldBuilder.buildEdmTypeField(
          'U_ZielKB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uZielkon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZIELKON: fieldBuilder.buildEdmTypeField(
          'U_Zielkon',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link employeeAbsenceInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ABSENCE_INFO_LINES: fieldBuilder.buildCollectionField(
          'EmployeeAbsenceInfoLines',
          EmployeeAbsenceInfo,
          true
        ),
        /**
         * Static representation of the {@link employeeEducationInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_EDUCATION_INFO_LINES: fieldBuilder.buildCollectionField(
          'EmployeeEducationInfoLines',
          EmployeeEducationInfo,
          true
        ),
        /**
         * Static representation of the {@link employeeReviewsInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_REVIEWS_INFO_LINES: fieldBuilder.buildCollectionField(
          'EmployeeReviewsInfoLines',
          EmployeeReviewsInfo,
          true
        ),
        /**
         * Static representation of the {@link employeePreviousEmpoymentInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_PREVIOUS_EMPOYMENT_INFO_LINES:
          fieldBuilder.buildCollectionField(
            'EmployeePreviousEmpoymentInfoLines',
            EmployeePreviousEmpoymentInfo,
            true
          ),
        /**
         * Static representation of the {@link employeeRolesInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ROLES_INFO_LINES: fieldBuilder.buildCollectionField(
          'EmployeeRolesInfoLines',
          EmployeeRolesInfo,
          true
        ),
        /**
         * Static representation of the {@link employeeSavingsPaymentInfoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_SAVINGS_PAYMENT_INFO_LINES: fieldBuilder.buildCollectionField(
          'EmployeeSavingsPaymentInfoLines',
          EmployeeSavingsPaymentInfo,
          true
        ),
        /**
         * Static representation of the {@link employeeBranchAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_BRANCH_ASSIGNMENT: fieldBuilder.buildCollectionField(
          'EmployeeBranchAssignment',
          EmployeeBranchAssignmentItem,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmployeesInfo)
      };
    }

    return this._schema;
  }
}
