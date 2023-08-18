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
import { UnitOfMeasurementGroups } from './UnitOfMeasurementGroups';

/**
 * Request builder class for operations supported on the {@link UnitOfMeasurementGroups} entity.
 */
export class UnitOfMeasurementGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitOfMeasurementGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `UnitOfMeasurementGroups` entity based on its keys.
   * @param absEntry Key property. See {@link UnitOfMeasurementGroups.absEntry}.
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasurementGroups` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UnitOfMeasurementGroups<T>, T> {
    return new GetByKeyRequestBuilder<UnitOfMeasurementGroups<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `UnitOfMeasurementGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasurementGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasurementGroups<T>, T> {
    return new GetAllRequestBuilder<UnitOfMeasurementGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasurementGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurementGroups`.
   */
  create(
    entity: UnitOfMeasurementGroups<T>
  ): CreateRequestBuilder<UnitOfMeasurementGroups<T>, T> {
    return new CreateRequestBuilder<UnitOfMeasurementGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasurementGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurementGroups`.
   */
  update(
    entity: UnitOfMeasurementGroups<T>
  ): UpdateRequestBuilder<UnitOfMeasurementGroups<T>, T> {
    return new UpdateRequestBuilder<UnitOfMeasurementGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
   * @param absEntry Key property. See {@link UnitOfMeasurementGroups.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<UnitOfMeasurementGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups` by taking the entity as a parameter.
   */
  delete(
    entity: UnitOfMeasurementGroups<T>
  ): DeleteRequestBuilder<UnitOfMeasurementGroups<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<UnitOfMeasurementGroups<T>, T> {
    return new DeleteRequestBuilder<UnitOfMeasurementGroups<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof UnitOfMeasurementGroups
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
