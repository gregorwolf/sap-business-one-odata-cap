/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PickListParams
 */
export interface PickListParams {
  /**
   * Absoluteentry.
   * @nullable
   */
  absoluteentry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PickListParams.build]] instead.
 */
export function createPickListParams(json: any): PickListParams {
  return PickListParams.build(json);
}

/**
 * PickListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PickListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PickListParams.absoluteentry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteentry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Absoluteentry', this, 'Edm.Int32');
}

export namespace PickListParams {
  export function build(json: { [keys: string]: FieldType }): PickListParams {
    return createComplexType(json, {
      Absoluteentry: (absoluteentry: number) => ({ absoluteentry: edmToTs(absoluteentry, 'Edm.Int32') })
    });
  }
}
