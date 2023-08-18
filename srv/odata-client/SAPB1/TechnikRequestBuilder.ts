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
import { Technik } from './Technik';

/**
 * Request builder class for operations supported on the {@link Technik} entity.
 */
export class TechnikRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Technik<T>, T> {
  /**
   * Returns a request builder for retrieving one `Technik` entity based on its keys.
   * @param docEntry Key property. See {@link Technik.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Technik` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Technik<T>, T> {
    return new GetByKeyRequestBuilder<Technik<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Technik` entities.
   * @returns A request builder for creating requests to retrieve all `Technik` entities.
   */
  getAll(): GetAllRequestBuilder<Technik<T>, T> {
    return new GetAllRequestBuilder<Technik<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Technik` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Technik`.
   */
  create(entity: Technik<T>): CreateRequestBuilder<Technik<T>, T> {
    return new CreateRequestBuilder<Technik<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Technik`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Technik`.
   */
  update(entity: Technik<T>): UpdateRequestBuilder<Technik<T>, T> {
    return new UpdateRequestBuilder<Technik<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Technik`.
   * @param docEntry Key property. See {@link Technik.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Technik`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Technik<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Technik`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Technik` by taking the entity as a parameter.
   */
  delete(entity: Technik<T>): DeleteRequestBuilder<Technik<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Technik<T>, T> {
    return new DeleteRequestBuilder<Technik<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Technik
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
