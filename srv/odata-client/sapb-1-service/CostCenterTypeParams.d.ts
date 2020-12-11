import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CostCenterTypeParams
 */
export interface CostCenterTypeParams {
    /**
     * Cost Center Type Code.
     * @nullable
     */
    costCenterTypeCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CostCenterTypeParams.build]] instead.
 */
export declare function createCostCenterTypeParams(json: any): CostCenterTypeParams;
/**
 * CostCenterTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CostCenterTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CostCenterTypeParams> {
    /**
     * Representation of the [[CostCenterTypeParams.costCenterTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costCenterTypeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CostCenterTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CostCenterTypeParams {
    /**
     * Metadata information on all properties of the `CostCenterTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CostCenterTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CostCenterTypeParams;
}
//# sourceMappingURL=CostCenterTypeParams.d.ts.map