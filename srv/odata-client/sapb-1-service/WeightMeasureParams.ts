/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WeightMeasureParams
 */
export interface WeightMeasureParams {
  /**
   * Unit Code.
   * @nullable
   */
  unitCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WeightMeasureParams.build]] instead.
 */
export function createWeightMeasureParams(json: any): WeightMeasureParams {
  return WeightMeasureParams.build(json);
}

/**
 * WeightMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WeightMeasureParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WeightMeasureParams.unitCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitCode', this, 'Edm.Int32');
}

export namespace WeightMeasureParams {
  export function build(json: { [keys: string]: FieldType }): WeightMeasureParams {
    return createComplexType(json, {
      UnitCode: (unitCode: number) => ({ unitCode: edmToTs(unitCode, 'Edm.Int32') })
    });
  }
}
