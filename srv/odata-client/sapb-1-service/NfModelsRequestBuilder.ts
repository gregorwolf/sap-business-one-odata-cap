/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { NfModels } from './NfModels';

/**
 * Request builder class for operations supported on the [[NfModels]] entity.
 */
export class NfModelsRequestBuilder extends RequestBuilder<NfModels> {
  /**
   * Returns a request builder for retrieving one `NfModels` entity based on its keys.
   * @param absEntry Key property. See [[NfModels.absEntry]].
   * @returns A request builder for creating requests to retrieve one `NfModels` entity based on its keys.
   */
  getByKey(absEntry: string): GetByKeyRequestBuilderV4<NfModels> {
    return new GetByKeyRequestBuilderV4(NfModels, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `NfModels` entities.
   * @returns A request builder for creating requests to retrieve all `NfModels` entities.
   */
  getAll(): GetAllRequestBuilderV4<NfModels> {
    return new GetAllRequestBuilderV4(NfModels);
  }

  /**
   * Returns a request builder for creating a `NfModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NfModels`.
   */
  create(entity: NfModels): CreateRequestBuilderV4<NfModels> {
    return new CreateRequestBuilderV4(NfModels, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `NfModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NfModels`.
   */
  update(entity: NfModels): UpdateRequestBuilderV4<NfModels> {
    return new UpdateRequestBuilderV4(NfModels, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NfModels`.
   * @param absEntry Key property. See [[NfModels.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `NfModels`.
   */
  delete(absEntry: string): DeleteRequestBuilderV4<NfModels>;
  /**
   * Returns a request builder for deleting an entity of type `NfModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NfModels` by taking the entity as a parameter.
   */
  delete(entity: NfModels): DeleteRequestBuilderV4<NfModels>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<NfModels> {
    return new DeleteRequestBuilderV4(NfModels, absEntryOrEntity instanceof NfModels ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
