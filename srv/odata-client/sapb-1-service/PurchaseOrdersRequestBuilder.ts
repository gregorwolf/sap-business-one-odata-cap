/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseOrders } from './PurchaseOrders';

/**
 * Request builder class for operations supported on the [[PurchaseOrders]] entity.
 */
export class PurchaseOrdersRequestBuilder extends RequestBuilder<PurchaseOrders> {
  /**
   * Returns a request builder for retrieving one `PurchaseOrders` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseOrders.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseOrders` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseOrders> {
    return new GetByKeyRequestBuilder(PurchaseOrders, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrders> {
    return new GetAllRequestBuilder(PurchaseOrders);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrders`.
   */
  create(entity: PurchaseOrders): CreateRequestBuilder<PurchaseOrders> {
    return new CreateRequestBuilder(PurchaseOrders, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrders`.
   */
  update(entity: PurchaseOrders): UpdateRequestBuilder<PurchaseOrders> {
    return new UpdateRequestBuilder(PurchaseOrders, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param docEntry Key property. See [[PurchaseOrders.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders`.
   */
  delete(docEntry: number): DeleteRequestBuilder<PurchaseOrders>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders` by taking the entity as a parameter.
   */
  delete(entity: PurchaseOrders): DeleteRequestBuilder<PurchaseOrders>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<PurchaseOrders> {
    return new DeleteRequestBuilder(PurchaseOrders, docEntryOrEntity instanceof PurchaseOrders ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
