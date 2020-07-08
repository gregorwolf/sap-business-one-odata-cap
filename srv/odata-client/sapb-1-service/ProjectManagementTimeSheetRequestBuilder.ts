/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ProjectManagementTimeSheet } from './ProjectManagementTimeSheet';

/**
 * Request builder class for operations supported on the [[ProjectManagementTimeSheet]] entity.
 */
export class ProjectManagementTimeSheetRequestBuilder extends RequestBuilder<ProjectManagementTimeSheet> {
  /**
   * Returns a request builder for retrieving one `ProjectManagementTimeSheet` entity based on its keys.
   * @param absEntry Key property. See [[ProjectManagementTimeSheet.absEntry]].
   * @returns A request builder for creating requests to retrieve one `ProjectManagementTimeSheet` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<ProjectManagementTimeSheet> {
    return new GetByKeyRequestBuilder(ProjectManagementTimeSheet, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `ProjectManagementTimeSheet` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectManagementTimeSheet` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectManagementTimeSheet> {
    return new GetAllRequestBuilder(ProjectManagementTimeSheet);
  }

  /**
   * Returns a request builder for creating a `ProjectManagementTimeSheet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectManagementTimeSheet`.
   */
  create(entity: ProjectManagementTimeSheet): CreateRequestBuilder<ProjectManagementTimeSheet> {
    return new CreateRequestBuilder(ProjectManagementTimeSheet, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectManagementTimeSheet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectManagementTimeSheet`.
   */
  update(entity: ProjectManagementTimeSheet): UpdateRequestBuilder<ProjectManagementTimeSheet> {
    return new UpdateRequestBuilder(ProjectManagementTimeSheet, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
   * @param absEntry Key property. See [[ProjectManagementTimeSheet.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ProjectManagementTimeSheet>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectManagementTimeSheet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagementTimeSheet` by taking the entity as a parameter.
   */
  delete(entity: ProjectManagementTimeSheet): DeleteRequestBuilder<ProjectManagementTimeSheet>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<ProjectManagementTimeSheet> {
    return new DeleteRequestBuilder(ProjectManagementTimeSheet, absEntryOrEntity instanceof ProjectManagementTimeSheet ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
