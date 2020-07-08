/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ServiceGroups } from './ServiceGroups';

/**
 * Request builder class for operations supported on the [[ServiceGroups]] entity.
 */
export class ServiceGroupsRequestBuilder extends RequestBuilder<ServiceGroups> {
  /**
   * Returns a request builder for retrieving one `ServiceGroups` entity based on its keys.
   * @param absEntry Key property. See [[ServiceGroups.absEntry]].
   * @returns A request builder for creating requests to retrieve one `ServiceGroups` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<ServiceGroups> {
    return new GetByKeyRequestBuilder(ServiceGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `ServiceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceGroups> {
    return new GetAllRequestBuilder(ServiceGroups);
  }

  /**
   * Returns a request builder for creating a `ServiceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceGroups`.
   */
  create(entity: ServiceGroups): CreateRequestBuilder<ServiceGroups> {
    return new CreateRequestBuilder(ServiceGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceGroups`.
   */
  update(entity: ServiceGroups): UpdateRequestBuilder<ServiceGroups> {
    return new UpdateRequestBuilder(ServiceGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param absEntry Key property. See [[ServiceGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ServiceGroups>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups` by taking the entity as a parameter.
   */
  delete(entity: ServiceGroups): DeleteRequestBuilder<ServiceGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<ServiceGroups> {
    return new DeleteRequestBuilder(ServiceGroups, absEntryOrEntity instanceof ServiceGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
