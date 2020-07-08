import { SalesTaxAuthoritiesRequestBuilder } from './SalesTaxAuthoritiesRequestBuilder';
import { TaxDefinition } from './TaxDefinition';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "SalesTaxAuthorities" of service "SAPB1".
 */
export declare class SalesTaxAuthorities extends Entity implements SalesTaxAuthoritiesType {
    /**
     * Technical entity name for SalesTaxAuthorities.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesTaxAuthorities.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Use Tax Account.
     * @nullable
     */
    useTaxAccount?: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Type.
     * @nullable
     */
    type?: number;
    /**
     * A Or R Tax Account.
     * @nullable
     */
    aOrRTaxAccount?: string;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * A Or P Tax Account.
     * @nullable
     */
    aOrPTaxAccount?: string;
    /**
     * Non Deductible Precent.
     * @nullable
     */
    nonDeductiblePrecent?: number;
    /**
     * Non Deductible Account.
     * @nullable
     */
    nonDeductibleAccount?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Deferred Tax Account.
     * @nullable
     */
    deferredTaxAccount?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Min Taxable Amount.
     * @nullable
     */
    minTaxableAmount?: number;
    /**
     * Max Taxable Amount.
     * @nullable
     */
    maxTaxableAmount?: number;
    /**
     * Flat Tax Amount.
     * @nullable
     */
    flatTaxAmount?: number;
    /**
     * Ap Exp Account.
     * @nullable
     */
    apExpAccount?: string;
    /**
     * Ar Exp Account.
     * @nullable
     */
    arExpAccount?: string;
    /**
     * Text Code.
     * @nullable
     */
    textCode?: number;
    /**
     * Tax Definitions.
     * @nullable
     */
    taxDefinitions?: TaxDefinition[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[SalesTaxAuthoritiesTypes]] entity.
     */
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypes;
    /**
     * Returns an entity builder to construct instances `SalesTaxAuthorities`.
     * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
     */
    static builder(): EntityBuilderType<SalesTaxAuthorities, SalesTaxAuthoritiesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxAuthorities` entity type.
     * @returns A `SalesTaxAuthorities` request builder.
     */
    static requestBuilder(): SalesTaxAuthoritiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthorities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
     */
    static customField(fieldName: string): CustomField<SalesTaxAuthorities>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Users, UsersType } from './Users';
import { SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType } from './SalesTaxAuthoritiesTypes';
export interface SalesTaxAuthoritiesType {
    useTaxAccount?: string;
    userSignature?: number;
    type?: number;
    aOrRTaxAccount?: string;
    rate?: number;
    aOrPTaxAccount?: string;
    nonDeductiblePrecent?: number;
    nonDeductibleAccount?: string;
    name?: string;
    deferredTaxAccount?: string;
    code?: string;
    minTaxableAmount?: number;
    maxTaxableAmount?: number;
    flatTaxAmount?: number;
    apExpAccount?: string;
    arExpAccount?: string;
    textCode?: number;
    taxDefinitions?: TaxDefinition[];
    chartOfAccount: ChartOfAccountsType;
    user: UsersType;
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
}
export interface SalesTaxAuthoritiesTypeForceMandatory {
    useTaxAccount: string;
    userSignature: number;
    type: number;
    aOrRTaxAccount: string;
    rate: number;
    aOrPTaxAccount: string;
    nonDeductiblePrecent: number;
    nonDeductibleAccount: string;
    name: string;
    deferredTaxAccount: string;
    code: string;
    minTaxableAmount: number;
    maxTaxableAmount: number;
    flatTaxAmount: number;
    apExpAccount: string;
    arExpAccount: string;
    textCode: number;
    taxDefinitions: TaxDefinition[];
    chartOfAccount: ChartOfAccountsType;
    user: UsersType;
    salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
}
export declare namespace SalesTaxAuthorities {
    /**
     * Static representation of the [[useTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_TAX_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[aOrRTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const A_OR_R_TAX_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[aOrPTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const A_OR_P_TAX_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[nonDeductiblePrecent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_DEDUCTIBLE_PRECENT: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[nonDeductibleAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_DEDUCTIBLE_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[deferredTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFERRED_TAX_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[minTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_TAXABLE_AMOUNT: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[maxTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_TAXABLE_AMOUNT: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[flatTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAT_TAX_AMOUNT: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[apExpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AP_EXP_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[arExpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AR_EXP_ACCOUNT: StringField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[textCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT_CODE: NumberField<SalesTaxAuthorities>;
    /**
     * Static representation of the [[taxDefinitions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DEFINITIONS: CollectionField<SalesTaxAuthorities>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<SalesTaxAuthorities, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<SalesTaxAuthorities, Users>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<SalesTaxAuthorities, SalesTaxAuthoritiesTypes>;
    /**
     * All fields of the SalesTaxAuthorities entity.
     */
    const _allFields: Array<StringField<SalesTaxAuthorities> | NumberField<SalesTaxAuthorities> | CollectionField<SalesTaxAuthorities> | OneToOneLink<SalesTaxAuthorities, ChartOfAccounts> | OneToOneLink<SalesTaxAuthorities, Users> | OneToOneLink<SalesTaxAuthorities, SalesTaxAuthoritiesTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesTaxAuthorities>;
    /**
     * All key fields of the SalesTaxAuthorities entity.
     */
    const _keyFields: Array<Field<SalesTaxAuthorities>>;
    /**
     * Mapping of all key field names to the respective static field property SalesTaxAuthorities.
     */
    const _keys: {
        [keys: string]: Field<SalesTaxAuthorities>;
    };
}
//# sourceMappingURL=SalesTaxAuthorities.d.ts.map