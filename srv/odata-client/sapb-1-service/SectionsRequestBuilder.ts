/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(absEntry: number): GetByKeyRequestBuilder<Sections> {
    return new GetByKeyRequestBuilder(Sections, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `Sections` entities.
   * @returns A request builder for creating requests to retrieve all `Sections` entities.
   */
  getAll(): GetAllRequestBuilder<Sections> {
    return new GetAllRequestBuilder(Sections);
  }

  /**
   * Returns a request builder for creating a `Sections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sections`.
   */
  create(entity: Sections): CreateRequestBuilder<Sections> {
    return new CreateRequestBuilder(Sections, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Sections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sections`.
   */
  update(entity: Sections): UpdateRequestBuilder<Sections> {
    return new UpdateRequestBuilder(Sections, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param absEntry Key property. See [[Sections.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Sections`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Sections>;
  /**
   * Returns a request builder for deleting an entity of type `Sections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sections` by taking the entity as a parameter.
   */
  delete(entity: Sections): DeleteRequestBuilder<Sections>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Sections> {
    return new DeleteRequestBuilder(Sections, absEntryOrEntity instanceof Sections ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
