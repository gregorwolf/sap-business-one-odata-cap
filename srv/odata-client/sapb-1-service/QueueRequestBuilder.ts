/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Queue } from './Queue';

/**
 * Request builder class for operations supported on the [[Queue]] entity.
 */
export class QueueRequestBuilder extends RequestBuilder<Queue> {
  /**
   * Returns a request builder for retrieving one `Queue` entity based on its keys.
   * @param queueId Key property. See [[Queue.queueId]].
   * @returns A request builder for creating requests to retrieve one `Queue` entity based on its keys.
   */
  getByKey(queueId: string): GetByKeyRequestBuilderV4<Queue> {
    return new GetByKeyRequestBuilderV4(Queue, { QueueID: queueId });
  }

  /**
   * Returns a request builder for querying all `Queue` entities.
   * @returns A request builder for creating requests to retrieve all `Queue` entities.
   */
  getAll(): GetAllRequestBuilderV4<Queue> {
    return new GetAllRequestBuilderV4(Queue);
  }

  /**
   * Returns a request builder for creating a `Queue` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Queue`.
   */
  create(entity: Queue): CreateRequestBuilderV4<Queue> {
    return new CreateRequestBuilderV4(Queue, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Queue`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Queue`.
   */
  update(entity: Queue): UpdateRequestBuilderV4<Queue> {
    return new UpdateRequestBuilderV4(Queue, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param queueId Key property. See [[Queue.queueId]].
   * @returns A request builder for creating requests that delete an entity of type `Queue`.
   */
  delete(queueId: string): DeleteRequestBuilderV4<Queue>;
  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Queue` by taking the entity as a parameter.
   */
  delete(entity: Queue): DeleteRequestBuilderV4<Queue>;
  delete(queueIdOrEntity: any): DeleteRequestBuilderV4<Queue> {
    return new DeleteRequestBuilderV4(Queue, queueIdOrEntity instanceof Queue ? queueIdOrEntity : { QueueID: queueIdOrEntity! });
  }
}
