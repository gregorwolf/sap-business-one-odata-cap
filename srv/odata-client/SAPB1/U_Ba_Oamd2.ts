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
import type { U_Ba_Oamd2Api } from './U_Ba_Oamd2Api';

/**
 * This class represents the entity "U_BA_OAMD2" of service "SAPB1".
 */
export class U_Ba_Oamd2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Oamd2Type<T>
{
  /**
   * Technical entity name for U_Ba_Oamd2.
   */
  static _entityName = 'U_BA_OAMD2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Oamd2 entity
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
   * U Asst Num.
   * @nullable
   */
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr Date.
   * @nullable
   */
  uDprDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Use Life.
   * @nullable
   */
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rem Life.
   * @nullable
   */
  uRemLife?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr Typ Id.
   * @nullable
   */
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Typ Ca.
   * @nullable
   */
  uDprTypCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Use Life C.
   * @nullable
   */
  uUseLifeC?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Ba_Oamd2Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Oamd2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;
  uRemLife?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  uDprTypCa?: DeserializedType<T, 'Edm.String'> | null;
  uUseLifeC?: DeserializedType<T, 'Edm.Int32'> | null;
}
