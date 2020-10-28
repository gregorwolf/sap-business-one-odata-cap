/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AccrualTypeParams
 */
export interface AccrualTypeParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AccrualTypeParams.build]] instead.
 */
export function createAccrualTypeParams(json: any): AccrualTypeParams {
  return AccrualTypeParams.build(json);
}

/**
 * AccrualTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccrualTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AccrualTypeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace AccrualTypeParams {
  export function build(json: { [keys: string]: FieldType }): AccrualTypeParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}