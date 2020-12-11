/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BinLocations } from './BinLocations';

/**
 * Request builder class for operations supported on the [[BinLocations]] entity.
 */
export class BinLocationsRequestBuilder extends RequestBuilder<BinLocations> {
  /**
   * Returns a request builder for retrieving one `BinLocations` entity based on its keys.
   * @param absEntry Key property. See [[BinLocations.absEntry]].
   * @returns A request builder for creating requests to retrieve one `BinLocations` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<BinLocations> {
    return new GetByKeyRequestBuilderV4(BinLocations, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BinLocations` entities.
   * @returns A request builder for creating requests to retrieve all `BinLocations` entities.
   */
  getAll(): GetAllRequestBuilderV4<BinLocations> {
    return new GetAllRequestBuilderV4(BinLocations);
  }

  /**
   * Returns a request builder for creating a `BinLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BinLocations`.
   */
  create(entity: BinLocations): CreateRequestBuilderV4<BinLocations> {
    return new CreateRequestBuilderV4(BinLocations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BinLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BinLocations`.
   */
  update(entity: BinLocations): UpdateRequestBuilderV4<BinLocations> {
    return new UpdateRequestBuilderV4(BinLocations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BinLocations`.
   * @param absEntry Key property. See [[BinLocations.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BinLocations`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<BinLocations>;
  /**
   * Returns a request builder for deleting an entity of type `BinLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BinLocations` by taking the entity as a parameter.
   */
  delete(entity: BinLocations): DeleteRequestBuilderV4<BinLocations>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<BinLocations> {
    return new DeleteRequestBuilderV4(BinLocations, absEntryOrEntity instanceof BinLocations ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
