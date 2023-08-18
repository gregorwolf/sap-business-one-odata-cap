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
import { U_Bncadm } from './U_Bncadm';

/**
 * Request builder class for operations supported on the {@link U_Bncadm} entity.
 */
export class U_BncadmRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncadm<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncadm` entity based on its keys.
   * @param code Key property. See {@link U_Bncadm.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncadm` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncadm<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncadm<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncadm` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncadm` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncadm<T>, T> {
    return new GetAllRequestBuilder<U_Bncadm<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncadm` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncadm`.
   */
  create(entity: U_Bncadm<T>): CreateRequestBuilder<U_Bncadm<T>, T> {
    return new CreateRequestBuilder<U_Bncadm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncadm`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncadm`.
   */
  update(entity: U_Bncadm<T>): UpdateRequestBuilder<U_Bncadm<T>, T> {
    return new UpdateRequestBuilder<U_Bncadm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncadm`.
   * @param code Key property. See {@link U_Bncadm.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncadm`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncadm<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncadm`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncadm` by taking the entity as a parameter.
   */
  delete(entity: U_Bncadm<T>): DeleteRequestBuilder<U_Bncadm<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncadm<T>, T> {
    return new DeleteRequestBuilder<U_Bncadm<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncadm ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
