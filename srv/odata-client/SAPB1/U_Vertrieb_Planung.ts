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
import type { U_Vertrieb_PlanungApi } from './U_Vertrieb_PlanungApi';

/**
 * This class represents the entity "U_VERTRIEB_PLANUNG" of service "SAPB1".
 */
export class U_Vertrieb_Planung<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Vertrieb_PlanungType<T>
{
  /**
   * Technical entity name for U_Vertrieb_Planung.
   */
  static _entityName = 'U_VERTRIEB_PLANUNG';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Vertrieb_Planung entity
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
   * U Jahr.
   */
  uJahr!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Territry Id.
   */
  uTerritryId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Verteilschluessel.
   */
  uVerteilschluessel!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Planwert.
   */
  uPlanwert!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Plan 1 Prozent.
   */
  uPlan1Prozent!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Plan 2 Prozent.
   */
  uPlan2Prozent!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Plan 3 Prozent.
   */
  uPlan3Prozent!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Oslp.
   * @nullable
   */
  uOslp?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: U_Vertrieb_PlanungApi<T>) {
    super(_entityApi);
  }
}

export interface U_Vertrieb_PlanungType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uJahr: DeserializedType<T, 'Edm.Int32'>;
  uTerritryId: DeserializedType<T, 'Edm.Int32'>;
  uVerteilschluessel: DeserializedType<T, 'Edm.Int32'>;
  uPlanwert: DeserializedType<T, 'Edm.Int32'>;
  uPlan1Prozent: DeserializedType<T, 'Edm.Int32'>;
  uPlan2Prozent: DeserializedType<T, 'Edm.Int32'>;
  uPlan3Prozent: DeserializedType<T, 'Edm.Int32'>;
  uOslp?: DeserializedType<T, 'Edm.Int32'> | null;
}
