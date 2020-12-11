/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { RetornoCodes } from './RetornoCodes';

/**
 * Request builder class for operations supported on the [[RetornoCodes]] entity.
 */
export class RetornoCodesRequestBuilder extends RequestBuilder<RetornoCodes> {
  /**
   * Returns a request builder for retrieving one `RetornoCodes` entity based on its keys.
   * @param absEntry Key property. See [[RetornoCodes.absEntry]].
   * @returns A request builder for creating requests to retrieve one `RetornoCodes` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<RetornoCodes> {
    return new GetByKeyRequestBuilderV4(RetornoCodes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `RetornoCodes` entities.
   * @returns A request builder for creating requests to retrieve all `RetornoCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<RetornoCodes> {
    return new GetAllRequestBuilderV4(RetornoCodes);
  }

  /**
   * Returns a request builder for creating a `RetornoCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetornoCodes`.
   */
  create(entity: RetornoCodes): CreateRequestBuilderV4<RetornoCodes> {
    return new CreateRequestBuilderV4(RetornoCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RetornoCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetornoCodes`.
   */
  update(entity: RetornoCodes): UpdateRequestBuilderV4<RetornoCodes> {
    return new UpdateRequestBuilderV4(RetornoCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetornoCodes`.
   * @param absEntry Key property. See [[RetornoCodes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `RetornoCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<RetornoCodes>;
  /**
   * Returns a request builder for deleting an entity of type `RetornoCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetornoCodes` by taking the entity as a parameter.
   */
  delete(entity: RetornoCodes): DeleteRequestBuilderV4<RetornoCodes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<RetornoCodes> {
    return new DeleteRequestBuilderV4(RetornoCodes, absEntryOrEntity instanceof RetornoCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
