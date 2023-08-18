/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { DepreciationLevel } from './DepreciationLevel';
import type { DepreciationTypesApi } from './DepreciationTypesApi';
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
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import {
  AssetManualDepreciation,
  AssetManualDepreciationType
} from './AssetManualDepreciation';
import {
  AssetCapitalization,
  AssetCapitalizationType
} from './AssetCapitalization';
import {
  DepreciationTypePools,
  DepreciationTypePoolsType
} from './DepreciationTypePools';
import {
  AssetCapitalizationCreditMemo,
  AssetCapitalizationCreditMemoType
} from './AssetCapitalizationCreditMemo';

/**
 * This class represents the entity "DepreciationTypes" of service "SAPB1".
 */
export class DepreciationTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepreciationTypesType<T>
{
  /**
   * Technical entity name for DepreciationTypes.
   */
  static _entityName = 'DepreciationTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationTypes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Method.
   * @nullable
   */
  depreciationMethod?: DepreciationMethodEnum | null;
  /**
   * Minimum Depreciated Value.
   * @nullable
   */
  minimumDepreciatedValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Round Year End Book Value.
   * @nullable
   */
  roundYearEndBookValue?: BoYesNoEnum | null;
  /**
   * Include Salvage In Depreciation.
   * @nullable
   */
  includeSalvageInDepreciation?: BoYesNoEnum | null;
  /**
   * Salvage Percentage.
   * @nullable
   */
  salvagePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Acquisition Period Control.
   * @nullable
   */
  acquisitionPeriodControl?: AcquisitionPeriodControlEnum | null;
  /**
   * Subsequent Acquisition Period Control.
   * @nullable
   */
  subsequentAcquisitionPeriodControl?: SubsequentAcquisitionPeriodControlEnum | null;
  /**
   * Retirement Period Control.
   * @nullable
   */
  retirementPeriodControl?: RetirementPeriodControlEnum | null;
  /**
   * Acquisition Pro Rata Type.
   * @nullable
   */
  acquisitionProRataType?: AcquisitionProRataTypeEnum | null;
  /**
   * Subsequent Acquisition Pro Rata Type.
   * @nullable
   */
  subsequentAcquisitionProRataType?: SubsequentAcquisitionProRataTypeEnum | null;
  /**
   * Retirement Pro Rata Type.
   * @nullable
   */
  retirementProRataType?: RetirementProRataTypeEnum | null;
  /**
   * Percentage Of Depreciation Reversed In Retirement Year.
   * @nullable
   */
  percentageOfDepreciationReversedInRetirementYear?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Straight Line Calculation Method.
   * @nullable
   */
  straightLineCalculationMethod?: StraightLineCalculationMethodEnum | null;
  /**
   * Straight Line Percentage.
   * @nullable
   */
  straightLinePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Straight Line Period Control Depreciation Periods.
   * @nullable
   */
  straightLinePeriodControlDepreciationPeriods?: StraightLinePeriodControlDepreciationPeriodsEnum | null;
  /**
   * Straight Line Period Control Factor.
   * @nullable
   */
  straightLinePeriodControlFactor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Declining Percentage.
   * @nullable
   */
  decliningPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Declining Factor.
   * @nullable
   */
  decliningFactor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Declining Change To.
   * @nullable
   */
  decliningChangeTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Depreciation Calculation Method.
   * @nullable
   */
  specialDepreciationCalculationMethod?: SpecialDepreciationCalculationMethodEnum | null;
  /**
   * Special Depreciation Concession Period Years.
   * @nullable
   */
  specialDepreciationConcessionPeriodYears?: DeserializedType<
    T,
    'Edm.Int32'
  > | null;
  /**
   * Special Depreciation Maximum Percentage.
   * @nullable
   */
  specialDepreciationMaximumPercentage?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  /**
   * Special Depreciation Normal Depreciation.
   * @nullable
   */
  specialDepreciationNormalDepreciation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Special Depreciation Alternative Depreciation.
   * @nullable
   */
  specialDepreciationAlternativeDepreciation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Depreciation Type Pool.
   * @nullable
   */
  depreciationTypePool?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Depreciation Reduce Depreciation Base.
   * @nullable
   */
  manualDepreciationReduceDepreciationBase?: BoYesNoEnum | null;
  /**
   * Special Depreciation Maximum Amount.
   * @nullable
   */
  specialDepreciationMaximumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Special Depreciation Maximum Flag.
   * @nullable
   */
  specialDepreciationMaximumFlag?: SpecialDepreciationMaximumFlagEnum | null;
  /**
   * Calculation Base.
   * @nullable
   */
  calculationBase?: CalculationBaseEnum | null;
  /**
   * Depreciation End At Last Full Year.
   * @nullable
   */
  depreciationEndAtLastFullYear?: BoYesNoEnum | null;
  /**
   * Include Previous Depreciation In Capitalization Period.
   * @nullable
   */
  includePreviousDepreciationInCapitalizationPeriod?: BoYesNoEnum | null;
  /**
   * Delta Coefficient.
   * @nullable
   */
  deltaCoefficient?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Maximum Depreciable Value.
   * @nullable
   */
  maximumDepreciableValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Factor Only Relevant To First Fiscal Year.
   * @nullable
   */
  factorOnlyRelevantToFirstFiscalYear?: BoYesNoEnum | null;
  /**
   * Transfer Source Period Control.
   * @nullable
   */
  transferSourcePeriodControl?: TransferSourcePeriodControlEnum | null;
  /**
   * Transfer Target Period Control.
   * @nullable
   */
  transferTargetPeriodControl?: TransferTargetPeriodControlEnum | null;
  /**
   * Transfer Source Pro Rata Type.
   * @nullable
   */
  transferSourceProRataType?: TransferSourceProRataTypeEnum | null;
  /**
   * Transfer Target Pro Rata Type.
   * @nullable
   */
  transferTargetProRataType?: TransferTargetProRataTypeEnum | null;
  /**
   * Rounding Method.
   * @nullable
   */
  roundingMethod?: DepreciationRoundingMethodEnum | null;
  /**
   * Depreciation Level Collection.
   * @nullable
   */
  depreciationLevelCollection?: DepreciationLevel<T>[] | null;
  /**
   * One-to-many navigation property to the {@link AssetTransfer} entity.
   */
  assetTransfer!: AssetTransfer<T>[];
  /**
   * One-to-many navigation property to the {@link AssetRetirement} entity.
   */
  assetRetirement!: AssetRetirement<T>[];
  /**
   * One-to-many navigation property to the {@link AssetManualDepreciation} entity.
   */
  assetManualDepreciation!: AssetManualDepreciation<T>[];
  /**
   * One-to-many navigation property to the {@link AssetCapitalization} entity.
   */
  assetCapitalization!: AssetCapitalization<T>[];
  /**
   * One-to-one navigation property to the {@link DepreciationTypePools} entity.
   */
  depreciationTypePool2?: DepreciationTypePools<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetCapitalizationCreditMemo} entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo<T>[];

  constructor(readonly _entityApi: DepreciationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  depreciationMethod?: DepreciationMethodEnum | null;
  minimumDepreciatedValue?: DeserializedType<T, 'Edm.Double'> | null;
  roundYearEndBookValue?: BoYesNoEnum | null;
  includeSalvageInDepreciation?: BoYesNoEnum | null;
  salvagePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  acquisitionPeriodControl?: AcquisitionPeriodControlEnum | null;
  subsequentAcquisitionPeriodControl?: SubsequentAcquisitionPeriodControlEnum | null;
  retirementPeriodControl?: RetirementPeriodControlEnum | null;
  acquisitionProRataType?: AcquisitionProRataTypeEnum | null;
  subsequentAcquisitionProRataType?: SubsequentAcquisitionProRataTypeEnum | null;
  retirementProRataType?: RetirementProRataTypeEnum | null;
  percentageOfDepreciationReversedInRetirementYear?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  straightLineCalculationMethod?: StraightLineCalculationMethodEnum | null;
  straightLinePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  straightLinePeriodControlDepreciationPeriods?: StraightLinePeriodControlDepreciationPeriodsEnum | null;
  straightLinePeriodControlFactor?: DeserializedType<T, 'Edm.Double'> | null;
  decliningPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  decliningFactor?: DeserializedType<T, 'Edm.Double'> | null;
  decliningChangeTo?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationCalculationMethod?: SpecialDepreciationCalculationMethodEnum | null;
  specialDepreciationConcessionPeriodYears?: DeserializedType<
    T,
    'Edm.Int32'
  > | null;
  specialDepreciationMaximumPercentage?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  specialDepreciationNormalDepreciation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  specialDepreciationAlternativeDepreciation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  depreciationTypePool?: DeserializedType<T, 'Edm.String'> | null;
  manualDepreciationReduceDepreciationBase?: BoYesNoEnum | null;
  specialDepreciationMaximumAmount?: DeserializedType<T, 'Edm.Double'> | null;
  specialDepreciationMaximumFlag?: SpecialDepreciationMaximumFlagEnum | null;
  calculationBase?: CalculationBaseEnum | null;
  depreciationEndAtLastFullYear?: BoYesNoEnum | null;
  includePreviousDepreciationInCapitalizationPeriod?: BoYesNoEnum | null;
  deltaCoefficient?: DeserializedType<T, 'Edm.Int32'> | null;
  maximumDepreciableValue?: DeserializedType<T, 'Edm.Double'> | null;
  factorOnlyRelevantToFirstFiscalYear?: BoYesNoEnum | null;
  transferSourcePeriodControl?: TransferSourcePeriodControlEnum | null;
  transferTargetPeriodControl?: TransferTargetPeriodControlEnum | null;
  transferSourceProRataType?: TransferSourceProRataTypeEnum | null;
  transferTargetProRataType?: TransferTargetProRataTypeEnum | null;
  roundingMethod?: DepreciationRoundingMethodEnum | null;
  depreciationLevelCollection?: DepreciationLevel<T>[] | null;
  assetTransfer: AssetTransferType<T>[];
  assetRetirement: AssetRetirementType<T>[];
  assetManualDepreciation: AssetManualDepreciationType<T>[];
  assetCapitalization: AssetCapitalizationType<T>[];
  depreciationTypePool2?: DepreciationTypePoolsType<T> | null;
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType<T>[];
}
