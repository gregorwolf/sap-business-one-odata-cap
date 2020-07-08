/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Resources } from './Resources';

/**
 * Request builder class for operations supported on the [[Resources]] entity.
 */
export class ResourcesRequestBuilder extends RequestBuilder<Resources> {
  /**
   * Returns a request builder for retrieving one `Resources` entity based on its keys.
   * @param code Key property. See [[Resources.code]].
   * @returns A request builder for creating requests to retrieve one `Resources` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<Resources> {
    return new GetByKeyRequestBuilder(Resources, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Resources` entities.
   * @returns A request builder for creating requests to retrieve all `Resources` entities.
   */
  getAll(): GetAllRequestBuilder<Resources> {
    return new GetAllRequestBuilder(Resources);
  }

  /**
   * Returns a request builder for creating a `Resources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Resources`.
   */
  create(entity: Resources): CreateRequestBuilder<Resources> {
    return new CreateRequestBuilder(Resources, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Resources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Resources`.
   */
  update(entity: Resources): UpdateRequestBuilder<Resources> {
    return new UpdateRequestBuilder(Resources, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param code Key property. See [[Resources.code]].
   * @returns A request builder for creating requests that delete an entity of type `Resources`.
   */
  delete(code: string): DeleteRequestBuilder<Resources>;
  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Resources` by taking the entity as a parameter.
   */
  delete(entity: Resources): DeleteRequestBuilder<Resources>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Resources> {
    return new DeleteRequestBuilder(Resources, codeOrEntity instanceof Resources ? codeOrEntity : { Code: codeOrEntity! });
  }
}
