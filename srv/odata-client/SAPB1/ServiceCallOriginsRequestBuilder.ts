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
import { ServiceCallOrigins } from './ServiceCallOrigins';

/**
 * Request builder class for operations supported on the {@link ServiceCallOrigins} entity.
 */
export class ServiceCallOriginsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceCallOrigins<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceCallOrigins` entity based on its keys.
   * @param originId Key property. See {@link ServiceCallOrigins.originId}.
   * @returns A request builder for creating requests to retrieve one `ServiceCallOrigins` entity based on its keys.
   */
  getByKey(
    originId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceCallOrigins<T>, T> {
    return new GetByKeyRequestBuilder<ServiceCallOrigins<T>, T>(
      this.entityApi,
      { OriginID: originId }
    );
  }

  /**
   * Returns a request builder for querying all `ServiceCallOrigins` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallOrigins` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallOrigins<T>, T> {
    return new GetAllRequestBuilder<ServiceCallOrigins<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceCallOrigins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallOrigins`.
   */
  create(
    entity: ServiceCallOrigins<T>
  ): CreateRequestBuilder<ServiceCallOrigins<T>, T> {
    return new CreateRequestBuilder<ServiceCallOrigins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallOrigins`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallOrigins`.
   */
  update(
    entity: ServiceCallOrigins<T>
  ): UpdateRequestBuilder<ServiceCallOrigins<T>, T> {
    return new UpdateRequestBuilder<ServiceCallOrigins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
   * @param originId Key property. See {@link ServiceCallOrigins.originId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins`.
   */
  delete(originId: number): DeleteRequestBuilder<ServiceCallOrigins<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceCallOrigins<T>
  ): DeleteRequestBuilder<ServiceCallOrigins<T>, T>;
  delete(
    originIdOrEntity: any
  ): DeleteRequestBuilder<ServiceCallOrigins<T>, T> {
    return new DeleteRequestBuilder<ServiceCallOrigins<T>, T>(
      this.entityApi,
      originIdOrEntity instanceof ServiceCallOrigins
        ? originIdOrEntity
        : { OriginID: originIdOrEntity! }
    );
  }
}
