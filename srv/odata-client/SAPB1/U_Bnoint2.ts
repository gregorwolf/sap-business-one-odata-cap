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
import type { U_Bnoint2Api } from './U_Bnoint2Api';

/**
 * This class represents the entity "U_BNOINT2" of service "SAPB1".
 */
export class U_Bnoint2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bnoint2Type<T>
{
  /**
   * Technical entity name for U_Bnoint2.
   */
  static _entityName = 'U_BNOINT2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bnoint2 entity
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
   * U Header Id.
   * @nullable
   */
  uHeaderId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Item Id.
   * @nullable
   */
  uItemId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Row Stat.
   * @nullable
   */
  uRowStat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Doc Num.
   * @nullable
   */
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Line Num.
   * @nullable
   */
  uLineNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rec Type.
   * @nullable
   */
  uRecType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Doc D Date.
   * @nullable
   */
  uDocDDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Bp Cntry.
   * @nullable
   */
  uBpCntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dst State.
   * @nullable
   */
  uDstState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Incoterm.
   * @nullable
   */
  uIncoterm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ta Type.
   * @nullable
   */
  uTaType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Trn Mode.
   * @nullable
   */
  uTrnMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Port.
   * @nullable
   */
  uPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Comm Code.
   * @nullable
   */
  uCommCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ori Cntry.
   * @nullable
   */
  uOriCntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ori State.
   * @nullable
   */
  uOriState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cust Proc.
   * @nullable
   */
  uCustProc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Tax Cd Ext.
   * @nullable
   */
  uTaxCdExt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Net Mas Sg.
   * @nullable
   */
  uNetMasSg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Net Mass.
   * @nullable
   */
  uNetMass?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Net Mas Un.
   * @nullable
   */
  uNetMasUn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sup Mas Sg.
   * @nullable
   */
  uSupMasSg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sup Mass.
   * @nullable
   */
  uSupMass?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sup Mas Un.
   * @nullable
   */
  uSupMasUn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Value Sg.
   * @nullable
   */
  uValueSg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Value.
   * @nullable
   */
  uValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Value Fc.
   * @nullable
   */
  uValueFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Frgn Curr.
   * @nullable
   */
  uFrgnCurr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Brd Val Sg.
   * @nullable
   */
  uBrdValSg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Brd Value.
   * @nullable
   */
  uBrdValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Dom Frg Id.
   * @nullable
   */
  uDomFrgId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Return Id.
   * @nullable
   */
  uReturnId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Corr Mon.
   * @nullable
   */
  uCorrMon?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Corr Year.
   * @nullable
   */
  uCorrYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Corr Sign.
   * @nullable
   */
  uCorrSign?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Corr Doc.
   * @nullable
   */
  uCorrDoc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Corr Item.
   * @nullable
   */
  uCorrItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Corr Type.
   * @nullable
   */
  uCorrType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Vat Reg Nb.
   * @nullable
   */
  uVatRegNb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Changed.
   * @nullable
   */
  uChanged?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Chg Id.
   * @nullable
   */
  uChgId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Chg User.
   * @nullable
   */
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Chg Time.
   * @nullable
   */
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Deleted.
   * @nullable
   */
  uDeleted?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Bnoint2Api<T>) {
    super(_entityApi);
  }
}

export interface U_Bnoint2Type<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uHeaderId?: DeserializedType<T, 'Edm.Int32'> | null;
  uItemId?: DeserializedType<T, 'Edm.Int32'> | null;
  uRowStat?: DeserializedType<T, 'Edm.String'> | null;
  uDocNum?: DeserializedType<T, 'Edm.String'> | null;
  uLineNum?: DeserializedType<T, 'Edm.String'> | null;
  uRecType?: DeserializedType<T, 'Edm.String'> | null;
  uDocDDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uBpCntry?: DeserializedType<T, 'Edm.String'> | null;
  uDstState?: DeserializedType<T, 'Edm.String'> | null;
  uIncoterm?: DeserializedType<T, 'Edm.String'> | null;
  uTaType?: DeserializedType<T, 'Edm.String'> | null;
  uTrnMode?: DeserializedType<T, 'Edm.String'> | null;
  uPort?: DeserializedType<T, 'Edm.String'> | null;
  uCommCode?: DeserializedType<T, 'Edm.String'> | null;
  uOriCntry?: DeserializedType<T, 'Edm.String'> | null;
  uOriState?: DeserializedType<T, 'Edm.String'> | null;
  uCustProc?: DeserializedType<T, 'Edm.String'> | null;
  uTaxCdExt?: DeserializedType<T, 'Edm.String'> | null;
  uNetMasSg?: DeserializedType<T, 'Edm.String'> | null;
  uNetMass?: DeserializedType<T, 'Edm.Double'> | null;
  uNetMasUn?: DeserializedType<T, 'Edm.String'> | null;
  uSupMasSg?: DeserializedType<T, 'Edm.String'> | null;
  uSupMass?: DeserializedType<T, 'Edm.Double'> | null;
  uSupMasUn?: DeserializedType<T, 'Edm.String'> | null;
  uValueSg?: DeserializedType<T, 'Edm.String'> | null;
  uValue?: DeserializedType<T, 'Edm.Double'> | null;
  uValueFc?: DeserializedType<T, 'Edm.Double'> | null;
  uFrgnCurr?: DeserializedType<T, 'Edm.String'> | null;
  uBrdValSg?: DeserializedType<T, 'Edm.String'> | null;
  uBrdValue?: DeserializedType<T, 'Edm.Double'> | null;
  uDomFrgId?: DeserializedType<T, 'Edm.String'> | null;
  uReturnId?: DeserializedType<T, 'Edm.String'> | null;
  uCorrMon?: DeserializedType<T, 'Edm.Int32'> | null;
  uCorrYear?: DeserializedType<T, 'Edm.Int32'> | null;
  uCorrSign?: DeserializedType<T, 'Edm.String'> | null;
  uCorrDoc?: DeserializedType<T, 'Edm.String'> | null;
  uCorrItem?: DeserializedType<T, 'Edm.String'> | null;
  uCorrType?: DeserializedType<T, 'Edm.String'> | null;
  uVatRegNb?: DeserializedType<T, 'Edm.String'> | null;
  uChanged?: DeserializedType<T, 'Edm.String'> | null;
  uChgId?: DeserializedType<T, 'Edm.String'> | null;
  uChgUser?: DeserializedType<T, 'Edm.String'> | null;
  uChgTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uDeleted?: DeserializedType<T, 'Edm.String'> | null;
}
