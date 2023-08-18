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
import type { U_BosynclogApi } from './U_BosynclogApi';

/**
 * This class represents the entity "U_BOSYNCLOG" of service "SAPB1".
 */
export class U_Bosynclog<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BosynclogType<T>
{
  /**
   * Technical entity name for U_Bosynclog.
   */
  static _entityName = 'U_BOSYNCLOG';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bosynclog entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U User Id.
   * @nullable
   */
  uUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Start.
   * @nullable
   */
  uStart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U End.
   * @nullable
   */
  uEnd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Status.
   * @nullable
   */
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Sync Ca.
   * @nullable
   */
  uSyncCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sync Co.
   * @nullable
   */
  uSyncCo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sync Ta.
   * @nullable
   */
  uSyncTa?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BosynclogApi<T>) {
    super(_entityApi);
  }
}

export interface U_BosynclogType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uUserId?: DeserializedType<T, 'Edm.String'> | null;
  uStart?: DeserializedType<T, 'Edm.String'> | null;
  uEnd?: DeserializedType<T, 'Edm.String'> | null;
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  uSyncCa?: DeserializedType<T, 'Edm.String'> | null;
  uSyncCo?: DeserializedType<T, 'Edm.String'> | null;
  uSyncTa?: DeserializedType<T, 'Edm.String'> | null;
}
