/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PurchaseDeliveryNotes } from './PurchaseDeliveryNotes';

/**
 * Request builder class for operations supported on the [[PurchaseDeliveryNotes]] entity.
 */
export class PurchaseDeliveryNotesRequestBuilder extends RequestBuilder<PurchaseDeliveryNotes> {
  /**
   * Returns a request builder for retrieving one `PurchaseDeliveryNotes` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseDeliveryNotes.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseDeliveryNotes` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseDeliveryNotes> {
    return new GetByKeyRequestBuilderV4(PurchaseDeliveryNotes, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseDeliveryNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDeliveryNotes` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseDeliveryNotes> {
    return new GetAllRequestBuilderV4(PurchaseDeliveryNotes);
  }

  /**
   * Returns a request builder for creating a `PurchaseDeliveryNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDeliveryNotes`.
   */
  create(entity: PurchaseDeliveryNotes): CreateRequestBuilderV4<PurchaseDeliveryNotes> {
    return new CreateRequestBuilderV4(PurchaseDeliveryNotes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDeliveryNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDeliveryNotes`.
   */
  update(entity: PurchaseDeliveryNotes): UpdateRequestBuilderV4<PurchaseDeliveryNotes> {
    return new UpdateRequestBuilderV4(PurchaseDeliveryNotes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
   * @param docEntry Key property. See [[PurchaseDeliveryNotes.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseDeliveryNotes>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes` by taking the entity as a parameter.
   */
  delete(entity: PurchaseDeliveryNotes): DeleteRequestBuilderV4<PurchaseDeliveryNotes>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseDeliveryNotes> {
    return new DeleteRequestBuilderV4(PurchaseDeliveryNotes, docEntryOrEntity instanceof PurchaseDeliveryNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
