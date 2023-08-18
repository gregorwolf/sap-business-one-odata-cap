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
import { WebClientBookmarkTiles } from './WebClientBookmarkTiles';

/**
 * Request builder class for operations supported on the {@link WebClientBookmarkTiles} entity.
 */
export class WebClientBookmarkTilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientBookmarkTiles<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientBookmarkTiles` entity based on its keys.
   * @param guid Key property. See {@link WebClientBookmarkTiles.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientBookmarkTiles` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientBookmarkTiles<T>, T> {
    return new GetByKeyRequestBuilder<WebClientBookmarkTiles<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientBookmarkTiles` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientBookmarkTiles` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientBookmarkTiles<T>, T> {
    return new GetAllRequestBuilder<WebClientBookmarkTiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientBookmarkTiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientBookmarkTiles`.
   */
  create(
    entity: WebClientBookmarkTiles<T>
  ): CreateRequestBuilder<WebClientBookmarkTiles<T>, T> {
    return new CreateRequestBuilder<WebClientBookmarkTiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientBookmarkTiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientBookmarkTiles`.
   */
  update(
    entity: WebClientBookmarkTiles<T>
  ): UpdateRequestBuilder<WebClientBookmarkTiles<T>, T> {
    return new UpdateRequestBuilder<WebClientBookmarkTiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientBookmarkTiles`.
   * @param guid Key property. See {@link WebClientBookmarkTiles.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientBookmarkTiles`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientBookmarkTiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientBookmarkTiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientBookmarkTiles` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientBookmarkTiles<T>
  ): DeleteRequestBuilder<WebClientBookmarkTiles<T>, T>;
  delete(
    guidOrEntity: any
  ): DeleteRequestBuilder<WebClientBookmarkTiles<T>, T> {
    return new DeleteRequestBuilder<WebClientBookmarkTiles<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientBookmarkTiles
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
