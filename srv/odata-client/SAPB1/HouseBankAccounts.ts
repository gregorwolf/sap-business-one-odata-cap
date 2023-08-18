/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { HouseBankAccountsApi } from './HouseBankAccountsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintOnEnum } from './PrintOnEnum';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import { BankStatements, BankStatementsType } from './BankStatements';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';
import { Banks, BanksType } from './Banks';

/**
 * This class represents the entity "HouseBankAccounts" of service "SAPB1".
 */
export class HouseBankAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HouseBankAccountsType<T>
{
  /**
   * Technical entity name for HouseBankAccounts.
   */
  static _entityName = 'HouseBankAccounts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the HouseBankAccounts entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acc No.
   * @nullable
   */
  accNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Check No.
   * @nullable
   */
  nextCheckNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsc 1 Street Alias.
   * @nullable
   */
  dsc1StreetAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bisr.
   * @nullable
   */
  bisr?: BoYesNoEnum | null;
  /**
   * Control Key.
   * @nullable
   */
  controlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User No 1.
   * @nullable
   */
  userNo1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User No 2.
   * @nullable
   */
  userNo2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User No 3.
   * @nullable
   */
  userNo3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User No 4.
   * @nullable
   */
  userNo4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debtof Discounted Billof Exc.
   * @nullable
   */
  debtofDiscountedBillofExc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tolerance Days.
   * @nullable
   */
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Min Amountof Billof Exchang.
   * @nullable
   */
  minAmountofBillofExchang?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Amountof Billof Exchan.
   * @nullable
   */
  maxAmountofBillofExchan?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Discount Limit.
   * @nullable
   */
  discountLimit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Days In Advance.
   * @nullable
   */
  daysInAdvance?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bankon Collection.
   * @nullable
   */
  bankonCollection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bankon Discounted.
   * @nullable
   */
  bankonDiscounted?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Interim Account.
   * @nullable
   */
  glInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Key.
   * @nullable
   */
  bankKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Lock Checks Printing.
   * @nullable
   */
  lockChecksPrinting?: BoYesNoEnum | null;
  /**
   * Template Name.
   * @nullable
   */
  templateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Lines.
   * @nullable
   */
  maximumLines?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Print On.
   * @nullable
   */
  printOn?: PrintOnEnum | null;
  /**
   * Customer Id Number.
   * @nullable
   */
  customerIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Isr Type.
   * @nullable
   */
  isrType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Account Check Digit.
   * @nullable
   */
  accountCheckDigit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Our Number.
   * @nullable
   */
  ourNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Agreement Number.
   * @nullable
   */
  agreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * @nullable
   */
  building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoming Payment Series.
   * @nullable
   */
  incomingPaymentSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Outgoing Payment Series.
   * @nullable
   */
  outgoingPaymentSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Journal Entry Series.
   * @nullable
   */
  journalEntrySeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Import File Name.
   * @nullable
   */
  importFileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bic Swift Code.
   * @nullable
   */
  bicSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Account.
   * @nullable
   */
  fineAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Account.
   * @nullable
   */
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Account.
   * @nullable
   */
  discountAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Fee Account.
   * @nullable
   */
  serviceFeeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iof Tax Account.
   * @nullable
   */
  iofTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Other Expenses Account.
   * @nullable
   */
  otherExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Other Incomes Account.
   * @nullable
   */
  otherIncomesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retorno File Name.
   * @nullable
   */
  retornoFileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Check Digit.
   * @nullable
   */
  branchCheckDigit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Code.
   * @nullable
   */
  collectionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Seq Next Number.
   * @nullable
   */
  fileSeqNextNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * No Validation For Starting Ending Bal.
   * @nullable
   */
  noValidationForStartingEndingBal?: BoYesNoEnum | null;
  /**
   * E Check.
   * @nullable
   */
  eCheck?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethods!: WizardPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link BankStatements} entity.
   */
  bankStatements!: BankStatements<T>[];
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link Banks} entity.
   */
  bank?: Banks<T> | null;

  constructor(readonly _entityApi: HouseBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface HouseBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  accNo?: DeserializedType<T, 'Edm.String'> | null;
  branch?: DeserializedType<T, 'Edm.String'> | null;
  nextCheckNo?: DeserializedType<T, 'Edm.Int32'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  dsc1StreetAlias?: DeserializedType<T, 'Edm.String'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  bisr?: BoYesNoEnum | null;
  controlKey?: DeserializedType<T, 'Edm.String'> | null;
  userNo1?: DeserializedType<T, 'Edm.String'> | null;
  userNo2?: DeserializedType<T, 'Edm.String'> | null;
  userNo3?: DeserializedType<T, 'Edm.String'> | null;
  userNo4?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  debtofDiscountedBillofExc?: DeserializedType<T, 'Edm.String'> | null;
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  minAmountofBillofExchang?: DeserializedType<T, 'Edm.Double'> | null;
  maxAmountofBillofExchan?: DeserializedType<T, 'Edm.Double'> | null;
  discountLimit?: DeserializedType<T, 'Edm.Double'> | null;
  daysInAdvance?: DeserializedType<T, 'Edm.Int32'> | null;
  bankonCollection?: DeserializedType<T, 'Edm.String'> | null;
  bankonDiscounted?: DeserializedType<T, 'Edm.String'> | null;
  glInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  bankKey?: DeserializedType<T, 'Edm.Int32'> | null;
  lockChecksPrinting?: BoYesNoEnum | null;
  templateName?: DeserializedType<T, 'Edm.String'> | null;
  maximumLines?: DeserializedType<T, 'Edm.Int32'> | null;
  printOn?: PrintOnEnum | null;
  customerIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  isrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  isrType?: DeserializedType<T, 'Edm.Int32'> | null;
  accountCheckDigit?: DeserializedType<T, 'Edm.String'> | null;
  ourNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  agreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  building?: DeserializedType<T, 'Edm.String'> | null;
  incomingPaymentSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  outgoingPaymentSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  journalEntrySeries?: DeserializedType<T, 'Edm.Int32'> | null;
  importFileName?: DeserializedType<T, 'Edm.String'> | null;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  bicSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  fineAccount?: DeserializedType<T, 'Edm.String'> | null;
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  discountAccount?: DeserializedType<T, 'Edm.String'> | null;
  serviceFeeAccount?: DeserializedType<T, 'Edm.String'> | null;
  iofTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  otherExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  otherIncomesAccount?: DeserializedType<T, 'Edm.String'> | null;
  retornoFileName?: DeserializedType<T, 'Edm.String'> | null;
  branchCheckDigit?: DeserializedType<T, 'Edm.String'> | null;
  collectionCode?: DeserializedType<T, 'Edm.String'> | null;
  fileSeqNextNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  noValidationForStartingEndingBal?: BoYesNoEnum | null;
  eCheck?: BoYesNoEnum | null;
  wizardPaymentMethods: WizardPaymentMethodsType<T>[];
  bankStatements: BankStatementsType<T>[];
  chartOfAccount?: ChartOfAccountsType<T> | null;
  country2?: CountriesType<T> | null;
  bank?: BanksType<T> | null;
}
