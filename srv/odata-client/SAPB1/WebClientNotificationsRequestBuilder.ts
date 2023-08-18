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
import { WebClientNotifications } from './WebClientNotifications';

/**
 * Request builder class for operations supported on the {@link WebClientNotifications} entity.
 */
export class WebClientNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientNotifications<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientNotifications` entity based on its keys.
   * @param guid Key property. See {@link WebClientNotifications.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientNotifications` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientNotifications<T>, T> {
    return new GetByKeyRequestBuilder<WebClientNotifications<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientNotifications<T>, T> {
    return new GetAllRequestBuilder<WebClientNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientNotifications`.
   */
  create(
    entity: WebClientNotifications<T>
  ): CreateRequestBuilder<WebClientNotifications<T>, T> {
    return new CreateRequestBuilder<WebClientNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientNotifications`.
   */
  update(
    entity: WebClientNotifications<T>
  ): UpdateRequestBuilder<WebClientNotifications<T>, T> {
    return new UpdateRequestBuilder<WebClientNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientNotifications`.
   * @param guid Key property. See {@link WebClientNotifications.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientNotifications`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientNotifications<T>
  ): DeleteRequestBuilder<WebClientNotifications<T>, T>;
  delete(
    guidOrEntity: any
  ): DeleteRequestBuilder<WebClientNotifications<T>, T> {
    return new DeleteRequestBuilder<WebClientNotifications<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientNotifications
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
