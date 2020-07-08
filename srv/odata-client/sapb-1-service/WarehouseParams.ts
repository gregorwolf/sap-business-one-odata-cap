/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createWarehouseParams(json: any): WarehouseParams {
  return WarehouseParams.build(json);
}

/**
 * WarehouseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WarehouseParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WarehouseParams.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
}

export namespace WarehouseParams {
  export function build(json: { [keys: string]: FieldType }): WarehouseParams {
    return createComplexType(json, {
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') })
    });
  }
}
