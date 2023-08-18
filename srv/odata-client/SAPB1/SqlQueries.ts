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
import type { SqlQueriesApi } from './SqlQueriesApi';

/**
 * This class represents the entity "SQLQueries" of service "SAPB1".
 */
export class SqlQueries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SqlQueriesType<T>
{
  /**
   * Technical entity name for SqlQueries.
   */
  static _entityName = 'SQLQueries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SqlQueries entity
   */
  static _keys = ['SqlCode'];
  /**
   * Sql Code.
   */
  sqlCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sql Name.
   * @nullable
   */
  sqlName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sql Text.
   * @nullable
   */
  sqlText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Param List.
   * @nullable
   */
  paramList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: SqlQueriesApi<T>) {
    super(_entityApi);
  }
}

export interface SqlQueriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sqlCode: DeserializedType<T, 'Edm.String'>;
  sqlName?: DeserializedType<T, 'Edm.String'> | null;
  sqlText?: DeserializedType<T, 'Edm.String'> | null;
  paramList?: DeserializedType<T, 'Edm.String'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
