/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * StockTakingParams
 */
export interface StockTakingParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTakingParams.build]] instead.
 */
export function createStockTakingParams(json: any): StockTakingParams {
  return StockTakingParams.build(json);
}

/**
 * StockTakingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTakingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[StockTakingParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTakingParams.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
}

export namespace StockTakingParams {
  export function build(json: { [keys: string]: FieldType }): StockTakingParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') })
    });
  }
}
