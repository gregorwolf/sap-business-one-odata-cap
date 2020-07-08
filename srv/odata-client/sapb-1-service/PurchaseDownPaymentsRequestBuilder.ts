/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseDownPayments } from './PurchaseDownPayments';

/**
 * Request builder class for operations supported on the [[PurchaseDownPayments]] entity.
 */
export class PurchaseDownPaymentsRequestBuilder extends RequestBuilder<PurchaseDownPayments> {
  /**
   * Returns a request builder for retrieving one `PurchaseDownPayments` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseDownPayments.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseDownPayments` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseDownPayments> {
    return new GetByKeyRequestBuilder(PurchaseDownPayments, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseDownPayments` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDownPayments` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseDownPayments> {
    return new GetAllRequestBuilder(PurchaseDownPayments);
  }

  /**
   * Returns a request builder for creating a `PurchaseDownPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDownPayments`.
   */
  create(entity: PurchaseDownPayments): CreateRequestBuilder<PurchaseDownPayments> {
    return new CreateRequestBuilder(PurchaseDownPayments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDownPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDownPayments`.
   */
  update(entity: PurchaseDownPayments): UpdateRequestBuilder<PurchaseDownPayments> {
    return new UpdateRequestBuilder(PurchaseDownPayments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDownPayments`.
   * @param docEntry Key property. See [[PurchaseDownPayments.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDownPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseDownPayments>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDownPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDownPayments` by taking the entity as a parameter.
   */
  delete(entity: PurchaseDownPayments): DeleteRequestBuilder<PurchaseDownPayments>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseDownPayments> {
    return new DeleteRequestBuilder(PurchaseDownPayments, docEntryOrEntity instanceof PurchaseDownPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
