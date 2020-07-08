/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Cockpits } from './Cockpits';

/**
 * Request builder class for operations supported on the [[Cockpits]] entity.
 */
export class CockpitsRequestBuilder extends RequestBuilder<Cockpits> {
  /**
   * Returns a request builder for retrieving one `Cockpits` entity based on its keys.
   * @param absEntry Key property. See [[Cockpits.absEntry]].
   * @returns A request builder for creating requests to retrieve one `Cockpits` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<Cockpits> {
    return new GetByKeyRequestBuilder(Cockpits, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `Cockpits` entities.
   * @returns A request builder for creating requests to retrieve all `Cockpits` entities.
   */
  getAll(): GetAllRequestBuilder<Cockpits> {
    return new GetAllRequestBuilder(Cockpits);
  }

  /**
   * Returns a request builder for creating a `Cockpits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Cockpits`.
   */
  create(entity: Cockpits): CreateRequestBuilder<Cockpits> {
    return new CreateRequestBuilder(Cockpits, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Cockpits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Cockpits`.
   */
  update(entity: Cockpits): UpdateRequestBuilder<Cockpits> {
    return new UpdateRequestBuilder(Cockpits, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Cockpits`.
   * @param absEntry Key property. See [[Cockpits.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Cockpits`.
   */
  delete(absEntry: number): DeleteRequestBuilder<Cockpits>;
  /**
   * Returns a request builder for deleting an entity of type `Cockpits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Cockpits` by taking the entity as a parameter.
   */
  delete(entity: Cockpits): DeleteRequestBuilder<Cockpits>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<Cockpits> {
    return new DeleteRequestBuilder(Cockpits, absEntryOrEntity instanceof Cockpits ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
