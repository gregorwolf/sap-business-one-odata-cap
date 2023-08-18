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
import { U_Boquot } from './U_Boquot';

/**
 * Request builder class for operations supported on the {@link U_Boquot} entity.
 */
export class U_BoquotRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Boquot<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Boquot` entity based on its keys.
   * @param code Key property. See {@link U_Boquot.code}.
   * @returns A request builder for creating requests to retrieve one `U_Boquot` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Boquot<T>, T> {
    return new GetByKeyRequestBuilder<U_Boquot<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Boquot` entities.
   * @returns A request builder for creating requests to retrieve all `U_Boquot` entities.
   */
  getAll(): GetAllRequestBuilder<U_Boquot<T>, T> {
    return new GetAllRequestBuilder<U_Boquot<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Boquot` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Boquot`.
   */
  create(entity: U_Boquot<T>): CreateRequestBuilder<U_Boquot<T>, T> {
    return new CreateRequestBuilder<U_Boquot<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Boquot`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Boquot`.
   */
  update(entity: U_Boquot<T>): UpdateRequestBuilder<U_Boquot<T>, T> {
    return new UpdateRequestBuilder<U_Boquot<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Boquot`.
   * @param code Key property. See {@link U_Boquot.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Boquot`.
   */
  delete(code: string): DeleteRequestBuilder<U_Boquot<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Boquot`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Boquot` by taking the entity as a parameter.
   */
  delete(entity: U_Boquot<T>): DeleteRequestBuilder<U_Boquot<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Boquot<T>, T> {
    return new DeleteRequestBuilder<U_Boquot<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Boquot ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
