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
import type { U_Bld_PdlnApi } from './U_Bld_PdlnApi';

/**
 * This class represents the entity "U_BLD_PDLN" of service "SAPB1".
 */
export class U_Bld_Pdln<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bld_PdlnType<T>
{
  /**
   * Technical entity name for U_Bld_Pdln.
   */
  static _entityName = 'U_BLD_PDLN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bld_Pdln entity
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
   * U Line Id.
   * @nullable
   */
  uLineId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Pref Id.
   * @nullable
   */
  uPrefId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Doc Type.
   * @nullable
   */
  uDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Layt Id.
   * @nullable
   */
  uLaytId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Copies.
   * @nullable
   */
  uCopies?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Bld_PdlnApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bld_PdlnType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLineId?: DeserializedType<T, 'Edm.Int32'> | null;
  uPrefId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  uLaytId?: DeserializedType<T, 'Edm.Int32'> | null;
  uCopies?: DeserializedType<T, 'Edm.Int32'> | null;
}
