/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DnfCodeSetup } from './DnfCodeSetup';

/**
 * Request builder class for operations supported on the [[DnfCodeSetup]] entity.
 */
export class DnfCodeSetupRequestBuilder extends RequestBuilder<DnfCodeSetup> {
  /**
   * Returns a request builder for retrieving one `DnfCodeSetup` entity based on its keys.
   * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
   * @returns A request builder for creating requests to retrieve one `DnfCodeSetup` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<DnfCodeSetup> {
    return new GetByKeyRequestBuilder(DnfCodeSetup, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `DnfCodeSetup` entities.
   * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
   */
  getAll(): GetAllRequestBuilder<DnfCodeSetup> {
    return new GetAllRequestBuilder(DnfCodeSetup);
  }

  /**
   * Returns a request builder for creating a `DnfCodeSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
   */
  create(entity: DnfCodeSetup): CreateRequestBuilder<DnfCodeSetup> {
    return new CreateRequestBuilder(DnfCodeSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DnfCodeSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
   */
  update(entity: DnfCodeSetup): UpdateRequestBuilder<DnfCodeSetup> {
    return new UpdateRequestBuilder(DnfCodeSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup`.
   */
  delete(absEntry: number): DeleteRequestBuilder<DnfCodeSetup>;
  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup` by taking the entity as a parameter.
   */
  delete(entity: DnfCodeSetup): DeleteRequestBuilder<DnfCodeSetup>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<DnfCodeSetup> {
    return new DeleteRequestBuilder(DnfCodeSetup, absEntryOrEntity instanceof DnfCodeSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
