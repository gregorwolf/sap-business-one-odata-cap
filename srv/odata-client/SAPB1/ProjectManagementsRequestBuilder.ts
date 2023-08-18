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
import { ProjectManagements } from './ProjectManagements';

/**
 * Request builder class for operations supported on the {@link ProjectManagements} entity.
 */
export class ProjectManagementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectManagements<T>, T> {
  /**
   * Returns a request builder for retrieving one `ProjectManagements` entity based on its keys.
   * @param absEntry Key property. See {@link ProjectManagements.absEntry}.
   * @returns A request builder for creating requests to retrieve one `ProjectManagements` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProjectManagements<T>, T> {
    return new GetByKeyRequestBuilder<ProjectManagements<T>, T>(
      this.entityApi,
      { AbsEntry: absEntry }
    );
  }

  /**
   * Returns a request builder for querying all `ProjectManagements` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectManagements` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectManagements<T>, T> {
    return new GetAllRequestBuilder<ProjectManagements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectManagements`.
   */
  create(
    entity: ProjectManagements<T>
  ): CreateRequestBuilder<ProjectManagements<T>, T> {
    return new CreateRequestBuilder<ProjectManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectManagements`.
   */
  update(
    entity: ProjectManagements<T>
  ): UpdateRequestBuilder<ProjectManagements<T>, T> {
    return new UpdateRequestBuilder<ProjectManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectManagements`.
   * @param absEntry Key property. See {@link ProjectManagements.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagements`.
   */
  delete(absEntry: number): DeleteRequestBuilder<ProjectManagements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectManagements` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectManagements<T>
  ): DeleteRequestBuilder<ProjectManagements<T>, T>;
  delete(
    absEntryOrEntity: any
  ): DeleteRequestBuilder<ProjectManagements<T>, T> {
    return new DeleteRequestBuilder<ProjectManagements<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof ProjectManagements
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}
