/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ServiceCallProblemTypes } from './ServiceCallProblemTypes';

/**
 * Request builder class for operations supported on the [[ServiceCallProblemTypes]] entity.
 */
export class ServiceCallProblemTypesRequestBuilder extends RequestBuilder<ServiceCallProblemTypes> {
  /**
   * Returns a request builder for retrieving one `ServiceCallProblemTypes` entity based on its keys.
   * @param problemTypeId Key property. See [[ServiceCallProblemTypes.problemTypeId]].
   * @returns A request builder for creating requests to retrieve one `ServiceCallProblemTypes` entity based on its keys.
   */
  getByKey(problemTypeId: number): GetByKeyRequestBuilderV4<ServiceCallProblemTypes> {
    return new GetByKeyRequestBuilderV4(ServiceCallProblemTypes, { ProblemTypeID: problemTypeId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallProblemTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallProblemTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<ServiceCallProblemTypes> {
    return new GetAllRequestBuilderV4(ServiceCallProblemTypes);
  }

  /**
   * Returns a request builder for creating a `ServiceCallProblemTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemTypes`.
   */
  create(entity: ServiceCallProblemTypes): CreateRequestBuilderV4<ServiceCallProblemTypes> {
    return new CreateRequestBuilderV4(ServiceCallProblemTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallProblemTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemTypes`.
   */
  update(entity: ServiceCallProblemTypes): UpdateRequestBuilderV4<ServiceCallProblemTypes> {
    return new UpdateRequestBuilderV4(ServiceCallProblemTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param problemTypeId Key property. See [[ServiceCallProblemTypes.problemTypeId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes`.
   */
  delete(problemTypeId: number): DeleteRequestBuilderV4<ServiceCallProblemTypes>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallProblemTypes): DeleteRequestBuilderV4<ServiceCallProblemTypes>;
  delete(problemTypeIdOrEntity: any): DeleteRequestBuilderV4<ServiceCallProblemTypes> {
    return new DeleteRequestBuilderV4(ServiceCallProblemTypes, problemTypeIdOrEntity instanceof ServiceCallProblemTypes ? problemTypeIdOrEntity : { ProblemTypeID: problemTypeIdOrEntity! });
  }
}
