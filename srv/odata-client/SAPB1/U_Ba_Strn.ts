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
import type { U_Ba_StrnApi } from './U_Ba_StrnApi';

/**
 * This class represents the entity "U_BA_STRN" of service "SAPB1".
 */
export class U_Ba_Strn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_StrnType<T>
{
  /**
   * Technical entity name for U_Ba_Strn.
   */
  static _entityName = 'U_BA_STRN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Strn entity
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
   * U Trns Id.
   * @nullable
   */
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Trns Name.
   * @nullable
   */
  uTrnsName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_StrnApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_StrnType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  uTrnsName?: DeserializedType<T, 'Edm.String'> | null;
}
