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
import { UserQueries } from './UserQueries';

/**
 * Request builder class for operations supported on the {@link UserQueries} entity.
 */
export class UserQueriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserQueries<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserQueries` entity based on its keys.
   * @param internalKey Key property. See {@link UserQueries.internalKey}.
   * @param queryCategory Key property. See {@link UserQueries.queryCategory}.
   * @returns A request builder for creating requests to retrieve one `UserQueries` entity based on its keys.
   */
  getByKey(
    internalKey: DeserializedType<T, 'Edm.Int32'>,
    queryCategory: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UserQueries<T>, T> {
    return new GetByKeyRequestBuilder<UserQueries<T>, T>(this.entityApi, {
      InternalKey: internalKey,
      QueryCategory: queryCategory
    });
  }

  /**
   * Returns a request builder for querying all `UserQueries` entities.
   * @returns A request builder for creating requests to retrieve all `UserQueries` entities.
   */
  getAll(): GetAllRequestBuilder<UserQueries<T>, T> {
    return new GetAllRequestBuilder<UserQueries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserQueries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserQueries`.
   */
  create(entity: UserQueries<T>): CreateRequestBuilder<UserQueries<T>, T> {
    return new CreateRequestBuilder<UserQueries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserQueries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserQueries`.
   */
  update(entity: UserQueries<T>): UpdateRequestBuilder<UserQueries<T>, T> {
    return new UpdateRequestBuilder<UserQueries<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param internalKey Key property. See {@link UserQueries.internalKey}.
   * @param queryCategory Key property. See {@link UserQueries.queryCategory}.
   * @returns A request builder for creating requests that delete an entity of type `UserQueries`.
   */
  delete(
    internalKey: number,
    queryCategory: number
  ): DeleteRequestBuilder<UserQueries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserQueries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserQueries` by taking the entity as a parameter.
   */
  delete(entity: UserQueries<T>): DeleteRequestBuilder<UserQueries<T>, T>;
  delete(
    internalKeyOrEntity: any,
    queryCategory?: number
  ): DeleteRequestBuilder<UserQueries<T>, T> {
    return new DeleteRequestBuilder<UserQueries<T>, T>(
      this.entityApi,
      internalKeyOrEntity instanceof UserQueries
        ? internalKeyOrEntity
        : {
            InternalKey: internalKeyOrEntity!,
            QueryCategory: queryCategory!
          }
    );
  }
}
