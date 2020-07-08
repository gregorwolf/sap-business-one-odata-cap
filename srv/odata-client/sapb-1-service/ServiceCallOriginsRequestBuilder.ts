/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallOrigins } from './ServiceCallOrigins';

/**
 * Request builder class for operations supported on the [[ServiceCallOrigins]] entity.
 */
export class ServiceCallOriginsRequestBuilder extends RequestBuilder<ServiceCallOrigins> {
  /**
   * Returns a request builder for retrieving one `ServiceCallOrigins` entity based on its keys.
   * @param originId Key property. See [[ServiceCallOrigins.originId]].
   * @returns A request builder for creating requests to retrieve one `ServiceCallOrigins` entity based on its keys.
   */
  getByKey(originId: number): GetByKeyRequestBuilder<ServiceCallOrigins> {
    return new GetByKeyRequestBuilder(ServiceCallOrigins, { OriginID: originId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallOrigins` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallOrigins` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallOrigins> {
    return new GetAllRequestBuilder(ServiceCallOrigins);
  }

  /**
   * Returns a request builder for creating a `ServiceCallOrigins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallOrigins`.
   */
  create(entity: ServiceCallOrigins): CreateRequestBuilder<ServiceCallOrigins> {
    return new CreateRequestBuilder(ServiceCallOrigins, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallOrigins`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallOrigins`.
   */
  update(entity: ServiceCallOrigins): UpdateRequestBuilder<ServiceCallOrigins> {
    return new UpdateRequestBuilder(ServiceCallOrigins, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
   * @param originId Key property. See [[ServiceCallOrigins.originId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins`.
   */
  delete(originId: number): DeleteRequestBuilder<ServiceCallOrigins>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallOrigins`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallOrigins` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallOrigins): DeleteRequestBuilder<ServiceCallOrigins>;
  delete(originIdOrEntity: any): DeleteRequestBuilder<ServiceCallOrigins> {
    return new DeleteRequestBuilder(ServiceCallOrigins, originIdOrEntity instanceof ServiceCallOrigins ? originIdOrEntity : { OriginID: originIdOrEntity! });
  }
}
