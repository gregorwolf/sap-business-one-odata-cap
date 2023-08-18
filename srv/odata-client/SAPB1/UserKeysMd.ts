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
import { UserKeysMdElement } from './UserKeysMdElement';
import type { UserKeysMdApi } from './UserKeysMdApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "UserKeysMD" of service "SAPB1".
 */
export class UserKeysMd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserKeysMdType<T>
{
  /**
   * Technical entity name for UserKeysMd.
   */
  static _entityName = 'UserKeysMD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserKeysMd entity
   */
  static _keys = ['TableName', 'KeyIndex'];
  /**
   * Table Name.
   */
  tableName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Key Index.
   */
  keyIndex!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Key Name.
   * @nullable
   */
  keyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique.
   * @nullable
   */
  unique?: BoYesNoEnum | null;
  /**
   * User Keys Md Elements.
   * @nullable
   */
  userKeysMdElements?: UserKeysMdElement<T>[] | null;

  constructor(readonly _entityApi: UserKeysMdApi<T>) {
    super(_entityApi);
  }
}

export interface UserKeysMdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tableName: DeserializedType<T, 'Edm.String'>;
  keyIndex: DeserializedType<T, 'Edm.Int32'>;
  keyName?: DeserializedType<T, 'Edm.String'> | null;
  unique?: BoYesNoEnum | null;
  userKeysMdElements?: UserKeysMdElement<T>[] | null;
}
