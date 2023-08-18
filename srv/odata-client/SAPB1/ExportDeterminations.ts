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
import type { ExportDeterminationsApi } from './ExportDeterminationsApi';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Countries, CountriesType } from './Countries';
import {
  ElectronicFileFormats,
  ElectronicFileFormatsType
} from './ElectronicFileFormats';

/**
 * This class represents the entity "ExportDeterminations" of service "SAPB1".
 */
export class ExportDeterminations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExportDeterminationsType<T>
{
  /**
   * Technical entity name for ExportDeterminations.
   */
  static _entityName = 'ExportDeterminations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ExportDeterminations entity
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
  code?: ElectronicDocProtocolCodeStrEnum | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Business Partner.
   * @nullable
   */
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Format.
   * @nullable
   */
  exportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Path File Name.
   * @nullable
   */
  pathFileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version Number.
   * @nullable
   */
  versionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner2?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ElectronicFileFormats} entity.
   */
  electronicFileFormat?: ElectronicFileFormats<T> | null;

  constructor(readonly _entityApi: ExportDeterminationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExportDeterminationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: ElectronicDocProtocolCodeStrEnum | null;
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  exportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  pathFileName?: DeserializedType<T, 'Edm.String'> | null;
  documentSubType?: DeserializedType<T, 'Edm.String'> | null;
  versionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  businessPartner2?: BusinessPartnersType<T> | null;
  country2?: CountriesType<T> | null;
  electronicFileFormat?: ElectronicFileFormatsType<T> | null;
}
