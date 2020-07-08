/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserObjectsMdRequestBuilder } from './UserObjectsMdRequestBuilder';
import { UserObjectMdChildTable, UserObjectMdChildTableField } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn, UserObjectMdFindColumnField } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn, UserObjectMdFormColumnField } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn, UserObjectMdEnhancedFormColumnField } from './UserObjectMdEnhancedFormColumn';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
export class UserObjectsMd extends Entity implements UserObjectsMdType {
  /**
   * Technical entity name for UserObjectsMd.
   */
  static _entityName = 'UserObjectsMD';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserObjectsMd.
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
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Log Table Name.
   * @nullable
   */
  logTableName?: string;
  /**
   * Extension Name.
   * @nullable
   */
  extensionName?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Menu Caption.
   * @nullable
   */
  menuCaption?: string;
  /**
   * Father Menu Id.
   * @nullable
   */
  fatherMenuId?: number;
  /**
   * Position.
   * @nullable
   */
  position?: number;
  /**
   * Menu Uid.
   * @nullable
   */
  menuUid?: string;
  /**
   * Form Srf.
   * @nullable
   */
  formSrf?: string;
  /**
   * User Object Md Child Tables.
   * @nullable
   */
  userObjectMdChildTables?: UserObjectMdChildTable[];
  /**
   * User Object Md Find Columns.
   * @nullable
   */
  userObjectMdFindColumns?: UserObjectMdFindColumn[];
  /**
   * User Object Md Form Columns.
   * @nullable
   */
  userObjectMdFormColumns?: UserObjectMdFormColumn[];
  /**
   * User Object Md Enhanced Form Columns.
   * @nullable
   */
  userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[];
  /**
   * One-to-one navigation property to the [[UserTablesMd]] entity.
   */
  userTablesMd!: UserTablesMd;

