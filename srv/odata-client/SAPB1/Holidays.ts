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
import { HolidayDate } from './HolidayDate';
import type { HolidaysApi } from './HolidaysApi';
import { BoWeekEnum } from './BoWeekEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoWeekNoRuleEnum } from './BoWeekNoRuleEnum';

/**
 * This class represents the entity "Holidays" of service "SAPB1".
 */
export class Holidays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HolidaysType<T>
{
  /**
   * Technical entity name for Holidays.
   */
  static _entityName = 'Holidays';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Holidays entity
   */
  static _keys = ['HolidayCode'];
  /**
   * Holiday Code.
   */
  holidayCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Weekend From.
   * @nullable
   */
  weekendFrom?: BoWeekEnum | null;
  /**
   * Weekend To.
   * @nullable
   */
  weekendTo?: BoWeekEnum | null;
  /**
   * Valid For One Year Only.
   * @nullable
   */
  validForOneYearOnly?: BoYesNoEnum | null;
  /**
   * Set Weekends As Work Days.
   * @nullable
   */
  setWeekendsAsWorkDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Week No Rule.
   * @nullable
   */
  weekNoRule?: BoWeekNoRuleEnum | null;
  /**
   * Holiday Dates.
   * @nullable
   */
  holidayDates?: HolidayDate<T>[] | null;

  constructor(readonly _entityApi: HolidaysApi<T>) {
    super(_entityApi);
  }
}

export interface HolidaysType<T extends DeSerializers = DefaultDeSerializers> {
  holidayCode: DeserializedType<T, 'Edm.String'>;
  weekendFrom?: BoWeekEnum | null;
  weekendTo?: BoWeekEnum | null;
  validForOneYearOnly?: BoYesNoEnum | null;
  setWeekendsAsWorkDays?: DeserializedType<T, 'Edm.String'> | null;
  weekNoRule?: BoWeekNoRuleEnum | null;
  holidayDates?: HolidayDate<T>[] | null;
}
