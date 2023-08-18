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
import type { U_BncincApi } from './U_BncincApi';

/**
 * This class represents the entity "U_BNCINC" of service "SAPB1".
 */
export class U_Bncinc<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BncincType<T>
{
  /**
   * Technical entity name for U_Bncinc.
   */
  static _entityName = 'U_BNCINC';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bncinc entity
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
   * U Prc St Val.
   * @nullable
   */
  uPrcStVal?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_BncincApi<T>) {
    super(_entityApi);
  }
}

export interface U_BncincType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uPrcStVal?: DeserializedType<T, 'Edm.Double'> | null;
}
