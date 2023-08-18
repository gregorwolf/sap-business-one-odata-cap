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
import type { U_BpcntrApi } from './U_BpcntrApi';

/**
 * This class represents the entity "U_BPCNTR" of service "SAPB1".
 */
export class U_Bpcntr<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BpcntrType<T>
{
  /**
   * Technical entity name for U_Bpcntr.
   */
  static _entityName = 'U_BPCNTR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bpcntr entity
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
   * U Bpcntry.
   * @nullable
   */
  uBpcntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bpdate.
   * @nullable
   */
  uBpdate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bpcntrg.
   * @nullable
   */
  uBpcntrg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bpcntrt.
   * @nullable
   */
  uBpcntrt?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BpcntrApi<T>) {
    super(_entityApi);
  }
}

export interface U_BpcntrType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBpcntry?: DeserializedType<T, 'Edm.String'> | null;
  uBpdate?: DeserializedType<T, 'Edm.String'> | null;
  uBpcntrg?: DeserializedType<T, 'Edm.String'> | null;
  uBpcntrt?: DeserializedType<T, 'Edm.String'> | null;
}
