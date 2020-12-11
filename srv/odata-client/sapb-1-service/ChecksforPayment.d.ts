import { ChecksforPaymentRequestBuilder } from './ChecksforPaymentRequestBuilder';
import { Moment } from 'moment';
import { ChecksforPaymentLine } from './ChecksforPaymentLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCpCardAcct } from './BoCpCardAcct';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ChecksforPayment" of service "SAPB1".
 */
export declare class ChecksforPayment extends EntityV4 implements ChecksforPaymentType {
    /**
     * Technical entity name for ChecksforPayment.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
    /**
     * Check Number.
     * @nullable
     */
    checkNumber?: number;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Bank Name.
     * @nullable
     */
    bankName?: string;
    /**
     * Check Date.
     * @nullable
     */
    checkDate?: Moment;
    /**
     * Account Number.
     * @nullable
     */
    accountNumber?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Journal Entry Reference.
     * @nullable
     */
    journalEntryReference?: string;
    /**
     * Payment Date.
     * @nullable
     */
    paymentDate?: Moment;
    /**
     * Payment No.
     * @nullable
     */
    paymentNo?: number;
    /**
     * Check Amount.
     * @nullable
     */
    checkAmount?: number;
    /**
     * Transferable.
     * @nullable
     */
    transferable?: BoYesNoEnum;
    /**
     * Vendor Code.
     * @nullable
     */
    vendorCode?: string;
    /**
     * Check Currency.
     * @nullable
     */
    checkCurrency?: string;
    /**
     * Canceled.
     * @nullable
     */
    canceled?: BoYesNoEnum;
    /**
     * Card Or Account.
     * @nullable
     */
    cardOrAccount?: BoCpCardAcct;
    /**
     * Printed.
     * @nullable
     */
    printed?: BoYesNoEnum;
    /**
     * Vendor Name.
     * @nullable
     */
    vendorName?: string;
    /**
     * Signature.
     * @nullable
     */
    signature?: string;
    /**
     * Customer Account Code.
     * @nullable
     */
    customerAccountCode?: string;
    /**
     * Transaction Number.
     * @nullable
     */
    transactionNumber?: number;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Create Journal Entry.
     * @nullable
     */
    createJournalEntry?: BoYesNoEnum;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Tax Total.
     * @nullable
     */
    taxTotal?: number;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Deduction Refund Amount.
     * @nullable
     */
    deductionRefundAmount?: number;
    /**
     * Printed By.
     * @nullable
     */
    printedBy?: number;
    /**
     * Country Code.
     * @nullable
     */
    countryCode?: string;
    /**
     * Totalin Words.
     * @nullable
     */
    totalinWords?: string;
    /**
     * Address Name.
     * @nullable
     */
    addressName?: string;
    /**
     * Manual Check.
     * @nullable
     */
    manualCheck?: BoYesNoEnum;
    /**
     * Checksfor Payment Lines.
     * @nullable
     */
    checksforPaymentLines?: ChecksforPaymentLine[];
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * Returns an entity builder to construct instances of `ChecksforPayment`.
     * @returns A builder that constructs instances of entity type `ChecksforPayment`.
     */
    static builder(): EntityBuilderType<ChecksforPayment, ChecksforPaymentType>;
    /**
     * Returns a request builder to construct requests for operations on the `ChecksforPayment` entity type.
     * @returns A `ChecksforPayment` request builder.
     */
    static requestBuilder(): ChecksforPaymentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChecksforPayment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChecksforPayment`.
     */
    static customField(fieldName: string): CustomFieldV4<ChecksforPayment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Countries, CountriesType } from './Countries';
export interface ChecksforPaymentType {
    checkKey?: number | null;
    checkNumber?: number | null;
    bankCode?: string | null;
    branch?: string | null;
    bankName?: string | null;
    checkDate?: Moment | null;
    accountNumber?: string | null;
    details?: string | null;
    journalEntryReference?: string | null;
    paymentDate?: Moment | null;
    paymentNo?: number | null;
    checkAmount?: number | null;
    transferable?: BoYesNoEnum | null;
    vendorCode?: string | null;
    checkCurrency?: string | null;
    canceled?: BoYesNoEnum | null;
    cardOrAccount?: BoCpCardAcct | null;
    printed?: BoYesNoEnum | null;
    vendorName?: string | null;
    signature?: string | null;
    customerAccountCode?: string | null;
    transactionNumber?: number | null;
    address?: string | null;
    createJournalEntry?: BoYesNoEnum | null;
    updateDate?: Moment | null;
    creationDate?: Moment | null;
    taxTotal?: number | null;
    taxDate?: Moment | null;
    deductionRefundAmount?: number | null;
    printedBy?: number | null;
    countryCode?: string | null;
    totalinWords?: string | null;
    addressName?: string | null;
    manualCheck?: BoYesNoEnum | null;
    checksforPaymentLines?: ChecksforPaymentLine[] | null;
    journalEntry: JournalEntriesType;
    country: CountriesType;
}
export declare namespace ChecksforPayment {
    /**
     * Static representation of the [[checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_KEY: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[checkNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_NUMBER: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[checkDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_DATE: DateField<ChecksforPayment>;
    /**
     * Static representation of the [[accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_NUMBER: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[journalEntryReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY_REFERENCE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[paymentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DATE: DateField<ChecksforPayment>;
    /**
     * Static representation of the [[paymentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_NO: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[checkAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_AMOUNT: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[transferable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFERABLE: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_CODE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[checkCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_CURRENCY: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELED: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[cardOrAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_OR_ACCOUNT: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[vendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_NAME: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[signature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[customerAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_CODE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_NUMBER: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[createJournalEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_JOURNAL_ENTRY: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<ChecksforPayment>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<ChecksforPayment>;
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TOTAL: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<ChecksforPayment>;
    /**
     * Static representation of the [[deductionRefundAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_REFUND_AMOUNT: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[printedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED_BY: NumberField<ChecksforPayment>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[totalinWords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTALIN_WORDS: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAME: StringField<ChecksforPayment>;
    /**
     * Static representation of the [[manualCheck]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_CHECK: EnumField<ChecksforPayment>;
    /**
     * Static representation of the [[checksforPaymentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECKSFOR_PAYMENT_LINES: CollectionField<ChecksforPayment, ChecksforPaymentLine>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<ChecksforPayment, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<ChecksforPayment, Countries>;
    /**
     * All fields of the ChecksforPayment entity.
     */
    const _allFields: Array<NumberField<ChecksforPayment> | StringField<ChecksforPayment> | DateField<ChecksforPayment> | EnumField<ChecksforPayment> | CollectionField<ChecksforPayment, ChecksforPaymentLine> | OneToOneLink<ChecksforPayment, JournalEntries> | OneToOneLink<ChecksforPayment, Countries>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ChecksforPayment>;
    /**
     * All key fields of the ChecksforPayment entity.
     */
    const _keyFields: Array<Field<ChecksforPayment>>;
    /**
     * Mapping of all key field names to the respective static field property ChecksforPayment.
     */
    const _keys: {
        [keys: string]: Field<ChecksforPayment>;
    };
}
//# sourceMappingURL=ChecksforPayment.d.ts.map