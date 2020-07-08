import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ResourceWarehouse
 */
export interface ResourceWarehouse {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceWarehouse.build]] instead.
 */
export declare function createResourceWarehouse(json: any): ResourceWarehouse;
/**
 * ResourceWarehouseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceWarehouseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ResourceWarehouse.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceWarehouse.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ResourceWarehouse {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceWarehouse;
}
//# sourceMappingURL=ResourceWarehouse.d.ts.map