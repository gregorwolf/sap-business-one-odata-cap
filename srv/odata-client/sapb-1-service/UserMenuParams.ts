/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserMenuParams
 */
export interface UserMenuParams {
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserMenuParams.build]] instead.
 */
export function createUserMenuParams(json: any): UserMenuParams {
  return UserMenuParams.build(json);
}

/**
 * UserMenuParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserMenuParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserMenuParams> {
  /**
   * Representation of the [[UserMenuParams.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');

  /**
   * Creates an instance of UserMenuParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserMenuParams);
  }
}

export namespace UserMenuParams {
  /**
   * Metadata information on all properties of the `UserMenuParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserMenuParams>[] = [{
    originalName: 'UserID',
    name: 'userId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserMenuParams {
    return deserializeComplexTypeV4(json, UserMenuParams);
  }
}
