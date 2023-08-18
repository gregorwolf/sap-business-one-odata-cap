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
import type { U_Sn_UrlApi } from './U_Sn_UrlApi';

/**
 * This class represents the entity "U_SN_URL" of service "SAPB1".
 */
export class U_Sn_Url<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Sn_UrlType<T>
{
  /**
   * Technical entity name for U_Sn_Url.
   */
  static _entityName = 'U_SN_URL';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Sn_Url entity
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
   * U Url.
   * @nullable
   */
  uUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Sn_UrlApi<T>) {
    super(_entityApi);
  }
}

export interface U_Sn_UrlType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uUrl?: DeserializedType<T, 'Edm.String'> | null;
}
