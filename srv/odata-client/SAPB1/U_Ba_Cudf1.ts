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
import type { U_Ba_Cudf1Api } from './U_Ba_Cudf1Api';

/**
 * This class represents the entity "U_BA_CUDF1" of service "SAPB1".
 */
export class U_Ba_Cudf1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Cudf1Type<T>
{
  /**
   * Technical entity name for U_Ba_Cudf1.
   */
  static _entityName = 'U_BA_CUDF1';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cudf1 entity
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
   * U Item Code.
   * @nullable
   */
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Field Id.
   * @nullable
   */
  uFieldId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Lang.
   * @nullable
   */
  uLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_Cudf1Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Cudf1Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uItemCode?: DeserializedType<T, 'Edm.String'> | null;
  uFieldId?: DeserializedType<T, 'Edm.String'> | null;
  uLang?: DeserializedType<T, 'Edm.String'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
}
