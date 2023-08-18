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
import { U_Bnctrn } from './U_Bnctrn';

/**
 * Request builder class for operations supported on the {@link U_Bnctrn} entity.
 */
export class U_BnctrnRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bnctrn<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bnctrn` entity based on its keys.
   * @param code Key property. See {@link U_Bnctrn.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bnctrn` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bnctrn<T>, T> {
    return new GetByKeyRequestBuilder<U_Bnctrn<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bnctrn` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bnctrn` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bnctrn<T>, T> {
    return new GetAllRequestBuilder<U_Bnctrn<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bnctrn` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bnctrn`.
   */
  create(entity: U_Bnctrn<T>): CreateRequestBuilder<U_Bnctrn<T>, T> {
    return new CreateRequestBuilder<U_Bnctrn<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bnctrn`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bnctrn`.
   */
  update(entity: U_Bnctrn<T>): UpdateRequestBuilder<U_Bnctrn<T>, T> {
    return new UpdateRequestBuilder<U_Bnctrn<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bnctrn`.
   * @param code Key property. See {@link U_Bnctrn.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnctrn`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bnctrn<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bnctrn`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnctrn` by taking the entity as a parameter.
   */
  delete(entity: U_Bnctrn<T>): DeleteRequestBuilder<U_Bnctrn<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bnctrn<T>, T> {
    return new DeleteRequestBuilder<U_Bnctrn<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bnctrn ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
