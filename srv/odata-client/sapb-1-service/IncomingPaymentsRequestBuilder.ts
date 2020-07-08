/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { IncomingPayments } from './IncomingPayments';

/**
 * Request builder class for operations supported on the [[IncomingPayments]] entity.
 */
export class IncomingPaymentsRequestBuilder extends RequestBuilder<IncomingPayments> {
  /**
   * Returns a request builder for retrieving one `IncomingPayments` entity based on its keys.
   * @param docEntry Key property. See [[IncomingPayments.docEntry]].
   * @returns A request builder for creating requests to retrieve one `IncomingPayments` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<IncomingPayments> {
    return new GetByKeyRequestBuilder(IncomingPayments, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `IncomingPayments` entities.
   * @returns A request builder for creating requests to retrieve all `IncomingPayments` entities.
   */
  getAll(): GetAllRequestBuilder<IncomingPayments> {
    return new GetAllRequestBuilder(IncomingPayments);
  }

  /**
   * Returns a request builder for creating a `IncomingPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IncomingPayments`.
   */
  create(entity: IncomingPayments): CreateRequestBuilder<IncomingPayments> {
    return new CreateRequestBuilder(IncomingPayments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `IncomingPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IncomingPayments`.
   */
  update(entity: IncomingPayments): UpdateRequestBuilder<IncomingPayments> {
    return new UpdateRequestBuilder(IncomingPayments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IncomingPayments`.
   * @param docEntry Key property. See [[IncomingPayments.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `IncomingPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilder<IncomingPayments>;
  /**
   * Returns a request builder for deleting an entity of type `IncomingPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IncomingPayments` by taking the entity as a parameter.
   */
  delete(entity: IncomingPayments): DeleteRequestBuilder<IncomingPayments>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<IncomingPayments> {
    return new DeleteRequestBuilder(IncomingPayments, docEntryOrEntity instanceof IncomingPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
