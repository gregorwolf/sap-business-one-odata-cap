import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CycleCountDeterminationParams
 */
export interface CycleCountDeterminationParams {
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Cycle By.
     * @nullable
     */
    cycleBy?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationParams.build]] instead.
 */
export declare function createCycleCountDeterminationParams(json: any): CycleCountDeterminationParams;
/**
 * CycleCountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CycleCountDeterminationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CycleCountDeterminationParams> {
    /**
     * Representation of the [[CycleCountDeterminationParams.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CycleCountDeterminationParams.cycleBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CycleCountDeterminationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CycleCountDeterminationParams {
    /**
     * Metadata information on all properties of the `CycleCountDeterminationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CycleCountDeterminationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CycleCountDeterminationParams;
}
//# sourceMappingURL=CycleCountDeterminationParams.d.ts.map