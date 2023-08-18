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
import type { U_Bblog1Api } from './U_Bblog1Api';

/**
 * This class represents the entity "U_BBLOG1" of service "SAPB1".
 */
export class U_Bblog1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bblog1Type<T>
{
  /**
   * Technical entity name for U_Bblog1.
   */
  static _entityName = 'U_BBLOG1';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bblog1 entity
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
   * U Val Old.
   * @nullable
   */
  uValOld?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Val New.
   * @nullable
   */
  uValNew?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bblog1Api<T>) {
    super(_entityApi);
  }
}

export interface U_Bblog1Type<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLogId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLineNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uTblName?: DeserializedType<T, 'Edm.String'> | null;
  uFldName?: DeserializedType<T, 'Edm.String'> | null;
  uValOld?: DeserializedType<T, 'Edm.String'> | null;
  uValNew?: DeserializedType<T, 'Edm.String'> | null;
}
