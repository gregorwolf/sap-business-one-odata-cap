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
import { U_Bcenote } from './U_Bcenote';

/**
 * Request builder class for operations supported on the {@link U_Bcenote} entity.
 */
export class U_BcenoteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bcenote<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bcenote` entity based on its keys.
   * @param code Key property. See {@link U_Bcenote.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bcenote` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bcenote<T>, T> {
    return new GetByKeyRequestBuilder<U_Bcenote<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bcenote` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bcenote` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bcenote<T>, T> {
    return new GetAllRequestBuilder<U_Bcenote<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bcenote` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bcenote`.
   */
  create(entity: U_Bcenote<T>): CreateRequestBuilder<U_Bcenote<T>, T> {
    return new CreateRequestBuilder<U_Bcenote<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bcenote`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bcenote`.
   */
  update(entity: U_Bcenote<T>): UpdateRequestBuilder<U_Bcenote<T>, T> {
    return new UpdateRequestBuilder<U_Bcenote<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bcenote`.
   * @param code Key property. See {@link U_Bcenote.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bcenote`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bcenote<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bcenote`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bcenote` by taking the entity as a parameter.
   */
  delete(entity: U_Bcenote<T>): DeleteRequestBuilder<U_Bcenote<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bcenote<T>, T> {
    return new DeleteRequestBuilder<U_Bcenote<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bcenote ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
