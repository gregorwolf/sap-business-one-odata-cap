/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseCreditNotes } from './PurchaseCreditNotes';

/**
 * Request builder class for operations supported on the [[PurchaseCreditNotes]] entity.
 */
export class PurchaseCreditNotesRequestBuilder extends RequestBuilder<PurchaseCreditNotes> {
  /**
   * Returns a request builder for retrieving one `PurchaseCreditNotes` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseCreditNotes` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseCreditNotes> {
    return new GetByKeyRequestBuilder(PurchaseCreditNotes, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseCreditNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseCreditNotes` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseCreditNotes> {
    return new GetAllRequestBuilder(PurchaseCreditNotes);
  }

  /**
   * Returns a request builder for creating a `PurchaseCreditNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseCreditNotes`.
   */
  create(entity: PurchaseCreditNotes): CreateRequestBuilder<PurchaseCreditNotes> {
    return new CreateRequestBuilder(PurchaseCreditNotes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseCreditNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseCreditNotes`.
   */
  update(entity: PurchaseCreditNotes): UpdateRequestBuilder<PurchaseCreditNotes> {
    return new UpdateRequestBuilder(PurchaseCreditNotes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseCreditNotes>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes` by taking the entity as a parameter.
   */
  delete(entity: PurchaseCreditNotes): DeleteRequestBuilder<PurchaseCreditNotes>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseCreditNotes> {
    return new DeleteRequestBuilder(PurchaseCreditNotes, docEntryOrEntity instanceof PurchaseCreditNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
