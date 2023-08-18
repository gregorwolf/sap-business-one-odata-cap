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
import type { ClosingDateProcedureApi } from './ClosingDateProcedureApi';
import { BoClosingDateProcedureBaseDateEnum } from './BoClosingDateProcedureBaseDateEnum';
import { BoClosingDateProcedureDueMonthEnum } from './BoClosingDateProcedureDueMonthEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "ClosingDateProcedure" of service "SAPB1".
 */
export class ClosingDateProcedure<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClosingDateProcedureType<T>
{
  /**
   * Technical entity name for ClosingDateProcedure.
   */
  static _entityName = 'ClosingDateProcedure';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ClosingDateProcedure entity
   */
  static _keys = ['ClosingDateNum'];
  /**
   * Closing Date Num.
   */
  closingDateNum!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closing Date Code.
   * @nullable
   */
  closingDateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Baseline Date.
   * @nullable
   */
  baselineDate?: BoClosingDateProcedureBaseDateEnum | null;
  /**
   * Due Month.
   * @nullable
   */
  dueMonth?: BoClosingDateProcedureDueMonthEnum | null;
  /**
   * Extra Month.
   * @nullable
   */
  extraMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Extra Day.
   * @nullable
   */
  extraDay?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: ClosingDateProcedureApi<T>) {
    super(_entityApi);
  }
}

export interface ClosingDateProcedureType<
  T extends DeSerializers = DefaultDeSerializers
> {
  closingDateNum: DeserializedType<T, 'Edm.Int32'>;
  closingDateCode?: DeserializedType<T, 'Edm.String'> | null;
  baselineDate?: BoClosingDateProcedureBaseDateEnum | null;
  dueMonth?: BoClosingDateProcedureDueMonthEnum | null;
  extraMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  extraDay?: DeserializedType<T, 'Edm.Int32'> | null;
  businessPartners: BusinessPartnersType<T>[];
}
