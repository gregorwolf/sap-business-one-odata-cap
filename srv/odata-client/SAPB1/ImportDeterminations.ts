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
import type { ImportDeterminationsApi } from './ImportDeterminationsApi';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ImportFieldTypeEnum } from './ImportFieldTypeEnum';
import {
  ElectronicFileFormats,
  ElectronicFileFormatsType
} from './ElectronicFileFormats';

/**
 * This class represents the entity "ImportDeterminations" of service "SAPB1".
 */
export class ImportDeterminations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImportDeterminationsType<T>
{
  /**
   * Technical entity name for ImportDeterminations.
   */
  static _entityName = 'ImportDeterminations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ImportDeterminations entity
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
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Type X Path.
   * @nullable
   */
  objectTypeXPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Type.
   * @nullable
   */
  fieldType?: ImportFieldTypeEnum | null;
  /**
   * Field Type X Path.
   * @nullable
   */
  fieldTypeXPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Format.
   * @nullable
   */
  importFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Digital Series.
   * @nullable
   */
  defaultDigitalSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Version Number.
   * @nullable
   */
  versionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link ElectronicFileFormats} entity.
   */
  electronicFileFormat?: ElectronicFileFormats<T> | null;

  constructor(readonly _entityApi: ImportDeterminationsApi<T>) {
    super(_entityApi);
  }
}

export interface ImportDeterminationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: ElectronicDocProtocolCodeStrEnum | null;
  lineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  objectTypeXPath?: DeserializedType<T, 'Edm.String'> | null;
  fieldType?: ImportFieldTypeEnum | null;
  fieldTypeXPath?: DeserializedType<T, 'Edm.String'> | null;
  importFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultDigitalSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  versionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  electronicFileFormat?: ElectronicFileFormatsType<T> | null;
}
