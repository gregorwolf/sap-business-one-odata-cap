/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserTablesMd } from './UserTablesMd';

/**
 * Request builder class for operations supported on the [[UserTablesMd]] entity.
 */
export class UserTablesMdRequestBuilder extends RequestBuilder<UserTablesMd> {
  /**
   * Returns a request builder for retrieving one `UserTablesMd` entity based on its keys.
   * @param tableName Key property. See [[UserTablesMd.tableName]].
   * @returns A request builder for creating requests to retrieve one `UserTablesMd` entity based on its keys.
   */
  getByKey(tableName: string): GetByKeyRequestBuilderV4<UserTablesMd> {
    return new GetByKeyRequestBuilderV4(UserTablesMd, { TableName: tableName });
  }

  /**
   * Returns a request builder for querying all `UserTablesMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserTablesMd` entities.
   */
  getAll(): GetAllRequestBuilderV4<UserTablesMd> {
    return new GetAllRequestBuilderV4(UserTablesMd);
  }

  /**
   * Returns a request builder for creating a `UserTablesMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserTablesMd`.
   */
  create(entity: UserTablesMd): CreateRequestBuilderV4<UserTablesMd> {
    return new CreateRequestBuilderV4(UserTablesMd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserTablesMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserTablesMd`.
   */
  update(entity: UserTablesMd): UpdateRequestBuilderV4<UserTablesMd> {
    return new UpdateRequestBuilderV4(UserTablesMd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param tableName Key property. See [[UserTablesMd.tableName]].
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd`.
   */
  delete(tableName: string): DeleteRequestBuilderV4<UserTablesMd>;
  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd` by taking the entity as a parameter.
   */
  delete(entity: UserTablesMd): DeleteRequestBuilderV4<UserTablesMd>;
  delete(tableNameOrEntity: any): DeleteRequestBuilderV4<UserTablesMd> {
    return new DeleteRequestBuilderV4(UserTablesMd, tableNameOrEntity instanceof UserTablesMd ? tableNameOrEntity : { TableName: tableNameOrEntity! });
  }
}
