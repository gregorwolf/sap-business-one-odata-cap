/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { NcmCodesSetup } from './NcmCodesSetup';

/**
 * Request builder class for operations supported on the [[NcmCodesSetup]] entity.
 */
export class NcmCodesSetupRequestBuilder extends RequestBuilder<NcmCodesSetup> {
  /**
   * Returns a request builder for retrieving one `NcmCodesSetup` entity based on its keys.
   * @param absEntry Key property. See [[NcmCodesSetup.absEntry]].
   * @returns A request builder for creating requests to retrieve one `NcmCodesSetup` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<NcmCodesSetup> {
    return new GetByKeyRequestBuilder(NcmCodesSetup, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `NcmCodesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `NcmCodesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<NcmCodesSetup> {
    return new GetAllRequestBuilder(NcmCodesSetup);
  }

  /**
   * Returns a request builder for creating a `NcmCodesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NcmCodesSetup`.
   */
  create(entity: NcmCodesSetup): CreateRequestBuilder<NcmCodesSetup> {
    return new CreateRequestBuilder(NcmCodesSetup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `NcmCodesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NcmCodesSetup`.
   */
  update(entity: NcmCodesSetup): UpdateRequestBuilder<NcmCodesSetup> {
    return new UpdateRequestBuilder(NcmCodesSetup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
   * @param absEntry Key property. See [[NcmCodesSetup.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup`.
   */
  delete(absEntry: number): DeleteRequestBuilder<NcmCodesSetup>;
  /**
   * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup` by taking the entity as a parameter.
   */
  delete(entity: NcmCodesSetup): DeleteRequestBuilder<NcmCodesSetup>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<NcmCodesSetup> {
    return new DeleteRequestBuilder(NcmCodesSetup, absEntryOrEntity instanceof NcmCodesSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
