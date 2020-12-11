import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DepreciationAreaParams
 */
export interface DepreciationAreaParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[DepreciationAreaParams.build]] instead.
 */
export declare function createDepreciationAreaParams(json: any): DepreciationAreaParams;
/**
 * DepreciationAreaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationAreaParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepreciationAreaParams> {
    /**
     * Representation of the [[DepreciationAreaParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationAreaParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DepreciationAreaParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DepreciationAreaParams {
    /**
     * Metadata information on all properties of the `DepreciationAreaParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DepreciationAreaParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationAreaParams;
}
//# sourceMappingURL=DepreciationAreaParams.d.ts.map