/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserTablesMdRequestBuilder } from './UserTablesMdRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserTablesMD" of service "SAPB1".
 */
export class UserTablesMd extends Entity implements UserTablesMdType {
  /**
   * Technical entity name for UserTablesMd.
   */
  static _entityName = 'UserTablesMD';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserTablesMd.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Table Description.
   * @nullable
   */
  tableDescription?: string;
  /**
   * Archive Date Field.
   * @nullable
   */
  archiveDateField?: string;
  /**
   * One-to-many navigation property to the [[UserObjectsMd]] entity.
   */
  userObjectsMd!: UserObjectsMd[];
  /**
   * One-to-many navigation property to the [[UserFieldsMd]] entity.
   */
  userFieldsMd!: UserFieldsMd[];

  /**
   * Returns an entity builder to construct instances `UserTablesMd`.
   * @returns A builder that constructs instances of entity type `UserTablesMd`.
   */
  static builder(): EntityBuilderType<UserTablesMd, UserTablesMdTypeForceMandatory> {
    return Entity.entityBuilder(UserTablesMd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserTablesMd` entity type.
   * @returns A `UserTablesMd` request builder.
   */
  static requestBuilder(): UserTablesMdRequestBuilder {
    return new UserTablesMdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserTablesMd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserTablesMd`.
   */
  static customField(fieldName: string): CustomField<UserTablesMd> {
    return Entity.customFieldSelector(fieldName, UserTablesMd);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UserObjectsMd, UserObjectsMdType } from './UserObjectsMd';
import { UserFieldsMd, UserFieldsMdType } from './UserFieldsMd';

export interface UserTablesMdType {
  tableName?: string;
  tableDescription?: string;
  archiveDateField?: string;
  userObjectsMd: UserObjectsMdType[];
  userFieldsMd: UserFieldsMdType[];
}

export interface UserTablesMdTypeForceMandatory {
  tableName: string;
  tableDescription: string;
  archiveDateField: string;
  userObjectsMd: UserObjectsMdType[];
  userFieldsMd: UserFieldsMdType[];
}

export namespace UserTablesMd {
  /**
   * Static representation of the [[tableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_NAME: StringField<UserTablesMd> = new StringField('TableName', UserTablesMd, 'Edm.String');
  /**
   * Static representation of the [[tableDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_DESCRIPTION: StringField<UserTablesMd> = new StringField('TableDescription', UserTablesMd, 'Edm.String');
  /**
   * Static representation of the [[archiveDateField]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_DATE_FIELD: StringField<UserTablesMd> = new StringField('ArchiveDateField', UserTablesMd, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[userObjectsMd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECTS_MD: OneToManyLink<UserTablesMd, UserObjectsMd> = new OneToManyLink('UserObjectsMD', UserTablesMd, UserObjectsMd);
  /**
   * Static representation of the one-to-many navigation property [[userFieldsMd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_FIELDS_MD: OneToManyLink<UserTablesMd, UserFieldsMd> = new OneToManyLink('UserFieldsMD', UserTablesMd, UserFieldsMd);
  /**
   * All fields of the UserTablesMd entity.
   */
  export const _allFields: Array<StringField<UserTablesMd> | OneToManyLink<UserTablesMd, UserObjectsMd> | OneToManyLink<UserTablesMd, UserFieldsMd>> = [
    UserTablesMd.TABLE_NAME,
    UserTablesMd.TABLE_DESCRIPTION,
    UserTablesMd.ARCHIVE_DATE_FIELD,
    UserTablesMd.USER_OBJECTS_MD,
    UserTablesMd.USER_FIELDS_MD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserTablesMd> = new AllFields('*', UserTablesMd);
  /**
   * All key fields of the UserTablesMd entity.
   */
  export const _keyFields: Array<Field<UserTablesMd>> = [UserTablesMd.TABLE_NAME];
  /**
   * Mapping of all key field names to the respective static field property UserTablesMd.
   */
  export const _keys: { [keys: string]: Field<UserTablesMd> } = UserTablesMd._keyFields.reduce((acc: { [keys: string]: Field<UserTablesMd> }, field: Field<UserTablesMd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
