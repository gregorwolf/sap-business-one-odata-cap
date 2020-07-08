/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserDefaultGroups } from './UserDefaultGroups';

/**
 * Request builder class for operations supported on the [[UserDefaultGroups]] entity.
 */
export class UserDefaultGroupsRequestBuilder extends RequestBuilder<UserDefaultGroups> {
  /**
   * Returns a request builder for retrieving one `UserDefaultGroups` entity based on its keys.
   * @param code Key property. See [[UserDefaultGroups.code]].
   * @returns A request builder for creating requests to retrieve one `UserDefaultGroups` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<UserDefaultGroups> {
    return new GetByKeyRequestBuilder(UserDefaultGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `UserDefaultGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UserDefaultGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UserDefaultGroups> {
    return new GetAllRequestBuilder(UserDefaultGroups);
  }

  /**
   * Returns a request builder for creating a `UserDefaultGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserDefaultGroups`.
   */
  create(entity: UserDefaultGroups): CreateRequestBuilder<UserDefaultGroups> {
    return new CreateRequestBuilder(UserDefaultGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserDefaultGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserDefaultGroups`.
   */
  update(entity: UserDefaultGroups): UpdateRequestBuilder<UserDefaultGroups> {
    return new UpdateRequestBuilder(UserDefaultGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserDefaultGroups`.
   * @param code Key property. See [[UserDefaultGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `UserDefaultGroups`.
   */
  delete(code: string): DeleteRequestBuilder<UserDefaultGroups>;
  /**
   * Returns a request builder for deleting an entity of type `UserDefaultGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserDefaultGroups` by taking the entity as a parameter.
   */
  delete(entity: UserDefaultGroups): DeleteRequestBuilder<UserDefaultGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilder<UserDefaultGroups> {
    return new DeleteRequestBuilder(UserDefaultGroups, codeOrEntity instanceof UserDefaultGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
