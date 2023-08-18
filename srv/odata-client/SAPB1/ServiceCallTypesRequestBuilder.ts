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
import { ServiceCallTypes } from './ServiceCallTypes';

/**
 * Request builder class for operations supported on the {@link ServiceCallTypes} entity.
 */
export class ServiceCallTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallTypes<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallTypes` entity based on its keys.
   * @param callTypeId Key property. See {@link ServiceCallTypes.callTypeId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallTypes` entity based on its keys.
   */
  getByKey(
    callTypeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallTypes<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallTypes<T>, T>(this.entityApi, {
      CallTypeID: callTypeId
    });
  }

  /**
   * Returns a request builder for querying all `ServiceCallTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallTypes<T>, T> {
    return new GetAllRequestBuilder<ServiceCallTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceCallTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallTypes`.
   */
  create(
    entity: ServiceCallTypes<T>
  ): CreateRequestBuilder<ServiceCallTypes<T>, T> {
    return new CreateRequestBuilder<ServiceCallTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallTypes`.
   */
  update(
    entity: ServiceCallTypes<T>
  ): UpdateRequestBuilder<ServiceCallTypes<T>, T> {
    return new UpdateRequestBuilder<ServiceCallTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
   * @param callTypeId Key property. See {@link ServiceCallTypes.callTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes`.
   */
  delete(callTypeId: number): DeleteRequestBuilder<ServiceCallTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallTypes<T>
  ): DeleteRequestBuilder<ServiceCallTypes<T>, T>;
  delete(
    callTypeIdOrEntity: any
  ): DeleteRequestBuilder<ServiceCallTypes<T>, T> {
    return new DeleteRequestBuilder<ServiceCallTypes<T>, T>(
      this.entityApi,
      callTypeIdOrEntity instanceof ServiceCallTypes
        ? callTypeIdOrEntity
        : { CallTypeID: callTypeIdOrEntity! }
    );
  }
}
