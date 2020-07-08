/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserGroupParams {
  export function build(json: { [keys: string]: FieldType }): UserGroupParams {
    return createComplexType(json, {
      UserGroupId: (userGroupId: number) => ({ userGroupId: edmToTs(userGroupId, 'Edm.Int32') }),
      UserGroupName: (userGroupName: string) => ({ userGroupName: edmToTs(userGroupName, 'Edm.String') })
    });
  }
}
