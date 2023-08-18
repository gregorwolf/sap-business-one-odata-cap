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
import { SeriesLine } from './SeriesLine';
import type { CertificateSeriesApi } from './CertificateSeriesApi';
import { Sections, SectionsType } from './Sections';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';

/**
 * This class represents the entity "CertificateSeries" of service "SAPB1".
 */
export class CertificateSeries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CertificateSeriesType<T>
{
  /**
   * Technical entity name for CertificateSeries.
   */
  static _entityName = 'CertificateSeries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CertificateSeries entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section.
   * @nullable
   */
  section?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Series.
   * @nullable
   */
  defaultSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series Lines.
   * @nullable
   */
  seriesLines?: SeriesLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Sections} entity.
   */
  section2?: Sections<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;

  constructor(readonly _entityApi: CertificateSeriesApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateSeriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  section?: DeserializedType<T, 'Edm.Int32'> | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  seriesLines?: SeriesLine<T>[] | null;
  section2?: SectionsType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
}
