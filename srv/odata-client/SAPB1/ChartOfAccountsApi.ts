/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChartOfAccounts } from './ChartOfAccounts';
import { ChartOfAccountsRequestBuilder } from './ChartOfAccountsRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { AccrualTypesApi } from './AccrualTypesApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { ItemGroupsApi } from './ItemGroupsApi';
import { VatGroupsApi } from './VatGroupsApi';
import { ItemsApi } from './ItemsApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { OrdersApi } from './OrdersApi';
import { FaAccountDeterminationsApi } from './FaAccountDeterminationsApi';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { AdditionalExpensesApi } from './AdditionalExpensesApi';
import { CustomsGroupsApi } from './CustomsGroupsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { ProjectsApi } from './ProjectsApi';
import { AccountCategoryApi } from './AccountCategoryApi';
import { TransactionCodesApi } from './TransactionCodesApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { CostElementsApi } from './CostElementsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { SalesTaxAuthoritiesApi } from './SalesTaxAuthoritiesApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { DunningTermsApi } from './DunningTermsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { HouseBankAccountsApi } from './HouseBankAccountsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { BankPagesApi } from './BankPagesApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { ExpenseTypesApi } from './ExpenseTypesApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { CreditCardsApi } from './CreditCardsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAccountTypes } from './BoAccountTypes';
import { SpedContabilAccountPurposeCode } from './SpedContabilAccountPurposeCode';
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
export class ChartOfAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChartOfAccounts<DeSerializersT>, DeSerializersT>
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
  ): ChartOfAccountsApi<DeSerializersT> {
    return new ChartOfAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_TYPES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccrualTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vatGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faAccountDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FA_ACCOUNT_DETERMINATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      FaAccountDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customsGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMS_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CustomsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accountCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_CATEGORY: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccountCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_ELEMENT: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CostElementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dunningTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DUNNING_TERMS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DunningTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankPages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_PAGES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BankPagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_TYPES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ExpenseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARDS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      AccrualTypesApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      ItemGroupsApi<DeSerializersT>,
      VatGroupsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      WithholdingTaxCodesApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      FaAccountDeterminationsApi<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      AdditionalExpensesApi<DeSerializersT>,
      CustomsGroupsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      AccountCategoryApi<DeSerializersT>,
      TransactionCodesApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>,
      CostElementsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      SalesTaxAuthoritiesApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      DunningTermsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      PurchaseOrdersApi<DeSerializersT>,
      QuotationsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      HouseBankAccountsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      BankPagesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      ExpenseTypesApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      CreditCardsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[0]),
      ACCRUAL_TYPES: new OneToManyLink('AccrualTypes', this, linkedApis[1]),
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[2]
      ),
      ITEM_GROUPS: new OneToManyLink('ItemGroups', this, linkedApis[3]),
      VAT_GROUPS: new OneToManyLink('VatGroups', this, linkedApis[4]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[5]),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[6]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[7]
      ),
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
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
      ORDERS: new OneToManyLink('Orders', this, linkedApis[12]),
      FA_ACCOUNT_DETERMINATIONS: new OneToManyLink(
        'FAAccountDeterminations',
        this,
        linkedApis[13]
      ),
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
      ADDITIONAL_EXPENSES: new OneToManyLink(
        'AdditionalExpenses',
        this,
        linkedApis[18]
      ),
      CUSTOMS_GROUPS: new OneToManyLink('CustomsGroups', this, linkedApis[19]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[20]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[21]),
      ACCOUNT_CATEGORY: new OneToOneLink(
        'AccountCategory',
        this,
        linkedApis[22]
      ),
      TRANSACTION_CODE_2: new OneToOneLink(
        'TransactionCode2',
        this,
        linkedApis[23]
      ),
      DISTRIBUTION_RULE: new OneToOneLink(
        'DistributionRule',
        this,
        linkedApis[24]
      ),
      COST_ELEMENT: new OneToOneLink('CostElement', this, linkedApis[25]),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[26]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[27]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[28]
      ),
      SALES_TAX_AUTHORITIES: new OneToManyLink(
        'SalesTaxAuthorities',
        this,
        linkedApis[29]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[30]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[31]),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[32]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[33]
      ),
      DUNNING_TERMS: new OneToManyLink('DunningTerms', this, linkedApis[34]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[35]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[36]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[37]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[38]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[39]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[40]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[41]),
      HOUSE_BANK_ACCOUNTS: new OneToManyLink(
        'HouseBankAccounts',
        this,
        linkedApis[42]
      ),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[43]
      ),
      BANK_PAGES: new OneToManyLink('BankPages', this, linkedApis[44]),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[45]
      ),
      EXPENSE_TYPES: new OneToManyLink('ExpenseTypes', this, linkedApis[46]),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[47]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[48]
      ),
      BUSINESS_PLACES: new OneToManyLink(
        'BusinessPlaces',
        this,
        linkedApis[49]
      ),
      CREDIT_CARDS: new OneToManyLink('CreditCards', this, linkedApis[50]),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[51])
    };
    return this;
  }

  entityConstructor = ChartOfAccounts;

  requestBuilder(): ChartOfAccountsRequestBuilder<DeSerializersT> {
    return new ChartOfAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChartOfAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChartOfAccounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ChartOfAccounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChartOfAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CASH_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BUDGET_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACTIVE_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRIMARY_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACCOUNT_LEVEL: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DATA_EXPORT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FATHER_ACCOUNT_KEY: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_CONVERSION: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_LIABLE_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_EXEMPT_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EXTERNAL_RECON_NO: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTERNAL_RECON_NO: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoAccountTypes,
      true,
      true
    >;
    ACCT_CURRENCY: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCE_SYSCURR: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BALANCE_FRGN_CURR: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PROTECTED: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RECONCILED_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LIABLE_FOR_ADVANCES: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FOREIGN_NAME: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_COORDINATED: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LOCK_MANUAL_TRANSACTION: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FORMAT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_CHANGE_VAT_GROUP: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEFAULT_VAT_GROUP: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_TYPE: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LOADING_FACTOR_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_FACTOR_CODE_2: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_FACTOR_CODE_3: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_FACTOR_CODE_4: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_FACTOR_CODE_5: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_LEVEL: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATEV_ACCOUNT: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATEV_AUTO_ACCOUNT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DATEV_FIRST_DATA_ENTRY: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ALLOW_MULTIPLE_LINKING: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROJECT_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_2_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_3_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_4_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_5_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_PURPOSE_CODE: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      SpedContabilAccountPurposeCode,
      true,
      true
    >;
    REFERENTIAL_ACCOUNT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FOR: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_REMARKS: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROZEN_FOR: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FROZEN_FROM: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROZEN_TO: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROZEN_REMARKS: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_MANUAL_POSTING: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CASH_FLOW_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PCN_874_REPORT_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRIMARY_CLOSING_ACCOUNT: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ACCOUNTING_ONLY: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COST_ELEMENT_RELEVANT: EnumField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COST_ELEMENT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_ACCOUNT_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAXONOMY_CODE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_CLASSIFICATION_CATEGORY: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INCOME_CLASSIFICATION_TYPE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXPENSE_CLASSIFICATION_CATEGORY: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXPENSE_CLASSIFICATION_TYPE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_NE_STA: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_G_LIN_T: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_TYP_CB: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_TY_IMP: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_JE_SE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_IP_SE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_OP_SE: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COR_FIN_CLS: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BD_ERST: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BD_DATEV: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BD_IS_AUT: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_TYPES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccrualTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vatGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faAccountDeterminations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FA_ACCOUNT_DETERMINATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      FaAccountDeterminationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customsGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMS_GROUPS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CustomsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accountCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_CATEGORY: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccountCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_ELEMENT: OneToOneLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CostElementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dunningTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DUNNING_TERMS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DunningTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankPages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_PAGES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BankPagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_TYPES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ExpenseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARDS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      CreditCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ChartOfAccounts<DeSerializers>>;
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
         * Static representation of the {@link balance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE: fieldBuilder.buildEdmTypeField('Balance', 'Edm.Double', true),
        /**
         * Static representation of the {@link cashAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ACCOUNT: fieldBuilder.buildEnumField(
          'CashAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link budgetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ACCOUNT: fieldBuilder.buildEnumField(
          'BudgetAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link activeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ACCOUNT: fieldBuilder.buildEnumField(
          'ActiveAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link primaryAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ACCOUNT: fieldBuilder.buildEnumField(
          'PrimaryAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link accountLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_LEVEL: fieldBuilder.buildEdmTypeField(
          'AccountLevel',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link dataExportCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXPORT_CODE: fieldBuilder.buildEdmTypeField(
          'DataExportCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fatherAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'FatherAccountKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_CONVERSION: fieldBuilder.buildEnumField(
          'RateConversion',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link taxLiableAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIABLE_ACCOUNT: fieldBuilder.buildEnumField(
          'TaxLiableAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link taxExemptAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_ACCOUNT: fieldBuilder.buildEnumField(
          'TaxExemptAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link externalReconNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_RECON_NO: fieldBuilder.buildEdmTypeField(
          'ExternalReconNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link internalReconNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_RECON_NO: fieldBuilder.buildEdmTypeField(
          'InternalReconNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          BoAccountTypes,
          true
        ),
        /**
         * Static representation of the {@link acctCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AcctCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balanceSyscurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_SYSCURR: fieldBuilder.buildEdmTypeField(
          'Balance_syscurr',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link balanceFrgnCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_FRGN_CURR: fieldBuilder.buildEdmTypeField(
          'Balance_FrgnCurr',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link protected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROTECTED: fieldBuilder.buildEnumField('Protected', BoYesNoEnum, true),
        /**
         * Static representation of the {@link reconciledAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED_ACCOUNT: fieldBuilder.buildEnumField(
          'ReconciledAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link liableForAdvances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABLE_FOR_ADVANCES: fieldBuilder.buildEnumField(
          'LiableForAdvances',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link foreignName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_NAME: fieldBuilder.buildEdmTypeField(
          'ForeignName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        /**
         * Static representation of the {@link projectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationCoordinated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_COORDINATED: fieldBuilder.buildEnumField(
          'RevaluationCoordinated',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link lockManualTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK_MANUAL_TRANSACTION: fieldBuilder.buildEnumField(
          'LockManualTransaction',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link formatCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_CODE: fieldBuilder.buildEdmTypeField(
          'FormatCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowChangeVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGE_VAT_GROUP: fieldBuilder.buildEnumField(
          'AllowChangeVatGroup',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link defaultVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'DefaultVatGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField('Category', 'Edm.Int32', true),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_TYPE: fieldBuilder.buildEnumField(
          'LoadingType',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link loadingFactorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_FACTOR_CODE: fieldBuilder.buildEdmTypeField(
          'LoadingFactorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingFactorCode2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_FACTOR_CODE_2: fieldBuilder.buildEdmTypeField(
          'LoadingFactorCode2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingFactorCode3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_FACTOR_CODE_3: fieldBuilder.buildEdmTypeField(
          'LoadingFactorCode3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingFactorCode4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_FACTOR_CODE_4: fieldBuilder.buildEdmTypeField(
          'LoadingFactorCode4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingFactorCode5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_FACTOR_CODE_5: fieldBuilder.buildEdmTypeField(
          'LoadingFactorCode5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_LEVEL: fieldBuilder.buildEdmTypeField(
          'PlanningLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link datevAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATEV_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DatevAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link datevAutoAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATEV_AUTO_ACCOUNT: fieldBuilder.buildEnumField(
          'DatevAutoAccount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link datevFirstDataEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATEV_FIRST_DATA_ENTRY: fieldBuilder.buildEnumField(
          'DatevFirstDataEntry',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link allowMultipleLinking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_LINKING: fieldBuilder.buildEnumField(
          'AllowMultipleLinking',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link projectRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RELEVANT: fieldBuilder.buildEnumField(
          'ProjectRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRuleRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_RELEVANT: fieldBuilder.buildEnumField(
          'DistributionRuleRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRule2Relevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_2_RELEVANT: fieldBuilder.buildEnumField(
          'DistributionRule2Relevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRule3Relevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_3_RELEVANT: fieldBuilder.buildEnumField(
          'DistributionRule3Relevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRule4Relevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_4_RELEVANT: fieldBuilder.buildEnumField(
          'DistributionRule4Relevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRule5Relevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_5_RELEVANT: fieldBuilder.buildEnumField(
          'DistributionRule5Relevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link bplName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_NAME: fieldBuilder.buildEdmTypeField('BPLName', 'Edm.String', true),
        /**
         * Static representation of the {@link vatRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REG_NUM: fieldBuilder.buildEdmTypeField(
          'VATRegNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_PURPOSE_CODE: fieldBuilder.buildEnumField(
          'AccountPurposeCode',
          SpedContabilAccountPurposeCode,
          true
        ),
        /**
         * Static representation of the {@link referentialAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENTIAL_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'ReferentialAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR: fieldBuilder.buildEnumField('ValidFor', BoYesNoEnum, true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_REMARKS: fieldBuilder.buildEdmTypeField(
          'ValidRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frozenFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_FOR: fieldBuilder.buildEnumField('FrozenFor', BoYesNoEnum, true),
        /**
         * Static representation of the {@link frozenFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_FROM: fieldBuilder.buildEdmTypeField(
          'FrozenFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link frozenTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_TO: fieldBuilder.buildEdmTypeField(
          'FrozenTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link frozenRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_REMARKS: fieldBuilder.buildEdmTypeField(
          'FrozenRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockManualPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_MANUAL_POSTING: fieldBuilder.buildEnumField(
          'BlockManualPosting',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link cashFlowRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_RELEVANT: fieldBuilder.buildEnumField(
          'CashFlowRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link pcn874ReportRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PCN_874_REPORT_RELEVANT: fieldBuilder.buildEnumField(
          'PCN874ReportRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link primaryClosingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CLOSING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PrimaryClosingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAccountingOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNTING_ONLY: fieldBuilder.buildEnumField(
          'CostAccountingOnly',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link costElementRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_RELEVANT: fieldBuilder.buildEnumField(
          'CostElementRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link costElementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'CostElementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'StandardAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxonomyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXONOMY_CODE: fieldBuilder.buildEdmTypeField(
          'TaxonomyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomeClassificationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_CLASSIFICATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'IncomeClassificationCategory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link incomeClassificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_CLASSIFICATION_TYPE: fieldBuilder.buildEdmTypeField(
          'IncomeClassificationType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link expenseClassificationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CLASSIFICATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ExpenseClassificationCategory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link expenseClassificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CLASSIFICATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ExpenseClassificationType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpNeSta} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_NE_STA: fieldBuilder.buildEdmTypeField(
          'U_BP_NeSta',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpGLinT} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_G_LIN_T: fieldBuilder.buildEdmTypeField(
          'U_BP_GLinT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpTypCb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_TYP_CB: fieldBuilder.buildEdmTypeField(
          'U_BP_TypCb',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpTyImp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_TY_IMP: fieldBuilder.buildEdmTypeField(
          'U_BP_TyImp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpJeSe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_JE_SE: fieldBuilder.buildEdmTypeField(
          'U_BP_JESe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpIpSe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_IP_SE: fieldBuilder.buildEdmTypeField(
          'U_BP_IPSe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpOpSe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_OP_SE: fieldBuilder.buildEdmTypeField(
          'U_BP_OPSe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorFinCls} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_FIN_CLS: fieldBuilder.buildEdmTypeField(
          'U_COR_FIN_Cls',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBdErst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BD_ERST: fieldBuilder.buildEdmTypeField(
          'U_BD_Erst',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBdDatev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BD_DATEV: fieldBuilder.buildEdmTypeField(
          'U_BD_Datev',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBdIsAut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BD_IS_AUT: fieldBuilder.buildEdmTypeField(
          'U_BD_IsAut',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChartOfAccounts)
      };
    }

    return this._schema;
  }
}
