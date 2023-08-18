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
import { U_Bbatv2 } from './U_Bbatv2';

/**
 * Request builder class for operations supported on the {@link U_Bbatv2} entity.
 */
export class U_Bbatv2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbatv2<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbatv2` entity based on its keys.
   * @param code Key property. See {@link U_Bbatv2.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbatv2` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbatv2<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbatv2<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbatv2` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbatv2` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbatv2<T>, T> {
    return new GetAllRequestBuilder<U_Bbatv2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbatv2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbatv2`.
   */
  create(entity: U_Bbatv2<T>): CreateRequestBuilder<U_Bbatv2<T>, T> {
    return new CreateRequestBuilder<U_Bbatv2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbatv2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbatv2`.
   */
  update(entity: U_Bbatv2<T>): UpdateRequestBuilder<U_Bbatv2<T>, T> {
    return new UpdateRequestBuilder<U_Bbatv2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbatv2`.
   * @param code Key property. See {@link U_Bbatv2.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbatv2`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbatv2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbatv2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbatv2` by taking the entity as a parameter.
   */
  delete(entity: U_Bbatv2<T>): DeleteRequestBuilder<U_Bbatv2<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbatv2<T>, T> {
    return new DeleteRequestBuilder<U_Bbatv2<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbatv2 ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
