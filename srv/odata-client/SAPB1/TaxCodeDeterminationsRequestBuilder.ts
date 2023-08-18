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
import { TaxCodeDeterminations } from './TaxCodeDeterminations';

/**
 * Request builder class for operations supported on the {@link TaxCodeDeterminations} entity.
 */
export class TaxCodeDeterminationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCodeDeterminations<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxCodeDeterminations` entity based on its keys.
   * @param docEntry Key property. See {@link TaxCodeDeterminations.docEntry}.
   * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminations` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TaxCodeDeterminations<T>, T> {
    return new GetByKeyRequestBuilder<TaxCodeDeterminations<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `TaxCodeDeterminations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminations` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodeDeterminations<T>, T> {
    return new GetAllRequestBuilder<TaxCodeDeterminations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxCodeDeterminations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminations`.
   */
  create(
    entity: TaxCodeDeterminations<T>
  ): CreateRequestBuilder<TaxCodeDeterminations<T>, T> {
    return new CreateRequestBuilder<TaxCodeDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeDeterminations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminations`.
   */
  update(
    entity: TaxCodeDeterminations<T>
  ): UpdateRequestBuilder<TaxCodeDeterminations<T>, T> {
    return new UpdateRequestBuilder<TaxCodeDeterminations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
   * @param docEntry Key property. See {@link TaxCodeDeterminations.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<TaxCodeDeterminations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeDeterminations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeDeterminations` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCodeDeterminations<T>
  ): DeleteRequestBuilder<TaxCodeDeterminations<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<TaxCodeDeterminations<T>, T> {
    return new DeleteRequestBuilder<TaxCodeDeterminations<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof TaxCodeDeterminations
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
