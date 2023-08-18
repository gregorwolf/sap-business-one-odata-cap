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
import { U_Bfuserforms } from './U_Bfuserforms';

/**
 * Request builder class for operations supported on the {@link U_Bfuserforms} entity.
 */
export class U_BfuserformsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bfuserforms<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bfuserforms` entity based on its keys.
   * @param code Key property. See {@link U_Bfuserforms.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bfuserforms` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bfuserforms<T>, T> {
    return new GetByKeyRequestBuilder<U_Bfuserforms<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bfuserforms` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bfuserforms` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bfuserforms<T>, T> {
    return new GetAllRequestBuilder<U_Bfuserforms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bfuserforms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bfuserforms`.
   */
  create(entity: U_Bfuserforms<T>): CreateRequestBuilder<U_Bfuserforms<T>, T> {
    return new CreateRequestBuilder<U_Bfuserforms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bfuserforms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bfuserforms`.
   */
  update(entity: U_Bfuserforms<T>): UpdateRequestBuilder<U_Bfuserforms<T>, T> {
    return new UpdateRequestBuilder<U_Bfuserforms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bfuserforms`.
   * @param code Key property. See {@link U_Bfuserforms.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bfuserforms`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bfuserforms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bfuserforms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bfuserforms` by taking the entity as a parameter.
   */
  delete(entity: U_Bfuserforms<T>): DeleteRequestBuilder<U_Bfuserforms<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bfuserforms<T>, T> {
    return new DeleteRequestBuilder<U_Bfuserforms<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bfuserforms
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
