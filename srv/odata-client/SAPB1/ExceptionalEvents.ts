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
import type { ExceptionalEventsApi } from './ExceptionalEventsApi';

/**
 * This class represents the entity "ExceptionalEvents" of service "SAPB1".
 */
export class ExceptionalEvents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExceptionalEventsType<T>
{
  /**
   * Technical entity name for ExceptionalEvents.
   */
  static _entityName = 'ExceptionalEvents';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ExceptionalEvents entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ExceptionalEventsApi<T>) {
    super(_entityApi);
  }
}

export interface ExceptionalEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
