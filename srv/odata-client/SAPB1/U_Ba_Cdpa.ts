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
import type { U_Ba_CdpaApi } from './U_Ba_CdpaApi';

/**
 * This class represents the entity "U_BA_CDPA" of service "SAPB1".
 */
export class U_Ba_Cdpa<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CdpaType<T>
{
  /**
   * Technical entity name for U_Ba_Cdpa.
   */
  static _entityName = 'U_BA_CDPA';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cdpa entity
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
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Post Gl.
   * @nullable
   */
  uPostGl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Direct Dp.
   * @nullable
   */
  uDirectDp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ret Meth.
   * @nullable
   */
  uRetMeth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Post Mode.
   * @nullable
   */
  uPostMode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Def Name.
   * @nullable
   */
  uDefName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Area Type.
   * @nullable
   */
  uAreaType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Drvd Area.
   * @nullable
   */
  uDrvdArea?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Ba_CdpaApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CdpaType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uPostGl?: DeserializedType<T, 'Edm.String'> | null;
  uDirectDp?: DeserializedType<T, 'Edm.String'> | null;
  uRetMeth?: DeserializedType<T, 'Edm.Int32'> | null;
  uPostMode?: DeserializedType<T, 'Edm.Int32'> | null;
  uDefName?: DeserializedType<T, 'Edm.String'> | null;
  uAreaType?: DeserializedType<T, 'Edm.Int32'> | null;
  uDrvdArea?: DeserializedType<T, 'Edm.Int32'> | null;
}
