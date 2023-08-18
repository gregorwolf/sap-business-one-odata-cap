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
import type { U_BboatvApi } from './U_BboatvApi';

/**
 * This class represents the entity "U_BBOATV" of service "SAPB1".
 */
export class U_Bboatv<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BboatvType<T>
{
  /**
   * Technical entity name for U_Bboatv.
   */
  static _entityName = 'U_BBOATV';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bboatv entity
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
   * U Code Atv.
   * @nullable
   */
  uCodeAtv?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Languag.
   * @nullable
   */
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Name.
   * @nullable
   */
  uName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Level.
   * @nullable
   */
  uLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Enable.
   * @nullable
   */
  uEnable?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BboatvApi<T>) {
    super(_entityApi);
  }
}

export interface U_BboatvType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uCodeAtv?: DeserializedType<T, 'Edm.Int32'> | null;
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  uName?: DeserializedType<T, 'Edm.String'> | null;
  uLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  uEnable?: DeserializedType<T, 'Edm.String'> | null;
}
