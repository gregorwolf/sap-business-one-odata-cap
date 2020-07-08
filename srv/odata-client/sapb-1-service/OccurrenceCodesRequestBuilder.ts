/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { OccurrenceCodes } from './OccurrenceCodes';

/**
 * Request builder class for operations supported on the [[OccurrenceCodes]] entity.
 */
export class OccurrenceCodesRequestBuilder extends RequestBuilder<OccurrenceCodes> {
  /**
   * Returns a request builder for retrieving one `OccurrenceCodes` entity based on its keys.
   * @param absEntry Key property. See [[OccurrenceCodes.absEntry]].
   * @returns A request builder for creating requests to retrieve one `OccurrenceCodes` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<OccurrenceCodes> {
    return new GetByKeyRequestBuilder(OccurrenceCodes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `OccurrenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `OccurrenceCodes` entities.
   */
  getAll(): GetAllRequestBuilder<OccurrenceCodes> {
    return new GetAllRequestBuilder(OccurrenceCodes);
  }

  /**
   * Returns a request builder for creating a `OccurrenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OccurrenceCodes`.
   */
  create(entity: OccurrenceCodes): CreateRequestBuilder<OccurrenceCodes> {
    return new CreateRequestBuilder(OccurrenceCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OccurrenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OccurrenceCodes`.
   */
  update(entity: OccurrenceCodes): UpdateRequestBuilder<OccurrenceCodes> {
    return new UpdateRequestBuilder(OccurrenceCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param absEntry Key property. See [[OccurrenceCodes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<OccurrenceCodes>;
  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes` by taking the entity as a parameter.
   */
  delete(entity: OccurrenceCodes): DeleteRequestBuilder<OccurrenceCodes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<OccurrenceCodes> {
    return new DeleteRequestBuilder(OccurrenceCodes, absEntryOrEntity instanceof OccurrenceCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
