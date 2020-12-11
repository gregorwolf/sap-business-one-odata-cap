import { TransactionCodesRequestBuilder } from './TransactionCodesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TransactionCodes" of service "SAPB1".
 */
export declare class TransactionCodes extends EntityV4 implements TransactionCodesType {
    /**
     * Technical entity name for TransactionCodes.
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
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[VendorPayments]] entity.
     */
    vendorPayments: VendorPayments[];
    /**
     * One-to-many navigation property to the [[JournalEntries]] entity.
     */
    journalEntries: JournalEntries[];
    /**
     * One-to-many navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccounts: ChartOfAccounts[];
    /**
     * One-to-many navigation property to the [[PaymentDrafts]] entity.
     */
    paymentDrafts: PaymentDrafts[];
    /**
     * One-to-many navigation property to the [[IncomingPayments]] entity.
     */
    incomingPayments: IncomingPayments[];
    /**
     * Returns an entity builder to construct instances of `TransactionCodes`.
     * @returns A builder that constructs instances of entity type `TransactionCodes`.
     */
    static builder(): EntityBuilderType<TransactionCodes, TransactionCodesType>;
    /**
     * Returns a request builder to construct requests for operations on the `TransactionCodes` entity type.
     * @returns A `TransactionCodes` request builder.
     */
    static requestBuilder(): TransactionCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TransactionCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TransactionCodes`.
     */
    static customField(fieldName: string): CustomFieldV4<TransactionCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
export interface TransactionCodesType {
    code?: string | null;
    description?: string | null;
    vendorPayments: VendorPaymentsType[];
    journalEntries: JournalEntriesType[];
    chartOfAccounts: ChartOfAccountsType[];
    paymentDrafts: PaymentDraftsType[];
    incomingPayments: IncomingPaymentsType[];
}
export declare namespace TransactionCodes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<TransactionCodes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TransactionCodes>;
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_PAYMENTS: OneToManyLink<TransactionCodes, VendorPayments>;
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRIES: OneToManyLink<TransactionCodes, JournalEntries>;
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNTS: OneToManyLink<TransactionCodes, ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DRAFTS: OneToManyLink<TransactionCodes, PaymentDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENTS: OneToManyLink<TransactionCodes, IncomingPayments>;
    /**
     * All fields of the TransactionCodes entity.
     */
    const _allFields: Array<StringField<TransactionCodes> | OneToManyLink<TransactionCodes, VendorPayments> | OneToManyLink<TransactionCodes, JournalEntries> | OneToManyLink<TransactionCodes, ChartOfAccounts> | OneToManyLink<TransactionCodes, PaymentDrafts> | OneToManyLink<TransactionCodes, IncomingPayments>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TransactionCodes>;
    /**
     * All key fields of the TransactionCodes entity.
     */
    const _keyFields: Array<Field<TransactionCodes>>;
    /**
     * Mapping of all key field names to the respective static field property TransactionCodes.
     */
    const _keys: {
        [keys: string]: Field<TransactionCodes>;
    };
}
//# sourceMappingURL=TransactionCodes.d.ts.map