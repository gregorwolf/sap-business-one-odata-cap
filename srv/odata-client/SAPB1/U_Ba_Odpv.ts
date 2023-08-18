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
import type { U_Ba_OdpvApi } from './U_Ba_OdpvApi';

/**
 * This class represents the entity "U_BA_ODPV" of service "SAPB1".
 */
export class U_Ba_Odpv<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OdpvType<T>
{
  /**
   * Technical entity name for U_Ba_Odpv.
   */
  static _entityName = 'U_BA_ODPV';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Odpv entity
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
   * U Period.
   * @nullable
   */
  uPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Date To.
   * @nullable
   */
  uDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Or Dp Plan.
   * @nullable
   */
  uOrDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Or Dp Act.
   * @nullable
   */
  uOrDpAct?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Plan.
   * @nullable
   */
  uSpDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Act.
   * @nullable
   */
  uSpDpAct?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Key.
   * @nullable
   */
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Prft Cntr.
   * @nullable
   */
  uPrftCntr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Project.
   * @nullable
   */
  uProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Date From.
   * @nullable
   */
  uDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Or Dp Ard.
   * @nullable
   */
  uOrDpArd?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Sp Dp Ard.
   * @nullable
   */
  uSpDpArd?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: U_Ba_OdpvApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OdpvType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uFisYear?: DeserializedType<T, 'Edm.String'> | null;
  uDprArId?: DeserializedType<T, 'Edm.Int32'> | null;
  uPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  uDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uOrDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  uOrDpAct?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpPlan?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpAct?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpKey?: DeserializedType<T, 'Edm.String'> | null;
  uPrftCntr?: DeserializedType<T, 'Edm.String'> | null;
  uProject?: DeserializedType<T, 'Edm.String'> | null;
  uDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uOrDpArd?: DeserializedType<T, 'Edm.Double'> | null;
  uSpDpArd?: DeserializedType<T, 'Edm.Double'> | null;
}
