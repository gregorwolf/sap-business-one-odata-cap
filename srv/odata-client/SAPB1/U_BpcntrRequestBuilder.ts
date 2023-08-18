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
import { U_Bpcntr } from './U_Bpcntr';

/**
 * Request builder class for operations supported on the {@link U_Bpcntr} entity.
 */
export class U_BpcntrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bpcntr<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bpcntr` entity based on its keys.
   * @param code Key property. See {@link U_Bpcntr.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bpcntr` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bpcntr<T>, T> {
    return new GetByKeyRequestBuilder<U_Bpcntr<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bpcntr` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bpcntr` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bpcntr<T>, T> {
    return new GetAllRequestBuilder<U_Bpcntr<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bpcntr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bpcntr`.
   */
  create(entity: U_Bpcntr<T>): CreateRequestBuilder<U_Bpcntr<T>, T> {
    return new CreateRequestBuilder<U_Bpcntr<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bpcntr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bpcntr`.
   */
  update(entity: U_Bpcntr<T>): UpdateRequestBuilder<U_Bpcntr<T>, T> {
    return new UpdateRequestBuilder<U_Bpcntr<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bpcntr`.
   * @param code Key property. See {@link U_Bpcntr.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bpcntr`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bpcntr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bpcntr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bpcntr` by taking the entity as a parameter.
   */
  delete(entity: U_Bpcntr<T>): DeleteRequestBuilder<U_Bpcntr<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bpcntr<T>, T> {
    return new DeleteRequestBuilder<U_Bpcntr<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bpcntr ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
