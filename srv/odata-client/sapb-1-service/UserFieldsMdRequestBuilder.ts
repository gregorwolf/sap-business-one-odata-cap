/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserFieldsMd } from './UserFieldsMd';

/**
 * Request builder class for operations supported on the [[UserFieldsMd]] entity.
 */
export class UserFieldsMdRequestBuilder extends RequestBuilder<UserFieldsMd> {
  /**
   * Returns a request builder for retrieving one `UserFieldsMd` entity based on its keys.
   * @param tableName Key property. See [[UserFieldsMd.tableName]].
   * @param fieldId Key property. See [[UserFieldsMd.fieldId]].
   * @returns A request builder for creating requests to retrieve one `UserFieldsMd` entity based on its keys.
   */
  getByKey(tableName: string, fieldId: number): GetByKeyRequestBuilderV4<UserFieldsMd> {
    return new GetByKeyRequestBuilderV4(UserFieldsMd, {
      TableName: tableName,
      FieldID: fieldId
    });
  }

  /**
   * Returns a request builder for querying all `UserFieldsMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserFieldsMd` entities.
   */
  getAll(): GetAllRequestBuilderV4<UserFieldsMd> {
    return new GetAllRequestBuilderV4(UserFieldsMd);
  }

  /**
   * Returns a request builder for creating a `UserFieldsMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserFieldsMd`.
   */
  create(entity: UserFieldsMd): CreateRequestBuilderV4<UserFieldsMd> {
    return new CreateRequestBuilderV4(UserFieldsMd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserFieldsMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserFieldsMd`.
   */
  update(entity: UserFieldsMd): UpdateRequestBuilderV4<UserFieldsMd> {
    return new UpdateRequestBuilderV4(UserFieldsMd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserFieldsMd`.
   * @param tableName Key property. See [[UserFieldsMd.tableName]].
   * @param fieldId Key property. See [[UserFieldsMd.fieldId]].
   * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd`.
   */
  delete(tableName: string, fieldId: number): DeleteRequestBuilderV4<UserFieldsMd>;
  /**
   * Returns a request builder for deleting an entity of type `UserFieldsMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd` by taking the entity as a parameter.
   */
  delete(entity: UserFieldsMd): DeleteRequestBuilderV4<UserFieldsMd>;
  delete(tableNameOrEntity: any, fieldId?: number): DeleteRequestBuilderV4<UserFieldsMd> {
    return new DeleteRequestBuilderV4(UserFieldsMd, tableNameOrEntity instanceof UserFieldsMd ? tableNameOrEntity : {
      TableName: tableNameOrEntity!,
      FieldID: fieldId!
    });
  }
}
