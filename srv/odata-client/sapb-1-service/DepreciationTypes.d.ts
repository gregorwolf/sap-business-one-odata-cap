import { DepreciationTypesRequestBuilder } from './DepreciationTypesRequestBuilder';
import { Moment } from 'moment';
import { DepreciationLevel } from './DepreciationLevel';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DepreciationTypes" of service "SAPB1".
 */
export declare class DepreciationTypes extends Entity implements DepreciationTypesType {
    /**
     * Technical entity name for DepreciationTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Minimum Depreciated Value.
     * @nullable
     */
    minimumDepreciatedValue?: number;
    /**
     * Salvage Percentage.
     * @nullable
     */
    salvagePercentage?: number;
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
     * Straight Line Percentage.
     * @nullable
     */
    straightLinePercentage?: number;
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
     * Special Depreciation Maximum Amount.
     * @nullable
     */
    specialDepreciationMaximumAmount?: number;
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
     * Depreciation Level Collection.
     * @nullable
     */
    depreciationLevelCollection?: DepreciationLevel[];
    /**
     * One-to-many navigation property to the [[AssetTransfer]] entity.
     */
    assetTransfer: AssetTransfer[];
    /**
     * One-to-many navigation property to the [[AssetRetirement]] entity.
     */
    assetRetirement: AssetRetirement[];
    /**
     * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
     */
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemo[];
    /**
     * One-to-one navigation property to the [[DepreciationTypePools]] entity.
     */
    depreciationTypePool2: DepreciationTypePools;
    /**
     * One-to-many navigation property to the [[AssetCapitalization]] entity.
     */
    assetCapitalization: AssetCapitalization[];
    /**
     * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
     */
    assetManualDepreciation: AssetManualDepreciation[];
    /**
     * Returns an entity builder to construct instances `DepreciationTypes`.
     * @returns A builder that constructs instances of entity type `DepreciationTypes`.
     */
    static builder(): EntityBuilderType<DepreciationTypes, DepreciationTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationTypes` entity type.
     * @returns A `DepreciationTypes` request builder.
     */
    static requestBuilder(): DepreciationTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationTypes`.
     */
    static customField(fieldName: string): CustomField<DepreciationTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { DepreciationTypePools, DepreciationTypePoolsType } from './DepreciationTypePools';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';
export interface DepreciationTypesType {
    code?: string;
    description?: string;
    minimumDepreciatedValue?: number;
    salvagePercentage?: number;
    percentageOfDepreciationReversedInRetirementYear?: number;
    validFrom?: Moment;
    validTo?: Moment;
    straightLinePercentage?: number;
    straightLinePeriodControlFactor?: number;
    decliningPercentage?: number;
    decliningFactor?: number;
    decliningChangeTo?: string;
    specialDepreciationConcessionPeriodYears?: number;
    specialDepreciationMaximumPercentage?: number;
    specialDepreciationNormalDepreciation?: string;
    specialDepreciationAlternativeDepreciation?: string;
    depreciationTypePool?: string;
    specialDepreciationMaximumAmount?: number;
    deltaCoefficient?: number;
    maximumDepreciableValue?: number;
    depreciationLevelCollection?: DepreciationLevel[];
    assetTransfer: AssetTransferType[];
    assetRetirement: AssetRetirementType[];
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
    depreciationTypePool2: DepreciationTypePoolsType;
    assetCapitalization: AssetCapitalizationType[];
    assetManualDepreciation: AssetManualDepreciationType[];
}
export interface DepreciationTypesTypeForceMandatory {
    code: string;
    description: string;
    minimumDepreciatedValue: number;
    salvagePercentage: number;
    percentageOfDepreciationReversedInRetirementYear: number;
    validFrom: Moment;
    validTo: Moment;
    straightLinePercentage: number;
    straightLinePeriodControlFactor: number;
    decliningPercentage: number;
    decliningFactor: number;
    decliningChangeTo: string;
    specialDepreciationConcessionPeriodYears: number;
    specialDepreciationMaximumPercentage: number;
    specialDepreciationNormalDepreciation: string;
    specialDepreciationAlternativeDepreciation: string;
    depreciationTypePool: string;
    specialDepreciationMaximumAmount: number;
    deltaCoefficient: number;
    maximumDepreciableValue: number;
    depreciationLevelCollection: DepreciationLevel[];
    assetTransfer: AssetTransferType[];
    assetRetirement: AssetRetirementType[];
    assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
    depreciationTypePool2: DepreciationTypePoolsType;
    assetCapitalization: AssetCapitalizationType[];
    assetManualDepreciation: AssetManualDepreciationType[];
}
export declare namespace DepreciationTypes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[minimumDepreciatedValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_DEPRECIATED_VALUE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[salvagePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALVAGE_PERCENTAGE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[percentageOfDepreciationReversedInRetirementYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<DepreciationTypes>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<DepreciationTypes>;
    /**
     * Static representation of the [[straightLinePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRAIGHT_LINE_PERCENTAGE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[straightLinePeriodControlFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRAIGHT_LINE_PERIOD_CONTROL_FACTOR: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[decliningPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECLINING_PERCENTAGE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[decliningFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECLINING_FACTOR: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[decliningChangeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECLINING_CHANGE_TO: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[specialDepreciationConcessionPeriodYears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[specialDepreciationMaximumPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[specialDepreciationNormalDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[specialDepreciationAlternativeDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[depreciationTypePool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_TYPE_POOL: StringField<DepreciationTypes>;
    /**
     * Static representation of the [[specialDepreciationMaximumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[deltaCoefficient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELTA_COEFFICIENT: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[maximumDepreciableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_DEPRECIABLE_VALUE: NumberField<DepreciationTypes>;
    /**
     * Static representation of the [[depreciationLevelCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_LEVEL_COLLECTION: CollectionField<DepreciationTypes>;
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_TRANSFER: OneToManyLink<DepreciationTypes, AssetTransfer>;
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_RETIREMENT: OneToManyLink<DepreciationTypes, AssetRetirement>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<DepreciationTypes, AssetCapitalizationCreditMemo>;
    /**
     * Static representation of the one-to-one navigation property [[depreciationTypePool2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_TYPE_POOL_2: OneToOneLink<DepreciationTypes, DepreciationTypePools>;
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CAPITALIZATION: OneToManyLink<DepreciationTypes, AssetCapitalization>;
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_MANUAL_DEPRECIATION: OneToManyLink<DepreciationTypes, AssetManualDepreciation>;
    /**
     * All fields of the DepreciationTypes entity.
     */
    const _allFields: Array<StringField<DepreciationTypes> | NumberField<DepreciationTypes> | DateField<DepreciationTypes> | CollectionField<DepreciationTypes> | OneToManyLink<DepreciationTypes, AssetTransfer> | OneToManyLink<DepreciationTypes, AssetRetirement> | OneToManyLink<DepreciationTypes, AssetCapitalizationCreditMemo> | OneToOneLink<DepreciationTypes, DepreciationTypePools> | OneToManyLink<DepreciationTypes, AssetCapitalization> | OneToManyLink<DepreciationTypes, AssetManualDepreciation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DepreciationTypes>;
    /**
     * All key fields of the DepreciationTypes entity.
     */
    const _keyFields: Array<Field<DepreciationTypes>>;
    /**
     * Mapping of all key field names to the respective static field property DepreciationTypes.
     */
    const _keys: {
        [keys: string]: Field<DepreciationTypes>;
    };
}
//# sourceMappingURL=DepreciationTypes.d.ts.map