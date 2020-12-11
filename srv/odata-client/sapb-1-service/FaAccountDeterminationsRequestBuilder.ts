/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { FaAccountDeterminations } from './FaAccountDeterminations';

/**
 * Request builder class for operations supported on the [[FaAccountDeterminations]] entity.
 */
export class FaAccountDeterminationsRequestBuilder extends RequestBuilder<FaAccountDeterminations> {
  /**
   * Returns a request builder for retrieving one `FaAccountDeterminations` entity based on its keys.
   * @param code Key property. See [[FaAccountDeterminations.code]].
   * @returns A request builder for creating requests to retrieve one `FaAccountDeterminations` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<FaAccountDeterminations> {
    return new GetByKeyRequestBuilderV4(FaAccountDeterminations, { Code: code });
  }

  /**
   * Returns a request builder for querying all `FaAccountDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `FaAccountDeterminations` entities.
   */
  getAll(): GetAllRequestBuilderV4<FaAccountDeterminations> {
    return new GetAllRequestBuilderV4(FaAccountDeterminations);
  }

  /**
   * Returns a request builder for creating a `FaAccountDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FaAccountDeterminations`.
   */
  create(entity: FaAccountDeterminations): CreateRequestBuilderV4<FaAccountDeterminations> {
    return new CreateRequestBuilderV4(FaAccountDeterminations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FaAccountDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FaAccountDeterminations`.
   */
  update(entity: FaAccountDeterminations): UpdateRequestBuilderV4<FaAccountDeterminations> {
    return new UpdateRequestBuilderV4(FaAccountDeterminations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
   * @param code Key property. See [[FaAccountDeterminations.code]].
   * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations`.
   */
  delete(code: string): DeleteRequestBuilderV4<FaAccountDeterminations>;
  /**
   * Returns a request builder for deleting an entity of type `FaAccountDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FaAccountDeterminations` by taking the entity as a parameter.
   */
  delete(entity: FaAccountDeterminations): DeleteRequestBuilderV4<FaAccountDeterminations>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<FaAccountDeterminations> {
    return new DeleteRequestBuilderV4(FaAccountDeterminations, codeOrEntity instanceof FaAccountDeterminations ? codeOrEntity : { Code: codeOrEntity! });
  }
}
