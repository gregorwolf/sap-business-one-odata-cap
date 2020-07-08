/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityLocationParams
 */
export interface ActivityLocationParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityLocationParams.build]] instead.
 */
export function createActivityLocationParams(json: any): ActivityLocationParams {
  return ActivityLocationParams.build(json);
}

/**
 * ActivityLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityLocationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityLocationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
}

export namespace ActivityLocationParams {
  export function build(json: { [keys: string]: FieldType }): ActivityLocationParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') })
    });
  }
}
