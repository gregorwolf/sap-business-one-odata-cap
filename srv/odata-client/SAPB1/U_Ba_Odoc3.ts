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
import type { U_Ba_Odoc3Api } from './U_Ba_Odoc3Api';

/**
 * This class represents the entity "U_BA_ODOC3" of service "SAPB1".
 */
export class U_Ba_Odoc3<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Odoc3Type<T>
{
  /**
   * Technical entity name for U_Ba_Odoc3.
   */
  static _entityName = 'U_BA_ODOC3';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odoc3 entity
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
   * U Doc Num.
   * @nullable
   */
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Pos Num.
   * @nullable
   */
  uPosNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Canceled.
   * @nullable
   */
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Account.
   * @nullable
   */
  uAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Post Prd.
   * @nullable
   */
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Trns Id.
   * @nullable
   */
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Post Date.
   * @nullable
   */
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Apc.
   * @nullable
   */
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Or Dp.
   * @nullable
   */
  uOrDp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Un Dp.
   * @nullable
   */
  uUnDp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key.
   * @nullable
   */
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Dp.
   * @nullable
   */
  uSpDp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sales Rev.
   * @nullable
   */
  uSalesRev?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Retir Exp.
   * @nullable
   */
  uRetirExp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Retir Rev.
   * @nullable
   */
  uRetirRev?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Retir Dat.
   * @nullable
   */
  uRetirDat?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Trnf Asst.
   * @nullable
   */
  uTrnfAsst?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Typ Id.
   * @nullable
   */
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Date.
   * @nullable
   */
  uDprDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Use Life.
   * @nullable
   */
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rem Life.
   * @nullable
   */
  uRemLife?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Qty.
   * @nullable
   */
  uQty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Salvage V.
   * @nullable
   */
  uSalvageV?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_Ba_Odoc3Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Odoc3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uPosNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  uAccount?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  uOrDp?: DeserializedType<T, 'Edm.Double'> | null;
  uUnDp?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  uSpDp?: DeserializedType<T, 'Edm.Double'> | null;
  uSalesRev?: DeserializedType<T, 'Edm.Double'> | null;
  uRetirExp?: DeserializedType<T, 'Edm.Double'> | null;
  uRetirRev?: DeserializedType<T, 'Edm.Double'> | null;
  uRetirDat?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uTrnfAsst?: DeserializedType<T, 'Edm.String'> | null;
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  uDprDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uUseLife?: DeserializedType<T, 'Edm.Int32'> | null;
  uRemLife?: DeserializedType<T, 'Edm.Int32'> | null;
  uQty?: DeserializedType<T, 'Edm.Double'> | null;
  uSalvageV?: DeserializedType<T, 'Edm.Double'> | null;
}
