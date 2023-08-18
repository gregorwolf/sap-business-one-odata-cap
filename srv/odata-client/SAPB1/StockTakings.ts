/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { StockTakingsApi } from './StockTakingsApi';
import { Items, ItemsType } from './Items';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "StockTakings" of service "SAPB1".
 */
export class StockTakings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StockTakingsType<T>
{
  /**
   * Technical entity name for StockTakings.
   */
  static _entityName = 'StockTakings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the StockTakings entity
   */
  static _keys = ['ItemCode', 'WarehouseCode'];
  /**
   * Item Code.
   */
  itemCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Code.
   */
  warehouseCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Counted.
   * @nullable
   */
  counted?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Zentrallager.
   */
  uZentrallager!: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse?: Warehouses<T> | null;

  constructor(readonly _entityApi: StockTakingsApi<T>) {
    super(_entityApi);
  }
}

export interface StockTakingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemCode: DeserializedType<T, 'Edm.String'>;
  warehouseCode: DeserializedType<T, 'Edm.String'>;
  counted?: DeserializedType<T, 'Edm.Double'> | null;
  uZentrallager: DeserializedType<T, 'Edm.String'>;
  item?: ItemsType<T> | null;
  warehouse?: WarehousesType<T> | null;
}
