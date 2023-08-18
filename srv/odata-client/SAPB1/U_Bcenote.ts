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
import type { U_BcenoteApi } from './U_BcenoteApi';

/**
 * This class represents the entity "U_BCENOTE" of service "SAPB1".
 */
export class U_Bcenote<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BcenoteType<T>
{
  /**
   * Technical entity name for U_Bcenote.
   */
  static _entityName = 'U_BCENOTE';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bcenote entity
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
   * U Id.
   * @nullable
   */
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U String.
   * @nullable
   */
  uString?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BcenoteApi<T>) {
    super(_entityApi);
  }
}

export interface U_BcenoteType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  uString?: DeserializedType<T, 'Edm.String'> | null;
}
