/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PurchaseReturns } from './PurchaseReturns';

/**
 * Request builder class for operations supported on the [[PurchaseReturns]] entity.
 */
export class PurchaseReturnsRequestBuilder extends RequestBuilder<PurchaseReturns> {
  /**
   * Returns a request builder for retrieving one `PurchaseReturns` entity based on its keys.
   * @param docEntry Key property. See [[PurchaseReturns.docEntry]].
   * @returns A request builder for creating requests to retrieve one `PurchaseReturns` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<PurchaseReturns> {
    return new GetByKeyRequestBuilderV4(PurchaseReturns, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `PurchaseReturns` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseReturns` entities.
   */
  getAll(): GetAllRequestBuilderV4<PurchaseReturns> {
    return new GetAllRequestBuilderV4(PurchaseReturns);
  }

  /**
   * Returns a request builder for creating a `PurchaseReturns` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseReturns`.
   */
  create(entity: PurchaseReturns): CreateRequestBuilderV4<PurchaseReturns> {
    return new CreateRequestBuilderV4(PurchaseReturns, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseReturns`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseReturns`.
   */
  update(entity: PurchaseReturns): UpdateRequestBuilderV4<PurchaseReturns> {
    return new UpdateRequestBuilderV4(PurchaseReturns, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseReturns`.
   * @param docEntry Key property. See [[PurchaseReturns.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<PurchaseReturns>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseReturns`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseReturns` by taking the entity as a parameter.
   */
  delete(entity: PurchaseReturns): DeleteRequestBuilderV4<PurchaseReturns>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<PurchaseReturns> {
    return new DeleteRequestBuilderV4(PurchaseReturns, docEntryOrEntity instanceof PurchaseReturns ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
