/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ChecksforPaymentParams
 */
export interface ChecksforPaymentParams {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentParams.build]] instead.
 */
export function createChecksforPaymentParams(json: any): ChecksforPaymentParams {
  return ChecksforPaymentParams.build(json);
}

/**
 * ChecksforPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChecksforPaymentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ChecksforPaymentParams.checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckKey', this, 'Edm.Int32');
}

export namespace ChecksforPaymentParams {
  export function build(json: { [keys: string]: FieldType }): ChecksforPaymentParams {
    return createComplexType(json, {
      CheckKey: (checkKey: number) => ({ checkKey: edmToTs(checkKey, 'Edm.Int32') })
    });
  }
}
