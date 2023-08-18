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
import type { U_BncntaApi } from './U_BncntaApi';

/**
 * This class represents the entity "U_BNCNTA" of service "SAPB1".
 */
export class U_Bncnta<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BncntaType<T>
{
  /**
   * Technical entity name for U_Bncnta.
   */
  static _entityName = 'U_BNCNTA';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bncnta entity
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

  constructor(readonly _entityApi: U_BncntaApi<T>) {
    super(_entityApi);
  }
}

export interface U_BncntaType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
