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
import { PurchaseInvoices } from './PurchaseInvoices';

/**
 * Request builder class for operations supported on the {@link PurchaseInvoices} entity.
 */
export class PurchaseInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseInvoices<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseInvoices` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseInvoices.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseInvoices` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseInvoices<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseInvoices<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `PurchaseInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseInvoices<T>, T> {
    return new GetAllRequestBuilder<PurchaseInvoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseInvoices`.
   */
  create(
    entity: PurchaseInvoices<T>
  ): CreateRequestBuilder<PurchaseInvoices<T>, T> {
    return new CreateRequestBuilder<PurchaseInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseInvoices`.
   */
  update(
    entity: PurchaseInvoices<T>
  ): UpdateRequestBuilder<PurchaseInvoices<T>, T> {
    return new UpdateRequestBuilder<PurchaseInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
   * @param docEntry Key property. See {@link PurchaseInvoices.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseInvoices<T>
  ): DeleteRequestBuilder<PurchaseInvoices<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseInvoices<T>, T> {
    return new DeleteRequestBuilder<PurchaseInvoices<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseInvoices
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
