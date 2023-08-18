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
import { PaymentCheck } from './PaymentCheck';
import { PaymentInvoice } from './PaymentInvoice';
import { PaymentCreditCard } from './PaymentCreditCard';
import { PaymentAccount } from './PaymentAccount';
import { PaymentDocumentReferences } from './PaymentDocumentReferences';
import { BillOfExchange, BillOfExchangeField } from './BillOfExchange';
import { WithholdingTaxCertificatesData } from './WithholdingTaxCertificatesData';
import { ElectronicProtocol } from './ElectronicProtocol';
import { CashFlowAssignment } from './CashFlowAssignment';
import { PaymentsApprovalRequest } from './PaymentsApprovalRequest';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import type { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { BoRcptTypes } from './BoRcptTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBoeStatus } from './BoBoeStatus';
import { BoPaymentPriorities } from './BoPaymentPriorities';
import { BoOrctPaymentTypeEnum } from './BoOrctPaymentTypeEnum';
import { BoPaymentsObjectType } from './BoPaymentsObjectType';
import { PaymentsAuthorizationStatusEnum } from './PaymentsAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Currencies, CurrenciesType } from './Currencies';
import { Projects, ProjectsType } from './Projects';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { Countries, CountriesType } from './Countries';
import { VatGroups, VatGroupsType } from './VatGroups';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "IncomingPayments" of service "SAPB1".
 */
export class IncomingPayments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IncomingPaymentsType<T>
{
  /**
   * Technical entity name for IncomingPayments.
   */
  static _entityName = 'IncomingPayments';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IncomingPayments entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: BoRcptTypes | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Sum.
   * @nullable
   */
  cashSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Check Account.
   * @nullable
   */
  checkAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Account.
   * @nullable
   */
  transferAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Sum.
   * @nullable
   */
  transferSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Transfer Date.
   * @nullable
   */
  transferDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Transfer Reference.
   * @nullable
   */
  transferReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Local Currency.
   * @nullable
   */
  localCurrency?: BoYesNoEnum | null;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter Reference.
   * @nullable
   */
  counterReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split Transaction.
   * @nullable
   */
  splitTransaction?: BoYesNoEnum | null;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Apply Vat.
   * @nullable
   */
  applyVat?: BoYesNoEnum | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Is Local.
   * @nullable
   */
  currencyIsLocal?: BoYesNoEnum | null;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Deduction Sum.
   * @nullable
   */
  deductionSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cash Sum Fc.
   * @nullable
   */
  cashSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cash Sum Sys.
   * @nullable
   */
  cashSumSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Boe Account.
   * @nullable
   */
  boeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Exchange Amount.
   * @nullable
   */
  billOfExchangeAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Billof Exchange Status.
   * @nullable
   */
  billofExchangeStatus?: BoBoeStatus | null;
  /**
   * Bill Of Exchange Amount Fc.
   * @nullable
   */
  billOfExchangeAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bill Of Exchange Amount Sc.
   * @nullable
   */
  billOfExchangeAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bill Of Exchange Agent.
   * @nullable
   */
  billOfExchangeAgent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Amount Sc.
   * @nullable
   */
  wtAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Account.
   * @nullable
   */
  wtAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Taxable Amount.
   * @nullable
   */
  wtTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Proforma.
   * @nullable
   */
  proforma?: BoYesNoEnum | null;
  /**
   * Pay To Bank Code.
   * @nullable
   */
  payToBankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Branch.
   * @nullable
   */
  payToBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Account No.
   * @nullable
   */
  payToBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Code.
   * @nullable
   */
  payToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Country.
   * @nullable
   */
  payToBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pay To Bank.
   * @nullable
   */
  isPayToBank?: BoYesNoEnum | null;
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Priority.
   * @nullable
   */
  paymentPriority?: BoPaymentPriorities | null;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Charge Amount.
   * @nullable
   */
  bankChargeAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bank Charge Amount In Fc.
   * @nullable
   */
  bankChargeAmountInFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bank Charge Amount In Sc.
   * @nullable
   */
  bankChargeAmountInSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Under Overpaymentdifference.
   * @nullable
   */
  underOverpaymentdifference?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Under Overpaymentdiff Sc.
   * @nullable
   */
  underOverpaymentdiffSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Base Sum.
   * @nullable
   */
  wtBaseSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Base Sum Fc.
   * @nullable
   */
  wtBaseSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Base Sum Sc.
   * @nullable
   */
  wtBaseSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Type.
   * @nullable
   */
  paymentType?: BoOrctPaymentTypeEnum | null;
  /**
   * Transfer Real Amount.
   * @nullable
   */
  transferRealAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: BoPaymentsObjectType | null;
  /**
   * Doc Typte.
   * @nullable
   */
  docTypte?: BoRcptTypes | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cancelled.
   * @nullable
   */
  cancelled?: BoYesNoEnum | null;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Under Overpaymentdiff Fc.
   * @nullable
   */
  underOverpaymentdiffFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Authorization Status.
   * @nullable
   */
  authorizationStatus?: PaymentsAuthorizationStatusEnum | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blanket Agreement.
   * @nullable
   */
  blanketAgreement?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment By Wt Certif.
   * @nullable
   */
  paymentByWtCertif?: BoYesNoEnum | null;
  /**
   * Cig.
   * @nullable
   */
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cup.
   * @nullable
   */
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Signature Input Message.
   * @nullable
   */
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Digest.
   * @nullable
   */
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Number.
   * @nullable
   */
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Private Key Version.
   * @nullable
   */
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Doc Export Format.
   * @nullable
   */
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Elec Comm Status.
   * @nullable
   */
  elecCommStatus?: ElecCommStatusEnum | null;
  /**
   * Elec Comm Message.
   * @nullable
   */
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Split Vendor Credit Row.
   * @nullable
   */
  splitVendorCreditRow?: BoYesNoEnum | null;
  /**
   * U Bp Doc Nr.
   * @nullable
   */
  uBpDocNr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp Seque.
   * @nullable
   */
  uBpSeque?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp Confd.
   * @nullable
   */
  uBpConfd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Unklar.
   * @nullable
   */
  uUnklar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ts Form.
   * @nullable
   */
  uTsForm?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Payment Checks.
   * @nullable
   */
  paymentChecks?: PaymentCheck<T>[] | null;
  /**
   * Payment Invoices.
   * @nullable
   */
  paymentInvoices?: PaymentInvoice<T>[] | null;
  /**
   * Payment Credit Cards.
   * @nullable
   */
  paymentCreditCards?: PaymentCreditCard<T>[] | null;
  /**
   * Payment Accounts.
   * @nullable
   */
  paymentAccounts?: PaymentAccount<T>[] | null;
  /**
   * Payment Document References Collection.
   * @nullable
   */
  paymentDocumentReferencesCollection?: PaymentDocumentReferences<T>[] | null;
  /**
   * Bill Of Exchange.
   * @nullable
   */
  billOfExchange?: BillOfExchange<T> | null;
  /**
   * Withholding Tax Certificates Collection.
   * @nullable
   */
  withholdingTaxCertificatesCollection?:
    | WithholdingTaxCertificatesData<T>[]
    | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  /**
   * Cash Flow Assignments.
   * @nullable
   */
  cashFlowAssignments?: CashFlowAssignment<T>[] | null;
  /**
   * Payments Approval Requests.
   * @nullable
   */
  paymentsApprovalRequests?: PaymentsApprovalRequest<T>[] | null;
  /**
   * Withholding Tax Data Wtx Collection.
   * @nullable
   */
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCode?: WithholdingTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link TransactionCodes} entity.
   */
  transactionCode2?: TransactionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreement2?: BlanketAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: IncomingPaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface IncomingPaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: BoRcptTypes | null;
  handWritten?: BoYesNoEnum | null;
  printed?: BoYesNoEnum | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  cashAccount?: DeserializedType<T, 'Edm.String'> | null;
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cashSum?: DeserializedType<T, 'Edm.Double'> | null;
  checkAccount?: DeserializedType<T, 'Edm.String'> | null;
  transferAccount?: DeserializedType<T, 'Edm.String'> | null;
  transferSum?: DeserializedType<T, 'Edm.Double'> | null;
  transferDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transferReference?: DeserializedType<T, 'Edm.String'> | null;
  localCurrency?: BoYesNoEnum | null;
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  counterReference?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  journalRemarks?: DeserializedType<T, 'Edm.String'> | null;
  splitTransaction?: BoYesNoEnum | null;
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  applyVat?: BoYesNoEnum | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyIsLocal?: BoYesNoEnum | null;
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  deductionSum?: DeserializedType<T, 'Edm.Double'> | null;
  cashSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  cashSumSys?: DeserializedType<T, 'Edm.Double'> | null;
  boeAccount?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchangeAmount?: DeserializedType<T, 'Edm.Double'> | null;
  billofExchangeStatus?: BoBoeStatus | null;
  billOfExchangeAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  billOfExchangeAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  billOfExchangeAgent?: DeserializedType<T, 'Edm.String'> | null;
  wtCode?: DeserializedType<T, 'Edm.String'> | null;
  wtAmount?: DeserializedType<T, 'Edm.Double'> | null;
  wtAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  wtAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtAccount?: DeserializedType<T, 'Edm.String'> | null;
  wtTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  proforma?: BoYesNoEnum | null;
  payToBankCode?: DeserializedType<T, 'Edm.String'> | null;
  payToBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  payToBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  payToCode?: DeserializedType<T, 'Edm.String'> | null;
  payToBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  isPayToBank?: BoYesNoEnum | null;
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  paymentPriority?: BoPaymentPriorities | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  bankChargeAmount?: DeserializedType<T, 'Edm.Double'> | null;
  bankChargeAmountInFc?: DeserializedType<T, 'Edm.Double'> | null;
  bankChargeAmountInSc?: DeserializedType<T, 'Edm.Double'> | null;
  underOverpaymentdifference?: DeserializedType<T, 'Edm.Double'> | null;
  underOverpaymentdiffSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtBaseSum?: DeserializedType<T, 'Edm.Double'> | null;
  wtBaseSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  wtBaseSumSc?: DeserializedType<T, 'Edm.Double'> | null;
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentType?: BoOrctPaymentTypeEnum | null;
  transferRealAmount?: DeserializedType<T, 'Edm.Double'> | null;
  docObjectCode?: BoPaymentsObjectType | null;
  docTypte?: BoRcptTypes | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  locationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  cancelled?: BoYesNoEnum | null;
  controlAccount?: DeserializedType<T, 'Edm.String'> | null;
  underOverpaymentdiffFc?: DeserializedType<T, 'Edm.Double'> | null;
  authorizationStatus?: PaymentsAuthorizationStatusEnum | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  blanketAgreement?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentByWtCertif?: BoYesNoEnum | null;
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  elecCommStatus?: ElecCommStatusEnum | null;
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  splitVendorCreditRow?: BoYesNoEnum | null;
  uBpDocNr?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpSeque?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpConfd?: DeserializedType<T, 'Edm.String'> | null;
  uUnklar?: DeserializedType<T, 'Edm.String'> | null;
  uTsForm?: DeserializedType<T, 'Edm.Int32'> | null;
  paymentChecks?: PaymentCheck<T>[] | null;
  paymentInvoices?: PaymentInvoice<T>[] | null;
  paymentCreditCards?: PaymentCreditCard<T>[] | null;
  paymentAccounts?: PaymentAccount<T>[] | null;
  paymentDocumentReferencesCollection?: PaymentDocumentReferences<T>[] | null;
  billOfExchange?: BillOfExchange<T> | null;
  withholdingTaxCertificatesCollection?:
    | WithholdingTaxCertificatesData<T>[]
    | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  cashFlowAssignments?: CashFlowAssignment<T>[] | null;
  paymentsApprovalRequests?: PaymentsApprovalRequest<T>[] | null;
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  currency?: CurrenciesType<T> | null;
  project?: ProjectsType<T> | null;
  withholdingTaxCode?: WithholdingTaxCodesType<T> | null;
  country?: CountriesType<T> | null;
  vatGroup?: VatGroupsType<T> | null;
  transactionCode2?: TransactionCodesType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
  blanketAgreement2?: BlanketAgreementsType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
