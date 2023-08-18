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
import { UserTablesMd } from './UserTablesMd';

/**
 * Request builder class for operations supported on the {@link UserTablesMd} entity.
 */
export class UserTablesMdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserTablesMd<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserTablesMd` entity based on its keys.
   * @param tableName Key property. See {@link UserTablesMd.tableName}.
   * @returns A request builder for creating requests to retrieve one `UserTablesMd` entity based on its keys.
   */
  getByKey(
    tableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserTablesMd<T>, T> {
    return new GetByKeyRequestBuilder<UserTablesMd<T>, T>(this.entityApi, {
      TableName: tableName
    });
  }

  /**
   * Returns a request builder for querying all `UserTablesMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserTablesMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserTablesMd<T>, T> {
    return new GetAllRequestBuilder<UserTablesMd<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserTablesMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserTablesMd`.
   */
  create(entity: UserTablesMd<T>): CreateRequestBuilder<UserTablesMd<T>, T> {
    return new CreateRequestBuilder<UserTablesMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserTablesMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserTablesMd`.
   */
  update(entity: UserTablesMd<T>): UpdateRequestBuilder<UserTablesMd<T>, T> {
    return new UpdateRequestBuilder<UserTablesMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param tableName Key property. See {@link UserTablesMd.tableName}.
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd`.
   */
  delete(tableName: string): DeleteRequestBuilder<UserTablesMd<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd` by taking the entity as a parameter.
   */
  delete(entity: UserTablesMd<T>): DeleteRequestBuilder<UserTablesMd<T>, T>;
  delete(tableNameOrEntity: any): DeleteRequestBuilder<UserTablesMd<T>, T> {
    return new DeleteRequestBuilder<UserTablesMd<T>, T>(
      this.entityApi,
      tableNameOrEntity instanceof UserTablesMd
        ? tableNameOrEntity
        : { TableName: tableNameOrEntity! }
    );
  }
}
