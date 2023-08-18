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
import type { U_BeolicApi } from './U_BeolicApi';

/**
 * This class represents the entity "U_BEOLIC" of service "SAPB1".
 */
export class U_Beolic<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BeolicType<T>
{
  /**
   * Technical entity name for U_Beolic.
   */
  static _entityName = 'U_BEOLIC';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Beolic entity
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
   * U Beuser.
   * @nullable
   */
  uBeuser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bedate.
   * @nullable
   */
  uBedate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bestat.
   * @nullable
   */
  uBestat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Betesm.
   * @nullable
   */
  uBetesm?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BeolicApi<T>) {
    super(_entityApi);
  }
}

export interface U_BeolicType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBeuser?: DeserializedType<T, 'Edm.String'> | null;
  uBedate?: DeserializedType<T, 'Edm.String'> | null;
  uBestat?: DeserializedType<T, 'Edm.String'> | null;
  uBetesm?: DeserializedType<T, 'Edm.String'> | null;
}
