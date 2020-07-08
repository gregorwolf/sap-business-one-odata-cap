/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(documentEntry: number): GetByKeyRequestBuilder<InventoryCountings> {
    return new GetByKeyRequestBuilder(InventoryCountings, { DocumentEntry: documentEntry });
  }

  /**
   * Returns a request builder for querying all `InventoryCountings` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountings` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountings> {
    return new GetAllRequestBuilder(InventoryCountings);
  }

  /**
   * Returns a request builder for creating a `InventoryCountings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountings`.
   */
  create(entity: InventoryCountings): CreateRequestBuilder<InventoryCountings> {
    return new CreateRequestBuilder(InventoryCountings, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountings`.
   */
  update(entity: InventoryCountings): UpdateRequestBuilder<InventoryCountings> {
    return new UpdateRequestBuilder(InventoryCountings, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings`.
   */
  delete(documentEntry: number): DeleteRequestBuilder<InventoryCountings>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountings` by taking the entity as a parameter.
   */
  delete(entity: InventoryCountings): DeleteRequestBuilder<InventoryCountings>;
  delete(documentEntryOrEntity: any): DeleteRequestBuilder<InventoryCountings> {
    return new DeleteRequestBuilder(InventoryCountings, documentEntryOrEntity instanceof InventoryCountings ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity! });
  }
}
