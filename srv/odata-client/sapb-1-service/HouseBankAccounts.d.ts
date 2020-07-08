import { HouseBankAccountsRequestBuilder } from './HouseBankAccountsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "HouseBankAccounts" of service "SAPB1".
 */
export declare class HouseBankAccounts extends Entity implements HouseBankAccountsType {
    /**
     * Technical entity name for HouseBankAccounts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HouseBankAccounts.
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
     * Acc No.
     * @nullable
     */
    accNo?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Next Check No.
     * @nullable
     */
    nextCheckNo?: number;
    /**
     * Gl Account.
     * @nullable
     */
    glAccount?: string;
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
     * Control Key.
     * @nullable
     */
    controlKey?: string;
    /**
     * User No 1.
     * @nullable
     */
    userNo1?: string;
    /**
     * User No 2.
     * @nullable
     */
    userNo2?: string;
    /**
     * User No 3.
     * @nullable
     */
    userNo3?: string;
    /**
     * User No 4.
     * @nullable
     */
    userNo4?: string;
    /**
     * Iban.
     * @nullable
     */
    iban?: string;
    /**
     * Debtof Discounted Billof Exc.
     * @nullable
     */
    debtofDiscountedBillofExc?: string;
    /**
     * Tolerance Days.
     * @nullable
     */
    toleranceDays?: number;
    /**
     * Min Amountof Billof Exchang.
     * @nullable
     */
    minAmountofBillofExchang?: number;
    /**
     * Max Amountof Billof Exchan.
     * @nullable
     */
    maxAmountofBillofExchan?: number;
    /**
     * Discount Limit.
     * @nullable
     */
    discountLimit?: number;
    /**
     * Days In Advance.
     * @nullable
     */
    daysInAdvance?: number;
    /**
     * Bankon Collection.
     * @nullable
     */
    bankonCollection?: string;
    /**
     * Bankon Discounted.
     * @nullable
     */
    bankonDiscounted?: string;
    /**
     * Gl Interim Account.
     * @nullable
     */
    glInterimAccount?: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Bank Key.
     * @nullable
     */
    bankKey?: number;
    /**
     * Template Name.
     * @nullable
     */
    templateName?: string;
    /**
     * Maximum Lines.
     * @nullable
     */
    maximumLines?: number;
    /**
     * Customer Id Number.
     * @nullable
     */
    customerIdNumber?: string;
    /**
     * Isr Biller Id.
     * @nullable
     */
    isrBillerId?: string;
    /**
     * Isr Type.
     * @nullable
     */
    isrType?: number;
    /**
     * Account Check Digit.
     * @nullable
     */
    accountCheckDigit?: string;
    /**
     * Our Number.
     * @nullable
     */
    ourNumber?: number;
    /**
     * Agreement Number.
     * @nullable
     */
    agreementNumber?: string;
    /**
     * Address Type.
     * @nullable
     */
    addressType?: string;
    /**
     * Street No.
     * @nullable
     */
    streetNo?: string;
    /**
     * Building.
     * @nullable
     */
    building?: string;
    /**
     * Incoming Payment Series.
     * @nullable
     */
    incomingPaymentSeries?: number;
    /**
     * Outgoing Payment Series.
     * @nullable
     */
    outgoingPaymentSeries?: number;
    /**
     * Journal Entry Series.
     * @nullable
     */
    journalEntrySeries?: number;
    /**
     * Import File Name.
     * @nullable
     */
    importFileName?: string;
    /**
     * Account Name.
     * @nullable
     */
    accountName?: string;
    /**
     * Bic Swift Code.
     * @nullable
     */
    bicSwiftCode?: string;
    /**
     * Fine Account.
     * @nullable
     */
    fineAccount?: string;
    /**
     * Interest Account.
     * @nullable
     */
    interestAccount?: string;
    /**
     * Discount Account.
     * @nullable
     */
    discountAccount?: string;
    /**
     * Service Fee Account.
     * @nullable
     */
    serviceFeeAccount?: string;
    /**
     * Iof Tax Account.
     * @nullable
     */
    iofTaxAccount?: string;
    /**
     * Other Expenses Account.
     * @nullable
     */
    otherExpensesAccount?: string;
    /**
     * Other Incomes Account.
     * @nullable
     */
    otherIncomesAccount?: string;
    /**
     * Retorno File Name.
     * @nullable
     */
    retornoFileName?: string;
    /**
     * Branch Check Digit.
     * @nullable
     */
    branchCheckDigit?: string;
    /**
     * Collection Code.
     * @nullable
     */
    collectionCode?: string;
    /**
     * File Seq Next Number.
     * @nullable
     */
    fileSeqNextNumber?: number;
    /**
     * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethods: WizardPaymentMethods[];
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[Banks]] entity.
     */
    bank: Banks;
    /**
     * One-to-many navigation property to the [[BankStatements]] entity.
     */
    bankStatements: BankStatements[];
    /**
     * Returns an entity builder to construct instances `HouseBankAccounts`.
     * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
     */
    static builder(): EntityBuilderType<HouseBankAccounts, HouseBankAccountsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HouseBankAccounts` entity type.
     * @returns A `HouseBankAccounts` request builder.
     */
    static requestBuilder(): HouseBankAccountsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HouseBankAccounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
     */
    static customField(fieldName: string): CustomField<HouseBankAccounts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';
import { Banks, BanksType } from './Banks';
import { BankStatements, BankStatementsType } from './BankStatements';
export interface HouseBankAccountsType {
    bankCode?: string;
    accNo?: string;
    branch?: string;
    nextCheckNo?: number;
    glAccount?: string;
    street?: string;
    block?: string;
    zipCode?: string;
    city?: string;
    county?: string;
    country?: string;
    state?: string;
    controlKey?: string;
    userNo1?: string;
    userNo2?: string;
    userNo3?: string;
    userNo4?: string;
    iban?: string;
    debtofDiscountedBillofExc?: string;
    toleranceDays?: number;
    minAmountofBillofExchang?: number;
    maxAmountofBillofExchan?: number;
    discountLimit?: number;
    daysInAdvance?: number;
    bankonCollection?: string;
    bankonDiscounted?: string;
    glInterimAccount?: string;
    absoluteEntry?: number;
    bankKey?: number;
    templateName?: string;
    maximumLines?: number;
    customerIdNumber?: string;
    isrBillerId?: string;
    isrType?: number;
    accountCheckDigit?: string;
    ourNumber?: number;
    agreementNumber?: string;
    addressType?: string;
    streetNo?: string;
    building?: string;
    incomingPaymentSeries?: number;
    outgoingPaymentSeries?: number;
    journalEntrySeries?: number;
    importFileName?: string;
    accountName?: string;
    bicSwiftCode?: string;
    fineAccount?: string;
    interestAccount?: string;
    discountAccount?: string;
    serviceFeeAccount?: string;
    iofTaxAccount?: string;
    otherExpensesAccount?: string;
    otherIncomesAccount?: string;
    retornoFileName?: string;
    branchCheckDigit?: string;
    collectionCode?: string;
    fileSeqNextNumber?: number;
    wizardPaymentMethods: WizardPaymentMethodsType[];
    chartOfAccount: ChartOfAccountsType;
    country2: CountriesType;
    bank: BanksType;
    bankStatements: BankStatementsType[];
}
export interface HouseBankAccountsTypeForceMandatory {
    bankCode: string;
    accNo: string;
    branch: string;
    nextCheckNo: number;
    glAccount: string;
    street: string;
    block: string;
    zipCode: string;
    city: string;
    county: string;
    country: string;
    state: string;
    controlKey: string;
    userNo1: string;
    userNo2: string;
    userNo3: string;
    userNo4: string;
    iban: string;
    debtofDiscountedBillofExc: string;
    toleranceDays: number;
    minAmountofBillofExchang: number;
    maxAmountofBillofExchan: number;
    discountLimit: number;
    daysInAdvance: number;
    bankonCollection: string;
    bankonDiscounted: string;
    glInterimAccount: string;
    absoluteEntry: number;
    bankKey: number;
    templateName: string;
    maximumLines: number;
    customerIdNumber: string;
    isrBillerId: string;
    isrType: number;
    accountCheckDigit: string;
    ourNumber: number;
    agreementNumber: string;
    addressType: string;
    streetNo: string;
    building: string;
    incomingPaymentSeries: number;
    outgoingPaymentSeries: number;
    journalEntrySeries: number;
    importFileName: string;
    accountName: string;
    bicSwiftCode: string;
    fineAccount: string;
    interestAccount: string;
    discountAccount: string;
    serviceFeeAccount: string;
    iofTaxAccount: string;
    otherExpensesAccount: string;
    otherIncomesAccount: string;
    retornoFileName: string;
    branchCheckDigit: string;
    collectionCode: string;
    fileSeqNextNumber: number;
    wizardPaymentMethods: WizardPaymentMethodsType[];
    chartOfAccount: ChartOfAccountsType;
    country2: CountriesType;
    bank: BanksType;
    bankStatements: BankStatementsType[];
}
export declare namespace HouseBankAccounts {
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[accNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACC_NO: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[nextCheckNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_CHECK_NO: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[controlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTROL_KEY: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[userNo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NO_1: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[userNo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NO_2: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[userNo3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NO_3: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[userNo4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NO_4: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[debtofDiscountedBillofExc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEBTOF_DISCOUNTED_BILLOF_EXC: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOLERANCE_DAYS: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[minAmountofBillofExchang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_AMOUNTOF_BILLOF_EXCHANG: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[maxAmountofBillofExchan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_AMOUNTOF_BILLOF_EXCHAN: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[discountLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_LIMIT: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[daysInAdvance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAYS_IN_ADVANCE: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[bankonCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANKON_COLLECTION: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[bankonDiscounted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANKON_DISCOUNTED: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[glInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_INTERIM_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[bankKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_KEY: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[maximumLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_LINES: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[customerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ID_NUMBER: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISR_BILLER_ID: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[isrType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISR_TYPE: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[accountCheckDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CHECK_DIGIT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[ourNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUR_NUMBER: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[agreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGREEMENT_NUMBER: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NO: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[incomingPaymentSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_PAYMENT_SERIES: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[outgoingPaymentSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTGOING_PAYMENT_SERIES: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[journalEntrySeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY_SERIES: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the [[importFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPORT_FILE_NAME: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[accountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_NAME: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[bicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIC_SWIFT_CODE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[fineAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINE_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[discountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[serviceFeeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_FEE_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[iofTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IOF_TAX_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[otherExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHER_EXPENSES_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[otherIncomesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHER_INCOMES_ACCOUNT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[retornoFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETORNO_FILE_NAME: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[branchCheckDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_CHECK_DIGIT: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[collectionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_CODE: StringField<HouseBankAccounts>;
    /**
     * Static representation of the [[fileSeqNextNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_SEQ_NEXT_NUMBER: NumberField<HouseBankAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHODS: OneToManyLink<HouseBankAccounts, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<HouseBankAccounts, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<HouseBankAccounts, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[bank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK: OneToOneLink<HouseBankAccounts, Banks>;
    /**
     * Static representation of the one-to-many navigation property [[bankStatements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_STATEMENTS: OneToManyLink<HouseBankAccounts, BankStatements>;
    /**
     * All fields of the HouseBankAccounts entity.
     */
    const _allFields: Array<StringField<HouseBankAccounts> | NumberField<HouseBankAccounts> | OneToManyLink<HouseBankAccounts, WizardPaymentMethods> | OneToOneLink<HouseBankAccounts, ChartOfAccounts> | OneToOneLink<HouseBankAccounts, Countries> | OneToOneLink<HouseBankAccounts, Banks> | OneToManyLink<HouseBankAccounts, BankStatements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HouseBankAccounts>;
    /**
     * All key fields of the HouseBankAccounts entity.
     */
    const _keyFields: Array<Field<HouseBankAccounts>>;
    /**
     * Mapping of all key field names to the respective static field property HouseBankAccounts.
     */
    const _keys: {
        [keys: string]: Field<HouseBankAccounts>;
    };
}
//# sourceMappingURL=HouseBankAccounts.d.ts.map