/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SalesTaxInvoices } from './SalesTaxInvoices';

/**
 * Request builder class for operations supported on the [[SalesTaxInvoices]] entity.
 */
export class SalesTaxInvoicesRequestBuilder extends RequestBuilder<SalesTaxInvoices> {
  /**
   * Returns a request builder for retrieving one `SalesTaxInvoices` entity based on its keys.
   * @param docEntry Key property. See [[SalesTaxInvoices.docEntry]].
   * @returns A request builder for creating requests to retrieve one `SalesTaxInvoices` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<SalesTaxInvoices> {
    return new GetByKeyRequestBuilderV4(SalesTaxInvoices, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `SalesTaxInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxInvoices` entities.
   */
  getAll(): GetAllRequestBuilderV4<SalesTaxInvoices> {
    return new GetAllRequestBuilderV4(SalesTaxInvoices);
  }

  /**
   * Returns a request builder for creating a `SalesTaxInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxInvoices`.
   */
  create(entity: SalesTaxInvoices): CreateRequestBuilderV4<SalesTaxInvoices> {
    return new CreateRequestBuilderV4(SalesTaxInvoices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxInvoices`.
   */
  update(entity: SalesTaxInvoices): UpdateRequestBuilderV4<SalesTaxInvoices> {
    return new UpdateRequestBuilderV4(SalesTaxInvoices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxInvoices`.
   * @param docEntry Key property. See [[SalesTaxInvoices.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxInvoices`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<SalesTaxInvoices>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxInvoices` by taking the entity as a parameter.
   */
  delete(entity: SalesTaxInvoices): DeleteRequestBuilderV4<SalesTaxInvoices>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<SalesTaxInvoices> {
    return new DeleteRequestBuilderV4(SalesTaxInvoices, docEntryOrEntity instanceof SalesTaxInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
