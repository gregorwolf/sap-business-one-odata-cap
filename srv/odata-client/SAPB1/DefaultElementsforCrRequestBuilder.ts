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
import { DefaultElementsforCr } from './DefaultElementsforCr';

/**
 * Request builder class for operations supported on the {@link DefaultElementsforCr} entity.
 */
export class DefaultElementsforCrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefaultElementsforCr<T>, T> {
  /**
   * Returns a request builder for retrieving one `DefaultElementsforCr` entity based on its keys.
   * @param code Key property. See {@link DefaultElementsforCr.code}.
   * @returns A request builder for creating requests to retrieve one `DefaultElementsforCr` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DefaultElementsforCr<T>, T> {
    return new GetByKeyRequestBuilder<DefaultElementsforCr<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `DefaultElementsforCr` entities.
   * @returns A request builder for creating requests to retrieve all `DefaultElementsforCr` entities.
   */
  getAll(): GetAllRequestBuilder<DefaultElementsforCr<T>, T> {
    return new GetAllRequestBuilder<DefaultElementsforCr<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DefaultElementsforCr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefaultElementsforCr`.
   */
  create(
    entity: DefaultElementsforCr<T>
  ): CreateRequestBuilder<DefaultElementsforCr<T>, T> {
    return new CreateRequestBuilder<DefaultElementsforCr<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefaultElementsforCr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefaultElementsforCr`.
   */
  update(
    entity: DefaultElementsforCr<T>
  ): UpdateRequestBuilder<DefaultElementsforCr<T>, T> {
    return new UpdateRequestBuilder<DefaultElementsforCr<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefaultElementsforCr`.
   * @param code Key property. See {@link DefaultElementsforCr.code}.
   * @returns A request builder for creating requests that delete an entity of type `DefaultElementsforCr`.
   */
  delete(code: number): DeleteRequestBuilder<DefaultElementsforCr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefaultElementsforCr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefaultElementsforCr` by taking the entity as a parameter.
   */
  delete(
    entity: DefaultElementsforCr<T>
  ): DeleteRequestBuilder<DefaultElementsforCr<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DefaultElementsforCr<T>, T> {
    return new DeleteRequestBuilder<DefaultElementsforCr<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DefaultElementsforCr
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
