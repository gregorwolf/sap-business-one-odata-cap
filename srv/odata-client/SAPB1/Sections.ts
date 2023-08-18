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
import type { SectionsApi } from './SectionsApi';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';

/**
 * This class represents the entity "Sections" of service "SAPB1".
 */
export class Sections<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SectionsType<T>
{
  /**
   * Technical entity name for Sections.
   */
  static _entityName = 'Sections';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Sections entity
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
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Code.
   * @nullable
   */
  eCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link CertificateSeries} entity.
   */
  certificateSeries!: CertificateSeries<T>[];

  constructor(readonly _entityApi: SectionsApi<T>) {
    super(_entityApi);
  }
}

export interface SectionsType<T extends DeSerializers = DefaultDeSerializers> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  eCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  certificateSeries: CertificateSeriesType<T>[];
}
