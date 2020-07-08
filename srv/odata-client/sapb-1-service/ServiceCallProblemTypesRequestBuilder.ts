/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(problemTypeId: number): GetByKeyRequestBuilder<ServiceCallProblemTypes> {
    return new GetByKeyRequestBuilder(ServiceCallProblemTypes, { ProblemTypeID: problemTypeId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallProblemTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallProblemTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallProblemTypes> {
    return new GetAllRequestBuilder(ServiceCallProblemTypes);
  }

  /**
   * Returns a request builder for creating a `ServiceCallProblemTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemTypes`.
   */
  create(entity: ServiceCallProblemTypes): CreateRequestBuilder<ServiceCallProblemTypes> {
    return new CreateRequestBuilder(ServiceCallProblemTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallProblemTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemTypes`.
   */
  update(entity: ServiceCallProblemTypes): UpdateRequestBuilder<ServiceCallProblemTypes> {
    return new UpdateRequestBuilder(ServiceCallProblemTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param problemTypeId Key property. See [[ServiceCallProblemTypes.problemTypeId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes`.
   */
  delete(problemTypeId: number): DeleteRequestBuilder<ServiceCallProblemTypes>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallProblemTypes): DeleteRequestBuilder<ServiceCallProblemTypes>;
  delete(problemTypeIdOrEntity: any): DeleteRequestBuilder<ServiceCallProblemTypes> {
    return new DeleteRequestBuilder(ServiceCallProblemTypes, problemTypeIdOrEntity instanceof ServiceCallProblemTypes ? problemTypeIdOrEntity : { ProblemTypeID: problemTypeIdOrEntity! });
  }
}
