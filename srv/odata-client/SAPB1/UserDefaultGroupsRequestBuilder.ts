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
import { UserDefaultGroups } from './UserDefaultGroups';

/**
 * Request builder class for operations supported on the {@link UserDefaultGroups} entity.
 */
export class UserDefaultGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserDefaultGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserDefaultGroups` entity based on its keys.
   * @param code Key property. See {@link UserDefaultGroups.code}.
   * @returns A request builder for creating requests to retrieve one `UserDefaultGroups` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserDefaultGroups<T>, T> {
    return new GetByKeyRequestBuilder<UserDefaultGroups<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `UserDefaultGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UserDefaultGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UserDefaultGroups<T>, T> {
    return new GetAllRequestBuilder<UserDefaultGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserDefaultGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserDefaultGroups`.
   */
  create(
    entity: UserDefaultGroups<T>
  ): CreateRequestBuilder<UserDefaultGroups<T>, T> {
    return new CreateRequestBuilder<UserDefaultGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserDefaultGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserDefaultGroups`.
   */
  update(
    entity: UserDefaultGroups<T>
  ): UpdateRequestBuilder<UserDefaultGroups<T>, T> {
    return new UpdateRequestBuilder<UserDefaultGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserDefaultGroups`.
   * @param code Key property. See {@link UserDefaultGroups.code}.
   * @returns A request builder for creating requests that delete an entity of type `UserDefaultGroups`.
   */
  delete(code: string): DeleteRequestBuilder<UserDefaultGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserDefaultGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserDefaultGroups` by taking the entity as a parameter.
   */
  delete(
    entity: UserDefaultGroups<T>
  ): DeleteRequestBuilder<UserDefaultGroups<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<UserDefaultGroups<T>, T> {
    return new DeleteRequestBuilder<UserDefaultGroups<T>, T>(
      this.entityApi,
      codeOrEntity instanceof UserDefaultGroups
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
