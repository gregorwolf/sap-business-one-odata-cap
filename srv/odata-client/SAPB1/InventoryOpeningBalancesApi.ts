/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOpeningBalances } from './InventoryOpeningBalances';
import { InventoryOpeningBalancesRequestBuilder } from './InventoryOpeningBalancesRequestBuilder';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { Attachments2Api } from './Attachments2Api';
import { InventoryOpeningBalanceLine } from './InventoryOpeningBalanceLine';
import { InventoryOpeningBalancePriceSourceEnum } from './InventoryOpeningBalancePriceSourceEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryOpeningBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryOpeningBalances<DeSerializersT>, DeSerializersT>
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
  ): InventoryOpeningBalancesApi<DeSerializersT> {
    return new InventoryOpeningBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPlacesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[0]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = InventoryOpeningBalances;

  requestBuilder(): InventoryOpeningBalancesRequestBuilder<DeSerializersT> {
    return new InventoryOpeningBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryOpeningBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryOpeningBalances<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InventoryOpeningBalances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryOpeningBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_ENTRY: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_ID: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRICE_SOURCE: EnumField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      InventoryOpeningBalancePriceSourceEnum,
      true,
      true
    >;
    PRICE_LIST: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    JOURNAL_REMARK: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_OBJECT_CODE_EX: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_PERIOD: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVENTORY_OPENING_BALANCE_LINES: CollectionField<
      InventoryOpeningBalances<DeSerializers>,
      DeSerializersT,
      InventoryOpeningBalanceLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryOpeningBalances<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link documentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocumentEntry',
          'Edm.Int32',
          false
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
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
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link branchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_ID: fieldBuilder.buildEdmTypeField(
          'BranchID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link priceSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SOURCE: fieldBuilder.buildEnumField(
          'PriceSource',
          InventoryOpeningBalancePriceSourceEnum,
          true
        ),
        /**
         * Static representation of the {@link priceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST: fieldBuilder.buildEdmTypeField(
          'PriceList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link journalRemark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_REMARK: fieldBuilder.buildEdmTypeField(
          'JournalRemark',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docObjectCodeEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_OBJECT_CODE_EX: fieldBuilder.buildEdmTypeField(
          'DocObjectCodeEx',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INDICATOR: fieldBuilder.buildEdmTypeField(
          'PeriodIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FinancialPeriod',
          'Edm.Int32',
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
         * Static representation of the {@link inventoryOpeningBalanceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OPENING_BALANCE_LINES: fieldBuilder.buildCollectionField(
          'InventoryOpeningBalanceLines',
          InventoryOpeningBalanceLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryOpeningBalances)
      };
    }

    return this._schema;
  }
}
