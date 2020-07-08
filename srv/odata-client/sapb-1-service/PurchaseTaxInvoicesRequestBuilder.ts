/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseTaxInvoices } from './PurchaseTaxInvoices';

/**
 * Request builder class for operations supported on the [[PurchaseTaxInvoices]] entity.
 */
export class PurchaseTaxInvoicesRequestBuilder extends RequestBuilder<PurchaseTaxInvoices> {
  /**
   * Returns a request builder for retrieving one `PurchaseTaxInvoices` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseTaxInvoices.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseTaxInvoices` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseTaxInvoices> {
    return new GetByKeyRequestBuilder(PurchaseTaxInvoices, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseTaxInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseTaxInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseTaxInvoices> {
    return new GetAllRequestBuilder(PurchaseTaxInvoices);
  }

  /**
   * Returns a request builder for creating a `PurchaseTaxInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseTaxInvoices`.
   */
  create(entity: PurchaseTaxInvoices): CreateRequestBuilder<PurchaseTaxInvoices> {
    return new CreateRequestBuilder(PurchaseTaxInvoices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseTaxInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseTaxInvoices`.
   */
  update(entity: PurchaseTaxInvoices): UpdateRequestBuilder<PurchaseTaxInvoices> {
    return new UpdateRequestBuilder(PurchaseTaxInvoices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param docEntry Key property. See [[PurchaseTaxInvoices.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseTaxInvoices>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices` by taking the entity as a parameter.
   */
  delete(entity: PurchaseTaxInvoices): DeleteRequestBuilder<PurchaseTaxInvoices>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseTaxInvoices> {
    return new DeleteRequestBuilder(PurchaseTaxInvoices, docEntryOrEntity instanceof PurchaseTaxInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
