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
import type { KalkulationApi } from './KalkulationApi';

/**
 * This class represents the entity "Kalkulation" of service "SAPB1".
 */
export class Kalkulation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KalkulationType<T>
{
  /**
   * Technical entity name for Kalkulation.
   */
  static _entityName = 'Kalkulation';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Kalkulation entity
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
   * U Artikelgruppe.
   * @nullable
   */
  uArtikelgruppe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Warengruppe.
   * @nullable
   */
  uWarengruppe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Beschreibung.
   * @nullable
   */
  uBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L 1.
   * @nullable
   */
  uL1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L 2.
   * @nullable
   */
  uL2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L 3.
   * @nullable
   */
  uL3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L 4.
   * @nullable
   */
  uL4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L 5.
   * @nullable
   */
  uL5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S 1.
   * @nullable
   */
  uS1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S 2.
   * @nullable
   */
  uS2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S 3.
   * @nullable
   */
  uS3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S 4.
   * @nullable
   */
  uS4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S 5.
   * @nullable
   */
  uS5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U A 1.
   * @nullable
   */
  uA1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U A 2.
   * @nullable
   */
  uA2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U A 3.
   * @nullable
   */
  uA3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U A 4.
   * @nullable
   */
  uA4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U A 5.
   * @nullable
   */
  uA5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I 1.
   * @nullable
   */
  uI1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I 2.
   * @nullable
   */
  uI2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I 3.
   * @nullable
   */
  uI3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I 4.
   * @nullable
   */
  uI4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I 5.
   * @nullable
   */
  uI5?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: KalkulationApi<T>) {
    super(_entityApi);
  }
}

export interface KalkulationType<
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
  uArtikelgruppe?: DeserializedType<T, 'Edm.String'> | null;
  uWarengruppe?: DeserializedType<T, 'Edm.String'> | null;
  uBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  uL1?: DeserializedType<T, 'Edm.String'> | null;
  uL2?: DeserializedType<T, 'Edm.String'> | null;
  uL3?: DeserializedType<T, 'Edm.String'> | null;
  uL4?: DeserializedType<T, 'Edm.String'> | null;
  uL5?: DeserializedType<T, 'Edm.String'> | null;
  uS1?: DeserializedType<T, 'Edm.String'> | null;
  uS2?: DeserializedType<T, 'Edm.String'> | null;
  uS3?: DeserializedType<T, 'Edm.String'> | null;
  uS4?: DeserializedType<T, 'Edm.String'> | null;
  uS5?: DeserializedType<T, 'Edm.String'> | null;
  uA1?: DeserializedType<T, 'Edm.String'> | null;
  uA2?: DeserializedType<T, 'Edm.String'> | null;
  uA3?: DeserializedType<T, 'Edm.String'> | null;
  uA4?: DeserializedType<T, 'Edm.String'> | null;
  uA5?: DeserializedType<T, 'Edm.String'> | null;
  uI1?: DeserializedType<T, 'Edm.String'> | null;
  uI2?: DeserializedType<T, 'Edm.String'> | null;
  uI3?: DeserializedType<T, 'Edm.String'> | null;
  uI4?: DeserializedType<T, 'Edm.String'> | null;
  uI5?: DeserializedType<T, 'Edm.String'> | null;
}
