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
import { ServiceCallProblemSubTypes } from './ServiceCallProblemSubTypes';

/**
 * Request builder class for operations supported on the {@link ServiceCallProblemSubTypes} entity.
 */
export class ServiceCallProblemSubTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallProblemSubTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallProblemSubTypes` entity based on its keys.
   * @param problemSubTypeId Key property. See {@link ServiceCallProblemSubTypes.problemSubTypeId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallProblemSubTypes` entity based on its keys.
   */
  getByKey(
    problemSubTypeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallProblemSubTypes<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallProblemSubTypes<T>, T>(
      this.entityApi,
      { ProblemSubTypeID: problemSubTypeId }
    );
  }

  /**
   * Returns a request builder for querying all `ServiceCallProblemSubTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallProblemSubTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallProblemSubTypes<T>, T> {
    return new GetAllRequestBuilder<ServiceCallProblemSubTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceCallProblemSubTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemSubTypes`.
   */
  create(
    entity: ServiceCallProblemSubTypes<T>
  ): CreateRequestBuilder<ServiceCallProblemSubTypes<T>, T> {
    return new CreateRequestBuilder<ServiceCallProblemSubTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallProblemSubTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemSubTypes`.
   */
  update(
    entity: ServiceCallProblemSubTypes<T>
  ): UpdateRequestBuilder<ServiceCallProblemSubTypes<T>, T> {
    return new UpdateRequestBuilder<ServiceCallProblemSubTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemSubTypes`.
   * @param problemSubTypeId Key property. See {@link ServiceCallProblemSubTypes.problemSubTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemSubTypes`.
   */
  delete(
    problemSubTypeId: number
  ): DeleteRequestBuilder<ServiceCallProblemSubTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallProblemSubTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallProblemSubTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallProblemSubTypes<T>
  ): DeleteRequestBuilder<ServiceCallProblemSubTypes<T>, T>;
  delete(
    problemSubTypeIdOrEntity: any
  ): DeleteRequestBuilder<ServiceCallProblemSubTypes<T>, T> {
    return new DeleteRequestBuilder<ServiceCallProblemSubTypes<T>, T>(
      this.entityApi,
      problemSubTypeIdOrEntity instanceof ServiceCallProblemSubTypes
        ? problemSubTypeIdOrEntity
        : { ProblemSubTypeID: problemSubTypeIdOrEntity! }
    );
  }
}
