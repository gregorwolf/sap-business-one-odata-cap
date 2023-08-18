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
import type { U_BnccomApi } from './U_BnccomApi';

/**
 * This class represents the entity "U_BNCCOM" of service "SAPB1".
 */
export class U_Bnccom<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BnccomType<T>
{
  /**
   * Technical entity name for U_Bnccom.
   */
  static _entityName = 'U_BNCCOM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bnccom entity
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
   * U Supp Unit.
   * @nullable
   */
  uSuppUnit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BnccomApi<T>) {
    super(_entityApi);
  }
}

export interface U_BnccomType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uSuppUnit?: DeserializedType<T, 'Edm.String'> | null;
}
