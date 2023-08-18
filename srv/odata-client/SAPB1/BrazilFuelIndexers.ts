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
import type { BrazilFuelIndexersApi } from './BrazilFuelIndexersApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "BrazilFuelIndexers" of service "SAPB1".
 */
export class BrazilFuelIndexers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BrazilFuelIndexersType<T>
{
  /**
   * Technical entity name for BrazilFuelIndexers.
   */
  static _entityName = 'BrazilFuelIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BrazilFuelIndexers entity
   */
  static _keys = ['FuelID'];
  /**
   * Fuel Id.
   */
  fuelId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fuel Group Code.
   * @nullable
   */
  fuelGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fuel Code.
   * @nullable
   */
  fuelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: BrazilFuelIndexersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilFuelIndexersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fuelId: DeserializedType<T, 'Edm.Int32'>;
  fuelGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  fuelCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
