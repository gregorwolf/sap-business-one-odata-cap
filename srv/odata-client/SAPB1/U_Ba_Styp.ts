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
import type { U_Ba_StypApi } from './U_Ba_StypApi';

/**
 * This class represents the entity "U_BA_STYP" of service "SAPB1".
 */
export class U_Ba_Styp<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_StypType<T>
{
  /**
   * Technical entity name for U_Ba_Styp.
   */
  static _entityName = 'U_BA_STYP';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Styp entity
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
   * U Asst Tp Id.
   * @nullable
   */
  uAsstTpId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Asst Tp Nm.
   * @nullable
   */
  uAsstTpNm?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_StypApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_StypType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstTpId?: DeserializedType<T, 'Edm.Int32'> | null;
  uAsstTpNm?: DeserializedType<T, 'Edm.String'> | null;
}
