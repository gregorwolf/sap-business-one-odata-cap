/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserFieldsMdRequestBuilder } from './UserFieldsMdRequestBuilder';
import { ValidValueMd } from './ValidValueMd';
import { BoFieldTypes } from './BoFieldTypes';
import { BoFldSubTypes } from './BoFldSubTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UdfLinkedSystemObjectTypesEnum } from './UdfLinkedSystemObjectTypesEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserFieldsMD" of service "SAPB1".
 */
export class UserFieldsMd extends EntityV4 implements UserFieldsMdType {
  /**
   * Technical entity name for UserFieldsMd.
   */
  static _entityName = 'UserFieldsMD';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Type.
   * @nullable
   */
  type?: BoFieldTypes;
  /**
   * Size.
   * @nullable
   */
  size?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: BoFldSubTypes;
  /**
   * Linked Table.
   * @nullable
   */
  linkedTable?: string;
  /**
   * Default Value.
   * @nullable
   */
  defaultValue?: string;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: number;
  /**
   * Edit Size.
   * @nullable
   */
  editSize?: number;
  /**
   * Mandatory.
   * @nullable
   */
  mandatory?: BoYesNoEnum;
  /**
   * Linked Udo.
   * @nullable
   */
  linkedUdo?: string;
  /**
   * Linked System Object.
   * @nullable
   */
  linkedSystemObject?: UdfLinkedSystemObjectTypesEnum;
  /**
   * Valid Values Md.
   * @nullable
   */
  validValuesMd?: ValidValueMd[];
  /**
   * One-to-one navigation property to the [[UserTablesMd]] entity.
   */
  userTablesMd!: UserTablesMd;

  /**
   * Returns an entity builder to construct instances of `UserFieldsMd`.
   * @returns A builder that constructs instances of entity type `UserFieldsMd`.
   */
  static builder(): EntityBuilderType<UserFieldsMd, UserFieldsMdType> {
    return EntityV4.entityBuilder(UserFieldsMd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserFieldsMd` entity type.
   * @returns A `UserFieldsMd` request builder.
   */
  static requestBuilder(): UserFieldsMdRequestBuilder {
    return new UserFieldsMdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserFieldsMd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserFieldsMd`.
   */
  static customField(fieldName: string): CustomFieldV4<UserFieldsMd> {
    return EntityV4.customFieldSelector(fieldName, UserFieldsMd);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UserTablesMd, UserTablesMdType } from './UserTablesMd';

export interface UserFieldsMdType {
  name?: string | null;
  type?: BoFieldTypes | null;
  size?: number | null;
  description?: string | null;
  subType?: BoFldSubTypes | null;
  linkedTable?: string | null;
  defaultValue?: string | null;
  tableName?: string | null;
  fieldId?: number | null;
  editSize?: number | null;
  mandatory?: BoYesNoEnum | null;
  linkedUdo?: string | null;
  linkedSystemObject?: UdfLinkedSystemObjectTypesEnum | null;
  validValuesMd?: ValidValueMd[] | null;
  userTablesMd: UserTablesMdType;
}

export namespace UserFieldsMd {
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UserFieldsMd> = new StringField('Name', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<UserFieldsMd> = new EnumField('Type', UserFieldsMd);
  /**
   * Static representation of the [[size]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIZE: NumberField<UserFieldsMd> = new NumberField('Size', UserFieldsMd, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<UserFieldsMd> = new StringField('Description', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[subType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_TYPE: EnumField<UserFieldsMd> = new EnumField('SubType', UserFieldsMd);
  /**
   * Static representation of the [[linkedTable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_TABLE: StringField<UserFieldsMd> = new StringField('LinkedTable', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[defaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_VALUE: StringField<UserFieldsMd> = new StringField('DefaultValue', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[tableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_NAME: StringField<UserFieldsMd> = new StringField('TableName', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: NumberField<UserFieldsMd> = new NumberField('FieldID', UserFieldsMd, 'Edm.Int32');
  /**
   * Static representation of the [[editSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDIT_SIZE: NumberField<UserFieldsMd> = new NumberField('EditSize', UserFieldsMd, 'Edm.Int32');
  /**
   * Static representation of the [[mandatory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANDATORY: EnumField<UserFieldsMd> = new EnumField('Mandatory', UserFieldsMd);
  /**
   * Static representation of the [[linkedUdo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_UDO: StringField<UserFieldsMd> = new StringField('LinkedUDO', UserFieldsMd, 'Edm.String');
  /**
   * Static representation of the [[linkedSystemObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_SYSTEM_OBJECT: EnumField<UserFieldsMd> = new EnumField('LinkedSystemObject', UserFieldsMd);
  /**
   * Static representation of the [[validValuesMd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_VALUES_MD: CollectionField<UserFieldsMd, ValidValueMd> = new CollectionField('ValidValuesMD', UserFieldsMd, ValidValueMd);
  /**
   * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TABLES_MD: OneToOneLink<UserFieldsMd, UserTablesMd> = new OneToOneLink('UserTablesMD', UserFieldsMd, UserTablesMd);
  /**
   * All fields of the UserFieldsMd entity.
   */
  export const _allFields: Array<StringField<UserFieldsMd> | EnumField<UserFieldsMd> | NumberField<UserFieldsMd> | CollectionField<UserFieldsMd, ValidValueMd> | OneToOneLink<UserFieldsMd, UserTablesMd>> = [
    UserFieldsMd.NAME,
    UserFieldsMd.TYPE,
    UserFieldsMd.SIZE,
    UserFieldsMd.DESCRIPTION,
    UserFieldsMd.SUB_TYPE,
    UserFieldsMd.LINKED_TABLE,
    UserFieldsMd.DEFAULT_VALUE,
    UserFieldsMd.TABLE_NAME,
    UserFieldsMd.FIELD_ID,
    UserFieldsMd.EDIT_SIZE,
    UserFieldsMd.MANDATORY,
    UserFieldsMd.LINKED_UDO,
    UserFieldsMd.LINKED_SYSTEM_OBJECT,
    UserFieldsMd.VALID_VALUES_MD,
    UserFieldsMd.USER_TABLES_MD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserFieldsMd> = new AllFields('*', UserFieldsMd);
  /**
   * All key fields of the UserFieldsMd entity.
   */
  export const _keyFields: Array<Field<UserFieldsMd>> = [UserFieldsMd.TABLE_NAME, UserFieldsMd.FIELD_ID];
  /**
   * Mapping of all key field names to the respective static field property UserFieldsMd.
   */
  export const _keys: { [keys: string]: Field<UserFieldsMd> } = UserFieldsMd._keyFields.reduce((acc: { [keys: string]: Field<UserFieldsMd> }, field: Field<UserFieldsMd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
