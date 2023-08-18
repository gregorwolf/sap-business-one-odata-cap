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
import { UserFieldsMd } from './UserFieldsMd';

/**
 * Request builder class for operations supported on the {@link UserFieldsMd} entity.
 */
export class UserFieldsMdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserFieldsMd<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserFieldsMd` entity based on its keys.
   * @param tableName Key property. See {@link UserFieldsMd.tableName}.
   * @param fieldId Key property. See {@link UserFieldsMd.fieldId}.
   * @returns A request builder for creating requests to retrieve one `UserFieldsMd` entity based on its keys.
   */
  getByKey(
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UserFieldsMd<T>, T> {
    return new GetByKeyRequestBuilder<UserFieldsMd<T>, T>(this.entityApi, {
      TableName: tableName,
      FieldID: fieldId
    });
  }

  /**
   * Returns a request builder for querying all `UserFieldsMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserFieldsMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserFieldsMd<T>, T> {
    return new GetAllRequestBuilder<UserFieldsMd<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserFieldsMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserFieldsMd`.
   */
  create(entity: UserFieldsMd<T>): CreateRequestBuilder<UserFieldsMd<T>, T> {
    return new CreateRequestBuilder<UserFieldsMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserFieldsMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserFieldsMd`.
   */
  update(entity: UserFieldsMd<T>): UpdateRequestBuilder<UserFieldsMd<T>, T> {
    return new UpdateRequestBuilder<UserFieldsMd<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserFieldsMd`.
   * @param tableName Key property. See {@link UserFieldsMd.tableName}.
   * @param fieldId Key property. See {@link UserFieldsMd.fieldId}.
   * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd`.
   */
  delete(
    tableName: string,
    fieldId: number
  ): DeleteRequestBuilder<UserFieldsMd<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserFieldsMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd` by taking the entity as a parameter.
   */
  delete(entity: UserFieldsMd<T>): DeleteRequestBuilder<UserFieldsMd<T>, T>;
  delete(
    tableNameOrEntity: any,
    fieldId?: number
  ): DeleteRequestBuilder<UserFieldsMd<T>, T> {
    return new DeleteRequestBuilder<UserFieldsMd<T>, T>(
      this.entityApi,
      tableNameOrEntity instanceof UserFieldsMd
        ? tableNameOrEntity
        : {
            TableName: tableNameOrEntity!,
            FieldID: fieldId!
          }
    );
  }
}
