/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryOpeningBalances } from './InventoryOpeningBalances';

/**
 * Request builder class for operations supported on the [[InventoryOpeningBalances]] entity.
 */
export class InventoryOpeningBalancesRequestBuilder extends RequestBuilder<InventoryOpeningBalances> {
  /**
   * Returns a request builder for retrieving one `InventoryOpeningBalances` entity based on its keys.
   * @param documentEntry Key property. See [[InventoryOpeningBalances.documentEntry]].
   * @returns A request builder for creating requests to retrieve one `InventoryOpeningBalances` entity based on its keys.
   */
  getByKey(documentEntry: number): GetByKeyRequestBuilderV4<InventoryOpeningBalances> {
    return new GetByKeyRequestBuilderV4(InventoryOpeningBalances, { DocumentEntry: documentEntry });
  }

  /**
   * Returns a request builder for querying all `InventoryOpeningBalances` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOpeningBalances` entities.
   */
  getAll(): GetAllRequestBuilderV4<InventoryOpeningBalances> {
    return new GetAllRequestBuilderV4(InventoryOpeningBalances);
  }

  /**
   * Returns a request builder for creating a `InventoryOpeningBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOpeningBalances`.
   */
  create(entity: InventoryOpeningBalances): CreateRequestBuilderV4<InventoryOpeningBalances> {
    return new CreateRequestBuilderV4(InventoryOpeningBalances, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOpeningBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOpeningBalances`.
   */
  update(entity: InventoryOpeningBalances): UpdateRequestBuilderV4<InventoryOpeningBalances> {
    return new UpdateRequestBuilderV4(InventoryOpeningBalances, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
   * @param documentEntry Key property. See [[InventoryOpeningBalances.documentEntry]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances`.
   */
  delete(documentEntry: number): DeleteRequestBuilderV4<InventoryOpeningBalances>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOpeningBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOpeningBalances` by taking the entity as a parameter.
   */
  delete(entity: InventoryOpeningBalances): DeleteRequestBuilderV4<InventoryOpeningBalances>;
  delete(documentEntryOrEntity: any): DeleteRequestBuilderV4<InventoryOpeningBalances> {
    return new DeleteRequestBuilderV4(InventoryOpeningBalances, documentEntryOrEntity instanceof InventoryOpeningBalances ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity! });
  }
}
