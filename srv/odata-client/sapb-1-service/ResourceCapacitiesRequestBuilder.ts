/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ResourceCapacities } from './ResourceCapacities';

/**
 * Request builder class for operations supported on the [[ResourceCapacities]] entity.
 */
export class ResourceCapacitiesRequestBuilder extends RequestBuilder<ResourceCapacities> {
  /**
   * Returns a request builder for retrieving one `ResourceCapacities` entity based on its keys.
   * @param id Key property. See [[ResourceCapacities.id]].
   * @returns A request builder for creating requests to retrieve one `ResourceCapacities` entity based on its keys.
   */
  getByKey(id: number): GetByKeyRequestBuilder<ResourceCapacities> {
    return new GetByKeyRequestBuilder(ResourceCapacities, { Id: id });
  }

  /**
   * Returns a request builder for querying all `ResourceCapacities` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceCapacities` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceCapacities> {
    return new GetAllRequestBuilder(ResourceCapacities);
  }

  /**
   * Returns a request builder for creating a `ResourceCapacities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceCapacities`.
   */
  create(entity: ResourceCapacities): CreateRequestBuilder<ResourceCapacities> {
    return new CreateRequestBuilder(ResourceCapacities, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceCapacities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceCapacities`.
   */
  update(entity: ResourceCapacities): UpdateRequestBuilder<ResourceCapacities> {
    return new UpdateRequestBuilder(ResourceCapacities, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceCapacities`.
   * @param id Key property. See [[ResourceCapacities.id]].
   * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities`.
   */
  delete(id: number): DeleteRequestBuilder<ResourceCapacities>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceCapacities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCapacities` by taking the entity as a parameter.
   */
  delete(entity: ResourceCapacities): DeleteRequestBuilder<ResourceCapacities>;
  delete(idOrEntity: any): DeleteRequestBuilder<ResourceCapacities> {
    return new DeleteRequestBuilder(ResourceCapacities, idOrEntity instanceof ResourceCapacities ? idOrEntity : { Id: idOrEntity! });
  }
}
