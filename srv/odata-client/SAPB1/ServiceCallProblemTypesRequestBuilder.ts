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
import { ServiceCallProblemTypes } from './ServiceCallProblemTypes';

/**
 * Request builder class for operations supported on the {@link ServiceCallProblemTypes} entity.
 */
export class ServiceCallProblemTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallProblemTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallProblemTypes` entity based on its keys.
   * @param problemTypeId Key property. See {@link ServiceCallProblemTypes.problemTypeId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallProblemTypes` entity based on its keys.
   */
  getByKey(
    problemTypeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallProblemTypes<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallProblemTypes<T>, T>(
      this.entityApi,
      { ProblemTypeID: problemTypeId }
    );
  }

  /**
   * Returns a request builder for querying all `ServiceCallProblemTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallProblemTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallProblemTypes<T>, T> {
    return new GetAllRequestBuilder<ServiceCallProblemTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceCallProblemTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemTypes`.
   */
  create(
    entity: ServiceCallProblemTypes<T>
  ): CreateRequestBuilder<ServiceCallProblemTypes<T>, T> {
    return new CreateRequestBuilder<ServiceCallProblemTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallProblemTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemTypes`.
   */
  update(
    entity: ServiceCallProblemTypes<T>
  ): UpdateRequestBuilder<ServiceCallProblemTypes<T>, T> {
    return new UpdateRequestBuilder<ServiceCallProblemTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param problemTypeId Key property. See {@link ServiceCallProblemTypes.problemTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes`.
   */
  delete(
    problemTypeId: number
  ): DeleteRequestBuilder<ServiceCallProblemTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallProblemTypes<T>
  ): DeleteRequestBuilder<ServiceCallProblemTypes<T>, T>;
  delete(
    problemTypeIdOrEntity: any
  ): DeleteRequestBuilder<ServiceCallProblemTypes<T>, T> {
    return new DeleteRequestBuilder<ServiceCallProblemTypes<T>, T>(
      this.entityApi,
      problemTypeIdOrEntity instanceof ServiceCallProblemTypes
        ? problemTypeIdOrEntity
        : { ProblemTypeID: problemTypeIdOrEntity! }
    );
  }
}
