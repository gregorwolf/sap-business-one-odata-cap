/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetManualDepreciation } from './AssetManualDepreciation';
import { AssetManualDepreciationRequestBuilder } from './AssetManualDepreciationRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { DepreciationTypesApi } from './DepreciationTypesApi';
import { DepreciationAreasApi } from './DepreciationAreasApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { AssetDocumentLine } from './AssetDocumentLine';
import { AssetDocumentAreaJournal } from './AssetDocumentAreaJournal';
import { AssetDocumentNewLoc } from './AssetDocumentNewLoc';
import { AssetDocumentStatusEnum } from './AssetDocumentStatusEnum';
import { AssetDocumentTypeEnum } from './AssetDocumentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { AssetOriginalTypeEnum } from './AssetOriginalTypeEnum';
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
export class AssetManualDepreciationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetManualDepreciation<DeSerializersT>, DeSerializersT>
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
  ): AssetManualDepreciationApi<DeSerializersT> {
    return new AssetManualDepreciationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPE: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      DepreciationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationArea2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREA_2: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      DepreciationTypesApi<DeSerializersT>,
      DepreciationAreasApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY_2: new OneToOneLink('Currency2', this, linkedApis[0]),
      DEPRECIATION_TYPE: new OneToOneLink(
        'DepreciationType',
        this,
        linkedApis[1]
      ),
      DEPRECIATION_AREA_2: new OneToOneLink(
        'DepreciationArea2',
        this,
        linkedApis[2]
      ),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = AssetManualDepreciation;

  requestBuilder(): AssetManualDepreciationRequestBuilder<DeSerializersT> {
    return new AssetManualDepreciationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetManualDepreciation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetManualDepreciation<DeSerializersT>,
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
    typeof AssetManualDepreciation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetManualDepreciation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetDocumentStatusEnum,
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_RATE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOCUMENT_TOTAL: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOCUMENT_TOTAL_FC: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOCUMENT_TOTAL_SC: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ASSET_VALUE_DATE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetDocumentTypeEnum,
      true,
      true
    >;
    SUMMERIZE_BY_PROJECTS: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUMMERIZE_BY_DISTRIBUTION_RULES: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANUAL_DEPRECIATION_TYPE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CANCELLATION_DATE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEPRECIATION_AREA: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BPL_ID: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOW_VALUE_ASSET_RETIREMENT: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CANCELLATION_OPTION: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      ClosingOptionEnum,
      true,
      true
    >;
    ORIGINAL_TYPE: EnumField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetOriginalTypeEnum,
      true,
      true
    >;
    BASE_REFERENCE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetDocumentLine,
      true,
      true
    >;
    ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetDocumentAreaJournal,
      true,
      true
    >;
    PTI_CODE: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LETTER: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOL_NUM_FROM: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOL_NUM_TO: OrderableEdmTypeField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ASSET_DOCUMENT_NEW_LOC_COLLECTION: CollectionField<
      AssetManualDepreciation<DeSerializers>,
      DeSerializersT,
      AssetDocumentNewLoc,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPE: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      DepreciationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationArea2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREA_2: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetManualDepreciation<DeSerializers>>;
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          AssetDocumentStatusEnum,
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
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
         * Static representation of the {@link documentTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TOTAL: fieldBuilder.buildEdmTypeField(
          'DocumentTotal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link documentTotalFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TOTAL_FC: fieldBuilder.buildEdmTypeField(
          'DocumentTotalFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link documentTotalSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TOTAL_SC: fieldBuilder.buildEdmTypeField(
          'DocumentTotalSC',
          'Edm.Double',
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
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          AssetDocumentTypeEnum,
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
         * Static representation of the {@link manualDepreciationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_DEPRECIATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ManualDepreciationType',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link cancellationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_DATE: fieldBuilder.buildEdmTypeField(
          'CancellationDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link bplId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_ID: fieldBuilder.buildEdmTypeField('BPLId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.Int32', true),
        /**
         * Static representation of the {@link lowValueAssetRetirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_ASSET_RETIREMENT: fieldBuilder.buildEnumField(
          'LowValueAssetRetirement',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link cancellationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_OPTION: fieldBuilder.buildEnumField(
          'CancellationOption',
          ClosingOptionEnum,
          true
        ),
        /**
         * Static representation of the {@link originalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TYPE: fieldBuilder.buildEnumField(
          'OriginalType',
          AssetOriginalTypeEnum,
          true
        ),
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
         * Static representation of the {@link assetDocumentLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DOCUMENT_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'AssetDocumentLineCollection',
          AssetDocumentLine,
          true
        ),
        /**
         * Static representation of the {@link assetDocumentAreaJournalCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION:
          fieldBuilder.buildCollectionField(
            'AssetDocumentAreaJournalCollection',
            AssetDocumentAreaJournal,
            true
          ),
        /**
         * Static representation of the {@link ptiCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PTI_CODE: fieldBuilder.buildEdmTypeField('PTICode', 'Edm.String', true),
        /**
         * Static representation of the {@link letter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER: fieldBuilder.buildEdmTypeField('Letter', 'Edm.String', true),
        /**
         * Static representation of the {@link folNumFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOL_NUM_FROM: fieldBuilder.buildEdmTypeField(
          'FolNumFrom',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folNumTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOL_NUM_TO: fieldBuilder.buildEdmTypeField(
          'FolNumTo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link assetDocumentNewLocCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_DOCUMENT_NEW_LOC_COLLECTION: fieldBuilder.buildCollectionField(
          'AssetDocumentNewLocCollection',
          AssetDocumentNewLoc,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetManualDepreciation)
      };
    }

    return this._schema;
  }
}
