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
import { SalesTaxInvoices } from './SalesTaxInvoices';

/**
 * Request builder class for operations supported on the {@link SalesTaxInvoices} entity.
 */
export class SalesTaxInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxInvoices<T>, T> {
  /**
   * Returns a request builder for retrieving one `SalesTaxInvoices` entity based on its keys.
   * @param docEntry Key property. See {@link SalesTaxInvoices.docEntry}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxInvoices` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesTaxInvoices<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxInvoices<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `SalesTaxInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxInvoices<T>, T> {
    return new GetAllRequestBuilder<SalesTaxInvoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTaxInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxInvoices`.
   */
  create(
    entity: SalesTaxInvoices<T>
  ): CreateRequestBuilder<SalesTaxInvoices<T>, T> {
    return new CreateRequestBuilder<SalesTaxInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxInvoices`.
   */
  update(
    entity: SalesTaxInvoices<T>
  ): UpdateRequestBuilder<SalesTaxInvoices<T>, T> {
    return new UpdateRequestBuilder<SalesTaxInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxInvoices`.
   * @param docEntry Key property. See {@link SalesTaxInvoices.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<SalesTaxInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxInvoices<T>
  ): DeleteRequestBuilder<SalesTaxInvoices<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<SalesTaxInvoices<T>, T> {
    return new DeleteRequestBuilder<SalesTaxInvoices<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof SalesTaxInvoices
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}
