/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ResourceProperties } from './ResourceProperties';

/**
 * Request builder class for operations supported on the [[ResourceProperties]] entity.
 */
export class ResourcePropertiesRequestBuilder extends RequestBuilder<ResourceProperties> {
  /**
   * Returns a request builder for retrieving one `ResourceProperties` entity based on its keys.
   * @param code Key property. See [[ResourceProperties.code]].
   * @returns A request builder for creating requests to retrieve one `ResourceProperties` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<ResourceProperties> {
    return new GetByKeyRequestBuilder(ResourceProperties, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ResourceProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceProperties` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceProperties> {
    return new GetAllRequestBuilder(ResourceProperties);
  }

  /**
   * Returns a request builder for creating a `ResourceProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceProperties`.
   */
  create(entity: ResourceProperties): CreateRequestBuilder<ResourceProperties> {
    return new CreateRequestBuilder(ResourceProperties, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceProperties`.
   */
  update(entity: ResourceProperties): UpdateRequestBuilder<ResourceProperties> {
    return new UpdateRequestBuilder(ResourceProperties, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceProperties`.
   * @param code Key property. See [[ResourceProperties.code]].
   * @returns A request builder for creating requests that delete an entity of type `ResourceProperties`.
   */
  delete(code: number): DeleteRequestBuilder<ResourceProperties>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceProperties` by taking the entity as a parameter.
   */
  delete(entity: ResourceProperties): DeleteRequestBuilder<ResourceProperties>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ResourceProperties> {
    return new DeleteRequestBuilder(ResourceProperties, codeOrEntity instanceof ResourceProperties ? codeOrEntity : { Code: codeOrEntity! });
  }
}
