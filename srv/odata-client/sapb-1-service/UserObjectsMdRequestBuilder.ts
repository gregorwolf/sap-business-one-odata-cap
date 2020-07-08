/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserObjectsMd } from './UserObjectsMd';

/**
 * Request builder class for operations supported on the [[UserObjectsMd]] entity.
 */
export class UserObjectsMdRequestBuilder extends RequestBuilder<UserObjectsMd> {
  /**
   * Returns a request builder for retrieving one `UserObjectsMd` entity based on its keys.
   * @param code Key property. See [[UserObjectsMd.code]].
   * @returns A request builder for creating requests to retrieve one `UserObjectsMd` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<UserObjectsMd> {
    return new GetByKeyRequestBuilder(UserObjectsMd, { Code: code });
  }

  /**
   * Returns a request builder for querying all `UserObjectsMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserObjectsMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserObjectsMd> {
    return new GetAllRequestBuilder(UserObjectsMd);
  }

  /**
   * Returns a request builder for creating a `UserObjectsMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserObjectsMd`.
   */
  create(entity: UserObjectsMd): CreateRequestBuilder<UserObjectsMd> {
    return new CreateRequestBuilder(UserObjectsMd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserObjectsMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserObjectsMd`.
   */
  update(entity: UserObjectsMd): UpdateRequestBuilder<UserObjectsMd> {
    return new UpdateRequestBuilder(UserObjectsMd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserObjectsMd`.
   * @param code Key property. See [[UserObjectsMd.code]].
   * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd`.
   */
  delete(code: string): DeleteRequestBuilder<UserObjectsMd>;
  /**
   * Returns a request builder for deleting an entity of type `UserObjectsMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd` by taking the entity as a parameter.
   */
  delete(entity: UserObjectsMd): DeleteRequestBuilder<UserObjectsMd>;
  delete(codeOrEntity: any): DeleteRequestBuilder<UserObjectsMd> {
    return new DeleteRequestBuilder(UserObjectsMd, codeOrEntity instanceof UserObjectsMd ? codeOrEntity : { Code: codeOrEntity! });
  }
}
