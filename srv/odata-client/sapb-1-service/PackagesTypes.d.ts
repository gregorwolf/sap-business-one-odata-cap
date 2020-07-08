import { PackagesTypesRequestBuilder } from './PackagesTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "PackagesTypes" of service "SAPB1".
 */
export declare class PackagesTypes extends Entity implements PackagesTypesType {
    /**
     * Technical entity name for PackagesTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PackagesTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Length 1.
     * @nullable
     */
    length1?: number;
    /**
     * Length 1 Unit.
     * @nullable
     */
    length1Unit?: number;
    /**
     * Length 2.
     * @nullable
     */
    length2?: number;
    /**
     * Length 2 Unit.
     * @nullable
     */
    length2Unit?: number;
    /**
     * Width 1.
     * @nullable
     */
    width1?: number;
    /**
     * Width 1 Unit.
     * @nullable
     */
    width1Unit?: number;
    /**
     * Width 2.
     * @nullable
     */
    width2?: number;
    /**
     * Width 2 Unit.
     * @nullable
     */
    width2Unit?: number;
    /**
     * Height 1.
     * @nullable
     */
    height1?: number;
    /**
     * Height 1 Unit.
     * @nullable
     */
    height1Unit?: number;
    /**
     * Height 2.
     * @nullable
     */
    height2?: number;
    /**
     * Height 2 Unit.
     * @nullable
     */
    height2Unit?: number;
    /**
     * Volume.
     * @nullable
     */
    volume?: number;
    /**
     * Volume Unit.
     * @nullable
     */
    volumeUnit?: number;
    /**
     * Weight 1.
     * @nullable
     */
    weight1?: number;
    /**
     * Weight 1 Unit.
     * @nullable
     */
    weight1Unit?: number;
    /**
     * Weight 2.
     * @nullable
     */
    weight2?: number;
    /**
     * Weight 2 Unit.
     * @nullable
     */
    weight2Unit?: number;
    /**
     * Returns an entity builder to construct instances `PackagesTypes`.
     * @returns A builder that constructs instances of entity type `PackagesTypes`.
     */
    static builder(): EntityBuilderType<PackagesTypes, PackagesTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PackagesTypes` entity type.
     * @returns A `PackagesTypes` request builder.
     */
    static requestBuilder(): PackagesTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PackagesTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PackagesTypes`.
     */
    static customField(fieldName: string): CustomField<PackagesTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PackagesTypesType {
    type?: string;
    code?: number;
    length1?: number;
    length1Unit?: number;
    length2?: number;
    length2Unit?: number;
    width1?: number;
    width1Unit?: number;
    width2?: number;
    width2Unit?: number;
    height1?: number;
    height1Unit?: number;
    height2?: number;
    height2Unit?: number;
    volume?: number;
    volumeUnit?: number;
    weight1?: number;
    weight1Unit?: number;
    weight2?: number;
    weight2Unit?: number;
}
export interface PackagesTypesTypeForceMandatory {
    type: string;
    code: number;
    length1: number;
    length1Unit: number;
    length2: number;
    length2Unit: number;
    width1: number;
    width1Unit: number;
    width2: number;
    width2Unit: number;
    height1: number;
    height1Unit: number;
    height2: number;
    height2Unit: number;
    volume: number;
    volumeUnit: number;
    weight1: number;
    weight1Unit: number;
    weight2: number;
    weight2Unit: number;
}
export declare namespace PackagesTypes {
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<PackagesTypes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[length1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_1: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_1_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[length2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_2: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_2_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[width1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_1: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_1_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[width2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_2: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH_2_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[height1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_1: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_1_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[height2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_2: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT_2_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[volume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VOLUME: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VOLUME_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[weight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_1: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_1_UNIT: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[weight2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_2: NumberField<PackagesTypes>;
    /**
     * Static representation of the [[weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_2_UNIT: NumberField<PackagesTypes>;
    /**
     * All fields of the PackagesTypes entity.
     */
    const _allFields: Array<StringField<PackagesTypes> | NumberField<PackagesTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PackagesTypes>;
    /**
     * All key fields of the PackagesTypes entity.
     */
    const _keyFields: Array<Field<PackagesTypes>>;
    /**
     * Mapping of all key field names to the respective static field property PackagesTypes.
     */
    const _keys: {
        [keys: string]: Field<PackagesTypes>;
    };
}
//# sourceMappingURL=PackagesTypes.d.ts.map