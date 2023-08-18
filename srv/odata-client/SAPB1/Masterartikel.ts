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
import type { MasterartikelApi } from './MasterartikelApi';

/**
 * This class represents the entity "Masterartikel" of service "SAPB1".
 */
export class Masterartikel<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MasterartikelType<T>
{
  /**
   * Technical entity name for Masterartikel.
   */
  static _entityName = 'Masterartikel';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Masterartikel entity
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
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object.
   * @nullable
   */
  object?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Inst.
   * @nullable
   */
  logInst?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * User Sign.
   * @nullable
   */
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transfered.
   * @nullable
   */
  transfered?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Item Code.
   * @nullable
   */
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: MasterartikelApi<T>) {
    super(_entityApi);
  }
}

export interface MasterartikelType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  docEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  object?: DeserializedType<T, 'Edm.String'> | null;
  logInst?: DeserializedType<T, 'Edm.Int32'> | null;
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  transfered?: DeserializedType<T, 'Edm.String'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
}
