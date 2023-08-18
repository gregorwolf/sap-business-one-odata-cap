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
import { U_Bnccry } from './U_Bnccry';

/**
 * Request builder class for operations supported on the {@link U_Bnccry} entity.
 */
export class U_BnccryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bnccry<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bnccry` entity based on its keys.
   * @param code Key property. See {@link U_Bnccry.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bnccry` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bnccry<T>, T> {
    return new GetByKeyRequestBuilder<U_Bnccry<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bnccry` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bnccry` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bnccry<T>, T> {
    return new GetAllRequestBuilder<U_Bnccry<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bnccry` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bnccry`.
   */
  create(entity: U_Bnccry<T>): CreateRequestBuilder<U_Bnccry<T>, T> {
    return new CreateRequestBuilder<U_Bnccry<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bnccry`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bnccry`.
   */
  update(entity: U_Bnccry<T>): UpdateRequestBuilder<U_Bnccry<T>, T> {
    return new UpdateRequestBuilder<U_Bnccry<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bnccry`.
   * @param code Key property. See {@link U_Bnccry.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnccry`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bnccry<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bnccry`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bnccry` by taking the entity as a parameter.
   */
  delete(entity: U_Bnccry<T>): DeleteRequestBuilder<U_Bnccry<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bnccry<T>, T> {
    return new DeleteRequestBuilder<U_Bnccry<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bnccry ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
