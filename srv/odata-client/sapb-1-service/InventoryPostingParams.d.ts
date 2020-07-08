import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryPostingParams
 */
export interface InventoryPostingParams {
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
 * @deprecated Since v1.6.0. Use [[InventoryPostingParams.build]] instead.
 */
export declare function createInventoryPostingParams(json: any): InventoryPostingParams;
/**
 * InventoryPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryPostingParams.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingParams.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryPostingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingParams;
}
//# sourceMappingURL=InventoryPostingParams.d.ts.map