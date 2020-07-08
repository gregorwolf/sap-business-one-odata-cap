import { DimensionsRequestBuilder } from './DimensionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Dimensions" of service "SAPB1".
 */
export declare class Dimensions extends Entity implements DimensionsType {
    /**
     * Technical entity name for Dimensions.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Dimensions.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Dimension Code.
     * @nullable
     */
    dimensionCode?: number;
    /**
     * Dimension Name.
     * @nullable
     */
    dimensionName?: string;
    /**
     * Dimension Description.
     * @nullable
     */
    dimensionDescription?: string;
    /**
     * One-to-many navigation property to the [[ProfitCenters]] entity.
     */
    profitCenters: ProfitCenters[];
    /**
     * One-to-many navigation property to the [[DistributionRules]] entity.
     */
    distributionRules: DistributionRules[];
    /**
     * Returns an entity builder to construct instances `Dimensions`.
     * @returns A builder that constructs instances of entity type `Dimensions`.
     */
    static builder(): EntityBuilderType<Dimensions, DimensionsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Dimensions` entity type.
     * @returns A `Dimensions` request builder.
     */
    static requestBuilder(): DimensionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Dimensions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Dimensions`.
     */
    static customField(fieldName: string): CustomField<Dimensions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
export interface DimensionsType {
    dimensionCode?: number;
    dimensionName?: string;
    dimensionDescription?: string;
    profitCenters: ProfitCentersType[];
    distributionRules: DistributionRulesType[];
}
export interface DimensionsTypeForceMandatory {
    dimensionCode: number;
    dimensionName: string;
    dimensionDescription: string;
    profitCenters: ProfitCentersType[];
    distributionRules: DistributionRulesType[];
}
export declare namespace Dimensions {
    /**
     * Static representation of the [[dimensionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_CODE: NumberField<Dimensions>;
    /**
     * Static representation of the [[dimensionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_NAME: StringField<Dimensions>;
    /**
     * Static representation of the [[dimensionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_DESCRIPTION: StringField<Dimensions>;
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFIT_CENTERS: OneToManyLink<Dimensions, ProfitCenters>;
    /**
     * Static representation of the one-to-many navigation property [[distributionRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULES: OneToManyLink<Dimensions, DistributionRules>;
    /**
     * All fields of the Dimensions entity.
     */
    const _allFields: Array<NumberField<Dimensions> | StringField<Dimensions> | OneToManyLink<Dimensions, ProfitCenters> | OneToManyLink<Dimensions, DistributionRules>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Dimensions>;
    /**
     * All key fields of the Dimensions entity.
     */
    const _keyFields: Array<Field<Dimensions>>;
    /**
     * Mapping of all key field names to the respective static field property Dimensions.
     */
    const _keys: {
        [keys: string]: Field<Dimensions>;
    };
}
//# sourceMappingURL=Dimensions.d.ts.map