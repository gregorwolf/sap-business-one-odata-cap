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
import type { U_BcesettApi } from './U_BcesettApi';

/**
 * This class represents the entity "U_BCESETT" of service "SAPB1".
 */
export class U_Bcesett<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BcesettType<T>
{
  /**
   * Technical entity name for U_Bcesett.
   */
  static _entityName = 'U_BCESETT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bcesett entity
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
   * U Cpy Method.
   * @nullable
   */
  uCpyMethod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rtcf.
   * @nullable
   */
  uRtcf?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Frfmudf.
   * @nullable
   */
  uFrfmudf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fbackup.
   * @nullable
   */
  uFbackup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cf Folder.
   * @nullable
   */
  uCfFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ws Folder.
   * @nullable
   */
  uWsFolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Lf Folder.
   * @nullable
   */
  uLfFolder?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BcesettApi<T>) {
    super(_entityApi);
  }
}

export interface U_BcesettType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uCpyMethod?: DeserializedType<T, 'Edm.Int32'> | null;
  uRtcf?: DeserializedType<T, 'Edm.Int32'> | null;
  uFrfmudf?: DeserializedType<T, 'Edm.String'> | null;
  uFbackup?: DeserializedType<T, 'Edm.String'> | null;
  uCfFolder?: DeserializedType<T, 'Edm.String'> | null;
  uWsFolder?: DeserializedType<T, 'Edm.String'> | null;
  uLfFolder?: DeserializedType<T, 'Edm.String'> | null;
}
