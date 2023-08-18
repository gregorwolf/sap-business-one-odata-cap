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
import type { U_BprstrtApi } from './U_BprstrtApi';

/**
 * This class represents the entity "U_BPRSTRT" of service "SAPB1".
 */
export class U_Bprstrt<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BprstrtType<T>
{
  /**
   * Technical entity name for U_Bprstrt.
   */
  static _entityName = 'U_BPRSTRT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bprstrt entity
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
   * U Bplogin.
   * @nullable
   */
  uBplogin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bpdate.
   * @nullable
   */
  uBpdate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bprstrt Property.
   * @nullable
   */
  uBprstrtProperty?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BprstrtApi<T>) {
    super(_entityApi);
  }
}

export interface U_BprstrtType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBplogin?: DeserializedType<T, 'Edm.String'> | null;
  uBpdate?: DeserializedType<T, 'Edm.String'> | null;
  uBprstrtProperty?: DeserializedType<T, 'Edm.String'> | null;
}
