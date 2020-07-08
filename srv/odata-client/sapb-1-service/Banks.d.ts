import { BanksRequestBuilder } from './BanksRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Banks" of service "SAPB1".
 */
export declare class Banks extends Entity implements BanksType {
    /**
     * Technical entity name for Banks.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Banks.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Bank Name.
     * @nullable
     */
    bankName?: string;
    /**
     * Accountfor Outgoing Checks.
     * @nullable
     */
    accountforOutgoingChecks?: string;
    /**
     * Branchfor Outgoing Checks.
     * @nullable
     */
    branchforOutgoingChecks?: string;
    /**
     * Next Check Number.
     * @nullable
     */
    nextCheckNumber?: number;
    /**
     * Swift No.
     * @nullable
     */
    swiftNo?: string;
    /**
     * Iban.
     * @nullable
     */
    iban?: string;
    /**
     * Country Code.
     * @nullable
     */
    countryCode?: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Default Bank Account Key.
     * @nullable
     */
    defaultBankAccountKey?: number;
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-many navigation property to the [[HouseBankAccounts]] entity.
     */
    houseBankAccounts: HouseBankAccounts[];
    /**
     * Returns an entity builder to construct instances `Banks`.
     * @returns A builder that constructs instances of entity type `Banks`.
     */
    static builder(): EntityBuilderType<Banks, BanksTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Banks` entity type.
     * @returns A `Banks` request builder.
     */
    static requestBuilder(): BanksRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Banks`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Banks`.
     */
    static customField(fieldName: string): CustomField<Banks>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Countries, CountriesType } from './Countries';
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
export interface BanksType {
    bankCode?: string;
    bankName?: string;
    accountforOutgoingChecks?: string;
    branchforOutgoingChecks?: string;
    nextCheckNumber?: number;
    swiftNo?: string;
    iban?: string;
    countryCode?: string;
    absoluteEntry?: number;
    defaultBankAccountKey?: number;
    employeesInfo: EmployeesInfoType[];
    country: CountriesType;
    houseBankAccounts: HouseBankAccountsType[];
}
export interface BanksTypeForceMandatory {
    bankCode: string;
    bankName: string;
    accountforOutgoingChecks: string;
    branchforOutgoingChecks: string;
    nextCheckNumber: number;
    swiftNo: string;
    iban: string;
    countryCode: string;
    absoluteEntry: number;
    defaultBankAccountKey: number;
    employeesInfo: EmployeesInfoType[];
    country: CountriesType;
    houseBankAccounts: HouseBankAccountsType[];
}
export declare namespace Banks {
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<Banks>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: StringField<Banks>;
    /**
     * Static representation of the [[accountforOutgoingChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTFOR_OUTGOING_CHECKS: StringField<Banks>;
    /**
     * Static representation of the [[branchforOutgoingChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCHFOR_OUTGOING_CHECKS: StringField<Banks>;
    /**
     * Static representation of the [[nextCheckNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_CHECK_NUMBER: NumberField<Banks>;
    /**
     * Static representation of the [[swiftNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SWIFT_NO: StringField<Banks>;
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN: StringField<Banks>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<Banks>;
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<Banks>;
    /**
     * Static representation of the [[defaultBankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BANK_ACCOUNT_KEY: NumberField<Banks>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<Banks, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<Banks, Countries>;
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNTS: OneToManyLink<Banks, HouseBankAccounts>;
    /**
     * All fields of the Banks entity.
     */
    const _allFields: Array<StringField<Banks> | NumberField<Banks> | OneToManyLink<Banks, EmployeesInfo> | OneToOneLink<Banks, Countries> | OneToManyLink<Banks, HouseBankAccounts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Banks>;
    /**
     * All key fields of the Banks entity.
     */
    const _keyFields: Array<Field<Banks>>;
    /**
     * Mapping of all key field names to the respective static field property Banks.
     */
    const _keys: {
        [keys: string]: Field<Banks>;
    };
}
//# sourceMappingURL=Banks.d.ts.map