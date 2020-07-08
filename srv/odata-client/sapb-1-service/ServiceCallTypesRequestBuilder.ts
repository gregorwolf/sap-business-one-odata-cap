/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceCallTypes } from './ServiceCallTypes';

/**
 * Request builder class for operations supported on the [[ServiceCallTypes]] entity.
 */
export class ServiceCallTypesRequestBuilder extends RequestBuilder<ServiceCallTypes> {
  /**
   * Returns a request builder for retrieving one `ServiceCallTypes` entity based on its keys.
   * @param callTypeId Key property. See [[ServiceCallTypes.callTypeId]].
   * @returns A request builder for creating requests to retrieve one `ServiceCallTypes` entity based on its keys.
   */
  getByKey(callTypeId: number): GetByKeyRequestBuilder<ServiceCallTypes> {
    return new GetByKeyRequestBuilder(ServiceCallTypes, { CallTypeID: callTypeId });
  }

  /**
   * Returns a request builder for querying all `ServiceCallTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceCallTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceCallTypes> {
    return new GetAllRequestBuilder(ServiceCallTypes);
  }

  /**
   * Returns a request builder for creating a `ServiceCallTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceCallTypes`.
   */
  create(entity: ServiceCallTypes): CreateRequestBuilder<ServiceCallTypes> {
    return new CreateRequestBuilder(ServiceCallTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceCallTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceCallTypes`.
   */
  update(entity: ServiceCallTypes): UpdateRequestBuilder<ServiceCallTypes> {
    return new UpdateRequestBuilder(ServiceCallTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
   * @param callTypeId Key property. See [[ServiceCallTypes.callTypeId]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes`.
   */
  delete(callTypeId: number): DeleteRequestBuilder<ServiceCallTypes>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceCallTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceCallTypes` by taking the entity as a parameter.
   */
  delete(entity: ServiceCallTypes): DeleteRequestBuilder<ServiceCallTypes>;
  delete(callTypeIdOrEntity: any): DeleteRequestBuilder<ServiceCallTypes> {
    return new DeleteRequestBuilder(ServiceCallTypes, callTypeIdOrEntity instanceof ServiceCallTypes ? callTypeIdOrEntity : { CallTypeID: callTypeIdOrEntity! });
  }
}
