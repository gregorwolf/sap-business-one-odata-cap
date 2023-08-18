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
import type { FinancialYearsApi } from './FinancialYearsApi';
import { TcsAccumulationBaseEnum } from './TcsAccumulationBaseEnum';

/**
 * This class represents the entity "FinancialYears" of service "SAPB1".
 */
export class FinancialYears<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FinancialYearsType<T>
{
  /**
   * Technical entity name for FinancialYears.
   */
  static _entityName = 'FinancialYears';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FinancialYears entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Assess Year.
   * @nullable
   */
  assessYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Accumulation Base.
   * @nullable
   */
  tcsAccumulationBase?: TcsAccumulationBaseEnum | null;

  constructor(readonly _entityApi: FinancialYearsApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialYearsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  assessYear?: DeserializedType<T, 'Edm.String'> | null;
  tcsAccumulationBase?: TcsAccumulationBaseEnum | null;
}
