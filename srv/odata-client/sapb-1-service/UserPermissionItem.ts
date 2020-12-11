/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoPermission } from './BoPermission';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Permission.
   * @nullable
   */
  permission?: BoPermission;
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
export class UserPermissionItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionItem> {
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
  /**
   * Representation of the [[UserPermissionItem.permission]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permission: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Permission', this);

  /**
   * Creates an instance of UserPermissionItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserPermissionItem);
  }
}

export namespace UserPermissionItem {
  /**
   * Metadata information on all properties of the `UserPermissionItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserPermissionItem>[] = [{
    originalName: 'UserCode',
    name: 'userCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PermissionID',
    name: 'permissionId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Permission',
    name: 'permission',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserPermissionItem {
    return deserializeComplexTypeV4(json, UserPermissionItem);
  }
}
