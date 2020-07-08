/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CycleCountDeterminationParams
 */
export interface CycleCountDeterminationParams {
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Cycle By.
   * @nullable
   */
  cycleBy?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationParams.build]] instead.
 */
export function createCycleCountDeterminationParams(json: any): CycleCountDeterminationParams {
  return CycleCountDeterminationParams.build(json);
}

/**
 * CycleCountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CycleCountDeterminationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CycleCountDeterminationParams.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[CycleCountDeterminationParams.cycleBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleBy', this, 'Edm.Int32');
}

export namespace CycleCountDeterminationParams {
  export function build(json: { [keys: string]: FieldType }): CycleCountDeterminationParams {
    return createComplexType(json, {
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      CycleBy: (cycleBy: number) => ({ cycleBy: edmToTs(cycleBy, 'Edm.Int32') })
    });
  }
}
