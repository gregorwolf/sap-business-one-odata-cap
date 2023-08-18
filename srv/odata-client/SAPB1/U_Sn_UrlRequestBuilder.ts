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
import { U_Sn_Url } from './U_Sn_Url';

/**
 * Request builder class for operations supported on the {@link U_Sn_Url} entity.
 */
export class U_Sn_UrlRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Sn_Url<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Sn_Url` entity based on its keys.
   * @param code Key property. See {@link U_Sn_Url.code}.
   * @returns A request builder for creating requests to retrieve one `U_Sn_Url` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Sn_Url<T>, T> {
    return new GetByKeyRequestBuilder<U_Sn_Url<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Sn_Url` entities.
   * @returns A request builder for creating requests to retrieve all `U_Sn_Url` entities.
   */
  getAll(): GetAllRequestBuilder<U_Sn_Url<T>, T> {
    return new GetAllRequestBuilder<U_Sn_Url<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Sn_Url` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Sn_Url`.
   */
  create(entity: U_Sn_Url<T>): CreateRequestBuilder<U_Sn_Url<T>, T> {
    return new CreateRequestBuilder<U_Sn_Url<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Sn_Url`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Sn_Url`.
   */
  update(entity: U_Sn_Url<T>): UpdateRequestBuilder<U_Sn_Url<T>, T> {
    return new UpdateRequestBuilder<U_Sn_Url<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Sn_Url`.
   * @param code Key property. See {@link U_Sn_Url.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Sn_Url`.
   */
  delete(code: string): DeleteRequestBuilder<U_Sn_Url<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Sn_Url`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Sn_Url` by taking the entity as a parameter.
   */
  delete(entity: U_Sn_Url<T>): DeleteRequestBuilder<U_Sn_Url<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Sn_Url<T>, T> {
    return new DeleteRequestBuilder<U_Sn_Url<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Sn_Url ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
