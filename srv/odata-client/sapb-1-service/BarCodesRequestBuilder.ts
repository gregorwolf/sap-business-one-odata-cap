/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BarCodes } from './BarCodes';

/**
 * Request builder class for operations supported on the [[BarCodes]] entity.
 */
export class BarCodesRequestBuilder extends RequestBuilder<BarCodes> {
  /**
   * Returns a request builder for retrieving one `BarCodes` entity based on its keys.
   * @param absEntry Key property. See [[BarCodes.absEntry]].
   * @returns A request builder for creating requests to retrieve one `BarCodes` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<BarCodes> {
    return new GetByKeyRequestBuilderV4(BarCodes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BarCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BarCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<BarCodes> {
    return new GetAllRequestBuilderV4(BarCodes);
  }

  /**
   * Returns a request builder for creating a `BarCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarCodes`.
   */
  create(entity: BarCodes): CreateRequestBuilderV4<BarCodes> {
    return new CreateRequestBuilderV4(BarCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BarCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarCodes`.
   */
  update(entity: BarCodes): UpdateRequestBuilderV4<BarCodes> {
    return new UpdateRequestBuilderV4(BarCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param absEntry Key property. See [[BarCodes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BarCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<BarCodes>;
  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarCodes` by taking the entity as a parameter.
   */
  delete(entity: BarCodes): DeleteRequestBuilderV4<BarCodes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<BarCodes> {
    return new DeleteRequestBuilderV4(BarCodes, absEntryOrEntity instanceof BarCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
