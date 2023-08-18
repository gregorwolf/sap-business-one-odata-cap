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
import type { U_BoodfsApi } from './U_BoodfsApi';

/**
 * This class represents the entity "U_BOODFS" of service "SAPB1".
 */
export class U_Boodfs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BoodfsType<T>
{
  /**
   * Technical entity name for U_Boodfs.
   */
  static _entityName = 'U_BOODFS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Boodfs entity
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
   * U Send Mso.
   * @nullable
   */
  uSendMso?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BoodfsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BoodfsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSendMso?: DeserializedType<T, 'Edm.String'> | null;
}
