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
import type { U_Ba_Odoc2Api } from './U_Ba_Odoc2Api';

/**
 * This class represents the entity "U_BA_ODOC2" of service "SAPB1".
 */
export class U_Ba_Odoc2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_Odoc2Type<T>
{
  /**
   * Technical entity name for U_Ba_Odoc2.
   */
  static _entityName = 'U_BA_ODOC2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odoc2 entity
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
   * U Canceled.
   * @nullable
   */
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Pos Typ.
   * @nullable
   */
  uPosTyp?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Price.
   * @nullable
   */
  uPrice?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Currency.
   * @nullable
   */
  uCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Tax Key.
   * @nullable
   */
  uTaxKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Tax Amt.
   * @nullable
   */
  uTaxAmt?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Remark.
   * @nullable
   */
  uRemark?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Curr Code.
   * @nullable
   */
  uCurrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Debit Lc.
   * @nullable
   */
  uDebitLc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Credit Lc.
   * @nullable
   */
  uCreditLc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Debit Sc.
   * @nullable
   */
  uDebitSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Credit Sc.
   * @nullable
   */
  uCreditSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Acct Revn.
   * @nullable
   */
  uAcctRevn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dpr Ar Id.
   * @nullable
   */
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Qty.
   * @nullable
   */
  uQty?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_Ba_Odoc2Api<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_Odoc2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uPosNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uCanceled?: DeserializedType<T, 'Edm.String'> | null;
  uPosTyp?: DeserializedType<T, 'Edm.String'> | null;
  uAccount?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uPostPrd?: DeserializedType<T, 'Edm.Int32'> | null;
  uTrnsId?: DeserializedType<T, 'Edm.String'> | null;
  uPostDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uPrice?: DeserializedType<T, 'Edm.Double'> | null;
  uCurrency?: DeserializedType<T, 'Edm.String'> | null;
  uTaxKey?: DeserializedType<T, 'Edm.String'> | null;
  uTaxAmt?: DeserializedType<T, 'Edm.Double'> | null;
  uRemark?: DeserializedType<T, 'Edm.String'> | null;
  uDebit?: DeserializedType<T, 'Edm.Double'> | null;
  uCredit?: DeserializedType<T, 'Edm.Double'> | null;
  uCurrCode?: DeserializedType<T, 'Edm.String'> | null;
  uDebitLc?: DeserializedType<T, 'Edm.Double'> | null;
  uCreditLc?: DeserializedType<T, 'Edm.Double'> | null;
  uDebitSc?: DeserializedType<T, 'Edm.Double'> | null;
  uCreditSc?: DeserializedType<T, 'Edm.Double'> | null;
  uAcctRevn?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uQty?: DeserializedType<T, 'Edm.Double'> | null;
}
