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
import type { U_Ba_CdtnApi } from './U_Ba_CdtnApi';

/**
 * This class represents the entity "U_BA_CDTN" of service "SAPB1".
 */
export class U_Ba_Cdtn<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CdtnType<T>
{
  /**
   * Technical entity name for U_Ba_Cdtn.
   */
  static _entityName = 'U_BA_CDTN';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cdtn entity
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
   * U Acct Detn.
   * @nullable
   */
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Desc.
   * @nullable
   */
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Balanc.
   * @nullable
   */
  uAcBalanc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Clr Acq.
   * @nullable
   */
  uAcClrAcq?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Ord.
   * @nullable
   */
  uAcOrd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Ord Acc.
   * @nullable
   */
  uAcOrdAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Unp.
   * @nullable
   */
  uAcUnp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Unp Acc.
   * @nullable
   */
  uAcUnpAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Sa Rev N.
   * @nullable
   */
  uAcSaRevN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Exp N.
   * @nullable
   */
  uAcReExpN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Rev N.
   * @nullable
   */
  uAcReRevN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Sa Rev G.
   * @nullable
   */
  uAcSaRevG?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Exp G.
   * @nullable
   */
  uAcReExpG?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Rev G.
   * @nullable
   */
  uAcReRevG?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Nb Ve.
   * @nullable
   */
  uAcReNbVe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Re Nb Vr.
   * @nullable
   */
  uAcReNbVr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Clr Dsc.
   * @nullable
   */
  uAcClrDsc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Sp.
   * @nullable
   */
  uAcSp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Sp Acc.
   * @nullable
   */
  uAcSpAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Rev Re.
   * @nullable
   */
  uAcRevRe?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_CdtnApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CdtnType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  uDesc?: DeserializedType<T, 'Edm.String'> | null;
  uAcBalanc?: DeserializedType<T, 'Edm.String'> | null;
  uAcClrAcq?: DeserializedType<T, 'Edm.String'> | null;
  uAcOrd?: DeserializedType<T, 'Edm.String'> | null;
  uAcOrdAcc?: DeserializedType<T, 'Edm.String'> | null;
  uAcUnp?: DeserializedType<T, 'Edm.String'> | null;
  uAcUnpAcc?: DeserializedType<T, 'Edm.String'> | null;
  uAcSaRevN?: DeserializedType<T, 'Edm.String'> | null;
  uAcReExpN?: DeserializedType<T, 'Edm.String'> | null;
  uAcReRevN?: DeserializedType<T, 'Edm.String'> | null;
  uAcSaRevG?: DeserializedType<T, 'Edm.String'> | null;
  uAcReExpG?: DeserializedType<T, 'Edm.String'> | null;
  uAcReRevG?: DeserializedType<T, 'Edm.String'> | null;
  uAcReNbVe?: DeserializedType<T, 'Edm.String'> | null;
  uAcReNbVr?: DeserializedType<T, 'Edm.String'> | null;
  uAcClrDsc?: DeserializedType<T, 'Edm.String'> | null;
  uAcSp?: DeserializedType<T, 'Edm.String'> | null;
  uAcSpAcc?: DeserializedType<T, 'Edm.String'> | null;
  uAcRevRe?: DeserializedType<T, 'Edm.String'> | null;
}
