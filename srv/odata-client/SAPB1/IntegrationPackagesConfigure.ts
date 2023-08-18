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
import type { IntegrationPackagesConfigureApi } from './IntegrationPackagesConfigureApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "IntegrationPackagesConfigure" of service "SAPB1".
 */
export class IntegrationPackagesConfigure<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationPackagesConfigureType<T>
{
  /**
   * Technical entity name for IntegrationPackagesConfigure.
   */
  static _entityName = 'IntegrationPackagesConfigure';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationPackagesConfigure entity
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
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Enable.
   * @nullable
   */
  isEnable?: BoYesNoEnum | null;

  constructor(readonly _entityApi: IntegrationPackagesConfigureApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationPackagesConfigureType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isEnable?: BoYesNoEnum | null;
}
