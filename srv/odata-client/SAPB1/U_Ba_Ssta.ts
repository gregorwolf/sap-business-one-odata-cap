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
import type { U_Ba_SstaApi } from './U_Ba_SstaApi';

/**
 * This class represents the entity "U_BA_SSTA" of service "SAPB1".
 */
export class U_Ba_Ssta<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_SstaType<T>
{
  /**
   * Technical entity name for U_Ba_Ssta.
   */
  static _entityName = 'U_BA_SSTA';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Ssta entity
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
   * U Status Id.
   * @nullable
   */
  uStatusId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Def Name.
   * @nullable
   */
  uDefName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_SstaApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_SstaType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uStatusId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDefName?: DeserializedType<T, 'Edm.String'> | null;
}
