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
import type { U_BfextdbversionApi } from './U_BfextdbversionApi';

/**
 * This class represents the entity "U_BFEXTDBVERSION" of service "SAPB1".
 */
export class U_Bfextdbversion<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BfextdbversionType<T>
{
  /**
   * Technical entity name for U_Bfextdbversion.
   */
  static _entityName = 'U_BFEXTDBVERSION';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bfextdbversion entity
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
   * U Ext Id.
   * @nullable
   */
  uExtId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Version.
   * @nullable
   */
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Status.
   * @nullable
   */
  uStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rdate.
   * @nullable
   */
  uRdate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Ef Num.
   * @nullable
   */
  uEfNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BfextdbversionApi<T>) {
    super(_entityApi);
  }
}

export interface U_BfextdbversionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uExtId?: DeserializedType<T, 'Edm.String'> | null;
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  uStatus?: DeserializedType<T, 'Edm.String'> | null;
  uRdate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uEfNum?: DeserializedType<T, 'Edm.String'> | null;
}
