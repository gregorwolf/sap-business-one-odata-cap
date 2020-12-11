/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationTypesRequestBuilder } from './DepreciationTypesRequestBuilder';
import { Moment } from 'moment';
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
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DepreciationTypes" of service "SAPB1".
 */
export class DepreciationTypes extends EntityV4 implements DepreciationTypesType {
  /**
   * Technical entity name for DepreciationTypes.
   */
  static _entityName = 'DepreciationTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Depreciation Method.
   * @nullable
   */
  depreciationMethod?: DepreciationMethodEnum;
  /**
   * Minimum Depreciated Value.
   * @nullable
   */
  minimumDepreciatedValue?: number;
  /**
   * Round Year End Book Value.
   * @nullable
   */
  roundYearEndBookValue?: BoYesNoEnum;
  /**
   * Include Salvage In Depreciation.
   * @nullable
   */
  includeSalvageInDepreciation?: BoYesNoEnum;
  /**
   * Salvage Percentage.
   * @nullable
   */
  salvagePercentage?: number;
  /**
   * Acquisition Period Control.
   * @nullable
   */
  acquisitionPeriodControl?: AcquisitionPeriodControlEnum;
  /**
   * Subsequent Acquisition Period Control.
   * @nullable
   */
  subsequentAcquisitionPeriodControl?: SubsequentAcquisitionPeriodControlEnum;
  /**
   * Retirement Period Control.
   * @nullable
   */
  retirementPeriodControl?: RetirementPeriodControlEnum;
  /**
   * Acquisition Pro Rata Type.
   * @nullable
   */
  acquisitionProRataType?: AcquisitionProRataTypeEnum;
  /**
   * Subsequent Acquisition Pro Rata Type.
   * @nullable
   */
  subsequentAcquisitionProRataType?: SubsequentAcquisitionProRataTypeEnum;
  /**
   * Retirement Pro Rata Type.
   * @nullable
   */
  retirementProRataType?: RetirementProRataTypeEnum;
  /**
   * Percentage Of Depreciation Reversed In Retirement Year.
   * @nullable
   */
  percentageOfDepreciationReversedInRetirementYear?: number;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Straight Line Calculation Method.
   * @nullable
   */
  straightLineCalculationMethod?: StraightLineCalculationMethodEnum;
  /**
   * Straight Line Percentage.
   * @nullable
   */
  straightLinePercentage?: number;
  /**
   * Straight Line Period Control Depreciation Periods.
   * @nullable
   */
  straightLinePeriodControlDepreciationPeriods?: StraightLinePeriodControlDepreciationPeriodsEnum;
  /**
   * Straight Line Period Control Factor.
   * @nullable
   */
  straightLinePeriodControlFactor?: number;
  /**
   * Declining Percentage.
   * @nullable
   */
  decliningPercentage?: number;
  /**
   * Declining Factor.
   * @nullable
   */
  decliningFactor?: number;
  /**
   * Declining Change To.
   * @nullable
   */
  decliningChangeTo?: string;
  /**
   * Special Depreciation Calculation Method.
   * @nullable
   */
  specialDepreciationCalculationMethod?: SpecialDepreciationCalculationMethodEnum;
  /**
   * Special Depreciation Concession Period Years.
   * @nullable
   */
  specialDepreciationConcessionPeriodYears?: number;
  /**
   * Special Depreciation Maximum Percentage.
   * @nullable
   */
  specialDepreciationMaximumPercentage?: number;
  /**
   * Special Depreciation Normal Depreciation.
   * @nullable
   */
  specialDepreciationNormalDepreciation?: string;
  /**
   * Special Depreciation Alternative Depreciation.
   * @nullable
   */
  specialDepreciationAlternativeDepreciation?: string;
  /**
   * Depreciation Type Pool.
   * @nullable
   */
  depreciationTypePool?: string;
  /**
   * Manual Depreciation Reduce Depreciation Base.
   * @nullable
   */
  manualDepreciationReduceDepreciationBase?: BoYesNoEnum;
  /**
   * Special Depreciation Maximum Amount.
   * @nullable
   */
  specialDepreciationMaximumAmount?: number;
  /**
   * Special Depreciation Maximum Flag.
   * @nullable
   */
  specialDepreciationMaximumFlag?: SpecialDepreciationMaximumFlagEnum;
  /**
   * Calculation Base.
   * @nullable
   */
  calculationBase?: CalculationBaseEnum;
  /**
   * Depreciation End At Last Full Year.
   * @nullable
   */
  depreciationEndAtLastFullYear?: BoYesNoEnum;
  /**
   * Include Previous Depreciation In Capitalization Period.
   * @nullable
   */
  includePreviousDepreciationInCapitalizationPeriod?: BoYesNoEnum;
  /**
   * Delta Coefficient.
   * @nullable
   */
  deltaCoefficient?: number;
  /**
   * Maximum Depreciable Value.
   * @nullable
   */
  maximumDepreciableValue?: number;
  /**
   * Factor Only Relevant To First Fiscal Year.
   * @nullable
   */
  factorOnlyRelevantToFirstFiscalYear?: BoYesNoEnum;
  /**
   * Transfer Source Period Control.
   * @nullable
   */
  transferSourcePeriodControl?: TransferSourcePeriodControlEnum;
  /**
   * Transfer Target Period Control.
   * @nullable
   */
  transferTargetPeriodControl?: TransferTargetPeriodControlEnum;
  /**
   * Transfer Source Pro Rata Type.
   * @nullable
   */
  transferSourceProRataType?: TransferSourceProRataTypeEnum;
  /**
   * Transfer Target Pro Rata Type.
   * @nullable
   */
  transferTargetProRataType?: TransferTargetProRataTypeEnum;
  /**
   * Depreciation Level Collection.
   * @nullable
   */
  depreciationLevelCollection?: DepreciationLevel[];
  /**
   * One-to-many navigation property to the [[AssetTransfer]] entity.
   */
  assetTransfer!: AssetTransfer[];
  /**
   * One-to-many navigation property to the [[AssetRetirement]] entity.
   */
  assetRetirement!: AssetRetirement[];
  /**
   * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo[];
  /**
   * One-to-one navigation property to the [[DepreciationTypePools]] entity.
   */
  depreciationTypePool2!: DepreciationTypePools;
  /**
   * One-to-many navigation property to the [[AssetCapitalization]] entity.
   */
  assetCapitalization!: AssetCapitalization[];
  /**
   * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
   */
  assetManualDepreciation!: AssetManualDepreciation[];

