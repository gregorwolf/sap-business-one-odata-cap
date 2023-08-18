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
import { Users } from './Users';

/**
 * Request builder class for operations supported on the {@link Users} entity.
 */
export class UsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Users<T>, T> {
  /**
   * Returns a request builder for retrieving one `Users` entity based on its keys.
   * @param internalKey Key property. See {@link Users.internalKey}.
   * @returns A request builder for creating requests to retrieve one `Users` entity based on its keys.
   */
  getByKey(
    internalKey: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Users<T>, T> {
    return new GetByKeyRequestBuilder<Users<T>, T>(this.entityApi, {
      InternalKey: internalKey
    });
  }

  /**
   * Returns a request builder for querying all `Users` entities.
   * @returns A request builder for creating requests to retrieve all `Users` entities.
   */
  getAll(): GetAllRequestBuilder<Users<T>, T> {
    return new GetAllRequestBuilder<Users<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Users` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Users`.
   */
  create(entity: Users<T>): CreateRequestBuilder<Users<T>, T> {
    return new CreateRequestBuilder<Users<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Users`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Users`.
   */
  update(entity: Users<T>): UpdateRequestBuilder<Users<T>, T> {
    return new UpdateRequestBuilder<Users<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Users`.
   * @param internalKey Key property. See {@link Users.internalKey}.
   * @returns A request builder for creating requests that delete an entity of type `Users`.
   */
  delete(internalKey: number): DeleteRequestBuilder<Users<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Users`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Users` by taking the entity as a parameter.
   */
  delete(entity: Users<T>): DeleteRequestBuilder<Users<T>, T>;
  delete(internalKeyOrEntity: any): DeleteRequestBuilder<Users<T>, T> {
    return new DeleteRequestBuilder<Users<T>, T>(
      this.entityApi,
      internalKeyOrEntity instanceof Users
        ? internalKeyOrEntity
        : { InternalKey: internalKeyOrEntity! }
    );
  }
}
