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
import type { U_Bld_GnrlApi } from './U_Bld_GnrlApi';

/**
 * This class represents the entity "U_BLD_GNRL" of service "SAPB1".
 */
export class U_Bld_Gnrl<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bld_GnrlType<T>
{
  /**
   * Technical entity name for U_Bld_Gnrl.
   */
  static _entityName = 'U_BLD_GNRL';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bld_Gnrl entity
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
   * U Use Ll.
   * @nullable
   */
  uUseLl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bld_GnrlApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bld_GnrlType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uUseLl?: DeserializedType<T, 'Edm.String'> | null;
}
