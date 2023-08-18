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
import { ServiceCalls } from './ServiceCalls';

/**
 * Request builder class for operations supported on the {@link ServiceCalls} entity.
 */
export class ServiceCallsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCalls<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCalls` entity based on its keys.
   * @param serviceCallId Key property. See {@link ServiceCalls.serviceCallId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCalls` entity based on its keys.
   */
  getByKey(
    serviceCallId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCalls<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCalls<T>, T>(this.entityApi, {
      ServiceCallID: serviceCallId
    });
  }

  /**
   * Returns a request builder for querying all `ServiceCalls` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCalls` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCalls<T>, T> {
    return new GetAllRequestBuilder<ServiceCalls<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceCalls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCalls`.
   */
  create(entity: ServiceCalls<T>): CreateRequestBuilder<ServiceCalls<T>, T> {
    return new CreateRequestBuilder<ServiceCalls<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCalls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCalls`.
   */
  update(entity: ServiceCalls<T>): UpdateRequestBuilder<ServiceCalls<T>, T> {
    return new UpdateRequestBuilder<ServiceCalls<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCalls`.
   * @param serviceCallId Key property. See {@link ServiceCalls.serviceCallId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCalls`.
   */
  delete(serviceCallId: number): DeleteRequestBuilder<ServiceCalls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCalls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCalls` by taking the entity as a parameter.
   */
  delete(entity: ServiceCalls<T>): DeleteRequestBuilder<ServiceCalls<T>, T>;
  delete(serviceCallIdOrEntity: any): DeleteRequestBuilder<ServiceCalls<T>, T> {
    return new DeleteRequestBuilder<ServiceCalls<T>, T>(
      this.entityApi,
      serviceCallIdOrEntity instanceof ServiceCalls
        ? serviceCallIdOrEntity
        : { ServiceCallID: serviceCallIdOrEntity! }
    );
  }
}
