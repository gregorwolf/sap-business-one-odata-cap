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
import { SqlViews } from './SqlViews';

/**
 * Request builder class for operations supported on the {@link SqlViews} entity.
 */
export class SqlViewsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SqlViews<T>, T> {
  /**
   * Returns a request builder for retrieving one `SqlViews` entity based on its keys.
   * @param name Key property. See {@link SqlViews.name}.
   * @returns A request builder for creating requests to retrieve one `SqlViews` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SqlViews<T>, T> {
    return new GetByKeyRequestBuilder<SqlViews<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for querying all `SqlViews` entities.
   * @returns A request builder for creating requests to retrieve all `SqlViews` entities.
   */
  getAll(): GetAllRequestBuilder<SqlViews<T>, T> {
    return new GetAllRequestBuilder<SqlViews<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SqlViews` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SqlViews`.
   */
  create(entity: SqlViews<T>): CreateRequestBuilder<SqlViews<T>, T> {
    return new CreateRequestBuilder<SqlViews<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SqlViews`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SqlViews`.
   */
  update(entity: SqlViews<T>): UpdateRequestBuilder<SqlViews<T>, T> {
    return new UpdateRequestBuilder<SqlViews<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SqlViews`.
   * @param name Key property. See {@link SqlViews.name}.
   * @returns A request builder for creating requests that delete an entity of type `SqlViews`.
   */
  delete(name: string): DeleteRequestBuilder<SqlViews<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SqlViews`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SqlViews` by taking the entity as a parameter.
   */
  delete(entity: SqlViews<T>): DeleteRequestBuilder<SqlViews<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<SqlViews<T>, T> {
    return new DeleteRequestBuilder<SqlViews<T>, T>(
      this.entityApi,
      nameOrEntity instanceof SqlViews ? nameOrEntity : { Name: nameOrEntity! }
    );
  }
}
