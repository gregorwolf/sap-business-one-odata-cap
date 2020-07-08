/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserGroupsRequestBuilder } from './UserGroupsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserGroups" of service "SAPB1".
 */
export class UserGroups extends Entity implements UserGroupsType {
  /**
   * Technical entity name for UserGroups.
   */
  static _entityName = 'UserGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserGroups.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  /**
   * User Group Dec.
   * @nullable
   */
  userGroupDec?: string;
  /**
   * Tpl Id.
   * @nullable
   */
  tplId?: number;
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

  /**
   * Returns an entity builder to construct instances `UserGroups`.
   * @returns A builder that constructs instances of entity type `UserGroups`.
   */
  static builder(): EntityBuilderType<UserGroups, UserGroupsTypeForceMandatory> {
    return Entity.entityBuilder(UserGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserGroups` entity type.
   * @returns A `UserGroups` request builder.
   */
  static requestBuilder(): UserGroupsRequestBuilder {
    return new UserGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserGroups`.
   */
  static customField(fieldName: string): CustomField<UserGroups> {
    return Entity.customFieldSelector(fieldName, UserGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface UserGroupsType {
  userGroupId?: number;
  userGroupName?: string;
  userGroupDec?: string;
  tplId?: number;
  startDate?: Moment;
  dueDate?: Moment;
}

export interface UserGroupsTypeForceMandatory {
  userGroupId: number;
  userGroupName: string;
  userGroupDec: string;
  tplId: number;
  startDate: Moment;
  dueDate: Moment;
}

export namespace UserGroups {
  /**
   * Static representation of the [[userGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_GROUP_ID: NumberField<UserGroups> = new NumberField('UserGroupId', UserGroups, 'Edm.Int32');
  /**
   * Static representation of the [[userGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_GROUP_NAME: StringField<UserGroups> = new StringField('UserGroupName', UserGroups, 'Edm.String');
  /**
   * Static representation of the [[userGroupDec]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_GROUP_DEC: StringField<UserGroups> = new StringField('UserGroupDec', UserGroups, 'Edm.String');
  /**
   * Static representation of the [[tplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TPL_ID: NumberField<UserGroups> = new NumberField('TPLId', UserGroups, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<UserGroups> = new DateField('StartDate', UserGroups, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<UserGroups> = new DateField('DueDate', UserGroups, 'Edm.DateTimeOffset');
  /**
   * All fields of the UserGroups entity.
   */
  export const _allFields: Array<NumberField<UserGroups> | StringField<UserGroups> | DateField<UserGroups>> = [
    UserGroups.USER_GROUP_ID,
    UserGroups.USER_GROUP_NAME,
    UserGroups.USER_GROUP_DEC,
    UserGroups.TPL_ID,
    UserGroups.START_DATE,
    UserGroups.DUE_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserGroups> = new AllFields('*', UserGroups);
  /**
   * All key fields of the UserGroups entity.
   */
  export const _keyFields: Array<Field<UserGroups>> = [UserGroups.USER_GROUP_ID];
  /**
   * Mapping of all key field names to the respective static field property UserGroups.
   */
  export const _keys: { [keys: string]: Field<UserGroups> } = UserGroups._keyFields.reduce((acc: { [keys: string]: Field<UserGroups> }, field: Field<UserGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
