/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(tableName: string): GetByKeyRequestBuilder<UserTablesMd> {
    return new GetByKeyRequestBuilder(UserTablesMd, { TableName: tableName });
  }

  /**
   * Returns a request builder for querying all `UserTablesMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserTablesMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserTablesMd> {
    return new GetAllRequestBuilder(UserTablesMd);
  }

  /**
   * Returns a request builder for creating a `UserTablesMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserTablesMd`.
   */
  create(entity: UserTablesMd): CreateRequestBuilder<UserTablesMd> {
    return new CreateRequestBuilder(UserTablesMd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserTablesMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserTablesMd`.
   */
  update(entity: UserTablesMd): UpdateRequestBuilder<UserTablesMd> {
    return new UpdateRequestBuilder(UserTablesMd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param tableName Key property. See [[UserTablesMd.tableName]].
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd`.
   */
  delete(tableName: string): DeleteRequestBuilder<UserTablesMd>;
  /**
   * Returns a request builder for deleting an entity of type `UserTablesMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserTablesMd` by taking the entity as a parameter.
   */
  delete(entity: UserTablesMd): DeleteRequestBuilder<UserTablesMd>;
  delete(tableNameOrEntity: any): DeleteRequestBuilder<UserTablesMd> {
    return new DeleteRequestBuilder(UserTablesMd, tableNameOrEntity instanceof UserTablesMd ? tableNameOrEntity : { TableName: tableNameOrEntity! });
  }
}
