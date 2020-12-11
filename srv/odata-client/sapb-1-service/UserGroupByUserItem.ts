/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserGroupByUserItem
 */
export interface UserGroupByUserItem {
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
  /**
   * Group Id.
   * @nullable
   */
  groupId?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[UserGroupByUserItem.build]] instead.
 */
export function createUserGroupByUserItem(json: any): UserGroupByUserItem {
  return UserGroupByUserItem.build(json);
}

/**
 * UserGroupByUserItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserGroupByUserItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserGroupByUserItem> {
  /**
   * Representation of the [[UserGroupByUserItem.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('USERId', this, 'Edm.Int32');
  /**
   * Representation of the [[UserGroupByUserItem.groupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupId', this, 'Edm.Int32');
  /**
   * Representation of the [[UserGroupByUserItem.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[UserGroupByUserItem.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of UserGroupByUserItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserGroupByUserItem);
  }
}

export namespace UserGroupByUserItem {
  /**
   * Metadata information on all properties of the `UserGroupByUserItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserGroupByUserItem>[] = [{
    originalName: 'USERId',
    name: 'userId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GroupId',
    name: 'groupId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserGroupByUserItem {
    return deserializeComplexTypeV4(json, UserGroupByUserItem);
  }
}
