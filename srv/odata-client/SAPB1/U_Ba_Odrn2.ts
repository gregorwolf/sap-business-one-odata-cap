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
import type { U_Ba_Odrn2Api } from './U_Ba_Odrn2Api';

/**
 * This class represents the entity "U_BA_ODRN2" of service "SAPB1".
 */
export class U_Ba_Odrn2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Odrn2Type<T>
{
  /**
   * Technical entity name for U_Ba_Odrn2.
   */
  static _entityName = 'U_BA_ODRN2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odrn2 entity
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
   * U Run Id.
   * @nullable
   */
  uRunId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Acct Detn.
   * @nullable
   */
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Gl Doc Num.
   * @nullable
   */
  uGlDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ac Ord Dp.
   * @nullable
   */
  uAcOrdDp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Balanc.
   * @nullable
   */
  uAcBalanc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Debit.
   * @nullable
   */
  uDebit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Credit.
   * @nullable
   */
  uCredit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Ac Spe Dp.
   * @nullable
   */
  uAcSpeDp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ac Spe Bal.
   * @nullable
   */
  uAcSpeBal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Debi Sp Dp.
   * @nullable
   */
  uDebiSpDp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Cred Sp Dp.
   * @nullable
   */
  uCredSpDp?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_Ba_Odrn2Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Odrn2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uRunId?: DeserializedType<T, 'Edm.Int32'> | null;
  uAcctDetn?: DeserializedType<T, 'Edm.Int32'> | null;
  uGlDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uAcOrdDp?: DeserializedType<T, 'Edm.String'> | null;
  uAcBalanc?: DeserializedType<T, 'Edm.String'> | null;
  uDebit?: DeserializedType<T, 'Edm.Double'> | null;
  uCredit?: DeserializedType<T, 'Edm.Double'> | null;
  uAcSpeDp?: DeserializedType<T, 'Edm.String'> | null;
  uAcSpeBal?: DeserializedType<T, 'Edm.String'> | null;
  uDebiSpDp?: DeserializedType<T, 'Edm.Double'> | null;
  uCredSpDp?: DeserializedType<T, 'Edm.Double'> | null;
}
