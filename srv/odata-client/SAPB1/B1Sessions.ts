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
import type { B1SessionsApi } from './B1SessionsApi';

/**
 * This class represents the entity "B1Sessions" of service "SAPB1".
 */
export class B1Sessions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements B1SessionsType<T>
{
  /**
   * Technical entity name for B1Sessions.
   */
  static _entityName = 'B1Sessions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the B1Sessions entity
   */
  static _keys = ['SessionId'];
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Session Timeout.
   * @nullable
   */
  sessionTimeout?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Session Id.
   */
  sessionId!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: B1SessionsApi<T>) {
    super(_entityApi);
  }
}

export interface B1SessionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  version?: DeserializedType<T, 'Edm.String'> | null;
  sessionTimeout?: DeserializedType<T, 'Edm.Int32'> | null;
  sessionId: DeserializedType<T, 'Edm.String'>;
}
