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
import { WebClientListviewFilters } from './WebClientListviewFilters';

/**
 * Request builder class for operations supported on the {@link WebClientListviewFilters} entity.
 */
export class WebClientListviewFiltersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientListviewFilters<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientListviewFilters` entity based on its keys.
   * @param guid Key property. See {@link WebClientListviewFilters.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientListviewFilters` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientListviewFilters<T>, T> {
    return new GetByKeyRequestBuilder<WebClientListviewFilters<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientListviewFilters` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientListviewFilters` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientListviewFilters<T>, T> {
    return new GetAllRequestBuilder<WebClientListviewFilters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientListviewFilters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientListviewFilters`.
   */
  create(
    entity: WebClientListviewFilters<T>
  ): CreateRequestBuilder<WebClientListviewFilters<T>, T> {
    return new CreateRequestBuilder<WebClientListviewFilters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientListviewFilters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientListviewFilters`.
   */
  update(
    entity: WebClientListviewFilters<T>
  ): UpdateRequestBuilder<WebClientListviewFilters<T>, T> {
    return new UpdateRequestBuilder<WebClientListviewFilters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientListviewFilters`.
   * @param guid Key property. See {@link WebClientListviewFilters.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientListviewFilters`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientListviewFilters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientListviewFilters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientListviewFilters` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientListviewFilters<T>
  ): DeleteRequestBuilder<WebClientListviewFilters<T>, T>;
  delete(
    guidOrEntity: any
  ): DeleteRequestBuilder<WebClientListviewFilters<T>, T> {
    return new DeleteRequestBuilder<WebClientListviewFilters<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientListviewFilters
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
