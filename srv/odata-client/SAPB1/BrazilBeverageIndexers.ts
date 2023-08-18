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
import type { BrazilBeverageIndexersApi } from './BrazilBeverageIndexersApi';
import {
  BrazilStringIndexers,
  BrazilStringIndexersType
} from './BrazilStringIndexers';
import {
  BrazilNumericIndexers,
  BrazilNumericIndexersType
} from './BrazilNumericIndexers';

/**
 * This class represents the entity "BrazilBeverageIndexers" of service "SAPB1".
 */
export class BrazilBeverageIndexers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BrazilBeverageIndexersType<T>
{
  /**
   * Technical entity name for BrazilBeverageIndexers.
   */
  static _entityName = 'BrazilBeverageIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BrazilBeverageIndexers entity
   */
  static _keys = ['BeverageID'];
  /**
   * Beverage Group Code.
   * @nullable
   */
  beverageGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beverage Table Code.
   * @nullable
   */
  beverageTableCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beverage Commercial Brand Code.
   * @nullable
   */
  beverageCommercialBrandCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Beverage Id.
   */
  beverageId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BrazilStringIndexers} entity.
   */
  brazilStringIndexer?: BrazilStringIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilNumericIndexers} entity.
   */
  brazilNumericIndexer?: BrazilNumericIndexers<T> | null;

  constructor(readonly _entityApi: BrazilBeverageIndexersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilBeverageIndexersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  beverageGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  beverageTableCode?: DeserializedType<T, 'Edm.String'> | null;
  beverageCommercialBrandCode?: DeserializedType<T, 'Edm.Int32'> | null;
  beverageId: DeserializedType<T, 'Edm.Int32'>;
  brazilStringIndexer?: BrazilStringIndexersType<T> | null;
  brazilNumericIndexer?: BrazilNumericIndexersType<T> | null;
}
