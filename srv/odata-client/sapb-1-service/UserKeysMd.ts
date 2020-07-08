/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserKeysMdRequestBuilder } from './UserKeysMdRequestBuilder';
import { UserKeysMdElement, UserKeysMdElementField } from './UserKeysMdElement';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserKeysMD" of service "SAPB1".
 */
export class UserKeysMd extends Entity implements UserKeysMdType {
  /**
   * Technical entity name for UserKeysMd.
   */
  static _entityName = 'UserKeysMD';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserKeysMd.
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
   * Key Index.
   * @nullable
   */
  keyIndex?: number;
  /**
   * Key Name.
   * @nullable
   */
  keyName?: string;
  /**
   * User Keys Md Elements.
   * @nullable
   */
  userKeysMdElements?: UserKeysMdElement[];

  /**
   * Returns an entity builder to construct instances `UserKeysMd`.
   * @returns A builder that constructs instances of entity type `UserKeysMd`.
   */
  static builder(): EntityBuilderType<UserKeysMd, UserKeysMdTypeForceMandatory> {
    return Entity.entityBuilder(UserKeysMd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserKeysMd` entity type.
   * @returns A `UserKeysMd` request builder.
   */
  static requestBuilder(): UserKeysMdRequestBuilder {
    return new UserKeysMdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserKeysMd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserKeysMd`.
   */
  static customField(fieldName: string): CustomField<UserKeysMd> {
    return Entity.customFieldSelector(fieldName, UserKeysMd);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface UserKeysMdType {
  tableName?: string;
  keyIndex?: number;
  keyName?: string;
  userKeysMdElements?: UserKeysMdElement[];
}

export interface UserKeysMdTypeForceMandatory {
  tableName: string;
  keyIndex: number;
  keyName: string;
  userKeysMdElements: UserKeysMdElement[];
}

export namespace UserKeysMd {
  /**
   * Static representation of the [[tableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_NAME: StringField<UserKeysMd> = new StringField('TableName', UserKeysMd, 'Edm.String');
  /**
   * Static representation of the [[keyIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_INDEX: NumberField<UserKeysMd> = new NumberField('KeyIndex', UserKeysMd, 'Edm.Int32');
  /**
   * Static representation of the [[keyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_NAME: StringField<UserKeysMd> = new StringField('KeyName', UserKeysMd, 'Edm.String');
  /**
   * Static representation of the [[userKeysMdElements]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_KEYS_MD_ELEMENTS: CollectionField<UserKeysMd> = new CollectionField('UserKeysMD_Elements', UserKeysMd, new UserKeysMdElementField('', UserKeysMd));
  /**
   * All fields of the UserKeysMd entity.
   */
  export const _allFields: Array<StringField<UserKeysMd> | NumberField<UserKeysMd> | CollectionField<UserKeysMd>> = [
    UserKeysMd.TABLE_NAME,
    UserKeysMd.KEY_INDEX,
    UserKeysMd.KEY_NAME,
    UserKeysMd.USER_KEYS_MD_ELEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserKeysMd> = new AllFields('*', UserKeysMd);
  /**
   * All key fields of the UserKeysMd entity.
   */
  export const _keyFields: Array<Field<UserKeysMd>> = [UserKeysMd.TABLE_NAME, UserKeysMd.KEY_INDEX];
  /**
   * Mapping of all key field names to the respective static field property UserKeysMd.
   */
  export const _keys: { [keys: string]: Field<UserKeysMd> } = UserKeysMd._keyFields.reduce((acc: { [keys: string]: Field<UserKeysMd> }, field: Field<UserKeysMd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
