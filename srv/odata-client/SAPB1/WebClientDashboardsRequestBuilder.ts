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
import { WebClientDashboards } from './WebClientDashboards';

/**
 * Request builder class for operations supported on the {@link WebClientDashboards} entity.
 */
export class WebClientDashboardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientDashboards<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientDashboards` entity based on its keys.
   * @param guid Key property. See {@link WebClientDashboards.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientDashboards` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientDashboards<T>, T> {
    return new GetByKeyRequestBuilder<WebClientDashboards<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientDashboards` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientDashboards` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientDashboards<T>, T> {
    return new GetAllRequestBuilder<WebClientDashboards<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WebClientDashboards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientDashboards`.
   */
  create(
    entity: WebClientDashboards<T>
  ): CreateRequestBuilder<WebClientDashboards<T>, T> {
    return new CreateRequestBuilder<WebClientDashboards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientDashboards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientDashboards`.
   */
  update(
    entity: WebClientDashboards<T>
  ): UpdateRequestBuilder<WebClientDashboards<T>, T> {
    return new UpdateRequestBuilder<WebClientDashboards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientDashboards`.
   * @param guid Key property. See {@link WebClientDashboards.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientDashboards`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientDashboards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientDashboards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientDashboards` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientDashboards<T>
  ): DeleteRequestBuilder<WebClientDashboards<T>, T>;
  delete(guidOrEntity: any): DeleteRequestBuilder<WebClientDashboards<T>, T> {
    return new DeleteRequestBuilder<WebClientDashboards<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientDashboards
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
