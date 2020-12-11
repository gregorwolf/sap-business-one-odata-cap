import { BankStatementsRequestBuilder } from './BankStatementsRequestBuilder';
import { Moment } from 'moment';
import { BankStatementRow } from './BankStatementRow';
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BankStatements" of service "SAPB1".
 */
export declare class BankStatements extends EntityV4 implements BankStatementsType {
    /**
     * Technical entity name for BankStatements.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Internal Number.
     * @nullable
     */
    internalNumber?: number;
    /**
     * Bank Account Key.
     * @nullable
     */
    bankAccountKey?: number;
    /**
     * Statement Number.
     * @nullable
     */
    statementNumber?: string;
    /**
     * Statement Date.
     * @nullable
     */
    statementDate?: Moment;
    /**
     * Status.
     * @nullable
     */
    status?: BankStatementStatusEnum;
    /**
     * Imported.
     * @nullable
     */
    imported?: BoYesNoEnum;
    /**
     * Starting Balance F.
     * @nullable
     */
    startingBalanceF?: number;
    /**
     * Ending Balance F.
     * @nullable
     */
    endingBalanceF?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Starting Balance L.
     * @nullable
     */
    startingBalanceL?: number;
    /**
     * Ending Balance L.
     * @nullable
     */
    endingBalanceL?: number;
    /**
     * Bank Statement File Hash.
     * @nullable
     */
    bankStatementFileHash?: string;
    /**
     * Bank Statement Guid.
     * @nullable
     */
    bankStatementGuid?: string;
    /**
     * Bank Statement Rows.
     * @nullable
     */
    bankStatementRows?: BankStatementRow[];
    /**
     * One-to-one navigation property to the [[HouseBankAccounts]] entity.
     */
    houseBankAccount: HouseBankAccounts;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency2: Currencies;
    /**
     * Returns an entity builder to construct instances of `BankStatements`.
     * @returns A builder that constructs instances of entity type `BankStatements`.
     */
    static builder(): EntityBuilderType<BankStatements, BankStatementsType>;
    /**
     * Returns a request builder to construct requests for operations on the `BankStatements` entity type.
     * @returns A `BankStatements` request builder.
     */
    static requestBuilder(): BankStatementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankStatements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankStatements`.
     */
    static customField(fieldName: string): CustomFieldV4<BankStatements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { Currencies, CurrenciesType } from './Currencies';
export interface BankStatementsType {
    internalNumber?: number | null;
    bankAccountKey?: number | null;
    statementNumber?: string | null;
    statementDate?: Moment | null;
    status?: BankStatementStatusEnum | null;
    imported?: BoYesNoEnum | null;
    startingBalanceF?: number | null;
    endingBalanceF?: number | null;
    currency?: string | null;
    startingBalanceL?: number | null;
    endingBalanceL?: number | null;
    bankStatementFileHash?: string | null;
    bankStatementGuid?: string | null;
    bankStatementRows?: BankStatementRow[] | null;
    houseBankAccount: HouseBankAccountsType;
    currency2: CurrenciesType;
}
export declare namespace BankStatements {
    /**
     * Static representation of the [[internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_NUMBER: NumberField<BankStatements>;
    /**
     * Static representation of the [[bankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_KEY: NumberField<BankStatements>;
    /**
     * Static representation of the [[statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATEMENT_NUMBER: StringField<BankStatements>;
    /**
     * Static representation of the [[statementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATEMENT_DATE: DateField<BankStatements>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<BankStatements>;
    /**
     * Static representation of the [[imported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPORTED: EnumField<BankStatements>;
    /**
     * Static representation of the [[startingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STARTING_BALANCE_F: NumberField<BankStatements>;
    /**
     * Static representation of the [[endingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENDING_BALANCE_F: NumberField<BankStatements>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<BankStatements>;
    /**
     * Static representation of the [[startingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STARTING_BALANCE_L: NumberField<BankStatements>;
    /**
     * Static representation of the [[endingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENDING_BALANCE_L: NumberField<BankStatements>;
    /**
     * Static representation of the [[bankStatementFileHash]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_STATEMENT_FILE_HASH: StringField<BankStatements>;
    /**
     * Static representation of the [[bankStatementGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_STATEMENT_GUID: StringField<BankStatements>;
    /**
     * Static representation of the [[bankStatementRows]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_STATEMENT_ROWS: CollectionField<BankStatements, BankStatementRow>;
    /**
     * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNT: OneToOneLink<BankStatements, HouseBankAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_2: OneToOneLink<BankStatements, Currencies>;
    /**
     * All fields of the BankStatements entity.
     */
    const _allFields: Array<NumberField<BankStatements> | StringField<BankStatements> | DateField<BankStatements> | EnumField<BankStatements> | CollectionField<BankStatements, BankStatementRow> | OneToOneLink<BankStatements, HouseBankAccounts> | OneToOneLink<BankStatements, Currencies>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BankStatements>;
    /**
     * All key fields of the BankStatements entity.
     */
    const _keyFields: Array<Field<BankStatements>>;
    /**
     * Mapping of all key field names to the respective static field property BankStatements.
     */
    const _keys: {
        [keys: string]: Field<BankStatements>;
    };
}
//# sourceMappingURL=BankStatements.d.ts.map