/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AccountSegmentationParams
 */
export interface AccountSegmentationParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationParams.build]] instead.
 */
export function createAccountSegmentationParams(json: any): AccountSegmentationParams {
  return AccountSegmentationParams.build(json);
}

/**
 * AccountSegmentationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountSegmentationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AccountSegmentationParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');
}

export namespace AccountSegmentationParams {
  export function build(json: { [keys: string]: FieldType }): AccountSegmentationParams {
    return createComplexType(json, {
      Numerator: (numerator: number) => ({ numerator: edmToTs(numerator, 'Edm.Int32') })
    });
  }
}
