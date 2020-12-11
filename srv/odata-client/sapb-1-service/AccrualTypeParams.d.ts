import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AccrualTypeParams
 */
export interface AccrualTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AccrualTypeParams.build]] instead.
 */
export declare function createAccrualTypeParams(json: any): AccrualTypeParams;
/**
 * AccrualTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccrualTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccrualTypeParams> {
    /**
     * Representation of the [[AccrualTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AccrualTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AccrualTypeParams {
    /**
     * Metadata information on all properties of the `AccrualTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AccrualTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AccrualTypeParams;
}
//# sourceMappingURL=AccrualTypeParams.d.ts.map