/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { StockTakings } from './StockTakings';

/**
 * Request builder class for operations supported on the {@link StockTakings} entity.
 */
export class StockTakingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StockTakings<T>, T> {
  /**
   * Returns a request builder for retrieving one `StockTakings` entity based on its keys.
   * @param itemCode Key property. See {@link StockTakings.itemCode}.
   * @param warehouseCode Key property. See {@link StockTakings.warehouseCode}.
   * @returns A request builder for creating requests to retrieve one `StockTakings` entity based on its keys.
   */
  getByKey(
    itemCode: DeserializedType<T, 'Edm.String'>,
    warehouseCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StockTakings<T>, T> {
    return new GetByKeyRequestBuilder<StockTakings<T>, T>(this.entityApi, {
      ItemCode: itemCode,
      WarehouseCode: warehouseCode
    });
  }

  /**
   * Returns a request builder for querying all `StockTakings` entities.
   * @returns A request builder for creating requests to retrieve all `StockTakings` entities.
   */
  getAll(): GetAllRequestBuilder<StockTakings<T>, T> {
    return new GetAllRequestBuilder<StockTakings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StockTakings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StockTakings`.
   */
  create(entity: StockTakings<T>): CreateRequestBuilder<StockTakings<T>, T> {
    return new CreateRequestBuilder<StockTakings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `StockTakings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StockTakings`.
   */
  update(entity: StockTakings<T>): UpdateRequestBuilder<StockTakings<T>, T> {
    return new UpdateRequestBuilder<StockTakings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `StockTakings`.
   * @param itemCode Key property. See {@link StockTakings.itemCode}.
   * @param warehouseCode Key property. See {@link StockTakings.warehouseCode}.
   * @returns A request builder for creating requests that delete an entity of type `StockTakings`.
   */
  delete(
    itemCode: string,
    warehouseCode: string
  ): DeleteRequestBuilder<StockTakings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StockTakings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StockTakings` by taking the entity as a parameter.
   */
  delete(entity: StockTakings<T>): DeleteRequestBuilder<StockTakings<T>, T>;
  delete(
    itemCodeOrEntity: any,
    warehouseCode?: string
  ): DeleteRequestBuilder<StockTakings<T>, T> {
    return new DeleteRequestBuilder<StockTakings<T>, T>(
      this.entityApi,
      itemCodeOrEntity instanceof StockTakings
        ? itemCodeOrEntity
        : {
            ItemCode: itemCodeOrEntity!,
            WarehouseCode: warehouseCode!
          }
    );
  }
}
