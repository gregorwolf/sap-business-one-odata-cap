/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserGroupByUserItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserGroupByUserItem {
  export function build(json: { [keys: string]: FieldType }): UserGroupByUserItem {
    return createComplexType(json, {
      USERId: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') }),
      GroupId: (groupId: number) => ({ groupId: edmToTs(groupId, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') })
    });
  }
}
