/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPlaces } from './BusinessPlaces';
import { BusinessPlacesRequestBuilder } from './BusinessPlacesRequestBuilder';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { StockTransfersApi } from './StockTransfersApi';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { AssetTransferApi } from './AssetTransferApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { AssetRetirementApi } from './AssetRetirementApi';
import { AssetRevaluationsApi } from './AssetRevaluationsApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { AssetManualDepreciationApi } from './AssetManualDepreciationApi';
import { AssetClassesApi } from './AssetClassesApi';
import { OrdersApi } from './OrdersApi';
import { AssetCapitalizationApi } from './AssetCapitalizationApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { InventoryTransferRequestsApi } from './InventoryTransferRequestsApi';
import { InventoryCountingsApi } from './InventoryCountingsApi';
import { InventoryOpeningBalancesApi } from './InventoryOpeningBalancesApi';
import { InventoryPostingsApi } from './InventoryPostingsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { StockTransferDraftsApi } from './StockTransferDraftsApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { AssetCapitalizationCreditMemoApi } from './AssetCapitalizationCreditMemoApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { PurchaseOrdersApi } from './PurchaseOrdersApi';
import { QuotationsApi } from './QuotationsApi';
import { ReturnsApi } from './ReturnsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { DepositsApi } from './DepositsApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { WarehousesApi } from './WarehousesApi';
import { BpFiscalRegistryIdApi } from './BpFiscalRegistryIdApi';
import { BrazilNumericIndexersApi } from './BrazilNumericIndexersApi';
import { BrazilStringIndexersApi } from './BrazilStringIndexersApi';
import { CountriesApi } from './CountriesApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { BusinessPlaceIeNumber } from './BusinessPlaceIeNumber';
import { BusinessPlaceTributaryInfo } from './BusinessPlaceTributaryInfo';
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
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessPlacesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPlaces<DeSerializersT>, DeSerializersT>
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
  ): BusinessPlacesApi<DeSerializersT> {
    return new BusinessPlacesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetClasses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASSES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTINGS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryCountingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOpeningBalances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_OPENING_BALANCES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryOpeningBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryPostings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POSTINGS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryPostingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bpFiscalRegistryId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BP_FISCAL_REGISTRY_ID: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BpFiscalRegistryIdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserDefaultGroupsApi<DeSerializersT>,
      StockTransfersApi<DeSerializersT>,
      PurchaseQuotationsApi<DeSerializersT>,
      AssetTransferApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      AssetRetirementApi<DeSerializersT>,
      AssetRevaluationsApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      AssetManualDepreciationApi<DeSerializersT>,
      AssetClassesApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      AssetCapitalizationApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      InventoryTransferRequestsApi<DeSerializersT>,
      InventoryCountingsApi<DeSerializersT>,
      InventoryOpeningBalancesApi<DeSerializersT>,
      InventoryPostingsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      StockTransferDraftsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      AssetCapitalizationCreditMemoApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      PurchaseOrdersApi<DeSerializersT>,
      QuotationsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      DepositsApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      BpFiscalRegistryIdApi<DeSerializersT>,
      BrazilNumericIndexersApi<DeSerializersT>,
      BrazilStringIndexersApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_DEFAULT_GROUPS: new OneToManyLink(
        'UserDefaultGroups',
        this,
        linkedApis[0]
      ),
      STOCK_TRANSFERS: new OneToManyLink('StockTransfers', this, linkedApis[1]),
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[2]
      ),
      ASSET_TRANSFER: new OneToManyLink('AssetTransfer', this, linkedApis[3]),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[4]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[5]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[6]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[7]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[8]
      ),
      ASSET_RETIREMENT: new OneToManyLink(
        'AssetRetirement',
        this,
        linkedApis[9]
      ),
      ASSET_REVALUATIONS: new OneToManyLink(
        'AssetRevaluations',
        this,
        linkedApis[10]
      ),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[11]),
      ASSET_MANUAL_DEPRECIATION: new OneToManyLink(
        'AssetManualDepreciation',
        this,
        linkedApis[12]
      ),
      ASSET_CLASSES: new OneToManyLink('AssetClasses', this, linkedApis[13]),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[14]),
      ASSET_CAPITALIZATION: new OneToManyLink(
        'AssetCapitalization',
        this,
        linkedApis[15]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[16]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[17]),
      INVENTORY_TRANSFER_REQUESTS: new OneToManyLink(
        'InventoryTransferRequests',
        this,
        linkedApis[18]
      ),
      INVENTORY_COUNTINGS: new OneToManyLink(
        'InventoryCountings',
        this,
        linkedApis[19]
      ),
      INVENTORY_OPENING_BALANCES: new OneToManyLink(
        'InventoryOpeningBalances',
        this,
        linkedApis[20]
      ),
      INVENTORY_POSTINGS: new OneToManyLink(
        'InventoryPostings',
        this,
        linkedApis[21]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[22]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[23]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[24]
      ),
      STOCK_TRANSFER_DRAFTS: new OneToManyLink(
        'StockTransferDrafts',
        this,
        linkedApis[25]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[26]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[27]),
      ASSET_CAPITALIZATION_CREDIT_MEMO: new OneToManyLink(
        'AssetCapitalizationCreditMemo',
        this,
        linkedApis[28]
      ),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[29]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[30]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[31]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[32]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[33]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[34]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[35]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[36]),
      GOODS_RETURN_REQUEST: new OneToManyLink(
        'GoodsReturnRequest',
        this,
        linkedApis[37]
      ),
      CORRECTION_PURCHASE_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionPurchaseInvoiceReversal',
        this,
        linkedApis[38]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[39]
      ),
      DEPOSITS: new OneToManyLink('Deposits', this, linkedApis[40]),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[41]
      ),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[42]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[43]),
      BP_FISCAL_REGISTRY_ID: new OneToOneLink(
        'BPFiscalRegistryID',
        this,
        linkedApis[44]
      ),
      BRAZIL_NUMERIC_INDEXER: new OneToOneLink(
        'BrazilNumericIndexer',
        this,
        linkedApis[45]
      ),
      BRAZIL_STRING_INDEXER: new OneToOneLink(
        'BrazilStringIndexer',
        this,
        linkedApis[46]
      ),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[47]),
      CHART_OF_ACCOUNT: new OneToOneLink(
        'ChartOfAccount',
        this,
        linkedApis[48]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[49])
    };
    return this;
  }

  entityConstructor = BusinessPlaces;

  requestBuilder(): BusinessPlacesRequestBuilder<DeSerializersT> {
    return new BusinessPlacesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPlaces<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessPlaces<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BusinessPlaces, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BusinessPlaces, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BPLID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BPL_NAME_FOREIGN: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REP_NAME: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESSFOREIGN: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_BPL: EnumField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_OFFICE_NO: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLED: EnumField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEFAULT_CUSTOMER_ID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VENDOR_ID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_WAREHOUSE_ID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TAX_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_OFFICE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_TAX_ID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_TAX_ID_2: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_TAX_ID_3: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ID_NUMBER: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_COMPANY_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ECONOMIC_ACTIVITY_TYPE_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREDIT_CONTRIBUTION_ORIGIN_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IPI_PERIOD_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COOPERATIVE_ASSOCIATION_TYPE_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROFIT_TAXATION_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COMPANY_QUALIFICATION_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DECLARER_TYPE_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PREFERRED_STATE_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NO: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALIAS_NAME: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMERCIAL_REGISTER: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_INCORPORATION: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SPED_PROFILE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRONMENT_TYPE: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OPTING_4_ICMS: EnumField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYMENT_CLEARING_ACCOUNT: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_LOCATION_NUMBER: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RESOURCE_WAREHOUSE_ID: OrderableEdmTypeField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PLACE_IE_NUMBERS: CollectionField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      BusinessPlaceIeNumber,
      true,
      true
    >;
    BUSINESS_PLACE_TRIBUTARY_INFOS: CollectionField<
      BusinessPlaces<DeSerializers>,
      DeSerializersT,
      BusinessPlaceTributaryInfo,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetClasses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASSES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTINGS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryCountingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOpeningBalances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_OPENING_BALANCES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryOpeningBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryPostings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POSTINGS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InventoryPostingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bpFiscalRegistryId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BP_FISCAL_REGISTRY_ID: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BpFiscalRegistryIdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      BusinessPlaces<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPlaces<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link bplName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_NAME: fieldBuilder.buildEdmTypeField('BPLName', 'Edm.String', true),
        /**
         * Static representation of the {@link bplNameForeign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_NAME_FOREIGN: fieldBuilder.buildEdmTypeField(
          'BPLNameForeign',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link repName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REP_NAME: fieldBuilder.buildEdmTypeField('RepName', 'Edm.String', true),
        /**
         * Static representation of the {@link industry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY: fieldBuilder.buildEdmTypeField(
          'Industry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link business} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS: fieldBuilder.buildEdmTypeField(
          'Business',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link addressforeign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSFOREIGN: fieldBuilder.buildEdmTypeField(
          'Addressforeign',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainBpl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_BPL: fieldBuilder.buildEnumField('MainBPL', BoYesNoEnum, true),
        /**
         * Static representation of the {@link taxOfficeNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OFFICE_NO: fieldBuilder.buildEdmTypeField(
          'TaxOfficeNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED: fieldBuilder.buildEnumField('Disabled', BoYesNoEnum, true),
        /**
         * Static representation of the {@link defaultCustomerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCustomerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVendorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_ID: fieldBuilder.buildEdmTypeField(
          'DefaultVendorID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultWarehouseID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OFFICE: fieldBuilder.buildEdmTypeField(
          'TaxOffice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link federalTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_TAX_ID: fieldBuilder.buildEdmTypeField(
          'FederalTaxID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link federalTaxId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_TAX_ID_2: fieldBuilder.buildEdmTypeField(
          'FederalTaxID2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link federalTaxId3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_TAX_ID_3: fieldBuilder.buildEdmTypeField(
          'FederalTaxID3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'AdditionalIdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link natureOfCompanyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'NatureOfCompanyCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link economicActivityTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECONOMIC_ACTIVITY_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'EconomicActivityTypeCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link creditContributionOriginCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CONTRIBUTION_ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'CreditContributionOriginCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ipiPeriodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IPI_PERIOD_CODE: fieldBuilder.buildEdmTypeField(
          'IPIPeriodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cooperativeAssociationTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COOPERATIVE_ASSOCIATION_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'CooperativeAssociationTypeCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link profitTaxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitTaxationCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link companyQualificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_QUALIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyQualificationCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link declarerTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLARER_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DeclarerTypeCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link preferredStateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_STATE_CODE: fieldBuilder.buildEdmTypeField(
          'PreferredStateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link streetNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NO: fieldBuilder.buildEdmTypeField(
          'StreetNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link block} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK: fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link aliasName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIAS_NAME: fieldBuilder.buildEdmTypeField(
          'AliasName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commercialRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_REGISTER: fieldBuilder.buildEdmTypeField(
          'CommercialRegister',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfIncorporation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_INCORPORATION: fieldBuilder.buildEdmTypeField(
          'DateOfIncorporation',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link spedProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_PROFILE: fieldBuilder.buildEdmTypeField(
          'SPEDProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link environmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'EnvironmentType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link opting4Icms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTING_4_ICMS: fieldBuilder.buildEnumField(
          'Opting4ICMS',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentClearingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CLEARING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentClearingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalLocationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_LOCATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GlobalLocationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultResourceWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RESOURCE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultResourceWarehouseID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPlaceIeNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PLACE_IE_NUMBERS: fieldBuilder.buildCollectionField(
          'BusinessPlaceIENumbers',
          BusinessPlaceIeNumber,
          true
        ),
        /**
         * Static representation of the {@link businessPlaceTributaryInfos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PLACE_TRIBUTARY_INFOS: fieldBuilder.buildCollectionField(
          'BusinessPlaceTributaryInfos',
          BusinessPlaceTributaryInfo,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPlaces)
      };
    }

    return this._schema;
  }
}
