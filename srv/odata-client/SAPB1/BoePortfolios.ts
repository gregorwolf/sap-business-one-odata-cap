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
import type { BoePortfoliosApi } from './BoePortfoliosApi';

/**
 * This class represents the entity "BOEPortfolios" of service "SAPB1".
 */
export class BoePortfolios<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BoePortfoliosType<T>
{
  /**
   * Technical entity name for BoePortfolios.
   */
  static _entityName = 'BOEPortfolios';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BoePortfolios entity
   */
  static _keys = ['PortfolioEntry'];
  /**
   * Portfolio Entry.
   */
  portfolioEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Portfolio Id.
   * @nullable
   */
  portfolioId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Portfolio Code.
   * @nullable
   */
  portfolioCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Portfolio Num.
   * @nullable
   */
  portfolioNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Portfolio Description.
   * @nullable
   */
  portfolioDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BoePortfoliosApi<T>) {
    super(_entityApi);
  }
}

export interface BoePortfoliosType<
  T extends DeSerializers = DefaultDeSerializers
> {
  portfolioEntry: DeserializedType<T, 'Edm.Int32'>;
  portfolioId?: DeserializedType<T, 'Edm.String'> | null;
  portfolioCode?: DeserializedType<T, 'Edm.String'> | null;
  portfolioNum?: DeserializedType<T, 'Edm.String'> | null;
  portfolioDescription?: DeserializedType<T, 'Edm.String'> | null;
}
