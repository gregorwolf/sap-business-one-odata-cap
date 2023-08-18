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
import { U_Boexcel } from './U_Boexcel';

/**
 * Request builder class for operations supported on the {@link U_Boexcel} entity.
 */
export class U_BoexcelRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Boexcel<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Boexcel` entity based on its keys.
   * @param code Key property. See {@link U_Boexcel.code}.
   * @returns A request builder for creating requests to retrieve one `U_Boexcel` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Boexcel<T>, T> {
    return new GetByKeyRequestBuilder<U_Boexcel<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Boexcel` entities.
   * @returns A request builder for creating requests to retrieve all `U_Boexcel` entities.
   */
  getAll(): GetAllRequestBuilder<U_Boexcel<T>, T> {
    return new GetAllRequestBuilder<U_Boexcel<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Boexcel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Boexcel`.
   */
  create(entity: U_Boexcel<T>): CreateRequestBuilder<U_Boexcel<T>, T> {
    return new CreateRequestBuilder<U_Boexcel<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Boexcel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Boexcel`.
   */
  update(entity: U_Boexcel<T>): UpdateRequestBuilder<U_Boexcel<T>, T> {
    return new UpdateRequestBuilder<U_Boexcel<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Boexcel`.
   * @param code Key property. See {@link U_Boexcel.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Boexcel`.
   */
  delete(code: string): DeleteRequestBuilder<U_Boexcel<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Boexcel`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Boexcel` by taking the entity as a parameter.
   */
  delete(entity: U_Boexcel<T>): DeleteRequestBuilder<U_Boexcel<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Boexcel<T>, T> {
    return new DeleteRequestBuilder<U_Boexcel<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Boexcel ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
