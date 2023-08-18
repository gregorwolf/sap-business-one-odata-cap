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
import type { U_BoquotApi } from './U_BoquotApi';

/**
 * This class represents the entity "U_BOQUOT" of service "SAPB1".
 */
export class U_Boquot<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BoquotType<T>
{
  /**
   * Technical entity name for U_Boquot.
   */
  static _entityName = 'U_BOQUOT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Boquot entity
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
   * U My Q.
   * @nullable
   */
  uMyQ?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Status.
   * @nullable
   */
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U From D.
   * @nullable
   */
  uFromD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U To D.
   * @nullable
   */
  uToD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Last Ds.
   * @nullable
   */
  uLastDs?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_BoquotApi<T>) {
    super(_entityApi);
  }
}

export interface U_BoquotType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uMyQ?: DeserializedType<T, 'Edm.Int32'> | null;
  uStatus?: DeserializedType<T, 'Edm.Int32'> | null;
  uFromD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uToD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uLastDs?: DeserializedType<T, 'Edm.Int32'> | null;
}
