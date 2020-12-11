import { PackagesTypesRequestBuilder } from './PackagesTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PackagesTypes" of service "SAPB1".
 */
export declare class PackagesTypes extends EntityV4 implements PackagesTypesType {
    /**
     * Technical entity name for PackagesTypes.
     */
    static _entityName: string;
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
     * Returns an entity builder to construct instances of `PackagesTypes`.
     * @returns A builder that constructs instances of entity type `PackagesTypes`.
     */
    static builder(): EntityBuilderType<PackagesTypes, PackagesTypesType>;
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
    static customField(fieldName: string): CustomFieldV4<PackagesTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PackagesTypesType {
    type?: string | null;
    code?: number | null;
    length1?: number | null;
    length1Unit?: number | null;
    length2?: number | null;
    length2Unit?: number | null;
    width1?: number | null;
    width1Unit?: number | null;
    width2?: number | null;
    width2Unit?: number | null;
    height1?: number | null;
    height1Unit?: number | null;
    height2?: number | null;
    height2Unit?: number | null;
    volume?: number | null;
    volumeUnit?: number | null;
    weight1?: number | null;
    weight1Unit?: number | null;
    weight2?: number | null;
    weight2Unit?: number | null;
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