  /**
   * Returns an entity builder to construct instances `UserObjectsMd`.
   * @returns A builder that constructs instances of entity type `UserObjectsMd`.
   */
  static builder(): EntityBuilderType<UserObjectsMd, UserObjectsMdTypeForceMandatory> {
    return Entity.entityBuilder(UserObjectsMd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserObjectsMd` entity type.
   * @returns A `UserObjectsMd` request builder.
   */
  static requestBuilder(): UserObjectsMdRequestBuilder {
    return new UserObjectsMdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserObjectsMd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserObjectsMd`.
   */
  static customField(fieldName: string): CustomField<UserObjectsMd> {
    return Entity.customFieldSelector(fieldName, UserObjectsMd);
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

export interface UserObjectsMdType {
  tableName?: string;
  code?: string;
  logTableName?: string;
  extensionName?: string;
  name?: string;
  menuCaption?: string;
  fatherMenuId?: number;
  position?: number;
  menuUid?: string;
  formSrf?: string;
  userObjectMdChildTables?: UserObjectMdChildTable[];
  userObjectMdFindColumns?: UserObjectMdFindColumn[];
  userObjectMdFormColumns?: UserObjectMdFormColumn[];
  userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[];
  userTablesMd: UserTablesMdType;
}

export interface UserObjectsMdTypeForceMandatory {
  tableName: string;
  code: string;
  logTableName: string;
  extensionName: string;
  name: string;
  menuCaption: string;
  fatherMenuId: number;
  position: number;
  menuUid: string;
  formSrf: string;
  userObjectMdChildTables: UserObjectMdChildTable[];
  userObjectMdFindColumns: UserObjectMdFindColumn[];
  userObjectMdFormColumns: UserObjectMdFormColumn[];
  userObjectMdEnhancedFormColumns: UserObjectMdEnhancedFormColumn[];
  userTablesMd: UserTablesMdType;
}

export namespace UserObjectsMd {
  /**
   * Static representation of the [[tableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_NAME: StringField<UserObjectsMd> = new StringField('TableName', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<UserObjectsMd> = new StringField('Code', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[logTableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOG_TABLE_NAME: StringField<UserObjectsMd> = new StringField('LogTableName', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[extensionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTENSION_NAME: StringField<UserObjectsMd> = new StringField('ExtensionName', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UserObjectsMd> = new StringField('Name', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[menuCaption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_CAPTION: StringField<UserObjectsMd> = new StringField('MenuCaption', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[fatherMenuId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FATHER_MENU_ID: NumberField<UserObjectsMd> = new NumberField('FatherMenuID', UserObjectsMd, 'Edm.Int32');
  /**
   * Static representation of the [[position]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION: NumberField<UserObjectsMd> = new NumberField('Position', UserObjectsMd, 'Edm.Int32');
  /**
   * Static representation of the [[menuUid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_UID: StringField<UserObjectsMd> = new StringField('MenuUID', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[formSrf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SRF: StringField<UserObjectsMd> = new StringField('FormSRF', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[userObjectMdChildTables]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_CHILD_TABLES: CollectionField<UserObjectsMd> = new CollectionField('UserObjectMD_ChildTables', UserObjectsMd, new UserObjectMdChildTableField('', UserObjectsMd));
  /**
   * Static representation of the [[userObjectMdFindColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_FIND_COLUMNS: CollectionField<UserObjectsMd> = new CollectionField('UserObjectMD_FindColumns', UserObjectsMd, new UserObjectMdFindColumnField('', UserObjectsMd));
  /**
   * Static representation of the [[userObjectMdFormColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_FORM_COLUMNS: CollectionField<UserObjectsMd> = new CollectionField('UserObjectMD_FormColumns', UserObjectsMd, new UserObjectMdFormColumnField('', UserObjectsMd));
  /**
   * Static representation of the [[userObjectMdEnhancedFormColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: CollectionField<UserObjectsMd> = new CollectionField('UserObjectMD_EnhancedFormColumns', UserObjectsMd, new UserObjectMdEnhancedFormColumnField('', UserObjectsMd));
  /**
   * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TABLES_MD: OneToOneLink<UserObjectsMd, UserTablesMd> = new OneToOneLink('UserTablesMD', UserObjectsMd, UserTablesMd);
  /**
   * All fields of the UserObjectsMd entity.
   */
  export const _allFields: Array<StringField<UserObjectsMd> | NumberField<UserObjectsMd> | CollectionField<UserObjectsMd> | OneToOneLink<UserObjectsMd, UserTablesMd>> = [
    UserObjectsMd.TABLE_NAME,
    UserObjectsMd.CODE,
    UserObjectsMd.LOG_TABLE_NAME,
    UserObjectsMd.EXTENSION_NAME,
    UserObjectsMd.NAME,
    UserObjectsMd.MENU_CAPTION,
    UserObjectsMd.FATHER_MENU_ID,
    UserObjectsMd.POSITION,
    UserObjectsMd.MENU_UID,
    UserObjectsMd.FORM_SRF,
    UserObjectsMd.USER_OBJECT_MD_CHILD_TABLES,
    UserObjectsMd.USER_OBJECT_MD_FIND_COLUMNS,
    UserObjectsMd.USER_OBJECT_MD_FORM_COLUMNS,
    UserObjectsMd.USER_OBJECT_MD_ENHANCED_FORM_COLUMNS,
    UserObjectsMd.USER_TABLES_MD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserObjectsMd> = new AllFields('*', UserObjectsMd);
  /**
   * All key fields of the UserObjectsMd entity.
   */
  export const _keyFields: Array<Field<UserObjectsMd>> = [UserObjectsMd.CODE];
  /**
   * Mapping of all key field names to the respective static field property UserObjectsMd.
   */
  export const _keys: { [keys: string]: Field<UserObjectsMd> } = UserObjectsMd._keyFields.reduce((acc: { [keys: string]: Field<UserObjectsMd> }, field: Field<UserObjectsMd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
