/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ResourceGroups } from './ResourceGroups';

/**
 * Request builder class for operations supported on the [[ResourceGroups]] entity.
 */
export class ResourceGroupsRequestBuilder extends RequestBuilder<ResourceGroups> {
  /**
   * Returns a request builder for retrieving one `ResourceGroups` entity based on its keys.
   * @param code Key property. See [[ResourceGroups.code]].
   * @returns A request builder for creating requests to retrieve one `ResourceGroups` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilder<ResourceGroups> {
    return new GetByKeyRequestBuilder(ResourceGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ResourceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceGroups> {
    return new GetAllRequestBuilder(ResourceGroups);
  }

  /**
   * Returns a request builder for creating a `ResourceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceGroups`.
   */
  create(entity: ResourceGroups): CreateRequestBuilder<ResourceGroups> {
    return new CreateRequestBuilder(ResourceGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceGroups`.
   */
  update(entity: ResourceGroups): UpdateRequestBuilder<ResourceGroups> {
    return new UpdateRequestBuilder(ResourceGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param code Key property. See [[ResourceGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups`.
   */
  delete(code: number): DeleteRequestBuilder<ResourceGroups>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups` by taking the entity as a parameter.
   */
  delete(entity: ResourceGroups): DeleteRequestBuilder<ResourceGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ResourceGroups> {
    return new DeleteRequestBuilder(ResourceGroups, codeOrEntity instanceof ResourceGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
