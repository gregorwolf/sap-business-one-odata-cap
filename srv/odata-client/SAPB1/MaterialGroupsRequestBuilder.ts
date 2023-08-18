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
import { MaterialGroups } from './MaterialGroups';

/**
 * Request builder class for operations supported on the {@link MaterialGroups} entity.
 */
export class MaterialGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `MaterialGroups` entity based on its keys.
   * @param absEntry Key property. See {@link MaterialGroups.absEntry}.
   * @returns A request builder for creating requests to retrieve one `MaterialGroups` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MaterialGroups<T>, T> {
    return new GetByKeyRequestBuilder<MaterialGroups<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `MaterialGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialGroups<T>, T> {
    return new GetAllRequestBuilder<MaterialGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaterialGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialGroups`.
   */
  create(
    entity: MaterialGroups<T>
  ): CreateRequestBuilder<MaterialGroups<T>, T> {
    return new CreateRequestBuilder<MaterialGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialGroups`.
   */
  update(
    entity: MaterialGroups<T>
  ): UpdateRequestBuilder<MaterialGroups<T>, T> {
    return new UpdateRequestBuilder<MaterialGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param absEntry Key property. See {@link MaterialGroups.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups`.
   */
  delete(absEntry: number): DeleteRequestBuilder<MaterialGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialGroups` by taking the entity as a parameter.
   */
  delete(entity: MaterialGroups<T>): DeleteRequestBuilder<MaterialGroups<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<MaterialGroups<T>, T> {
    return new DeleteRequestBuilder<MaterialGroups<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof MaterialGroups
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
