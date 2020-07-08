/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserPermissionItem
 */
export interface UserPermissionItem {
  /**
   * User Code.
   * @nullable
   */
  userCode?: number;
  /**
   * Permission Id.
   * @nullable
   */
  permissionId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserPermissionItem.build]] instead.
 */
export function createUserPermissionItem(json: any): UserPermissionItem {
  return UserPermissionItem.build(json);
}

/**
 * UserPermissionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserPermissionItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserPermissionItem.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserCode', this, 'Edm.Int32');
  /**
   * Representation of the [[UserPermissionItem.permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permissionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PermissionID', this, 'Edm.String');
}

export namespace UserPermissionItem {
  export function build(json: { [keys: string]: FieldType }): UserPermissionItem {
    return createComplexType(json, {
      UserCode: (userCode: number) => ({ userCode: edmToTs(userCode, 'Edm.Int32') }),
      PermissionID: (permissionId: string) => ({ permissionId: edmToTs(permissionId, 'Edm.String') })
    });
  }
}
