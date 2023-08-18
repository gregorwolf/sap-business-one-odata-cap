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
import type { U_BbhbcsApi } from './U_BbhbcsApi';

/**
 * This class represents the entity "U_BBHBCS" of service "SAPB1".
 */
export class U_Bbhbcs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BbhbcsType<T>
{
  /**
   * Technical entity name for U_Bbhbcs.
   */
  static _entityName = 'U_BBHBCS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bbhbcs entity
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
   * U Code.
   * @nullable
   */
  uCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bc Code.
   * @nullable
   */
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sort Num.
   * @nullable
   */
  uSortNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Crt Date.
   * @nullable
   */
  uCrtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Mod Date.
   * @nullable
   */
  uModDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U User.
   * @nullable
   */
  uUser?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Min Rels.
   * @nullable
   */
  uMinRels?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Max Rels.
   * @nullable
   */
  uMaxRels?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_BbhbcsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BbhbcsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uCode?: DeserializedType<T, 'Edm.String'> | null;
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  uSortNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uCrtDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uModDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uUser?: DeserializedType<T, 'Edm.Int32'> | null;
  uMinRels?: DeserializedType<T, 'Edm.Int32'> | null;
  uMaxRels?: DeserializedType<T, 'Edm.Int32'> | null;
}
