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
import { UserGroups } from './UserGroups';

/**
 * Request builder class for operations supported on the {@link UserGroups} entity.
 */
export class UserGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserGroups` entity based on its keys.
   * @param userGroupId Key property. See {@link UserGroups.userGroupId}.
   * @returns A request builder for creating requests to retrieve one `UserGroups` entity based on its keys.
   */
  getByKey(
    userGroupId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UserGroups<T>, T> {
    return new GetByKeyRequestBuilder<UserGroups<T>, T>(this.entityApi, {
      UserGroupId: userGroupId
    });
  }

  /**
   * Returns a request builder for querying all `UserGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UserGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UserGroups<T>, T> {
    return new GetAllRequestBuilder<UserGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserGroups`.
   */
  create(entity: UserGroups<T>): CreateRequestBuilder<UserGroups<T>, T> {
    return new CreateRequestBuilder<UserGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserGroups`.
   */
  update(entity: UserGroups<T>): UpdateRequestBuilder<UserGroups<T>, T> {
    return new UpdateRequestBuilder<UserGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param userGroupId Key property. See {@link UserGroups.userGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `UserGroups`.
   */
  delete(userGroupId: number): DeleteRequestBuilder<UserGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserGroups` by taking the entity as a parameter.
   */
  delete(entity: UserGroups<T>): DeleteRequestBuilder<UserGroups<T>, T>;
  delete(userGroupIdOrEntity: any): DeleteRequestBuilder<UserGroups<T>, T> {
    return new DeleteRequestBuilder<UserGroups<T>, T>(
      this.entityApi,
      userGroupIdOrEntity instanceof UserGroups
        ? userGroupIdOrEntity
        : { UserGroupId: userGroupIdOrEntity! }
    );
  }
}
