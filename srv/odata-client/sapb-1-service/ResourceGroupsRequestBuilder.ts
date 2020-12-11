/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: number): GetByKeyRequestBuilderV4<ResourceGroups> {
    return new GetByKeyRequestBuilderV4(ResourceGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `ResourceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<ResourceGroups> {
    return new GetAllRequestBuilderV4(ResourceGroups);
  }

  /**
   * Returns a request builder for creating a `ResourceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceGroups`.
   */
  create(entity: ResourceGroups): CreateRequestBuilderV4<ResourceGroups> {
    return new CreateRequestBuilderV4(ResourceGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceGroups`.
   */
  update(entity: ResourceGroups): UpdateRequestBuilderV4<ResourceGroups> {
    return new UpdateRequestBuilderV4(ResourceGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param code Key property. See [[ResourceGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups`.
   */
  delete(code: number): DeleteRequestBuilderV4<ResourceGroups>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceGroups` by taking the entity as a parameter.
   */
  delete(entity: ResourceGroups): DeleteRequestBuilderV4<ResourceGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<ResourceGroups> {
    return new DeleteRequestBuilderV4(ResourceGroups, codeOrEntity instanceof ResourceGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
