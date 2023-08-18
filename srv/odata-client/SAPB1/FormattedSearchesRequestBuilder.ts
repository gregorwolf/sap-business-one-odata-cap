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
import { FormattedSearches } from './FormattedSearches';

/**
 * Request builder class for operations supported on the {@link FormattedSearches} entity.
 */
export class FormattedSearchesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormattedSearches<T>, T> {
  /**
   * Returns a request builder for retrieving one `FormattedSearches` entity based on its keys.
   * @param index Key property. See {@link FormattedSearches.index}.
   * @returns A request builder for creating requests to retrieve one `FormattedSearches` entity based on its keys.
   */
  getByKey(
    index: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<FormattedSearches<T>, T> {
    return new GetByKeyRequestBuilder<FormattedSearches<T>, T>(this.entityApi, {
      Index: index
    });
  }

  /**
   * Returns a request builder for querying all `FormattedSearches` entities.
   * @returns A request builder for creating requests to retrieve all `FormattedSearches` entities.
   */
  getAll(): GetAllRequestBuilder<FormattedSearches<T>, T> {
    return new GetAllRequestBuilder<FormattedSearches<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormattedSearches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormattedSearches`.
   */
  create(
    entity: FormattedSearches<T>
  ): CreateRequestBuilder<FormattedSearches<T>, T> {
    return new CreateRequestBuilder<FormattedSearches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FormattedSearches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormattedSearches`.
   */
  update(
    entity: FormattedSearches<T>
  ): UpdateRequestBuilder<FormattedSearches<T>, T> {
    return new UpdateRequestBuilder<FormattedSearches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormattedSearches`.
   * @param index Key property. See {@link FormattedSearches.index}.
   * @returns A request builder for creating requests that delete an entity of type `FormattedSearches`.
   */
  delete(index: number): DeleteRequestBuilder<FormattedSearches<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormattedSearches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormattedSearches` by taking the entity as a parameter.
   */
  delete(
    entity: FormattedSearches<T>
  ): DeleteRequestBuilder<FormattedSearches<T>, T>;
  delete(indexOrEntity: any): DeleteRequestBuilder<FormattedSearches<T>, T> {
    return new DeleteRequestBuilder<FormattedSearches<T>, T>(
      this.entityApi,
      indexOrEntity instanceof FormattedSearches
        ? indexOrEntity
        : { Index: indexOrEntity! }
    );
  }
}
