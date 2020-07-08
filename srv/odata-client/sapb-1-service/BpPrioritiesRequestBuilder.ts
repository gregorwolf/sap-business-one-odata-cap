/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BpPriorities } from './BpPriorities';

/**
 * Request builder class for operations supported on the [[BpPriorities]] entity.
 */
export class BpPrioritiesRequestBuilder extends RequestBuilder<BpPriorities> {
  /**
   * Returns a request builder for retrieving one `BpPriorities` entity based on its keys.
   * @param priority Key property. See [[BpPriorities.priority]].
   * @returns A request builder for creating requests to retrieve one `BpPriorities` entity based on its keys.
   */
  getByKey(priority: number): GetByKeyRequestBuilder<BpPriorities> {
    return new GetByKeyRequestBuilder(BpPriorities, { Priority: priority });
  }

  /**
   * Returns a request builder for querying all `BpPriorities` entities.
   * @returns A request builder for creating requests to retrieve all `BpPriorities` entities.
   */
  getAll(): GetAllRequestBuilder<BpPriorities> {
    return new GetAllRequestBuilder(BpPriorities);
  }

  /**
   * Returns a request builder for creating a `BpPriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpPriorities`.
   */
  create(entity: BpPriorities): CreateRequestBuilder<BpPriorities> {
    return new CreateRequestBuilder(BpPriorities, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpPriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpPriorities`.
   */
  update(entity: BpPriorities): UpdateRequestBuilder<BpPriorities> {
    return new UpdateRequestBuilder(BpPriorities, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BpPriorities`.
   * @param priority Key property. See [[BpPriorities.priority]].
   * @returns A request builder for creating requests that delete an entity of type `BpPriorities`.
   */
  delete(priority: number): DeleteRequestBuilder<BpPriorities>;
  /**
   * Returns a request builder for deleting an entity of type `BpPriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpPriorities` by taking the entity as a parameter.
   */
  delete(entity: BpPriorities): DeleteRequestBuilder<BpPriorities>;
  delete(priorityOrEntity: any): DeleteRequestBuilder<BpPriorities> {
    return new DeleteRequestBuilder(BpPriorities, priorityOrEntity instanceof BpPriorities ? priorityOrEntity : { Priority: priorityOrEntity! });
  }
}
