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
import type { U_Bd_SerrApi } from './U_Bd_SerrApi';

/**
 * This class represents the entity "U_BD_SERR" of service "SAPB1".
 */
export class U_Bd_Serr<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bd_SerrType<T>
{
  /**
   * Technical entity name for U_Bd_Serr.
   */
  static _entityName = 'U_BD_SERR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bd_Serr entity
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
   * U Line Num.
   * @nullable
   */
  uLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Field.
   * @nullable
   */
  uField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Value.
   * @nullable
   */
  uValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Err.
   * @nullable
   */
  uErr?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bd_SerrApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bd_SerrType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uField?: DeserializedType<T, 'Edm.String'> | null;
  uValue?: DeserializedType<T, 'Edm.String'> | null;
  uErr?: DeserializedType<T, 'Edm.String'> | null;
}
