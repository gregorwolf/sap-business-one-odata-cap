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
import type { QueryCategoriesApi } from './QueryCategoriesApi';
import { UserQueries, UserQueriesType } from './UserQueries';

/**
 * This class represents the entity "QueryCategories" of service "SAPB1".
 */
export class QueryCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QueryCategoriesType<T>
{
  /**
   * Technical entity name for QueryCategories.
   */
  static _entityName = 'QueryCategories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the QueryCategories entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Permissions.
   * @nullable
   */
  permissions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link UserQueries} entity.
   */
  userQueries!: UserQueries<T>[];

  constructor(readonly _entityApi: QueryCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface QueryCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  permissions?: DeserializedType<T, 'Edm.String'> | null;
  userQueries: UserQueriesType<T>[];
}
