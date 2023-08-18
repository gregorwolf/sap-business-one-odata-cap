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
import type { BrazilNumericIndexersApi } from './BrazilNumericIndexersApi';
import { BrazilNumericIndexerTypes } from './BrazilNumericIndexerTypes';
import {
  BrazilBeverageIndexers,
  BrazilBeverageIndexersType
} from './BrazilBeverageIndexers';
import { Items, ItemsType } from './Items';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "BrazilNumericIndexers" of service "SAPB1".
 */
export class BrazilNumericIndexers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BrazilNumericIndexersType<T>
{
  /**
   * Technical entity name for BrazilNumericIndexers.
   */
  static _entityName = 'BrazilNumericIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BrazilNumericIndexers entity
   */
  static _keys = ['ID'];
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilNumericIndexerTypes | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link BrazilBeverageIndexers} entity.
   */
  brazilBeverageIndexers!: BrazilBeverageIndexers<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];

  constructor(readonly _entityApi: BrazilNumericIndexersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilNumericIndexersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  indexerType?: BrazilNumericIndexerTypes | null;
  code?: DeserializedType<T, 'Edm.Int32'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
  brazilBeverageIndexers: BrazilBeverageIndexersType<T>[];
  items: ItemsType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
}
