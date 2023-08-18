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
import type { U_Bd_CtaxApi } from './U_Bd_CtaxApi';

/**
 * This class represents the entity "U_BD_CTAX" of service "SAPB1".
 */
export class U_Bd_Ctax<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bd_CtaxType<T>
{
  /**
   * Technical entity name for U_Bd_Ctax.
   */
  static _entityName = 'U_BD_CTAX';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bd_Ctax entity
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
   * U T Code.
   * @nullable
   */
  uTCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dt Code.
   * @nullable
   */
  uDtCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bd_CtaxApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bd_CtaxType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uTCode?: DeserializedType<T, 'Edm.String'> | null;
  uDtCode?: DeserializedType<T, 'Edm.String'> | null;
}
