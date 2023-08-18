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
import type { U_Ba_SdpmApi } from './U_Ba_SdpmApi';

/**
 * This class represents the entity "U_BA_SDPM" of service "SAPB1".
 */
export class U_Ba_Sdpm<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_SdpmType<T>
{
  /**
   * Technical entity name for U_Ba_Sdpm.
   */
  static _entityName = 'U_BA_SDPM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Sdpm entity
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
   * U Dp Meth Id.
   * @nullable
   */
  uDpMethId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dp Meth Nm.
   * @nullable
   */
  uDpMethNm?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_SdpmApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_SdpmType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDpMethId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDpMethNm?: DeserializedType<T, 'Edm.String'> | null;
}
