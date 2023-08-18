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
import type { U_Ba_CpolApi } from './U_Ba_CpolApi';

/**
 * This class represents the entity "U_BA_CPOL" of service "SAPB1".
 */
export class U_Ba_Cpol<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CpolType<T>
{
  /**
   * Technical entity name for U_Ba_Cpol.
   */
  static _entityName = 'U_BA_CPOL';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cpol entity
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
   * U Depr Tp Id.
   * @nullable
   */
  uDeprTpId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_CpolApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CpolType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDeprTpId?: DeserializedType<T, 'Edm.String'> | null;
}
