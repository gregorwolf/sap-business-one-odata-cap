import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryCyclesParams
 */
export interface InventoryCyclesParams {
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCyclesParams.build]] instead.
 */
export declare function createInventoryCyclesParams(json: any): InventoryCyclesParams;
/**
 * InventoryCyclesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCyclesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryCyclesParams.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryCyclesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCyclesParams;
}
//# sourceMappingURL=InventoryCyclesParams.d.ts.map