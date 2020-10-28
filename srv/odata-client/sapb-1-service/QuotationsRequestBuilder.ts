/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Quotations } from './Quotations';

/**
 * Request builder class for operations supported on the [[Quotations]] entity.
 */
export class QuotationsRequestBuilder extends RequestBuilder<Quotations> {
  /**
   * Returns a request builder for retrieving one `Quotations` entity based on its keys.
   * @param docEntry Key property. See [[Quotations.docEntry]].
   * @returns A request builder for creating requests to retrieve one `Quotations` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<Quotations> {
    return new GetByKeyRequestBuilder(Quotations, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `Quotations` entities.
   * @returns A request builder for creating requests to retrieve all `Quotations` entities.
   */
  getAll(): GetAllRequestBuilder<Quotations> {
    return new GetAllRequestBuilder(Quotations);
  }

  /**
   * Returns a request builder for creating a `Quotations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Quotations`.
   */
  create(entity: Quotations): CreateRequestBuilder<Quotations> {
    return new CreateRequestBuilder(Quotations, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Quotations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Quotations`.
   */
  update(entity: Quotations): UpdateRequestBuilder<Quotations> {
    return new UpdateRequestBuilder(Quotations, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Quotations`.
   * @param docEntry Key property. See [[Quotations.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `Quotations`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Quotations>;
  /**
   * Returns a request builder for deleting an entity of type `Quotations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Quotations` by taking the entity as a parameter.
   */
  delete(entity: Quotations): DeleteRequestBuilder<Quotations>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Quotations> {
    return new DeleteRequestBuilder(Quotations, docEntryOrEntity instanceof Quotations ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}