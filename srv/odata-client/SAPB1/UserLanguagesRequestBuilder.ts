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
import { UserLanguages } from './UserLanguages';

/**
 * Request builder class for operations supported on the {@link UserLanguages} entity.
 */
export class UserLanguagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserLanguages<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserLanguages` entity based on its keys.
   * @param code Key property. See {@link UserLanguages.code}.
   * @returns A request builder for creating requests to retrieve one `UserLanguages` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UserLanguages<T>, T> {
    return new GetByKeyRequestBuilder<UserLanguages<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `UserLanguages` entities.
   * @returns A request builder for creating requests to retrieve all `UserLanguages` entities.
   */
  getAll(): GetAllRequestBuilder<UserLanguages<T>, T> {
    return new GetAllRequestBuilder<UserLanguages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserLanguages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserLanguages`.
   */
  create(entity: UserLanguages<T>): CreateRequestBuilder<UserLanguages<T>, T> {
    return new CreateRequestBuilder<UserLanguages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserLanguages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserLanguages`.
   */
  update(entity: UserLanguages<T>): UpdateRequestBuilder<UserLanguages<T>, T> {
    return new UpdateRequestBuilder<UserLanguages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserLanguages`.
   * @param code Key property. See {@link UserLanguages.code}.
   * @returns A request builder for creating requests that delete an entity of type `UserLanguages`.
   */
  delete(code: number): DeleteRequestBuilder<UserLanguages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserLanguages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserLanguages` by taking the entity as a parameter.
   */
  delete(entity: UserLanguages<T>): DeleteRequestBuilder<UserLanguages<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<UserLanguages<T>, T> {
    return new DeleteRequestBuilder<UserLanguages<T>, T>(
      this.entityApi,
      codeOrEntity instanceof UserLanguages
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
