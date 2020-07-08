/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(internalKey: number, queryCategory: number): GetByKeyRequestBuilder<UserQueries> {
    return new GetByKeyRequestBuilder(UserQueries, {
      InternalKey: internalKey,
      QueryCategory: queryCategory
    });
  }

  /**
   * Returns a request builder for querying all `UserQueries` entities.
   * @returns A request builder for creating requests to retrieve all `UserQueries` entities.
   */
  getAll(): GetAllRequestBuilder<UserQueries> {
    return new GetAllRequestBuilder(UserQueries);
  }

  /**
   * Returns a request builder for creating a `UserQueries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserQueries`.
   */
  create(entity: UserQueries): CreateRequestBuilder<UserQueries> {
    return new CreateRequestBuilder(UserQueries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserQueries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserQueries`.
   */
  update(entity: UserQueries): UpdateRequestBuilder<UserQueries> {
    return new UpdateRequestBuilder(UserQueries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param internalKey Key property. See [[UserQueries.internalKey]].
   * @param queryCategory Key property. See [[UserQueries.queryCategory]].
   * @returns A request builder for creating requests that delete an entity of type `UserQueries`.
   */
  delete(internalKey: number, queryCategory: number): DeleteRequestBuilder<UserQueries>;
  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserQueries` by taking the entity as a parameter.
   */
  delete(entity: UserQueries): DeleteRequestBuilder<UserQueries>;
  delete(internalKeyOrEntity: any, queryCategory?: number): DeleteRequestBuilder<UserQueries> {
    return new DeleteRequestBuilder(UserQueries, internalKeyOrEntity instanceof UserQueries ? internalKeyOrEntity : {
      InternalKey: internalKeyOrEntity!,
      QueryCategory: queryCategory!
    });
  }
}
