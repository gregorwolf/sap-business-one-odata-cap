/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryTransferRequests } from './InventoryTransferRequests';

/**
 * Request builder class for operations supported on the [[InventoryTransferRequests]] entity.
 */
export class InventoryTransferRequestsRequestBuilder extends RequestBuilder<InventoryTransferRequests> {
  /**
   * Returns a request builder for retrieving one `InventoryTransferRequests` entity based on its keys.
   * @param docEntry Key property. See [[InventoryTransferRequests.docEntry]].
   * @returns A request builder for creating requests to retrieve one `InventoryTransferRequests` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilderV4<InventoryTransferRequests> {
    return new GetByKeyRequestBuilderV4(InventoryTransferRequests, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `InventoryTransferRequests` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTransferRequests` entities.
   */
  getAll(): GetAllRequestBuilderV4<InventoryTransferRequests> {
    return new GetAllRequestBuilderV4(InventoryTransferRequests);
  }

  /**
   * Returns a request builder for creating a `InventoryTransferRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTransferRequests`.
   */
  create(entity: InventoryTransferRequests): CreateRequestBuilderV4<InventoryTransferRequests> {
    return new CreateRequestBuilderV4(InventoryTransferRequests, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTransferRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTransferRequests`.
   */
  update(entity: InventoryTransferRequests): UpdateRequestBuilderV4<InventoryTransferRequests> {
    return new UpdateRequestBuilderV4(InventoryTransferRequests, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
   * @param docEntry Key property. See [[InventoryTransferRequests.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests`.
   */
  delete(docEntry: number): DeleteRequestBuilderV4<InventoryTransferRequests>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferRequests` by taking the entity as a parameter.
   */
  delete(entity: InventoryTransferRequests): DeleteRequestBuilderV4<InventoryTransferRequests>;
  delete(docEntryOrEntity: any): DeleteRequestBuilderV4<InventoryTransferRequests> {
    return new DeleteRequestBuilderV4(InventoryTransferRequests, docEntryOrEntity instanceof InventoryTransferRequests ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}
