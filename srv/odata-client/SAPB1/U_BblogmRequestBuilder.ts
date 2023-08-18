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
import { U_Bblogm } from './U_Bblogm';

/**
 * Request builder class for operations supported on the {@link U_Bblogm} entity.
 */
export class U_BblogmRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bblogm<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bblogm` entity based on its keys.
   * @param code Key property. See {@link U_Bblogm.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bblogm` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bblogm<T>, T> {
    return new GetByKeyRequestBuilder<U_Bblogm<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bblogm` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bblogm` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bblogm<T>, T> {
    return new GetAllRequestBuilder<U_Bblogm<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bblogm` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bblogm`.
   */
  create(entity: U_Bblogm<T>): CreateRequestBuilder<U_Bblogm<T>, T> {
    return new CreateRequestBuilder<U_Bblogm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bblogm`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bblogm`.
   */
  update(entity: U_Bblogm<T>): UpdateRequestBuilder<U_Bblogm<T>, T> {
    return new UpdateRequestBuilder<U_Bblogm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bblogm`.
   * @param code Key property. See {@link U_Bblogm.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bblogm`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bblogm<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bblogm`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bblogm` by taking the entity as a parameter.
   */
  delete(entity: U_Bblogm<T>): DeleteRequestBuilder<U_Bblogm<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bblogm<T>, T> {
    return new DeleteRequestBuilder<U_Bblogm<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bblogm ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
