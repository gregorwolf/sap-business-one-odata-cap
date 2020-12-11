import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Default Bin Enforced.
     * @nullable
     */
    defaultBinEnforced?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemGroupsWarehouseInfo.build]] instead.
 */
export declare function createItemGroupsWarehouseInfo(json: any): ItemGroupsWarehouseInfo;
/**
 * ItemGroupsWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemGroupsWarehouseInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemGroupsWarehouseInfo> {
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
    /**
     * Representation of the [[ItemGroupsWarehouseInfo.defaultBinEnforced]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBinEnforced: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ItemGroupsWarehouseInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemGroupsWarehouseInfo {
    /**
     * Metadata information on all properties of the `ItemGroupsWarehouseInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemGroupsWarehouseInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemGroupsWarehouseInfo;
}
//# sourceMappingURL=ItemGroupsWarehouseInfo.d.ts.map