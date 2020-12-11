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
export declare class InventoryCycles extends EntityV4 implements InventoryCyclesType {
    /**
     * Technical entity name for InventoryCycles.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    itemGroups: ItemGroups[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances of `InventoryCycles`.
     * @returns A builder that constructs instances of entity type `InventoryCycles`.
     */
    static builder(): EntityBuilderType<InventoryCycles, InventoryCyclesType>;
    /**
     * Returns a request builder to construct requests for operations on the `InventoryCycles` entity type.
     * @returns A `InventoryCycles` request builder.
     */
    static requestBuilder(): InventoryCyclesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCycles`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryCycles`.
     */
    static customField(fieldName: string): CustomFieldV4<InventoryCycles>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace InventoryCycles {
    /**
     * Static representation of the [[cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CYCLE_CODE: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[cycleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CYCLE_NAME: StringField<InventoryCycles>;
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[hour]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUR: TimeField<InventoryCycles>;
    /**
     * Static representation of the [[nextCountingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_COUNTING_DATE: DateField<InventoryCycles>;
    /**
     * Static representation of the [[interval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVAL: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[sunday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[monday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[tuesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[wednesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[thursday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[friday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[saturday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[repeatOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPEAT_OPTION: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[recurrenceSequenceSpecifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_SEQUENCE_SPECIFIER: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[recurrenceDayInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_DAY_IN_MONTH: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[recurrenceMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_MONTH: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[recurrenceDayOfWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_DAY_OF_WEEK: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[endType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TYPE: EnumField<InventoryCycles>;
    /**
     * Static representation of the [[maxOccurrence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_OCCURRENCE: NumberField<InventoryCycles>;
    /**
     * Static representation of the [[seriesEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_END_DATE: DateField<InventoryCycles>;
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToManyLink<InventoryCycles, ItemGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<InventoryCycles, Items>;
    /**
     * All fields of the InventoryCycles entity.
     */
    const _allFields: Array<NumberField<InventoryCycles> | StringField<InventoryCycles> | EnumField<InventoryCycles> | TimeField<InventoryCycles> | DateField<InventoryCycles> | OneToManyLink<InventoryCycles, ItemGroups> | OneToManyLink<InventoryCycles, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InventoryCycles>;
    /**
     * All key fields of the InventoryCycles entity.
     */
    const _keyFields: Array<Field<InventoryCycles>>;
    /**
     * Mapping of all key field names to the respective static field property InventoryCycles.
     */
    const _keys: {
        [keys: string]: Field<InventoryCycles>;
    };
}
//# sourceMappingURL=InventoryCycles.d.ts.map