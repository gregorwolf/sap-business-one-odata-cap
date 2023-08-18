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
import { ServiceCallStatus } from './ServiceCallStatus';

/**
 * Request builder class for operations supported on the {@link ServiceCallStatus} entity.
 */
export class ServiceCallStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallStatus<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallStatus` entity based on its keys.
   * @param statusId Key property. See {@link ServiceCallStatus.statusId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallStatus` entity based on its keys.
   */
  getByKey(
    statusId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallStatus<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallStatus<T>, T>(this.entityApi, {
      StatusId: statusId
    });
  }

  /**
   * Returns a request builder for querying all `ServiceCallStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallStatus<T>, T> {
    return new GetAllRequestBuilder<ServiceCallStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceCallStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallStatus`.
   */
  create(
    entity: ServiceCallStatus<T>
  ): CreateRequestBuilder<ServiceCallStatus<T>, T> {
    return new CreateRequestBuilder<ServiceCallStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallStatus`.
   */
  update(
    entity: ServiceCallStatus<T>
  ): UpdateRequestBuilder<ServiceCallStatus<T>, T> {
    return new UpdateRequestBuilder<ServiceCallStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallStatus`.
   * @param statusId Key property. See {@link ServiceCallStatus.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallStatus`.
   */
  delete(statusId: number): DeleteRequestBuilder<ServiceCallStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallStatus<T>
  ): DeleteRequestBuilder<ServiceCallStatus<T>, T>;
  delete(statusIdOrEntity: any): DeleteRequestBuilder<ServiceCallStatus<T>, T> {
    return new DeleteRequestBuilder<ServiceCallStatus<T>, T>(
      this.entityApi,
      statusIdOrEntity instanceof ServiceCallStatus
        ? statusIdOrEntity
        : { StatusId: statusIdOrEntity! }
    );
  }
}
