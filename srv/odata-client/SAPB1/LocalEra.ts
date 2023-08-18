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
import type { LocalEraApi } from './LocalEraApi';

/**
 * This class represents the entity "LocalEra" of service "SAPB1".
 */
export class LocalEra<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LocalEraType<T>
{
  /**
   * Technical entity name for LocalEra.
   */
  static _entityName = 'LocalEra';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the LocalEra entity
   */
  static _keys = ['Code'];
  /**
   * Era Name.
   * @nullable
   */
  eraName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: LocalEraApi<T>) {
    super(_entityApi);
  }
}

export interface LocalEraType<T extends DeSerializers = DefaultDeSerializers> {
  eraName?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  code: DeserializedType<T, 'Edm.String'>;
}
