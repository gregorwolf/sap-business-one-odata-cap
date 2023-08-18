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
import { U_Bncinc } from './U_Bncinc';

/**
 * Request builder class for operations supported on the {@link U_Bncinc} entity.
 */
export class U_BncincRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncinc<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncinc` entity based on its keys.
   * @param code Key property. See {@link U_Bncinc.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncinc` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncinc<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncinc<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncinc` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncinc` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncinc<T>, T> {
    return new GetAllRequestBuilder<U_Bncinc<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncinc` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncinc`.
   */
  create(entity: U_Bncinc<T>): CreateRequestBuilder<U_Bncinc<T>, T> {
    return new CreateRequestBuilder<U_Bncinc<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncinc`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncinc`.
   */
  update(entity: U_Bncinc<T>): UpdateRequestBuilder<U_Bncinc<T>, T> {
    return new UpdateRequestBuilder<U_Bncinc<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncinc`.
   * @param code Key property. See {@link U_Bncinc.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncinc`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncinc<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncinc`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncinc` by taking the entity as a parameter.
   */
  delete(entity: U_Bncinc<T>): DeleteRequestBuilder<U_Bncinc<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncinc<T>, T> {
    return new DeleteRequestBuilder<U_Bncinc<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncinc ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
