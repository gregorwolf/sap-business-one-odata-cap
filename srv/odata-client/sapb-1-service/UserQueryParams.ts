/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class UserQueryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserQueryParams> {
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

  /**
   * Creates an instance of UserQueryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserQueryParams);
  }
}

export namespace UserQueryParams {
  /**
   * Metadata information on all properties of the `UserQueryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserQueryParams>[] = [{
    originalName: 'InternalKey',
    name: 'internalKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'QueryCategory',
    name: 'queryCategory',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserQueryParams {
    return deserializeComplexTypeV4(json, UserQueryParams);
  }
}
