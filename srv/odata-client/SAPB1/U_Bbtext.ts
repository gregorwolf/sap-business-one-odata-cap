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
import type { U_BbtextApi } from './U_BbtextApi';

/**
 * This class represents the entity "U_BBTEXT" of service "SAPB1".
 */
export class U_Bbtext<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BbtextType<T>
{
  /**
   * Technical entity name for U_Bbtext.
   */
  static _entityName = 'U_BBTEXT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bbtext entity
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
   * U Bc Code.
   * @nullable
   */
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(readonly _entityApi: U_BbtextApi<T>) {
    super(_entityApi);
  }
}

export interface U_BbtextType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  uDescr?: DeserializedType<T, 'Edm.String'> | null;
}
