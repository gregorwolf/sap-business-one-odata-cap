/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(code: string): GetByKeyRequestBuilderV4<LocalEra> {
    return new GetByKeyRequestBuilderV4(LocalEra, { Code: code });
  }

  /**
   * Returns a request builder for querying all `LocalEra` entities.
   * @returns A request builder for creating requests to retrieve all `LocalEra` entities.
   */
  getAll(): GetAllRequestBuilderV4<LocalEra> {
    return new GetAllRequestBuilderV4(LocalEra);
  }

  /**
   * Returns a request builder for creating a `LocalEra` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocalEra`.
   */
  create(entity: LocalEra): CreateRequestBuilderV4<LocalEra> {
    return new CreateRequestBuilderV4(LocalEra, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LocalEra`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocalEra`.
   */
  update(entity: LocalEra): UpdateRequestBuilderV4<LocalEra> {
    return new UpdateRequestBuilderV4(LocalEra, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param code Key property. See [[LocalEra.code]].
   * @returns A request builder for creating requests that delete an entity of type `LocalEra`.
   */
  delete(code: string): DeleteRequestBuilderV4<LocalEra>;
  /**
   * Returns a request builder for deleting an entity of type `LocalEra`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocalEra` by taking the entity as a parameter.
   */
  delete(entity: LocalEra): DeleteRequestBuilderV4<LocalEra>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<LocalEra> {
    return new DeleteRequestBuilderV4(LocalEra, codeOrEntity instanceof LocalEra ? codeOrEntity : { Code: codeOrEntity! });
  }
}
