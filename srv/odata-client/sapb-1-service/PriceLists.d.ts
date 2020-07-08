import { PriceListsRequestBuilder } from './PriceListsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "PriceLists" of service "SAPB1".
 */
export declare class PriceLists extends Entity implements PriceListsType {
    /**
     * Technical entity name for PriceLists.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PriceLists.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Base Price List.
     * @nullable
     */
    basePriceList?: number;
    /**
     * Factor.
     * @nullable
     */
    factor?: number;
    /**
     * Price List No.
     * @nullable
     */
    priceListNo?: number;
    /**
     * Price List Name.
     * @nullable
     */
    priceListName?: string;
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
     * Default Prime Currency.
     * @nullable
     */
    defaultPrimeCurrency?: string;
    /**
     * Default Additional Currency 1.
     * @nullable
     */
    defaultAdditionalCurrency1?: string;
    /**
     * Default Additional Currency 2.
     * @nullable
     */
    defaultAdditionalCurrency2?: string;
    /**
     * Fixed Amount.
     * @nullable
     */
    fixedAmount?: number;
    /**
     * One-to-many navigation property to the [[SpecialPrices]] entity.
     */
    specialPrices: SpecialPrices[];
    /**
     * One-to-many navigation property to the [[WorkOrders]] entity.
     */
    workOrders: WorkOrders[];
    /**
     * One-to-many navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsTypes: PaymentTermsTypes[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[ProductTrees]] entity.
     */
    productTrees: ProductTrees[];
    /**
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
    /**
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * Returns an entity builder to construct instances `PriceLists`.
     * @returns A builder that constructs instances of entity type `PriceLists`.
     */
    static builder(): EntityBuilderType<PriceLists, PriceListsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PriceLists` entity type.
     * @returns A `PriceLists` request builder.
     */
    static requestBuilder(): PriceListsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PriceLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PriceLists`.
     */
    static customField(fieldName: string): CustomField<PriceLists>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { StockTransfers, StockTransfersType } from './StockTransfers';
export interface PriceListsType {
    basePriceList?: number;
    factor?: number;
    priceListNo?: number;
    priceListName?: string;
    validFrom?: Moment;
    validTo?: Moment;
    defaultPrimeCurrency?: string;
    defaultAdditionalCurrency1?: string;
    defaultAdditionalCurrency2?: string;
    fixedAmount?: number;
    specialPrices: SpecialPricesType[];
    workOrders: WorkOrdersType[];
    paymentTermsTypes: PaymentTermsTypesType[];
    businessPartners: BusinessPartnersType[];
    productTrees: ProductTreesType[];
    blanketAgreements: BlanketAgreementsType[];
    stockTransfers: StockTransfersType[];
}
export interface PriceListsTypeForceMandatory {
    basePriceList: number;
    factor: number;
    priceListNo: number;
    priceListName: string;
    validFrom: Moment;
    validTo: Moment;
    defaultPrimeCurrency: string;
    defaultAdditionalCurrency1: string;
    defaultAdditionalCurrency2: string;
    fixedAmount: number;
    specialPrices: SpecialPricesType[];
    workOrders: WorkOrdersType[];
    paymentTermsTypes: PaymentTermsTypesType[];
    businessPartners: BusinessPartnersType[];
    productTrees: ProductTreesType[];
    blanketAgreements: BlanketAgreementsType[];
    stockTransfers: StockTransfersType[];
}
export declare namespace PriceLists {
    /**
     * Static representation of the [[basePriceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_PRICE_LIST: NumberField<PriceLists>;
    /**
     * Static representation of the [[factor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTOR: NumberField<PriceLists>;
    /**
     * Static representation of the [[priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NO: NumberField<PriceLists>;
    /**
     * Static representation of the [[priceListName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NAME: StringField<PriceLists>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<PriceLists>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<PriceLists>;
    /**
     * Static representation of the [[defaultPrimeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PRIME_CURRENCY: StringField<PriceLists>;
    /**
     * Static representation of the [[defaultAdditionalCurrency1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_ADDITIONAL_CURRENCY_1: StringField<PriceLists>;
    /**
     * Static representation of the [[defaultAdditionalCurrency2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_ADDITIONAL_CURRENCY_2: StringField<PriceLists>;
    /**
     * Static representation of the [[fixedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIXED_AMOUNT: NumberField<PriceLists>;
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_PRICES: OneToManyLink<PriceLists, SpecialPrices>;
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDERS: OneToManyLink<PriceLists, WorkOrders>;
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPES: OneToManyLink<PriceLists, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<PriceLists, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREES: OneToManyLink<PriceLists, ProductTrees>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<PriceLists, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<PriceLists, StockTransfers>;
    /**
     * All fields of the PriceLists entity.
     */
    const _allFields: Array<NumberField<PriceLists> | StringField<PriceLists> | DateField<PriceLists> | OneToManyLink<PriceLists, SpecialPrices> | OneToManyLink<PriceLists, WorkOrders> | OneToManyLink<PriceLists, PaymentTermsTypes> | OneToManyLink<PriceLists, BusinessPartners> | OneToManyLink<PriceLists, ProductTrees> | OneToManyLink<PriceLists, BlanketAgreements> | OneToManyLink<PriceLists, StockTransfers>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PriceLists>;
    /**
     * All key fields of the PriceLists entity.
     */
    const _keyFields: Array<Field<PriceLists>>;
    /**
     * Mapping of all key field names to the respective static field property PriceLists.
     */
    const _keys: {
        [keys: string]: Field<PriceLists>;
    };
}
//# sourceMappingURL=PriceLists.d.ts.map