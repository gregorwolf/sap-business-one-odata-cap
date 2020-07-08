/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserQueryParams
 */
export interface UserQueryParams {
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: number;
  /**
   * Query Category.
   * @nullable
   */
  queryCategory?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserQueryParams.build]] instead.
 */
export function createUserQueryParams(json: any): UserQueryParams {
  return UserQueryParams.build(json);
}

/**
 * UserQueryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserQueryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserQueryParams.internalKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalKey', this, 'Edm.Int32');
  /**
   * Representation of the [[UserQueryParams.queryCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryCategory: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('QueryCategory', this, 'Edm.Int32');
}

export namespace UserQueryParams {
  export function build(json: { [keys: string]: FieldType }): UserQueryParams {
    return createComplexType(json, {
      InternalKey: (internalKey: number) => ({ internalKey: edmToTs(internalKey, 'Edm.Int32') }),
      QueryCategory: (queryCategory: number) => ({ queryCategory: edmToTs(queryCategory, 'Edm.Int32') })
    });
  }
}
