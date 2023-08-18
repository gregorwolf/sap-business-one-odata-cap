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
import { UserObjectsMd } from './UserObjectsMd';

/**
 * Request builder class for operations supported on the {@link UserObjectsMd} entity.
 */
export class UserObjectsMdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserObjectsMd<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserObjectsMd` entity based on its keys.
   * @param code Key property. See {@link UserObjectsMd.code}.
   * @returns A request builder for creating requests to retrieve one `UserObjectsMd` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserObjectsMd<T>, T> {
    return new GetByKeyRequestBuilder<UserObjectsMd<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `UserObjectsMd` entities.
   * @returns A request builder for creating requests to retrieve all `UserObjectsMd` entities.
   */
  getAll(): GetAllRequestBuilder<UserObjectsMd<T>, T> {
    return new GetAllRequestBuilder<UserObjectsMd<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserObjectsMd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserObjectsMd`.
   */
  create(entity: UserObjectsMd<T>): CreateRequestBuilder<UserObjectsMd<T>, T> {
    return new CreateRequestBuilder<UserObjectsMd<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserObjectsMd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserObjectsMd`.
   */
  update(entity: UserObjectsMd<T>): UpdateRequestBuilder<UserObjectsMd<T>, T> {
    return new UpdateRequestBuilder<UserObjectsMd<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserObjectsMd`.
   * @param code Key property. See {@link UserObjectsMd.code}.
   * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd`.
   */
  delete(code: string): DeleteRequestBuilder<UserObjectsMd<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserObjectsMd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd` by taking the entity as a parameter.
   */
  delete(entity: UserObjectsMd<T>): DeleteRequestBuilder<UserObjectsMd<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<UserObjectsMd<T>, T> {
    return new DeleteRequestBuilder<UserObjectsMd<T>, T>(
      this.entityApi,
      codeOrEntity instanceof UserObjectsMd
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
