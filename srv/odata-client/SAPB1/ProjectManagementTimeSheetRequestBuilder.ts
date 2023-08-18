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
import { ProjectManagementTimeSheet } from './ProjectManagementTimeSheet';

/**
 * Request builder class for operations supported on the {@link ProjectManagementTimeSheet} entity.
 */
export class ProjectManagementTimeSheetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectManagementTimeSheet<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProjectManagementTimeSheet` entity based on its keys.
   * @param absEntry Key property. See {@link ProjectManagementTimeSheet.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ProjectManagementTimeSheet` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProjectManagementTimeSheet<T>, T> {
    return new GetByKeyRequestBuilder<ProjectManagementTimeSheet<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ProjectManagementTimeSheet` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectManagementTimeSheet` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectManagementTimeSheet<T>, T> {
    return new GetAllRequestBuilder<ProjectManagementTimeSheet<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectManagementTimeSheet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectManagementTimeSheet`.
   */
  create(
    entity: ProjectManagementTimeSheet<T>
  ): CreateRequestBuilder<ProjectManagementTimeSheet<T>, T> {
    return new CreateRequestBuilder<ProjectManagementTimeSheet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectManagementTimeSheet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectManagementTimeSheet`.
   */
  update(
    entity: ProjectManagementTimeSheet<T>
  ): UpdateRequestBuilder<ProjectManagementTimeSheet<T>, T> {
    return new UpdateRequestBuilder<ProjectManagementTimeSheet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
   * @param absEntry Key property. See {@link ProjectManagementTimeSheet.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet`.
   */
  delete(
    absEntry: number
  ): DeleteRequestBuilder<ProjectManagementTimeSheet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectManagementTimeSheet<T>
  ): DeleteRequestBuilder<ProjectManagementTimeSheet<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<ProjectManagementTimeSheet<T>, T> {
    return new DeleteRequestBuilder<ProjectManagementTimeSheet<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ProjectManagementTimeSheet
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
