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
import type { U_Bd_SpathApi } from './U_Bd_SpathApi';

/**
 * This class represents the entity "U_BD_SPATH" of service "SAPB1".
 */
export class U_Bd_Spath<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bd_SpathType<T>
{
  /**
   * Technical entity name for U_Bd_Spath.
   */
  static _entityName = 'U_BD_SPATH';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bd_Spath entity
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
   * U Exp Date.
   * @nullable
   */
  uExpDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Path.
   * @nullable
   */
  uPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Form.
   * @nullable
   */
  uForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Adv Name.
   * @nullable
   */
  uAdvName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Adv Num.
   * @nullable
   */
  uAdvNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cl Num.
   * @nullable
   */
  uClNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dfv Short.
   * @nullable
   */
  uDfvShort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dnr.
   * @nullable
   */
  uDnr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Anr.
   * @nullable
   */
  uAnr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Pp.
   * @nullable
   */
  uPp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Pwd.
   * @nullable
   */
  uPwd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U From Date.
   * @nullable
   */
  uFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U To Date.
   * @nullable
   */
  uToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: U_Bd_SpathApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bd_SpathType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uExpDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uPath?: DeserializedType<T, 'Edm.String'> | null;
  uForm?: DeserializedType<T, 'Edm.String'> | null;
  uAdvName?: DeserializedType<T, 'Edm.String'> | null;
  uAdvNum?: DeserializedType<T, 'Edm.String'> | null;
  uClNum?: DeserializedType<T, 'Edm.String'> | null;
  uDfvShort?: DeserializedType<T, 'Edm.String'> | null;
  uDnr?: DeserializedType<T, 'Edm.String'> | null;
  uAnr?: DeserializedType<T, 'Edm.String'> | null;
  uPp?: DeserializedType<T, 'Edm.String'> | null;
  uPwd?: DeserializedType<T, 'Edm.String'> | null;
  uFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
