/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DunningLetters } from './DunningLetters';

/**
 * Request builder class for operations supported on the [[DunningLetters]] entity.
 */
export class DunningLettersRequestBuilder extends RequestBuilder<DunningLetters> {
  /**
   * Returns a request builder for retrieving one `DunningLetters` entity based on its keys.
   * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
   * @returns A request builder for creating requests to retrieve one `DunningLetters` entity based on its keys.
   */
  getByKey(rowNumber: number): GetByKeyRequestBuilderV4<DunningLetters> {
    return new GetByKeyRequestBuilderV4(DunningLetters, { RowNumber: rowNumber });
  }

  /**
   * Returns a request builder for querying all `DunningLetters` entities.
   * @returns A request builder for creating requests to retrieve all `DunningLetters` entities.
   */
  getAll(): GetAllRequestBuilderV4<DunningLetters> {
    return new GetAllRequestBuilderV4(DunningLetters);
  }

  /**
   * Returns a request builder for creating a `DunningLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DunningLetters`.
   */
  create(entity: DunningLetters): CreateRequestBuilderV4<DunningLetters> {
    return new CreateRequestBuilderV4(DunningLetters, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DunningLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DunningLetters`.
   */
  update(entity: DunningLetters): UpdateRequestBuilderV4<DunningLetters> {
    return new UpdateRequestBuilderV4(DunningLetters, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters`.
   */
  delete(rowNumber: number): DeleteRequestBuilderV4<DunningLetters>;
  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters` by taking the entity as a parameter.
   */
  delete(entity: DunningLetters): DeleteRequestBuilderV4<DunningLetters>;
  delete(rowNumberOrEntity: any): DeleteRequestBuilderV4<DunningLetters> {
    return new DeleteRequestBuilderV4(DunningLetters, rowNumberOrEntity instanceof DunningLetters ? rowNumberOrEntity : { RowNumber: rowNumberOrEntity! });
  }
}
