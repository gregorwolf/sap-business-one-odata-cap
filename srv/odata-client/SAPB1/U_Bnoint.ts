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
import type { U_BnointApi } from './U_BnointApi';

/**
 * This class represents the entity "U_BNOINT" of service "SAPB1".
 */
export class U_Bnoint<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BnointType<T>
{
  /**
   * Technical entity name for U_Bnoint.
   */
  static _entityName = 'U_BNOINT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bnoint entity
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
   * U Decl Year.
   * @nullable
   */
  uDeclYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Decl Mon.
   * @nullable
   */
  uDeclMon?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Im Ex Ind.
   * @nullable
   */
  uImExInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Country.
   * @nullable
   */
  uCountry?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Decl Num.
   * @nullable
   */
  uDeclNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dec No Ex.
   * @nullable
   */
  uDecNoEx?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Header Id.
   * @nullable
   */
  uHeaderId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Comp Name.
   * @nullable
   */
  uCompName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Comp Addr.
   * @nullable
   */
  uCompAddr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Comp Ind.
   * @nullable
   */
  uCompInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Decl Stat.
   * @nullable
   */
  uDeclStat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Decl Dept.
   * @nullable
   */
  uDeclDept?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Main Curr.
   * @nullable
   */
  uMainCurr?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Cust Offc.
   * @nullable
   */
  uCustOffc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cust Id.
   * @nullable
   */
  uCustId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cust Ser.
   * @nullable
   */
  uCustSer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Com Dec Id.
   * @nullable
   */
  uComDecId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U I Ctrl Ref.
   * @nullable
   */
  uICtrlRef?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Addr 13 P.
   * @nullable
   */
  uAddr13P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Addr 23 P.
   * @nullable
   */
  uAddr23P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Addr 33 P.
   * @nullable
   */
  uAddr33P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Addr 43 P.
   * @nullable
   */
  uAddr43P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cont 3 P.
   * @nullable
   */
  uCont3P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fon 3 P.
   * @nullable
   */
  uFon3P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fax 3 P.
   * @nullable
   */
  uFax3P?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Free Txt 1.
   * @nullable
   */
  uFreeTxt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Free Txt 2.
   * @nullable
   */
  uFreeTxt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Free Txt 3.
   * @nullable
   */
  uFreeTxt3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Free Txt 4.
   * @nullable
   */
  uFreeTxt4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Free Txt 5.
   * @nullable
   */
  uFreeTxt5?: DeserializedType<T, 'Edm.String'> | null;
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
   * U Release.
   * @nullable
   */
  uRelease?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt User.
   * @nullable
   */
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Crt Time.
   * @nullable
   */
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: U_BnointApi<T>) {
    super(_entityApi);
  }
}

export interface U_BnointType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDeclYear?: DeserializedType<T, 'Edm.Int32'> | null;
  uDeclMon?: DeserializedType<T, 'Edm.Int32'> | null;
  uImExInd?: DeserializedType<T, 'Edm.String'> | null;
  uCountry?: DeserializedType<T, 'Edm.String'> | null;
  uVatRegNo?: DeserializedType<T, 'Edm.String'> | null;
  uVatRegEx?: DeserializedType<T, 'Edm.String'> | null;
  uDeclNum?: DeserializedType<T, 'Edm.String'> | null;
  uDecNoEx?: DeserializedType<T, 'Edm.Int32'> | null;
  uHeaderId?: DeserializedType<T, 'Edm.Int32'> | null;
  uCompName?: DeserializedType<T, 'Edm.String'> | null;
  uCompAddr?: DeserializedType<T, 'Edm.String'> | null;
  uCompInd?: DeserializedType<T, 'Edm.String'> | null;
  uDeclStat?: DeserializedType<T, 'Edm.String'> | null;
  uDeclDept?: DeserializedType<T, 'Edm.Int32'> | null;
  uMainCurr?: DeserializedType<T, 'Edm.String'> | null;
  uObligLvl?: DeserializedType<T, 'Edm.String'> | null;
  uTaxState?: DeserializedType<T, 'Edm.String'> | null;
  uCustOffc?: DeserializedType<T, 'Edm.String'> | null;
  uCustId?: DeserializedType<T, 'Edm.String'> | null;
  uCustSer?: DeserializedType<T, 'Edm.String'> | null;
  uComDecId?: DeserializedType<T, 'Edm.String'> | null;
  uICtrlRef?: DeserializedType<T, 'Edm.String'> | null;
  uContName?: DeserializedType<T, 'Edm.String'> | null;
  uContFon?: DeserializedType<T, 'Edm.String'> | null;
  uContFax?: DeserializedType<T, 'Edm.String'> | null;
  uAddr13P?: DeserializedType<T, 'Edm.String'> | null;
  uAddr23P?: DeserializedType<T, 'Edm.String'> | null;
  uAddr33P?: DeserializedType<T, 'Edm.String'> | null;
  uAddr43P?: DeserializedType<T, 'Edm.String'> | null;
  uCont3P?: DeserializedType<T, 'Edm.String'> | null;
  uFon3P?: DeserializedType<T, 'Edm.String'> | null;
  uFax3P?: DeserializedType<T, 'Edm.String'> | null;
  uFreeTxt1?: DeserializedType<T, 'Edm.String'> | null;
  uFreeTxt2?: DeserializedType<T, 'Edm.String'> | null;
  uFreeTxt3?: DeserializedType<T, 'Edm.String'> | null;
  uFreeTxt4?: DeserializedType<T, 'Edm.String'> | null;
  uFreeTxt5?: DeserializedType<T, 'Edm.String'> | null;
  uValidKey?: DeserializedType<T, 'Edm.String'> | null;
  uDnsce?: DeserializedType<T, 'Edm.String'> | null;
  uRelease?: DeserializedType<T, 'Edm.String'> | null;
  uCrtUser?: DeserializedType<T, 'Edm.String'> | null;
  uCrtTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
