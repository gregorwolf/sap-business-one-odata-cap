/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserPermissionTree } from './UserPermissionTree';

/**
 * Request builder class for operations supported on the [[UserPermissionTree]] entity.
 */
export class UserPermissionTreeRequestBuilder extends RequestBuilder<UserPermissionTree> {
  /**
   * Returns a request builder for retrieving one `UserPermissionTree` entity based on its keys.
   * @param permissionId Key property. See [[UserPermissionTree.permissionId]].
   * @returns A request builder for creating requests to retrieve one `UserPermissionTree` entity based on its keys.
   */
  getByKey(permissionId: string): GetByKeyRequestBuilderV4<UserPermissionTree> {
    return new GetByKeyRequestBuilderV4(UserPermissionTree, { PermissionID: permissionId });
  }

  /**
   * Returns a request builder for querying all `UserPermissionTree` entities.
   * @returns A request builder for creating requests to retrieve all `UserPermissionTree` entities.
   */
  getAll(): GetAllRequestBuilderV4<UserPermissionTree> {
    return new GetAllRequestBuilderV4(UserPermissionTree);
  }

  /**
   * Returns a request builder for creating a `UserPermissionTree` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserPermissionTree`.
   */
  create(entity: UserPermissionTree): CreateRequestBuilderV4<UserPermissionTree> {
    return new CreateRequestBuilderV4(UserPermissionTree, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserPermissionTree`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserPermissionTree`.
   */
  update(entity: UserPermissionTree): UpdateRequestBuilderV4<UserPermissionTree> {
    return new UpdateRequestBuilderV4(UserPermissionTree, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserPermissionTree`.
   * @param permissionId Key property. See [[UserPermissionTree.permissionId]].
   * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree`.
   */
  delete(permissionId: string): DeleteRequestBuilderV4<UserPermissionTree>;
  /**
   * Returns a request builder for deleting an entity of type `UserPermissionTree`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserPermissionTree` by taking the entity as a parameter.
   */
  delete(entity: UserPermissionTree): DeleteRequestBuilderV4<UserPermissionTree>;
  delete(permissionIdOrEntity: any): DeleteRequestBuilderV4<UserPermissionTree> {
    return new DeleteRequestBuilderV4(UserPermissionTree, permissionIdOrEntity instanceof UserPermissionTree ? permissionIdOrEntity : { PermissionID: permissionIdOrEntity! });
  }
}
