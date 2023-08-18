/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Currencies } from './Currencies';
import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { PurchaseQuotationsApi } from './PurchaseQuotationsApi';
import { AssetTransferApi } from './AssetTransferApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { AssetRetirementApi } from './AssetRetirementApi';
import { AssetManualDepreciationApi } from './AssetManualDepreciationApi';
import { OrdersApi } from './OrdersApi';
import { AssetCapitalizationApi } from './AssetCapitalizationApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { DraftsApi } from './DraftsApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { BankStatementsApi } from './BankStatementsApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { AssetCapitalizationCreditMemoApi } from './AssetCapitalizationCreditMemoApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
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
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { PurchaseRequestsApi } from './PurchaseRequestsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { CurrenciesDecimalsEnum } from './CurrenciesDecimalsEnum';
import { RoundingSysEnum } from './RoundingSysEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CurrenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Currencies<DeSerializersT>, DeSerializersT>
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
  ): CurrenciesApi<DeSerializersT> {
    return new CurrenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankStatements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_STATEMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BankStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseQuotationsApi<DeSerializersT>,
      AssetTransferApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      WithholdingTaxCodesApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      AssetRetirementApi<DeSerializersT>,
      AssetManualDepreciationApi<DeSerializersT>,
      OrdersApi<DeSerializersT>,
      AssetCapitalizationApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      BankStatementsApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      AssetCapitalizationCreditMemoApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
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
      IncomingPaymentsApi<DeSerializersT>,
      PurchaseRequestsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_QUOTATIONS: new OneToManyLink(
        'PurchaseQuotations',
        this,
        linkedApis[0]
      ),
      ASSET_TRANSFER: new OneToManyLink('AssetTransfer', this, linkedApis[1]),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[2]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
        this,
        linkedApis[3]
      ),
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[4]
      ),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[5]
      ),
      CORRECTION_PURCHASE_INVOICE: new OneToManyLink(
        'CorrectionPurchaseInvoice',
        this,
        linkedApis[6]
      ),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[7]
      ),
      ASSET_RETIREMENT: new OneToManyLink(
        'AssetRetirement',
        this,
        linkedApis[8]
      ),
      ASSET_MANUAL_DEPRECIATION: new OneToManyLink(
        'AssetManualDepreciation',
        this,
        linkedApis[9]
      ),
      ORDERS: new OneToManyLink('Orders', this, linkedApis[10]),
      ASSET_CAPITALIZATION: new OneToManyLink(
        'AssetCapitalization',
        this,
        linkedApis[11]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[12]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[13]),
      CHART_OF_ACCOUNTS: new OneToManyLink(
        'ChartOfAccounts',
        this,
        linkedApis[14]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[15]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[16]),
      BANK_STATEMENTS: new OneToManyLink(
        'BankStatements',
        this,
        linkedApis[17]
      ),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[18]
      ),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[19]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[20]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[21]),
      ASSET_CAPITALIZATION_CREDIT_MEMO: new OneToManyLink(
        'AssetCapitalizationCreditMemo',
        this,
        linkedApis[22]
      ),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[23]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[24]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[25]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[26]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[27]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[28]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[29]
      ),
      QUOTATIONS: new OneToManyLink('Quotations', this, linkedApis[30]),
      RETURNS: new OneToManyLink('Returns', this, linkedApis[31]),
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
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[34]
      ),
      PURCHASE_REQUESTS: new OneToManyLink(
        'PurchaseRequests',
        this,
        linkedApis[35]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[36])
    };
    return this;
  }

  entityConstructor = Currencies;

  requestBuilder(): CurrenciesRequestBuilder<DeSerializersT> {
    return new CurrenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Currencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Currencies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Currencies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Currencies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Currencies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENTS_CODE: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_DESCRIPTION: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HUNDREDTH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGLISH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGLISH_HUNDREDTH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLURAL_INTERNATIONAL_DESCRIPTION: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLURAL_HUNDREDTH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLURAL_ENGLISH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLURAL_ENGLISH_HUNDREDTH_NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMALS: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      CurrenciesDecimalsEnum,
      true,
      true
    >;
    ROUNDING: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      RoundingSysEnum,
      true,
      true
    >;
    ROUNDING_IN_PAYMENT: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MAX_INCOMING_AMT_DIFF: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_OUTGOING_AMT_DIFF: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_INCOMING_AMT_DIFF_PERCENT: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_OUTGOING_AMT_DIFF_PERCENT: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseQuotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_QUOTATIONS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseQuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankStatements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_STATEMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BankStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quotations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUOTATIONS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      QuotationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUESTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Currencies<DeSerializers>>;
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
         * Static representation of the {@link documentsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENTS_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internationalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'InternationalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hundredthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HUNDREDTH_NAME: fieldBuilder.buildEdmTypeField(
          'HundredthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link englishName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGLISH_NAME: fieldBuilder.buildEdmTypeField(
          'EnglishName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link englishHundredthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGLISH_HUNDREDTH_NAME: fieldBuilder.buildEdmTypeField(
          'EnglishHundredthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pluralInternationalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLURAL_INTERNATIONAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PluralInternationalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pluralHundredthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLURAL_HUNDREDTH_NAME: fieldBuilder.buildEdmTypeField(
          'PluralHundredthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pluralEnglishName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLURAL_ENGLISH_NAME: fieldBuilder.buildEdmTypeField(
          'PluralEnglishName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pluralEnglishHundredthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLURAL_ENGLISH_HUNDREDTH_NAME: fieldBuilder.buildEdmTypeField(
          'PluralEnglishHundredthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMALS: fieldBuilder.buildEnumField(
          'Decimals',
          CurrenciesDecimalsEnum,
          true
        ),
        /**
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEnumField(
          'Rounding',
          RoundingSysEnum,
          true
        ),
        /**
         * Static representation of the {@link roundingInPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_IN_PAYMENT: fieldBuilder.buildEnumField(
          'RoundingInPayment',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link maxIncomingAmtDiff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INCOMING_AMT_DIFF: fieldBuilder.buildEdmTypeField(
          'MaxIncomingAmtDiff',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxOutgoingAmtDiff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_OUTGOING_AMT_DIFF: fieldBuilder.buildEdmTypeField(
          'MaxOutgoingAmtDiff',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxIncomingAmtDiffPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INCOMING_AMT_DIFF_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaxIncomingAmtDiffPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxOutgoingAmtDiffPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_OUTGOING_AMT_DIFF_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaxOutgoingAmtDiffPercent',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Currencies)
      };
    }

    return this._schema;
  }
}
