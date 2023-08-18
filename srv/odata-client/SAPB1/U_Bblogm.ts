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
import type { U_BblogmApi } from './U_BblogmApi';

/**
 * This class represents the entity "U_BBLOGM" of service "SAPB1".
 */
export class U_Bblogm<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BblogmType<T>
{
  /**
   * Technical entity name for U_Bblogm.
   */
  static _entityName = 'U_BBLOGM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bblogm entity
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
   * U Log Id.
   * @nullable
   */
  uLogId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Line Num.
   * @nullable
   */
  uLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Msg Txt.
   * @nullable
   */
  uMsgTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Msg Type.
   * @nullable
   */
  uMsgType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BblogmApi<T>) {
    super(_entityApi);
  }
}

export interface U_BblogmType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLogId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uMsgTxt?: DeserializedType<T, 'Edm.String'> | null;
  uMsgType?: DeserializedType<T, 'Edm.String'> | null;
}
