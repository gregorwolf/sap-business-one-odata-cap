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
import type { BrazilStringIndexersApi } from './BrazilStringIndexersApi';
import { BrazilStringIndexerTypes } from './BrazilStringIndexerTypes';
import {
  BrazilBeverageIndexers,
  BrazilBeverageIndexersType
} from './BrazilBeverageIndexers';
import { Items, ItemsType } from './Items';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "BrazilStringIndexers" of service "SAPB1".
 */
export class BrazilStringIndexers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BrazilStringIndexersType<T>
{
  /**
   * Technical entity name for BrazilStringIndexers.
   */
  static _entityName = 'BrazilStringIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BrazilStringIndexers entity
   */
  static _keys = ['ID'];
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilStringIndexerTypes | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];

  constructor(readonly _entityApi: BrazilStringIndexersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilStringIndexersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  indexerType?: BrazilStringIndexerTypes | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
  brazilBeverageIndexers: BrazilBeverageIndexersType<T>[];
  items: ItemsType<T>[];
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
}
