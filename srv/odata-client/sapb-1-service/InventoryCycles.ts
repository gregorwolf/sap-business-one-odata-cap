/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCyclesRequestBuilder } from './InventoryCyclesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "InventoryCycles" of service "SAPB1".
 */
export class InventoryCycles extends Entity implements InventoryCyclesType {
  /**
   * Technical entity name for InventoryCycles.
   */
  static _entityName = 'InventoryCycles';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InventoryCycles.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `InventoryCycles`.
   * @returns A builder that constructs instances of entity type `InventoryCycles`.
   */
  static builder(): EntityBuilderType<InventoryCycles, InventoryCyclesTypeForceMandatory> {
    return Entity.entityBuilder(InventoryCycles);
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
  static customField(fieldName: string): CustomField<InventoryCycles> {
    return Entity.customFieldSelector(fieldName, InventoryCycles);
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
  cycleCode?: number;
  cycleName?: string;
  day?: number;
  hour?: Time;
  nextCountingDate?: Moment;
  interval?: number;
  recurrenceDayInMonth?: number;
  recurrenceMonth?: number;
  maxOccurrence?: number;
  seriesEndDate?: Moment;
  itemGroups: ItemGroupsType[];
  items: ItemsType[];
}

export interface InventoryCyclesTypeForceMandatory {
  cycleCode: number;
  cycleName: string;
  day: number;
  hour: Time;
  nextCountingDate: Moment;
  interval: number;
  recurrenceDayInMonth: number;
  recurrenceMonth: number;
  maxOccurrence: number;
  seriesEndDate: Moment;
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
  export const _allFields: Array<NumberField<InventoryCycles> | StringField<InventoryCycles> | TimeField<InventoryCycles> | DateField<InventoryCycles> | OneToManyLink<InventoryCycles, ItemGroups> | OneToManyLink<InventoryCycles, Items>> = [
    InventoryCycles.CYCLE_CODE,
    InventoryCycles.CYCLE_NAME,
    InventoryCycles.DAY,
    InventoryCycles.HOUR,
    InventoryCycles.NEXT_COUNTING_DATE,
    InventoryCycles.INTERVAL,
    InventoryCycles.RECURRENCE_DAY_IN_MONTH,
    InventoryCycles.RECURRENCE_MONTH,
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
