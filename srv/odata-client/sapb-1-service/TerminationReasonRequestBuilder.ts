/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TerminationReason } from './TerminationReason';

/**
 * Request builder class for operations supported on the [[TerminationReason]] entity.
 */
export class TerminationReasonRequestBuilder extends RequestBuilder<TerminationReason> {
  /**
   * Returns a request builder for retrieving one `TerminationReason` entity based on its keys.
   * @param reasonId Key property. See [[TerminationReason.reasonId]].
   * @returns A request builder for creating requests to retrieve one `TerminationReason` entity based on its keys.
   */
  getByKey(reasonId: number): GetByKeyRequestBuilder<TerminationReason> {
    return new GetByKeyRequestBuilder(TerminationReason, { ReasonID: reasonId });
  }

  /**
   * Returns a request builder for querying all `TerminationReason` entities.
   * @returns A request builder for creating requests to retrieve all `TerminationReason` entities.
   */
  getAll(): GetAllRequestBuilder<TerminationReason> {
    return new GetAllRequestBuilder(TerminationReason);
  }

  /**
   * Returns a request builder for creating a `TerminationReason` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TerminationReason`.
   */
  create(entity: TerminationReason): CreateRequestBuilder<TerminationReason> {
    return new CreateRequestBuilder(TerminationReason, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TerminationReason`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TerminationReason`.
   */
  update(entity: TerminationReason): UpdateRequestBuilder<TerminationReason> {
    return new UpdateRequestBuilder(TerminationReason, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param reasonId Key property. See [[TerminationReason.reasonId]].
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason`.
   */
  delete(reasonId: number): DeleteRequestBuilder<TerminationReason>;
  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason` by taking the entity as a parameter.
   */
  delete(entity: TerminationReason): DeleteRequestBuilder<TerminationReason>;
  delete(reasonIdOrEntity: any): DeleteRequestBuilder<TerminationReason> {
    return new DeleteRequestBuilder(TerminationReason, reasonIdOrEntity instanceof TerminationReason ? reasonIdOrEntity : { ReasonID: reasonIdOrEntity! });
  }
}
