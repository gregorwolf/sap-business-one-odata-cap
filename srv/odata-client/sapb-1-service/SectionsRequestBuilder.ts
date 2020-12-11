/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Sections } from './Sections';

/**
 * Request builder class for operations supported on the [[Sections]] entity.
 */
export class SectionsRequestBuilder extends RequestBuilder<Sections> {
  /**
   * Returns a request builder for retrieving one `Sections` entity based on its keys.
   * @param absEntry Key property. See [[Sections.absEntry]].
   * @returns A request builder for creating requests to retrieve one `Sections` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<Sections> {
    return new GetByKeyRequestBuilderV4(Sections, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `Sections` entities.
   * @returns A request builder for creating requests to retrieve all `Sections` entities.
   */
  getAll(): GetAllRequestBuilderV4<Sections> {
    return new GetAllRequestBuilderV4(Sections);
  }

  /**
   * Returns a request builder for creating a `Sections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sections`.
   */
  create(entity: Sections): CreateRequestBuilderV4<Sections> {
    return new CreateRequestBuilderV4(Sections, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Sections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sections`.
   */
  update(entity: Sections): UpdateRequestBuilderV4<Sections> {
    return new UpdateRequestBuilderV4(Sections, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param absEntry Key property. See [[Sections.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Sections`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<Sections>;
  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sections` by taking the entity as a parameter.
   */
  delete(entity: Sections): DeleteRequestBuilderV4<Sections>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<Sections> {
    return new DeleteRequestBuilderV4(Sections, absEntryOrEntity instanceof Sections ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
