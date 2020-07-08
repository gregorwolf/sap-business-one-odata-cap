/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * LandedCostParams
 */
export interface LandedCostParams {
  /**
   * Landed Cost Number.
   * @nullable
   */
  landedCostNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LandedCostParams.build]] instead.
 */
export function createLandedCostParams(json: any): LandedCostParams {
  return LandedCostParams.build(json);
}

/**
 * LandedCostParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[LandedCostParams.landedCostNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landedCostNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LandedCostNumber', this, 'Edm.Int32');
}

export namespace LandedCostParams {
  export function build(json: { [keys: string]: FieldType }): LandedCostParams {
    return createComplexType(json, {
      LandedCostNumber: (landedCostNumber: number) => ({ landedCostNumber: edmToTs(landedCostNumber, 'Edm.Int32') })
    });
  }
}
