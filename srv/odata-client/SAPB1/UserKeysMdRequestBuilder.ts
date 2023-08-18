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
import { UserKeysMd } from './UserKeysMd';

/**
 * Request builder class for operations supported on the {@link UserKeysMd} entity.
 */
export class UserKeysMdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserKeysMd<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserKeysMd` entity based on its keys.
   * @param tableName Key property. See {@link UserKeysMd.tableName}.
   * @param keyIndex Key property. See {@link UserKeysMd.keyIndex}.
   * @returns A request builder for creating requests to retrieve one `UserKeysMd` entity based on its keys.
   */
  getByKey(
    tableName: DeserializedType<T, 'Edm.String'>,
    keyIndex: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UserKeysMd<T>, T> {
    return new GetByKeyRequestBuilder<UserKeysMd<T>, T>(this.entityApi, {
      TableName: tableName,
      KeyIndex: keyIndex
    });
  }

  /**
   * Returns a request builder for querying all `UserKeysMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserKeysMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserKeysMd<T>, T> {
    return new GetAllRequestBuilder<UserKeysMd<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserKeysMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserKeysMd`.
   */
  create(entity: UserKeysMd<T>): CreateRequestBuilder<UserKeysMd<T>, T> {
    return new CreateRequestBuilder<UserKeysMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserKeysMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserKeysMd`.
   */
  update(entity: UserKeysMd<T>): UpdateRequestBuilder<UserKeysMd<T>, T> {
    return new UpdateRequestBuilder<UserKeysMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserKeysMd`.
   * @param tableName Key property. See {@link UserKeysMd.tableName}.
   * @param keyIndex Key property. See {@link UserKeysMd.keyIndex}.
   * @returns A request builder for creating requests that delete an entity of type `UserKeysMd`.
   */
  delete(
    tableName: string,
    keyIndex: number
  ): DeleteRequestBuilder<UserKeysMd<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserKeysMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserKeysMd` by taking the entity as a parameter.
   */
  delete(entity: UserKeysMd<T>): DeleteRequestBuilder<UserKeysMd<T>, T>;
  delete(
    tableNameOrEntity: any,
    keyIndex?: number
  ): DeleteRequestBuilder<UserKeysMd<T>, T> {
    return new DeleteRequestBuilder<UserKeysMd<T>, T>(
      this.entityApi,
      tableNameOrEntity instanceof UserKeysMd
        ? tableNameOrEntity
        : {
            TableName: tableNameOrEntity!,
            KeyIndex: keyIndex!
          }
    );
  }
}
