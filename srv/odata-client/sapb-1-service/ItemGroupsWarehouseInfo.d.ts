import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemGroupsWarehouseInfo
 */
export interface ItemGroupsWarehouseInfo {
    /**
     * Itms Grp Cod.
     * @nullable
     */
    itmsGrpCod?: number;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Default Bin.
     * @nullable
     */
    defaultBin?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemGroupsWarehouseInfo.build]] instead.
 */
export declare function createItemGroupsWarehouseInfo(json: any): ItemGroupsWarehouseInfo;
/**
 * ItemGroupsWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemGroupsWarehouseInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemGroupsWarehouseInfo.itmsGrpCod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itmsGrpCod: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemGroupsWarehouseInfo.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemGroupsWarehouseInfo.defaultBin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBin: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemGroupsWarehouseInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemGroupsWarehouseInfo;
}
//# sourceMappingURL=ItemGroupsWarehouseInfo.d.ts.map