/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CheckLineParams
 */
export interface CheckLineParams {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CheckLineParams.build]] instead.
 */
export function createCheckLineParams(json: any): CheckLineParams {
  return CheckLineParams.build(json);
}

/**
 * CheckLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CheckLineParams.checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckKey', this, 'Edm.Int32');
}

export namespace CheckLineParams {
  export function build(json: { [keys: string]: FieldType }): CheckLineParams {
    return createComplexType(json, {
      CheckKey: (checkKey: number) => ({ checkKey: edmToTs(checkKey, 'Edm.Int32') })
    });
  }
}
