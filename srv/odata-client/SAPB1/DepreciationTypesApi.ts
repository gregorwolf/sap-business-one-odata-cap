/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationTypes } from './DepreciationTypes';
import { DepreciationTypesRequestBuilder } from './DepreciationTypesRequestBuilder';
import { AssetTransferApi } from './AssetTransferApi';
import { AssetRetirementApi } from './AssetRetirementApi';
import { AssetManualDepreciationApi } from './AssetManualDepreciationApi';
import { AssetCapitalizationApi } from './AssetCapitalizationApi';
import { DepreciationTypePoolsApi } from './DepreciationTypePoolsApi';
import { AssetCapitalizationCreditMemoApi } from './AssetCapitalizationCreditMemoApi';
import { DepreciationLevel } from './DepreciationLevel';
import { DepreciationMethodEnum } from './DepreciationMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AcquisitionPeriodControlEnum } from './AcquisitionPeriodControlEnum';
import { SubsequentAcquisitionPeriodControlEnum } from './SubsequentAcquisitionPeriodControlEnum';
import { RetirementPeriodControlEnum } from './RetirementPeriodControlEnum';
import { AcquisitionProRataTypeEnum } from './AcquisitionProRataTypeEnum';
import { SubsequentAcquisitionProRataTypeEnum } from './SubsequentAcquisitionProRataTypeEnum';
import { RetirementProRataTypeEnum } from './RetirementProRataTypeEnum';
import { StraightLineCalculationMethodEnum } from './StraightLineCalculationMethodEnum';
import { StraightLinePeriodControlDepreciationPeriodsEnum } from './StraightLinePeriodControlDepreciationPeriodsEnum';
import { SpecialDepreciationCalculationMethodEnum } from './SpecialDepreciationCalculationMethodEnum';
import { SpecialDepreciationMaximumFlagEnum } from './SpecialDepreciationMaximumFlagEnum';
import { CalculationBaseEnum } from './CalculationBaseEnum';
import { TransferSourcePeriodControlEnum } from './TransferSourcePeriodControlEnum';
import { TransferTargetPeriodControlEnum } from './TransferTargetPeriodControlEnum';
import { TransferSourceProRataTypeEnum } from './TransferSourceProRataTypeEnum';
import { TransferTargetProRataTypeEnum } from './TransferTargetProRataTypeEnum';
import { DepreciationRoundingMethodEnum } from './DepreciationRoundingMethodEnum';
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
export class DepreciationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DepreciationTypes<DeSerializersT>, DeSerializersT>
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
  ): DepreciationTypesApi<DeSerializersT> {
    return new DepreciationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationTypePool2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPE_POOL_2: OneToOneLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      DepreciationTypePoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetTransferApi<DeSerializersT>,
      AssetRetirementApi<DeSerializersT>,
      AssetManualDepreciationApi<DeSerializersT>,
      AssetCapitalizationApi<DeSerializersT>,
      DepreciationTypePoolsApi<DeSerializersT>,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_TRANSFER: new OneToManyLink('AssetTransfer', this, linkedApis[0]),
      ASSET_RETIREMENT: new OneToManyLink(
        'AssetRetirement',
        this,
        linkedApis[1]
      ),
      ASSET_MANUAL_DEPRECIATION: new OneToManyLink(
        'AssetManualDepreciation',
        this,
        linkedApis[2]
      ),
      ASSET_CAPITALIZATION: new OneToManyLink(
        'AssetCapitalization',
        this,
        linkedApis[3]
      ),
      DEPRECIATION_TYPE_POOL_2: new OneToOneLink(
        'DepreciationTypePool2',
        this,
        linkedApis[4]
      ),
      ASSET_CAPITALIZATION_CREDIT_MEMO: new OneToManyLink(
        'AssetCapitalizationCreditMemo',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = DepreciationTypes;

  requestBuilder(): DepreciationTypesRequestBuilder<DeSerializersT> {
    return new DepreciationTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DepreciationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DepreciationTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DepreciationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_METHOD: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      DepreciationMethodEnum,
      true,
      true
    >;
    MINIMUM_DEPRECIATED_VALUE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ROUND_YEAR_END_BOOK_VALUE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_SALVAGE_IN_DEPRECIATION: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SALVAGE_PERCENTAGE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ACQUISITION_PERIOD_CONTROL: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      AcquisitionPeriodControlEnum,
      true,
      true
    >;
    SUBSEQUENT_ACQUISITION_PERIOD_CONTROL: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      SubsequentAcquisitionPeriodControlEnum,
      true,
      true
    >;
    RETIREMENT_PERIOD_CONTROL: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      RetirementPeriodControlEnum,
      true,
      true
    >;
    ACQUISITION_PRO_RATA_TYPE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      AcquisitionProRataTypeEnum,
      true,
      true
    >;
    SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      SubsequentAcquisitionProRataTypeEnum,
      true,
      true
    >;
    RETIREMENT_PRO_RATA_TYPE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      RetirementProRataTypeEnum,
      true,
      true
    >;
    PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STRAIGHT_LINE_CALCULATION_METHOD: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      StraightLineCalculationMethodEnum,
      true,
      true
    >;
    STRAIGHT_LINE_PERCENTAGE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      StraightLinePeriodControlDepreciationPeriodsEnum,
      true,
      true
    >;
    STRAIGHT_LINE_PERIOD_CONTROL_FACTOR: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECLINING_PERCENTAGE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECLINING_FACTOR: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECLINING_CHANGE_TO: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_CALCULATION_METHOD: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      SpecialDepreciationCalculationMethodEnum,
      true,
      true
    >;
    SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPRECIATION_TYPE_POOL: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_MAXIMUM_FLAG: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      SpecialDepreciationMaximumFlagEnum,
      true,
      true
    >;
    CALCULATION_BASE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      CalculationBaseEnum,
      true,
      true
    >;
    DEPRECIATION_END_AT_LAST_FULL_YEAR: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DELTA_COEFFICIENT: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MAXIMUM_DEPRECIABLE_VALUE: OrderableEdmTypeField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TRANSFER_SOURCE_PERIOD_CONTROL: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      TransferSourcePeriodControlEnum,
      true,
      true
    >;
    TRANSFER_TARGET_PERIOD_CONTROL: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      TransferTargetPeriodControlEnum,
      true,
      true
    >;
    TRANSFER_SOURCE_PRO_RATA_TYPE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      TransferSourceProRataTypeEnum,
      true,
      true
    >;
    TRANSFER_TARGET_PRO_RATA_TYPE: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      TransferTargetProRataTypeEnum,
      true,
      true
    >;
    ROUNDING_METHOD: EnumField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      DepreciationRoundingMethodEnum,
      true,
      true
    >;
    DEPRECIATION_LEVEL_COLLECTION: CollectionField<
      DepreciationTypes<DeSerializers>,
      DeSerializersT,
      DepreciationLevel,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTransfer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TRANSFER: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetTransferApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetRetirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_RETIREMENT: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetRetirementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetManualDepreciation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MANUAL_DEPRECIATION: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetManualDepreciationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link depreciationTypePool2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPE_POOL_2: OneToOneLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      DepreciationTypePoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetCapitalizationCreditMemo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<
      DepreciationTypes<DeSerializersT>,
      DeSerializersT,
      AssetCapitalizationCreditMemoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DepreciationTypes<DeSerializers>>;
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
         * Static representation of the {@link depreciationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_METHOD: fieldBuilder.buildEnumField(
          'DepreciationMethod',
          DepreciationMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link minimumDepreciatedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DEPRECIATED_VALUE: fieldBuilder.buildEdmTypeField(
          'MinimumDepreciatedValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link roundYearEndBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_YEAR_END_BOOK_VALUE: fieldBuilder.buildEnumField(
          'RoundYearEndBookValue',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeSalvageInDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_SALVAGE_IN_DEPRECIATION: fieldBuilder.buildEnumField(
          'IncludeSalvageInDepreciation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link salvagePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALVAGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SalvagePercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link acquisitionPeriodControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PERIOD_CONTROL: fieldBuilder.buildEnumField(
          'AcquisitionPeriodControl',
          AcquisitionPeriodControlEnum,
          true
        ),
        /**
         * Static representation of the {@link subsequentAcquisitionPeriodControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_ACQUISITION_PERIOD_CONTROL: fieldBuilder.buildEnumField(
          'SubsequentAcquisitionPeriodControl',
          SubsequentAcquisitionPeriodControlEnum,
          true
        ),
        /**
         * Static representation of the {@link retirementPeriodControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT_PERIOD_CONTROL: fieldBuilder.buildEnumField(
          'RetirementPeriodControl',
          RetirementPeriodControlEnum,
          true
        ),
        /**
         * Static representation of the {@link acquisitionProRataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_PRO_RATA_TYPE: fieldBuilder.buildEnumField(
          'AcquisitionProRataType',
          AcquisitionProRataTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link subsequentAcquisitionProRataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE: fieldBuilder.buildEnumField(
          'SubsequentAcquisitionProRataType',
          SubsequentAcquisitionProRataTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link retirementProRataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT_PRO_RATA_TYPE: fieldBuilder.buildEnumField(
          'RetirementProRataType',
          RetirementProRataTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link percentageOfDepreciationReversedInRetirementYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR:
          fieldBuilder.buildEdmTypeField(
            'PercentageOfDepreciationReversedInRetirementYear',
            'Edm.Double',
            true
          ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link straightLineCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'StraightLineCalculationMethod',
          StraightLineCalculationMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link straightLinePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'StraightLinePercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link straightLinePeriodControlDepreciationPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS:
          fieldBuilder.buildEnumField(
            'StraightLinePeriodControlDepreciationPeriods',
            StraightLinePeriodControlDepreciationPeriodsEnum,
            true
          ),
        /**
         * Static representation of the {@link straightLinePeriodControlFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_PERIOD_CONTROL_FACTOR: fieldBuilder.buildEdmTypeField(
          'StraightLinePeriodControlFactor',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link decliningPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLINING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DecliningPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link decliningFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLINING_FACTOR: fieldBuilder.buildEdmTypeField(
          'DecliningFactor',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link decliningChangeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLINING_CHANGE_TO: fieldBuilder.buildEdmTypeField(
          'DecliningChangeTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'SpecialDepreciationCalculationMethod',
          SpecialDepreciationCalculationMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationConcessionPeriodYears} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS:
          fieldBuilder.buildEdmTypeField(
            'SpecialDepreciationConcessionPeriodYears',
            'Edm.Int32',
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationMaximumPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationMaximumPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationNormalDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION:
          fieldBuilder.buildEdmTypeField(
            'SpecialDepreciationNormalDepreciation',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationAlternativeDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION:
          fieldBuilder.buildEdmTypeField(
            'SpecialDepreciationAlternativeDepreciation',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link depreciationTypePool} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_TYPE_POOL: fieldBuilder.buildEdmTypeField(
          'DepreciationTypePool',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualDepreciationReduceDepreciationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE:
          fieldBuilder.buildEnumField(
            'ManualDepreciationReduceDepreciationBase',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationMaximumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationMaximumAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationMaximumFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_MAXIMUM_FLAG: fieldBuilder.buildEnumField(
          'SpecialDepreciationMaximumFlag',
          SpecialDepreciationMaximumFlagEnum,
          true
        ),
        /**
         * Static representation of the {@link calculationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASE: fieldBuilder.buildEnumField(
          'CalculationBase',
          CalculationBaseEnum,
          true
        ),
        /**
         * Static representation of the {@link depreciationEndAtLastFullYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_END_AT_LAST_FULL_YEAR: fieldBuilder.buildEnumField(
          'DepreciationEndAtLastFullYear',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includePreviousDepreciationInCapitalizationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD:
          fieldBuilder.buildEnumField(
            'IncludePreviousDepreciationInCapitalizationPeriod',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link deltaCoefficient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELTA_COEFFICIENT: fieldBuilder.buildEdmTypeField(
          'DeltaCoefficient',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link maximumDepreciableValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DEPRECIABLE_VALUE: fieldBuilder.buildEdmTypeField(
          'MaximumDepreciableValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link factorOnlyRelevantToFirstFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR: fieldBuilder.buildEnumField(
          'FactorOnlyRelevantToFirstFiscalYear',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link transferSourcePeriodControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_SOURCE_PERIOD_CONTROL: fieldBuilder.buildEnumField(
          'TransferSourcePeriodControl',
          TransferSourcePeriodControlEnum,
          true
        ),
        /**
         * Static representation of the {@link transferTargetPeriodControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_TARGET_PERIOD_CONTROL: fieldBuilder.buildEnumField(
          'TransferTargetPeriodControl',
          TransferTargetPeriodControlEnum,
          true
        ),
        /**
         * Static representation of the {@link transferSourceProRataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_SOURCE_PRO_RATA_TYPE: fieldBuilder.buildEnumField(
          'TransferSourceProRataType',
          TransferSourceProRataTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link transferTargetProRataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_TARGET_PRO_RATA_TYPE: fieldBuilder.buildEnumField(
          'TransferTargetProRataType',
          TransferTargetProRataTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'RoundingMethod',
          DepreciationRoundingMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link depreciationLevelCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_LEVEL_COLLECTION: fieldBuilder.buildCollectionField(
          'DepreciationLevelCollection',
          DepreciationLevel,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DepreciationTypes)
      };
    }

    return this._schema;
  }
}
