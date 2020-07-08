/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(rowNumber: number): GetByKeyRequestBuilder<DunningLetters> {
    return new GetByKeyRequestBuilder(DunningLetters, { RowNumber: rowNumber });
  }

  /**
   * Returns a request builder for querying all `DunningLetters` entities.
   * @returns A request builder for creating requests to retrieve all `DunningLetters` entities.
   */
  getAll(): GetAllRequestBuilder<DunningLetters> {
    return new GetAllRequestBuilder(DunningLetters);
  }

  /**
   * Returns a request builder for creating a `DunningLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DunningLetters`.
   */
  create(entity: DunningLetters): CreateRequestBuilder<DunningLetters> {
    return new CreateRequestBuilder(DunningLetters, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DunningLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DunningLetters`.
   */
  update(entity: DunningLetters): UpdateRequestBuilder<DunningLetters> {
    return new UpdateRequestBuilder(DunningLetters, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param rowNumber Key property. See [[DunningLetters.rowNumber]].
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters`.
   */
  delete(rowNumber: number): DeleteRequestBuilder<DunningLetters>;
  /**
   * Returns a request builder for deleting an entity of type `DunningLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DunningLetters` by taking the entity as a parameter.
   */
  delete(entity: DunningLetters): DeleteRequestBuilder<DunningLetters>;
  delete(rowNumberOrEntity: any): DeleteRequestBuilder<DunningLetters> {
    return new DeleteRequestBuilder(DunningLetters, rowNumberOrEntity instanceof DunningLetters ? rowNumberOrEntity : { RowNumber: rowNumberOrEntity! });
  }
}
