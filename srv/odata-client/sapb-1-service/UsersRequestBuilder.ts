/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Users } from './Users';

/**
 * Request builder class for operations supported on the [[Users]] entity.
 */
export class UsersRequestBuilder extends RequestBuilder<Users> {
  /**
   * Returns a request builder for retrieving one `Users` entity based on its keys.
   * @param internalKey Key property. See [[Users.internalKey]].
   * @returns A request builder for creating requests to retrieve one `Users` entity based on its keys.
   */
  getByKey(internalKey: number): GetByKeyRequestBuilder<Users> {
    return new GetByKeyRequestBuilder(Users, { InternalKey: internalKey });
  }

  /**
   * Returns a request builder for querying all `Users` entities.
   * @returns A request builder for creating requests to retrieve all `Users` entities.
   */
  getAll(): GetAllRequestBuilder<Users> {
    return new GetAllRequestBuilder(Users);
  }

  /**
   * Returns a request builder for creating a `Users` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Users`.
   */
  create(entity: Users): CreateRequestBuilder<Users> {
    return new CreateRequestBuilder(Users, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Users`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Users`.
   */
  update(entity: Users): UpdateRequestBuilder<Users> {
    return new UpdateRequestBuilder(Users, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Users`.
   * @param internalKey Key property. See [[Users.internalKey]].
   * @returns A request builder for creating requests that delete an entity of type `Users`.
   */
  delete(internalKey: number): DeleteRequestBuilder<Users>;
  /**
   * Returns a request builder for deleting an entity of type `Users`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Users` by taking the entity as a parameter.
   */
  delete(entity: Users): DeleteRequestBuilder<Users>;
  delete(internalKeyOrEntity: any): DeleteRequestBuilder<Users> {
    return new DeleteRequestBuilder(Users, internalKeyOrEntity instanceof Users ? internalKeyOrEntity : { InternalKey: internalKeyOrEntity! });
  }
}
