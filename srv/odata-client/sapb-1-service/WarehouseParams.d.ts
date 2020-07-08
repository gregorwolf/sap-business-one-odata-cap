import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WarehouseParams
 */
export interface WarehouseParams {
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WarehouseParams.build]] instead.
 */
export declare function createWarehouseParams(json: any): WarehouseParams;
/**
 * WarehouseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WarehouseParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WarehouseParams.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WarehouseParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WarehouseParams;
}
//# sourceMappingURL=WarehouseParams.d.ts.map