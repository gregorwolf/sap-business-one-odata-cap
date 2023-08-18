/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalEntries } from './JournalEntries';
import { JournalEntriesRequestBuilder } from './JournalEntriesRequestBuilder';
import { LandedCostsApi } from './LandedCostsApi';
import { StockTransfersApi } from './StockTransfersApi';
import { ChecksforPaymentApi } from './ChecksforPaymentApi';
import { CorrectionInvoiceReversalApi } from './CorrectionInvoiceReversalApi';
import { CorrectionInvoiceApi } from './CorrectionInvoiceApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { CorrectionPurchaseInvoiceApi } from './CorrectionPurchaseInvoiceApi';
import { TransactionCodesApi } from './TransactionCodesApi';
import { ProjectsApi } from './ProjectsApi';
import { FactoringIndicatorsApi } from './FactoringIndicatorsApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { JournalEntryDocumentTypesApi } from './JournalEntryDocumentTypesApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { Attachments2Api } from './Attachments2Api';
import { InventoryGenEntriesApi } from './InventoryGenEntriesApi';
import { AssetRevaluationsApi } from './AssetRevaluationsApi';
import { InventoryGenExitsApi } from './InventoryGenExitsApi';
import { MaterialRevaluationApi } from './MaterialRevaluationApi';
import { DraftsApi } from './DraftsApi';
import { BillOfExchangeTransactionsApi } from './BillOfExchangeTransactionsApi';
import { ReturnRequestApi } from './ReturnRequestApi';
import { DeliveryNotesApi } from './DeliveryNotesApi';
import { PurchaseInvoicesApi } from './PurchaseInvoicesApi';
import { StockTransferDraftsApi } from './StockTransferDraftsApi';
import { InvoicesApi } from './InvoicesApi';
import { CreditNotesApi } from './CreditNotesApi';
import { PurchaseCreditNotesApi } from './PurchaseCreditNotesApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { DownPaymentsApi } from './DownPaymentsApi';
import { PurchaseDownPaymentsApi } from './PurchaseDownPaymentsApi';
import { PurchaseReturnsApi } from './PurchaseReturnsApi';
import { ReturnsApi } from './ReturnsApi';
import { GoodsReturnRequestApi } from './GoodsReturnRequestApi';
import { CorrectionPurchaseInvoiceReversalApi } from './CorrectionPurchaseInvoiceReversalApi';
import { JournalEntryLine } from './JournalEntryLine';
import { WithholdingTaxData } from './WithholdingTaxData';
import { ElectronicProtocol } from './ElectronicProtocol';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintStatusEnum } from './PrintStatusEnum';
import { TransTypesEnum } from './TransTypesEnum';
import { OperationCodeTypeEnum } from './OperationCodeTypeEnum';
import { ResidenceNumberTypeEnum } from './ResidenceNumberTypeEnum';
import { EcdPostingTypeEnum } from './EcdPostingTypeEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
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
export class JournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalEntries<DeSerializersT>, DeSerializersT>
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
  ): JournalEntriesApi<DeSerializersT> {
    return new JournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link landedCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LANDED_COSTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      LandedCostsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link factoringIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACTORING_INDICATOR: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      FactoringIndicatorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntryDocumentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY_DOCUMENT_TYPE: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      JournalEntryDocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link blanketAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENT: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link materialRevaluation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_REVALUATION: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      MaterialRevaluationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfExchangeTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_EXCHANGE_TRANSACTIONS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      BillOfExchangeTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LandedCostsApi<DeSerializersT>,
      StockTransfersApi<DeSerializersT>,
      ChecksforPaymentApi<DeSerializersT>,
      CorrectionInvoiceReversalApi<DeSerializersT>,
      CorrectionInvoiceApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>,
      CorrectionPurchaseInvoiceApi<DeSerializersT>,
      TransactionCodesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      FactoringIndicatorsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      JournalEntryDocumentTypesApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>,
      InventoryGenEntriesApi<DeSerializersT>,
      AssetRevaluationsApi<DeSerializersT>,
      InventoryGenExitsApi<DeSerializersT>,
      MaterialRevaluationApi<DeSerializersT>,
      DraftsApi<DeSerializersT>,
      BillOfExchangeTransactionsApi<DeSerializersT>,
      ReturnRequestApi<DeSerializersT>,
      DeliveryNotesApi<DeSerializersT>,
      PurchaseInvoicesApi<DeSerializersT>,
      StockTransferDraftsApi<DeSerializersT>,
      InvoicesApi<DeSerializersT>,
      CreditNotesApi<DeSerializersT>,
      PurchaseCreditNotesApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>,
      DownPaymentsApi<DeSerializersT>,
      PurchaseDownPaymentsApi<DeSerializersT>,
      PurchaseReturnsApi<DeSerializersT>,
      ReturnsApi<DeSerializersT>,
      GoodsReturnRequestApi<DeSerializersT>,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LANDED_COSTS: new OneToManyLink('LandedCosts', this, linkedApis[0]),
      STOCK_TRANSFERS: new OneToManyLink('StockTransfers', this, linkedApis[1]),
      CHECKSFOR_PAYMENT: new OneToManyLink(
        'ChecksforPayment',
        this,
        linkedApis[2]
      ),
      CORRECTION_INVOICE_REVERSAL: new OneToManyLink(
        'CorrectionInvoiceReversal',
        this,
        linkedApis[3]
      ),
      CORRECTION_INVOICE: new OneToManyLink(
        'CorrectionInvoice',
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
      TRANSACTION_CODE_2: new OneToOneLink(
        'TransactionCode2',
        this,
        linkedApis[7]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[8]),
      FACTORING_INDICATOR: new OneToOneLink(
        'FactoringIndicator',
        this,
        linkedApis[9]
      ),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[10]
      ),
      JOURNAL_ENTRY_DOCUMENT_TYPE: new OneToOneLink(
        'JournalEntryDocumentType',
        this,
        linkedApis[11]
      ),
      BLANKET_AGREEMENT: new OneToOneLink(
        'BlanketAgreement',
        this,
        linkedApis[12]
      ),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[13]),
      INVENTORY_GEN_ENTRIES: new OneToManyLink(
        'InventoryGenEntries',
        this,
        linkedApis[14]
      ),
      ASSET_REVALUATIONS: new OneToManyLink(
        'AssetRevaluations',
        this,
        linkedApis[15]
      ),
      INVENTORY_GEN_EXITS: new OneToManyLink(
        'InventoryGenExits',
        this,
        linkedApis[16]
      ),
      MATERIAL_REVALUATION: new OneToManyLink(
        'MaterialRevaluation',
        this,
        linkedApis[17]
      ),
      DRAFTS: new OneToManyLink('Drafts', this, linkedApis[18]),
      BILL_OF_EXCHANGE_TRANSACTIONS: new OneToManyLink(
        'BillOfExchangeTransactions',
        this,
        linkedApis[19]
      ),
      RETURN_REQUEST: new OneToManyLink('ReturnRequest', this, linkedApis[20]),
      DELIVERY_NOTES: new OneToManyLink('DeliveryNotes', this, linkedApis[21]),
      PURCHASE_INVOICES: new OneToManyLink(
        'PurchaseInvoices',
        this,
        linkedApis[22]
      ),
      STOCK_TRANSFER_DRAFTS: new OneToManyLink(
        'StockTransferDrafts',
        this,
        linkedApis[23]
      ),
      INVOICES: new OneToManyLink('Invoices', this, linkedApis[24]),
      CREDIT_NOTES: new OneToManyLink('CreditNotes', this, linkedApis[25]),
      PURCHASE_CREDIT_NOTES: new OneToManyLink(
        'PurchaseCreditNotes',
        this,
        linkedApis[26]
      ),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[27]
      ),
      DOWN_PAYMENTS: new OneToManyLink('DownPayments', this, linkedApis[28]),
      PURCHASE_DOWN_PAYMENTS: new OneToManyLink(
        'PurchaseDownPayments',
        this,
        linkedApis[29]
      ),
      PURCHASE_RETURNS: new OneToManyLink(
        'PurchaseReturns',
        this,
        linkedApis[30]
      ),
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
      )
    };
    return this;
  }

  entityConstructor = JournalEntries;

  requestBuilder(): JournalEntriesRequestBuilder<DeSerializersT> {
    return new JournalEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalEntries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalEntries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalEntries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JournalEntries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REFERENCE_DATE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CODE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    JDT_NUM: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDICATOR: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_AUTO_STORNO: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STORNO_DATE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VAT_DATE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STAMP_TAX: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    AUTO_VAT: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_NUMBER: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_PREFIX_STRING: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_EU: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REPORT_347: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRINTED: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      PrintStatusEnum,
      true,
      true
    >;
    LOCATION_CODE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORIGINAL_JOURNAL: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      TransTypesEnum,
      true,
      true
    >;
    ORIGINAL: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BASE_REFERENCE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_DUNNING_LETTER: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTOMATIC_WT: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WT_SUM: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_SUM_SC: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_SUM_FC: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SIGNATURE_INPUT_MESSAGE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_DIGEST: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATION_NUMBER: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIVATE_KEY_VERSION: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CORISPTIVI: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REFERENCE_3: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_TAX: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BLANKET_AGREEMENT_NUMBER: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OPERATION_CODE: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      OperationCodeTypeEnum,
      true,
      true
    >;
    RESIDENCE_NUMBER_TYPE: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      ResidenceNumberTypeEnum,
      true,
      true
    >;
    ECD_POSTING_TYPE: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      EcdPostingTypeEnum,
      true,
      true
    >;
    EXPOSED_TRANS_NUMBER: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POINT_OF_ISSUE_CODE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LETTER: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      FolioLetterEnum,
      true,
      true
    >;
    FOLIO_NUMBER_FROM: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_NUMBER_TO: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_COST_CENTER_TRANSFER: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REPORTING_SECTION_CONTROL_STATEMENT_VAT: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIG: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUP: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADJUST_TRANSACTION: EnumField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BA_TCODE: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BA_REF: OrderableEdmTypeField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_ENTRY_LINES: CollectionField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      JournalEntryLine,
      true,
      true
    >;
    WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      WithholdingTaxData,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      JournalEntries<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link landedCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LANDED_COSTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      LandedCostsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE_REVERSAL: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceReversalApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_INVOICE: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link factoringIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACTORING_INDICATOR: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      FactoringIndicatorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntryDocumentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY_DOCUMENT_TYPE: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      JournalEntryDocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link blanketAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENT: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_ENTRIES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryGenEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryGenExits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_GEN_EXITS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryGenExitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link materialRevaluation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_REVALUATION: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      MaterialRevaluationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link drafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DRAFTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfExchangeTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_EXCHANGE_TRANSACTIONS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      BillOfExchangeTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_REQUEST: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DeliveryNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseInvoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_INVOICES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseInvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      InvoicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseCreditNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_CREDIT_NOTES: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseCreditNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link downPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOWN_PAYMENTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      DownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDownPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DOWN_PAYMENTS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseDownPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseReturns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_RETURNS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      PurchaseReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link returns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURNS: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      ReturnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link goodsReturnRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOODS_RETURN_REQUEST: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      GoodsReturnRequestApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link correctionPurchaseInvoiceReversal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<
      JournalEntries<DeSerializersT>,
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JournalEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link referenceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATE: fieldBuilder.buildEdmTypeField(
          'ReferenceDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEdmTypeField(
          'Reference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2: fieldBuilder.buildEdmTypeField(
          'Reference2',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link projectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link jdtNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JDT_NUM: fieldBuilder.buildEdmTypeField('JdtNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link indicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDICATOR: fieldBuilder.buildEdmTypeField(
          'Indicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useAutoStorno} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_AUTO_STORNO: fieldBuilder.buildEnumField(
          'UseAutoStorno',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link stornoDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_DATE: fieldBuilder.buildEdmTypeField(
          'StornoDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link vatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VatDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link stampTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAMP_TAX: fieldBuilder.buildEnumField('StampTax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link autoVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_VAT: fieldBuilder.buildEnumField('AutoVAT', BoYesNoEnum, true),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', true),
        /**
         * Static representation of the {@link folioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioPrefixString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_PREFIX_STRING: fieldBuilder.buildEdmTypeField(
          'FolioPrefixString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportEu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_EU: fieldBuilder.buildEnumField('ReportEU', BoYesNoEnum, true),
        /**
         * Static representation of the {@link report347} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_347: fieldBuilder.buildEnumField('Report347', BoYesNoEnum, true),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', PrintStatusEnum, true),
        /**
         * Static representation of the {@link locationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'LocationCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link originalJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_JOURNAL: fieldBuilder.buildEnumField(
          'OriginalJournal',
          TransTypesEnum,
          true
        ),
        /**
         * Static representation of the {@link original} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL: fieldBuilder.buildEdmTypeField('Original', 'Edm.Int32', true),
        /**
         * Static representation of the {@link baseReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'BaseReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockDunningLetter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_DUNNING_LETTER: fieldBuilder.buildEnumField(
          'BlockDunningLetter',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link automaticWt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_WT: fieldBuilder.buildEnumField(
          'AutomaticWT',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wtSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_SUM: fieldBuilder.buildEdmTypeField('WTSum', 'Edm.Double', true),
        /**
         * Static representation of the {@link wtSumSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_SUM_SC: fieldBuilder.buildEdmTypeField(
          'WTSumSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtSumFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_SUM_FC: fieldBuilder.buildEdmTypeField(
          'WTSumFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link signatureInputMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_INPUT_MESSAGE: fieldBuilder.buildEdmTypeField(
          'SignatureInputMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureDigest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_DIGEST: fieldBuilder.buildEdmTypeField(
          'SignatureDigest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CertificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link privateKeyVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_KEY_VERSION: fieldBuilder.buildEdmTypeField(
          'PrivateKeyVersion',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link corisptivi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORISPTIVI: fieldBuilder.buildEnumField(
          'Corisptivi',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reference3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_3: fieldBuilder.buildEdmTypeField(
          'Reference3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX: fieldBuilder.buildEnumField(
          'DeferredTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link blanketAgreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLANKET_AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BlanketAgreementNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link operationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_CODE: fieldBuilder.buildEnumField(
          'OperationCode',
          OperationCodeTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link residenceNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCE_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'ResidenceNumberType',
          ResidenceNumberTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link ecdPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECD_POSTING_TYPE: fieldBuilder.buildEnumField(
          'ECDPostingType',
          EcdPostingTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link exposedTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPOSED_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExposedTransNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link pointOfIssueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_OF_ISSUE_CODE: fieldBuilder.buildEdmTypeField(
          'PointOfIssueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link letter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER: fieldBuilder.buildEnumField('Letter', FolioLetterEnum, true),
        /**
         * Static representation of the {@link folioNumberFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_FROM: fieldBuilder.buildEdmTypeField(
          'FolioNumberFrom',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioNumberTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_TO: fieldBuilder.buildEdmTypeField(
          'FolioNumberTo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isCostCenterTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COST_CENTER_TRANSFER: fieldBuilder.buildEnumField(
          'IsCostCenterTransfer',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reportingSectionControlStatementVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_SECTION_CONTROL_STATEMENT_VAT: fieldBuilder.buildEdmTypeField(
          'ReportingSectionControlStatementVAT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excludeFromTaxReportControlStatementVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT:
          fieldBuilder.buildEnumField(
            'ExcludeFromTaxReportControlStatementVAT',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link sapPassport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_PASSPORT: fieldBuilder.buildEdmTypeField(
          'SAPPassport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cig} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIG: fieldBuilder.buildEdmTypeField('Cig', 'Edm.Int32', true),
        /**
         * Static representation of the {@link cup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUP: fieldBuilder.buildEdmTypeField('Cup', 'Edm.Int32', true),
        /**
         * Static representation of the {@link adjustTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUST_TRANSACTION: fieldBuilder.buildEnumField(
          'AdjustTransaction',
          BoYesNoEnum,
          true
        ),
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
         * Static representation of the {@link uBaTcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_TCODE: fieldBuilder.buildEdmTypeField(
          'U_BA_TCODE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBaRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_REF: fieldBuilder.buildEdmTypeField(
          'U_BA_REF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalEntryLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ENTRY_LINES: fieldBuilder.buildCollectionField(
          'JournalEntryLines',
          JournalEntryLine,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxDataCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_DATA_COLLECTION: fieldBuilder.buildCollectionField(
          'WithholdingTaxDataCollection',
          WithholdingTaxData,
          true
        ),
        /**
         * Static representation of the {@link electronicProtocols} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PROTOCOLS: fieldBuilder.buildCollectionField(
          'ElectronicProtocols',
          ElectronicProtocol,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalEntries)
      };
    }

    return this._schema;
  }
}
