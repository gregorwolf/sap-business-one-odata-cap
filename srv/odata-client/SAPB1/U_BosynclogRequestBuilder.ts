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
import { U_Bosynclog } from './U_Bosynclog';

/**
 * Request builder class for operations supported on the {@link U_Bosynclog} entity.
 */
export class U_BosynclogRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bosynclog<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bosynclog` entity based on its keys.
   * @param code Key property. See {@link U_Bosynclog.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bosynclog` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bosynclog<T>, T> {
    return new GetByKeyRequestBuilder<U_Bosynclog<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bosynclog` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bosynclog` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bosynclog<T>, T> {
    return new GetAllRequestBuilder<U_Bosynclog<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bosynclog` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bosynclog`.
   */
  create(entity: U_Bosynclog<T>): CreateRequestBuilder<U_Bosynclog<T>, T> {
    return new CreateRequestBuilder<U_Bosynclog<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bosynclog`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bosynclog`.
   */
  update(entity: U_Bosynclog<T>): UpdateRequestBuilder<U_Bosynclog<T>, T> {
    return new UpdateRequestBuilder<U_Bosynclog<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bosynclog`.
   * @param code Key property. See {@link U_Bosynclog.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bosynclog`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bosynclog<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bosynclog`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bosynclog` by taking the entity as a parameter.
   */
  delete(entity: U_Bosynclog<T>): DeleteRequestBuilder<U_Bosynclog<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bosynclog<T>, T> {
    return new DeleteRequestBuilder<U_Bosynclog<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bosynclog
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
