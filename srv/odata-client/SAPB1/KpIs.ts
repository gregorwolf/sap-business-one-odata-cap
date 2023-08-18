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
import { KpiItemLine } from './KpiItemLine';
import type { KpIsApi } from './KpIsApi';
import { KpiTypeEnum } from './KpiTypeEnum';

/**
 * This class represents the entity "KPIs" of service "SAPB1".
 */
export class KpIs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KpIsType<T>
{
  /**
   * Technical entity name for KpIs.
   */
  static _entityName = 'KPIs';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the KpIs entity
   */
  static _keys = ['KPICode'];
  /**
   * Kpi Code.
   */
  kpiCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kpi Type.
   * @nullable
   */
  kpiType?: KpiTypeEnum | null;
  /**
   * Number Of Columns.
   * @nullable
   */
  numberOfColumns?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Kpi Item Lines.
   * @nullable
   */
  kpiItemLines?: KpiItemLine<T>[] | null;

  constructor(readonly _entityApi: KpIsApi<T>) {
    super(_entityApi);
  }
}

export interface KpIsType<T extends DeSerializers = DefaultDeSerializers> {
  kpiCode: DeserializedType<T, 'Edm.String'>;
  kpiName?: DeserializedType<T, 'Edm.String'> | null;
  kpiType?: KpiTypeEnum | null;
  numberOfColumns?: DeserializedType<T, 'Edm.Int32'> | null;
  kpiItemLines?: KpiItemLine<T>[] | null;
}
