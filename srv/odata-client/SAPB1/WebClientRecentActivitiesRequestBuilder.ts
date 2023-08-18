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
import { WebClientRecentActivities } from './WebClientRecentActivities';

/**
 * Request builder class for operations supported on the {@link WebClientRecentActivities} entity.
 */
export class WebClientRecentActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientRecentActivities<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientRecentActivities` entity based on its keys.
   * @param guid Key property. See {@link WebClientRecentActivities.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientRecentActivities` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientRecentActivities<T>, T> {
    return new GetByKeyRequestBuilder<WebClientRecentActivities<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientRecentActivities` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientRecentActivities` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientRecentActivities<T>, T> {
    return new GetAllRequestBuilder<WebClientRecentActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientRecentActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientRecentActivities`.
   */
  create(
    entity: WebClientRecentActivities<T>
  ): CreateRequestBuilder<WebClientRecentActivities<T>, T> {
    return new CreateRequestBuilder<WebClientRecentActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientRecentActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientRecentActivities`.
   */
  update(
    entity: WebClientRecentActivities<T>
  ): UpdateRequestBuilder<WebClientRecentActivities<T>, T> {
    return new UpdateRequestBuilder<WebClientRecentActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientRecentActivities`.
   * @param guid Key property. See {@link WebClientRecentActivities.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientRecentActivities`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientRecentActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientRecentActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientRecentActivities` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientRecentActivities<T>
  ): DeleteRequestBuilder<WebClientRecentActivities<T>, T>;
  delete(
    guidOrEntity: any
  ): DeleteRequestBuilder<WebClientRecentActivities<T>, T> {
    return new DeleteRequestBuilder<WebClientRecentActivities<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientRecentActivities
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
