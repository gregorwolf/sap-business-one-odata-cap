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
import type { U_Ba_CnumApi } from './U_Ba_CnumApi';

/**
 * This class represents the entity "U_BA_CNUM" of service "SAPB1".
 */
export class U_Ba_Cnum<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CnumType<T>
{
  /**
   * Technical entity name for U_Ba_Cnum.
   */
  static _entityName = 'U_BA_CNUM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cnum entity
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
   * U Key.
   * @nullable
   */
  uKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Id.
   * @nullable
   */
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Name.
   * @nullable
   */
  uName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U First.
   * @nullable
   */
  uFirst?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Last.
   * @nullable
   */
  uLast?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Next.
   * @nullable
   */
  uNext?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Prefix.
   * @nullable
   */
  uPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Suffix.
   * @nullable
   */
  uSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Read Only.
   * @nullable
   */
  uReadOnly?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_CnumApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CnumType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uKey?: DeserializedType<T, 'Edm.Int32'> | null;
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  uName?: DeserializedType<T, 'Edm.String'> | null;
  uFirst?: DeserializedType<T, 'Edm.Int32'> | null;
  uLast?: DeserializedType<T, 'Edm.Int32'> | null;
  uNext?: DeserializedType<T, 'Edm.Int32'> | null;
  uPrefix?: DeserializedType<T, 'Edm.String'> | null;
  uSuffix?: DeserializedType<T, 'Edm.String'> | null;
  uReadOnly?: DeserializedType<T, 'Edm.String'> | null;
}
