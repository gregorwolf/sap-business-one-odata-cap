import { WithholdingTaxCodesRequestBuilder } from './WithholdingTaxCodesRequestBuilder';
import { Moment } from 'moment';
import { WithholdingTaxCodesLine } from './WithholdingTaxCodesLine';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';
import { WithholdingTypeEnum } from './WithholdingTypeEnum';
import { RoundingTypeEnum } from './RoundingTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ReturnTypeEnum } from './ReturnTypeEnum';
import { TdsTypeEnum } from './TdsTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WithholdingTaxCodes" of service "SAPB1".
 */
export declare class WithholdingTaxCodes extends EntityV4 implements WithholdingTaxCodesType {
    /**
     * Technical entity name for WithholdingTaxCodes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
    /**
     * Wt Name.
     * @nullable
     */
    wtName?: string;
    /**
     * Category.
     * @nullable
     */
    category?: WithholdingTaxCodeCategoryEnum;
    /**
     * Base Type.
     * @nullable
     */
    baseType?: WithholdingTaxCodeBaseTypeEnum;
    /**
     * Base Amount.
     * @nullable
     */
    baseAmount?: number;
    /**
     * Official Code.
     * @nullable
     */
    officialCode?: string;
    /**
     * Account.
     * @nullable
     */
    account?: string;
    /**
     * Withholding Type.
     * @nullable
     */
    withholdingType?: WithholdingTypeEnum;
    /**
     * Rounding Type.
     * @nullable
     */
    roundingType?: RoundingTypeEnum;
    /**
     * Section.
     * @nullable
     */
    section?: number;
    /**
     * Threshold.
     * @nullable
     */
    threshold?: number;
    /**
     * Surcharge.
     * @nullable
     */
    surcharge?: number;
    /**
     * Concessional.
     * @nullable
     */
    concessional?: BoYesNoEnum;
    /**
     * Assessee.
     * @nullable
     */
    assessee?: number;
    /**
     * Aptds Account.
     * @nullable
     */
    aptdsAccount?: string;
    /**
     * Ap Surcharge Account.
     * @nullable
     */
    apSurchargeAccount?: string;
    /**
     * Ap Cess Account.
     * @nullable
     */
    apCessAccount?: string;
    /**
     * Aphsc Account.
     * @nullable
     */
    aphscAccount?: string;
    /**
     * Apigst Account.
     * @nullable
     */
    apigstAccount?: string;
    /**
     * Apcgst Account.
     * @nullable
     */
    apcgstAccount?: string;
    /**
     * Apsgst Account.
     * @nullable
     */
    apsgstAccount?: string;
    /**
     * Aputgst Account.
     * @nullable
     */
    aputgstAccount?: string;
    /**
     * Ap Cess Gst Account.
     * @nullable
     */
    apCessGstAccount?: string;
    /**
     * Artds Account.
     * @nullable
     */
    artdsAccount?: string;
    /**
     * Ar Surcharge Account.
     * @nullable
     */
    arSurchargeAccount?: string;
    /**
     * Ar Cess Account.
     * @nullable
     */
    arCessAccount?: string;
    /**
     * Arhsc Account.
     * @nullable
     */
    arhscAccount?: string;
    /**
     * Arigst Account.
     * @nullable
     */
    arigstAccount?: string;
    /**
     * Arcgst Account.
     * @nullable
     */
    arcgstAccount?: string;
    /**
     * Arsgst Account.
     * @nullable
     */
    arsgstAccount?: string;
    /**
     * Arutgst Account.
     * @nullable
     */
    arutgstAccount?: string;
    /**
     * Ar Cess Gst Account.
     * @nullable
     */
    arCessGstAccount?: string;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Return Type.
     * @nullable
     */
    returnType?: ReturnTypeEnum;
    /**
     * Inactive.
     * @nullable
     */
    inactive?: BoYesNoEnum;
    /**
     * Cst Code Incoming Id.
     * @nullable
     */
    cstCodeIncomingId?: number;
    /**
     * Cst Code Outgoing Id.
     * @nullable
     */
    cstCodeOutgoingId?: number;
    /**
     * Nature Of Calculation Base Code.
     * @nullable
     */
    natureOfCalculationBaseCode?: string;
    /**
     * Type Id.
     * @nullable
     */
    typeId?: number;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Effective From.
     * @nullable
     */
    effectiveFrom?: Moment;
    /**
     * Minimum Taxable Amount.
     * @nullable
     */
    minimumTaxableAmount?: number;
    /**
     * Is Progressive Tax.
     * @nullable
     */
    isProgressiveTax?: BoYesNoEnum;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Tds Type.
     * @nullable
     */
    tdsType?: TdsTypeEnum;
    /**
     * Withholding Tax Codes Lines.
     * @nullable
     */
    withholdingTaxCodesLines?: WithholdingTaxCodesLine[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Sections]] entity.
     */
    section2: Sections;
    /**
     * One-to-one navigation property to the [[NatureOfAssessees]] entity.
     */
    natureOfAssessee: NatureOfAssessees;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
     */
    brazilStringIndexer: BrazilStringIndexers;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency2: Currencies;
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `WithholdingTaxCodes`.
     * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
     */
    static builder(): EntityBuilderType<WithholdingTaxCodes, WithholdingTaxCodesType>;
    /**
     * Returns a request builder to construct requests for operations on the `WithholdingTaxCodes` entity type.
     * @returns A `WithholdingTaxCodes` request builder.
     */
    static requestBuilder(): WithholdingTaxCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WithholdingTaxCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
     */
    static customField(fieldName: string): CustomFieldV4<WithholdingTaxCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Sections, SectionsType } from './Sections';
