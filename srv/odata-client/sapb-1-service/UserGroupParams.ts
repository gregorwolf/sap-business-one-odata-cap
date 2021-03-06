/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserGroupParams
 */
export interface UserGroupParams {
  /**
   * User Group Id.
   * @nullable
   */
  userGroupId?: number;
  /**
   * User Group Name.
   * @nullable
   */
  userGroupName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserGroupParams.build]] instead.
 */
export function createUserGroupParams(json: any): UserGroupParams {
  return UserGroupParams.build(json);
}

/**
 * UserGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserGroupParams> {
  /**
   * Representation of the [[UserGroupParams.userGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userGroupId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserGroupId', this, 'Edm.Int32');
  /**
   * Representation of the [[UserGroupParams.userGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userGroupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserGroupName', this, 'Edm.String');

  /**
   * Creates an instance of UserGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserGroupParams);
  }
}

export namespace UserGroupParams {
  /**
   * Metadata information on all properties of the `UserGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserGroupParams>[] = [{
    originalName: 'UserGroupId',
    name: 'userGroupId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UserGroupName',
    name: 'userGroupName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserGroupParams {
    return deserializeComplexTypeV4(json, UserGroupParams);
  }
}
