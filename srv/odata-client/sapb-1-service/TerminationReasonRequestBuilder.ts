/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(reasonId: number): GetByKeyRequestBuilderV4<TerminationReason> {
    return new GetByKeyRequestBuilderV4(TerminationReason, { ReasonID: reasonId });
  }

  /**
   * Returns a request builder for querying all `TerminationReason` entities.
   * @returns A request builder for creating requests to retrieve all `TerminationReason` entities.
   */
  getAll(): GetAllRequestBuilderV4<TerminationReason> {
    return new GetAllRequestBuilderV4(TerminationReason);
  }

  /**
   * Returns a request builder for creating a `TerminationReason` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TerminationReason`.
   */
  create(entity: TerminationReason): CreateRequestBuilderV4<TerminationReason> {
    return new CreateRequestBuilderV4(TerminationReason, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TerminationReason`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TerminationReason`.
   */
  update(entity: TerminationReason): UpdateRequestBuilderV4<TerminationReason> {
    return new UpdateRequestBuilderV4(TerminationReason, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param reasonId Key property. See [[TerminationReason.reasonId]].
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason`.
   */
  delete(reasonId: number): DeleteRequestBuilderV4<TerminationReason>;
  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason` by taking the entity as a parameter.
   */
  delete(entity: TerminationReason): DeleteRequestBuilderV4<TerminationReason>;
  delete(reasonIdOrEntity: any): DeleteRequestBuilderV4<TerminationReason> {
    return new DeleteRequestBuilderV4(TerminationReason, reasonIdOrEntity instanceof TerminationReason ? reasonIdOrEntity : { ReasonID: reasonIdOrEntity! });
  }
}
