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
import type { U_BooadmApi } from './U_BooadmApi';

/**
 * This class represents the entity "U_BOOADM" of service "SAPB1".
 */
export class U_Booadm<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BooadmType<T>
{
  /**
   * Technical entity name for U_Booadm.
   */
  static _entityName = 'U_BOOADM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Booadm entity
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
   * U Lf Path.
   * @nullable
   */
  uLfPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt User.
   * @nullable
   */
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt Time.
   * @nullable
   */
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Chg User.
   * @nullable
   */
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Chg Time.
   * @nullable
   */
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Lfs Path.
   * @nullable
   */
  uLfsPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Version.
   * @nullable
   */
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Host.
   * @nullable
   */
  uHost?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BooadmApi<T>) {
    super(_entityApi);
  }
}

export interface U_BooadmType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLfPath?: DeserializedType<T, 'Edm.String'> | null;
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uLfsPath?: DeserializedType<T, 'Edm.String'> | null;
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  uHost?: DeserializedType<T, 'Edm.String'> | null;
}
