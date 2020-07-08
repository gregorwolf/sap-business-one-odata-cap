/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { StockTransferDrafts } from './StockTransferDrafts';

/**
 * Request builder class for operations supported on the [[StockTransferDrafts]] entity.
 */
export class StockTransferDraftsRequestBuilder extends RequestBuilder<StockTransferDrafts> {
  /**
   * Returns a request builder for retrieving one `StockTransferDrafts` entity based on its keys.
   * @param docEntry Key property. See [[StockTransferDrafts.docEntry]].
   * @returns A request builder for creating requests to retrieve one `StockTransferDrafts` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<StockTransferDrafts> {
    return new GetByKeyRequestBuilder(StockTransferDrafts, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `StockTransferDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `StockTransferDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<StockTransferDrafts> {
    return new GetAllRequestBuilder(StockTransferDrafts);
  }

  /**
   * Returns a request builder for creating a `StockTransferDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StockTransferDrafts`.
   */
  create(entity: StockTransferDrafts): CreateRequestBuilder<StockTransferDrafts> {
    return new CreateRequestBuilder(StockTransferDrafts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `StockTransferDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StockTransferDrafts`.
   */
  update(entity: StockTransferDrafts): UpdateRequestBuilder<StockTransferDrafts> {
    return new UpdateRequestBuilder(StockTransferDrafts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
   * @param docEntry Key property. See [[StockTransferDrafts.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts`.
   */
  delete(docEntry: number): DeleteRequestBuilder<StockTransferDrafts>;
  /**
   * Returns a request builder for deleting an entity of type `StockTransferDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StockTransferDrafts` by taking the entity as a parameter.
   */
  delete(entity: StockTransferDrafts): DeleteRequestBuilder<StockTransferDrafts>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<StockTransferDrafts> {
    return new DeleteRequestBuilder(StockTransferDrafts, docEntryOrEntity instanceof StockTransferDrafts ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
