import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DepreciationTypePoolParams
 */
export interface DepreciationTypePoolParams {
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
 * @deprecated Since v1.6.0. Use [[DepreciationTypePoolParams.build]] instead.
 */
export declare function createDepreciationTypePoolParams(json: any): DepreciationTypePoolParams;
/**
 * DepreciationTypePoolParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationTypePoolParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepreciationTypePoolParams> {
    /**
     * Representation of the [[DepreciationTypePoolParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationTypePoolParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DepreciationTypePoolParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DepreciationTypePoolParams {
    /**
     * Metadata information on all properties of the `DepreciationTypePoolParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DepreciationTypePoolParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationTypePoolParams;
}
//# sourceMappingURL=DepreciationTypePoolParams.d.ts.map