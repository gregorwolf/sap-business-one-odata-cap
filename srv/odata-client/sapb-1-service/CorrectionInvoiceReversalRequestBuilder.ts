/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CorrectionInvoiceReversal } from './CorrectionInvoiceReversal';

/**
 * Request builder class for operations supported on the [[CorrectionInvoiceReversal]] entity.
 */
export class CorrectionInvoiceReversalRequestBuilder extends RequestBuilder<CorrectionInvoiceReversal> {
  /**
   * Returns a request builder for retrieving one `CorrectionInvoiceReversal` entity based on its keys.
   * @param docEntry Key property. See [[CorrectionInvoiceReversal.docEntry]].
   * @returns A request builder for creating requests to retrieve one `CorrectionInvoiceReversal` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<CorrectionInvoiceReversal> {
    return new GetByKeyRequestBuilder(CorrectionInvoiceReversal, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CorrectionInvoiceReversal` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionInvoiceReversal` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionInvoiceReversal> {
    return new GetAllRequestBuilder(CorrectionInvoiceReversal);
  }

  /**
   * Returns a request builder for creating a `CorrectionInvoiceReversal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionInvoiceReversal`.
   */
  create(entity: CorrectionInvoiceReversal): CreateRequestBuilder<CorrectionInvoiceReversal> {
    return new CreateRequestBuilder(CorrectionInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionInvoiceReversal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionInvoiceReversal`.
   */
  update(entity: CorrectionInvoiceReversal): UpdateRequestBuilder<CorrectionInvoiceReversal> {
    return new UpdateRequestBuilder(CorrectionInvoiceReversal, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoiceReversal`.
   * @param docEntry Key property. See [[CorrectionInvoiceReversal.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoiceReversal`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CorrectionInvoiceReversal>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoiceReversal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoiceReversal` by taking the entity as a parameter.
   */
  delete(entity: CorrectionInvoiceReversal): DeleteRequestBuilder<CorrectionInvoiceReversal>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CorrectionInvoiceReversal> {
    return new DeleteRequestBuilder(CorrectionInvoiceReversal, docEntryOrEntity instanceof CorrectionInvoiceReversal ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
