/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Countries } from './Countries';
import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { WarehousesApi } from './WarehousesApi';
import { ChecksforPaymentApi } from './ChecksforPaymentApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { ServiceCallsApi } from './ServiceCallsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { BanksApi } from './BanksApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { OrdersApi } from './OrdersApi';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { ExportDeterminationsApi } from './ExportDeterminationsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { InvoicesApi } from './InvoicesApi';
import { StatesApi } from './StatesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
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
import { HouseBankAccountsApi } from './HouseBankAccountsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { CreditCardsApi } from './CreditCardsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DomesticBankAccountValidationEnum } from './DomesticBankAccountValidationEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CountriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Countries<DeSerializersT>, DeSerializersT>
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
  ): CountriesApi<DeSerializersT> {
    return new CountriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link banks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANKS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exportDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPORT_DETERMINATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ExportDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      StatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARDS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserDefaultGroupsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ChecksforPaymentApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      ServiceCallsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      BanksApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ExportDeterminationsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      StatesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
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
      HouseBankAccountsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      CreditCardsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_DEFAULT_GROUPS: new OneToManyLink(
        'UserDefaultGroups',
        this,
        linkedApis[0]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[1]),
      CHECKSFOR_PAYMENT: new OneToManyLink(
        'ChecksforPayment',
        this,
        linkedApis[2]
      ),
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
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[6]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[7]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[8]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[9]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[10]
      ),
      BANKS: new OneToManyLink('Banks', this, linkedApis[11]),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[12]),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[13]),
      WIZARD_PAYMENT_METHODS: new OneToManyLink(
        'WizardPaymentMethods',
        this,
        linkedApis[14]
      ),
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[15]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[16]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[17]),
      EXPORT_DETERMINATIONS: new OneToManyLink(
        'ExportDeterminations',
        this,
        linkedApis[18]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[19]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[20]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[21]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[22]),
      STATES: new OneToManyLink('States', this, linkedApis[23]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[24]),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[25]),
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[26]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[27]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[28]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[29]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[30]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[31]
      ),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[32]),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[33]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[34]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[35]),
      HOUSE_BANK_ACCOUNTS: new OneToManyLink(
        'HouseBankAccounts',
        this,
        linkedApis[36]
      ),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[37]
      ),
      WAREHOUSE_LOCATIONS: new OneToManyLink(
        'WarehouseLocations',
        this,
        linkedApis[38]
      ),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[39]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[40]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[41]
      ),
      BUSINESS_PLACES: new OneToManyLink(
        'BusinessPlaces',
        this,
        linkedApis[42]
      ),
      CREDIT_CARDS: new OneToManyLink('CreditCards', this, linkedApis[43]),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[44])
    };
    return this;
  }

  entityConstructor = Countries;

  requestBuilder(): CountriesRequestBuilder<DeSerializersT> {
    return new CountriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Countries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Countries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Countries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Countries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Countries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE_FOR_REPORTS: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_FORMAT: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EU: EnumField<
      Countries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NUMBER_OF_DIGITS_FOR_TAX_ID: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_CODE_DIGITS: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_BRANCH_DIGITS: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_ACCOUNT_DIGITS: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_CONTROL_KEY_DIGITS: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOMESTIC_ACCOUNT_VALIDATION: EnumField<
      Countries<DeSerializers>,
      DeSerializersT,
      DomesticBankAccountValidationEnum,
      true,
      true
    >;
    IBAN_VALIDATION: EnumField<
      Countries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BLACKLISTED: EnumField<
      Countries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    UIC_COUNTRY_CODE: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EAEU: EnumField<
      Countries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ISO_ALPHA_2_CODE: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISO_ALPHA_3_CODE: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISO_NUMERIC: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link banks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANKS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exportDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPORT_DETERMINATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ExportDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      StatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARDS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Countries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link codeForReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_FOR_REPORTS: fieldBuilder.buildEdmTypeField(
          'CodeForReports',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_FORMAT: fieldBuilder.buildEdmTypeField(
          'AddressFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU: fieldBuilder.buildEnumField('EU', BoYesNoEnum, true),
        /**
         * Static representation of the {@link numberOfDigitsForTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DIGITS_FOR_TAX_ID: fieldBuilder.buildEdmTypeField(
          'NumberOfDigitsForTaxID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankCodeDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE_DIGITS: fieldBuilder.buildEdmTypeField(
          'BankCodeDigits',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankBranchDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BRANCH_DIGITS: fieldBuilder.buildEdmTypeField(
          'BankBranchDigits',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankAccountDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_DIGITS: fieldBuilder.buildEdmTypeField(
          'BankAccountDigits',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankControlKeyDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONTROL_KEY_DIGITS: fieldBuilder.buildEdmTypeField(
          'BankControlKeyDigits',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link domesticAccountValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOMESTIC_ACCOUNT_VALIDATION: fieldBuilder.buildEnumField(
          'DomesticAccountValidation',
          DomesticBankAccountValidationEnum,
          true
        ),
        /**
         * Static representation of the {@link ibanValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN_VALIDATION: fieldBuilder.buildEnumField(
          'IbanValidation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link blacklisted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLACKLISTED: fieldBuilder.buildEnumField(
          'Blacklisted',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uicCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UIC_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'UICCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eaeu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EAEU: fieldBuilder.buildEnumField('EAEU', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isoAlpha2Code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_ALPHA_2_CODE: fieldBuilder.buildEdmTypeField(
          'ISOAlpha2Code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isoAlpha3Code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_ALPHA_3_CODE: fieldBuilder.buildEdmTypeField(
          'ISOAlpha3Code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isoNumeric} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISO_NUMERIC: fieldBuilder.buildEdmTypeField(
          'ISONumeric',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Countries)
      };
    }

    return this._schema;
  }
}
