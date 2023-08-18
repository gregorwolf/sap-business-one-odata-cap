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
import { Masterartikel } from './Masterartikel';

/**
 * Request builder class for operations supported on the {@link Masterartikel} entity.
 */
export class MasterartikelRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Masterartikel<T>, T> {
  /**
   * Returns a request builder for retrieving one `Masterartikel` entity based on its keys.
   * @param code Key property. See {@link Masterartikel.code}.
   * @returns A request builder for creating requests to retrieve one `Masterartikel` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Masterartikel<T>, T> {
    return new GetByKeyRequestBuilder<Masterartikel<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Masterartikel` entities.
   * @returns A request builder for creating requests to retrieve all `Masterartikel` entities.
   */
  getAll(): GetAllRequestBuilder<Masterartikel<T>, T> {
    return new GetAllRequestBuilder<Masterartikel<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Masterartikel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Masterartikel`.
   */
  create(entity: Masterartikel<T>): CreateRequestBuilder<Masterartikel<T>, T> {
    return new CreateRequestBuilder<Masterartikel<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Masterartikel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Masterartikel`.
   */
  update(entity: Masterartikel<T>): UpdateRequestBuilder<Masterartikel<T>, T> {
    return new UpdateRequestBuilder<Masterartikel<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Masterartikel`.
   * @param code Key property. See {@link Masterartikel.code}.
   * @returns A request builder for creating requests that delete an entity of type `Masterartikel`.
   */
  delete(code: string): DeleteRequestBuilder<Masterartikel<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Masterartikel`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Masterartikel` by taking the entity as a parameter.
   */
  delete(entity: Masterartikel<T>): DeleteRequestBuilder<Masterartikel<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Masterartikel<T>, T> {
    return new DeleteRequestBuilder<Masterartikel<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Masterartikel
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
