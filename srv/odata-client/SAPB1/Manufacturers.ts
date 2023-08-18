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
import type { ManufacturersApi } from './ManufacturersApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "Manufacturers" of service "SAPB1".
 */
export class Manufacturers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ManufacturersType<T>
{
  /**
   * Technical entity name for Manufacturers.
   */
  static _entityName = 'Manufacturers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Manufacturers entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Manufacturer Name.
   * @nullable
   */
  manufacturerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: ManufacturersApi<T>) {
    super(_entityApi);
  }
}

export interface ManufacturersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  manufacturerName?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
