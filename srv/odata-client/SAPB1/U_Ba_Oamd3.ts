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
import type { U_Ba_Oamd3Api } from './U_Ba_Oamd3Api';

/**
 * This class represents the entity "U_BA_OAMD3" of service "SAPB1".
 */
export class U_Ba_Oamd3<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Oamd3Type<T>
{
  /**
   * Technical entity name for U_Ba_Oamd3.
   */
  static _entityName = 'U_BA_OAMD3';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Oamd3 entity
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
   * U Asst Num.
   * @nullable
   */
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fis Year.
   * @nullable
   */
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Apc.
   * @nullable
   */
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Apc Hist.
   * @nullable
   */
  uApcHist?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Apc Alt.
   * @nullable
   */
  uApcAlt?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Or Dp Acc.
   * @nullable
   */
  uOrDpAcc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Un Dp Acc.
   * @nullable
   */
  uUnDpAcc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key 1.
   * @nullable
   */
  uSpDpKey1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Dp Acc 1.
   * @nullable
   */
  uSpDpAcc1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key 2.
   * @nullable
   */
  uSpDpKey2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Dp Acc 2.
   * @nullable
   */
  uSpDpAcc2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key 3.
   * @nullable
   */
  uSpDpKey3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Dp Acc 3.
   * @nullable
   */
  uSpDpAcc3?: DeserializedType<T, 'Edm.Double'> | null;
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

  constructor(readonly _entityApi: U_Ba_Oamd3Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Oamd3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  uApcHist?: DeserializedType<T, 'Edm.Double'> | null;
  uApcAlt?: DeserializedType<T, 'Edm.Double'> | null;
  uOrDpAcc?: DeserializedType<T, 'Edm.Double'> | null;
  uUnDpAcc?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey1?: DeserializedType<T, 'Edm.String'> | null;
  uSpDpAcc1?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey2?: DeserializedType<T, 'Edm.String'> | null;
  uSpDpAcc2?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey3?: DeserializedType<T, 'Edm.String'> | null;
  uSpDpAcc3?: DeserializedType<T, 'Edm.Double'> | null;
  uQty?: DeserializedType<T, 'Edm.Double'> | null;
  uSalvageV?: DeserializedType<T, 'Edm.Double'> | null;
}
