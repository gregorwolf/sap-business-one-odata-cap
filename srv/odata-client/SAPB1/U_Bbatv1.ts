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
import type { U_Bbatv1Api } from './U_Bbatv1Api';

/**
 * This class represents the entity "U_BBATV1" of service "SAPB1".
 */
export class U_Bbatv1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bbatv1Type<T>
{
  /**
   * Technical entity name for U_Bbatv1.
   */
  static _entityName = 'U_BBATV1';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bbatv1 entity
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
   * U Code Atv.
   * @nullable
   */
  uCodeAtv?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Tbl Name.
   * @nullable
   */
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Languag.
   * @nullable
   */
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Descr.
   * @nullable
   */
  uDescr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U All Flds.
   * @nullable
   */
  uAllFlds?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bbatv1Api<T>) {
    super(_entityApi);
  }
}

export interface U_Bbatv1Type<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uCodeAtv?: DeserializedType<T, 'Edm.Int32'> | null;
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  uDescr?: DeserializedType<T, 'Edm.String'> | null;
  uAllFlds?: DeserializedType<T, 'Edm.String'> | null;
}
