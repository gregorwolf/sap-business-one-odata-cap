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
import { WebClientVariantGroups } from './WebClientVariantGroups';

/**
 * Request builder class for operations supported on the {@link WebClientVariantGroups} entity.
 */
export class WebClientVariantGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WebClientVariantGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `WebClientVariantGroups` entity based on its keys.
   * @param guid Key property. See {@link WebClientVariantGroups.guid}.
   * @returns A request builder for creating requests to retrieve one `WebClientVariantGroups` entity based on its keys.
   */
  getByKey(
    guid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WebClientVariantGroups<T>, T> {
    return new GetByKeyRequestBuilder<WebClientVariantGroups<T>, T>(
      this.entityApi,
      { Guid: guid }
    );
  }

  /**
   * Returns a request builder for querying all `WebClientVariantGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WebClientVariantGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WebClientVariantGroups<T>, T> {
    return new GetAllRequestBuilder<WebClientVariantGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WebClientVariantGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WebClientVariantGroups`.
   */
  create(
    entity: WebClientVariantGroups<T>
  ): CreateRequestBuilder<WebClientVariantGroups<T>, T> {
    return new CreateRequestBuilder<WebClientVariantGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WebClientVariantGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WebClientVariantGroups`.
   */
  update(
    entity: WebClientVariantGroups<T>
  ): UpdateRequestBuilder<WebClientVariantGroups<T>, T> {
    return new UpdateRequestBuilder<WebClientVariantGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WebClientVariantGroups`.
   * @param guid Key property. See {@link WebClientVariantGroups.guid}.
   * @returns A request builder for creating requests that delete an entity of type `WebClientVariantGroups`.
   */
  delete(guid: string): DeleteRequestBuilder<WebClientVariantGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WebClientVariantGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WebClientVariantGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WebClientVariantGroups<T>
  ): DeleteRequestBuilder<WebClientVariantGroups<T>, T>;
  delete(
    guidOrEntity: any
  ): DeleteRequestBuilder<WebClientVariantGroups<T>, T> {
    return new DeleteRequestBuilder<WebClientVariantGroups<T>, T>(
      this.entityApi,
      guidOrEntity instanceof WebClientVariantGroups
        ? guidOrEntity
        : { Guid: guidOrEntity! }
    );
  }
}
