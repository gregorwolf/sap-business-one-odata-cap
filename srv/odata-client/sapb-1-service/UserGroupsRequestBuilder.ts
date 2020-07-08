/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserGroups } from './UserGroups';

/**
 * Request builder class for operations supported on the [[UserGroups]] entity.
 */
export class UserGroupsRequestBuilder extends RequestBuilder<UserGroups> {
  /**
   * Returns a request builder for retrieving one `UserGroups` entity based on its keys.
   * @param userGroupId Key property. See [[UserGroups.userGroupId]].
   * @returns A request builder for creating requests to retrieve one `UserGroups` entity based on its keys.
   */
  getByKey(userGroupId: number): GetByKeyRequestBuilder<UserGroups> {
    return new GetByKeyRequestBuilder(UserGroups, { UserGroupId: userGroupId });
  }

  /**
   * Returns a request builder for querying all `UserGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UserGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UserGroups> {
    return new GetAllRequestBuilder(UserGroups);
  }

  /**
   * Returns a request builder for creating a `UserGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserGroups`.
   */
  create(entity: UserGroups): CreateRequestBuilder<UserGroups> {
    return new CreateRequestBuilder(UserGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserGroups`.
   */
  update(entity: UserGroups): UpdateRequestBuilder<UserGroups> {
    return new UpdateRequestBuilder(UserGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param userGroupId Key property. See [[UserGroups.userGroupId]].
   * @returns A request builder for creating requests that delete an entity of type `UserGroups`.
   */
  delete(userGroupId: number): DeleteRequestBuilder<UserGroups>;
  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserGroups` by taking the entity as a parameter.
   */
  delete(entity: UserGroups): DeleteRequestBuilder<UserGroups>;
  delete(userGroupIdOrEntity: any): DeleteRequestBuilder<UserGroups> {
    return new DeleteRequestBuilder(UserGroups, userGroupIdOrEntity instanceof UserGroups ? userGroupIdOrEntity : { UserGroupId: userGroupIdOrEntity! });
  }
}
