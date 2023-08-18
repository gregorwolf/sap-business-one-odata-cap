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
import type { U_BoostpApi } from './U_BoostpApi';

/**
 * This class represents the entity "U_BOOSTP" of service "SAPB1".
 */
export class U_Boostp<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BoostpType<T>
{
  /**
   * Technical entity name for U_Boostp.
   */
  static _entityName = 'U_BOOSTP';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Boostp entity
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
   * U Tpl Name.
   * @nullable
   */
  uTplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Language.
   * @nullable
   */
  uLanguage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Cp Data.
   * @nullable
   */
  uCpData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cat Id.
   * @nullable
   */
  uCatId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U L File Xls.
   * @nullable
   */
  uLFileXls?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L File Txt.
   * @nullable
   */
  uLFileTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt User.
   * @nullable
   */
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt Time.
   * @nullable
   */
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Chg User.
   * @nullable
   */
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Chg Time.
   * @nullable
   */
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Default.
   * @nullable
   */
  uDefault?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Version.
   * @nullable
   */
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Host.
   * @nullable
   */
  uHost?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BoostpApi<T>) {
    super(_entityApi);
  }
}

export interface U_BoostpType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uTplName?: DeserializedType<T, 'Edm.String'> | null;
  uLanguage?: DeserializedType<T, 'Edm.Int32'> | null;
  uCpData?: DeserializedType<T, 'Edm.String'> | null;
  uCatId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLFileXls?: DeserializedType<T, 'Edm.String'> | null;
  uLFileTxt?: DeserializedType<T, 'Edm.String'> | null;
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uDefault?: DeserializedType<T, 'Edm.String'> | null;
  uVersion?: DeserializedType<T, 'Edm.String'> | null;
  uHost?: DeserializedType<T, 'Edm.String'> | null;
}
