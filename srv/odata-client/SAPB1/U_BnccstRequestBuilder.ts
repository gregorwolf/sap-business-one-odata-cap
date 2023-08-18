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
import { U_Bnccst } from './U_Bnccst';

/**
 * Request builder class for operations supported on the {@link U_Bnccst} entity.
 */
export class U_BnccstRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bnccst<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bnccst` entity based on its keys.
   * @param code Key property. See {@link U_Bnccst.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bnccst` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bnccst<T>, T> {
    return new GetByKeyRequestBuilder<U_Bnccst<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bnccst` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bnccst` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bnccst<T>, T> {
    return new GetAllRequestBuilder<U_Bnccst<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bnccst` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bnccst`.
   */
  create(entity: U_Bnccst<T>): CreateRequestBuilder<U_Bnccst<T>, T> {
    return new CreateRequestBuilder<U_Bnccst<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bnccst`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bnccst`.
   */
  update(entity: U_Bnccst<T>): UpdateRequestBuilder<U_Bnccst<T>, T> {
    return new UpdateRequestBuilder<U_Bnccst<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bnccst`.
   * @param code Key property. See {@link U_Bnccst.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnccst`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bnccst<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bnccst`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnccst` by taking the entity as a parameter.
   */
  delete(entity: U_Bnccst<T>): DeleteRequestBuilder<U_Bnccst<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bnccst<T>, T> {
    return new DeleteRequestBuilder<U_Bnccst<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bnccst ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
