import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InventoryOpeningBalanceParams
 */
export interface InventoryOpeningBalanceParams {
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
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceParams.build]] instead.
 */
export declare function createInventoryOpeningBalanceParams(json: any): InventoryOpeningBalanceParams;
/**
 * InventoryOpeningBalanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryOpeningBalanceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryOpeningBalanceParams.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceParams.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InventoryOpeningBalanceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryOpeningBalanceParams;
}
//# sourceMappingURL=InventoryOpeningBalanceParams.d.ts.map