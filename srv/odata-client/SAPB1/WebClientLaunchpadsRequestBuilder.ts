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
import { WebClientLaunchpads } from './WebClientLaunchpads';

/**
 * Request builder class for operations supported on the {@link WebClientLaunchpads} entity.
 */
export class WebClientLaunchpadsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientLaunchpads<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientLaunchpads` entity based on its keys.
   * @param guid Key property. See {@link WebClientLaunchpads.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientLaunchpads` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientLaunchpads<T>, T> {
    return new GetByKeyRequestBuilder<WebClientLaunchpads<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientLaunchpads` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientLaunchpads` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientLaunchpads<T>, T> {
    return new GetAllRequestBuilder<WebClientLaunchpads<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WebClientLaunchpads` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientLaunchpads`.
   */
  create(
    entity: WebClientLaunchpads<T>
  ): CreateRequestBuilder<WebClientLaunchpads<T>, T> {
    return new CreateRequestBuilder<WebClientLaunchpads<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientLaunchpads`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientLaunchpads`.
   */
  update(
    entity: WebClientLaunchpads<T>
  ): UpdateRequestBuilder<WebClientLaunchpads<T>, T> {
    return new UpdateRequestBuilder<WebClientLaunchpads<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientLaunchpads`.
   * @param guid Key property. See {@link WebClientLaunchpads.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientLaunchpads`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientLaunchpads<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientLaunchpads`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientLaunchpads` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientLaunchpads<T>
  ): DeleteRequestBuilder<WebClientLaunchpads<T>, T>;
  delete(guidOrEntity: any): DeleteRequestBuilder<WebClientLaunchpads<T>, T> {
    return new DeleteRequestBuilder<WebClientLaunchpads<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientLaunchpads
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
