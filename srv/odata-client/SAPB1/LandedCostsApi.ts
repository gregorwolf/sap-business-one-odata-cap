/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCosts } from './LandedCosts';
import { LandedCostsRequestBuilder } from './LandedCostsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ShippingTypesApi } from './ShippingTypesApi';
import { JournalEntriesApi } from './JournalEntriesApi';
import { PurchaseDeliveryNotesApi } from './PurchaseDeliveryNotesApi';
import { LandedCostItemLine } from './LandedCostItemLine';
import { LandedCostCostLine } from './LandedCostCostLine';
import { LandedCostDocStatusEnum } from './LandedCostDocStatusEnum';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LandedCostsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LandedCosts<DeSerializersT>, DeSerializersT>
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
  ): LandedCostsApi<DeSerializersT> {
    return new LandedCostsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      ShippingTypesApi<DeSerializersT>,
      JournalEntriesApi<DeSerializersT>,
      PurchaseDeliveryNotesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      SHIPPING_TYPE: new OneToOneLink('ShippingType', this, linkedApis[1]),
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[2]),
      PURCHASE_DELIVERY_NOTES: new OneToManyLink(
        'PurchaseDeliveryNotes',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = LandedCosts;

  requestBuilder(): LandedCostsRequestBuilder<DeSerializersT> {
    return new LandedCostsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCosts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LandedCosts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LandedCosts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LandedCosts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LandedCosts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LANDED_COST_NUMBER: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VENDOR_CODE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_NAME: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_DOCUMENT: EnumField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      LandedCostDocStatusEnum,
      true,
      true
    >;
    FILE_NUMBER: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CURRENCY: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_RATE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PROJECTED_CUSTOMS: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ACTUAL_CUSTOMS: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ACTUAL_CUSTOMS_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_1: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_2: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BEFORE_TAX: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_FREIGHT_CHARGES: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PROJECTED_CUSTOMS_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_1_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_2_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BEFORE_TAX_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_FREIGHT_CHARGES_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUSTOMS_AFFECTS_INVENTORY: EnumField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AMOUNT_TO_BALANCE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    AMOUNT_TO_BALANCE_FC: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BILLOF_LADING_NUMBER: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_TYPE: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    JOURNAL_REMARKS: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LANDED_COST_ITEM_LINES: CollectionField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      LandedCostItemLine,
      true,
      true
    >;
    LANDED_COST_COST_LINES: CollectionField<
      LandedCosts<DeSerializers>,
      DeSerializersT,
      LandedCostCostLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDeliveryNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DELIVERY_NOTES: OneToManyLink<
      LandedCosts<DeSerializersT>,
      DeSerializersT,
      PurchaseDeliveryNotesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LandedCosts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link landedCostNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANDED_COST_NUMBER: fieldBuilder.buildEdmTypeField(
          'LandedCostNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTimeOffset',
          true
        ),
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
         * Static representation of the {@link vendorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CODE: fieldBuilder.buildEdmTypeField(
          'VendorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link broker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER: fieldBuilder.buildEdmTypeField('Broker', 'Edm.String', true),
        /**
         * Static representation of the {@link brokerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_NAME: fieldBuilder.buildEdmTypeField(
          'BrokerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closedDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DOCUMENT: fieldBuilder.buildEnumField(
          'ClosedDocument',
          LandedCostDocStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link fileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'FileNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
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
         * Static representation of the {@link documentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DocumentCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_RATE: fieldBuilder.buildEdmTypeField(
          'DocumentRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link projectedCustoms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_CUSTOMS: fieldBuilder.buildEdmTypeField(
          'ProjectedCustoms',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link actualCustoms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_CUSTOMS: fieldBuilder.buildEdmTypeField(
          'ActualCustoms',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link actualCustomsFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_CUSTOMS_FC: fieldBuilder.buildEdmTypeField(
          'ActualCustomsFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link tax1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1: fieldBuilder.buildEdmTypeField('Tax1', 'Edm.Double', true),
        /**
         * Static representation of the {@link tax2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_2: fieldBuilder.buildEdmTypeField('Tax2', 'Edm.Double', true),
        /**
         * Static representation of the {@link beforeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEFORE_TAX: fieldBuilder.buildEdmTypeField(
          'BeforeTax',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link total} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL: fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true),
        /**
         * Static representation of the {@link totalFreightCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FREIGHT_CHARGES: fieldBuilder.buildEdmTypeField(
          'TotalFreightCharges',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link projectedCustomsFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_CUSTOMS_FC: fieldBuilder.buildEdmTypeField(
          'ProjectedCustomsFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link tax1Fc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1_FC: fieldBuilder.buildEdmTypeField('Tax1FC', 'Edm.Double', true),
        /**
         * Static representation of the {@link tax2Fc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_2_FC: fieldBuilder.buildEdmTypeField('Tax2FC', 'Edm.Double', true),
        /**
         * Static representation of the {@link beforeTaxFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEFORE_TAX_FC: fieldBuilder.buildEdmTypeField(
          'BeforeTaxFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FC: fieldBuilder.buildEdmTypeField('TotalFC', 'Edm.Double', true),
        /**
         * Static representation of the {@link totalFreightChargesFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FREIGHT_CHARGES_FC: fieldBuilder.buildEdmTypeField(
          'TotalFreightChargesFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link customsAffectsInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_AFFECTS_INVENTORY: fieldBuilder.buildEnumField(
          'CustomsAffectsInventory',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link amountToBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TO_BALANCE: fieldBuilder.buildEdmTypeField(
          'AmountToBalance',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link amountToBalanceFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TO_BALANCE_FC: fieldBuilder.buildEdmTypeField(
          'AmountToBalanceFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link billofLadingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLOF_LADING_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillofLadingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_TYPE: fieldBuilder.buildEdmTypeField(
          'TransportType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link journalRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_REMARKS: fieldBuilder.buildEdmTypeField(
          'JournalRemarks',
          'Edm.String',
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
         * Static representation of the {@link landedCostItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANDED_COST_ITEM_LINES: fieldBuilder.buildCollectionField(
          'LandedCost_ItemLines',
          LandedCostItemLine,
          true
        ),
        /**
         * Static representation of the {@link landedCostCostLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANDED_COST_COST_LINES: fieldBuilder.buildCollectionField(
          'LandedCost_CostLines',
          LandedCostCostLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LandedCosts)
      };
    }

    return this._schema;
  }
}
