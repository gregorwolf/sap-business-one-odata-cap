/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createItemGroupsWarehouseInfo(json: any): ItemGroupsWarehouseInfo {
  return ItemGroupsWarehouseInfo.build(json);
}

/**
 * ItemGroupsWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemGroupsWarehouseInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemGroupsWarehouseInfo.itmsGrpCod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itmsGrpCod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItmsGrpCod', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemGroupsWarehouseInfo.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemGroupsWarehouseInfo.defaultBin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultBin', this, 'Edm.Int32');
}

export namespace ItemGroupsWarehouseInfo {
  export function build(json: { [keys: string]: FieldType }): ItemGroupsWarehouseInfo {
    return createComplexType(json, {
      ItmsGrpCod: (itmsGrpCod: number) => ({ itmsGrpCod: edmToTs(itmsGrpCod, 'Edm.Int32') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      DefaultBin: (defaultBin: number) => ({ defaultBin: edmToTs(defaultBin, 'Edm.Int32') })
    });
  }
}
