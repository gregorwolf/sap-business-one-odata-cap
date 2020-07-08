/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BoeLineParams
 */
export interface BoeLineParams {
  /**
   * Boe Key.
   * @nullable
   */
  boeKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeLineParams.build]] instead.
 */
export function createBoeLineParams(json: any): BoeLineParams {
  return BoeLineParams.build(json);
}

/**
 * BoeLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BoeLineParams.boeKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOEKey', this, 'Edm.Int32');
}

export namespace BoeLineParams {
  export function build(json: { [keys: string]: FieldType }): BoeLineParams {
    return createComplexType(json, {
      BOEKey: (boeKey: number) => ({ boeKey: edmToTs(boeKey, 'Edm.Int32') })
    });
  }
}
