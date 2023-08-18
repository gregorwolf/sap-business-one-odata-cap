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
import type { BoeDocumentTypesApi } from './BoeDocumentTypesApi';

/**
 * This class represents the entity "BOEDocumentTypes" of service "SAPB1".
 */
export class BoeDocumentTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BoeDocumentTypesType<T>
{
  /**
   * Technical entity name for BoeDocumentTypes.
   */
  static _entityName = 'BOEDocumentTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BoeDocumentTypes entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Description.
   * @nullable
   */
  docDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BoeDocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BoeDocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  docType?: DeserializedType<T, 'Edm.String'> | null;
  docDescription?: DeserializedType<T, 'Edm.String'> | null;
}
