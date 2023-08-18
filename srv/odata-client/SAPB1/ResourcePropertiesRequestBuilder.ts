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
import { ResourceProperties } from './ResourceProperties';

/**
 * Request builder class for operations supported on the {@link ResourceProperties} entity.
 */
export class ResourcePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceProperties<T>, T> {
  /**
   * Returns a request builder for retrieving one `ResourceProperties` entity based on its keys.
   * @param code Key property. See {@link ResourceProperties.code}.
   * @returns A request builder for creating requests to retrieve one `ResourceProperties` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ResourceProperties<T>, T> {
    return new GetByKeyRequestBuilder<ResourceProperties<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `ResourceProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceProperties` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceProperties<T>, T> {
    return new GetAllRequestBuilder<ResourceProperties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ResourceProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceProperties`.
   */
  create(
    entity: ResourceProperties<T>
  ): CreateRequestBuilder<ResourceProperties<T>, T> {
    return new CreateRequestBuilder<ResourceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceProperties`.
   */
  update(
    entity: ResourceProperties<T>
  ): UpdateRequestBuilder<ResourceProperties<T>, T> {
    return new UpdateRequestBuilder<ResourceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceProperties`.
   * @param code Key property. See {@link ResourceProperties.code}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceProperties`.
   */
  delete(code: number): DeleteRequestBuilder<ResourceProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceProperties` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceProperties<T>
  ): DeleteRequestBuilder<ResourceProperties<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ResourceProperties<T>, T> {
    return new DeleteRequestBuilder<ResourceProperties<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ResourceProperties
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
