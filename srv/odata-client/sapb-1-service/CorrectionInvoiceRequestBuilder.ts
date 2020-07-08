/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CorrectionInvoice } from './CorrectionInvoice';

/**
 * Request builder class for operations supported on the [[CorrectionInvoice]] entity.
 */
export class CorrectionInvoiceRequestBuilder extends RequestBuilder<CorrectionInvoice> {
  /**
   * Returns a request builder for retrieving one `CorrectionInvoice` entity based on its keys.
   * @param docEntry Key property. See [[CorrectionInvoice.docEntry]].
   * @returns A request builder for creating requests to retrieve one `CorrectionInvoice` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<CorrectionInvoice> {
    return new GetByKeyRequestBuilder(CorrectionInvoice, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CorrectionInvoice` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionInvoice` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionInvoice> {
    return new GetAllRequestBuilder(CorrectionInvoice);
  }

  /**
   * Returns a request builder for creating a `CorrectionInvoice` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionInvoice`.
   */
  create(entity: CorrectionInvoice): CreateRequestBuilder<CorrectionInvoice> {
    return new CreateRequestBuilder(CorrectionInvoice, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionInvoice`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionInvoice`.
   */
  update(entity: CorrectionInvoice): UpdateRequestBuilder<CorrectionInvoice> {
    return new UpdateRequestBuilder(CorrectionInvoice, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
   * @param docEntry Key property. See [[CorrectionInvoice.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice`.
   */
  delete(docEntry: number): DeleteRequestBuilder<CorrectionInvoice>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice` by taking the entity as a parameter.
   */
  delete(entity: CorrectionInvoice): DeleteRequestBuilder<CorrectionInvoice>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<CorrectionInvoice> {
    return new DeleteRequestBuilder(CorrectionInvoice, docEntryOrEntity instanceof CorrectionInvoice ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
