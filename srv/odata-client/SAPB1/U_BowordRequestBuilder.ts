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
import { U_Boword } from './U_Boword';

/**
 * Request builder class for operations supported on the {@link U_Boword} entity.
 */
export class U_BowordRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Boword<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Boword` entity based on its keys.
   * @param code Key property. See {@link U_Boword.code}.
   * @returns A request builder for creating requests to retrieve one `U_Boword` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Boword<T>, T> {
    return new GetByKeyRequestBuilder<U_Boword<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Boword` entities.
   * @returns A request builder for creating requests to retrieve all `U_Boword` entities.
   */
  getAll(): GetAllRequestBuilder<U_Boword<T>, T> {
    return new GetAllRequestBuilder<U_Boword<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Boword` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Boword`.
   */
  create(entity: U_Boword<T>): CreateRequestBuilder<U_Boword<T>, T> {
    return new CreateRequestBuilder<U_Boword<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Boword`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Boword`.
   */
  update(entity: U_Boword<T>): UpdateRequestBuilder<U_Boword<T>, T> {
    return new UpdateRequestBuilder<U_Boword<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Boword`.
   * @param code Key property. See {@link U_Boword.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Boword`.
   */
  delete(code: string): DeleteRequestBuilder<U_Boword<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Boword`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Boword` by taking the entity as a parameter.
   */
  delete(entity: U_Boword<T>): DeleteRequestBuilder<U_Boword<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Boword<T>, T> {
    return new DeleteRequestBuilder<U_Boword<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Boword ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
