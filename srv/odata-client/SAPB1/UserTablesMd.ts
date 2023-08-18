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
import type { UserTablesMdApi } from './UserTablesMdApi';
import { BoUtbTableType } from './BoUtbTableType';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UserFieldsMd, UserFieldsMdType } from './UserFieldsMd';
import { UserObjectsMd, UserObjectsMdType } from './UserObjectsMd';

/**
 * This class represents the entity "UserTablesMD" of service "SAPB1".
 */
export class UserTablesMd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserTablesMdType<T>
{
  /**
   * Technical entity name for UserTablesMd.
   */
  static _entityName = 'UserTablesMD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserTablesMd entity
   */
  static _keys = ['TableName'];
  /**
   * Table Name.
   */
  tableName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Description.
   * @nullable
   */
  tableDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Type.
   * @nullable
   */
  tableType?: BoUtbTableType | null;
  /**
   * Archivable.
   * @nullable
   */
  archivable?: BoYesNoEnum | null;
  /**
   * Archive Date Field.
   * @nullable
   */
  archiveDateField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Menu.
   * @nullable
   */
  displayMenu?: BoYesNoEnum | null;
  /**
   * Apply Authorization.
   * @nullable
   */
  applyAuthorization?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link UserFieldsMd} entity.
   */
  userFieldsMd!: UserFieldsMd<T>[];
  /**
   * One-to-many navigation property to the {@link UserObjectsMd} entity.
   */
  userObjectsMd!: UserObjectsMd<T>[];

  constructor(readonly _entityApi: UserTablesMdApi<T>) {
    super(_entityApi);
  }
}

export interface UserTablesMdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tableName: DeserializedType<T, 'Edm.String'>;
  tableDescription?: DeserializedType<T, 'Edm.String'> | null;
  tableType?: BoUtbTableType | null;
  archivable?: BoYesNoEnum | null;
  archiveDateField?: DeserializedType<T, 'Edm.String'> | null;
  displayMenu?: BoYesNoEnum | null;
  applyAuthorization?: BoYesNoEnum | null;
  userFieldsMd: UserFieldsMdType<T>[];
  userObjectsMd: UserObjectsMdType<T>[];
}
