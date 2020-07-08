import { BillOfExchangeTransactionsRequestBuilder } from './BillOfExchangeTransactionsRequestBuilder';
import { Moment } from 'moment';
import { BillOfExchangeTransactionLine } from './BillOfExchangeTransactionLine';
import { BillOfExchangeTransDeposit } from './BillOfExchangeTransDeposit';
import { BillOfExchangeTransBankPage } from './BillOfExchangeTransBankPage';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BillOfExchangeTransactions" of service "SAPB1".
 */
export declare class BillOfExchangeTransactions extends Entity implements BillOfExchangeTransactionsType {
    /**
     * Technical entity name for BillOfExchangeTransactions.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BillOfExchangeTransactions.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Transaction Date.
     * @nullable
     */
    transactionDate?: Moment;
    /**
     * Transaction Time.
     * @nullable
     */
    transactionTime?: Time;
    /**
     * Transaction Number.
     * @nullable
     */
    transactionNumber?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Boe Transactionkey.
     * @nullable
     */
    boeTransactionkey?: number;
    /**
     * Bill Of Exchange Transaction Lines.
     * @nullable
     */
    billOfExchangeTransactionLines?: BillOfExchangeTransactionLine[];
    /**
     * Bill Of Exchange Trans Deposits.
     * @nullable
     */
    billOfExchangeTransDeposits?: BillOfExchangeTransDeposit[];
    /**
     * Bill Of Exchange Trans Bank Pages.
     * @nullable
     */
    billOfExchangeTransBankPages?: BillOfExchangeTransBankPage[];
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * Returns an entity builder to construct instances `BillOfExchangeTransactions`.
     * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
     */
    static builder(): EntityBuilderType<BillOfExchangeTransactions, BillOfExchangeTransactionsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BillOfExchangeTransactions` entity type.
     * @returns A `BillOfExchangeTransactions` request builder.
     */
    static requestBuilder(): BillOfExchangeTransactionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillOfExchangeTransactions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
     */
    static customField(fieldName: string): CustomField<BillOfExchangeTransactions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JournalEntries, JournalEntriesType } from './JournalEntries';
export interface BillOfExchangeTransactionsType {
    transactionDate?: Moment;
    transactionTime?: Time;
    transactionNumber?: number;
    postingDate?: Moment;
    taxDate?: Moment;
    boeTransactionkey?: number;
    billOfExchangeTransactionLines?: BillOfExchangeTransactionLine[];
    billOfExchangeTransDeposits?: BillOfExchangeTransDeposit[];
    billOfExchangeTransBankPages?: BillOfExchangeTransBankPage[];
    journalEntry: JournalEntriesType;
}
export interface BillOfExchangeTransactionsTypeForceMandatory {
    transactionDate: Moment;
    transactionTime: Time;
    transactionNumber: number;
    postingDate: Moment;
    taxDate: Moment;
    boeTransactionkey: number;
    billOfExchangeTransactionLines: BillOfExchangeTransactionLine[];
    billOfExchangeTransDeposits: BillOfExchangeTransDeposit[];
    billOfExchangeTransBankPages: BillOfExchangeTransBankPage[];
    journalEntry: JournalEntriesType;
}
export declare namespace BillOfExchangeTransactions {
    /**
     * Static representation of the [[transactionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_DATE: DateField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[transactionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_TIME: TimeField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_NUMBER: NumberField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[boeTransactionkey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOE_TRANSACTIONKEY: NumberField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[billOfExchangeTransactionLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_TRANSACTION_LINES: CollectionField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[billOfExchangeTransDeposits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_TRANS_DEPOSITS: CollectionField<BillOfExchangeTransactions>;
    /**
     * Static representation of the [[billOfExchangeTransBankPages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_TRANS_BANK_PAGES: CollectionField<BillOfExchangeTransactions>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<BillOfExchangeTransactions, JournalEntries>;
    /**
     * All fields of the BillOfExchangeTransactions entity.
     */
    const _allFields: Array<DateField<BillOfExchangeTransactions> | TimeField<BillOfExchangeTransactions> | NumberField<BillOfExchangeTransactions> | CollectionField<BillOfExchangeTransactions> | OneToOneLink<BillOfExchangeTransactions, JournalEntries>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BillOfExchangeTransactions>;
    /**
     * All key fields of the BillOfExchangeTransactions entity.
     */
    const _keyFields: Array<Field<BillOfExchangeTransactions>>;
    /**
     * Mapping of all key field names to the respective static field property BillOfExchangeTransactions.
     */
    const _keys: {
        [keys: string]: Field<BillOfExchangeTransactions>;
    };
}
//# sourceMappingURL=BillOfExchangeTransactions.d.ts.map