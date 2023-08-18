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
import { U_Bncnta } from './U_Bncnta';

/**
 * Request builder class for operations supported on the {@link U_Bncnta} entity.
 */
export class U_BncntaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bncnta<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bncnta` entity based on its keys.
   * @param code Key property. See {@link U_Bncnta.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bncnta` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bncnta<T>, T> {
    return new GetByKeyRequestBuilder<U_Bncnta<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bncnta` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bncnta` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bncnta<T>, T> {
    return new GetAllRequestBuilder<U_Bncnta<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bncnta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bncnta`.
   */
  create(entity: U_Bncnta<T>): CreateRequestBuilder<U_Bncnta<T>, T> {
    return new CreateRequestBuilder<U_Bncnta<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bncnta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bncnta`.
   */
  update(entity: U_Bncnta<T>): UpdateRequestBuilder<U_Bncnta<T>, T> {
    return new UpdateRequestBuilder<U_Bncnta<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bncnta`.
   * @param code Key property. See {@link U_Bncnta.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncnta`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bncnta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bncnta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bncnta` by taking the entity as a parameter.
   */
  delete(entity: U_Bncnta<T>): DeleteRequestBuilder<U_Bncnta<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bncnta<T>, T> {
    return new DeleteRequestBuilder<U_Bncnta<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bncnta ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
