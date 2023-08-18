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
import type { U_Bd_CsetApi } from './U_Bd_CsetApi';

/**
 * This class represents the entity "U_BD_CSET" of service "SAPB1".
 */
export class U_Bd_Cset<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bd_CsetType<T>
{
  /**
   * Technical entity name for U_Bd_Cset.
   */
  static _entityName = 'U_BD_CSET';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bd_Cset entity
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
   * U Name.
   * @nullable
   */
  uName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Val.
   * @nullable
   */
  uVal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Typ.
   * @nullable
   */
  uTyp?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Bd_CsetApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bd_CsetType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uName?: DeserializedType<T, 'Edm.String'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  uVal?: DeserializedType<T, 'Edm.String'> | null;
  uTyp?: DeserializedType<T, 'Edm.Int32'> | null;
}
