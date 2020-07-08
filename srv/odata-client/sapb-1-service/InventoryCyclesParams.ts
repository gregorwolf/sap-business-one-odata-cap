/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryCyclesParams
 */
export interface InventoryCyclesParams {
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCyclesParams.build]] instead.
 */
export function createInventoryCyclesParams(json: any): InventoryCyclesParams {
  return InventoryCyclesParams.build(json);
}

/**
 * InventoryCyclesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCyclesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryCyclesParams.cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleCode', this, 'Edm.Int32');
}

export namespace InventoryCyclesParams {
  export function build(json: { [keys: string]: FieldType }): InventoryCyclesParams {
    return createComplexType(json, {
      CycleCode: (cycleCode: number) => ({ cycleCode: edmToTs(cycleCode, 'Edm.Int32') })
    });
  }
}
