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
import { U_Booadm } from './U_Booadm';

/**
 * Request builder class for operations supported on the {@link U_Booadm} entity.
 */
export class U_BooadmRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Booadm<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Booadm` entity based on its keys.
   * @param code Key property. See {@link U_Booadm.code}.
   * @returns A request builder for creating requests to retrieve one `U_Booadm` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Booadm<T>, T> {
    return new GetByKeyRequestBuilder<U_Booadm<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Booadm` entities.
   * @returns A request builder for creating requests to retrieve all `U_Booadm` entities.
   */
  getAll(): GetAllRequestBuilder<U_Booadm<T>, T> {
    return new GetAllRequestBuilder<U_Booadm<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Booadm` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Booadm`.
   */
  create(entity: U_Booadm<T>): CreateRequestBuilder<U_Booadm<T>, T> {
    return new CreateRequestBuilder<U_Booadm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Booadm`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Booadm`.
   */
  update(entity: U_Booadm<T>): UpdateRequestBuilder<U_Booadm<T>, T> {
    return new UpdateRequestBuilder<U_Booadm<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Booadm`.
   * @param code Key property. See {@link U_Booadm.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Booadm`.
   */
  delete(code: string): DeleteRequestBuilder<U_Booadm<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Booadm`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Booadm` by taking the entity as a parameter.
   */
  delete(entity: U_Booadm<T>): DeleteRequestBuilder<U_Booadm<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Booadm<T>, T> {
    return new DeleteRequestBuilder<U_Booadm<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Booadm ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
