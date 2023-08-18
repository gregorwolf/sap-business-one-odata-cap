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
import type { U_BncstpApi } from './U_BncstpApi';

/**
 * This class represents the entity "U_BNCSTP" of service "SAPB1".
 */
export class U_Bncstp<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BncstpType<T>
{
  /**
   * Technical entity name for U_Bncstp.
   */
  static _entityName = 'U_BNCSTP';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bncstp entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Export.
   * @nullable
   */
  uExport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Import.
   * @nullable
   */
  uImport?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BncstpApi<T>) {
    super(_entityApi);
  }
}

export interface U_BncstpType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uExport?: DeserializedType<T, 'Edm.String'> | null;
  uImport?: DeserializedType<T, 'Edm.String'> | null;
}
