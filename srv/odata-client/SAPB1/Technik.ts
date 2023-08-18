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
import type { TechnikApi } from './TechnikApi';

/**
 * This class represents the entity "Technik" of service "SAPB1".
 */
export class Technik<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TechnikType<T>
{
  /**
   * Technical entity name for Technik.
   */
  static _entityName = 'Technik';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Technik entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Period.
   * @nullable
   */
  period?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Instance.
   * @nullable
   */
  instance?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Handwrtten.
   * @nullable
   */
  handwrtten?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Status.
   * @nullable
   */
  requestStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creator.
   * @nullable
   */
  creator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remark.
   * @nullable
   */
  remark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
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
   * U Card Code.
   * @nullable
   */
  uCardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Typ.
   */
  uTyp!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Time.
   */
  uTime!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: TechnikApi<T>) {
    super(_entityApi);
  }
}

export interface TechnikType<T extends DeSerializers = DefaultDeSerializers> {
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  period?: DeserializedType<T, 'Edm.Int32'> | null;
  instance?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  handwrtten?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  requestStatus?: DeserializedType<T, 'Edm.String'> | null;
  creator?: DeserializedType<T, 'Edm.String'> | null;
  remark?: DeserializedType<T, 'Edm.String'> | null;
  docEntry: DeserializedType<T, 'Edm.Int32'>;
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
  uCardCode?: DeserializedType<T, 'Edm.String'> | null;
  uTyp: DeserializedType<T, 'Edm.String'>;
  uTime: DeserializedType<T, 'Edm.Int32'>;
}
