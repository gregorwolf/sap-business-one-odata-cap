/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryCountings } from './InventoryCountings';

/**
 * Request builder class for operations supported on the [[InventoryCountings]] entity.
 */
export class InventoryCountingsRequestBuilder extends RequestBuilder<InventoryCountings> {
  /**
   * Returns a request builder for retrieving one `InventoryCountings` entity based on its keys.
   * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
   * @returns A request builder for creating requests to retrieve one `InventoryCountings` entity based on its keys.
   */
  getByKey(documentEntry: number): GetByKeyRequestBuilderV4<InventoryCountings> {
    return new GetByKeyRequestBuilderV4(InventoryCountings, { DocumentEntry: documentEntry });
  }

  /**
   * Returns a request builder for querying all `InventoryCountings` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountings` entities.
   */
  getAll(): GetAllRequestBuilderV4<InventoryCountings> {
    return new GetAllRequestBuilderV4(InventoryCountings);
  }

  /**
   * Returns a request builder for creating a `InventoryCountings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountings`.
   */
  create(entity: InventoryCountings): CreateRequestBuilderV4<InventoryCountings> {
    return new CreateRequestBuilderV4(InventoryCountings, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountings`.
   */
  update(entity: InventoryCountings): UpdateRequestBuilderV4<InventoryCountings> {
    return new UpdateRequestBuilderV4(InventoryCountings, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings`.
   */
  delete(documentEntry: number): DeleteRequestBuilderV4<InventoryCountings>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings` by taking the entity as a parameter.
   */
  delete(entity: InventoryCountings): DeleteRequestBuilderV4<InventoryCountings>;
  delete(documentEntryOrEntity: any): DeleteRequestBuilderV4<InventoryCountings> {
    return new DeleteRequestBuilderV4(InventoryCountings, documentEntryOrEntity instanceof InventoryCountings ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity! });
  }
}
