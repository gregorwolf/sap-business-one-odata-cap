/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { InventoryCycles } from './InventoryCycles';

/**
 * Request builder class for operations supported on the [[InventoryCycles]] entity.
 */
export class InventoryCyclesRequestBuilder extends RequestBuilder<InventoryCycles> {
  /**
   * Returns a request builder for retrieving one `InventoryCycles` entity based on its keys.
   * @param cycleCode Key property. See [[InventoryCycles.cycleCode]].
   * @returns A request builder for creating requests to retrieve one `InventoryCycles` entity based on its keys.
   */
  getByKey(cycleCode: number): GetByKeyRequestBuilderV4<InventoryCycles> {
    return new GetByKeyRequestBuilderV4(InventoryCycles, { CycleCode: cycleCode });
  }

  /**
   * Returns a request builder for querying all `InventoryCycles` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCycles` entities.
   */
  getAll(): GetAllRequestBuilderV4<InventoryCycles> {
    return new GetAllRequestBuilderV4(InventoryCycles);
  }

  /**
   * Returns a request builder for creating a `InventoryCycles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCycles`.
   */
  create(entity: InventoryCycles): CreateRequestBuilderV4<InventoryCycles> {
    return new CreateRequestBuilderV4(InventoryCycles, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCycles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCycles`.
   */
  update(entity: InventoryCycles): UpdateRequestBuilderV4<InventoryCycles> {
    return new UpdateRequestBuilderV4(InventoryCycles, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCycles`.
   * @param cycleCode Key property. See [[InventoryCycles.cycleCode]].
   * @returns A request builder for creating requests that delete an entity of type `InventoryCycles`.
   */
  delete(cycleCode: number): DeleteRequestBuilderV4<InventoryCycles>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCycles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCycles` by taking the entity as a parameter.
   */
  delete(entity: InventoryCycles): DeleteRequestBuilderV4<InventoryCycles>;
  delete(cycleCodeOrEntity: any): DeleteRequestBuilderV4<InventoryCycles> {
    return new DeleteRequestBuilderV4(InventoryCycles, cycleCodeOrEntity instanceof InventoryCycles ? cycleCodeOrEntity : { CycleCode: cycleCodeOrEntity! });
  }
}
