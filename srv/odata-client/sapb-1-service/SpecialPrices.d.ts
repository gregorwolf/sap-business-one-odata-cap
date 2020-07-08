import { SpecialPricesRequestBuilder } from './SpecialPricesRequestBuilder';
import { Moment } from 'moment';
import { SpecialPriceDataArea } from './SpecialPriceDataArea';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "SpecialPrices" of service "SAPB1".
 */
export declare class SpecialPrices extends Entity implements SpecialPricesType {
    /**
     * Technical entity name for SpecialPrices.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpecialPrices.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Price.
     * @nullable
     */
    price?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Discount Percent.
     * @nullable
     */
    discountPercent?: number;
    /**
     * Price List Num.
     * @nullable
     */
    priceListNum?: number;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Special Price Data Areas.
     * @nullable
     */
    specialPriceDataAreas?: SpecialPriceDataArea[];
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList: PriceLists;
    /**
     * Returns an entity builder to construct instances `SpecialPrices`.
     * @returns A builder that constructs instances of entity type `SpecialPrices`.
     */
    static builder(): EntityBuilderType<SpecialPrices, SpecialPricesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpecialPrices` entity type.
     * @returns A `SpecialPrices` request builder.
     */
    static requestBuilder(): SpecialPricesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpecialPrices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpecialPrices`.
     */
    static customField(fieldName: string): CustomField<SpecialPrices>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PriceLists, PriceListsType } from './PriceLists';
export interface SpecialPricesType {
    itemCode?: string;
    cardCode?: string;
    price?: number;
    currency?: string;
    discountPercent?: number;
    priceListNum?: number;
    validFrom?: Moment;
    validTo?: Moment;
    specialPriceDataAreas?: SpecialPriceDataArea[];
    item: ItemsType;
    businessPartner: BusinessPartnersType;
    priceList: PriceListsType;
}
export interface SpecialPricesTypeForceMandatory {
    itemCode: string;
    cardCode: string;
    price: number;
    currency: string;
    discountPercent: number;
    priceListNum: number;
    validFrom: Moment;
    validTo: Moment;
    specialPriceDataAreas: SpecialPriceDataArea[];
    item: ItemsType;
    businessPartner: BusinessPartnersType;
    priceList: PriceListsType;
}
export declare namespace SpecialPrices {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<SpecialPrices>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<SpecialPrices>;
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE: NumberField<SpecialPrices>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<SpecialPrices>;
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_PERCENT: NumberField<SpecialPrices>;
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NUM: NumberField<SpecialPrices>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<SpecialPrices>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<SpecialPrices>;
    /**
     * Static representation of the [[specialPriceDataAreas]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_PRICE_DATA_AREAS: CollectionField<SpecialPrices>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<SpecialPrices, Items>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<SpecialPrices, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: OneToOneLink<SpecialPrices, PriceLists>;
    /**
     * All fields of the SpecialPrices entity.
     */
    const _allFields: Array<StringField<SpecialPrices> | NumberField<SpecialPrices> | DateField<SpecialPrices> | CollectionField<SpecialPrices> | OneToOneLink<SpecialPrices, Items> | OneToOneLink<SpecialPrices, BusinessPartners> | OneToOneLink<SpecialPrices, PriceLists>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpecialPrices>;
    /**
     * All key fields of the SpecialPrices entity.
     */
    const _keyFields: Array<Field<SpecialPrices>>;
    /**
     * Mapping of all key field names to the respective static field property SpecialPrices.
     */
    const _keys: {
        [keys: string]: Field<SpecialPrices>;
    };
}
//# sourceMappingURL=SpecialPrices.d.ts.map