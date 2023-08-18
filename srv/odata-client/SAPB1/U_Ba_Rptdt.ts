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
import type { U_Ba_RptdtApi } from './U_Ba_RptdtApi';

/**
 * This class represents the entity "U_BA_RPTDT" of service "SAPB1".
 */
export class U_Ba_Rptdt<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_RptdtType<T>
{
  /**
   * Technical entity name for U_Ba_Rptdt.
   */
  static _entityName = 'U_BA_RPTDT';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Rptdt entity
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
   * U Mx Row N.
   * @nullable
   */
  uMxRowN?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Asset N.
   * @nullable
   */
  uAssetN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Item N.
   * @nullable
   */
  uItemN?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Apch.
   * @nullable
   */
  uApch?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Acq D.
   * @nullable
   */
  uAcqD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Plan Ul.
   * @nullable
   */
  uPlanUl?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rem L.
   * @nullable
   */
  uRemL?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Dpr T.
   * @nullable
   */
  uDprT?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Apcst.
   * @nullable
   */
  uApcst?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Apc.
   * @nullable
   */
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Retm.
   * @nullable
   */
  uRetm?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Trsfer.
   * @nullable
   */
  uTrsfer?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Wrt Up.
   * @nullable
   */
  uWrtUp?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Acc Dpr.
   * @nullable
   */
  uAccDpr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Nbvst.
   * @nullable
   */
  uNbvst?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Dpr.
   * @nullable
   */
  uDpr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Apc En.
   * @nullable
   */
  uApcEn?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Nbv En.
   * @nullable
   */
  uNbvEn?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Level.
   * @nullable
   */
  uLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Line Type.
   * @nullable
   */
  uLineType?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Ba_RptdtApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_RptdtType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uMxRowN?: DeserializedType<T, 'Edm.Int32'> | null;
  uAssetN?: DeserializedType<T, 'Edm.String'> | null;
  uItemN?: DeserializedType<T, 'Edm.String'> | null;
  uApch?: DeserializedType<T, 'Edm.Double'> | null;
  uAcqD?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uPlanUl?: DeserializedType<T, 'Edm.Int32'> | null;
  uRemL?: DeserializedType<T, 'Edm.Int32'> | null;
  uDprT?: DeserializedType<T, 'Edm.String'> | null;
  uApcst?: DeserializedType<T, 'Edm.Double'> | null;
  uApc?: DeserializedType<T, 'Edm.Double'> | null;
  uRetm?: DeserializedType<T, 'Edm.Double'> | null;
  uTrsfer?: DeserializedType<T, 'Edm.Double'> | null;
  uWrtUp?: DeserializedType<T, 'Edm.Double'> | null;
  uAccDpr?: DeserializedType<T, 'Edm.Double'> | null;
  uNbvst?: DeserializedType<T, 'Edm.Double'> | null;
  uDpr?: DeserializedType<T, 'Edm.Double'> | null;
  uApcEn?: DeserializedType<T, 'Edm.Double'> | null;
  uNbvEn?: DeserializedType<T, 'Edm.Double'> | null;
  uLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  uLineType?: DeserializedType<T, 'Edm.Int32'> | null;
}
