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
import { UserPermissionTree } from './UserPermissionTree';

/**
 * Request builder class for operations supported on the {@link UserPermissionTree} entity.
 */
export class UserPermissionTreeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserPermissionTree<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserPermissionTree` entity based on its keys.
   * @param permissionId Key property. See {@link UserPermissionTree.permissionId}.
   * @returns A request builder for creating requests to retrieve one `UserPermissionTree` entity based on its keys.
   */
  getByKey(
    permissionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserPermissionTree<T>, T> {
    return new GetByKeyRequestBuilder<UserPermissionTree<T>, T>(
      this.entityApi,
      { PermissionID: permissionId }
    );
  }

  /**
   * Returns a request builder for querying all `UserPermissionTree` entities.
   * @returns A request builder for creating requests to retrieve all `UserPermissionTree` entities.
   */
  getAll(): GetAllRequestBuilder<UserPermissionTree<T>, T> {
    return new GetAllRequestBuilder<UserPermissionTree<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserPermissionTree` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserPermissionTree`.
   */
  create(
    entity: UserPermissionTree<T>
  ): CreateRequestBuilder<UserPermissionTree<T>, T> {
    return new CreateRequestBuilder<UserPermissionTree<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserPermissionTree`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserPermissionTree`.
   */
  update(
    entity: UserPermissionTree<T>
  ): UpdateRequestBuilder<UserPermissionTree<T>, T> {
    return new UpdateRequestBuilder<UserPermissionTree<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserPermissionTree`.
   * @param permissionId Key property. See {@link UserPermissionTree.permissionId}.
   * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree`.
   */
  delete(permissionId: string): DeleteRequestBuilder<UserPermissionTree<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserPermissionTree`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree` by taking the entity as a parameter.
   */
  delete(
    entity: UserPermissionTree<T>
  ): DeleteRequestBuilder<UserPermissionTree<T>, T>;
  delete(
    permissionIdOrEntity: any
  ): DeleteRequestBuilder<UserPermissionTree<T>, T> {
    return new DeleteRequestBuilder<UserPermissionTree<T>, T>(
      this.entityApi,
      permissionIdOrEntity instanceof UserPermissionTree
        ? permissionIdOrEntity
        : { PermissionID: permissionIdOrEntity! }
    );
  }
}
