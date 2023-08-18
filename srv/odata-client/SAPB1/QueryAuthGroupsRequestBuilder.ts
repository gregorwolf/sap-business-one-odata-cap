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
import { QueryAuthGroups } from './QueryAuthGroups';

/**
 * Request builder class for operations supported on the {@link QueryAuthGroups} entity.
 */
export class QueryAuthGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QueryAuthGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `QueryAuthGroups` entity based on its keys.
   * @param authGroupId Key property. See {@link QueryAuthGroups.authGroupId}.
   * @returns A request builder for creating requests to retrieve one `QueryAuthGroups` entity based on its keys.
   */
  getByKey(
    authGroupId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<QueryAuthGroups<T>, T> {
    return new GetByKeyRequestBuilder<QueryAuthGroups<T>, T>(this.entityApi, {
      AuthGroupId: authGroupId
    });
  }

  /**
   * Returns a request builder for querying all `QueryAuthGroups` entities.
   * @returns A request builder for creating requests to retrieve all `QueryAuthGroups` entities.
   */
  getAll(): GetAllRequestBuilder<QueryAuthGroups<T>, T> {
    return new GetAllRequestBuilder<QueryAuthGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `QueryAuthGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QueryAuthGroups`.
   */
  create(
    entity: QueryAuthGroups<T>
  ): CreateRequestBuilder<QueryAuthGroups<T>, T> {
    return new CreateRequestBuilder<QueryAuthGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QueryAuthGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QueryAuthGroups`.
   */
  update(
    entity: QueryAuthGroups<T>
  ): UpdateRequestBuilder<QueryAuthGroups<T>, T> {
    return new UpdateRequestBuilder<QueryAuthGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
   * @param authGroupId Key property. See {@link QueryAuthGroups.authGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups`.
   */
  delete(authGroupId: number): DeleteRequestBuilder<QueryAuthGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QueryAuthGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QueryAuthGroups` by taking the entity as a parameter.
   */
  delete(
    entity: QueryAuthGroups<T>
  ): DeleteRequestBuilder<QueryAuthGroups<T>, T>;
  delete(
    authGroupIdOrEntity: any
  ): DeleteRequestBuilder<QueryAuthGroups<T>, T> {
    return new DeleteRequestBuilder<QueryAuthGroups<T>, T>(
      this.entityApi,
      authGroupIdOrEntity instanceof QueryAuthGroups
        ? authGroupIdOrEntity
        : { AuthGroupId: authGroupIdOrEntity! }
    );
  }
}
