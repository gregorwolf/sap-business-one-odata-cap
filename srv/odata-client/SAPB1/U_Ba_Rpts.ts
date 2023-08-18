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
import type { U_Ba_RptsApi } from './U_Ba_RptsApi';

/**
 * This class represents the entity "U_BA_RPTS" of service "SAPB1".
 */
export class U_Ba_Rpts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_RptsType<T>
{
  /**
   * Technical entity name for U_Ba_Rpts.
   */
  static _entityName = 'U_BA_RPTS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Rpts entity
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
   * U Separately Disp.
   * @nullable
   */
  uSeparatelyDisp?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U From.
   * @nullable
   */
  uFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U To.
   * @nullable
   */
  uTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: U_Ba_RptsApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_RptsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSeparatelyDisp?: DeserializedType<T, 'Edm.Int32'> | null;
  uFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
