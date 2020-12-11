import { WarehouseLocationsRequestBuilder } from './WarehouseLocationsRequestBuilder';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WarehouseLocations" of service "SAPB1".
 */
export declare class WarehouseLocations extends EntityV4 implements WarehouseLocationsType {
    /**
     * Technical entity name for WarehouseLocations.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Lstvat Number.
     * @nullable
     */
    lstvatNumber?: string;
    /**
     * Cst Number.
     * @nullable
     */
    cstNumber?: string;
    /**
     * Exemption Number.
     * @nullable
     */
    exemptionNumber?: string;
    /**
     * Tan Number.
     * @nullable
     */
    tanNumber?: string;
    /**
     * Service Tax Number.
     * @nullable
     */
    serviceTaxNumber?: string;
    /**
     * Assessee Type.
     * @nullable
     */
    assesseeType?: string;
    /**
     * Company Type.
     * @nullable
     */
    companyType?: string;
    /**
     * Nature Of Business.
     * @nullable
     */
    natureOfBusiness?: string;
    /**
     * Tin Number.
     * @nullable
     */
    tinNumber?: string;
    /**
     * Registration Type.
     * @nullable
     */
    registrationType?: string;
    /**
     * Ecc Number.
     * @nullable
     */
    eccNumber?: string;
    /**
     * Ce Range.
     * @nullable
     */
    ceRange?: string;
    /**
     * Ce Division.
     * @nullable
     */
    ceDivision?: string;
    /**
     * Ce Commissionerate.
     * @nullable
     */
    ceCommissionerate?: string;
    /**
     * Manufacturer Code.
     * @nullable
     */
    manufacturerCode?: string;
    /**
     * Jurisdiction.
     * @nullable
     */
    jurisdiction?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Pan Number.
     * @nullable
     */
    panNumber?: string;
    /**
     * Ce Register Number.
     * @nullable
     */
    ceRegisterNumber?: string;
    /**
     * Building Floor Room.
     * @nullable
     */
    buildingFloorRoom?: string;
    /**
     * Gstin.
     * @nullable
     */
    gstin?: string;
    /**
     * Gst Type.
     * @nullable
     */
    gstType?: BoGstRegnTypeEnum;
    /**
     * Gsttds.
     * @nullable
     */
    gsttds?: string;
    /**
     * Gstisd.
     * @nullable
     */
    gstisd?: string;
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[JournalEntries]] entity.
     */
    journalEntries: JournalEntries[];
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-many navigation property to the [[CertificateSeries]] entity.
     */
    certificateSeries: CertificateSeries[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCodes: WithholdingTaxCodes[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `WarehouseLocations`.
     * @returns A builder that constructs instances of entity type `WarehouseLocations`.
     */
    static builder(): EntityBuilderType<WarehouseLocations, WarehouseLocationsType>;
    /**
     * Returns a request builder to construct requests for operations on the `WarehouseLocations` entity type.
     * @returns A `WarehouseLocations` request builder.
     */
    static requestBuilder(): WarehouseLocationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WarehouseLocations`.
     */
    static customField(fieldName: string): CustomFieldV4<WarehouseLocations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Warehouses, WarehousesType } from './Warehouses';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { Items, ItemsType } from './Items';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Countries, CountriesType } from './Countries';
import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface WarehouseLocationsType {
    code?: number | null;
    name?: string | null;
    lstvatNumber?: string | null;
    cstNumber?: string | null;
    exemptionNumber?: string | null;
    tanNumber?: string | null;
    serviceTaxNumber?: string | null;
    assesseeType?: string | null;
    companyType?: string | null;
    natureOfBusiness?: string | null;
    tinNumber?: string | null;
    registrationType?: string | null;
    eccNumber?: string | null;
    ceRange?: string | null;
    ceDivision?: string | null;
    ceCommissionerate?: string | null;
    manufacturerCode?: string | null;
    jurisdiction?: string | null;
    street?: string | null;
    block?: string | null;
    zipCode?: string | null;
    city?: string | null;
    county?: string | null;
    country?: string | null;
    state?: string | null;
    panNumber?: string | null;
    ceRegisterNumber?: string | null;
    buildingFloorRoom?: string | null;
    gstin?: string | null;
    gstType?: BoGstRegnTypeEnum | null;
    gsttds?: string | null;
    gstisd?: string | null;
    warehouses: WarehousesType[];
    vendorPayments: VendorPaymentsType[];
    items: ItemsType[];
    journalEntries: JournalEntriesType[];
    country2: CountriesType;
    certificateSeries: CertificateSeriesType[];
    paymentDrafts: PaymentDraftsType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace WarehouseLocations {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<WarehouseLocations>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[lstvatNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LSTVAT_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[cstNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CST_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[exemptionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[tanNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAN_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[serviceTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_TAX_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[assesseeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSEE_TYPE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[companyType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_TYPE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[natureOfBusiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATURE_OF_BUSINESS: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[tinNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIN_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[registrationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGISTRATION_TYPE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[eccNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ECC_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[ceRange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CE_RANGE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[ceDivision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CE_DIVISION: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[ceCommissionerate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CE_COMMISSIONERATE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[manufacturerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_CODE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[jurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JURISDICTION: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[panNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAN_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[ceRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CE_REGISTER_NUMBER: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING_FLOOR_ROOM: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[gstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GSTIN: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[gstType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GST_TYPE: EnumField<WarehouseLocations>;
    /**
     * Static representation of the [[gsttds]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GSTTDS: StringField<WarehouseLocations>;
    /**
     * Static representation of the [[gstisd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GSTISD: StringField<WarehouseLocations>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<WarehouseLocations, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<WarehouseLocations, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<WarehouseLocations, Items>;
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRIES: OneToManyLink<WarehouseLocations, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<WarehouseLocations, Countries>;
    /**
     * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATE_SERIES: OneToManyLink<WarehouseLocations, CertificateSeries>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<WarehouseLocations, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES: OneToManyLink<WarehouseLocations, WithholdingTaxCodes>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<WarehouseLocations, IncomingPayments>;
    /**
     * All fields of the WarehouseLocations entity.
     */
    const _allFields: Array<NumberField<WarehouseLocations> | StringField<WarehouseLocations> | EnumField<WarehouseLocations> | OneToManyLink<WarehouseLocations, Warehouses> | OneToManyLink<WarehouseLocations, VendorPayments> | OneToManyLink<WarehouseLocations, Items> | OneToManyLink<WarehouseLocations, JournalEntries> | OneToOneLink<WarehouseLocations, Countries> | OneToManyLink<WarehouseLocations, CertificateSeries> | OneToManyLink<WarehouseLocations, PaymentDrafts> | OneToManyLink<WarehouseLocations, WithholdingTaxCodes> | OneToManyLink<WarehouseLocations, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WarehouseLocations>;
    /**
     * All key fields of the WarehouseLocations entity.
     */
    const _keyFields: Array<Field<WarehouseLocations>>;
    /**
     * Mapping of all key field names to the respective static field property WarehouseLocations.
     */
    const _keys: {
        [keys: string]: Field<WarehouseLocations>;
    };
}
//# sourceMappingURL=WarehouseLocations.d.ts.map