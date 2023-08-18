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
import type { U_BbfldsApi } from './U_BbfldsApi';

/**
 * This class represents the entity "U_BBFLDS" of service "SAPB1".
 */
export class U_Bbflds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BbfldsType<T>
{
  /**
   * Technical entity name for U_Bbflds.
   */
  static _entityName = 'U_BBFLDS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bbflds entity
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
   * U Flag.
   * @nullable
   */
  uFlag?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fld Type.
   * @nullable
   */
  uFldType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BbfldsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BbfldsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBcCode?: DeserializedType<T, 'Edm.String'> | null;
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  uFldName?: DeserializedType<T, 'Edm.String'> | null;
  uFlag?: DeserializedType<T, 'Edm.String'> | null;
  uFldType?: DeserializedType<T, 'Edm.String'> | null;
}
