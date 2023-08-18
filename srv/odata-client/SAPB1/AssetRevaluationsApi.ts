/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetRevaluations } from './AssetRevaluations';
import { AssetRevaluationsRequestBuilder } from './AssetRevaluationsRequestBuilder';
import { DepreciationAreasApi } from './DepreciationAreasApi';
import { JournalEntriesApi } from './JournalEntriesApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { AssetRevaluationLine } from './AssetRevaluationLine';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetRevaluationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetRevaluations<DeSerializersT>, DeSerializersT>
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
  ): AssetRevaluationsApi<DeSerializersT> {
    return new AssetRevaluationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link depreciationArea2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREA_2: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DepreciationAreasApi<DeSerializersT>,
      JournalEntriesApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEPRECIATION_AREA_2: new OneToOneLink(
        'DepreciationArea2',
        this,
        linkedApis[0]
      ),
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[1]),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = AssetRevaluations;

  requestBuilder(): AssetRevaluationsRequestBuilder<DeSerializersT> {
    return new AssetRevaluationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetRevaluations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetRevaluations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetRevaluations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetRevaluations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ASSET_VALUE_DATE: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REMARKS: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_AREA: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_ID: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BPL_ID: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_PERCENT: OrderableEdmTypeField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    IFRS_POSTING: EnumField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUMMERIZE_BY_PROJECTS: EnumField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUMMERIZE_BY_DISTRIBUTION_RULES: EnumField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ASSET_REVALUATION_LINE_COLLECTION: CollectionField<
      AssetRevaluations<DeSerializers>,
      DeSerializersT,
      AssetRevaluationLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationArea2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREA_2: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetRevaluations<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetRevaluations<DeSerializers>>;
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
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
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
         * Static representation of the {@link assetValueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'AssetValueDate',
          'Edm.DateTimeOffset',
          true
        ),
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
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
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
         * Static representation of the {@link depreciationArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_AREA: fieldBuilder.buildEdmTypeField(
          'DepreciationArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ID: fieldBuilder.buildEdmTypeField('TransId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link handWritten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAND_WRITTEN: fieldBuilder.buildEnumField(
          'HandWritten',
          BoYesNoEnum,
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bplId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_ID: fieldBuilder.buildEdmTypeField('BPLId', 'Edm.Int32', true),
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
         * Static representation of the {@link revaluationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'RevaluationPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link ifrsPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IFRS_POSTING: fieldBuilder.buildEnumField(
          'IfrsPosting',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link summerizeByProjects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMERIZE_BY_PROJECTS: fieldBuilder.buildEnumField(
          'SummerizeByProjects',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link summerizeByDistributionRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMERIZE_BY_DISTRIBUTION_RULES: fieldBuilder.buildEnumField(
          'SummerizeByDistributionRules',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link assetRevaluationLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_REVALUATION_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'AssetRevaluationLineCollection',
          AssetRevaluationLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetRevaluations)
      };
    }

    return this._schema;
  }
}