import { NatureOfAssessees, NatureOfAssesseesType } from './NatureOfAssessees';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { Currencies, CurrenciesType } from './Currencies';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface WithholdingTaxCodesType {
    wtCode?: string | null;
    wtName?: string | null;
    category?: WithholdingTaxCodeCategoryEnum | null;
    baseType?: WithholdingTaxCodeBaseTypeEnum | null;
    baseAmount?: number | null;
    officialCode?: string | null;
    account?: string | null;
    withholdingType?: WithholdingTypeEnum | null;
    roundingType?: RoundingTypeEnum | null;
    section?: number | null;
    threshold?: number | null;
    surcharge?: number | null;
    concessional?: BoYesNoEnum | null;
    assessee?: number | null;
    aptdsAccount?: string | null;
    apSurchargeAccount?: string | null;
    apCessAccount?: string | null;
    aphscAccount?: string | null;
    apigstAccount?: string | null;
    apcgstAccount?: string | null;
    apsgstAccount?: string | null;
    aputgstAccount?: string | null;
    apCessGstAccount?: string | null;
    artdsAccount?: string | null;
    arSurchargeAccount?: string | null;
    arCessAccount?: string | null;
    arhscAccount?: string | null;
    arigstAccount?: string | null;
    arcgstAccount?: string | null;
    arsgstAccount?: string | null;
    arutgstAccount?: string | null;
    arCessGstAccount?: string | null;
    location?: number | null;
    returnType?: ReturnTypeEnum | null;
    inactive?: BoYesNoEnum | null;
    cstCodeIncomingId?: number | null;
    cstCodeOutgoingId?: number | null;
    natureOfCalculationBaseCode?: string | null;
    typeId?: number | null;
    rate?: number | null;
    effectiveFrom?: Moment | null;
    minimumTaxableAmount?: number | null;
    isProgressiveTax?: BoYesNoEnum | null;
    currency?: string | null;
    tdsType?: TdsTypeEnum | null;
    withholdingTaxCodesLines?: WithholdingTaxCodesLine[] | null;
    vendorPayments: VendorPaymentsType[];
    businessPartners: BusinessPartnersType[];
    paymentDrafts: PaymentDraftsType[];
    chartOfAccount: ChartOfAccountsType;
    section2: SectionsType;
    natureOfAssessee: NatureOfAssesseesType;
    warehouseLocation: WarehouseLocationsType;
    brazilStringIndexer: BrazilStringIndexersType;
    currency2: CurrenciesType;
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace WithholdingTaxCodes {
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_CODE: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[wtName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NAME: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[baseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_TYPE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[officialCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_CODE: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[account]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[withholdingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TYPE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[roundingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_TYPE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[section]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[threshold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THRESHOLD: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[surcharge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SURCHARGE: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[concessional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCESSIONAL: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[assessee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSEE: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[aptdsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APTDS_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apSurchargeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AP_SURCHARGE_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apCessAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AP_CESS_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[aphscAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APHSC_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apigstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APIGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apcgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APCGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apsgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APSGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[aputgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APUTGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[apCessGstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AP_CESS_GST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[artdsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARTDS_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arSurchargeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AR_SURCHARGE_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arCessAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AR_CESS_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arhscAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARHSC_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arigstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARIGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arcgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARCGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arsgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARSGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arutgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARUTGST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[arCessGstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AR_CESS_GST_ACCOUNT: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[returnType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_TYPE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[cstCodeIncomingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CST_CODE_INCOMING_ID: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[cstCodeOutgoingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CST_CODE_OUTGOING_ID: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[natureOfCalculationBaseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATURE_OF_CALCULATION_BASE_CODE: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[typeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_ID: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_FROM: DateField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[minimumTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_TAXABLE_AMOUNT: NumberField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[isProgressiveTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PROGRESSIVE_TAX: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[tdsType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TDS_TYPE: EnumField<WithholdingTaxCodes>;
    /**
     * Static representation of the [[withholdingTaxCodesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES_LINES: CollectionField<WithholdingTaxCodes, WithholdingTaxCodesLine>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<WithholdingTaxCodes, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<WithholdingTaxCodes, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<WithholdingTaxCodes, PaymentDrafts>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<WithholdingTaxCodes, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[section2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_2: OneToOneLink<WithholdingTaxCodes, Sections>;
    /**
     * Static representation of the one-to-one navigation property [[natureOfAssessee]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATURE_OF_ASSESSEE: OneToOneLink<WithholdingTaxCodes, NatureOfAssessees>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<WithholdingTaxCodes, WarehouseLocations>;
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_STRING_INDEXER: OneToOneLink<WithholdingTaxCodes, BrazilStringIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_2: OneToOneLink<WithholdingTaxCodes, Currencies>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<WithholdingTaxCodes, IncomingPayments>;
    /**
     * All fields of the WithholdingTaxCodes entity.
     */
    const _allFields: Array<StringField<WithholdingTaxCodes> | EnumField<WithholdingTaxCodes> | NumberField<WithholdingTaxCodes> | DateField<WithholdingTaxCodes> | CollectionField<WithholdingTaxCodes, WithholdingTaxCodesLine> | OneToManyLink<WithholdingTaxCodes, VendorPayments> | OneToManyLink<WithholdingTaxCodes, BusinessPartners> | OneToManyLink<WithholdingTaxCodes, PaymentDrafts> | OneToOneLink<WithholdingTaxCodes, ChartOfAccounts> | OneToOneLink<WithholdingTaxCodes, Sections> | OneToOneLink<WithholdingTaxCodes, NatureOfAssessees> | OneToOneLink<WithholdingTaxCodes, WarehouseLocations> | OneToOneLink<WithholdingTaxCodes, BrazilStringIndexers> | OneToOneLink<WithholdingTaxCodes, Currencies> | OneToManyLink<WithholdingTaxCodes, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WithholdingTaxCodes>;
    /**
     * All key fields of the WithholdingTaxCodes entity.
     */
    const _keyFields: Array<Field<WithholdingTaxCodes>>;
    /**
     * Mapping of all key field names to the respective static field property WithholdingTaxCodes.
     */
    const _keys: {
        [keys: string]: Field<WithholdingTaxCodes>;
    };
}
//# sourceMappingURL=WithholdingTaxCodes.d.ts.map