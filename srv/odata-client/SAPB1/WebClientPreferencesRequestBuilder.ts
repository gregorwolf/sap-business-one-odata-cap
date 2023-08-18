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
import { WebClientPreferences } from './WebClientPreferences';

/**
 * Request builder class for operations supported on the {@link WebClientPreferences} entity.
 */
export class WebClientPreferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientPreferences<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientPreferences` entity based on its keys.
   * @param guid Key property. See {@link WebClientPreferences.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientPreferences` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientPreferences<T>, T> {
    return new GetByKeyRequestBuilder<WebClientPreferences<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientPreferences` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientPreferences` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientPreferences<T>, T> {
    return new GetAllRequestBuilder<WebClientPreferences<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WebClientPreferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientPreferences`.
   */
  create(
    entity: WebClientPreferences<T>
  ): CreateRequestBuilder<WebClientPreferences<T>, T> {
    return new CreateRequestBuilder<WebClientPreferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientPreferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientPreferences`.
   */
  update(
    entity: WebClientPreferences<T>
  ): UpdateRequestBuilder<WebClientPreferences<T>, T> {
    return new UpdateRequestBuilder<WebClientPreferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientPreferences`.
   * @param guid Key property. See {@link WebClientPreferences.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientPreferences`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientPreferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientPreferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientPreferences` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientPreferences<T>
  ): DeleteRequestBuilder<WebClientPreferences<T>, T>;
  delete(guidOrEntity: any): DeleteRequestBuilder<WebClientPreferences<T>, T> {
    return new DeleteRequestBuilder<WebClientPreferences<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientPreferences
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
