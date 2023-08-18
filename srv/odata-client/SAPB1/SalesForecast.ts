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
import { SalesForecastLine } from './SalesForecastLine';
import type { SalesForecastApi } from './SalesForecastApi';
import { BoForecastViewType } from './BoForecastViewType';

/**
 * This class represents the entity "SalesForecast" of service "SAPB1".
 */
export class SalesForecast<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesForecastType<T>
{
  /**
   * Technical entity name for SalesForecast.
   */
  static _entityName = 'SalesForecast';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesForecast entity
   */
  static _keys = ['Numerator'];
  /**
   * Forecast Start Date.
   * @nullable
   */
  forecastStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Forecast End Date.
   * @nullable
   */
  forecastEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Forecast Code.
   * @nullable
   */
  forecastCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Name.
   * @nullable
   */
  forecastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * View.
   * @nullable
   */
  view?: BoForecastViewType | null;
  /**
   * Sales Forecast Lines.
   * @nullable
   */
  salesForecastLines?: SalesForecastLine<T>[] | null;

  constructor(readonly _entityApi: SalesForecastApi<T>) {
    super(_entityApi);
  }
}

export interface SalesForecastType<
  T extends DeSerializers = DefaultDeSerializers
> {
  forecastStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  forecastEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  forecastCode?: DeserializedType<T, 'Edm.String'> | null;
  forecastName?: DeserializedType<T, 'Edm.String'> | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  view?: BoForecastViewType | null;
  salesForecastLines?: SalesForecastLine<T>[] | null;
}
