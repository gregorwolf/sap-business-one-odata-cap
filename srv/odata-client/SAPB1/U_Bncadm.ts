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
import type { U_BncadmApi } from './U_BncadmApi';

/**
 * This class represents the entity "U_BNCADM" of service "SAPB1".
 */
export class U_Bncadm<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BncadmType<T>
{
  /**
   * Technical entity name for U_Bncadm.
   */
  static _entityName = 'U_BNCADM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bncadm entity
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
   * U Vat Reg No.
   * @nullable
   */
  uVatRegNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Vat Reg Ex.
   * @nullable
   */
  uVatRegEx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Oblig Lvl.
   * @nullable
   */
  uObligLvl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Tax State.
   * @nullable
   */
  uTaxState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Com Dec Id.
   * @nullable
   */
  uComDecId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Decl Del.
   * @nullable
   */
  uDeclDel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Decl Inv.
   * @nullable
   */
  uDeclInv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Decl Dept.
   * @nullable
   */
  uDeclDept?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Cont Name.
   * @nullable
   */
  uContName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cont Fon.
   * @nullable
   */
  uContFon?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cont Fax.
   * @nullable
   */
  uContFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Valid Key.
   * @nullable
   */
  uValidKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dnsce.
   * @nullable
   */
  uDnsce?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ret Accnt.
   * @nullable
   */
  uRetAccnt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Force Cmp.
   * @nullable
   */
  uForceCmp?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BncadmApi<T>) {
    super(_entityApi);
  }
}

export interface U_BncadmType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uVatRegNo?: DeserializedType<T, 'Edm.String'> | null;
  uVatRegEx?: DeserializedType<T, 'Edm.String'> | null;
  uObligLvl?: DeserializedType<T, 'Edm.String'> | null;
  uTaxState?: DeserializedType<T, 'Edm.String'> | null;
  uComDecId?: DeserializedType<T, 'Edm.String'> | null;
  uDeclDel?: DeserializedType<T, 'Edm.String'> | null;
  uDeclInv?: DeserializedType<T, 'Edm.String'> | null;
  uDeclDept?: DeserializedType<T, 'Edm.Int32'> | null;
  uContName?: DeserializedType<T, 'Edm.String'> | null;
  uContFon?: DeserializedType<T, 'Edm.String'> | null;
  uContFax?: DeserializedType<T, 'Edm.String'> | null;
  uValidKey?: DeserializedType<T, 'Edm.String'> | null;
  uDnsce?: DeserializedType<T, 'Edm.String'> | null;
  uRetAccnt?: DeserializedType<T, 'Edm.String'> | null;
  uForceCmp?: DeserializedType<T, 'Edm.String'> | null;
}
