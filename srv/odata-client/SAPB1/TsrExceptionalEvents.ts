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
import type { TsrExceptionalEventsApi } from './TsrExceptionalEventsApi';

/**
 * This class represents the entity "TSRExceptionalEvents" of service "SAPB1".
 */
export class TsrExceptionalEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TsrExceptionalEventsType<T>
{
  /**
   * Technical entity name for TsrExceptionalEvents.
   */
  static _entityName = 'TSRExceptionalEvents';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TsrExceptionalEvents entity
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

  constructor(readonly _entityApi: TsrExceptionalEventsApi<T>) {
    super(_entityApi);
  }
}

export interface TsrExceptionalEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
