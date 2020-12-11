/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(statusId: number): GetByKeyRequestBuilderV4<ServiceCallSolutionStatus> {
    return new GetByKeyRequestBuilderV4(ServiceCallSolutionStatus, { StatusId: statusId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallSolutionStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallSolutionStatus` entities.
   */
  getAll(): GetAllRequestBuilderV4<ServiceCallSolutionStatus> {
    return new GetAllRequestBuilderV4(ServiceCallSolutionStatus);
  }

  /**
   * Returns a request builder for creating a `ServiceCallSolutionStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallSolutionStatus`.
   */
  create(entity: ServiceCallSolutionStatus): CreateRequestBuilderV4<ServiceCallSolutionStatus> {
    return new CreateRequestBuilderV4(ServiceCallSolutionStatus, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallSolutionStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallSolutionStatus`.
   */
  update(entity: ServiceCallSolutionStatus): UpdateRequestBuilderV4<ServiceCallSolutionStatus> {
    return new UpdateRequestBuilderV4(ServiceCallSolutionStatus, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param statusId Key property. See [[ServiceCallSolutionStatus.statusId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus`.
   */
  delete(statusId: number): DeleteRequestBuilderV4<ServiceCallSolutionStatus>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallSolutionStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallSolutionStatus` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallSolutionStatus): DeleteRequestBuilderV4<ServiceCallSolutionStatus>;
  delete(statusIdOrEntity: any): DeleteRequestBuilderV4<ServiceCallSolutionStatus> {
    return new DeleteRequestBuilderV4(ServiceCallSolutionStatus, statusIdOrEntity instanceof ServiceCallSolutionStatus ? statusIdOrEntity : { StatusId: statusIdOrEntity! });
  }
}
