import { InventoryPostingsRequestBuilder } from './InventoryPostingsRequestBuilder';
import { Moment } from 'moment';
import { InventoryPostingLine } from './InventoryPostingLine';
import { InventoryPostingPriceSourceEnum } from './InventoryPostingPriceSourceEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InventoryPostings" of service "SAPB1".
 */
export declare class InventoryPostings extends EntityV4 implements InventoryPostingsType {
    /**
     * Technical entity name for InventoryPostings.
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
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
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
     * Price Source.
     * @nullable
     */
    priceSource?: InventoryPostingPriceSourceEnum;
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
     * Inventory Posting Lines.
     * @nullable
     */
    inventoryPostingLines?: InventoryPostingLine[];
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances of `InventoryPostings`.
     * @returns A builder that constructs instances of entity type `InventoryPostings`.
     */
    static builder(): EntityBuilderType<InventoryPostings, InventoryPostingsType>;
    /**
     * Returns a request builder to construct requests for operations on the `InventoryPostings` entity type.
     * @returns A `InventoryPostings` request builder.
     */
    static requestBuilder(): InventoryPostingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryPostings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryPostings`.
     */
    static customField(fieldName: string): CustomFieldV4<InventoryPostings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface InventoryPostingsType {
    documentEntry?: number | null;
    documentNumber?: number | null;
    series?: number | null;
    postingDate?: Moment | null;
    countDate?: Moment | null;
    countTime?: Time | null;
    remarks?: string | null;
    reference2?: string | null;
    branchId?: number | null;
    priceSource?: InventoryPostingPriceSourceEnum | null;
    priceList?: number | null;
    journalRemark?: string | null;
    docObjectCodeEx?: string | null;
    financialPeriod?: number | null;
    periodIndicator?: string | null;
    inventoryPostingLines?: InventoryPostingLine[] | null;
    businessPlace: BusinessPlacesType;
}
export declare namespace InventoryPostings {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ENTRY: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NUMBER: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<InventoryPostings>;
    /**
     * Static representation of the [[countDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNT_DATE: DateField<InventoryPostings>;
    /**
     * Static representation of the [[countTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNT_TIME: TimeField<InventoryPostings>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<InventoryPostings>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<InventoryPostings>;
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_ID: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[priceSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_SOURCE: EnumField<InventoryPostings>;
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[journalRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARK: StringField<InventoryPostings>;
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE_EX: StringField<InventoryPostings>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<InventoryPostings>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<InventoryPostings>;
    /**
     * Static representation of the [[inventoryPostingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_POSTING_LINES: CollectionField<InventoryPostings, InventoryPostingLine>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<InventoryPostings, BusinessPlaces>;
    /**
     * All fields of the InventoryPostings entity.
     */
    const _allFields: Array<NumberField<InventoryPostings> | DateField<InventoryPostings> | TimeField<InventoryPostings> | StringField<InventoryPostings> | EnumField<InventoryPostings> | CollectionField<InventoryPostings, InventoryPostingLine> | OneToOneLink<InventoryPostings, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InventoryPostings>;
    /**
     * All key fields of the InventoryPostings entity.
     */
    const _keyFields: Array<Field<InventoryPostings>>;
    /**
     * Mapping of all key field names to the respective static field property InventoryPostings.
     */
    const _keys: {
        [keys: string]: Field<InventoryPostings>;
    };
}
//# sourceMappingURL=InventoryPostings.d.ts.map