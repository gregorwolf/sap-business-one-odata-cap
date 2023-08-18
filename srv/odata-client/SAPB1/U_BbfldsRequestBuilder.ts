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
import { U_Bbflds } from './U_Bbflds';

/**
 * Request builder class for operations supported on the {@link U_Bbflds} entity.
 */
export class U_BbfldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbflds<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbflds` entity based on its keys.
   * @param code Key property. See {@link U_Bbflds.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbflds` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbflds<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbflds<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbflds` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbflds` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbflds<T>, T> {
    return new GetAllRequestBuilder<U_Bbflds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbflds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbflds`.
   */
  create(entity: U_Bbflds<T>): CreateRequestBuilder<U_Bbflds<T>, T> {
    return new CreateRequestBuilder<U_Bbflds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbflds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbflds`.
   */
  update(entity: U_Bbflds<T>): UpdateRequestBuilder<U_Bbflds<T>, T> {
    return new UpdateRequestBuilder<U_Bbflds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbflds`.
   * @param code Key property. See {@link U_Bbflds.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbflds`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbflds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbflds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbflds` by taking the entity as a parameter.
   */
  delete(entity: U_Bbflds<T>): DeleteRequestBuilder<U_Bbflds<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbflds<T>, T> {
    return new DeleteRequestBuilder<U_Bbflds<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbflds ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
