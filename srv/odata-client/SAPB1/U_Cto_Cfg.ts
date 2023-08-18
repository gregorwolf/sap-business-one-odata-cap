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
import type { U_Cto_CfgApi } from './U_Cto_CfgApi';

/**
 * This class represents the entity "U_CTO_CFG" of service "SAPB1".
 */
export class U_Cto_Cfg<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Cto_CfgType<T>
{
  /**
   * Technical entity name for U_Cto_Cfg.
   */
  static _entityName = 'U_CTO_CFG';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Cto_Cfg entity
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
   * U Section.
   * @nullable
   */
  uSection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Key.
   * @nullable
   */
  uKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Value.
   * @nullable
   */
  uValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Cto_CfgApi<T>) {
    super(_entityApi);
  }
}

export interface U_Cto_CfgType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSection?: DeserializedType<T, 'Edm.String'> | null;
  uKey?: DeserializedType<T, 'Edm.String'> | null;
  uValue?: DeserializedType<T, 'Edm.String'> | null;
}
