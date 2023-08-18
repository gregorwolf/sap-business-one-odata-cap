/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountings } from './InventoryCountings';
import { InventoryCountingsRequestBuilder } from './InventoryCountingsRequestBuilder';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { Attachments2Api } from './Attachments2Api';
import { TeamCounter } from './TeamCounter';
import { IndividualCounter } from './IndividualCounter';
import { InventoryCountingLine } from './InventoryCountingLine';
import { InventoryCountingDocumentReferences } from './InventoryCountingDocumentReferences';
import { CounterTypeEnum } from './CounterTypeEnum';
import { CountingDocumentStatusEnum } from './CountingDocumentStatusEnum';
import { CountingTypeEnum } from './CountingTypeEnum';
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
export class InventoryCountingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryCountings<DeSerializersT>, DeSerializersT>
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
  ): InventoryCountingsApi<DeSerializersT> {
    return new InventoryCountingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryCountings<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryCountings<DeSerializersT>,
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

  entityConstructor = InventoryCountings;

  requestBuilder(): InventoryCountingsRequestBuilder<DeSerializersT> {
    return new InventoryCountingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryCountings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryCountings<DeSerializersT>,
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
    typeof InventoryCountings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryCountings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_ENTRY: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COUNT_DATE: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNT_TIME: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SINGLE_COUNTER_TYPE: EnumField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      CounterTypeEnum,
      true,
      true
    >;
    SINGLE_COUNTER_ID: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      CountingDocumentStatusEnum,
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_ID: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_OBJECT_CODE_EX: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_PERIOD: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_TYPE: EnumField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      CountingTypeEnum,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    YEAR_END_DATE: OrderableEdmTypeField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TEAM_COUNTERS: CollectionField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      TeamCounter,
      true,
      true
    >;
    INDIVIDUAL_COUNTERS: CollectionField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      IndividualCounter,
      true,
      true
    >;
    INVENTORY_COUNTING_LINES: CollectionField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      InventoryCountingLine,
      true,
      true
    >;
    INVENTORY_COUNTING_DOCUMENT_REFERENCES_COLLECTION: CollectionField<
      InventoryCountings<DeSerializers>,
      DeSerializersT,
      InventoryCountingDocumentReferences,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryCountings<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      InventoryCountings<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryCountings<DeSerializers>>;
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
         * Static representation of the {@link singleCounterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_COUNTER_TYPE: fieldBuilder.buildEnumField(
          'SingleCounterType',
          CounterTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link singleCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'SingleCounterID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          CountingDocumentStatusEnum,
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
         * Static representation of the {@link countingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_TYPE: fieldBuilder.buildEnumField(
          'CountingType',
          CountingTypeEnum,
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
         * Static representation of the {@link teamCounters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEAM_COUNTERS: fieldBuilder.buildCollectionField(
          'TeamCounters',
          TeamCounter,
          true
        ),
        /**
         * Static representation of the {@link individualCounters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIVIDUAL_COUNTERS: fieldBuilder.buildCollectionField(
          'IndividualCounters',
          IndividualCounter,
          true
        ),
        /**
         * Static representation of the {@link inventoryCountingLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_COUNTING_LINES: fieldBuilder.buildCollectionField(
          'InventoryCountingLines',
          InventoryCountingLine,
          true
        ),
        /**
         * Static representation of the {@link inventoryCountingDocumentReferencesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_COUNTING_DOCUMENT_REFERENCES_COLLECTION:
          fieldBuilder.buildCollectionField(
            'InventoryCountingDocumentReferencesCollection',
            InventoryCountingDocumentReferences,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryCountings)
      };
    }

    return this._schema;
  }
}
