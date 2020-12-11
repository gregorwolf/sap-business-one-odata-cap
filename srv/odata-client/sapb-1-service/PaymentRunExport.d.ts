import { PaymentRunExportRequestBuilder } from './PaymentRunExportRequestBuilder';
import { Moment } from 'moment';
import { PaymentRunExportLine } from './PaymentRunExportLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoOpexStatus } from './BoOpexStatus';
import { PaymentRunExportRowTypeEnum } from './PaymentRunExportRowTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PaymentRunExport" of service "SAPB1".
 */
export declare class PaymentRunExport extends EntityV4 implements PaymentRunExportType {
    /**
     * Technical entity name for PaymentRunExport.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Run Date.
     * @nullable
     */
    runDate?: Moment;
    /**
     * Vendor Num.
     * @nullable
     */
    vendorNum?: string;
    /**
     * Customer Num.
     * @nullable
     */
    customerNum?: string;
    /**
     * Payment Method.
     * @nullable
     */
    paymentMethod?: string;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Fiscal Year.
     * @nullable
     */
    fiscalYear?: Moment;
    /**
     * Countery.
     * @nullable
     */
    countery?: string;
    /**
     * Company Tax Num.
     * @nullable
     */
    companyTaxNum?: string;
    /**
     * Payee Name.
     * @nullable
     */
    payeeName?: string;
    /**
     * Payee Postal Code.
     * @nullable
     */
    payeePostalCode?: string;
    /**
     * Payee City.
     * @nullable
     */
    payeeCity?: string;
    /**
     * Payee Street.
     * @nullable
     */
    payeeStreet?: string;
    /**
     * Payee Country.
     * @nullable
     */
    payeeCountry?: string;
    /**
     * Payee State.
     * @nullable
     */
    payeeState?: string;
    /**
     * Payee Bank Name.
     * @nullable
     */
    payeeBankName?: string;
    /**
     * Payee Bank Zip.
     * @nullable
     */
    payeeBankZip?: string;
    /**
     * Payee Bank City.
     * @nullable
     */
    payeeBankCity?: string;
    /**
     * Payee Bank Street.
     * @nullable
     */
    payeeBankStreet?: string;
    /**
     * Payee Bank Country.
     * @nullable
     */
    payeeBankCountry?: string;
    /**
     * Payee Bank Account.
     * @nullable
     */
    payeeBankAccount?: string;
    /**
     * Payee Bank Code.
     * @nullable
     */
    payeeBankCode?: string;
    /**
     * Payee Bank Ctrl Key.
     * @nullable
     */
    payeeBankCtrlKey?: string;
    /**
     * Payee Bank Swift Num.
     * @nullable
     */
    payeeBankSwiftNum?: string;
    /**
     * Payee Bank Iban.
     * @nullable
     */
    payeeBankIban?: string;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Bank Account.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Bank Country.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Bank Iban.
     * @nullable
     */
    bankIban?: string;
    /**
     * Gl Account.
     * @nullable
     */
    glAccount?: string;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Doc Amount Local.
     * @nullable
     */
    docAmountLocal?: number;
    /**
     * Doc Currnecy.
     * @nullable
     */
    docCurrnecy?: string;
    /**
     * Doc Amount Forign.
     * @nullable
     */
    docAmountForign?: number;
    /**
     * Doc Cash Discount.
     * @nullable
     */
    docCashDiscount?: number;
    /**
     * Doc Cash Discount Forign.
     * @nullable
     */
    docCashDiscountForign?: number;
    /**
     * Doc Num Offield Paid.
     * @nullable
     */
    docNumOffieldPaid?: number;
    /**
     * Doc Rate.
     * @nullable
     */
    docRate?: number;
    /**
     * Wiz Code.
     * @nullable
     */
    wizCode?: number;
    /**
     * Collection Authorization.
     * @nullable
     */
    collectionAuthorization?: BoYesNoEnum;
    /**
     * Payee Bank Post Office.
     * @nullable
     */
    payeeBankPostOffice?: BoYesNoEnum;
    /**
     * Payee Bank Next Check Number.
     * @nullable
     */
    payeeBankNextCheckNumber?: number;
    /**
     * Payee Bank House Bank.
     * @nullable
     */
    payeeBankHouseBank?: BoYesNoEnum;
    /**
     * Payee Bank Block.
     * @nullable
     */
    payeeBankBlock?: string;
    /**
     * Payee Bank County.
     * @nullable
     */
    payeeBankCounty?: string;
    /**
     * Payee Bank State.
     * @nullable
     */
    payeeBankState?: string;
    /**
     * Payee Bank Bisr.
     * @nullable
     */
    payeeBankBisr?: BoYesNoEnum;
    /**
     * Payee Bank User Num 1.
     * @nullable
     */
    payeeBankUserNum1?: string;
    /**
     * Payee Bank User Num 2.
     * @nullable
     */
    payeeBankUserNum2?: string;
    /**
     * Payee Bank User Num 3.
     * @nullable
     */
    payeeBankUserNum3?: string;
    /**
     * Payee Bank User Num 4.
     * @nullable
     */
    payeeBankUserNum4?: string;
    /**
     * Instruction Key.
     * @nullable
     */
    instructionKey?: string;
    /**
     * Payment Format.
     * @nullable
     */
    paymentFormat?: string;
    /**
     * Company Name.
     * @nullable
     */
    companyName?: string;
    /**
     * Company Address.
     * @nullable
     */
    companyAddress?: string;
    /**
     * Status.
     * @nullable
     */
    status?: BoOpexStatus;
    /**
     * Comp Isr Biller Id.
     * @nullable
     */
    compIsrBillerId?: string;
    /**
     * Vendor Isr Biller Id.
     * @nullable
     */
    vendorIsrBillerId?: string;
    /**
     * Additional Id Number.
     * @nullable
     */
    additionalIdNumber?: string;
    /**
     * Organization Number.
     * @nullable
     */
    organizationNumber?: string;
    /**
     * Payee Bank Branch.
     * @nullable
     */
    payeeBankBranch?: string;
    /**
     * Payment Bank Branch.
     * @nullable
     */
    paymentBankBranch?: string;
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
    /**
     * User E Mail.
     * @nullable
     */
    userEMail?: string;
    /**
     * User Mobile Phone Number.
     * @nullable
     */
    userMobilePhoneNumber?: string;
    /**
     * User Fax Number.
     * @nullable
     */
    userFaxNumber?: string;
    /**
     * User Department.
     * @nullable
     */
    userDepartment?: number;
    /**
     * Debit Memo.
     * @nullable
     */
    debitMemo?: BoYesNoEnum;
    /**
     * Eu Internal Transfer.
     * @nullable
     */
    euInternalTransfer?: BoYesNoEnum;
    /**
     * File Path.
     * @nullable
     */
    filePath?: string;
    /**
     * Ordering Party.
     * @nullable
     */
    orderingParty?: string;
    /**
     * Payment Bank Control Key.
     * @nullable
     */
    paymentBankControlKey?: string;
    /**
     * Payee Tax Number.
     * @nullable
     */
    payeeTaxNumber?: string;
    /**
     * Payment Key Code.
     * @nullable
     */
    paymentKeyCode?: string;
    /**
     * Payee Reference Details.
     * @nullable
     */
    payeeReferenceDetails?: string;
    /**
     * Format Name.
     * @nullable
     */
    formatName?: string;
    /**
     * Payment Donewith Check.
     * @nullable
     */
    paymentDonewithCheck?: BoYesNoEnum;
    /**
     * Company Block.
     * @nullable
     */
    companyBlock?: string;
    /**
     * Company City.
     * @nullable
     */
    companyCity?: string;
    /**
     * Company County.
     * @nullable
     */
    companyCounty?: string;
    /**
     * Company State.
     * @nullable
     */
    companyState?: string;
    /**
     * Company Street.
     * @nullable
     */
    companyStreet?: string;
    /**
     * Company Zip Code.
     * @nullable
     */
    companyZipCode?: string;
    /**
     * Payment Bank Charges.
     * @nullable
     */
    paymentBankCharges?: string;
    /**
     * Payment Bank User No 1.
     * @nullable
     */
    paymentBankUserNo1?: string;
    /**
     * Payment Bank User No 2.
     * @nullable
     */
    paymentBankUserNo2?: string;
    /**
     * Payment Bank User No 3.
     * @nullable
     */
    paymentBankUserNo3?: string;
    /**
     * Payment Bank User No 4.
     * @nullable
     */
    paymentBankUserNo4?: string;
    /**
     * Payment Bank Charges Allocation Code.
     * @nullable
     */
    paymentBankChargesAllocationCode?: string;
    /**
     * Payment Order Num.
     * @nullable
     */
    paymentOrderNum?: number;
    /**
     * Free Text 1.
     * @nullable
     */
    freeText1?: string;
    /**
     * Free Text 2.
     * @nullable
     */
    freeText2?: string;
    /**
     * Free Text 3.
     * @nullable
     */
    freeText3?: string;
    /**
     * Row Type.
     * @nullable
     */
    rowType?: PaymentRunExportRowTypeEnum;
    /**
     * Payment Run Export Lines.
     * @nullable
     */
    paymentRunExportLines?: PaymentRunExportLine[];
    /**
     * One-to-one navigation property to the [[BankChargesAllocationCodes]] entity.
     */
    bankChargesAllocationCode: BankChargesAllocationCodes;
    /**
     * Returns an entity builder to construct instances of `PaymentRunExport`.
     * @returns A builder that constructs instances of entity type `PaymentRunExport`.
     */
    static builder(): EntityBuilderType<PaymentRunExport, PaymentRunExportType>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentRunExport` entity type.
     * @returns A `PaymentRunExport` request builder.
     */
    static requestBuilder(): PaymentRunExportRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentRunExport`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentRunExport`.
     */
    static customField(fieldName: string): CustomFieldV4<PaymentRunExport>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BankChargesAllocationCodes, BankChargesAllocationCodesType } from './BankChargesAllocationCodes';
export interface PaymentRunExportType {
    absoluteEntry?: number | null;
    runDate?: Moment | null;
    vendorNum?: string | null;
    customerNum?: string | null;
    paymentMethod?: string | null;
    docNum?: number | null;
    fiscalYear?: Moment | null;
    countery?: string | null;
    companyTaxNum?: string | null;
    payeeName?: string | null;
    payeePostalCode?: string | null;
    payeeCity?: string | null;
    payeeStreet?: string | null;
    payeeCountry?: string | null;
    payeeState?: string | null;
    payeeBankName?: string | null;
    payeeBankZip?: string | null;
    payeeBankCity?: string | null;
    payeeBankStreet?: string | null;
    payeeBankCountry?: string | null;
    payeeBankAccount?: string | null;
    payeeBankCode?: string | null;
    payeeBankCtrlKey?: string | null;
    payeeBankSwiftNum?: string | null;
    payeeBankIban?: string | null;
    postingDate?: Moment | null;
    bankAccount?: string | null;
    bankCountry?: string | null;
    bankCode?: string | null;
    bankIban?: string | null;
    glAccount?: string | null;
    currency?: string | null;
    docAmountLocal?: number | null;
    docCurrnecy?: string | null;
    docAmountForign?: number | null;
    docCashDiscount?: number | null;
    docCashDiscountForign?: number | null;
    docNumOffieldPaid?: number | null;
    docRate?: number | null;
    wizCode?: number | null;
    collectionAuthorization?: BoYesNoEnum | null;
    payeeBankPostOffice?: BoYesNoEnum | null;
    payeeBankNextCheckNumber?: number | null;
    payeeBankHouseBank?: BoYesNoEnum | null;
    payeeBankBlock?: string | null;
    payeeBankCounty?: string | null;
    payeeBankState?: string | null;
    payeeBankBisr?: BoYesNoEnum | null;
    payeeBankUserNum1?: string | null;
    payeeBankUserNum2?: string | null;
    payeeBankUserNum3?: string | null;
    payeeBankUserNum4?: string | null;
    instructionKey?: string | null;
    paymentFormat?: string | null;
    companyName?: string | null;
    companyAddress?: string | null;
    status?: BoOpexStatus | null;
    compIsrBillerId?: string | null;
    vendorIsrBillerId?: string | null;
    additionalIdNumber?: string | null;
    organizationNumber?: string | null;
    payeeBankBranch?: string | null;
    paymentBankBranch?: string | null;
    userName?: string | null;
    userEMail?: string | null;
    userMobilePhoneNumber?: string | null;
    userFaxNumber?: string | null;
    userDepartment?: number | null;
    debitMemo?: BoYesNoEnum | null;
    euInternalTransfer?: BoYesNoEnum | null;
    filePath?: string | null;
    orderingParty?: string | null;
    paymentBankControlKey?: string | null;
    payeeTaxNumber?: string | null;
    paymentKeyCode?: string | null;
    payeeReferenceDetails?: string | null;
    formatName?: string | null;
    paymentDonewithCheck?: BoYesNoEnum | null;
    companyBlock?: string | null;
    companyCity?: string | null;
    companyCounty?: string | null;
    companyState?: string | null;
    companyStreet?: string | null;
    companyZipCode?: string | null;
    paymentBankCharges?: string | null;
    paymentBankUserNo1?: string | null;
    paymentBankUserNo2?: string | null;
    paymentBankUserNo3?: string | null;
    paymentBankUserNo4?: string | null;
    paymentBankChargesAllocationCode?: string | null;
    paymentOrderNum?: number | null;
    freeText1?: string | null;
    freeText2?: string | null;
    freeText3?: string | null;
    rowType?: PaymentRunExportRowTypeEnum | null;
    paymentRunExportLines?: PaymentRunExportLine[] | null;
    bankChargesAllocationCode: BankChargesAllocationCodesType;
}
export declare namespace PaymentRunExport {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[runDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RUN_DATE: DateField<PaymentRunExport>;
    /**
     * Static representation of the [[vendorNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_NUM: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[customerNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NUM: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_YEAR: DateField<PaymentRunExport>;
    /**
     * Static representation of the [[countery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTERY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyTaxNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_TAX_NUM: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_NAME: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeePostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_POSTAL_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_CITY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_STREET: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_COUNTRY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_STATE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_NAME: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_ZIP: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_CITY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_STREET: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_COUNTRY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_ACCOUNT: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankCtrlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_CTRL_KEY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankSwiftNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_SWIFT_NUM: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_IBAN: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<PaymentRunExport>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[bankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_IBAN: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[docAmountLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_AMOUNT_LOCAL: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[docCurrnecy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRNECY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[docAmountForign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_AMOUNT_FORIGN: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[docCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CASH_DISCOUNT: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[docCashDiscountForign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CASH_DISCOUNT_FORIGN: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[docNumOffieldPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM_OFFIELD_PAID: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_RATE: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[wizCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZ_CODE: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[collectionAuthorization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_AUTHORIZATION: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankPostOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_POST_OFFICE: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankNextCheckNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_NEXT_CHECK_NUMBER: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankHouseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_HOUSE_BANK: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_BLOCK: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_COUNTY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_STATE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankBisr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_BISR: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankUserNum1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_USER_NUM_1: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankUserNum2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_USER_NUM_2: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankUserNum3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_USER_NUM_3: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankUserNum4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_USER_NUM_4: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[instructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_KEY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_FORMAT: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NAME: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_ADDRESS: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[compIsrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_ISR_BILLER_ID: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[vendorIsrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_ISR_BILLER_ID: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_ID_NUMBER: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[organizationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_NUMBER: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_BANK_BRANCH: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_BRANCH: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAME: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[userEMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_E_MAIL: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[userMobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_MOBILE_PHONE_NUMBER: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[userFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_FAX_NUMBER: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[userDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEPARTMENT: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[debitMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEBIT_MEMO: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[euInternalTransfer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EU_INTERNAL_TRANSFER: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[filePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_PATH: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[orderingParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERING_PARTY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_CONTROL_KEY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_TAX_NUMBER: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentKeyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_KEY_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[payeeReferenceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_REFERENCE_DETAILS: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[formatName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAT_NAME: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentDonewithCheck]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_DONEWITH_CHECK: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[companyBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_BLOCK: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CITY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_COUNTY: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_STATE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_STREET: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[companyZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_ZIP_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankCharges]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_CHARGES: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankUserNo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_USER_NO_1: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankUserNo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_USER_NO_2: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankUserNo3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_USER_NO_3: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankUserNo4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_USER_NO_4: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentBankChargesAllocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BANK_CHARGES_ALLOCATION_CODE: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentOrderNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_ORDER_NUM: NumberField<PaymentRunExport>;
    /**
     * Static representation of the [[freeText1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_TEXT_1: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[freeText2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_TEXT_2: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[freeText3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_TEXT_3: StringField<PaymentRunExport>;
    /**
     * Static representation of the [[rowType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROW_TYPE: EnumField<PaymentRunExport>;
    /**
     * Static representation of the [[paymentRunExportLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_RUN_EXPORT_LINES: CollectionField<PaymentRunExport, PaymentRunExportLine>;
    /**
     * Static representation of the one-to-one navigation property [[bankChargesAllocationCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGES_ALLOCATION_CODE: OneToOneLink<PaymentRunExport, BankChargesAllocationCodes>;
    /**
     * All fields of the PaymentRunExport entity.
     */
    const _allFields: Array<NumberField<PaymentRunExport> | DateField<PaymentRunExport> | StringField<PaymentRunExport> | EnumField<PaymentRunExport> | CollectionField<PaymentRunExport, PaymentRunExportLine> | OneToOneLink<PaymentRunExport, BankChargesAllocationCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentRunExport>;
    /**
     * All key fields of the PaymentRunExport entity.
     */
    const _keyFields: Array<Field<PaymentRunExport>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentRunExport.
     */
    const _keys: {
        [keys: string]: Field<PaymentRunExport>;
    };
}
//# sourceMappingURL=PaymentRunExport.d.ts.map