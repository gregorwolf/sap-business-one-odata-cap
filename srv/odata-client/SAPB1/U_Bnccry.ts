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
import type { U_BnccryApi } from './U_BnccryApi';

/**
 * This class represents the entity "U_BNCCRY" of service "SAPB1".
 */
export class U_Bnccry<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BnccryType<T>
{
  /**
   * Technical entity name for U_Bnccry.
   */
  static _entityName = 'U_BNCCRY';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bnccry entity
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
   * U Num Code.
   * @nullable
   */
  uNumCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BnccryApi<T>) {
    super(_entityApi);
  }
}

export interface U_BnccryType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uNumCode?: DeserializedType<T, 'Edm.String'> | null;
}
