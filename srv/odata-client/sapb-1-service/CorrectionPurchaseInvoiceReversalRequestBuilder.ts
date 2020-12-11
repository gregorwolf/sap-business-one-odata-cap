/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CorrectionPurchaseInvoiceReversal } from './CorrectionPurchaseInvoiceReversal';

/**
 * Request builder class for operations supported on the [[CorrectionPurchaseInvoiceReversal]] entity.
 */
export class CorrectionPurchaseInvoiceReversalRequestBuilder extends RequestBuilder<CorrectionPurchaseInvoiceReversal> {
  /**
   * Returns a request builder for retrieving one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
   * @param docEntry Key property. See [[CorrectionPurchaseInvoiceReversal.docEntry]].
   * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<CorrectionPurchaseInvoiceReversal> {
    return new GetByKeyRequestBuilderV4(CorrectionPurchaseInvoiceReversal, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CorrectionPurchaseInvoiceReversal` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoiceReversal` entities.
   */
  getAll(): GetAllRequestBuilderV4<CorrectionPurchaseInvoiceReversal> {
    return new GetAllRequestBuilderV4(CorrectionPurchaseInvoiceReversal);
  }

  /**
   * Returns a request builder for creating a `CorrectionPurchaseInvoiceReversal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  create(entity: CorrectionPurchaseInvoiceReversal): CreateRequestBuilderV4<CorrectionPurchaseInvoiceReversal> {
    return new CreateRequestBuilderV4(CorrectionPurchaseInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  update(entity: CorrectionPurchaseInvoiceReversal): UpdateRequestBuilderV4<CorrectionPurchaseInvoiceReversal> {
    return new UpdateRequestBuilderV4(CorrectionPurchaseInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param docEntry Key property. See [[CorrectionPurchaseInvoiceReversal.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<CorrectionPurchaseInvoiceReversal>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal` by taking the entity as a parameter.
   */
  delete(entity: CorrectionPurchaseInvoiceReversal): DeleteRequestBuilderV4<CorrectionPurchaseInvoiceReversal>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<CorrectionPurchaseInvoiceReversal> {
    return new DeleteRequestBuilderV4(CorrectionPurchaseInvoiceReversal, docEntryOrEntity instanceof CorrectionPurchaseInvoiceReversal ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
