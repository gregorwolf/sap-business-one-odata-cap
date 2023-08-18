/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationAreas } from './DepreciationAreas';
import { DepreciationAreasRequestBuilder } from './DepreciationAreasRequestBuilder';
import { AssetTransferApi } from './AssetTransferApi';
import { AssetRetirementApi } from './AssetRetirementApi';
import { AssetRevaluationsApi } from './AssetRevaluationsApi';
import { AssetManualDepreciationApi } from './AssetManualDepreciationApi';
import { AssetCapitalizationApi } from './AssetCapitalizationApi';
import { AssetCapitalizationCreditMemoApi } from './AssetCapitalizationCreditMemoApi';
import { SalesTaxAuthoritiesTypesApi } from './SalesTaxAuthoritiesTypesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ItemsApi } from './ItemsApi';
import { NotaFiscalUsageApi } from './NotaFiscalUsageApi';
import { PostingOfDepreciationEnum } from './PostingOfDepreciationEnum';
import { RetirementMethodEnum } from './RetirementMethodEnum';
import { AreaTypeEnum } from './AreaTypeEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DepreciationAreasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DepreciationAreas<DeSerializersT>, DeSerializersT>
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
  ): DepreciationAreasApi<DeSerializersT> {
    return new DepreciationAreasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxAuthoritiesType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetTransferApi<DeSerializersT>,
      AssetRetirementApi<DeSerializersT>,
      AssetRevaluationsApi<DeSerializersT>,
      AssetManualDepreciationApi<DeSerializersT>,
      AssetCapitalizationApi<DeSerializersT>,
      AssetCapitalizationCreditMemoApi<DeSerializersT>,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      NotaFiscalUsageApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_TRANSFER: new OneToManyLink('AssetTransfer', this, linkedApis[0]),
      ASSET_RETIREMENT: new OneToManyLink(
        'AssetRetirement',
        this,
        linkedApis[1]
      ),
      ASSET_REVALUATIONS: new OneToManyLink(
        'AssetRevaluations',
        this,
        linkedApis[2]
      ),
      ASSET_MANUAL_DEPRECIATION: new OneToManyLink(
        'AssetManualDepreciation',
        this,
        linkedApis[3]
      ),
      ASSET_CAPITALIZATION: new OneToManyLink(
        'AssetCapitalization',
        this,
        linkedApis[4]
      ),
      ASSET_CAPITALIZATION_CREDIT_MEMO: new OneToManyLink(
        'AssetCapitalizationCreditMemo',
        this,
        linkedApis[5]
      ),
      SALES_TAX_AUTHORITIES_TYPE: new OneToOneLink(
        'SalesTaxAuthoritiesType',
        this,
        linkedApis[6]
      ),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[7]
      ),
      ITEM: new OneToOneLink('Item', this, linkedApis[8]),
      NOTA_FISCAL_USAGE: new OneToOneLink(
        'NotaFiscalUsage',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = DepreciationAreas;

  requestBuilder(): DepreciationAreasRequestBuilder<DeSerializersT> {
    return new DepreciationAreasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DepreciationAreas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DepreciationAreas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DepreciationAreas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationAreas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_OF_DEPRECIATION: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      PostingOfDepreciationEnum,
      true,
      true
    >;
    RETIREMENT_METHOD: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      RetirementMethodEnum,
      true,
      true
    >;
    AREA_TYPE: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      AreaTypeEnum,
      true,
      true
    >;
    DERIVED_AREA: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_BOOKING_AREA: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DIRECT_REVENUE_POSTING: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_CREDIT_CONTROL: EnumField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_TYPE: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BP_FOR_TAX_CORRECTION: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_FOR_TAX_CORRECTION: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_FOR_TAX_CORRECTION: OrderableEdmTypeField<
      DepreciationAreas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRevaluations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_REVALUATIONS: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetRevaluationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxAuthoritiesType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToOneLink<
      DepreciationAreas<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DepreciationAreas<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingOfDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_OF_DEPRECIATION: fieldBuilder.buildEnumField(
          'PostingOfDepreciation',
          PostingOfDepreciationEnum,
          true
        ),
        /**
         * Static representation of the {@link retirementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT_METHOD: fieldBuilder.buildEnumField(
          'RetirementMethod',
          RetirementMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link areaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA_TYPE: fieldBuilder.buildEnumField('AreaType', AreaTypeEnum, true),
        /**
         * Static representation of the {@link derivedArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_AREA: fieldBuilder.buildEdmTypeField(
          'DerivedArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainBookingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_BOOKING_AREA: fieldBuilder.buildEnumField(
          'MainBookingArea',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link directRevenuePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_REVENUE_POSTING: fieldBuilder.buildEnumField(
          'DirectRevenuePosting',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link taxCreditControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_CONTROL: fieldBuilder.buildEnumField(
          'TaxCreditControl',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEdmTypeField('TaxType', 'Edm.Int32', true),
        /**
         * Static representation of the {@link bpForTaxCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_FOR_TAX_CORRECTION: fieldBuilder.buildEdmTypeField(
          'BPForTaxCorrection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemForTaxCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_FOR_TAX_CORRECTION: fieldBuilder.buildEdmTypeField(
          'ItemForTaxCorrection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageForTaxCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_FOR_TAX_CORRECTION: fieldBuilder.buildEdmTypeField(
          'UsageForTaxCorrection',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DepreciationAreas)
      };
    }

    return this._schema;
  }
}
