/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProductionOrderParams
 */
export interface ProductionOrderParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderParams.build]] instead.
 */
export function createProductionOrderParams(json: any): ProductionOrderParams {
  return ProductionOrderParams.build(json);
}

/**
 * ProductionOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrderParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProductionOrderParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
}

export namespace ProductionOrderParams {
  export function build(json: { [keys: string]: FieldType }): ProductionOrderParams {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') })
    });
  }
}
