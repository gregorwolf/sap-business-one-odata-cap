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
import type { U_BblogApi } from './U_BblogApi';

/**
 * This class represents the entity "U_BBLOG" of service "SAPB1".
 */
export class U_Bblog<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BblogType<T>
{
  /**
   * Technical entity name for U_Bblog.
   */
  static _entityName = 'U_BBLOG';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bblog entity
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
   * U Log Id.
   * @nullable
   */
  uLogId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bc Code.
   * @nullable
   */
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt Date.
   * @nullable
   */
  uCrtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U User.
   * @nullable
   */
  uUser?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Languag.
   * @nullable
   */
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bcs Type.
   * @nullable
   */
  uBcsType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BblogApi<T>) {
    super(_entityApi);
  }
}

export interface U_BblogType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLogId?: DeserializedType<T, 'Edm.Int32'> | null;
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  uCrtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uUser?: DeserializedType<T, 'Edm.Int32'> | null;
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  uBcsType?: DeserializedType<T, 'Edm.String'> | null;
}
