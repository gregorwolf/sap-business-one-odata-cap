/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { InventoryGenExits } from './InventoryGenExits';

/**
 * Request builder class for operations supported on the [[InventoryGenExits]] entity.
 */
export class InventoryGenExitsRequestBuilder extends RequestBuilder<InventoryGenExits> {
  /**
   * Returns a request builder for retrieving one `InventoryGenExits` entity based on its keys.
   * @param docEntry Key property. See [[InventoryGenExits.docEntry]].
   * @returns A request builder for creating requests to retrieve one `InventoryGenExits` entity based on its keys.
   */
  getByKey(docEntry: number): GetByKeyRequestBuilder<InventoryGenExits> {
    return new GetByKeyRequestBuilder(InventoryGenExits, { DocEntry: docEntry });
  }

  /**
   * Returns a request builder for querying all `InventoryGenExits` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryGenExits` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryGenExits> {
    return new GetAllRequestBuilder(InventoryGenExits);
  }

  /**
   * Returns a request builder for creating a `InventoryGenExits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryGenExits`.
   */
  create(entity: InventoryGenExits): CreateRequestBuilder<InventoryGenExits> {
    return new CreateRequestBuilder(InventoryGenExits, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryGenExits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryGenExits`.
   */
  update(entity: InventoryGenExits): UpdateRequestBuilder<InventoryGenExits> {
    return new UpdateRequestBuilder(InventoryGenExits, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryGenExits`.
   * @param docEntry Key property. See [[InventoryGenExits.docEntry]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits`.
   */
  delete(docEntry: number): DeleteRequestBuilder<InventoryGenExits>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryGenExits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryGenExits` by taking the entity as a parameter.
   */
  delete(entity: InventoryGenExits): DeleteRequestBuilder<InventoryGenExits>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<InventoryGenExits> {
    return new DeleteRequestBuilder(InventoryGenExits, docEntryOrEntity instanceof InventoryGenExits ? docEntryOrEntity : { DocEntry: docEntryOrEntity! });
  }
}