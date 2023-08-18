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
import type { U_BbvalsApi } from './U_BbvalsApi';

/**
 * This class represents the entity "U_BBVALS" of service "SAPB1".
 */
export class U_Bbvals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BbvalsType<T>
{
  /**
   * Technical entity name for U_Bbvals.
   */
  static _entityName = 'U_BBVALS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bbvals entity
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
   * U Bc Code.
   * @nullable
   */
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Languag.
   * @nullable
   */
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Tbl Name.
   * @nullable
   */
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fld Name.
   * @nullable
   */
  uFldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rec Id.
   * @nullable
   */
  uRecId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Value.
   * @nullable
   */
  uValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BbvalsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BbvalsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  uLanguag?: DeserializedType<T, 'Edm.Int32'> | null;
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  uFldName?: DeserializedType<T, 'Edm.String'> | null;
  uRecId?: DeserializedType<T, 'Edm.Int32'> | null;
  uValue?: DeserializedType<T, 'Edm.String'> | null;
}
