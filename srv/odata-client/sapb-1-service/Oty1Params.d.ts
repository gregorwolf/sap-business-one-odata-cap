import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Oty1Params
 */
export interface Oty1Params {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[Oty1Params.build]] instead.
 */
export declare function createOty1Params(json: any): Oty1Params;
/**
 * Oty1ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Oty1ParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Oty1Params> {
    /**
     * Representation of the [[Oty1Params.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of Oty1ParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Oty1Params {
    /**
     * Metadata information on all properties of the `Oty1Params` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Oty1Params>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Oty1Params;
}
//# sourceMappingURL=Oty1Params.d.ts.map