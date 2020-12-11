/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<DnfCodeSetup> {
    return new GetByKeyRequestBuilderV4(DnfCodeSetup, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `DnfCodeSetup` entities.
   * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
   */
  getAll(): GetAllRequestBuilderV4<DnfCodeSetup> {
    return new GetAllRequestBuilderV4(DnfCodeSetup);
  }

  /**
   * Returns a request builder for creating a `DnfCodeSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
   */
  create(entity: DnfCodeSetup): CreateRequestBuilderV4<DnfCodeSetup> {
    return new CreateRequestBuilderV4(DnfCodeSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DnfCodeSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
   */
  update(entity: DnfCodeSetup): UpdateRequestBuilderV4<DnfCodeSetup> {
    return new UpdateRequestBuilderV4(DnfCodeSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<DnfCodeSetup>;
  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup` by taking the entity as a parameter.
   */
  delete(entity: DnfCodeSetup): DeleteRequestBuilderV4<DnfCodeSetup>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<DnfCodeSetup> {
    return new DeleteRequestBuilderV4(DnfCodeSetup, absEntryOrEntity instanceof DnfCodeSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
