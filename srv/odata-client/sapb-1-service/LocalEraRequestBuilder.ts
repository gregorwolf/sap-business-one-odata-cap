/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { LocalEra } from './LocalEra';

/**
 * Request builder class for operations supported on the [[LocalEra]] entity.
 */
export class LocalEraRequestBuilder extends RequestBuilder<LocalEra> {
  /**
   * Returns a request builder for retrieving one `LocalEra` entity based on its keys.
   * @param code Key property. See [[LocalEra.code]].
   * @returns A request builder for creating requests to retrieve one `LocalEra` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<LocalEra> {
    return new GetByKeyRequestBuilder(LocalEra, { Code: code });
  }

  /**
   * Returns a request builder for querying all `LocalEra` entities.
   * @returns A request builder for creating requests to retrieve all `LocalEra` entities.
   */
  getAll(): GetAllRequestBuilder<LocalEra> {
    return new GetAllRequestBuilder(LocalEra);
  }

  /**
   * Returns a request builder for creating a `LocalEra` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocalEra`.
   */
  create(entity: LocalEra): CreateRequestBuilder<LocalEra> {
    return new CreateRequestBuilder(LocalEra, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LocalEra`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocalEra`.
   */
  update(entity: LocalEra): UpdateRequestBuilder<LocalEra> {
    return new UpdateRequestBuilder(LocalEra, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param code Key property. See [[LocalEra.code]].
   * @returns A request builder for creating requests that delete an entity of type `LocalEra`.
   */
  delete(code: string): DeleteRequestBuilder<LocalEra>;
  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocalEra` by taking the entity as a parameter.
   */
  delete(entity: LocalEra): DeleteRequestBuilder<LocalEra>;
  delete(codeOrEntity: any): DeleteRequestBuilder<LocalEra> {
    return new DeleteRequestBuilder(LocalEra, codeOrEntity instanceof LocalEra ? codeOrEntity : { Code: codeOrEntity! });
  }
}
