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
import { ServiceGroups } from './ServiceGroups';

/**
 * Request builder class for operations supported on the {@link ServiceGroups} entity.
 */
export class ServiceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceGroups` entity based on its keys.
   * @param absEntry Key property. See {@link ServiceGroups.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ServiceGroups` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceGroups<T>, T> {
    return new GetByKeyRequestBuilder<ServiceGroups<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `ServiceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceGroups<T>, T> {
    return new GetAllRequestBuilder<ServiceGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceGroups`.
   */
  create(entity: ServiceGroups<T>): CreateRequestBuilder<ServiceGroups<T>, T> {
    return new CreateRequestBuilder<ServiceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceGroups`.
   */
  update(entity: ServiceGroups<T>): UpdateRequestBuilder<ServiceGroups<T>, T> {
    return new UpdateRequestBuilder<ServiceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param absEntry Key property. See {@link ServiceGroups.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ServiceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceGroups` by taking the entity as a parameter.
   */
  delete(entity: ServiceGroups<T>): DeleteRequestBuilder<ServiceGroups<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<ServiceGroups<T>, T> {
    return new DeleteRequestBuilder<ServiceGroups<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ServiceGroups
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
