import { InventoryCyclesRequestBuilder } from './InventoryCyclesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "InventoryCycles" of service "SAPB1".
 */
export declare class InventoryCycles extends Entity implements InventoryCyclesType {
    /**
     * Technical entity name for InventoryCycles.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryCycles.
     */
    static _serviceName: string;
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
    itemGroups: ItemGroups[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances `InventoryCycles`.
     * @returns A builder that constructs instances of entity type `InventoryCycles`.
     */
    static builder(): EntityBuilderType<InventoryCycles, InventoryCyclesTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<InventoryCycles>;
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
    const _allFields: Array<NumberField<InventoryCycles> | StringField<InventoryCycles> | TimeField<InventoryCycles> | DateField<InventoryCycles> | OneToManyLink<InventoryCycles, ItemGroups> | OneToManyLink<InventoryCycles, Items>>;
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