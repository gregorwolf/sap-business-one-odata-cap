/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChecksforPaymentRequestBuilder } from './ChecksforPaymentRequestBuilder';
import { Moment } from 'moment';
import { ChecksforPaymentLine } from './ChecksforPaymentLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCpCardAcct } from './BoCpCardAcct';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ChecksforPayment" of service "SAPB1".
 */
export class ChecksforPayment extends EntityV4 implements ChecksforPaymentType {
  /**
   * Technical entity name for ChecksforPayment.
   */
  static _entityName = 'ChecksforPayment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
  journalEntry!: JournalEntries;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;

  /**
   * Returns an entity builder to construct instances of `ChecksforPayment`.
   * @returns A builder that constructs instances of entity type `ChecksforPayment`.
   */
  static builder(): EntityBuilderType<ChecksforPayment, ChecksforPaymentType> {
    return EntityV4.entityBuilder(ChecksforPayment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ChecksforPayment` entity type.
   * @returns A `ChecksforPayment` request builder.
   */
  static requestBuilder(): ChecksforPaymentRequestBuilder {
    return new ChecksforPaymentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChecksforPayment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ChecksforPayment`.
   */
  static customField(fieldName: string): CustomFieldV4<ChecksforPayment> {
    return EntityV4.customFieldSelector(fieldName, ChecksforPayment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace ChecksforPayment {
  /**
   * Static representation of the [[checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_KEY: NumberField<ChecksforPayment> = new NumberField('CheckKey', ChecksforPayment, 'Edm.Int32');
  /**
   * Static representation of the [[checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_NUMBER: NumberField<ChecksforPayment> = new NumberField('CheckNumber', ChecksforPayment, 'Edm.Int32');
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<ChecksforPayment> = new StringField('BankCode', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[branch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: StringField<ChecksforPayment> = new StringField('Branch', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[bankName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_NAME: StringField<ChecksforPayment> = new StringField('BankName', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[checkDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DATE: DateField<ChecksforPayment> = new DateField('CheckDate', ChecksforPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_NUMBER: StringField<ChecksforPayment> = new StringField('AccountNumber', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<ChecksforPayment> = new StringField('Details', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[journalEntryReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY_REFERENCE: StringField<ChecksforPayment> = new StringField('JournalEntryReference', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[paymentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DATE: DateField<ChecksforPayment> = new DateField('PaymentDate', ChecksforPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[paymentNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_NO: NumberField<ChecksforPayment> = new NumberField('PaymentNo', ChecksforPayment, 'Edm.Int32');
  /**
   * Static representation of the [[checkAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_AMOUNT: NumberField<ChecksforPayment> = new NumberField('CheckAmount', ChecksforPayment, 'Edm.Double');
  /**
   * Static representation of the [[transferable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFERABLE: EnumField<ChecksforPayment> = new EnumField('Transferable', ChecksforPayment);
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<ChecksforPayment> = new StringField('VendorCode', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[checkCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_CURRENCY: StringField<ChecksforPayment> = new StringField('CheckCurrency', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[canceled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELED: EnumField<ChecksforPayment> = new EnumField('Canceled', ChecksforPayment);
  /**
   * Static representation of the [[cardOrAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_OR_ACCOUNT: EnumField<ChecksforPayment> = new EnumField('CardOrAccount', ChecksforPayment);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<ChecksforPayment> = new EnumField('Printed', ChecksforPayment);
  /**
   * Static representation of the [[vendorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_NAME: StringField<ChecksforPayment> = new StringField('VendorName', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[signature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE: StringField<ChecksforPayment> = new StringField('Signature', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[customerAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ACCOUNT_CODE: StringField<ChecksforPayment> = new StringField('CustomerAccountCode', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[transactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_NUMBER: NumberField<ChecksforPayment> = new NumberField('TransactionNumber', ChecksforPayment, 'Edm.Int32');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<ChecksforPayment> = new StringField('Address', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[createJournalEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_JOURNAL_ENTRY: EnumField<ChecksforPayment> = new EnumField('CreateJournalEntry', ChecksforPayment);
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<ChecksforPayment> = new DateField('UpdateDate', ChecksforPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<ChecksforPayment> = new DateField('CreationDate', ChecksforPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[taxTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TOTAL: NumberField<ChecksforPayment> = new NumberField('TaxTotal', ChecksforPayment, 'Edm.Double');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<ChecksforPayment> = new DateField('TaxDate', ChecksforPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deductionRefundAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_REFUND_AMOUNT: NumberField<ChecksforPayment> = new NumberField('DeductionRefundAmount', ChecksforPayment, 'Edm.Double');
  /**
   * Static representation of the [[printedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED_BY: NumberField<ChecksforPayment> = new NumberField('PrintedBy', ChecksforPayment, 'Edm.Int32');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<ChecksforPayment> = new StringField('CountryCode', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[totalinWords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTALIN_WORDS: StringField<ChecksforPayment> = new StringField('TotalinWords', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[addressName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NAME: StringField<ChecksforPayment> = new StringField('AddressName', ChecksforPayment, 'Edm.String');
  /**
   * Static representation of the [[manualCheck]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_CHECK: EnumField<ChecksforPayment> = new EnumField('ManualCheck', ChecksforPayment);
  /**
   * Static representation of the [[checksforPaymentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECKSFOR_PAYMENT_LINES: CollectionField<ChecksforPayment, ChecksforPaymentLine> = new CollectionField('ChecksforPaymentLines', ChecksforPayment, ChecksforPaymentLine);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<ChecksforPayment, JournalEntries> = new OneToOneLink('JournalEntry', ChecksforPayment, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<ChecksforPayment, Countries> = new OneToOneLink('Country', ChecksforPayment, Countries);
  /**
   * All fields of the ChecksforPayment entity.
   */
  export const _allFields: Array<NumberField<ChecksforPayment> | StringField<ChecksforPayment> | DateField<ChecksforPayment> | EnumField<ChecksforPayment> | CollectionField<ChecksforPayment, ChecksforPaymentLine> | OneToOneLink<ChecksforPayment, JournalEntries> | OneToOneLink<ChecksforPayment, Countries>> = [
    ChecksforPayment.CHECK_KEY,
    ChecksforPayment.CHECK_NUMBER,
    ChecksforPayment.BANK_CODE,
    ChecksforPayment.BRANCH,
    ChecksforPayment.BANK_NAME,
    ChecksforPayment.CHECK_DATE,
    ChecksforPayment.ACCOUNT_NUMBER,
    ChecksforPayment.DETAILS,
    ChecksforPayment.JOURNAL_ENTRY_REFERENCE,
    ChecksforPayment.PAYMENT_DATE,
    ChecksforPayment.PAYMENT_NO,
    ChecksforPayment.CHECK_AMOUNT,
    ChecksforPayment.TRANSFERABLE,
    ChecksforPayment.VENDOR_CODE,
    ChecksforPayment.CHECK_CURRENCY,
    ChecksforPayment.CANCELED,
    ChecksforPayment.CARD_OR_ACCOUNT,
    ChecksforPayment.PRINTED,
    ChecksforPayment.VENDOR_NAME,
    ChecksforPayment.SIGNATURE,
    ChecksforPayment.CUSTOMER_ACCOUNT_CODE,
    ChecksforPayment.TRANSACTION_NUMBER,
    ChecksforPayment.ADDRESS,
    ChecksforPayment.CREATE_JOURNAL_ENTRY,
    ChecksforPayment.UPDATE_DATE,
    ChecksforPayment.CREATION_DATE,
    ChecksforPayment.TAX_TOTAL,
    ChecksforPayment.TAX_DATE,
    ChecksforPayment.DEDUCTION_REFUND_AMOUNT,
    ChecksforPayment.PRINTED_BY,
    ChecksforPayment.COUNTRY_CODE,
    ChecksforPayment.TOTALIN_WORDS,
    ChecksforPayment.ADDRESS_NAME,
    ChecksforPayment.MANUAL_CHECK,
    ChecksforPayment.CHECKSFOR_PAYMENT_LINES,
    ChecksforPayment.JOURNAL_ENTRY,
    ChecksforPayment.COUNTRY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ChecksforPayment> = new AllFields('*', ChecksforPayment);
  /**
   * All key fields of the ChecksforPayment entity.
   */
  export const _keyFields: Array<Field<ChecksforPayment>> = [ChecksforPayment.CHECK_KEY];
  /**
   * Mapping of all key field names to the respective static field property ChecksforPayment.
   */
  export const _keys: { [keys: string]: Field<ChecksforPayment> } = ChecksforPayment._keyFields.reduce((acc: { [keys: string]: Field<ChecksforPayment> }, field: Field<ChecksforPayment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
