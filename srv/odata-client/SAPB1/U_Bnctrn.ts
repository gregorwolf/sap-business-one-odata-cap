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
import type { U_BnctrnApi } from './U_BnctrnApi';

/**
 * This class represents the entity "U_BNCTRN" of service "SAPB1".
 */
export class U_Bnctrn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BnctrnType<T>
{
  /**
   * Technical entity name for U_Bnctrn.
   */
  static _entityName = 'U_BNCTRN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bnctrn entity
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

  constructor(readonly _entityApi: U_BnctrnApi<T>) {
    super(_entityApi);
  }
}

export interface U_BnctrnType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
