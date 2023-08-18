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
import { U_Bncprt } from './U_Bncprt';

/**
 * Request builder class for operations supported on the {@link U_Bncprt} entity.
 */
export class U_BncprtRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncprt<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncprt` entity based on its keys.
   * @param code Key property. See {@link U_Bncprt.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncprt` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncprt<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncprt<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncprt` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncprt` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncprt<T>, T> {
    return new GetAllRequestBuilder<U_Bncprt<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncprt` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncprt`.
   */
  create(entity: U_Bncprt<T>): CreateRequestBuilder<U_Bncprt<T>, T> {
    return new CreateRequestBuilder<U_Bncprt<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncprt`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncprt`.
   */
  update(entity: U_Bncprt<T>): UpdateRequestBuilder<U_Bncprt<T>, T> {
    return new UpdateRequestBuilder<U_Bncprt<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncprt`.
   * @param code Key property. See {@link U_Bncprt.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncprt`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncprt<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncprt`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncprt` by taking the entity as a parameter.
   */
  delete(entity: U_Bncprt<T>): DeleteRequestBuilder<U_Bncprt<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncprt<T>, T> {
    return new DeleteRequestBuilder<U_Bncprt<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncprt ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
