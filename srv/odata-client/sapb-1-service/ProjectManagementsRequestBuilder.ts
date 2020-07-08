/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ProjectManagements } from './ProjectManagements';

/**
 * Request builder class for operations supported on the [[ProjectManagements]] entity.
 */
export class ProjectManagementsRequestBuilder extends RequestBuilder<ProjectManagements> {
  /**
   * Returns a request builder for retrieving one `ProjectManagements` entity based on its keys.
   * @param absEntry Key property. See [[ProjectManagements.absEntry]].
   * @returns A request builder for creating requests to retrieve one `ProjectManagements` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilder<ProjectManagements> {
    return new GetByKeyRequestBuilder(ProjectManagements, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `ProjectManagements` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectManagements` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectManagements> {
    return new GetAllRequestBuilder(ProjectManagements);
  }

  /**
   * Returns a request builder for creating a `ProjectManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectManagements`.
   */
  create(entity: ProjectManagements): CreateRequestBuilder<ProjectManagements> {
    return new CreateRequestBuilder(ProjectManagements, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectManagements`.
   */
  update(entity: ProjectManagements): UpdateRequestBuilder<ProjectManagements> {
    return new UpdateRequestBuilder(ProjectManagements, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectManagements`.
   * @param absEntry Key property. See [[ProjectManagements.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagements`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ProjectManagements>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagements` by taking the entity as a parameter.
   */
  delete(entity: ProjectManagements): DeleteRequestBuilder<ProjectManagements>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<ProjectManagements> {
    return new DeleteRequestBuilder(ProjectManagements, absEntryOrEntity instanceof ProjectManagements ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}
