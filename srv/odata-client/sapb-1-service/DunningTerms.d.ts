import { DunningTermsRequestBuilder } from './DunningTermsRequestBuilder';
import { DunningTermLine } from './DunningTermLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "DunningTerms" of service "SAPB1".
 */
export declare class DunningTerms extends Entity implements DunningTermsType {
    /**
     * Technical entity name for DunningTerms.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DunningTerms.
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
     * Days In Year.
     * @nullable
     */
    daysInYear?: number;
    /**
     * Days In Month.
     * @nullable
     */
    daysInMonth?: number;
    /**
     * Yearly Interest Rate.
     * @nullable
     */
    yearlyInterestRate?: number;
    /**
     * Letter Fee.
     * @nullable
     */
    letterFee?: number;
    /**
     * Letter Fee Currency.
     * @nullable
     */
    letterFeeCurrency?: string;
    /**
     * Minimum Balance.
     * @nullable
     */
    minimumBalance?: number;
    /**
     * Minimum Balance Currency.
     * @nullable
     */
    minimumBalanceCurrency?: string;
    /**
     * Interest Account.
     * @nullable
     */
    interestAccount?: string;
    /**
     * Fee Account.
     * @nullable
     */
    feeAccount?: string;
    /**
     * Dunning Term Lines.
     * @nullable
     */
    dunningTermLines?: DunningTermLine[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * Returns an entity builder to construct instances `DunningTerms`.
     * @returns A builder that constructs instances of entity type `DunningTerms`.
     */
    static builder(): EntityBuilderType<DunningTerms, DunningTermsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DunningTerms` entity type.
     * @returns A `DunningTerms` request builder.
     */
    static requestBuilder(): DunningTermsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningTerms`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DunningTerms`.
     */
    static customField(fieldName: string): CustomField<DunningTerms>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
export interface DunningTermsType {
    code?: string;
    name?: string;
    daysInYear?: number;
    daysInMonth?: number;
    yearlyInterestRate?: number;
    letterFee?: number;
    letterFeeCurrency?: string;
    minimumBalance?: number;
    minimumBalanceCurrency?: string;
    interestAccount?: string;
    feeAccount?: string;
    dunningTermLines?: DunningTermLine[];
    businessPartners: BusinessPartnersType[];
    chartOfAccount: ChartOfAccountsType;
}
export interface DunningTermsTypeForceMandatory {
    code: string;
    name: string;
    daysInYear: number;
    daysInMonth: number;
    yearlyInterestRate: number;
    letterFee: number;
    letterFeeCurrency: string;
    minimumBalance: number;
    minimumBalanceCurrency: string;
    interestAccount: string;
    feeAccount: string;
    dunningTermLines: DunningTermLine[];
    businessPartners: BusinessPartnersType[];
    chartOfAccount: ChartOfAccountsType;
}
export declare namespace DunningTerms {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<DunningTerms>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<DunningTerms>;
    /**
     * Static representation of the [[daysInYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAYS_IN_YEAR: NumberField<DunningTerms>;
    /**
     * Static representation of the [[daysInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAYS_IN_MONTH: NumberField<DunningTerms>;
    /**
     * Static representation of the [[yearlyInterestRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const YEARLY_INTEREST_RATE: NumberField<DunningTerms>;
    /**
     * Static representation of the [[letterFee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LETTER_FEE: NumberField<DunningTerms>;
    /**
     * Static representation of the [[letterFeeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LETTER_FEE_CURRENCY: StringField<DunningTerms>;
    /**
     * Static representation of the [[minimumBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_BALANCE: NumberField<DunningTerms>;
    /**
     * Static representation of the [[minimumBalanceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_BALANCE_CURRENCY: StringField<DunningTerms>;
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_ACCOUNT: StringField<DunningTerms>;
    /**
     * Static representation of the [[feeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEE_ACCOUNT: StringField<DunningTerms>;
    /**
     * Static representation of the [[dunningTermLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_TERM_LINES: CollectionField<DunningTerms>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<DunningTerms, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<DunningTerms, ChartOfAccounts>;
    /**
     * All fields of the DunningTerms entity.
     */
    const _allFields: Array<StringField<DunningTerms> | NumberField<DunningTerms> | CollectionField<DunningTerms> | OneToManyLink<DunningTerms, BusinessPartners> | OneToOneLink<DunningTerms, ChartOfAccounts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DunningTerms>;
    /**
     * All key fields of the DunningTerms entity.
     */
    const _keyFields: Array<Field<DunningTerms>>;
    /**
     * Mapping of all key field names to the respective static field property DunningTerms.
     */
    const _keys: {
        [keys: string]: Field<DunningTerms>;
    };
}
//# sourceMappingURL=DunningTerms.d.ts.map