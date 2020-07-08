/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(docEntry: number): GetByKeyRequestBuilder<CorrectionPurchaseInvoiceReversal> {
    return new GetByKeyRequestBuilder(CorrectionPurchaseInvoiceReversal, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CorrectionPurchaseInvoiceReversal` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoiceReversal` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionPurchaseInvoiceReversal> {
    return new GetAllRequestBuilder(CorrectionPurchaseInvoiceReversal);
  }

  /**
   * Returns a request builder for creating a `CorrectionPurchaseInvoiceReversal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  create(entity: CorrectionPurchaseInvoiceReversal): CreateRequestBuilder<CorrectionPurchaseInvoiceReversal> {
    return new CreateRequestBuilder(CorrectionPurchaseInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  update(entity: CorrectionPurchaseInvoiceReversal): UpdateRequestBuilder<CorrectionPurchaseInvoiceReversal> {
    return new UpdateRequestBuilder(CorrectionPurchaseInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param docEntry Key property. See [[CorrectionPurchaseInvoiceReversal.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoiceReversal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoiceReversal` by taking the entity as a parameter.
   */
  delete(entity: CorrectionPurchaseInvoiceReversal): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CorrectionPurchaseInvoiceReversal> {
    return new DeleteRequestBuilder(CorrectionPurchaseInvoiceReversal, docEntryOrEntity instanceof CorrectionPurchaseInvoiceReversal ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
