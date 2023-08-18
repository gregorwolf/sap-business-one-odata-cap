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
import type { U_Ba_CdptApi } from './U_Ba_CdptApi';

/**
 * This class represents the entity "U_BA_CDPT" of service "SAPB1".
 */
export class U_Ba_Cdpt<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_CdptType<T>
{
  /**
   * Technical entity name for U_Ba_Cdpt.
   */
  static _entityName = 'U_BA_CDPT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Cdpt entity
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
   * U Dpr Typ Id.
   * @nullable
   */
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Dp Meth Id.
   * @nullable
   */
  uDpMethId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Depr To.
   * @nullable
   */
  uDeprTo?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Rounding.
   * @nullable
   */
  uRounding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Per Acq 1.
   * @nullable
   */
  uPerAcq1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Per Acq 2.
   * @nullable
   */
  uPerAcq2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Per Ret.
   * @nullable
   */
  uPerRet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Val From.
   * @nullable
   */
  uValFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Val To.
   * @nullable
   */
  uValTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U S Base.
   * @nullable
   */
  uSBase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S Divisor.
   * @nullable
   */
  uSDivisor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U S Percent.
   * @nullable
   */
  uSPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U D Base.
   * @nullable
   */
  uDBase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U D Percent.
   * @nullable
   */
  uDPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U D Factor.
   * @nullable
   */
  uDFactor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U D Alt D Typ.
   * @nullable
   */
  uDAltDTyp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Base 01.
   * @nullable
   */
  uMBase01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Base 02.
   * @nullable
   */
  uMBase02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Base 03.
   * @nullable
   */
  uMBase03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Base 04.
   * @nullable
   */
  uMBase04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Base 05.
   * @nullable
   */
  uMBase05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U M Year 01.
   * @nullable
   */
  uMYear01?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U M Year 02.
   * @nullable
   */
  uMYear02?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U M Year 03.
   * @nullable
   */
  uMYear03?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U M Year 04.
   * @nullable
   */
  uMYear04?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U M Year 05.
   * @nullable
   */
  uMYear05?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U M Perc 01.
   * @nullable
   */
  uMPerc01?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U M Perc 02.
   * @nullable
   */
  uMPerc02?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U M Perc 03.
   * @nullable
   */
  uMPerc03?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U M Perc 04.
   * @nullable
   */
  uMPerc04?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U M Perc 05.
   * @nullable
   */
  uMPerc05?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Def Name.
   * @nullable
   */
  uDefName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Include.
   */
  uInclude!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Salv Perc.
   * @nullable
   */
  uSalvPerc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Dpr Rt Mon.
   * @nullable
   */
  uDprRtMon?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Per Dp Rev.
   * @nullable
   */
  uPerDpRev?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Acq Pr Typ.
   * @nullable
   */
  uAcqPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sub Pr Typ.
   * @nullable
   */
  uSubPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rt Pr Typ.
   * @nullable
   */
  uRtPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ma Dec Ba.
   * @nullable
   */
  uMaDecBa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Meth.
   * @nullable
   */
  uSpMeth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Conc P.
   * @nullable
   */
  uSpConcP?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Sp Max Pe.
   * @nullable
   */
  uSpMaxPe?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Ad Dpr.
   * @nullable
   */
  uSpAdDpr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sp Al Dpr.
   * @nullable
   */
  uSpAlDpr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Depr Tp Id.
   * @nullable
   */
  uDeprTpId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_Ba_CdptApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_CdptType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uDprTypId?: DeserializedType<T, 'Edm.String'> | null;
  uDpMethId?: DeserializedType<T, 'Edm.Int32'> | null;
  uDeprTo?: DeserializedType<T, 'Edm.Double'> | null;
  uRounding?: DeserializedType<T, 'Edm.String'> | null;
  uPerAcq1?: DeserializedType<T, 'Edm.String'> | null;
  uPerAcq2?: DeserializedType<T, 'Edm.String'> | null;
  uPerRet?: DeserializedType<T, 'Edm.String'> | null;
  uValFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uValTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uSBase?: DeserializedType<T, 'Edm.String'> | null;
  uSDivisor?: DeserializedType<T, 'Edm.String'> | null;
  uSPercent?: DeserializedType<T, 'Edm.Double'> | null;
  uDBase?: DeserializedType<T, 'Edm.String'> | null;
  uDPercent?: DeserializedType<T, 'Edm.Double'> | null;
  uDFactor?: DeserializedType<T, 'Edm.Double'> | null;
  uDAltDTyp?: DeserializedType<T, 'Edm.String'> | null;
  uMBase01?: DeserializedType<T, 'Edm.String'> | null;
  uMBase02?: DeserializedType<T, 'Edm.String'> | null;
  uMBase03?: DeserializedType<T, 'Edm.String'> | null;
  uMBase04?: DeserializedType<T, 'Edm.String'> | null;
  uMBase05?: DeserializedType<T, 'Edm.String'> | null;
  uMYear01?: DeserializedType<T, 'Edm.Int32'> | null;
  uMYear02?: DeserializedType<T, 'Edm.Int32'> | null;
  uMYear03?: DeserializedType<T, 'Edm.Int32'> | null;
  uMYear04?: DeserializedType<T, 'Edm.Int32'> | null;
  uMYear05?: DeserializedType<T, 'Edm.Int32'> | null;
  uMPerc01?: DeserializedType<T, 'Edm.Double'> | null;
  uMPerc02?: DeserializedType<T, 'Edm.Double'> | null;
  uMPerc03?: DeserializedType<T, 'Edm.Double'> | null;
  uMPerc04?: DeserializedType<T, 'Edm.Double'> | null;
  uMPerc05?: DeserializedType<T, 'Edm.Double'> | null;
  uDefName?: DeserializedType<T, 'Edm.String'> | null;
  uInclude: DeserializedType<T, 'Edm.String'>;
  uSalvPerc?: DeserializedType<T, 'Edm.Double'> | null;
  uDprRtMon?: DeserializedType<T, 'Edm.String'> | null;
  uPerDpRev?: DeserializedType<T, 'Edm.Double'> | null;
  uAcqPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  uSubPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  uRtPrTyp?: DeserializedType<T, 'Edm.String'> | null;
  uMaDecBa?: DeserializedType<T, 'Edm.String'> | null;
  uSpMeth?: DeserializedType<T, 'Edm.String'> | null;
  uSpConcP?: DeserializedType<T, 'Edm.Int32'> | null;
  uSpMaxPe?: DeserializedType<T, 'Edm.Double'> | null;
  uSpAdDpr?: DeserializedType<T, 'Edm.String'> | null;
  uSpAlDpr?: DeserializedType<T, 'Edm.String'> | null;
  uDeprTpId?: DeserializedType<T, 'Edm.String'> | null;
}
