/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Countries } from './Countries';

/**
 * Request builder class for operations supported on the [[Countries]] entity.
 */
export class CountriesRequestBuilder extends RequestBuilder<Countries> {
  /**
   * Returns a request builder for retrieving one `Countries` entity based on its keys.
   * @param code Key property. See [[Countries.code]].
   * @returns A request builder for creating requests to retrieve one `Countries` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<Countries> {
    return new GetByKeyRequestBuilder(Countries, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Countries` entities.
   * @returns A request builder for creating requests to retrieve all `Countries` entities.
   */
  getAll(): GetAllRequestBuilder<Countries> {
    return new GetAllRequestBuilder(Countries);
  }

  /**
   * Returns a request builder for creating a `Countries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Countries`.
   */
  create(entity: Countries): CreateRequestBuilder<Countries> {
    return new CreateRequestBuilder(Countries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Countries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Countries`.
   */
  update(entity: Countries): UpdateRequestBuilder<Countries> {
    return new UpdateRequestBuilder(Countries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Countries`.
   * @param code Key property. See [[Countries.code]].
   * @returns A request builder for creating requests that delete an entity of type `Countries`.
   */
  delete(code: string): DeleteRequestBuilder<Countries>;
  /**
   * Returns a request builder for deleting an entity of type `Countries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Countries` by taking the entity as a parameter.
   */
  delete(entity: Countries): DeleteRequestBuilder<Countries>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Countries> {
    return new DeleteRequestBuilder(Countries, codeOrEntity instanceof Countries ? codeOrEntity : { Code: codeOrEntity! });
  }
}
