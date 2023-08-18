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
import type { SqlViewsApi } from './SqlViewsApi';

/**
 * This class represents the entity "SQLViews" of service "SAPB1".
 */
export class SqlViews<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SqlViewsType<T>
{
  /**
   * Technical entity name for SqlViews.
   */
  static _entityName = 'SQLViews';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SqlViews entity
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Db Type.
   * @nullable
   */
  dbType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schema Name.
   * @nullable
   */
  schemaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: SqlViewsApi<T>) {
    super(_entityApi);
  }
}

export interface SqlViewsType<T extends DeSerializers = DefaultDeSerializers> {
  name: DeserializedType<T, 'Edm.String'>;
  dbType?: DeserializedType<T, 'Edm.String'> | null;
  schemaName?: DeserializedType<T, 'Edm.String'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
