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
import { PurchaseTaxInvoices } from './PurchaseTaxInvoices';

/**
 * Request builder class for operations supported on the {@link PurchaseTaxInvoices} entity.
 */
export class PurchaseTaxInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseTaxInvoices<T>, T> {
  /**
   * Returns a request builder for retrieving one `PurchaseTaxInvoices` entity based on its keys.
   * @param docEntry Key property. See {@link PurchaseTaxInvoices.docEntry}.
   * @returns A request builder for creating requests to retrieve one `PurchaseTaxInvoices` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseTaxInvoices<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseTaxInvoices<T>, T>(
      this.entityApi,
      { DocEntry: docEntry }
    );
  }

  /**
   * Returns a request builder for querying all `PurchaseTaxInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseTaxInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseTaxInvoices<T>, T> {
    return new GetAllRequestBuilder<PurchaseTaxInvoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseTaxInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseTaxInvoices`.
   */
  create(
    entity: PurchaseTaxInvoices<T>
  ): CreateRequestBuilder<PurchaseTaxInvoices<T>, T> {
    return new CreateRequestBuilder<PurchaseTaxInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseTaxInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseTaxInvoices`.
   */
  update(
    entity: PurchaseTaxInvoices<T>
  ): UpdateRequestBuilder<PurchaseTaxInvoices<T>, T> {
    return new UpdateRequestBuilder<PurchaseTaxInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param docEntry Key property. See {@link PurchaseTaxInvoices.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseTaxInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseTaxInvoices<T>
  ): DeleteRequestBuilder<PurchaseTaxInvoices<T>, T>;
  delete(
    docEntryOrEntity: any
  ): DeleteRequestBuilder<PurchaseTaxInvoices<T>, T> {
    return new DeleteRequestBuilder<PurchaseTaxInvoices<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof PurchaseTaxInvoices
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
