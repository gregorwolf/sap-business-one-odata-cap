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
import { U_Boostp } from './U_Boostp';

/**
 * Request builder class for operations supported on the {@link U_Boostp} entity.
 */
export class U_BoostpRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Boostp<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Boostp` entity based on its keys.
   * @param code Key property. See {@link U_Boostp.code}.
   * @returns A request builder for creating requests to retrieve one `U_Boostp` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Boostp<T>, T> {
    return new GetByKeyRequestBuilder<U_Boostp<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Boostp` entities.
   * @returns A request builder for creating requests to retrieve all `U_Boostp` entities.
   */
  getAll(): GetAllRequestBuilder<U_Boostp<T>, T> {
    return new GetAllRequestBuilder<U_Boostp<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Boostp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Boostp`.
   */
  create(entity: U_Boostp<T>): CreateRequestBuilder<U_Boostp<T>, T> {
    return new CreateRequestBuilder<U_Boostp<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Boostp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Boostp`.
   */
  update(entity: U_Boostp<T>): UpdateRequestBuilder<U_Boostp<T>, T> {
    return new UpdateRequestBuilder<U_Boostp<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Boostp`.
   * @param code Key property. See {@link U_Boostp.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Boostp`.
   */
  delete(code: string): DeleteRequestBuilder<U_Boostp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Boostp`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Boostp` by taking the entity as a parameter.
   */
  delete(entity: U_Boostp<T>): DeleteRequestBuilder<U_Boostp<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Boostp<T>, T> {
    return new DeleteRequestBuilder<U_Boostp<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Boostp ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
