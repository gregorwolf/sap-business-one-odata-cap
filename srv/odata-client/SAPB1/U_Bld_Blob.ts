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
import type { U_Bld_BlobApi } from './U_Bld_BlobApi';

/**
 * This class represents the entity "U_BLD_BLOB" of service "SAPB1".
 */
export class U_Bld_Blob<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bld_BlobType<T>
{
  /**
   * Technical entity name for U_Bld_Blob.
   */
  static _entityName = 'U_BLD_BLOB';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bld_Blob entity
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
   * U Layt Id.
   * @nullable
   */
  uLaytId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Con Idx.
   * @nullable
   */
  uConIdx?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U File Type.
   * @nullable
   */
  uFileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U File Cont.
   * @nullable
   */
  uFileCont?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bld_BlobApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bld_BlobType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLaytId?: DeserializedType<T, 'Edm.Int32'> | null;
  uConIdx?: DeserializedType<T, 'Edm.Int32'> | null;
  uFileType?: DeserializedType<T, 'Edm.String'> | null;
  uFileCont?: DeserializedType<T, 'Edm.String'> | null;
}
