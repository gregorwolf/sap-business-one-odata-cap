/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallSolutionStatus } from './ServiceCallSolutionStatus';

/**
 * Request builder class for operations supported on the [[ServiceCallSolutionStatus]] entity.
 */
export class ServiceCallSolutionStatusRequestBuilder extends RequestBuilder<ServiceCallSolutionStatus> {
  /**
   * Returns a request builder for retrieving one `ServiceCallSolutionStatus` entity based on its keys.
   * @param statusId Key property. See [[ServiceCallSolutionStatus.statusId]].
   * @returns A request builder for creating requests to retrieve one `ServiceCallSolutionStatus` entity based on its keys.
   */
  getByKey(statusId: number): GetByKeyRequestBuilder<ServiceCallSolutionStatus> {
    return new GetByKeyRequestBuilder(ServiceCallSolutionStatus, { StatusId: statusId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallSolutionStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallSolutionStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallSolutionStatus> {
    return new GetAllRequestBuilder(ServiceCallSolutionStatus);
  }

  /**
   * Returns a request builder for creating a `ServiceCallSolutionStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallSolutionStatus`.
   */
  create(entity: ServiceCallSolutionStatus): CreateRequestBuilder<ServiceCallSolutionStatus> {
    return new CreateRequestBuilder(ServiceCallSolutionStatus, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallSolutionStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallSolutionStatus`.
   */
  update(entity: ServiceCallSolutionStatus): UpdateRequestBuilder<ServiceCallSolutionStatus> {
    return new UpdateRequestBuilder(ServiceCallSolutionStatus, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param statusId Key property. See [[ServiceCallSolutionStatus.statusId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus`.
   */
  delete(statusId: number): DeleteRequestBuilder<ServiceCallSolutionStatus>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallSolutionStatus): DeleteRequestBuilder<ServiceCallSolutionStatus>;
  delete(statusIdOrEntity: any): DeleteRequestBuilder<ServiceCallSolutionStatus> {
    return new DeleteRequestBuilder(ServiceCallSolutionStatus, statusIdOrEntity instanceof ServiceCallSolutionStatus ? statusIdOrEntity : { StatusId: statusIdOrEntity! });
  }
}
