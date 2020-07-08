import { UserDefaultGroupsRequestBuilder } from './UserDefaultGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserDefaultGroups" of service "SAPB1".
 */
export declare class UserDefaultGroups extends Entity implements UserDefaultGroupsType {
    /**
     * Technical entity name for UserDefaultGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserDefaultGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Sales Employee.
     * @nullable
     */
    salesEmployee?: number;
    /**
     * B Pfor Invoice Payment.
     * @nullable
     */
    bPforInvoicePayment?: string;
    /**
     * Cash Account.
     * @nullable
     */
    cashAccount?: string;
    /**
     * Checking Acct.
     * @nullable
     */
    checkingAcct?: string;
    /**
     * Windows Color.
     * @nullable
     */
    windowsColor?: number;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Printing Header.
     * @nullable
     */
    printingHeader?: string;
    /**
     * Phone Number 1.
     * @nullable
     */
    phoneNumber1?: string;
    /**
     * Phone Number 2.
     * @nullable
     */
    phoneNumber2?: string;
    /**
     * Fax Number.
     * @nullable
     */
    faxNumber?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Addressin Foreign Language.
     * @nullable
     */
    addressinForeignLanguage?: string;
    /**
     * Printing Header In Foreign Langu.
     * @nullable
     */
    printingHeaderInForeignLangu?: string;
    /**
     * Phone Number 1 Foreign Lang.
     * @nullable
     */
    phoneNumber1ForeignLang?: string;
    /**
     * Phone Number 2 Foreign Lang.
     * @nullable
     */
    phoneNumber2ForeignLang?: string;
    /**
     * Fax Number Foreign Lang.
     * @nullable
     */
    faxNumberForeignLang?: string;
    /**
     * Default Tax Code.
     * @nullable
     */
    defaultTaxCode?: string;
    /**
     * Additional Id Number.
     * @nullable
     */
    additionalIdNumber?: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse2: Warehouses;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCode: SalesTaxCodes;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances `UserDefaultGroups`.
     * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
     */
    static builder(): EntityBuilderType<UserDefaultGroups, UserDefaultGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserDefaultGroups` entity type.
     * @returns A `UserDefaultGroups` request builder.
     */
    static requestBuilder(): UserDefaultGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserDefaultGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
     */
    static customField(fieldName: string): CustomField<UserDefaultGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Warehouses, WarehousesType } from './Warehouses';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Countries, CountriesType } from './Countries';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { Users, UsersType } from './Users';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface UserDefaultGroupsType {
    code?: string;
    name?: string;
    warehouse?: string;
    salesEmployee?: number;
    bPforInvoicePayment?: string;
    cashAccount?: string;
    checkingAcct?: string;
    windowsColor?: number;
    address?: string;
    country?: string;
    printingHeader?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    faxNumber?: string;
    eMail?: string;
    addressinForeignLanguage?: string;
    printingHeaderInForeignLangu?: string;
    phoneNumber1ForeignLang?: string;
    phoneNumber2ForeignLang?: string;
    faxNumberForeignLang?: string;
    defaultTaxCode?: string;
    additionalIdNumber?: string;
    userSignature?: number;
    bplid?: number;
    warehouse2: WarehousesType;
    salesPerson: SalesPersonsType;
    businessPartner: BusinessPartnersType;
    country2: CountriesType;
    salesTaxCode: SalesTaxCodesType;
    user: UsersType;
    businessPlace: BusinessPlacesType;
}
export interface UserDefaultGroupsTypeForceMandatory {
    code: string;
    name: string;
    warehouse: string;
    salesEmployee: number;
    bPforInvoicePayment: string;
    cashAccount: string;
    checkingAcct: string;
    windowsColor: number;
    address: string;
    country: string;
    printingHeader: string;
    phoneNumber1: string;
    phoneNumber2: string;
    faxNumber: string;
    eMail: string;
    addressinForeignLanguage: string;
    printingHeaderInForeignLangu: string;
    phoneNumber1ForeignLang: string;
    phoneNumber2ForeignLang: string;
    faxNumberForeignLang: string;
    defaultTaxCode: string;
    additionalIdNumber: string;
    userSignature: number;
    bplid: number;
    warehouse2: WarehousesType;
    salesPerson: SalesPersonsType;
    businessPartner: BusinessPartnersType;
    country2: CountriesType;
    salesTaxCode: SalesTaxCodesType;
    user: UsersType;
    businessPlace: BusinessPlacesType;
}
export declare namespace UserDefaultGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE: NumberField<UserDefaultGroups>;
    /**
     * Static representation of the [[bPforInvoicePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const B_PFOR_INVOICE_PAYMENT: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_ACCOUNT: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[checkingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECKING_ACCT: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[windowsColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WINDOWS_COLOR: NumberField<UserDefaultGroups>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[printingHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTING_HEADER: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[phoneNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_1: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[phoneNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_2: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_MAIL: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[addressinForeignLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESSIN_FOREIGN_LANGUAGE: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[printingHeaderInForeignLangu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTING_HEADER_IN_FOREIGN_LANGU: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[phoneNumber1ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_1_FOREIGN_LANG: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[phoneNumber2ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_2_FOREIGN_LANG: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[faxNumberForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER_FOREIGN_LANG: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[defaultTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TAX_CODE: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_ID_NUMBER: StringField<UserDefaultGroups>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<UserDefaultGroups>;
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<UserDefaultGroups>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_2: OneToOneLink<UserDefaultGroups, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<UserDefaultGroups, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<UserDefaultGroups, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<UserDefaultGroups, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODE: OneToOneLink<UserDefaultGroups, SalesTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<UserDefaultGroups, Users>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<UserDefaultGroups, BusinessPlaces>;
    /**
     * All fields of the UserDefaultGroups entity.
     */
    const _allFields: Array<StringField<UserDefaultGroups> | NumberField<UserDefaultGroups> | OneToOneLink<UserDefaultGroups, Warehouses> | OneToOneLink<UserDefaultGroups, SalesPersons> | OneToOneLink<UserDefaultGroups, BusinessPartners> | OneToOneLink<UserDefaultGroups, Countries> | OneToOneLink<UserDefaultGroups, SalesTaxCodes> | OneToOneLink<UserDefaultGroups, Users> | OneToOneLink<UserDefaultGroups, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserDefaultGroups>;
    /**
     * All key fields of the UserDefaultGroups entity.
     */
    const _keyFields: Array<Field<UserDefaultGroups>>;
    /**
     * Mapping of all key field names to the respective static field property UserDefaultGroups.
     */
    const _keys: {
        [keys: string]: Field<UserDefaultGroups>;
    };
}
//# sourceMappingURL=UserDefaultGroups.d.ts.map