  /**
   * Returns an entity builder to construct instances of `DepreciationTypes`.
   * @returns A builder that constructs instances of entity type `DepreciationTypes`.
   */
  static builder(): EntityBuilderType<DepreciationTypes, DepreciationTypesType> {
    return EntityV4.entityBuilder(DepreciationTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DepreciationTypes` entity type.
   * @returns A `DepreciationTypes` request builder.
   */
  static requestBuilder(): DepreciationTypesRequestBuilder {
    return new DepreciationTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DepreciationTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<DepreciationTypes> {
    return EntityV4.customFieldSelector(fieldName, DepreciationTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { DepreciationTypePools, DepreciationTypePoolsType } from './DepreciationTypePools';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';

export interface DepreciationTypesType {
  code?: string | null;
  description?: string | null;
  depreciationMethod?: DepreciationMethodEnum | null;
  minimumDepreciatedValue?: number | null;
  roundYearEndBookValue?: BoYesNoEnum | null;
  includeSalvageInDepreciation?: BoYesNoEnum | null;
  salvagePercentage?: number | null;
  acquisitionPeriodControl?: AcquisitionPeriodControlEnum | null;
  subsequentAcquisitionPeriodControl?: SubsequentAcquisitionPeriodControlEnum | null;
  retirementPeriodControl?: RetirementPeriodControlEnum | null;
  acquisitionProRataType?: AcquisitionProRataTypeEnum | null;
  subsequentAcquisitionProRataType?: SubsequentAcquisitionProRataTypeEnum | null;
  retirementProRataType?: RetirementProRataTypeEnum | null;
  percentageOfDepreciationReversedInRetirementYear?: number | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  straightLineCalculationMethod?: StraightLineCalculationMethodEnum | null;
  straightLinePercentage?: number | null;
  straightLinePeriodControlDepreciationPeriods?: StraightLinePeriodControlDepreciationPeriodsEnum | null;
  straightLinePeriodControlFactor?: number | null;
  decliningPercentage?: number | null;
  decliningFactor?: number | null;
  decliningChangeTo?: string | null;
  specialDepreciationCalculationMethod?: SpecialDepreciationCalculationMethodEnum | null;
  specialDepreciationConcessionPeriodYears?: number | null;
  specialDepreciationMaximumPercentage?: number | null;
  specialDepreciationNormalDepreciation?: string | null;
  specialDepreciationAlternativeDepreciation?: string | null;
  depreciationTypePool?: string | null;
  manualDepreciationReduceDepreciationBase?: BoYesNoEnum | null;
  specialDepreciationMaximumAmount?: number | null;
  specialDepreciationMaximumFlag?: SpecialDepreciationMaximumFlagEnum | null;
  calculationBase?: CalculationBaseEnum | null;
  depreciationEndAtLastFullYear?: BoYesNoEnum | null;
  includePreviousDepreciationInCapitalizationPeriod?: BoYesNoEnum | null;
  deltaCoefficient?: number | null;
  maximumDepreciableValue?: number | null;
  factorOnlyRelevantToFirstFiscalYear?: BoYesNoEnum | null;
  transferSourcePeriodControl?: TransferSourcePeriodControlEnum | null;
  transferTargetPeriodControl?: TransferTargetPeriodControlEnum | null;
  transferSourceProRataType?: TransferSourceProRataTypeEnum | null;
  transferTargetProRataType?: TransferTargetProRataTypeEnum | null;
  depreciationLevelCollection?: DepreciationLevel[] | null;
  assetTransfer: AssetTransferType[];
  assetRetirement: AssetRetirementType[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
  depreciationTypePool2: DepreciationTypePoolsType;
  assetCapitalization: AssetCapitalizationType[];
  assetManualDepreciation: AssetManualDepreciationType[];
}

export namespace DepreciationTypes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<DepreciationTypes> = new StringField('Code', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DepreciationTypes> = new StringField('Description', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[depreciationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_METHOD: EnumField<DepreciationTypes> = new EnumField('DepreciationMethod', DepreciationTypes);
  /**
   * Static representation of the [[minimumDepreciatedValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_DEPRECIATED_VALUE: NumberField<DepreciationTypes> = new NumberField('MinimumDepreciatedValue', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[roundYearEndBookValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUND_YEAR_END_BOOK_VALUE: EnumField<DepreciationTypes> = new EnumField('RoundYearEndBookValue', DepreciationTypes);
  /**
   * Static representation of the [[includeSalvageInDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_SALVAGE_IN_DEPRECIATION: EnumField<DepreciationTypes> = new EnumField('IncludeSalvageInDepreciation', DepreciationTypes);
  /**
   * Static representation of the [[salvagePercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALVAGE_PERCENTAGE: NumberField<DepreciationTypes> = new NumberField('SalvagePercentage', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[acquisitionPeriodControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACQUISITION_PERIOD_CONTROL: EnumField<DepreciationTypes> = new EnumField('AcquisitionPeriodControl', DepreciationTypes);
  /**
   * Static representation of the [[subsequentAcquisitionPeriodControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSEQUENT_ACQUISITION_PERIOD_CONTROL: EnumField<DepreciationTypes> = new EnumField('SubsequentAcquisitionPeriodControl', DepreciationTypes);
  /**
   * Static representation of the [[retirementPeriodControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIREMENT_PERIOD_CONTROL: EnumField<DepreciationTypes> = new EnumField('RetirementPeriodControl', DepreciationTypes);
  /**
   * Static representation of the [[acquisitionProRataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACQUISITION_PRO_RATA_TYPE: EnumField<DepreciationTypes> = new EnumField('AcquisitionProRataType', DepreciationTypes);
  /**
   * Static representation of the [[subsequentAcquisitionProRataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE: EnumField<DepreciationTypes> = new EnumField('SubsequentAcquisitionProRataType', DepreciationTypes);
  /**
   * Static representation of the [[retirementProRataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIREMENT_PRO_RATA_TYPE: EnumField<DepreciationTypes> = new EnumField('RetirementProRataType', DepreciationTypes);
  /**
   * Static representation of the [[percentageOfDepreciationReversedInRetirementYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR: NumberField<DepreciationTypes> = new NumberField('PercentageOfDepreciationReversedInRetirementYear', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<DepreciationTypes> = new DateField('ValidFrom', DepreciationTypes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<DepreciationTypes> = new DateField('ValidTo', DepreciationTypes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[straightLineCalculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STRAIGHT_LINE_CALCULATION_METHOD: EnumField<DepreciationTypes> = new EnumField('StraightLineCalculationMethod', DepreciationTypes);
  /**
   * Static representation of the [[straightLinePercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STRAIGHT_LINE_PERCENTAGE: NumberField<DepreciationTypes> = new NumberField('StraightLinePercentage', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[straightLinePeriodControlDepreciationPeriods]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS: EnumField<DepreciationTypes> = new EnumField('StraightLinePeriodControlDepreciationPeriods', DepreciationTypes);
  /**
   * Static representation of the [[straightLinePeriodControlFactor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STRAIGHT_LINE_PERIOD_CONTROL_FACTOR: NumberField<DepreciationTypes> = new NumberField('StraightLinePeriodControlFactor', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[decliningPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECLINING_PERCENTAGE: NumberField<DepreciationTypes> = new NumberField('DecliningPercentage', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[decliningFactor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECLINING_FACTOR: NumberField<DepreciationTypes> = new NumberField('DecliningFactor', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[decliningChangeTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECLINING_CHANGE_TO: StringField<DepreciationTypes> = new StringField('DecliningChangeTo', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[specialDepreciationCalculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_CALCULATION_METHOD: EnumField<DepreciationTypes> = new EnumField('SpecialDepreciationCalculationMethod', DepreciationTypes);
  /**
   * Static representation of the [[specialDepreciationConcessionPeriodYears]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS: NumberField<DepreciationTypes> = new NumberField('SpecialDepreciationConcessionPeriodYears', DepreciationTypes, 'Edm.Int32');
  /**
   * Static representation of the [[specialDepreciationMaximumPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE: NumberField<DepreciationTypes> = new NumberField('SpecialDepreciationMaximumPercentage', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[specialDepreciationNormalDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION: StringField<DepreciationTypes> = new StringField('SpecialDepreciationNormalDepreciation', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[specialDepreciationAlternativeDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION: StringField<DepreciationTypes> = new StringField('SpecialDepreciationAlternativeDepreciation', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[depreciationTypePool]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE_POOL: StringField<DepreciationTypes> = new StringField('DepreciationTypePool', DepreciationTypes, 'Edm.String');
  /**
   * Static representation of the [[manualDepreciationReduceDepreciationBase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE: EnumField<DepreciationTypes> = new EnumField('ManualDepreciationReduceDepreciationBase', DepreciationTypes);
  /**
   * Static representation of the [[specialDepreciationMaximumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT: NumberField<DepreciationTypes> = new NumberField('SpecialDepreciationMaximumAmount', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[specialDepreciationMaximumFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_DEPRECIATION_MAXIMUM_FLAG: EnumField<DepreciationTypes> = new EnumField('SpecialDepreciationMaximumFlag', DepreciationTypes);
  /**
   * Static representation of the [[calculationBase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_BASE: EnumField<DepreciationTypes> = new EnumField('CalculationBase', DepreciationTypes);
  /**
   * Static representation of the [[depreciationEndAtLastFullYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_END_AT_LAST_FULL_YEAR: EnumField<DepreciationTypes> = new EnumField('DepreciationEndAtLastFullYear', DepreciationTypes);
  /**
   * Static representation of the [[includePreviousDepreciationInCapitalizationPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD: EnumField<DepreciationTypes> = new EnumField('IncludePreviousDepreciationInCapitalizationPeriod', DepreciationTypes);
  /**
   * Static representation of the [[deltaCoefficient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELTA_COEFFICIENT: NumberField<DepreciationTypes> = new NumberField('DeltaCoefficient', DepreciationTypes, 'Edm.Int32');
  /**
   * Static representation of the [[maximumDepreciableValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_DEPRECIABLE_VALUE: NumberField<DepreciationTypes> = new NumberField('MaximumDepreciableValue', DepreciationTypes, 'Edm.Double');
  /**
   * Static representation of the [[factorOnlyRelevantToFirstFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR: EnumField<DepreciationTypes> = new EnumField('FactorOnlyRelevantToFirstFiscalYear', DepreciationTypes);
  /**
   * Static representation of the [[transferSourcePeriodControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_SOURCE_PERIOD_CONTROL: EnumField<DepreciationTypes> = new EnumField('TransferSourcePeriodControl', DepreciationTypes);
  /**
   * Static representation of the [[transferTargetPeriodControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_TARGET_PERIOD_CONTROL: EnumField<DepreciationTypes> = new EnumField('TransferTargetPeriodControl', DepreciationTypes);
  /**
   * Static representation of the [[transferSourceProRataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_SOURCE_PRO_RATA_TYPE: EnumField<DepreciationTypes> = new EnumField('TransferSourceProRataType', DepreciationTypes);
  /**
   * Static representation of the [[transferTargetProRataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_TARGET_PRO_RATA_TYPE: EnumField<DepreciationTypes> = new EnumField('TransferTargetProRataType', DepreciationTypes);
  /**
   * Static representation of the [[depreciationLevelCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_LEVEL_COLLECTION: CollectionField<DepreciationTypes, DepreciationLevel> = new CollectionField('DepreciationLevelCollection', DepreciationTypes, DepreciationLevel);
  /**
   * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TRANSFER: OneToManyLink<DepreciationTypes, AssetTransfer> = new OneToManyLink('AssetTransfer', DepreciationTypes, AssetTransfer);
  /**
   * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_RETIREMENT: OneToManyLink<DepreciationTypes, AssetRetirement> = new OneToManyLink('AssetRetirement', DepreciationTypes, AssetRetirement);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<DepreciationTypes, AssetCapitalizationCreditMemo> = new OneToManyLink('AssetCapitalizationCreditMemo', DepreciationTypes, AssetCapitalizationCreditMemo);
  /**
   * Static representation of the one-to-one navigation property [[depreciationTypePool2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE_POOL_2: OneToOneLink<DepreciationTypes, DepreciationTypePools> = new OneToOneLink('DepreciationTypePool2', DepreciationTypes, DepreciationTypePools);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION: OneToManyLink<DepreciationTypes, AssetCapitalization> = new OneToManyLink('AssetCapitalization', DepreciationTypes, AssetCapitalization);
  /**
   * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_MANUAL_DEPRECIATION: OneToManyLink<DepreciationTypes, AssetManualDepreciation> = new OneToManyLink('AssetManualDepreciation', DepreciationTypes, AssetManualDepreciation);
  /**
   * All fields of the DepreciationTypes entity.
   */
  export const _allFields: Array<StringField<DepreciationTypes> | EnumField<DepreciationTypes> | NumberField<DepreciationTypes> | DateField<DepreciationTypes> | CollectionField<DepreciationTypes, DepreciationLevel> | OneToManyLink<DepreciationTypes, AssetTransfer> | OneToManyLink<DepreciationTypes, AssetRetirement> | OneToManyLink<DepreciationTypes, AssetCapitalizationCreditMemo> | OneToOneLink<DepreciationTypes, DepreciationTypePools> | OneToManyLink<DepreciationTypes, AssetCapitalization> | OneToManyLink<DepreciationTypes, AssetManualDepreciation>> = [
    DepreciationTypes.CODE,
    DepreciationTypes.DESCRIPTION,
    DepreciationTypes.DEPRECIATION_METHOD,
    DepreciationTypes.MINIMUM_DEPRECIATED_VALUE,
    DepreciationTypes.ROUND_YEAR_END_BOOK_VALUE,
    DepreciationTypes.INCLUDE_SALVAGE_IN_DEPRECIATION,
    DepreciationTypes.SALVAGE_PERCENTAGE,
    DepreciationTypes.ACQUISITION_PERIOD_CONTROL,
    DepreciationTypes.SUBSEQUENT_ACQUISITION_PERIOD_CONTROL,
    DepreciationTypes.RETIREMENT_PERIOD_CONTROL,
    DepreciationTypes.ACQUISITION_PRO_RATA_TYPE,
    DepreciationTypes.SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE,
    DepreciationTypes.RETIREMENT_PRO_RATA_TYPE,
    DepreciationTypes.PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR,
    DepreciationTypes.VALID_FROM,
    DepreciationTypes.VALID_TO,
    DepreciationTypes.STRAIGHT_LINE_CALCULATION_METHOD,
    DepreciationTypes.STRAIGHT_LINE_PERCENTAGE,
    DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS,
    DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_FACTOR,
    DepreciationTypes.DECLINING_PERCENTAGE,
    DepreciationTypes.DECLINING_FACTOR,
    DepreciationTypes.DECLINING_CHANGE_TO,
    DepreciationTypes.SPECIAL_DEPRECIATION_CALCULATION_METHOD,
    DepreciationTypes.SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS,
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE,
    DepreciationTypes.SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION,
    DepreciationTypes.SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION,
    DepreciationTypes.DEPRECIATION_TYPE_POOL,
    DepreciationTypes.MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE,
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT,
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_FLAG,
    DepreciationTypes.CALCULATION_BASE,
    DepreciationTypes.DEPRECIATION_END_AT_LAST_FULL_YEAR,
    DepreciationTypes.INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD,
    DepreciationTypes.DELTA_COEFFICIENT,
    DepreciationTypes.MAXIMUM_DEPRECIABLE_VALUE,
    DepreciationTypes.FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR,
    DepreciationTypes.TRANSFER_SOURCE_PERIOD_CONTROL,
    DepreciationTypes.TRANSFER_TARGET_PERIOD_CONTROL,
    DepreciationTypes.TRANSFER_SOURCE_PRO_RATA_TYPE,
    DepreciationTypes.TRANSFER_TARGET_PRO_RATA_TYPE,
    DepreciationTypes.DEPRECIATION_LEVEL_COLLECTION,
    DepreciationTypes.ASSET_TRANSFER,
    DepreciationTypes.ASSET_RETIREMENT,
    DepreciationTypes.ASSET_CAPITALIZATION_CREDIT_MEMO,
    DepreciationTypes.DEPRECIATION_TYPE_POOL_2,
    DepreciationTypes.ASSET_CAPITALIZATION,
    DepreciationTypes.ASSET_MANUAL_DEPRECIATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DepreciationTypes> = new AllFields('*', DepreciationTypes);
  /**
   * All key fields of the DepreciationTypes entity.
   */
  export const _keyFields: Array<Field<DepreciationTypes>> = [DepreciationTypes.CODE];
  /**
   * Mapping of all key field names to the respective static field property DepreciationTypes.
   */
  export const _keys: { [keys: string]: Field<DepreciationTypes> } = DepreciationTypes._keyFields.reduce((acc: { [keys: string]: Field<DepreciationTypes> }, field: Field<DepreciationTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
