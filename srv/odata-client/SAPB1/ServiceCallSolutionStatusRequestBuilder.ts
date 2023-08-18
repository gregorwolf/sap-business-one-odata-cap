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
import { ServiceCallSolutionStatus } from './ServiceCallSolutionStatus';

/**
 * Request builder class for operations supported on the {@link ServiceCallSolutionStatus} entity.
 */
export class ServiceCallSolutionStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallSolutionStatus<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallSolutionStatus` entity based on its keys.
   * @param statusId Key property. See {@link ServiceCallSolutionStatus.statusId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallSolutionStatus` entity based on its keys.
   */
  getByKey(
    statusId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallSolutionStatus<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallSolutionStatus<T>, T>(
      this.entityApi,
      { StatusId: statusId }
    );
  }

  /**
   * Returns a request builder for querying all `ServiceCallSolutionStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallSolutionStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallSolutionStatus<T>, T> {
    return new GetAllRequestBuilder<ServiceCallSolutionStatus<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceCallSolutionStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallSolutionStatus`.
   */
  create(
    entity: ServiceCallSolutionStatus<T>
  ): CreateRequestBuilder<ServiceCallSolutionStatus<T>, T> {
    return new CreateRequestBuilder<ServiceCallSolutionStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallSolutionStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallSolutionStatus`.
   */
  update(
    entity: ServiceCallSolutionStatus<T>
  ): UpdateRequestBuilder<ServiceCallSolutionStatus<T>, T> {
    return new UpdateRequestBuilder<ServiceCallSolutionStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param statusId Key property. See {@link ServiceCallSolutionStatus.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus`.
   */
  delete(
    statusId: number
  ): DeleteRequestBuilder<ServiceCallSolutionStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallSolutionStatus<T>
  ): DeleteRequestBuilder<ServiceCallSolutionStatus<T>, T>;
  delete(
    statusIdOrEntity: any
  ): DeleteRequestBuilder<ServiceCallSolutionStatus<T>, T> {
    return new DeleteRequestBuilder<ServiceCallSolutionStatus<T>, T>(
      this.entityApi,
      statusIdOrEntity instanceof ServiceCallSolutionStatus
        ? statusIdOrEntity
        : { StatusId: statusIdOrEntity! }
    );
  }
}
