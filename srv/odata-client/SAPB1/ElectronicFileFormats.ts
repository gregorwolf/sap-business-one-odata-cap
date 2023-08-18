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
import type { ElectronicFileFormatsApi } from './ElectronicFileFormatsApi';
import {
  ImportDeterminations,
  ImportDeterminationsType
} from './ImportDeterminations';
import {
  ExportDeterminations,
  ExportDeterminationsType
} from './ExportDeterminations';

/**
 * This class represents the entity "ElectronicFileFormats" of service "SAPB1".
 */
export class ElectronicFileFormats<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicFileFormatsType<T>
{
  /**
   * Technical entity name for ElectronicFileFormats.
   */
  static _entityName = 'ElectronicFileFormats';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicFileFormats entity
   */
  static _keys = ['FormatID'];
  /**
   * Format Id.
   */
  formatId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schema Version.
   * @nullable
   */
  schemaVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Output File Path.
   * @nullable
   */
  outputFilePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Name.
   * @nullable
   */
  menuName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Path.
   * @nullable
   */
  menuPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ImportDeterminations} entity.
   */
  importDeterminations!: ImportDeterminations<T>[];
  /**
   * One-to-many navigation property to the {@link ExportDeterminations} entity.
   */
  exportDeterminations!: ExportDeterminations<T>[];

  constructor(readonly _entityApi: ElectronicFileFormatsApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicFileFormatsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formatId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  schemaVersion?: DeserializedType<T, 'Edm.String'> | null;
  outputFilePath?: DeserializedType<T, 'Edm.String'> | null;
  menuName?: DeserializedType<T, 'Edm.String'> | null;
  menuPath?: DeserializedType<T, 'Edm.String'> | null;
  importDeterminations: ImportDeterminationsType<T>[];
  exportDeterminations: ExportDeterminationsType<T>[];
}
