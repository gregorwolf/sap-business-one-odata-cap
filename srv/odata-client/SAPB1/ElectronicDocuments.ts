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
import type { ElectronicDocumentsApi } from './ElectronicDocumentsApi';
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "ElectronicDocuments" of service "SAPB1".
 */
export class ElectronicDocuments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ElectronicDocumentsType<T>
{
  /**
   * Technical entity name for ElectronicDocuments.
   */
  static _entityName = 'ElectronicDocuments';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicDocuments entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: ElectronicDocProtocolCodeStrEnum;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;

  constructor(readonly _entityApi: ElectronicDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: ElectronicDocProtocolCodeStrEnum;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: BoYesNoEnum | null;
}
