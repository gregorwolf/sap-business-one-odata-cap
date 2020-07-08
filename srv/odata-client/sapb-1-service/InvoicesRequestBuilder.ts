/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Invoices } from './Invoices';

/**
 * Request builder class for operations supported on the [[Invoices]] entity.
 */
export class InvoicesRequestBuilder extends RequestBuilder<Invoices> {
  /**
   * Returns a request builder for retrieving one `Invoices` entity based on its keys.
   * @param docEntry Key property. See [[Invoices.docEntry]].
   * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<Invoices> {
    return new GetByKeyRequestBuilder(Invoices, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Invoices` entities.
   * @returns A request builder for creating requests to retrieve all `Invoices` entities.
   */
  getAll(): GetAllRequestBuilder<Invoices> {
    return new GetAllRequestBuilder(Invoices);
  }

  /**
   * Returns a request builder for creating a `Invoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Invoices`.
   */
  create(entity: Invoices): CreateRequestBuilder<Invoices> {
    return new CreateRequestBuilder(Invoices, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Invoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Invoices`.
   */
  update(entity: Invoices): UpdateRequestBuilder<Invoices> {
    return new UpdateRequestBuilder(Invoices, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param docEntry Key property. See [[Invoices.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Invoices`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Invoices>;
  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Invoices` by taking the entity as a parameter.
   */
  delete(entity: Invoices): DeleteRequestBuilder<Invoices>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Invoices> {
    return new DeleteRequestBuilder(Invoices, docEntryOrEntity instanceof Invoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
