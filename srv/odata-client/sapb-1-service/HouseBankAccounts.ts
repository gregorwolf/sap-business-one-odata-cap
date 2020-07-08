/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HouseBankAccountsRequestBuilder } from './HouseBankAccountsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "HouseBankAccounts" of service "SAPB1".
 */
export class HouseBankAccounts extends Entity implements HouseBankAccountsType {
  /**
   * Technical entity name for HouseBankAccounts.
   */
  static _entityName = 'HouseBankAccounts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HouseBankAccounts.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  wizardPaymentMethods!: WizardPaymentMethods[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[Banks]] entity.
   */
  bank!: Banks;
  /**
   * One-to-many navigation property to the [[BankStatements]] entity.
   */
  bankStatements!: BankStatements[];

  /**
   * Returns an entity builder to construct instances `HouseBankAccounts`.
   * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
   */
  static builder(): EntityBuilderType<HouseBankAccounts, HouseBankAccountsTypeForceMandatory> {
    return Entity.entityBuilder(HouseBankAccounts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HouseBankAccounts` entity type.
   * @returns A `HouseBankAccounts` request builder.
   */
  static requestBuilder(): HouseBankAccountsRequestBuilder {
    return new HouseBankAccountsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HouseBankAccounts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
   */
  static customField(fieldName: string): CustomField<HouseBankAccounts> {
    return Entity.customFieldSelector(fieldName, HouseBankAccounts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace HouseBankAccounts {
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<HouseBankAccounts> = new StringField('BankCode', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[accNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACC_NO: StringField<HouseBankAccounts> = new StringField('AccNo', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[branch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: StringField<HouseBankAccounts> = new StringField('Branch', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[nextCheckNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CHECK_NO: NumberField<HouseBankAccounts> = new NumberField('NextCheckNo', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT: StringField<HouseBankAccounts> = new StringField('GLAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<HouseBankAccounts> = new StringField('Street', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[block]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK: StringField<HouseBankAccounts> = new StringField('Block', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<HouseBankAccounts> = new StringField('ZipCode', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<HouseBankAccounts> = new StringField('City', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<HouseBankAccounts> = new StringField('County', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<HouseBankAccounts> = new StringField('Country', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<HouseBankAccounts> = new StringField('State', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[controlKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_KEY: StringField<HouseBankAccounts> = new StringField('ControlKey', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[userNo1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NO_1: StringField<HouseBankAccounts> = new StringField('UserNo1', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[userNo2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NO_2: StringField<HouseBankAccounts> = new StringField('UserNo2', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[userNo3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NO_3: StringField<HouseBankAccounts> = new StringField('UserNo3', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[userNo4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NO_4: StringField<HouseBankAccounts> = new StringField('UserNo4', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[iban]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN: StringField<HouseBankAccounts> = new StringField('IBAN', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[debtofDiscountedBillofExc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBTOF_DISCOUNTED_BILLOF_EXC: StringField<HouseBankAccounts> = new StringField('DebtofDiscountedBillofExc', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[toleranceDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOLERANCE_DAYS: NumberField<HouseBankAccounts> = new NumberField('ToleranceDays', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[minAmountofBillofExchang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_AMOUNTOF_BILLOF_EXCHANG: NumberField<HouseBankAccounts> = new NumberField('MinAmountofBillofExchang', HouseBankAccounts, 'Edm.Double');
  /**
   * Static representation of the [[maxAmountofBillofExchan]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_AMOUNTOF_BILLOF_EXCHAN: NumberField<HouseBankAccounts> = new NumberField('MaxAmountofBillofExchan', HouseBankAccounts, 'Edm.Double');
  /**
   * Static representation of the [[discountLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_LIMIT: NumberField<HouseBankAccounts> = new NumberField('DiscountLimit', HouseBankAccounts, 'Edm.Double');
  /**
   * Static representation of the [[daysInAdvance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAYS_IN_ADVANCE: NumberField<HouseBankAccounts> = new NumberField('DaysInAdvance', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[bankonCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANKON_COLLECTION: StringField<HouseBankAccounts> = new StringField('BankonCollection', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[bankonDiscounted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANKON_DISCOUNTED: StringField<HouseBankAccounts> = new StringField('BankonDiscounted', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[glInterimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_INTERIM_ACCOUNT: StringField<HouseBankAccounts> = new StringField('GLInterimAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSOLUTE_ENTRY: NumberField<HouseBankAccounts> = new NumberField('AbsoluteEntry', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[bankKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_KEY: NumberField<HouseBankAccounts> = new NumberField('BankKey', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: StringField<HouseBankAccounts> = new StringField('TemplateName', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[maximumLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_LINES: NumberField<HouseBankAccounts> = new NumberField('MaximumLines', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[customerIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ID_NUMBER: StringField<HouseBankAccounts> = new StringField('CustomerIdNumber', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[isrBillerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISR_BILLER_ID: StringField<HouseBankAccounts> = new StringField('ISRBillerID', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[isrType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISR_TYPE: NumberField<HouseBankAccounts> = new NumberField('ISRType', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[accountCheckDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CHECK_DIGIT: StringField<HouseBankAccounts> = new StringField('AccountCheckDigit', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[ourNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUR_NUMBER: NumberField<HouseBankAccounts> = new NumberField('OurNumber', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[agreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREEMENT_NUMBER: StringField<HouseBankAccounts> = new StringField('AgreementNumber', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<HouseBankAccounts> = new StringField('AddressType', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NO: StringField<HouseBankAccounts> = new StringField('StreetNo', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[building]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING: StringField<HouseBankAccounts> = new StringField('Building', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[incomingPaymentSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENT_SERIES: NumberField<HouseBankAccounts> = new NumberField('IncomingPaymentSeries', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[outgoingPaymentSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTGOING_PAYMENT_SERIES: NumberField<HouseBankAccounts> = new NumberField('OutgoingPaymentSeries', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[journalEntrySeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY_SERIES: NumberField<HouseBankAccounts> = new NumberField('JournalEntrySeries', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the [[importFileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NAME: StringField<HouseBankAccounts> = new StringField('ImportFileName', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[accountName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_NAME: StringField<HouseBankAccounts> = new StringField('AccountName', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[bicSwiftCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIC_SWIFT_CODE: StringField<HouseBankAccounts> = new StringField('BICSwiftCode', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[fineAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINE_ACCOUNT: StringField<HouseBankAccounts> = new StringField('FineAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[interestAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_ACCOUNT: StringField<HouseBankAccounts> = new StringField('InterestAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[discountAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_ACCOUNT: StringField<HouseBankAccounts> = new StringField('DiscountAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[serviceFeeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_FEE_ACCOUNT: StringField<HouseBankAccounts> = new StringField('ServiceFeeAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[iofTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IOF_TAX_ACCOUNT: StringField<HouseBankAccounts> = new StringField('IOFTaxAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[otherExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHER_EXPENSES_ACCOUNT: StringField<HouseBankAccounts> = new StringField('OtherExpensesAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[otherIncomesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHER_INCOMES_ACCOUNT: StringField<HouseBankAccounts> = new StringField('OtherIncomesAccount', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[retornoFileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETORNO_FILE_NAME: StringField<HouseBankAccounts> = new StringField('RetornoFileName', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[branchCheckDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_CHECK_DIGIT: StringField<HouseBankAccounts> = new StringField('BranchCheckDigit', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[collectionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTION_CODE: StringField<HouseBankAccounts> = new StringField('CollectionCode', HouseBankAccounts, 'Edm.String');
  /**
   * Static representation of the [[fileSeqNextNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_SEQ_NEXT_NUMBER: NumberField<HouseBankAccounts> = new NumberField('FileSeqNextNumber', HouseBankAccounts, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHODS: OneToManyLink<HouseBankAccounts, WizardPaymentMethods> = new OneToManyLink('WizardPaymentMethods', HouseBankAccounts, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<HouseBankAccounts, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', HouseBankAccounts, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<HouseBankAccounts, Countries> = new OneToOneLink('Country2', HouseBankAccounts, Countries);
  /**
   * Static representation of the one-to-one navigation property [[bank]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK: OneToOneLink<HouseBankAccounts, Banks> = new OneToOneLink('Bank', HouseBankAccounts, Banks);
  /**
   * Static representation of the one-to-many navigation property [[bankStatements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_STATEMENTS: OneToManyLink<HouseBankAccounts, BankStatements> = new OneToManyLink('BankStatements', HouseBankAccounts, BankStatements);
  /**
   * All fields of the HouseBankAccounts entity.
   */
  export const _allFields: Array<StringField<HouseBankAccounts> | NumberField<HouseBankAccounts> | OneToManyLink<HouseBankAccounts, WizardPaymentMethods> | OneToOneLink<HouseBankAccounts, ChartOfAccounts> | OneToOneLink<HouseBankAccounts, Countries> | OneToOneLink<HouseBankAccounts, Banks> | OneToManyLink<HouseBankAccounts, BankStatements>> = [
    HouseBankAccounts.BANK_CODE,
    HouseBankAccounts.ACC_NO,
    HouseBankAccounts.BRANCH,
    HouseBankAccounts.NEXT_CHECK_NO,
    HouseBankAccounts.GL_ACCOUNT,
    HouseBankAccounts.STREET,
    HouseBankAccounts.BLOCK,
    HouseBankAccounts.ZIP_CODE,
    HouseBankAccounts.CITY,
    HouseBankAccounts.COUNTY,
    HouseBankAccounts.COUNTRY,
    HouseBankAccounts.STATE,
    HouseBankAccounts.CONTROL_KEY,
    HouseBankAccounts.USER_NO_1,
    HouseBankAccounts.USER_NO_2,
    HouseBankAccounts.USER_NO_3,
    HouseBankAccounts.USER_NO_4,
    HouseBankAccounts.IBAN,
    HouseBankAccounts.DEBTOF_DISCOUNTED_BILLOF_EXC,
    HouseBankAccounts.TOLERANCE_DAYS,
    HouseBankAccounts.MIN_AMOUNTOF_BILLOF_EXCHANG,
    HouseBankAccounts.MAX_AMOUNTOF_BILLOF_EXCHAN,
    HouseBankAccounts.DISCOUNT_LIMIT,
    HouseBankAccounts.DAYS_IN_ADVANCE,
    HouseBankAccounts.BANKON_COLLECTION,
    HouseBankAccounts.BANKON_DISCOUNTED,
    HouseBankAccounts.GL_INTERIM_ACCOUNT,
    HouseBankAccounts.ABSOLUTE_ENTRY,
    HouseBankAccounts.BANK_KEY,
    HouseBankAccounts.TEMPLATE_NAME,
    HouseBankAccounts.MAXIMUM_LINES,
    HouseBankAccounts.CUSTOMER_ID_NUMBER,
    HouseBankAccounts.ISR_BILLER_ID,
    HouseBankAccounts.ISR_TYPE,
    HouseBankAccounts.ACCOUNT_CHECK_DIGIT,
    HouseBankAccounts.OUR_NUMBER,
    HouseBankAccounts.AGREEMENT_NUMBER,
    HouseBankAccounts.ADDRESS_TYPE,
    HouseBankAccounts.STREET_NO,
    HouseBankAccounts.BUILDING,
    HouseBankAccounts.INCOMING_PAYMENT_SERIES,
    HouseBankAccounts.OUTGOING_PAYMENT_SERIES,
    HouseBankAccounts.JOURNAL_ENTRY_SERIES,
    HouseBankAccounts.IMPORT_FILE_NAME,
    HouseBankAccounts.ACCOUNT_NAME,
    HouseBankAccounts.BIC_SWIFT_CODE,
    HouseBankAccounts.FINE_ACCOUNT,
    HouseBankAccounts.INTEREST_ACCOUNT,
    HouseBankAccounts.DISCOUNT_ACCOUNT,
    HouseBankAccounts.SERVICE_FEE_ACCOUNT,
    HouseBankAccounts.IOF_TAX_ACCOUNT,
    HouseBankAccounts.OTHER_EXPENSES_ACCOUNT,
    HouseBankAccounts.OTHER_INCOMES_ACCOUNT,
    HouseBankAccounts.RETORNO_FILE_NAME,
    HouseBankAccounts.BRANCH_CHECK_DIGIT,
    HouseBankAccounts.COLLECTION_CODE,
    HouseBankAccounts.FILE_SEQ_NEXT_NUMBER,
    HouseBankAccounts.WIZARD_PAYMENT_METHODS,
    HouseBankAccounts.CHART_OF_ACCOUNT,
    HouseBankAccounts.COUNTRY_2,
    HouseBankAccounts.BANK,
    HouseBankAccounts.BANK_STATEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HouseBankAccounts> = new AllFields('*', HouseBankAccounts);
  /**
   * All key fields of the HouseBankAccounts entity.
   */
  export const _keyFields: Array<Field<HouseBankAccounts>> = [HouseBankAccounts.ABSOLUTE_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property HouseBankAccounts.
   */
  export const _keys: { [keys: string]: Field<HouseBankAccounts> } = HouseBankAccounts._keyFields.reduce((acc: { [keys: string]: Field<HouseBankAccounts> }, field: Field<HouseBankAccounts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
