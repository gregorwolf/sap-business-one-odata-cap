/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPostings } from './InventoryPostings';
import { InventoryPostingsRequestBuilder } from './InventoryPostingsRequestBuilder';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { Attachments2Api } from './Attachments2Api';
import { InventoryPostingLine } from './InventoryPostingLine';
import { InventoryPostingDocumentReferences } from './InventoryPostingDocumentReferences';
import { InventoryPostingPriceSourceEnum } from './InventoryPostingPriceSourceEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryPostingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryPostings<DeSerializersT>, DeSerializersT>
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
  ): InventoryPostingsApi<DeSerializersT> {
    return new InventoryPostingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryPostings<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryPostings<DeSerializersT>,
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

  entityConstructor = InventoryPostings;

  requestBuilder(): InventoryPostingsRequestBuilder<DeSerializersT> {
    return new InventoryPostingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryPostings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InventoryPostings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InventoryPostings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryPostings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_ENTRY: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNT_DATE: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNT_TIME: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_ID: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRICE_SOURCE: EnumField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      InventoryPostingPriceSourceEnum,
      true,
      true
    >;
    PRICE_LIST: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    JOURNAL_REMARK: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_OBJECT_CODE_EX: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_PERIOD: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    YEAR_END_DATE: OrderableEdmTypeField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    INVENTORY_POSTING_LINES: CollectionField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      InventoryPostingLine,
      true,
      true
    >;
    INVENTORY_POSTING_DOCUMENT_REFERENCES_COLLECTION: CollectionField<
      InventoryPostings<DeSerializers>,
      DeSerializersT,
      InventoryPostingDocumentReferences,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryPostings<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryPostings<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryPostings<DeSerializers>>;
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
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link countDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT_DATE: fieldBuilder.buildEdmTypeField(
          'CountDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link countTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT_TIME: fieldBuilder.buildEdmTypeField(
          'CountTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
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
          InventoryPostingPriceSourceEnum,
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
         * Static representation of the {@link financialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FinancialPeriod',
          'Edm.Int32',
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
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link yearEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_END_DATE: fieldBuilder.buildEdmTypeField(
          'YearEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link inventoryPostingLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_POSTING_LINES: fieldBuilder.buildCollectionField(
          'InventoryPostingLines',
          InventoryPostingLine,
          true
        ),
        /**
         * Static representation of the {@link inventoryPostingDocumentReferencesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_POSTING_DOCUMENT_REFERENCES_COLLECTION:
          fieldBuilder.buildCollectionField(
            'InventoryPostingDocumentReferencesCollection',
            InventoryPostingDocumentReferences,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryPostings)
      };
    }

    return this._schema;
  }
}
