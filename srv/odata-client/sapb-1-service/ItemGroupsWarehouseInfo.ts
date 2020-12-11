/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createItemGroupsWarehouseInfo(json: any): ItemGroupsWarehouseInfo {
  return ItemGroupsWarehouseInfo.build(json);
}

/**
 * ItemGroupsWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemGroupsWarehouseInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemGroupsWarehouseInfo> {
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
  /**
   * Representation of the [[ItemGroupsWarehouseInfo.defaultBinEnforced]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBinEnforced: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DefaultBinEnforced', this);

  /**
   * Creates an instance of ItemGroupsWarehouseInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemGroupsWarehouseInfo);
  }
}

export namespace ItemGroupsWarehouseInfo {
  /**
   * Metadata information on all properties of the `ItemGroupsWarehouseInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemGroupsWarehouseInfo>[] = [{
    originalName: 'ItmsGrpCod',
    name: 'itmsGrpCod',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DefaultBin',
    name: 'defaultBin',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DefaultBinEnforced',
    name: 'defaultBinEnforced',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemGroupsWarehouseInfo {
    return deserializeComplexTypeV4(json, ItemGroupsWarehouseInfo);
  }
}
