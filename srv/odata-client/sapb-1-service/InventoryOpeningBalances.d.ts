import { InventoryOpeningBalancesRequestBuilder } from './InventoryOpeningBalancesRequestBuilder';
import { Moment } from 'moment';
import { InventoryOpeningBalanceLine } from './InventoryOpeningBalanceLine';
import { InventoryOpeningBalancePriceSourceEnum } from './InventoryOpeningBalancePriceSourceEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InventoryOpeningBalances" of service "SAPB1".
 */
export declare class InventoryOpeningBalances extends EntityV4 implements InventoryOpeningBalancesType {
    /**
     * Technical entity name for InventoryOpeningBalances.
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
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Document Date.
     * @nullable
     */
    documentDate?: Moment;
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
     * Reference 2.
     * @nullable
     */
    reference2?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Branch Id.
     * @nullable
     */
    branchId?: number;
    /**
     * Price Source.
     * @nullable
     */
    priceSource?: InventoryOpeningBalancePriceSourceEnum;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Journal Remark.
     * @nullable
     */
    journalRemark?: string;
    /**
     * Doc Object Code Ex.
     * @nullable
     */
    docObjectCodeEx?: string;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Financial Period.
     * @nullable
     */
    financialPeriod?: number;
    /**
     * Inventory Opening Balance Lines.
     * @nullable
     */
    inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine[];
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances of `InventoryOpeningBalances`.
     * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
     */
    static builder(): EntityBuilderType<InventoryOpeningBalances, InventoryOpeningBalancesType>;
    /**
     * Returns a request builder to construct requests for operations on the `InventoryOpeningBalances` entity type.
     * @returns A `InventoryOpeningBalances` request builder.
     */
    static requestBuilder(): InventoryOpeningBalancesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryOpeningBalances`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
     */
    static customField(fieldName: string): CustomFieldV4<InventoryOpeningBalances>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface InventoryOpeningBalancesType {
    documentEntry?: number | null;
    postingDate?: Moment | null;
    documentDate?: Moment | null;
    documentNumber?: number | null;
    series?: number | null;
    reference2?: string | null;
    remarks?: string | null;
    branchId?: number | null;
    priceSource?: InventoryOpeningBalancePriceSourceEnum | null;
    priceList?: number | null;
    journalRemark?: string | null;
    docObjectCodeEx?: string | null;
    periodIndicator?: string | null;
    financialPeriod?: number | null;
    inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine[] | null;
    businessPlace: BusinessPlacesType;
}
export declare namespace InventoryOpeningBalances {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ENTRY: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DATE: DateField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NUMBER: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_ID: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[priceSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_SOURCE: EnumField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[journalRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARK: StringField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE_EX: StringField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<InventoryOpeningBalances>;
    /**
     * Static representation of the [[inventoryOpeningBalanceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_OPENING_BALANCE_LINES: CollectionField<InventoryOpeningBalances, InventoryOpeningBalanceLine>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<InventoryOpeningBalances, BusinessPlaces>;
    /**
     * All fields of the InventoryOpeningBalances entity.
     */
    const _allFields: Array<NumberField<InventoryOpeningBalances> | DateField<InventoryOpeningBalances> | StringField<InventoryOpeningBalances> | EnumField<InventoryOpeningBalances> | CollectionField<InventoryOpeningBalances, InventoryOpeningBalanceLine> | OneToOneLink<InventoryOpeningBalances, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InventoryOpeningBalances>;
    /**
     * All key fields of the InventoryOpeningBalances entity.
     */
    const _keyFields: Array<Field<InventoryOpeningBalances>>;
    /**
     * Mapping of all key field names to the respective static field property InventoryOpeningBalances.
     */
    const _keys: {
        [keys: string]: Field<InventoryOpeningBalances>;
    };
}
//# sourceMappingURL=InventoryOpeningBalances.d.ts.map