/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseTaxInvoices> {
    return new GetByKeyRequestBuilderV4(PurchaseTaxInvoices, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseTaxInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseTaxInvoices` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseTaxInvoices> {
    return new GetAllRequestBuilderV4(PurchaseTaxInvoices);
  }

  /**
   * Returns a request builder for creating a `PurchaseTaxInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseTaxInvoices`.
   */
  create(entity: PurchaseTaxInvoices): CreateRequestBuilderV4<PurchaseTaxInvoices> {
    return new CreateRequestBuilderV4(PurchaseTaxInvoices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseTaxInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseTaxInvoices`.
   */
  update(entity: PurchaseTaxInvoices): UpdateRequestBuilderV4<PurchaseTaxInvoices> {
    return new UpdateRequestBuilderV4(PurchaseTaxInvoices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param docEntry Key property. See [[PurchaseTaxInvoices.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseTaxInvoices>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseTaxInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseTaxInvoices` by taking the entity as a parameter.
   */
  delete(entity: PurchaseTaxInvoices): DeleteRequestBuilderV4<PurchaseTaxInvoices>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseTaxInvoices> {
    return new DeleteRequestBuilderV4(PurchaseTaxInvoices, docEntryOrEntity instanceof PurchaseTaxInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
