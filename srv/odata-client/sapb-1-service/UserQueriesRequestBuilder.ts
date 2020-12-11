/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserQueries } from './UserQueries';

/**
 * Request builder class for operations supported on the [[UserQueries]] entity.
 */
export class UserQueriesRequestBuilder extends RequestBuilder<UserQueries> {
  /**
   * Returns a request builder for retrieving one `UserQueries` entity based on its keys.
   * @param internalKey Key property. See [[UserQueries.internalKey]].
   * @param queryCategory Key property. See [[UserQueries.queryCategory]].
   * @returns A request builder for creating requests to retrieve one `UserQueries` entity based on its keys.
   */
  getByKey(internalKey: number, queryCategory: number): GetByKeyRequestBuilderV4<UserQueries> {
    return new GetByKeyRequestBuilderV4(UserQueries, {
      InternalKey: internalKey,
      QueryCategory: queryCategory
    });
  }

  /**
   * Returns a request builder for querying all `UserQueries` entities.
   * @returns A request builder for creating requests to retrieve all `UserQueries` entities.
   */
  getAll(): GetAllRequestBuilderV4<UserQueries> {
    return new GetAllRequestBuilderV4(UserQueries);
  }

  /**
   * Returns a request builder for creating a `UserQueries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserQueries`.
   */
  create(entity: UserQueries): CreateRequestBuilderV4<UserQueries> {
    return new CreateRequestBuilderV4(UserQueries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserQueries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserQueries`.
   */
  update(entity: UserQueries): UpdateRequestBuilderV4<UserQueries> {
    return new UpdateRequestBuilderV4(UserQueries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param internalKey Key property. See [[UserQueries.internalKey]].
   * @param queryCategory Key property. See [[UserQueries.queryCategory]].
   * @returns A request builder for creating requests that delete an entity of type `UserQueries`.
   */
  delete(internalKey: number, queryCategory: number): DeleteRequestBuilderV4<UserQueries>;
  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserQueries` by taking the entity as a parameter.
   */
  delete(entity: UserQueries): DeleteRequestBuilderV4<UserQueries>;
  delete(internalKeyOrEntity: any, queryCategory?: number): DeleteRequestBuilderV4<UserQueries> {
    return new DeleteRequestBuilderV4(UserQueries, internalKeyOrEntity instanceof UserQueries ? internalKeyOrEntity : {
      InternalKey: internalKeyOrEntity!,
      QueryCategory: queryCategory!
    });
  }
}
