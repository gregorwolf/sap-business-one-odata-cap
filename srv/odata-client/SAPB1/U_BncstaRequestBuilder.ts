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
import { U_Bncsta } from './U_Bncsta';

/**
 * Request builder class for operations supported on the {@link U_Bncsta} entity.
 */
export class U_BncstaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncsta<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncsta` entity based on its keys.
   * @param code Key property. See {@link U_Bncsta.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncsta` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncsta<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncsta<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncsta` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncsta` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncsta<T>, T> {
    return new GetAllRequestBuilder<U_Bncsta<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncsta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncsta`.
   */
  create(entity: U_Bncsta<T>): CreateRequestBuilder<U_Bncsta<T>, T> {
    return new CreateRequestBuilder<U_Bncsta<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncsta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncsta`.
   */
  update(entity: U_Bncsta<T>): UpdateRequestBuilder<U_Bncsta<T>, T> {
    return new UpdateRequestBuilder<U_Bncsta<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncsta`.
   * @param code Key property. See {@link U_Bncsta.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncsta`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncsta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncsta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncsta` by taking the entity as a parameter.
   */
  delete(entity: U_Bncsta<T>): DeleteRequestBuilder<U_Bncsta<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncsta<T>, T> {
    return new DeleteRequestBuilder<U_Bncsta<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncsta ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
