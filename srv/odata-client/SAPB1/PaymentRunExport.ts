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
import { PaymentRunExportLine } from './PaymentRunExportLine';
import type { PaymentRunExportApi } from './PaymentRunExportApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoOpexStatus } from './BoOpexStatus';
import { PaymentRunExportRowTypeEnum } from './PaymentRunExportRowTypeEnum';
import {
  BankChargesAllocationCodes,
  BankChargesAllocationCodesType
} from './BankChargesAllocationCodes';

/**
 * This class represents the entity "PaymentRunExport" of service "SAPB1".
 */
export class PaymentRunExport<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentRunExportType<T>
{
  /**
   * Technical entity name for PaymentRunExport.
   */
  static _entityName = 'PaymentRunExport';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PaymentRunExport entity
   */
  static _keys = ['AbsoluteEntry'];
  /**
   * Absolute Entry.
   */
  absoluteEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Run Date.
   * @nullable
   */
  runDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Vendor Num.
   * @nullable
   */
  vendorNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Num.
   * @nullable
   */
  customerNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Countery.
   * @nullable
   */
  countery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Tax Num.
   * @nullable
   */
  companyTaxNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Name.
   * @nullable
   */
  payeeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Postal Code.
   * @nullable
   */
  payeePostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee City.
   * @nullable
   */
  payeeCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Street.
   * @nullable
   */
  payeeStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Country.
   * @nullable
   */
  payeeCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee State.
   * @nullable
   */
  payeeState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Name.
   * @nullable
   */
  payeeBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Zip.
   * @nullable
   */
  payeeBankZip?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank City.
   * @nullable
   */
  payeeBankCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Street.
   * @nullable
   */
  payeeBankStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Country.
   * @nullable
   */
  payeeBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Account.
   * @nullable
   */
  payeeBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Code.
   * @nullable
   */
  payeeBankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Ctrl Key.
   * @nullable
   */
  payeeBankCtrlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Swift Num.
   * @nullable
   */
  payeeBankSwiftNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Iban.
   * @nullable
   */
  payeeBankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Iban.
   * @nullable
   */
  bankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Amount Local.
   * @nullable
   */
  docAmountLocal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Currnecy.
   * @nullable
   */
  docCurrnecy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Amount Forign.
   * @nullable
   */
  docAmountForign?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Cash Discount.
   * @nullable
   */
  docCashDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Cash Discount Forign.
   * @nullable
   */
  docCashDiscountForign?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Num Offield Paid.
   * @nullable
   */
  docNumOffieldPaid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wiz Code.
   * @nullable
   */
  wizCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Collection Authorization.
   * @nullable
   */
  collectionAuthorization?: BoYesNoEnum | null;
  /**
   * Payee Bank Post Office.
   * @nullable
   */
  payeeBankPostOffice?: BoYesNoEnum | null;
  /**
   * Payee Bank Next Check Number.
   * @nullable
   */
  payeeBankNextCheckNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payee Bank House Bank.
   * @nullable
   */
  payeeBankHouseBank?: BoYesNoEnum | null;
  /**
   * Payee Bank Block.
   * @nullable
   */
  payeeBankBlock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank County.
   * @nullable
   */
  payeeBankCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank State.
   * @nullable
   */
  payeeBankState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Bisr.
   * @nullable
   */
  payeeBankBisr?: BoYesNoEnum | null;
  /**
   * Payee Bank User Num 1.
   * @nullable
   */
  payeeBankUserNum1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank User Num 2.
   * @nullable
   */
  payeeBankUserNum2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank User Num 3.
   * @nullable
   */
  payeeBankUserNum3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank User Num 4.
   * @nullable
   */
  payeeBankUserNum4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instruction Key.
   * @nullable
   */
  instructionKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Format.
   * @nullable
   */
  paymentFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Address.
   * @nullable
   */
  companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BoOpexStatus | null;
  /**
   * Comp Isr Biller Id.
   * @nullable
   */
  compIsrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Isr Biller Id.
   * @nullable
   */
  vendorIsrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Bank Branch.
   * @nullable
   */
  payeeBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank Branch.
   * @nullable
   */
  paymentBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Name.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User E Mail.
   * @nullable
   */
  userEMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Mobile Phone Number.
   * @nullable
   */
  userMobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Fax Number.
   * @nullable
   */
  userFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Department.
   * @nullable
   */
  userDepartment?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Debit Memo.
   * @nullable
   */
  debitMemo?: BoYesNoEnum | null;
  /**
   * Eu Internal Transfer.
   * @nullable
   */
  euInternalTransfer?: BoYesNoEnum | null;
  /**
   * File Path.
   * @nullable
   */
  filePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Party.
   * @nullable
   */
  orderingParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank Control Key.
   * @nullable
   */
  paymentBankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Tax Number.
   * @nullable
   */
  payeeTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Key Code.
   * @nullable
   */
  paymentKeyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Reference Details.
   * @nullable
   */
  payeeReferenceDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format Name.
   * @nullable
   */
  formatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Donewith Check.
   * @nullable
   */
  paymentDonewithCheck?: BoYesNoEnum | null;
  /**
   * Company Block.
   * @nullable
   */
  companyBlock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company City.
   * @nullable
   */
  companyCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company County.
   * @nullable
   */
  companyCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company State.
   * @nullable
   */
  companyState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Street.
   * @nullable
   */
  companyStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Zip Code.
   * @nullable
   */
  companyZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank Charges.
   * @nullable
   */
  paymentBankCharges?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank User No 1.
   * @nullable
   */
  paymentBankUserNo1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank User No 2.
   * @nullable
   */
  paymentBankUserNo2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank User No 3.
   * @nullable
   */
  paymentBankUserNo3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank User No 4.
   * @nullable
   */
  paymentBankUserNo4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank Charges Allocation Code.
   * @nullable
   */
  paymentBankChargesAllocationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Order Num.
   * @nullable
   */
  paymentOrderNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Free Text 1.
   * @nullable
   */
  freeText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text 2.
   * @nullable
   */
  freeText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text 3.
   * @nullable
   */
  freeText3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Row Type.
   * @nullable
   */
  rowType?: PaymentRunExportRowTypeEnum | null;
  /**
   * Payment Run Export Lines.
   * @nullable
   */
  paymentRunExportLines?: PaymentRunExportLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BankChargesAllocationCodes} entity.
   */
  bankChargesAllocationCode?: BankChargesAllocationCodes<T> | null;

  constructor(readonly _entityApi: PaymentRunExportApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentRunExportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absoluteEntry: DeserializedType<T, 'Edm.Int32'>;
  runDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  vendorNum?: DeserializedType<T, 'Edm.String'> | null;
  customerNum?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  fiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  countery?: DeserializedType<T, 'Edm.String'> | null;
  companyTaxNum?: DeserializedType<T, 'Edm.String'> | null;
  payeeName?: DeserializedType<T, 'Edm.String'> | null;
  payeePostalCode?: DeserializedType<T, 'Edm.String'> | null;
  payeeCity?: DeserializedType<T, 'Edm.String'> | null;
  payeeStreet?: DeserializedType<T, 'Edm.String'> | null;
  payeeCountry?: DeserializedType<T, 'Edm.String'> | null;
  payeeState?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankName?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankZip?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCity?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankStreet?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCode?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCtrlKey?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankSwiftNum?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankIban?: DeserializedType<T, 'Edm.String'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  bankIban?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  docAmountLocal?: DeserializedType<T, 'Edm.Double'> | null;
  docCurrnecy?: DeserializedType<T, 'Edm.String'> | null;
  docAmountForign?: DeserializedType<T, 'Edm.Double'> | null;
  docCashDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  docCashDiscountForign?: DeserializedType<T, 'Edm.Double'> | null;
  docNumOffieldPaid?: DeserializedType<T, 'Edm.Int32'> | null;
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  wizCode?: DeserializedType<T, 'Edm.Int32'> | null;
  collectionAuthorization?: BoYesNoEnum | null;
  payeeBankPostOffice?: BoYesNoEnum | null;
  payeeBankNextCheckNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  payeeBankHouseBank?: BoYesNoEnum | null;
  payeeBankBlock?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankCounty?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankState?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankBisr?: BoYesNoEnum | null;
  payeeBankUserNum1?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankUserNum2?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankUserNum3?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankUserNum4?: DeserializedType<T, 'Edm.String'> | null;
  instructionKey?: DeserializedType<T, 'Edm.String'> | null;
  paymentFormat?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  status?: BoOpexStatus | null;
  compIsrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  vendorIsrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  payeeBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  userEMail?: DeserializedType<T, 'Edm.String'> | null;
  userMobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  userFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  userDepartment?: DeserializedType<T, 'Edm.Int32'> | null;
  debitMemo?: BoYesNoEnum | null;
  euInternalTransfer?: BoYesNoEnum | null;
  filePath?: DeserializedType<T, 'Edm.String'> | null;
  orderingParty?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  payeeTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentKeyCode?: DeserializedType<T, 'Edm.String'> | null;
  payeeReferenceDetails?: DeserializedType<T, 'Edm.String'> | null;
  formatName?: DeserializedType<T, 'Edm.String'> | null;
  paymentDonewithCheck?: BoYesNoEnum | null;
  companyBlock?: DeserializedType<T, 'Edm.String'> | null;
  companyCity?: DeserializedType<T, 'Edm.String'> | null;
  companyCounty?: DeserializedType<T, 'Edm.String'> | null;
  companyState?: DeserializedType<T, 'Edm.String'> | null;
  companyStreet?: DeserializedType<T, 'Edm.String'> | null;
  companyZipCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankCharges?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankUserNo1?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankUserNo2?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankUserNo3?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankUserNo4?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankChargesAllocationCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentOrderNum?: DeserializedType<T, 'Edm.Int32'> | null;
  freeText1?: DeserializedType<T, 'Edm.String'> | null;
  freeText2?: DeserializedType<T, 'Edm.String'> | null;
  freeText3?: DeserializedType<T, 'Edm.String'> | null;
  rowType?: PaymentRunExportRowTypeEnum | null;
  paymentRunExportLines?: PaymentRunExportLine<T>[] | null;
  bankChargesAllocationCode?: BankChargesAllocationCodesType<T> | null;
}
