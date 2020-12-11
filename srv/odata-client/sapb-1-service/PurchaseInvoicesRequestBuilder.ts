/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PurchaseInvoices } from './PurchaseInvoices';

/**
 * Request builder class for operations supported on the [[PurchaseInvoices]] entity.
 */
export class PurchaseInvoicesRequestBuilder extends RequestBuilder<PurchaseInvoices> {
  /**
   * Returns a request builder for retrieving one `PurchaseInvoices` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseInvoices.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseInvoices` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseInvoices> {
    return new GetByKeyRequestBuilderV4(PurchaseInvoices, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseInvoices` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseInvoices> {
    return new GetAllRequestBuilderV4(PurchaseInvoices);
  }

  /**
   * Returns a request builder for creating a `PurchaseInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseInvoices`.
   */
  create(entity: PurchaseInvoices): CreateRequestBuilderV4<PurchaseInvoices> {
    return new CreateRequestBuilderV4(PurchaseInvoices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseInvoices`.
   */
  update(entity: PurchaseInvoices): UpdateRequestBuilderV4<PurchaseInvoices> {
    return new UpdateRequestBuilderV4(PurchaseInvoices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
   * @param docEntry Key property. See [[PurchaseInvoices.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseInvoices>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices` by taking the entity as a parameter.
   */
  delete(entity: PurchaseInvoices): DeleteRequestBuilderV4<PurchaseInvoices>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseInvoices> {
    return new DeleteRequestBuilderV4(PurchaseInvoices, docEntryOrEntity instanceof PurchaseInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
