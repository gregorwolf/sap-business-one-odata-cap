/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { UserObjectMdChildTable } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn } from './UserObjectMdEnhancedFormColumn';
import type { UserObjectsMdApi } from './UserObjectsMdApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoUdoObjType } from './BoUdoObjType';
import { UserTablesMd, UserTablesMdType } from './UserTablesMd';

/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
export class UserObjectsMd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserObjectsMdType<T>
{
  /**
   * Technical entity name for UserObjectsMd.
   */
  static _entityName = 'UserObjectsMD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserObjectsMd entity
   */
  static _keys = ['Code'];
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Log Table Name.
   * @nullable
   */
  logTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Create Default Form.
   * @nullable
   */
  canCreateDefaultForm?: BoYesNoEnum | null;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: BoUdoObjType | null;
  /**
   * Extension Name.
   * @nullable
   */
  extensionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Cancel.
   * @nullable
   */
  canCancel?: BoYesNoEnum | null;
  /**
   * Can Delete.
   * @nullable
   */
  canDelete?: BoYesNoEnum | null;
  /**
   * Can Log.
   * @nullable
   */
  canLog?: BoYesNoEnum | null;
  /**
   * Manage Series.
   * @nullable
   */
  manageSeries?: BoYesNoEnum | null;
  /**
   * Can Find.
   * @nullable
   */
  canFind?: BoYesNoEnum | null;
  /**
   * Can Year Transfer.
   * @nullable
   */
  canYearTransfer?: BoYesNoEnum | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Close.
   * @nullable
   */
  canClose?: BoYesNoEnum | null;
  /**
   * Overwrite Dllfile.
   * @nullable
   */
  overwriteDllfile?: BoYesNoEnum | null;
  /**
   * Use Unique Form Type.
   * @nullable
   */
  useUniqueFormType?: BoYesNoEnum | null;
  /**
   * Can Archive.
   * @nullable
   */
  canArchive?: BoYesNoEnum | null;
  /**
   * Menu Item.
   * @nullable
   */
  menuItem?: BoYesNoEnum | null;
  /**
   * Menu Caption.
   * @nullable
   */
  menuCaption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Menu Id.
   * @nullable
   */
  fatherMenuId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Menu Uid.
   * @nullable
   */
  menuUid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Enhanced Form.
   * @nullable
   */
  enableEnhancedForm?: BoYesNoEnum | null;
  /**
   * Rebuild Enhanced Form.
   * @nullable
   */
  rebuildEnhancedForm?: BoYesNoEnum | null;
  /**
   * Form Srf.
   * @nullable
   */
  formSrf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Authorization.
   * @nullable
   */
  applyAuthorization?: BoYesNoEnum | null;
  /**
   * User Object Md Child Tables.
   * @nullable
   */
  userObjectMdChildTables?: UserObjectMdChildTable<T>[] | null;
  /**
   * User Object Md Find Columns.
   * @nullable
   */
  userObjectMdFindColumns?: UserObjectMdFindColumn<T>[] | null;
  /**
   * User Object Md Form Columns.
   * @nullable
   */
  userObjectMdFormColumns?: UserObjectMdFormColumn<T>[] | null;
  /**
   * User Object Md Enhanced Form Columns.
   * @nullable
   */
  userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn<T>[] | null;
  /**
   * One-to-one navigation property to the {@link UserTablesMd} entity.
   */
  userTablesMd?: UserTablesMd<T> | null;

  constructor(readonly _entityApi: UserObjectsMdApi<T>) {
    super(_entityApi);
  }
}

export interface UserObjectsMdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  logTableName?: DeserializedType<T, 'Edm.String'> | null;
  canCreateDefaultForm?: BoYesNoEnum | null;
  objectType?: BoUdoObjType | null;
  extensionName?: DeserializedType<T, 'Edm.String'> | null;
  canCancel?: BoYesNoEnum | null;
  canDelete?: BoYesNoEnum | null;
  canLog?: BoYesNoEnum | null;
  manageSeries?: BoYesNoEnum | null;
  canFind?: BoYesNoEnum | null;
  canYearTransfer?: BoYesNoEnum | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  canClose?: BoYesNoEnum | null;
  overwriteDllfile?: BoYesNoEnum | null;
  useUniqueFormType?: BoYesNoEnum | null;
  canArchive?: BoYesNoEnum | null;
  menuItem?: BoYesNoEnum | null;
  menuCaption?: DeserializedType<T, 'Edm.String'> | null;
  fatherMenuId?: DeserializedType<T, 'Edm.Int32'> | null;
  position?: DeserializedType<T, 'Edm.Int32'> | null;
  menuUid?: DeserializedType<T, 'Edm.String'> | null;
  enableEnhancedForm?: BoYesNoEnum | null;
  rebuildEnhancedForm?: BoYesNoEnum | null;
  formSrf?: DeserializedType<T, 'Edm.String'> | null;
  applyAuthorization?: BoYesNoEnum | null;
  userObjectMdChildTables?: UserObjectMdChildTable<T>[] | null;
  userObjectMdFindColumns?: UserObjectMdFindColumn<T>[] | null;
  userObjectMdFormColumns?: UserObjectMdFormColumn<T>[] | null;
  userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn<T>[] | null;
  userTablesMd?: UserTablesMdType<T> | null;
}
