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
import type { U_Bld_PrndApi } from './U_Bld_PrndApi';

/**
 * This class represents the entity "U_BLD_PRND" of service "SAPB1".
 */
export class U_Bld_Prnd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bld_PrndType<T>
{
  /**
   * Technical entity name for U_Bld_Prnd.
   */
  static _entityName = 'U_BLD_PRND';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bld_Prnd entity
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
   * U Obj Type.
   * @nullable
   */
  uObjType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Obj Id.
   * @nullable
   */
  uObjId?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(readonly _entityApi: U_Bld_PrndApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bld_PrndType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  uObjType?: DeserializedType<T, 'Edm.Int32'> | null;
  uObjId?: DeserializedType<T, 'Edm.String'> | null;
  uDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  uLaytId?: DeserializedType<T, 'Edm.Int32'> | null;
  uCopies?: DeserializedType<T, 'Edm.Int32'> | null;
}
