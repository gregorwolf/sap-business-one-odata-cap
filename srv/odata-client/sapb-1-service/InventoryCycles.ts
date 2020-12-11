/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCyclesRequestBuilder } from './InventoryCyclesRequestBuilder';
import { Moment } from 'moment';
import { BoFrequency } from './BoFrequency';
import { BoYesNoEnum } from './BoYesNoEnum';
import { RepeatOptionEnum } from './RepeatOptionEnum';
import { RecurrenceSequenceEnum } from './RecurrenceSequenceEnum';
import { RecurrenceDayOfWeekEnum } from './RecurrenceDayOfWeekEnum';
import { EndTypeEnum } from './EndTypeEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InventoryCycles" of service "SAPB1".
 */
export class InventoryCycles extends EntityV4 implements InventoryCyclesType {
  /**
   * Technical entity name for InventoryCycles.
   */
  static _entityName = 'InventoryCycles';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
  /**
   * Cycle Name.
   * @nullable
   */
  cycleName?: string;
  /**
   * Frequency.
   * @nullable
   */
  frequency?: BoFrequency;
  /**
   * Day.
   * @nullable
   */
  day?: number;
  /**
   * Hour.
   * @nullable
   */
  hour?: Time;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: Moment;
  /**
   * Interval.
   * @nullable
   */
  interval?: number;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: BoYesNoEnum;
  /**
   * Monday.
   * @nullable
   */
  monday?: BoYesNoEnum;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: BoYesNoEnum;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: BoYesNoEnum;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: BoYesNoEnum;
  /**
   * Friday.
   * @nullable
   */
  friday?: BoYesNoEnum;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: BoYesNoEnum;
  /**
   * Repeat Option.
   * @nullable
   */
  repeatOption?: RepeatOptionEnum;
  /**
   * Recurrence Sequence Specifier.
   * @nullable
   */
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum;
  /**
   * Recurrence Day In Month.
   * @nullable
   */
  recurrenceDayInMonth?: number;
  /**
   * Recurrence Month.
   * @nullable
   */
  recurrenceMonth?: number;
  /**
   * Recurrence Day Of Week.
   * @nullable
   */
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum;
  /**
   * End Type.
   * @nullable
   */
  endType?: EndTypeEnum;
  /**
   * Max Occurrence.
   * @nullable
   */
  maxOccurrence?: number;
  /**
   * Series End Date.
   * @nullable
   */
  seriesEndDate?: Moment;
  /**
   * One-to-many navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `InventoryCycles`.
   * @returns A builder that constructs instances of entity type `InventoryCycles`.
   */
  static builder(): EntityBuilderType<InventoryCycles, InventoryCyclesType> {
    return EntityV4.entityBuilder(InventoryCycles);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InventoryCycles` entity type.
   * @returns A `InventoryCycles` request builder.
   */
  static requestBuilder(): InventoryCyclesRequestBuilder {
    return new InventoryCyclesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCycles`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InventoryCycles`.
   */
  static customField(fieldName: string): CustomFieldV4<InventoryCycles> {
    return EntityV4.customFieldSelector(fieldName, InventoryCycles);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';

export interface InventoryCyclesType {
  cycleCode?: number | null;
  cycleName?: string | null;
  frequency?: BoFrequency | null;
  day?: number | null;
  hour?: Time | null;
  nextCountingDate?: Moment | null;
  interval?: number | null;
  sunday?: BoYesNoEnum | null;
  monday?: BoYesNoEnum | null;
  tuesday?: BoYesNoEnum | null;
  wednesday?: BoYesNoEnum | null;
  thursday?: BoYesNoEnum | null;
  friday?: BoYesNoEnum | null;
  saturday?: BoYesNoEnum | null;
  repeatOption?: RepeatOptionEnum | null;
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
  recurrenceDayInMonth?: number | null;
  recurrenceMonth?: number | null;
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
  endType?: EndTypeEnum | null;
  maxOccurrence?: number | null;
  seriesEndDate?: Moment | null;
  itemGroups: ItemGroupsType[];
  items: ItemsType[];
}

export namespace InventoryCycles {
  /**
   * Static representation of the [[cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CYCLE_CODE: NumberField<InventoryCycles> = new NumberField('CycleCode', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[cycleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CYCLE_NAME: StringField<InventoryCycles> = new StringField('CycleName', InventoryCycles, 'Edm.String');
  /**
   * Static representation of the [[frequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY: EnumField<InventoryCycles> = new EnumField('Frequency', InventoryCycles);
  /**
   * Static representation of the [[day]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY: NumberField<InventoryCycles> = new NumberField('Day', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[hour]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUR: TimeField<InventoryCycles> = new TimeField('Hour', InventoryCycles, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[nextCountingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_COUNTING_DATE: DateField<InventoryCycles> = new DateField('NextCountingDate', InventoryCycles, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[interval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVAL: NumberField<InventoryCycles> = new NumberField('Interval', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[sunday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY: EnumField<InventoryCycles> = new EnumField('Sunday', InventoryCycles);
  /**
   * Static representation of the [[monday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY: EnumField<InventoryCycles> = new EnumField('Monday', InventoryCycles);
  /**
   * Static representation of the [[tuesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY: EnumField<InventoryCycles> = new EnumField('Tuesday', InventoryCycles);
  /**
   * Static representation of the [[wednesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY: EnumField<InventoryCycles> = new EnumField('Wednesday', InventoryCycles);
  /**
   * Static representation of the [[thursday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY: EnumField<InventoryCycles> = new EnumField('Thursday', InventoryCycles);
  /**
   * Static representation of the [[friday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY: EnumField<InventoryCycles> = new EnumField('Friday', InventoryCycles);
  /**
   * Static representation of the [[saturday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY: EnumField<InventoryCycles> = new EnumField('Saturday', InventoryCycles);
  /**
   * Static representation of the [[repeatOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPEAT_OPTION: EnumField<InventoryCycles> = new EnumField('RepeatOption', InventoryCycles);
  /**
   * Static representation of the [[recurrenceSequenceSpecifier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_SEQUENCE_SPECIFIER: EnumField<InventoryCycles> = new EnumField('RecurrenceSequenceSpecifier', InventoryCycles);
  /**
   * Static representation of the [[recurrenceDayInMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_DAY_IN_MONTH: NumberField<InventoryCycles> = new NumberField('RecurrenceDayInMonth', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[recurrenceMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_MONTH: NumberField<InventoryCycles> = new NumberField('RecurrenceMonth', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[recurrenceDayOfWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_DAY_OF_WEEK: EnumField<InventoryCycles> = new EnumField('RecurrenceDayOfWeek', InventoryCycles);
  /**
   * Static representation of the [[endType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TYPE: EnumField<InventoryCycles> = new EnumField('endType', InventoryCycles);
  /**
   * Static representation of the [[maxOccurrence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_OCCURRENCE: NumberField<InventoryCycles> = new NumberField('MaxOccurrence', InventoryCycles, 'Edm.Int32');
  /**
   * Static representation of the [[seriesEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_END_DATE: DateField<InventoryCycles> = new DateField('SeriesEndDate', InventoryCycles, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToManyLink<InventoryCycles, ItemGroups> = new OneToManyLink('ItemGroups', InventoryCycles, ItemGroups);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<InventoryCycles, Items> = new OneToManyLink('Items', InventoryCycles, Items);
  /**
   * All fields of the InventoryCycles entity.
   */
  export const _allFields: Array<NumberField<InventoryCycles> | StringField<InventoryCycles> | EnumField<InventoryCycles> | TimeField<InventoryCycles> | DateField<InventoryCycles> | OneToManyLink<InventoryCycles, ItemGroups> | OneToManyLink<InventoryCycles, Items>> = [
    InventoryCycles.CYCLE_CODE,
    InventoryCycles.CYCLE_NAME,
    InventoryCycles.FREQUENCY,
    InventoryCycles.DAY,
    InventoryCycles.HOUR,
    InventoryCycles.NEXT_COUNTING_DATE,
    InventoryCycles.INTERVAL,
    InventoryCycles.SUNDAY,
    InventoryCycles.MONDAY,
    InventoryCycles.TUESDAY,
    InventoryCycles.WEDNESDAY,
    InventoryCycles.THURSDAY,
    InventoryCycles.FRIDAY,
    InventoryCycles.SATURDAY,
    InventoryCycles.REPEAT_OPTION,
    InventoryCycles.RECURRENCE_SEQUENCE_SPECIFIER,
    InventoryCycles.RECURRENCE_DAY_IN_MONTH,
    InventoryCycles.RECURRENCE_MONTH,
    InventoryCycles.RECURRENCE_DAY_OF_WEEK,
    InventoryCycles.END_TYPE,
    InventoryCycles.MAX_OCCURRENCE,
    InventoryCycles.SERIES_END_DATE,
    InventoryCycles.ITEM_GROUPS,
    InventoryCycles.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InventoryCycles> = new AllFields('*', InventoryCycles);
  /**
   * All key fields of the InventoryCycles entity.
   */
  export const _keyFields: Array<Field<InventoryCycles>> = [InventoryCycles.CYCLE_CODE];
  /**
   * Mapping of all key field names to the respective static field property InventoryCycles.
   */
  export const _keys: { [keys: string]: Field<InventoryCycles> } = InventoryCycles._keyFields.reduce((acc: { [keys: string]: Field<InventoryCycles> }, field: Field<InventoryCycles>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
