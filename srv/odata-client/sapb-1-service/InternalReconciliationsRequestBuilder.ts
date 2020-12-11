/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InternalReconciliations } from './InternalReconciliations';

/**
 * Request builder class for operations supported on the [[InternalReconciliations]] entity.
 */
export class InternalReconciliationsRequestBuilder extends RequestBuilder<InternalReconciliations> {
  /**
   * Returns a request builder for retrieving one `InternalReconciliations` entity based on its keys.
   * @param reconNum Key property. See [[InternalReconciliations.reconNum]].
   * @returns A request builder for creating requests to retrieve one `InternalReconciliations` entity based on its keys.
   */
  getByKey(reconNum: number): GetByKeyRequestBuilderV4<InternalReconciliations> {
    return new GetByKeyRequestBuilderV4(InternalReconciliations, { ReconNum: reconNum });
  }

  /**
   * Returns a request builder for querying all `InternalReconciliations` entities.
   * @returns A request builder for creating requests to retrieve all `InternalReconciliations` entities.
   */
  getAll(): GetAllRequestBuilderV4<InternalReconciliations> {
    return new GetAllRequestBuilderV4(InternalReconciliations);
  }

  /**
   * Returns a request builder for creating a `InternalReconciliations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InternalReconciliations`.
   */
  create(entity: InternalReconciliations): CreateRequestBuilderV4<InternalReconciliations> {
    return new CreateRequestBuilderV4(InternalReconciliations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InternalReconciliations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InternalReconciliations`.
   */
  update(entity: InternalReconciliations): UpdateRequestBuilderV4<InternalReconciliations> {
    return new UpdateRequestBuilderV4(InternalReconciliations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InternalReconciliations`.
   * @param reconNum Key property. See [[InternalReconciliations.reconNum]].
   * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations`.
   */
  delete(reconNum: number): DeleteRequestBuilderV4<InternalReconciliations>;
  /**
   * Returns a request builder for deleting an entity of type `InternalReconciliations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InternalReconciliations` by taking the entity as a parameter.
   */
  delete(entity: InternalReconciliations): DeleteRequestBuilderV4<InternalReconciliations>;
  delete(reconNumOrEntity: any): DeleteRequestBuilderV4<InternalReconciliations> {
    return new DeleteRequestBuilderV4(InternalReconciliations, reconNumOrEntity instanceof InternalReconciliations ? reconNumOrEntity : { ReconNum: reconNumOrEntity! });
  }
}
