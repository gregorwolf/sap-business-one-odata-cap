import { WeightMeasuresRequestBuilder } from './WeightMeasuresRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "WeightMeasures" of service "SAPB1".
 */
export declare class WeightMeasures extends Entity implements WeightMeasuresType {
    /**
     * Technical entity name for WeightMeasures.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WeightMeasures.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
    /**
     * Unit Display.
     * @nullable
     */
    unitDisplay?: string;
    /**
     * Unit Name.
     * @nullable
     */
    unitName?: string;
    /**
     * Unit Weightinmg.
     * @nullable
     */
    unitWeightinmg?: number;
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * Returns an entity builder to construct instances `WeightMeasures`.
     * @returns A builder that constructs instances of entity type `WeightMeasures`.
     */
    static builder(): EntityBuilderType<WeightMeasures, WeightMeasuresTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WeightMeasures` entity type.
     * @returns A `WeightMeasures` request builder.
     */
    static requestBuilder(): WeightMeasuresRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightMeasures`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WeightMeasures`.
     */
    static customField(fieldName: string): CustomField<WeightMeasures>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BinLocations, BinLocationsType } from './BinLocations';
export interface WeightMeasuresType {
    unitCode?: number;
    unitDisplay?: string;
    unitName?: string;
    unitWeightinmg?: number;
    binLocations: BinLocationsType[];
}
export interface WeightMeasuresTypeForceMandatory {
    unitCode: number;
    unitDisplay: string;
    unitName: string;
    unitWeightinmg: number;
    binLocations: BinLocationsType[];
}
export declare namespace WeightMeasures {
    /**
     * Static representation of the [[unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_CODE: NumberField<WeightMeasures>;
    /**
     * Static representation of the [[unitDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_DISPLAY: StringField<WeightMeasures>;
    /**
     * Static representation of the [[unitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_NAME: StringField<WeightMeasures>;
    /**
     * Static representation of the [[unitWeightinmg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_WEIGHTINMG: NumberField<WeightMeasures>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<WeightMeasures, BinLocations>;
    /**
     * All fields of the WeightMeasures entity.
     */
    const _allFields: Array<NumberField<WeightMeasures> | StringField<WeightMeasures> | OneToManyLink<WeightMeasures, BinLocations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WeightMeasures>;
    /**
     * All key fields of the WeightMeasures entity.
     */
    const _keyFields: Array<Field<WeightMeasures>>;
    /**
     * Mapping of all key field names to the respective static field property WeightMeasures.
     */
    const _keys: {
        [keys: string]: Field<WeightMeasures>;
    };
}
//# sourceMappingURL=WeightMeasures.d.ts.map