/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseCreditNotes> {
    return new GetByKeyRequestBuilderV4(PurchaseCreditNotes, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseCreditNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseCreditNotes` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseCreditNotes> {
    return new GetAllRequestBuilderV4(PurchaseCreditNotes);
  }

  /**
   * Returns a request builder for creating a `PurchaseCreditNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseCreditNotes`.
   */
  create(entity: PurchaseCreditNotes): CreateRequestBuilderV4<PurchaseCreditNotes> {
    return new CreateRequestBuilderV4(PurchaseCreditNotes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseCreditNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseCreditNotes`.
   */
  update(entity: PurchaseCreditNotes): UpdateRequestBuilderV4<PurchaseCreditNotes> {
    return new UpdateRequestBuilderV4(PurchaseCreditNotes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseCreditNotes>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes` by taking the entity as a parameter.
   */
  delete(entity: PurchaseCreditNotes): DeleteRequestBuilderV4<PurchaseCreditNotes>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseCreditNotes> {
    return new DeleteRequestBuilderV4(PurchaseCreditNotes, docEntryOrEntity instanceof PurchaseCreditNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
