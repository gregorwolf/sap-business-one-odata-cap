import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CountryParams
 */
export interface CountryParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CountryParams.build]] instead.
 */
export declare function createCountryParams(json: any): CountryParams;
/**
 * CountryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CountryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CountryParams> {
    /**
     * Representation of the [[CountryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CountryParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CountryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CountryParams {
    /**
     * Metadata information on all properties of the `CountryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CountryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CountryParams;
}
//# sourceMappingURL=CountryParams.d.ts.map