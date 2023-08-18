/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Queue } from './Queue';

/**
 * Request builder class for operations supported on the {@link Queue} entity.
 */
export class QueueRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Queue<T>, T> {
  /**
   * Returns a request builder for retrieving one `Queue` entity based on its keys.
   * @param queueId Key property. See {@link Queue.queueId}.
   * @returns A request builder for creating requests to retrieve one `Queue` entity based on its keys.
   */
  getByKey(
    queueId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Queue<T>, T> {
    return new GetByKeyRequestBuilder<Queue<T>, T>(this.entityApi, {
      QueueID: queueId
    });
  }

  /**
   * Returns a request builder for querying all `Queue` entities.
   * @returns A request builder for creating requests to retrieve all `Queue` entities.
   */
  getAll(): GetAllRequestBuilder<Queue<T>, T> {
    return new GetAllRequestBuilder<Queue<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Queue` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Queue`.
   */
  create(entity: Queue<T>): CreateRequestBuilder<Queue<T>, T> {
    return new CreateRequestBuilder<Queue<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Queue`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Queue`.
   */
  update(entity: Queue<T>): UpdateRequestBuilder<Queue<T>, T> {
    return new UpdateRequestBuilder<Queue<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param queueId Key property. See {@link Queue.queueId}.
   * @returns A request builder for creating requests that delete an entity of type `Queue`.
   */
  delete(queueId: string): DeleteRequestBuilder<Queue<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Queue`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Queue` by taking the entity as a parameter.
   */
  delete(entity: Queue<T>): DeleteRequestBuilder<Queue<T>, T>;
  delete(queueIdOrEntity: any): DeleteRequestBuilder<Queue<T>, T> {
    return new DeleteRequestBuilder<Queue<T>, T>(
      this.entityApi,
      queueIdOrEntity instanceof Queue
        ? queueIdOrEntity
        : { QueueID: queueIdOrEntity! }
    );
  }
}
