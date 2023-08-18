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
import type { U_Ba_Ssta1Api } from './U_Ba_Ssta1Api';

/**
 * This class represents the entity "U_BA_SSTA1" of service "SAPB1".
 */
export class U_Ba_Ssta1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Ssta1Type<T>
{
  /**
   * Technical entity name for U_Ba_Ssta1.
   */
  static _entityName = 'U_BA_SSTA1';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Ssta1 entity
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
   * U Lang.
   * @nullable
   */
  uLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Name.
   * @nullable
   */
  uName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Country.
   * @nullable
   */
  uCountry?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_Ssta1Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Ssta1Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uStatusId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLang?: DeserializedType<T, 'Edm.String'> | null;
  uName?: DeserializedType<T, 'Edm.String'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  uCountry?: DeserializedType<T, 'Edm.String'> | null;
}
