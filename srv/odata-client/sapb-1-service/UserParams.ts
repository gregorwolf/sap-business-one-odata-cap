/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserParams
 */
export interface UserParams {
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserParams.build]] instead.
 */
export function createUserParams(json: any): UserParams {
  return UserParams.build(json);
}

/**
 * UserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserParams.internalKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalKey', this, 'Edm.Int32');
}

export namespace UserParams {
  export function build(json: { [keys: string]: FieldType }): UserParams {
    return createComplexType(json, {
      InternalKey: (internalKey: number) => ({ internalKey: edmToTs(internalKey, 'Edm.Int32') })
    });
  }
}
