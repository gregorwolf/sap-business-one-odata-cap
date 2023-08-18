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
import type { InventoryCyclesApi } from './InventoryCyclesApi';
import { BoFrequency } from './BoFrequency';
import { BoYesNoEnum } from './BoYesNoEnum';
import { RepeatOptionEnum } from './RepeatOptionEnum';
import { RecurrenceSequenceEnum } from './RecurrenceSequenceEnum';
import { RecurrenceDayOfWeekEnum } from './RecurrenceDayOfWeekEnum';
import { EndTypeEnum } from './EndTypeEnum';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "InventoryCycles" of service "SAPB1".
 */
export class InventoryCycles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventoryCyclesType<T>
{
  /**
   * Technical entity name for InventoryCycles.
   */
  static _entityName = 'InventoryCycles';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCycles entity
   */
  static _keys = ['CycleCode'];
  /**
   * Cycle Code.
   */
  cycleCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cycle Name.
   * @nullable
   */
  cycleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frequency.
   * @nullable
   */
  frequency?: BoFrequency | null;
  /**
   * Day.
   * @nullable
   */
  day?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Hour.
   * @nullable
   */
  hour?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Interval.
   * @nullable
   */
  interval?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: BoYesNoEnum | null;
  /**
   * Monday.
   * @nullable
   */
  monday?: BoYesNoEnum | null;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: BoYesNoEnum | null;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: BoYesNoEnum | null;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: BoYesNoEnum | null;
  /**
   * Friday.
   * @nullable
   */
  friday?: BoYesNoEnum | null;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: BoYesNoEnum | null;
  /**
   * Repeat Option.
   * @nullable
   */
  repeatOption?: RepeatOptionEnum | null;
  /**
   * Recurrence Sequence Specifier.
   * @nullable
   */
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
  /**
   * Recurrence Day In Month.
   * @nullable
   */
  recurrenceDayInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Month.
   * @nullable
   */
  recurrenceMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Day Of Week.
   * @nullable
   */
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
  /**
   * End Type.
   * @nullable
   */
  endType?: EndTypeEnum | null;
  /**
   * Max Occurrence.
   * @nullable
   */
  maxOccurrence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series End Date.
   * @nullable
   */
  seriesEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-many navigation property to the {@link ItemGroups} entity.
   */
  itemGroups!: ItemGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: InventoryCyclesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryCyclesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cycleCode: DeserializedType<T, 'Edm.Int32'>;
  cycleName?: DeserializedType<T, 'Edm.String'> | null;
  frequency?: BoFrequency | null;
  day?: DeserializedType<T, 'Edm.Int32'> | null;
  hour?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  nextCountingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  interval?: DeserializedType<T, 'Edm.Int32'> | null;
  sunday?: BoYesNoEnum | null;
  monday?: BoYesNoEnum | null;
  tuesday?: BoYesNoEnum | null;
  wednesday?: BoYesNoEnum | null;
  thursday?: BoYesNoEnum | null;
  friday?: BoYesNoEnum | null;
  saturday?: BoYesNoEnum | null;
  repeatOption?: RepeatOptionEnum | null;
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
  recurrenceDayInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrenceMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
  endType?: EndTypeEnum | null;
  maxOccurrence?: DeserializedType<T, 'Edm.Int32'> | null;
  seriesEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  itemGroups: ItemGroupsType<T>[];
  items: ItemsType<T>[];
}
