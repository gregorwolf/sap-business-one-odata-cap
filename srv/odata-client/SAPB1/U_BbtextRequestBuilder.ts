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
import { U_Bbtext } from './U_Bbtext';

/**
 * Request builder class for operations supported on the {@link U_Bbtext} entity.
 */
export class U_BbtextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbtext<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbtext` entity based on its keys.
   * @param code Key property. See {@link U_Bbtext.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbtext` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbtext<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbtext<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbtext` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbtext` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbtext<T>, T> {
    return new GetAllRequestBuilder<U_Bbtext<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbtext` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbtext`.
   */
  create(entity: U_Bbtext<T>): CreateRequestBuilder<U_Bbtext<T>, T> {
    return new CreateRequestBuilder<U_Bbtext<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbtext`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbtext`.
   */
  update(entity: U_Bbtext<T>): UpdateRequestBuilder<U_Bbtext<T>, T> {
    return new UpdateRequestBuilder<U_Bbtext<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbtext`.
   * @param code Key property. See {@link U_Bbtext.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbtext`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbtext<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbtext`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbtext` by taking the entity as a parameter.
   */
  delete(entity: U_Bbtext<T>): DeleteRequestBuilder<U_Bbtext<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbtext<T>, T> {
    return new DeleteRequestBuilder<U_Bbtext<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbtext ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
