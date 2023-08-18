/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { SqlQueries } from './SqlQueries';

/**
 * Request builder class for operations supported on the {@link SqlQueries} entity.
 */
export class SqlQueriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SqlQueries<T>, T> {
  /**
   * Returns a request builder for retrieving one `SqlQueries` entity based on its keys.
   * @param sqlCode Key property. See {@link SqlQueries.sqlCode}.
   * @returns A request builder for creating requests to retrieve one `SqlQueries` entity based on its keys.
   */
  getByKey(
    sqlCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SqlQueries<T>, T> {
    return new GetByKeyRequestBuilder<SqlQueries<T>, T>(this.entityApi, {
      SqlCode: sqlCode
    });
  }

  /**
   * Returns a request builder for querying all `SqlQueries` entities.
   * @returns A request builder for creating requests to retrieve all `SqlQueries` entities.
   */
  getAll(): GetAllRequestBuilder<SqlQueries<T>, T> {
    return new GetAllRequestBuilder<SqlQueries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SqlQueries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SqlQueries`.
   */
  create(entity: SqlQueries<T>): CreateRequestBuilder<SqlQueries<T>, T> {
    return new CreateRequestBuilder<SqlQueries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SqlQueries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SqlQueries`.
   */
  update(entity: SqlQueries<T>): UpdateRequestBuilder<SqlQueries<T>, T> {
    return new UpdateRequestBuilder<SqlQueries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SqlQueries`.
   * @param sqlCode Key property. See {@link SqlQueries.sqlCode}.
   * @returns A request builder for creating requests that delete an entity of type `SqlQueries`.
   */
  delete(sqlCode: string): DeleteRequestBuilder<SqlQueries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SqlQueries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SqlQueries` by taking the entity as a parameter.
   */
  delete(entity: SqlQueries<T>): DeleteRequestBuilder<SqlQueries<T>, T>;
  delete(sqlCodeOrEntity: any): DeleteRequestBuilder<SqlQueries<T>, T> {
    return new DeleteRequestBuilder<SqlQueries<T>, T>(
      this.entityApi,
      sqlCodeOrEntity instanceof SqlQueries
        ? sqlCodeOrEntity
        : { SqlCode: sqlCodeOrEntity! }
    );
  }
}
