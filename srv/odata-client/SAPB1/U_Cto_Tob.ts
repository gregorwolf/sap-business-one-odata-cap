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
import type { U_Cto_TobApi } from './U_Cto_TobApi';

/**
 * This class represents the entity "U_CTO_TOB" of service "SAPB1".
 */
export class U_Cto_Tob<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Cto_TobType<T>
{
  /**
   * Technical entity name for U_Cto_Tob.
   */
  static _entityName = 'U_CTO_TOB';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Cto_Tob entity
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
   * U Barcode.
   * @nullable
   */
  uBarcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bus Obj.
   * @nullable
   */
  uBusObj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Docu Type.
   * @nullable
   */
  uDocuType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Obj Key.
   * @nullable
   */
  uObjKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crea Date.
   * @nullable
   */
  uCreaDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Crea User.
   * @nullable
   */
  uCreaUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Persistent.
   * @nullable
   */
  uPersistent?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Cto_TobApi<T>) {
    super(_entityApi);
  }
}

export interface U_Cto_TobType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBarcode?: DeserializedType<T, 'Edm.String'> | null;
  uBusObj?: DeserializedType<T, 'Edm.String'> | null;
  uDocuType?: DeserializedType<T, 'Edm.String'> | null;
  uObjKey?: DeserializedType<T, 'Edm.String'> | null;
  uCreaDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uCreaUser?: DeserializedType<T, 'Edm.String'> | null;
  uPersistent?: DeserializedType<T, 'Edm.String'> | null;
}
