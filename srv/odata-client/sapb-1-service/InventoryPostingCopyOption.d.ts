import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryPostingCopyOption
 */
export interface InventoryPostingCopyOption {
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingCopyOption.build]] instead.
 */
export declare function createInventoryPostingCopyOption(json: any): InventoryPostingCopyOption;
/**
 * InventoryPostingCopyOptionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingCopyOptionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryPostingCopyOption.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryPostingCopyOption {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingCopyOption;
}
//# sourceMappingURL=InventoryPostingCopyOption.d.ts.map