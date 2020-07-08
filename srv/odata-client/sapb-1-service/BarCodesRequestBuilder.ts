/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(absEntry: number): GetByKeyRequestBuilder<BarCodes> {
    return new GetByKeyRequestBuilder(BarCodes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `BarCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BarCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BarCodes> {
    return new GetAllRequestBuilder(BarCodes);
  }

  /**
   * Returns a request builder for creating a `BarCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarCodes`.
   */
  create(entity: BarCodes): CreateRequestBuilder<BarCodes> {
    return new CreateRequestBuilder(BarCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BarCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarCodes`.
   */
  update(entity: BarCodes): UpdateRequestBuilder<BarCodes> {
    return new UpdateRequestBuilder(BarCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param absEntry Key property. See [[BarCodes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `BarCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<BarCodes>;
  /**
   * Returns a request builder for deleting an entity of type `BarCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarCodes` by taking the entity as a parameter.
   */
  delete(entity: BarCodes): DeleteRequestBuilder<BarCodes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<BarCodes> {
    return new DeleteRequestBuilder(BarCodes, absEntryOrEntity instanceof BarCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
