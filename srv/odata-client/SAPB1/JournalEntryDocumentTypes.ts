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
import type { JournalEntryDocumentTypesApi } from './JournalEntryDocumentTypesApi';
import { JournalEntries, JournalEntriesType } from './JournalEntries';

/**
 * This class represents the entity "JournalEntryDocumentTypes" of service "SAPB1".
 */
export class JournalEntryDocumentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JournalEntryDocumentTypesType<T>
{
  /**
   * Technical entity name for JournalEntryDocumentTypes.
   */
  static _entityName = 'JournalEntryDocumentTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the JournalEntryDocumentTypes entity
   */
  static _keys = ['JournalEntryType'];
  /**
   * Journal Entry Type.
   */
  journalEntryType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Doc Type Description.
   * @nullable
   */
  docTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];

  constructor(readonly _entityApi: JournalEntryDocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalEntryDocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  journalEntryType: DeserializedType<T, 'Edm.String'>;
  docTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  journalEntries: JournalEntriesType<T>[];
}
