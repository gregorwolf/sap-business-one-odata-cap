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
import { ActivityStatuses } from './ActivityStatuses';

/**
 * Request builder class for operations supported on the {@link ActivityStatuses} entity.
 */
export class ActivityStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActivityStatuses<T>, T> {
  /**
   * Returns a request builder for retrieving one `ActivityStatuses` entity based on its keys.
   * @param statusId Key property. See {@link ActivityStatuses.statusId}.
   * @returns A request builder for creating requests to retrieve one `ActivityStatuses` entity based on its keys.
   */
  getByKey(
    statusId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ActivityStatuses<T>, T> {
    return new GetByKeyRequestBuilder<ActivityStatuses<T>, T>(this.entityApi, {
      StatusId: statusId
    });
  }

  /**
   * Returns a request builder for querying all `ActivityStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityStatuses<T>, T> {
    return new GetAllRequestBuilder<ActivityStatuses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActivityStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityStatuses`.
   */
  create(
    entity: ActivityStatuses<T>
  ): CreateRequestBuilder<ActivityStatuses<T>, T> {
    return new CreateRequestBuilder<ActivityStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityStatuses`.
   */
  update(
    entity: ActivityStatuses<T>
  ): UpdateRequestBuilder<ActivityStatuses<T>, T> {
    return new UpdateRequestBuilder<ActivityStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityStatuses`.
   * @param statusId Key property. See {@link ActivityStatuses.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatuses`.
   */
  delete(statusId: number): DeleteRequestBuilder<ActivityStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: ActivityStatuses<T>
  ): DeleteRequestBuilder<ActivityStatuses<T>, T>;
  delete(statusIdOrEntity: any): DeleteRequestBuilder<ActivityStatuses<T>, T> {
    return new DeleteRequestBuilder<ActivityStatuses<T>, T>(
      this.entityApi,
      statusIdOrEntity instanceof ActivityStatuses
        ? statusIdOrEntity
        : { StatusId: statusIdOrEntity! }
    );
  }
}
