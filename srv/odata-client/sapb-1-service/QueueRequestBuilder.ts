/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(queueId: string): GetByKeyRequestBuilder<Queue> {
    return new GetByKeyRequestBuilder(Queue, { QueueID: queueId });
  }

  /**
   * Returns a request builder for querying all `Queue` entities.
   * @returns A request builder for creating requests to retrieve all `Queue` entities.
   */
  getAll(): GetAllRequestBuilder<Queue> {
    return new GetAllRequestBuilder(Queue);
  }

  /**
   * Returns a request builder for creating a `Queue` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Queue`.
   */
  create(entity: Queue): CreateRequestBuilder<Queue> {
    return new CreateRequestBuilder(Queue, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Queue`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Queue`.
   */
  update(entity: Queue): UpdateRequestBuilder<Queue> {
    return new UpdateRequestBuilder(Queue, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param queueId Key property. See [[Queue.queueId]].
   * @returns A request builder for creating requests that delete an entity of type `Queue`.
   */
  delete(queueId: string): DeleteRequestBuilder<Queue>;
  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Queue` by taking the entity as a parameter.
   */
  delete(entity: Queue): DeleteRequestBuilder<Queue>;
  delete(queueIdOrEntity: any): DeleteRequestBuilder<Queue> {
    return new DeleteRequestBuilder(Queue, queueIdOrEntity instanceof Queue ? queueIdOrEntity : { QueueID: queueIdOrEntity! });
  }
}
