/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Branches } from './Branches';

/**
 * Request builder class for operations supported on the [[Branches]] entity.
 */
export class BranchesRequestBuilder extends RequestBuilder<Branches> {
  /**
   * Returns a request builder for retrieving one `Branches` entity based on its keys.
   * @param code Key property. See [[Branches.code]].
   * @returns A request builder for creating requests to retrieve one `Branches` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilderV4<Branches> {
    return new GetByKeyRequestBuilderV4(Branches, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Branches` entities.
   * @returns A request builder for creating requests to retrieve all `Branches` entities.
   */
  getAll(): GetAllRequestBuilderV4<Branches> {
    return new GetAllRequestBuilderV4(Branches);
  }

  /**
   * Returns a request builder for creating a `Branches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Branches`.
   */
  create(entity: Branches): CreateRequestBuilderV4<Branches> {
    return new CreateRequestBuilderV4(Branches, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Branches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Branches`.
   */
  update(entity: Branches): UpdateRequestBuilderV4<Branches> {
    return new UpdateRequestBuilderV4(Branches, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Branches`.
   * @param code Key property. See [[Branches.code]].
   * @returns A request builder for creating requests that delete an entity of type `Branches`.
   */
  delete(code: number): DeleteRequestBuilderV4<Branches>;
  /**
   * Returns a request builder for deleting an entity of type `Branches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Branches` by taking the entity as a parameter.
   */
  delete(entity: Branches): DeleteRequestBuilderV4<Branches>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<Branches> {
    return new DeleteRequestBuilderV4(Branches, codeOrEntity instanceof Branches ? codeOrEntity : { Code: codeOrEntity! });
  }
}
