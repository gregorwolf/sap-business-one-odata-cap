/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Warehouses } from './Warehouses';

/**
 * Request builder class for operations supported on the [[Warehouses]] entity.
 */
export class WarehousesRequestBuilder extends RequestBuilder<Warehouses> {
  /**
   * Returns a request builder for retrieving one `Warehouses` entity based on its keys.
   * @param warehouseCode Key property. See [[Warehouses.warehouseCode]].
   * @returns A request builder for creating requests to retrieve one `Warehouses` entity based on its keys.
   */
  getByKey(warehouseCode: string): GetByKeyRequestBuilderV4<Warehouses> {
    return new GetByKeyRequestBuilderV4(Warehouses, { WarehouseCode: warehouseCode });
  }

  /**
   * Returns a request builder for querying all `Warehouses` entities.
   * @returns A request builder for creating requests to retrieve all `Warehouses` entities.
   */
  getAll(): GetAllRequestBuilderV4<Warehouses> {
    return new GetAllRequestBuilderV4(Warehouses);
  }

  /**
   * Returns a request builder for creating a `Warehouses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Warehouses`.
   */
  create(entity: Warehouses): CreateRequestBuilderV4<Warehouses> {
    return new CreateRequestBuilderV4(Warehouses, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Warehouses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Warehouses`.
   */
  update(entity: Warehouses): UpdateRequestBuilderV4<Warehouses> {
    return new UpdateRequestBuilderV4(Warehouses, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Warehouses`.
   * @param warehouseCode Key property. See [[Warehouses.warehouseCode]].
   * @returns A request builder for creating requests that delete an entity of type `Warehouses`.
   */
  delete(warehouseCode: string): DeleteRequestBuilderV4<Warehouses>;
  /**
   * Returns a request builder for deleting an entity of type `Warehouses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Warehouses` by taking the entity as a parameter.
   */
  delete(entity: Warehouses): DeleteRequestBuilderV4<Warehouses>;
  delete(warehouseCodeOrEntity: any): DeleteRequestBuilderV4<Warehouses> {
    return new DeleteRequestBuilderV4(Warehouses, warehouseCodeOrEntity instanceof Warehouses ? warehouseCodeOrEntity : { WarehouseCode: warehouseCodeOrEntity! });
  }
}
