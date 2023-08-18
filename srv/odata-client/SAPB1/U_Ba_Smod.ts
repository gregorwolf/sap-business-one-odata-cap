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
import type { U_Ba_SmodApi } from './U_Ba_SmodApi';

/**
 * This class represents the entity "U_BA_SMOD" of service "SAPB1".
 */
export class U_Ba_Smod<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_SmodType<T>
{
  /**
   * Technical entity name for U_Ba_Smod.
   */
  static _entityName = 'U_BA_SMOD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Smod entity
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
   * U Sys Init.
   * @nullable
   */
  uSysInit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Sys Mode.
   * @nullable
   */
  uSysMode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Depr Calc.
   */
  uDeprCalc!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Thres Val.
   */
  uThresVal!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: U_Ba_SmodApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_SmodType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSysInit?: DeserializedType<T, 'Edm.Int32'> | null;
  uSysMode?: DeserializedType<T, 'Edm.Int32'> | null;
  uDeprCalc: DeserializedType<T, 'Edm.String'>;
  uThresVal: DeserializedType<T, 'Edm.Int32'>;
}
