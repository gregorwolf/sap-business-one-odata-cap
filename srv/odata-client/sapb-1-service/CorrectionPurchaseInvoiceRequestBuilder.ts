/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CorrectionPurchaseInvoice } from './CorrectionPurchaseInvoice';

/**
 * Request builder class for operations supported on the [[CorrectionPurchaseInvoice]] entity.
 */
export class CorrectionPurchaseInvoiceRequestBuilder extends RequestBuilder<CorrectionPurchaseInvoice> {
  /**
   * Returns a request builder for retrieving one `CorrectionPurchaseInvoice` entity based on its keys.
   * @param docEntry Key property. See [[CorrectionPurchaseInvoice.docEntry]].
   * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoice` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<CorrectionPurchaseInvoice> {
    return new GetByKeyRequestBuilder(CorrectionPurchaseInvoice, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CorrectionPurchaseInvoice` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoice` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionPurchaseInvoice> {
    return new GetAllRequestBuilder(CorrectionPurchaseInvoice);
  }

  /**
   * Returns a request builder for creating a `CorrectionPurchaseInvoice` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoice`.
   */
  create(entity: CorrectionPurchaseInvoice): CreateRequestBuilder<CorrectionPurchaseInvoice> {
    return new CreateRequestBuilder(CorrectionPurchaseInvoice, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoice`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoice`.
   */
  update(entity: CorrectionPurchaseInvoice): UpdateRequestBuilder<CorrectionPurchaseInvoice> {
    return new UpdateRequestBuilder(CorrectionPurchaseInvoice, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
   * @param docEntry Key property. See [[CorrectionPurchaseInvoice.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CorrectionPurchaseInvoice>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice` by taking the entity as a parameter.
   */
  delete(entity: CorrectionPurchaseInvoice): DeleteRequestBuilder<CorrectionPurchaseInvoice>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CorrectionPurchaseInvoice> {
    return new DeleteRequestBuilder(CorrectionPurchaseInvoice, docEntryOrEntity instanceof CorrectionPurchaseInvoice ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
