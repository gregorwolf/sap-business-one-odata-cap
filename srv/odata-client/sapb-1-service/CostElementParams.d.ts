import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CostElementParams
 */
export interface CostElementParams {
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
 * @deprecated Since v1.6.0. Use [[CostElementParams.build]] instead.
 */
export declare function createCostElementParams(json: any): CostElementParams;
/**
 * CostElementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CostElementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CostElementParams> {
    /**
     * Representation of the [[CostElementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CostElementParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CostElementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CostElementParams {
    /**
     * Metadata information on all properties of the `CostElementParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CostElementParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CostElementParams;
}
//# sourceMappingURL=CostElementParams.d.ts.map