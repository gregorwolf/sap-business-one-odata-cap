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
import type { U_Bostp1Api } from './U_Bostp1Api';

/**
 * This class represents the entity "U_BOSTP1" of service "SAPB1".
 */
export class U_Bostp1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bostp1Type<T>
{
  /**
   * Technical entity name for U_Bostp1.
   */
  static _entityName = 'U_BOSTP1';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bostp1 entity
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
   * U Sequence.
   * @nullable
   */
  uSequence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Tpl Code.
   * @nullable
   */
  uTplCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Query Id.
   * @nullable
   */
  uQueryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Num Rec.
   * @nullable
   */
  uNumRec?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Read Last.
   * @nullable
   */
  uReadLast?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rg Data.
   * @nullable
   */
  uRgData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Q Cat Id.
   * @nullable
   */
  uQCatId?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Bostp1Api<T>) {
    super(_entityApi);
  }
}

export interface U_Bostp1Type<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSequence?: DeserializedType<T, 'Edm.Int32'> | null;
  uTplCode?: DeserializedType<T, 'Edm.String'> | null;
  uQueryId?: DeserializedType<T, 'Edm.Int32'> | null;
  uNumRec?: DeserializedType<T, 'Edm.Int32'> | null;
  uReadLast?: DeserializedType<T, 'Edm.String'> | null;
  uRgData?: DeserializedType<T, 'Edm.String'> | null;
  uQCatId?: DeserializedType<T, 'Edm.Int32'> | null;
}
