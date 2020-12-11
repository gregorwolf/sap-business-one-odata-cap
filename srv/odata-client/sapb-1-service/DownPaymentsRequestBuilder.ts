/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DownPayments } from './DownPayments';

/**
 * Request builder class for operations supported on the [[DownPayments]] entity.
 */
export class DownPaymentsRequestBuilder extends RequestBuilder<DownPayments> {
  /**
   * Returns a request builder for retrieving one `DownPayments` entity based on its keys.
   * @param docEntry Key property. See [[DownPayments.docEntry]].
   * @returns A request builder for creating requests to retrieve one `DownPayments` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<DownPayments> {
    return new GetByKeyRequestBuilderV4(DownPayments, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `DownPayments` entities.
   * @returns A request builder for creating requests to retrieve all `DownPayments` entities.
   */
  getAll(): GetAllRequestBuilderV4<DownPayments> {
    return new GetAllRequestBuilderV4(DownPayments);
  }

  /**
   * Returns a request builder for creating a `DownPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DownPayments`.
   */
  create(entity: DownPayments): CreateRequestBuilderV4<DownPayments> {
    return new CreateRequestBuilderV4(DownPayments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DownPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DownPayments`.
   */
  update(entity: DownPayments): UpdateRequestBuilderV4<DownPayments> {
    return new UpdateRequestBuilderV4(DownPayments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DownPayments`.
   * @param docEntry Key property. See [[DownPayments.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `DownPayments`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<DownPayments>;
  /**
   * Returns a request builder for deleting an entity of type `DownPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DownPayments` by taking the entity as a parameter.
   */
  delete(entity: DownPayments): DeleteRequestBuilderV4<DownPayments>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<DownPayments> {
    return new DeleteRequestBuilderV4(DownPayments, docEntryOrEntity instanceof DownPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
