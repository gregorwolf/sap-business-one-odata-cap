/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseOrders> {
    return new GetByKeyRequestBuilderV4(PurchaseOrders, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseOrders> {
    return new GetAllRequestBuilderV4(PurchaseOrders);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrders`.
   */
  create(entity: PurchaseOrders): CreateRequestBuilderV4<PurchaseOrders> {
    return new CreateRequestBuilderV4(PurchaseOrders, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrders`.
   */
  update(entity: PurchaseOrders): UpdateRequestBuilderV4<PurchaseOrders> {
    return new UpdateRequestBuilderV4(PurchaseOrders, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param docEntry Key property. See [[PurchaseOrders.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseOrders>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrders` by taking the entity as a parameter.
   */
  delete(entity: PurchaseOrders): DeleteRequestBuilderV4<PurchaseOrders>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseOrders> {
    return new DeleteRequestBuilderV4(PurchaseOrders, docEntryOrEntity instanceof PurchaseOrders ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
