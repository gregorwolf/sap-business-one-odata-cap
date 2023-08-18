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
import { Invoices } from './Invoices';

/**
 * Request builder class for operations supported on the {@link Invoices} entity.
 */
export class InvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Invoices<T>, T> {
  /**
   * Returns a request builder for retrieving one `Invoices` entity based on its keys.
   * @param docEntry Key property. See {@link Invoices.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Invoices<T>, T> {
    return new GetByKeyRequestBuilder<Invoices<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Invoices` entities.
   * @returns A request builder for creating requests to retrieve all `Invoices` entities.
   */
  getAll(): GetAllRequestBuilder<Invoices<T>, T> {
    return new GetAllRequestBuilder<Invoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Invoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Invoices`.
   */
  create(entity: Invoices<T>): CreateRequestBuilder<Invoices<T>, T> {
    return new CreateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Invoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Invoices`.
   */
  update(entity: Invoices<T>): UpdateRequestBuilder<Invoices<T>, T> {
    return new UpdateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param docEntry Key property. See {@link Invoices.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Invoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Invoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Invoices` by taking the entity as a parameter.
   */
  delete(entity: Invoices<T>): DeleteRequestBuilder<Invoices<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Invoices<T>, T> {
    return new DeleteRequestBuilder<Invoices<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Invoices
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
