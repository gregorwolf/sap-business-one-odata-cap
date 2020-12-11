import { InventoryCountingsRequestBuilder } from './InventoryCountingsRequestBuilder';
import { Moment } from 'moment';
import { TeamCounter } from './TeamCounter';
import { IndividualCounter } from './IndividualCounter';
import { InventoryCountingLine } from './InventoryCountingLine';
import { CounterTypeEnum } from './CounterTypeEnum';
import { CountingDocumentStatusEnum } from './CountingDocumentStatusEnum';
import { CountingTypeEnum } from './CountingTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InventoryCountings" of service "SAPB1".
 */
export declare class InventoryCountings extends EntityV4 implements InventoryCountingsType {
    /**
     * Technical entity name for InventoryCountings.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Count Date.
     * @nullable
     */
    countDate?: Moment;
    /**
     * Count Time.
     * @nullable
     */
    countTime?: Time;
    /**
     * Single Counter Type.
     * @nullable
     */
    singleCounterType?: CounterTypeEnum;
    /**
     * Single Counter Id.
     * @nullable
     */
    singleCounterId?: number;
    /**
     * Document Status.
     * @nullable
     */
    documentStatus?: CountingDocumentStatusEnum;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Reference 2.
     * @nullable
     */
    reference2?: string;
    /**
     * Branch Id.
     * @nullable
     */
    branchId?: number;
    /**
     * Doc Object Code Ex.
     * @nullable
     */
    docObjectCodeEx?: string;
    /**
     * Financial Period.
     * @nullable
     */
    financialPeriod?: number;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Counting Type.
     * @nullable
     */
    countingType?: CountingTypeEnum;
    /**
     * Team Counters.
     * @nullable
     */
    teamCounters?: TeamCounter[];
    /**
     * Individual Counters.
     * @nullable
     */
    individualCounters?: IndividualCounter[];
    /**
     * Inventory Counting Lines.
     * @nullable
     */
    inventoryCountingLines?: InventoryCountingLine[];
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances of `InventoryCountings`.
     * @returns A builder that constructs instances of entity type `InventoryCountings`.
     */
    static builder(): EntityBuilderType<InventoryCountings, InventoryCountingsType>;
    /**
     * Returns a request builder to construct requests for operations on the `InventoryCountings` entity type.
     * @returns A `InventoryCountings` request builder.
     */
    static requestBuilder(): InventoryCountingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCountings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryCountings`.
     */
    static customField(fieldName: string): CustomFieldV4<InventoryCountings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface InventoryCountingsType {
    documentEntry?: number | null;
    documentNumber?: number | null;
    series?: number | null;
    countDate?: Moment | null;
    countTime?: Time | null;
    singleCounterType?: CounterTypeEnum | null;
    singleCounterId?: number | null;
    documentStatus?: CountingDocumentStatusEnum | null;
    remarks?: string | null;
    reference2?: string | null;
    branchId?: number | null;
    docObjectCodeEx?: string | null;
    financialPeriod?: number | null;
    periodIndicator?: string | null;
    countingType?: CountingTypeEnum | null;
    teamCounters?: TeamCounter[] | null;
    individualCounters?: IndividualCounter[] | null;
    inventoryCountingLines?: InventoryCountingLine[] | null;
    businessPlace: BusinessPlacesType;
}
export declare namespace InventoryCountings {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ENTRY: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NUMBER: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[countDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNT_DATE: DateField<InventoryCountings>;
    /**
     * Static representation of the [[countTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNT_TIME: TimeField<InventoryCountings>;
    /**
     * Static representation of the [[singleCounterType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_COUNTER_TYPE: EnumField<InventoryCountings>;
    /**
     * Static representation of the [[singleCounterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_COUNTER_ID: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_STATUS: EnumField<InventoryCountings>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<InventoryCountings>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<InventoryCountings>;
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_ID: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE_EX: StringField<InventoryCountings>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<InventoryCountings>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<InventoryCountings>;
    /**
     * Static representation of the [[countingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTING_TYPE: EnumField<InventoryCountings>;
    /**
     * Static representation of the [[teamCounters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_COUNTERS: CollectionField<InventoryCountings, TeamCounter>;
    /**
     * Static representation of the [[individualCounters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDIVIDUAL_COUNTERS: CollectionField<InventoryCountings, IndividualCounter>;
    /**
     * Static representation of the [[inventoryCountingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_COUNTING_LINES: CollectionField<InventoryCountings, InventoryCountingLine>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<InventoryCountings, BusinessPlaces>;
    /**
     * All fields of the InventoryCountings entity.
     */
    const _allFields: Array<NumberField<InventoryCountings> | DateField<InventoryCountings> | TimeField<InventoryCountings> | EnumField<InventoryCountings> | StringField<InventoryCountings> | CollectionField<InventoryCountings, TeamCounter> | CollectionField<InventoryCountings, IndividualCounter> | CollectionField<InventoryCountings, InventoryCountingLine> | OneToOneLink<InventoryCountings, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InventoryCountings>;
    /**
     * All key fields of the InventoryCountings entity.
     */
    const _keyFields: Array<Field<InventoryCountings>>;
    /**
     * Mapping of all key field names to the respective static field property InventoryCountings.
     */
    const _keys: {
        [keys: string]: Field<InventoryCountings>;
    };
}
//# sourceMappingURL=InventoryCountings.d.ts.map