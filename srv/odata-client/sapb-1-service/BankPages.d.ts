import { BankPagesRequestBuilder } from './BankPagesRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBpsDocTypes } from './BoBpsDocTypes';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BankPages" of service "SAPB1".
 */
export declare class BankPages extends EntityV4 implements BankPagesType {
    /**
     * Technical entity name for BankPages.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Sequence.
     * @nullable
     */
    sequence?: number;
    /**
     * Account Name.
     * @nullable
     */
    accountName?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Memo.
     * @nullable
     */
    memo?: string;
    /**
     * Debit Amount.
     * @nullable
     */
    debitAmount?: number;
    /**
     * Credit Amount.
     * @nullable
     */
    creditAmount?: number;
    /**
     * Bank Match.
     * @nullable
     */
    bankMatch?: number;
    /**
     * Data Source.
     * @nullable
     */
    dataSource?: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * External Code.
     * @nullable
     */
    externalCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Card Name.
     * @nullable
     */
    cardName?: string;
    /**
     * Statement Number.
     * @nullable
     */
    statementNumber?: number;
    /**
     * Invoice Number.
     * @nullable
     */
    invoiceNumber?: string;
    /**
     * Payment Created.
     * @nullable
     */
    paymentCreated?: BoYesNoEnum;
    /**
     * Visual Order.
     * @nullable
     */
    visualOrder?: number;
    /**
     * Doc Number Type.
     * @nullable
     */
    docNumberType?: BoBpsDocTypes;
    /**
     * Payment Reference.
     * @nullable
     */
    paymentReference?: string;
    /**
     * Invoice Number Ex.
     * @nullable
     */
    invoiceNumberEx?: string;
    /**
     * Bic Swift Code.
     * @nullable
     */
    bicSwiftCode?: string;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `BankPages`.
     * @returns A builder that constructs instances of entity type `BankPages`.
     */
    static builder(): EntityBuilderType<BankPages, BankPagesType>;
    /**
     * Returns a request builder to construct requests for operations on the `BankPages` entity type.
     * @returns A `BankPages` request builder.
     */
    static requestBuilder(): BankPagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankPages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankPages`.
     */
    static customField(fieldName: string): CustomFieldV4<BankPages>;
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
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface BankPagesType {
    accountCode?: string | null;
    sequence?: number | null;
    accountName?: string | null;
    reference?: string | null;
    dueDate?: Moment | null;
    memo?: string | null;
    debitAmount?: number | null;
    creditAmount?: number | null;
    bankMatch?: number | null;
    dataSource?: string | null;
    userSignature?: number | null;
    externalCode?: string | null;
    cardCode?: string | null;
    cardName?: string | null;
    statementNumber?: number | null;
    invoiceNumber?: string | null;
    paymentCreated?: BoYesNoEnum | null;
    visualOrder?: number | null;
    docNumberType?: BoBpsDocTypes | null;
    paymentReference?: string | null;
    invoiceNumberEx?: string | null;
    bicSwiftCode?: string | null;
    chartOfAccount: ChartOfAccountsType;
    user: UsersType;
    businessPartner: BusinessPartnersType;
}
export declare namespace BankPages {
    /**
     * Static representation of the [[accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CODE: StringField<BankPages>;
    /**
     * Static representation of the [[sequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE: NumberField<BankPages>;
    /**
     * Static representation of the [[accountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_NAME: StringField<BankPages>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<BankPages>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<BankPages>;
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEMO: StringField<BankPages>;
    /**
     * Static representation of the [[debitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEBIT_AMOUNT: NumberField<BankPages>;
    /**
     * Static representation of the [[creditAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_AMOUNT: NumberField<BankPages>;
    /**
     * Static representation of the [[bankMatch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_MATCH: NumberField<BankPages>;
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SOURCE: StringField<BankPages>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<BankPages>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<BankPages>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<BankPages>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<BankPages>;
    /**
     * Static representation of the [[statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATEMENT_NUMBER: NumberField<BankPages>;
    /**
     * Static representation of the [[invoiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_NUMBER: StringField<BankPages>;
    /**
     * Static representation of the [[paymentCreated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CREATED: EnumField<BankPages>;
    /**
     * Static representation of the [[visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VISUAL_ORDER: NumberField<BankPages>;
    /**
     * Static representation of the [[docNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUMBER_TYPE: EnumField<BankPages>;
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REFERENCE: StringField<BankPages>;
    /**
     * Static representation of the [[invoiceNumberEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_NUMBER_EX: StringField<BankPages>;
    /**
     * Static representation of the [[bicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIC_SWIFT_CODE: StringField<BankPages>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<BankPages, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<BankPages, Users>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<BankPages, BusinessPartners>;
    /**
     * All fields of the BankPages entity.
     */
    const _allFields: Array<StringField<BankPages> | NumberField<BankPages> | DateField<BankPages> | EnumField<BankPages> | OneToOneLink<BankPages, ChartOfAccounts> | OneToOneLink<BankPages, Users> | OneToOneLink<BankPages, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BankPages>;
    /**
     * All key fields of the BankPages entity.
     */
    const _keyFields: Array<Field<BankPages>>;
    /**
     * Mapping of all key field names to the respective static field property BankPages.
     */
    const _keys: {
        [keys: string]: Field<BankPages>;
    };
}
//# sourceMappingURL=BankPages.d.ts.map