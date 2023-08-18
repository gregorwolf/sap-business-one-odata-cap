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
import { QueryCategories } from './QueryCategories';

/**
 * Request builder class for operations supported on the {@link QueryCategories} entity.
 */
export class QueryCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QueryCategories<T>, T> {
  /**
   * Returns a request builder for retrieving one `QueryCategories` entity based on its keys.
   * @param code Key property. See {@link QueryCategories.code}.
   * @returns A request builder for creating requests to retrieve one `QueryCategories` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<QueryCategories<T>, T> {
    return new GetByKeyRequestBuilder<QueryCategories<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `QueryCategories` entities.
   * @returns A request builder for creating requests to retrieve all `QueryCategories` entities.
   */
  getAll(): GetAllRequestBuilder<QueryCategories<T>, T> {
    return new GetAllRequestBuilder<QueryCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `QueryCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QueryCategories`.
   */
  create(
    entity: QueryCategories<T>
  ): CreateRequestBuilder<QueryCategories<T>, T> {
    return new CreateRequestBuilder<QueryCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QueryCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QueryCategories`.
   */
  update(
    entity: QueryCategories<T>
  ): UpdateRequestBuilder<QueryCategories<T>, T> {
    return new UpdateRequestBuilder<QueryCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QueryCategories`.
   * @param code Key property. See {@link QueryCategories.code}.
   * @returns A request builder for creating requests that delete an entity of type `QueryCategories`.
   */
  delete(code: number): DeleteRequestBuilder<QueryCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QueryCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QueryCategories` by taking the entity as a parameter.
   */
  delete(
    entity: QueryCategories<T>
  ): DeleteRequestBuilder<QueryCategories<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<QueryCategories<T>, T> {
    return new DeleteRequestBuilder<QueryCategories<T>, T>(
      this.entityApi,
      codeOrEntity instanceof QueryCategories
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
