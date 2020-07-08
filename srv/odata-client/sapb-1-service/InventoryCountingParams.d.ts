import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryCountingParams
 */
export interface InventoryCountingParams {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingParams.build]] instead.
 */
export declare function createInventoryCountingParams(json: any): InventoryCountingParams;
/**
 * InventoryCountingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryCountingParams.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingParams.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryCountingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCountingParams;
}
//# sourceMappingURL=InventoryCountingParams.d.ts.map