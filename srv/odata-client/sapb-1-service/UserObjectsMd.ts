/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserObjectsMdRequestBuilder } from './UserObjectsMdRequestBuilder';
import { UserObjectMdChildTable } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn } from './UserObjectMdEnhancedFormColumn';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoUdoObjType } from './BoUdoObjType';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
export class UserObjectsMd extends EntityV4 implements UserObjectsMdType {
  /**
   * Technical entity name for UserObjectsMd.
   */
  static _entityName = 'UserObjectsMD';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Can Create Default Form.
   * @nullable
   */
  canCreateDefaultForm?: BoYesNoEnum;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: BoUdoObjType;
  /**
   * Extension Name.
   * @nullable
   */
  extensionName?: string;
  /**
   * Can Cancel.
   * @nullable
   */
  canCancel?: BoYesNoEnum;
  /**
   * Can Delete.
   * @nullable
   */
  canDelete?: BoYesNoEnum;
  /**
   * Can Log.
   * @nullable
   */
  canLog?: BoYesNoEnum;
  /**
   * Manage Series.
   * @nullable
   */
  manageSeries?: BoYesNoEnum;
  /**
   * Can Find.
   * @nullable
   */
  canFind?: BoYesNoEnum;
  /**
   * Can Year Transfer.
   * @nullable
   */
  canYearTransfer?: BoYesNoEnum;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Can Close.
   * @nullable
   */
  canClose?: BoYesNoEnum;
  /**
   * Overwrite Dllfile.
   * @nullable
   */
  overwriteDllfile?: BoYesNoEnum;
  /**
   * Use Unique Form Type.
   * @nullable
   */
  useUniqueFormType?: BoYesNoEnum;
  /**
   * Can Archive.
   * @nullable
   */
  canArchive?: BoYesNoEnum;
  /**
   * Menu Item.
   * @nullable
   */
  menuItem?: BoYesNoEnum;
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
   * Enable Enhanced Form.
   * @nullable
   */
  enableEnhancedForm?: BoYesNoEnum;
  /**
   * Rebuild Enhanced Form.
   * @nullable
   */
  rebuildEnhancedForm?: BoYesNoEnum;
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
   * Returns an entity builder to construct instances of `UserObjectsMd`.
   * @returns A builder that constructs instances of entity type `UserObjectsMd`.
   */
  static builder(): EntityBuilderType<UserObjectsMd, UserObjectsMdType> {
    return EntityV4.entityBuilder(UserObjectsMd);
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
  static customField(fieldName: string): CustomFieldV4<UserObjectsMd> {
    return EntityV4.customFieldSelector(fieldName, UserObjectsMd);
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
  tableName?: string | null;
  code?: string | null;
  logTableName?: string | null;
  canCreateDefaultForm?: BoYesNoEnum | null;
  objectType?: BoUdoObjType | null;
  extensionName?: string | null;
  canCancel?: BoYesNoEnum | null;
  canDelete?: BoYesNoEnum | null;
  canLog?: BoYesNoEnum | null;
  manageSeries?: BoYesNoEnum | null;
  canFind?: BoYesNoEnum | null;
  canYearTransfer?: BoYesNoEnum | null;
  name?: string | null;
  canClose?: BoYesNoEnum | null;
  overwriteDllfile?: BoYesNoEnum | null;
  useUniqueFormType?: BoYesNoEnum | null;
  canArchive?: BoYesNoEnum | null;
  menuItem?: BoYesNoEnum | null;
  menuCaption?: string | null;
  fatherMenuId?: number | null;
  position?: number | null;
  menuUid?: string | null;
  enableEnhancedForm?: BoYesNoEnum | null;
  rebuildEnhancedForm?: BoYesNoEnum | null;
  formSrf?: string | null;
  userObjectMdChildTables?: UserObjectMdChildTable[] | null;
  userObjectMdFindColumns?: UserObjectMdFindColumn[] | null;
  userObjectMdFormColumns?: UserObjectMdFormColumn[] | null;
  userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[] | null;
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
   * Static representation of the [[canCreateDefaultForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_CREATE_DEFAULT_FORM: EnumField<UserObjectsMd> = new EnumField('CanCreateDefaultForm', UserObjectsMd);
  /**
   * Static representation of the [[objectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_TYPE: EnumField<UserObjectsMd> = new EnumField('ObjectType', UserObjectsMd);
  /**
   * Static representation of the [[extensionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTENSION_NAME: StringField<UserObjectsMd> = new StringField('ExtensionName', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[canCancel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_CANCEL: EnumField<UserObjectsMd> = new EnumField('CanCancel', UserObjectsMd);
  /**
   * Static representation of the [[canDelete]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_DELETE: EnumField<UserObjectsMd> = new EnumField('CanDelete', UserObjectsMd);
  /**
   * Static representation of the [[canLog]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_LOG: EnumField<UserObjectsMd> = new EnumField('CanLog', UserObjectsMd);
  /**
   * Static representation of the [[manageSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGE_SERIES: EnumField<UserObjectsMd> = new EnumField('ManageSeries', UserObjectsMd);
  /**
   * Static representation of the [[canFind]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_FIND: EnumField<UserObjectsMd> = new EnumField('CanFind', UserObjectsMd);
  /**
   * Static representation of the [[canYearTransfer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_YEAR_TRANSFER: EnumField<UserObjectsMd> = new EnumField('CanYearTransfer', UserObjectsMd);
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UserObjectsMd> = new StringField('Name', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[canClose]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_CLOSE: EnumField<UserObjectsMd> = new EnumField('CanClose', UserObjectsMd);
  /**
   * Static representation of the [[overwriteDllfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERWRITE_DLLFILE: EnumField<UserObjectsMd> = new EnumField('OverwriteDllfile', UserObjectsMd);
  /**
   * Static representation of the [[useUniqueFormType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_UNIQUE_FORM_TYPE: EnumField<UserObjectsMd> = new EnumField('UseUniqueFormType', UserObjectsMd);
  /**
   * Static representation of the [[canArchive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_ARCHIVE: EnumField<UserObjectsMd> = new EnumField('CanArchive', UserObjectsMd);
  /**
   * Static representation of the [[menuItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_ITEM: EnumField<UserObjectsMd> = new EnumField('MenuItem', UserObjectsMd);
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
   * Static representation of the [[enableEnhancedForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_ENHANCED_FORM: EnumField<UserObjectsMd> = new EnumField('EnableEnhancedForm', UserObjectsMd);
  /**
   * Static representation of the [[rebuildEnhancedForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REBUILD_ENHANCED_FORM: EnumField<UserObjectsMd> = new EnumField('RebuildEnhancedForm', UserObjectsMd);
  /**
   * Static representation of the [[formSrf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SRF: StringField<UserObjectsMd> = new StringField('FormSRF', UserObjectsMd, 'Edm.String');
  /**
   * Static representation of the [[userObjectMdChildTables]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_CHILD_TABLES: CollectionField<UserObjectsMd, UserObjectMdChildTable> = new CollectionField('UserObjectMD_ChildTables', UserObjectsMd, UserObjectMdChildTable);
  /**
   * Static representation of the [[userObjectMdFindColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_FIND_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdFindColumn> = new CollectionField('UserObjectMD_FindColumns', UserObjectsMd, UserObjectMdFindColumn);
  /**
   * Static representation of the [[userObjectMdFormColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_FORM_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdFormColumn> = new CollectionField('UserObjectMD_FormColumns', UserObjectsMd, UserObjectMdFormColumn);
  /**
   * Static representation of the [[userObjectMdEnhancedFormColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdEnhancedFormColumn> = new CollectionField('UserObjectMD_EnhancedFormColumns', UserObjectsMd, UserObjectMdEnhancedFormColumn);
  /**
   * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TABLES_MD: OneToOneLink<UserObjectsMd, UserTablesMd> = new OneToOneLink('UserTablesMD', UserObjectsMd, UserTablesMd);
  /**
   * All fields of the UserObjectsMd entity.
   */
  export const _allFields: Array<StringField<UserObjectsMd> | EnumField<UserObjectsMd> | NumberField<UserObjectsMd> | CollectionField<UserObjectsMd, UserObjectMdChildTable> | CollectionField<UserObjectsMd, UserObjectMdFindColumn> | CollectionField<UserObjectsMd, UserObjectMdFormColumn> | CollectionField<UserObjectsMd, UserObjectMdEnhancedFormColumn> | OneToOneLink<UserObjectsMd, UserTablesMd>> = [
    UserObjectsMd.TABLE_NAME,
    UserObjectsMd.CODE,
    UserObjectsMd.LOG_TABLE_NAME,
    UserObjectsMd.CAN_CREATE_DEFAULT_FORM,
    UserObjectsMd.OBJECT_TYPE,
    UserObjectsMd.EXTENSION_NAME,
    UserObjectsMd.CAN_CANCEL,
    UserObjectsMd.CAN_DELETE,
    UserObjectsMd.CAN_LOG,
    UserObjectsMd.MANAGE_SERIES,
    UserObjectsMd.CAN_FIND,
    UserObjectsMd.CAN_YEAR_TRANSFER,
    UserObjectsMd.NAME,
    UserObjectsMd.CAN_CLOSE,
    UserObjectsMd.OVERWRITE_DLLFILE,
    UserObjectsMd.USE_UNIQUE_FORM_TYPE,
    UserObjectsMd.CAN_ARCHIVE,
    UserObjectsMd.MENU_ITEM,
    UserObjectsMd.MENU_CAPTION,
    UserObjectsMd.FATHER_MENU_ID,
    UserObjectsMd.POSITION,
    UserObjectsMd.MENU_UID,
    UserObjectsMd.ENABLE_ENHANCED_FORM,
    UserObjectsMd.REBUILD_ENHANCED_FORM,
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
