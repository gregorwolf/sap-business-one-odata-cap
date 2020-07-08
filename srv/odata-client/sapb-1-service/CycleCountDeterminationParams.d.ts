import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CycleCountDeterminationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CycleCountDeterminationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CycleCountDeterminationParams;
}
//# sourceMappingURL=CycleCountDeterminationParams.d.ts.map