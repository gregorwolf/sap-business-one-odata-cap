/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserDefaultGroupParams
 */
export interface UserDefaultGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserDefaultGroupParams.build]] instead.
 */
export function createUserDefaultGroupParams(json: any): UserDefaultGroupParams {
  return UserDefaultGroupParams.build(json);
}

/**
 * UserDefaultGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserDefaultGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserDefaultGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace UserDefaultGroupParams {
  export function build(json: { [keys: string]: FieldType }): UserDefaultGroupParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
