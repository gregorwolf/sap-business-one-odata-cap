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
import { ResourceCapacities } from './ResourceCapacities';

/**
 * Request builder class for operations supported on the {@link ResourceCapacities} entity.
 */
export class ResourceCapacitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceCapacities<T>, T> {
  /**
   * Returns a request builder for retrieving one `ResourceCapacities` entity based on its keys.
   * @param id Key property. See {@link ResourceCapacities.id}.
   * @returns A request builder for creating requests to retrieve one `ResourceCapacities` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ResourceCapacities<T>, T> {
    return new GetByKeyRequestBuilder<ResourceCapacities<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for querying all `ResourceCapacities` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceCapacities` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceCapacities<T>, T> {
    return new GetAllRequestBuilder<ResourceCapacities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ResourceCapacities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceCapacities`.
   */
  create(
    entity: ResourceCapacities<T>
  ): CreateRequestBuilder<ResourceCapacities<T>, T> {
    return new CreateRequestBuilder<ResourceCapacities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceCapacities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceCapacities`.
   */
  update(
    entity: ResourceCapacities<T>
  ): UpdateRequestBuilder<ResourceCapacities<T>, T> {
    return new UpdateRequestBuilder<ResourceCapacities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceCapacities`.
   * @param id Key property. See {@link ResourceCapacities.id}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities`.
   */
  delete(id: number): DeleteRequestBuilder<ResourceCapacities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceCapacities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceCapacities<T>
  ): DeleteRequestBuilder<ResourceCapacities<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ResourceCapacities<T>, T> {
    return new DeleteRequestBuilder<ResourceCapacities<T>, T>(
      this.entityApi,
      idOrEntity instanceof ResourceCapacities
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
