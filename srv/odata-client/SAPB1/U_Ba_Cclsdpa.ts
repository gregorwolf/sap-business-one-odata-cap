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
import type { U_Ba_CclsdpaApi } from './U_Ba_CclsdpaApi';

/**
 * This class represents the entity "U_BA_CCLSDPA" of service "SAPB1".
 */
export class U_Ba_Cclsdpa<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CclsdpaType<T>
{
  /**
   * Technical entity name for U_Ba_Cclsdpa.
   */
  static _entityName = 'U_BA_CCLSDPA';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cclsdpa entity
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
   * U Item Code.
   * @nullable
   */
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Active.
   * @nullable
   */
  uActive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Acct Detn.
   * @nullable
   */
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr Typ Id.
   * @nullable
   */
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Use Life.
   * @nullable
   */
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Ba_CclsdpaApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CclsdpaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uActive?: DeserializedType<T, 'Edm.String'> | null;
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;
}
