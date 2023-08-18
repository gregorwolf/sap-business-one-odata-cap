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
import type { RouteStagesApi } from './RouteStagesApi';

/**
 * This class represents the entity "RouteStages" of service "SAPB1".
 */
export class RouteStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteStagesType<T>
{
  /**
   * Technical entity name for RouteStages.
   */
  static _entityName = 'RouteStages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the RouteStages entity
   */
  static _keys = ['InternalNumber'];
  /**
   * Internal Number.
   */
  internalNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Generation Time.
   * @nullable
   */
  generationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Date Of Update.
   * @nullable
   */
  dateOfUpdate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: RouteStagesApi<T>) {
    super(_entityApi);
  }
}

export interface RouteStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  internalNumber: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  generationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  dateOfUpdate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
