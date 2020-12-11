import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LocalEraParams
 */
export interface LocalEraParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[LocalEraParams.build]] instead.
 */
export declare function createLocalEraParams(json: any): LocalEraParams;
/**
 * LocalEraParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LocalEraParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LocalEraParams> {
    /**
     * Representation of the [[LocalEraParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of LocalEraParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LocalEraParams {
    /**
     * Metadata information on all properties of the `LocalEraParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LocalEraParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LocalEraParams;
}
//# sourceMappingURL=LocalEraParams.d.ts.map