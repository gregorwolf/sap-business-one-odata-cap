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
import type { U_Bld_LytdApi } from './U_Bld_LytdApi';

/**
 * This class represents the entity "U_BLD_LYTD" of service "SAPB1".
 */
export class U_Bld_Lytd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bld_LytdType<T>
{
  /**
   * Technical entity name for U_Bld_Lytd.
   */
  static _entityName = 'U_BLD_LYTD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bld_Lytd entity
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
   * U L Name.
   * @nullable
   */
  uLName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U W Protct.
   * @nullable
   */
  uWProtct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Doc Type.
   * @nullable
   */
  uDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Qry Cat.
   * @nullable
   */
  uQryCat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Qry Id.
   * @nullable
   */
  uQryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Is Deflt.
   * @nullable
   */
  uIsDeflt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Copies.
   * @nullable
   */
  uCopies?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U User Id.
   * @nullable
   */
  uUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ll Ver.
   * @nullable
   */
  uLlVer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cntry.
   * @nullable
   */
  uCntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Int Ver.
   * @nullable
   */
  uIntVer?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Form Id.
   * @nullable
   */
  uFormId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bld_LytdApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bld_LytdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLName?: DeserializedType<T, 'Edm.String'> | null;
  uWProtct?: DeserializedType<T, 'Edm.String'> | null;
  uDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  uQryCat?: DeserializedType<T, 'Edm.Int32'> | null;
  uQryId?: DeserializedType<T, 'Edm.Int32'> | null;
  uIsDeflt?: DeserializedType<T, 'Edm.String'> | null;
  uCopies?: DeserializedType<T, 'Edm.Int32'> | null;
  uUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  uLlVer?: DeserializedType<T, 'Edm.String'> | null;
  uCntry?: DeserializedType<T, 'Edm.String'> | null;
  uIntVer?: DeserializedType<T, 'Edm.Int32'> | null;
  uFormId?: DeserializedType<T, 'Edm.String'> | null;
}
