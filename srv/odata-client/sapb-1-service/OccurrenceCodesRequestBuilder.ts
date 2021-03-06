/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<OccurrenceCodes> {
    return new GetByKeyRequestBuilderV4(OccurrenceCodes, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `OccurrenceCodes` entities.
   * @returns A request builder for creating requests to retrieve all `OccurrenceCodes` entities.
   */
  getAll(): GetAllRequestBuilderV4<OccurrenceCodes> {
    return new GetAllRequestBuilderV4(OccurrenceCodes);
  }

  /**
   * Returns a request builder for creating a `OccurrenceCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OccurrenceCodes`.
   */
  create(entity: OccurrenceCodes): CreateRequestBuilderV4<OccurrenceCodes> {
    return new CreateRequestBuilderV4(OccurrenceCodes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OccurrenceCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OccurrenceCodes`.
   */
  update(entity: OccurrenceCodes): UpdateRequestBuilderV4<OccurrenceCodes> {
    return new UpdateRequestBuilderV4(OccurrenceCodes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param absEntry Key property. See [[OccurrenceCodes.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<OccurrenceCodes>;
  /**
   * Returns a request builder for deleting an entity of type `OccurrenceCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OccurrenceCodes` by taking the entity as a parameter.
   */
  delete(entity: OccurrenceCodes): DeleteRequestBuilderV4<OccurrenceCodes>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<OccurrenceCodes> {
    return new DeleteRequestBuilderV4(OccurrenceCodes, absEntryOrEntity instanceof OccurrenceCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
