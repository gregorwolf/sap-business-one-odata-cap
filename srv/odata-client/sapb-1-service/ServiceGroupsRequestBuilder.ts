/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<ServiceGroups> {
    return new GetByKeyRequestBuilderV4(ServiceGroups, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `ServiceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<ServiceGroups> {
    return new GetAllRequestBuilderV4(ServiceGroups);
  }

  /**
   * Returns a request builder for creating a `ServiceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceGroups`.
   */
  create(entity: ServiceGroups): CreateRequestBuilderV4<ServiceGroups> {
    return new CreateRequestBuilderV4(ServiceGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceGroups`.
   */
  update(entity: ServiceGroups): UpdateRequestBuilderV4<ServiceGroups> {
    return new UpdateRequestBuilderV4(ServiceGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param absEntry Key property. See [[ServiceGroups.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<ServiceGroups>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups` by taking the entity as a parameter.
   */
  delete(entity: ServiceGroups): DeleteRequestBuilderV4<ServiceGroups>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<ServiceGroups> {
    return new DeleteRequestBuilderV4(ServiceGroups, absEntryOrEntity instanceof ServiceGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
