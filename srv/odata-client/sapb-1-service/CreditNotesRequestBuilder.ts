/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CreditNotes } from './CreditNotes';

/**
 * Request builder class for operations supported on the [[CreditNotes]] entity.
 */
export class CreditNotesRequestBuilder extends RequestBuilder<CreditNotes> {
  /**
   * Returns a request builder for retrieving one `CreditNotes` entity based on its keys.
   * @param docEntry Key property. See [[CreditNotes.docEntry]].
   * @returns A request builder for creating requests to retrieve one `CreditNotes` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<CreditNotes> {
    return new GetByKeyRequestBuilderV4(CreditNotes, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `CreditNotes` entities.
   * @returns A request builder for creating requests to retrieve all `CreditNotes` entities.
   */
  getAll(): GetAllRequestBuilderV4<CreditNotes> {
    return new GetAllRequestBuilderV4(CreditNotes);
  }

  /**
   * Returns a request builder for creating a `CreditNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditNotes`.
   */
  create(entity: CreditNotes): CreateRequestBuilderV4<CreditNotes> {
    return new CreateRequestBuilderV4(CreditNotes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CreditNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditNotes`.
   */
  update(entity: CreditNotes): UpdateRequestBuilderV4<CreditNotes> {
    return new UpdateRequestBuilderV4(CreditNotes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditNotes`.
   * @param docEntry Key property. See [[CreditNotes.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `CreditNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<CreditNotes>;
  /**
   * Returns a request builder for deleting an entity of type `CreditNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditNotes` by taking the entity as a parameter.
   */
  delete(entity: CreditNotes): DeleteRequestBuilderV4<CreditNotes>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<CreditNotes> {
    return new DeleteRequestBuilderV4(CreditNotes, docEntryOrEntity instanceof CreditNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
