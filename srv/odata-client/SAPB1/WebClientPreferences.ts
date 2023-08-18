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
import type { WebClientPreferencesApi } from './WebClientPreferencesApi';

/**
 * This class represents the entity "WebClientPreferences" of service "SAPB1".
 */
export class WebClientPreferences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientPreferencesType<T>
{
  /**
   * Technical entity name for WebClientPreferences.
   */
  static _entityName = 'WebClientPreferences';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientPreferences entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Name.
   * @nullable
   */
  columnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Value.
   * @nullable
   */
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: WebClientPreferencesApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientPreferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  columnName?: DeserializedType<T, 'Edm.String'> | null;
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
}
