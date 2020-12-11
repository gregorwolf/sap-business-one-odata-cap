/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IncomingPaymentsRequestBuilder } from './IncomingPaymentsRequestBuilder';
import { Moment } from 'moment';
import { PaymentCheck } from './PaymentCheck';
import { PaymentInvoice } from './PaymentInvoice';
import { PaymentCreditCard } from './PaymentCreditCard';
import { PaymentAccount } from './PaymentAccount';
import { BillOfExchange, BillOfExchangeField } from './BillOfExchange';
import { WithholdingTaxCertificatesData } from './WithholdingTaxCertificatesData';
import { CashFlowAssignment } from './CashFlowAssignment';
import { PaymentsApprovalRequest } from './PaymentsApprovalRequest';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import { BoRcptTypes } from './BoRcptTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBoeStatus } from './BoBoeStatus';
import { BoPaymentPriorities } from './BoPaymentPriorities';
import { BoOrctPaymentTypeEnum } from './BoOrctPaymentTypeEnum';
import { BoPaymentsObjectType } from './BoPaymentsObjectType';
import { PaymentsAuthorizationStatusEnum } from './PaymentsAuthorizationStatusEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "IncomingPayments" of service "SAPB1".
 */
export class IncomingPayments extends EntityV4 implements IncomingPaymentsType {
  /**
   * Technical entity name for IncomingPayments.
   */
  static _entityName = 'IncomingPayments';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: BoRcptTypes;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: string;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: string;
  /**
   * Cash Sum.
   * @nullable
   */
  cashSum?: number;
  /**
   * Check Account.
   * @nullable
   */
  checkAccount?: string;
  /**
   * Transfer Account.
   * @nullable
   */
  transferAccount?: string;
  /**
   * Transfer Sum.
   * @nullable
   */
  transferSum?: number;
  /**
   * Transfer Date.
   * @nullable
   */
  transferDate?: Moment;
  /**
   * Transfer Reference.
   * @nullable
   */
  transferReference?: string;
  /**
   * Local Currency.
   * @nullable
   */
  localCurrency?: BoYesNoEnum;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: number;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: string;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Counter Reference.
   * @nullable
   */
  counterReference?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: string;
  /**
   * Split Transaction.
   * @nullable
   */
  splitTransaction?: BoYesNoEnum;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: number;
  /**
   * Apply Vat.
   * @nullable
   */
  applyVat?: BoYesNoEnum;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: string;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Currency Is Local.
   * @nullable
   */
  currencyIsLocal?: BoYesNoEnum;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: number;
  /**
   * Deduction Sum.
   * @nullable
   */
  deductionSum?: number;
  /**
   * Cash Sum Fc.
   * @nullable
   */
  cashSumFc?: number;
  /**
   * Cash Sum Sys.
   * @nullable
   */
  cashSumSys?: number;
  /**
   * Boe Account.
   * @nullable
   */
  boeAccount?: string;
  /**
   * Bill Of Exchange Amount.
   * @nullable
   */
  billOfExchangeAmount?: number;
  /**
   * Billof Exchange Status.
   * @nullable
   */
  billofExchangeStatus?: BoBoeStatus;
  /**
   * Bill Of Exchange Amount Fc.
   * @nullable
   */
  billOfExchangeAmountFc?: number;
  /**
   * Bill Of Exchange Amount Sc.
   * @nullable
   */
  billOfExchangeAmountSc?: number;
  /**
   * Bill Of Exchange Agent.
   * @nullable
   */
  billOfExchangeAgent?: string;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: number;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: number;
  /**
   * Wt Amount Sc.
   * @nullable
   */
  wtAmountSc?: number;
  /**
   * Wt Account.
   * @nullable
   */
  wtAccount?: string;
  /**
   * Wt Taxable Amount.
   * @nullable
   */
  wtTaxableAmount?: number;
  /**
   * Proforma.
   * @nullable
   */
  proforma?: BoYesNoEnum;
  /**
   * Pay To Bank Code.
   * @nullable
   */
  payToBankCode?: string;
  /**
   * Pay To Bank Branch.
   * @nullable
   */
  payToBankBranch?: string;
  /**
   * Pay To Bank Account No.
   * @nullable
   */
  payToBankAccountNo?: string;
  /**
   * Pay To Code.
   * @nullable
   */
  payToCode?: string;
  /**
   * Pay To Bank Country.
   * @nullable
   */
  payToBankCountry?: string;
  /**
   * Is Pay To Bank.
   * @nullable
   */
  isPayToBank?: BoYesNoEnum;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Payment Priority.
   * @nullable
   */
  paymentPriority?: BoPaymentPriorities;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: string;
  /**
   * Bank Charge Amount.
   * @nullable
   */
  bankChargeAmount?: number;
  /**
   * Bank Charge Amount In Fc.
   * @nullable
   */
  bankChargeAmountInFc?: number;
  /**
   * Bank Charge Amount In Sc.
   * @nullable
   */
  bankChargeAmountInSc?: number;
  /**
   * Under Overpaymentdifference.
   * @nullable
   */
  underOverpaymentdifference?: number;
  /**
   * Under Overpaymentdiff Sc.
   * @nullable
   */
  underOverpaymentdiffSc?: number;
  /**
   * Wt Base Sum.
   * @nullable
   */
  wtBaseSum?: number;
  /**
   * Wt Base Sum Fc.
   * @nullable
   */
  wtBaseSumFc?: number;
  /**
   * Wt Base Sum Sc.
   * @nullable
   */
  wtBaseSumSc?: number;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: Moment;
  /**
   * Transaction Code.
   * @nullable
   */
  transactionCode?: string;
  /**
   * Payment Type.
   * @nullable
   */
  paymentType?: BoOrctPaymentTypeEnum;
  /**
   * Transfer Real Amount.
   * @nullable
   */
  transferRealAmount?: number;
  /**
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: BoPaymentsObjectType;
  /**
   * Doc Typte.
   * @nullable
   */
  docTypte?: BoRcptTypes;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Cancelled.
   * @nullable
   */
  cancelled?: BoYesNoEnum;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: string;
  /**
   * Under Overpaymentdiff Fc.
   * @nullable
   */
  underOverpaymentdiffFc?: number;
  /**
   * Authorization Status.
   * @nullable
   */
  authorizationStatus?: PaymentsAuthorizationStatusEnum;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: string;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: string;
  /**
   * Blanket Agreement.
   * @nullable
   */
  blanketAgreement?: number;
  /**
   * Payment Checks.
   * @nullable
   */
  paymentChecks?: PaymentCheck[];
  /**
   * Payment Invoices.
   * @nullable
   */
  paymentInvoices?: PaymentInvoice[];
  /**
   * Payment Credit Cards.
   * @nullable
   */
  paymentCreditCards?: PaymentCreditCard[];
  /**
   * Payment Accounts.
   * @nullable
   */
  paymentAccounts?: PaymentAccount[];
  /**
   * Bill Of Exchange.
   * @nullable
   */
  billOfExchange?: BillOfExchange;
  /**
   * Withholding Tax Certificates Collection.
   * @nullable
   */
  withholdingTaxCertificatesCollection?: WithholdingTaxCertificatesData[];
  /**
   * Cash Flow Assignments.
   * @nullable
   */
  cashFlowAssignments?: CashFlowAssignment[];
  /**
   * Payments Approval Requests.
   * @nullable
   */
  paymentsApprovalRequests?: PaymentsApprovalRequest[];
  /**
   * Withholding Tax Data Wtx Collection.
   * @nullable
   */
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency!: Currencies;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCode!: WithholdingTaxCodes;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup!: VatGroups;
  /**
   * One-to-one navigation property to the [[TransactionCodes]] entity.
   */
  transactionCode2!: TransactionCodes;
  /**
   * One-to-one navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocation!: WarehouseLocations;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;
  /**
   * One-to-one navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreement2!: BlanketAgreements;

  /**
   * Returns an entity builder to construct instances of `IncomingPayments`.
   * @returns A builder that constructs instances of entity type `IncomingPayments`.
   */
  static builder(): EntityBuilderType<IncomingPayments, IncomingPaymentsType> {
    return EntityV4.entityBuilder(IncomingPayments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `IncomingPayments` entity type.
   * @returns A `IncomingPayments` request builder.
   */
  static requestBuilder(): IncomingPaymentsRequestBuilder {
    return new IncomingPaymentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `IncomingPayments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `IncomingPayments`.
   */
  static customField(fieldName: string): CustomFieldV4<IncomingPayments> {
    return EntityV4.customFieldSelector(fieldName, IncomingPayments);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Currencies, CurrenciesType } from './Currencies';
import { Projects, ProjectsType } from './Projects';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { Countries, CountriesType } from './Countries';
import { VatGroups, VatGroupsType } from './VatGroups';
import { TransactionCodes, TransactionCodesType } from './TransactionCodes';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';

export interface IncomingPaymentsType {
  docNum?: number | null;
  docType?: BoRcptTypes | null;
  handWritten?: BoYesNoEnum | null;
  printed?: BoYesNoEnum | null;
  docDate?: Moment | null;
  cardCode?: string | null;
  cardName?: string | null;
  address?: string | null;
  cashAccount?: string | null;
  docCurrency?: string | null;
  cashSum?: number | null;
  checkAccount?: string | null;
  transferAccount?: string | null;
  transferSum?: number | null;
  transferDate?: Moment | null;
  transferReference?: string | null;
  localCurrency?: BoYesNoEnum | null;
  docRate?: number | null;
  reference1?: string | null;
  reference2?: string | null;
  counterReference?: string | null;
  remarks?: string | null;
  journalRemarks?: string | null;
  splitTransaction?: BoYesNoEnum | null;
  contactPersonCode?: number | null;
  applyVat?: BoYesNoEnum | null;
  taxDate?: Moment | null;
  series?: number | null;
  bankCode?: string | null;
  bankAccount?: string | null;
  discountPercent?: number | null;
  projectCode?: string | null;
  currencyIsLocal?: BoYesNoEnum | null;
  deductionPercent?: number | null;
  deductionSum?: number | null;
  cashSumFc?: number | null;
  cashSumSys?: number | null;
  boeAccount?: string | null;
  billOfExchangeAmount?: number | null;
  billofExchangeStatus?: BoBoeStatus | null;
  billOfExchangeAmountFc?: number | null;
  billOfExchangeAmountSc?: number | null;
  billOfExchangeAgent?: string | null;
  wtCode?: string | null;
  wtAmount?: number | null;
  wtAmountFc?: number | null;
  wtAmountSc?: number | null;
  wtAccount?: string | null;
  wtTaxableAmount?: number | null;
  proforma?: BoYesNoEnum | null;
  payToBankCode?: string | null;
  payToBankBranch?: string | null;
  payToBankAccountNo?: string | null;
  payToCode?: string | null;
  payToBankCountry?: string | null;
  isPayToBank?: BoYesNoEnum | null;
  docEntry?: number | null;
  paymentPriority?: BoPaymentPriorities | null;
  taxGroup?: string | null;
  bankChargeAmount?: number | null;
  bankChargeAmountInFc?: number | null;
  bankChargeAmountInSc?: number | null;
  underOverpaymentdifference?: number | null;
  underOverpaymentdiffSc?: number | null;
  wtBaseSum?: number | null;
  wtBaseSumFc?: number | null;
  wtBaseSumSc?: number | null;
  vatDate?: Moment | null;
  transactionCode?: string | null;
  paymentType?: BoOrctPaymentTypeEnum | null;
  transferRealAmount?: number | null;
  docObjectCode?: BoPaymentsObjectType | null;
  docTypte?: BoRcptTypes | null;
  dueDate?: Moment | null;
  locationCode?: number | null;
  cancelled?: BoYesNoEnum | null;
  controlAccount?: string | null;
  underOverpaymentdiffFc?: number | null;
  authorizationStatus?: PaymentsAuthorizationStatusEnum | null;
  bplid?: number | null;
  bplName?: string | null;
  vatRegNum?: string | null;
  blanketAgreement?: number | null;
  paymentChecks?: PaymentCheck[] | null;
  paymentInvoices?: PaymentInvoice[] | null;
  paymentCreditCards?: PaymentCreditCard[] | null;
  paymentAccounts?: PaymentAccount[] | null;
  billOfExchange?: BillOfExchange | null;
  withholdingTaxCertificatesCollection?: WithholdingTaxCertificatesData[] | null;
  cashFlowAssignments?: CashFlowAssignment[] | null;
  paymentsApprovalRequests?: PaymentsApprovalRequest[] | null;
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[] | null;
  chartOfAccount: ChartOfAccountsType;
  currency: CurrenciesType;
  project: ProjectsType;
  withholdingTaxCode: WithholdingTaxCodesType;
  country: CountriesType;
  vatGroup: VatGroupsType;
  transactionCode2: TransactionCodesType;
  warehouseLocation: WarehouseLocationsType;
  businessPlace: BusinessPlacesType;
  blanketAgreement2: BlanketAgreementsType;
}

export namespace IncomingPayments {
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<IncomingPayments> = new NumberField('DocNum', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<IncomingPayments> = new EnumField('DocType', IncomingPayments);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<IncomingPayments> = new EnumField('HandWritten', IncomingPayments);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<IncomingPayments> = new EnumField('Printed', IncomingPayments);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<IncomingPayments> = new DateField('DocDate', IncomingPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<IncomingPayments> = new StringField('CardCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<IncomingPayments> = new StringField('CardName', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<IncomingPayments> = new StringField('Address', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[cashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_ACCOUNT: StringField<IncomingPayments> = new StringField('CashAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<IncomingPayments> = new StringField('DocCurrency', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[cashSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM: NumberField<IncomingPayments> = new NumberField('CashSum', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[checkAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_ACCOUNT: StringField<IncomingPayments> = new StringField('CheckAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[transferAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_ACCOUNT: StringField<IncomingPayments> = new StringField('TransferAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[transferSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_SUM: NumberField<IncomingPayments> = new NumberField('TransferSum', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[transferDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_DATE: DateField<IncomingPayments> = new DateField('TransferDate', IncomingPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transferReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REFERENCE: StringField<IncomingPayments> = new StringField('TransferReference', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[localCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_CURRENCY: EnumField<IncomingPayments> = new EnumField('LocalCurrency', IncomingPayments);
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<IncomingPayments> = new NumberField('DocRate', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<IncomingPayments> = new StringField('Reference1', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<IncomingPayments> = new StringField('Reference2', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[counterReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTER_REFERENCE: StringField<IncomingPayments> = new StringField('CounterReference', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<IncomingPayments> = new StringField('Remarks', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<IncomingPayments> = new StringField('JournalRemarks', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[splitTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPLIT_TRANSACTION: EnumField<IncomingPayments> = new EnumField('SplitTransaction', IncomingPayments);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<IncomingPayments> = new NumberField('ContactPersonCode', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[applyVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_VAT: EnumField<IncomingPayments> = new EnumField('ApplyVAT', IncomingPayments);
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<IncomingPayments> = new DateField('TaxDate', IncomingPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<IncomingPayments> = new NumberField('Series', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<IncomingPayments> = new StringField('BankCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT: StringField<IncomingPayments> = new StringField('BankAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<IncomingPayments> = new NumberField('DiscountPercent', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<IncomingPayments> = new StringField('ProjectCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[currencyIsLocal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_IS_LOCAL: EnumField<IncomingPayments> = new EnumField('CurrencyIsLocal', IncomingPayments);
  /**
   * Static representation of the [[deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PERCENT: NumberField<IncomingPayments> = new NumberField('DeductionPercent', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[deductionSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_SUM: NumberField<IncomingPayments> = new NumberField('DeductionSum', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[cashSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_FC: NumberField<IncomingPayments> = new NumberField('CashSumFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[cashSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_SYS: NumberField<IncomingPayments> = new NumberField('CashSumSys', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[boeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOE_ACCOUNT: StringField<IncomingPayments> = new StringField('BoeAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[billOfExchangeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT: NumberField<IncomingPayments> = new NumberField('BillOfExchangeAmount', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[billofExchangeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLOF_EXCHANGE_STATUS: EnumField<IncomingPayments> = new EnumField('BillofExchangeStatus', IncomingPayments);
  /**
   * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_FC: NumberField<IncomingPayments> = new NumberField('BillOfExchangeAmountFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_SC: NumberField<IncomingPayments> = new NumberField('BillOfExchangeAmountSC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAgent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AGENT: StringField<IncomingPayments> = new StringField('BillOfExchangeAgent', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_CODE: StringField<IncomingPayments> = new StringField('WTCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<IncomingPayments> = new NumberField('WTAmount', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<IncomingPayments> = new NumberField('WTAmountFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<IncomingPayments> = new NumberField('WTAmountSC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_ACCOUNT: StringField<IncomingPayments> = new StringField('WTAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[wtTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_TAXABLE_AMOUNT: NumberField<IncomingPayments> = new NumberField('WTTaxableAmount', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[proforma]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFORMA: EnumField<IncomingPayments> = new EnumField('Proforma', IncomingPayments);
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<IncomingPayments> = new StringField('PayToBankCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<IncomingPayments> = new StringField('PayToBankBranch', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<IncomingPayments> = new StringField('PayToBankAccountNo', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<IncomingPayments> = new StringField('PayToCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<IncomingPayments> = new StringField('PayToBankCountry', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<IncomingPayments> = new EnumField('IsPayToBank', IncomingPayments);
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<IncomingPayments> = new NumberField('DocEntry', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentPriority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_PRIORITY: EnumField<IncomingPayments> = new EnumField('PaymentPriority', IncomingPayments);
  /**
   * Static representation of the [[taxGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_GROUP: StringField<IncomingPayments> = new StringField('TaxGroup', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[bankChargeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT: NumberField<IncomingPayments> = new NumberField('BankChargeAmount', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_FC: NumberField<IncomingPayments> = new NumberField('BankChargeAmountInFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_SC: NumberField<IncomingPayments> = new NumberField('BankChargeAmountInSC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdifference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFFERENCE: NumberField<IncomingPayments> = new NumberField('UnderOverpaymentdifference', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_SC: NumberField<IncomingPayments> = new NumberField('UnderOverpaymentdiffSC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM: NumberField<IncomingPayments> = new NumberField('WtBaseSum', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_FC: NumberField<IncomingPayments> = new NumberField('WtBaseSumFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_SC: NumberField<IncomingPayments> = new NumberField('WtBaseSumSC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<IncomingPayments> = new DateField('VatDate', IncomingPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transactionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE: StringField<IncomingPayments> = new StringField('TransactionCode', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[paymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TYPE: EnumField<IncomingPayments> = new EnumField('PaymentType', IncomingPayments);
  /**
   * Static representation of the [[transferRealAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REAL_AMOUNT: NumberField<IncomingPayments> = new NumberField('TransferRealAmount', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<IncomingPayments> = new EnumField('DocObjectCode', IncomingPayments);
  /**
   * Static representation of the [[docTypte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPTE: EnumField<IncomingPayments> = new EnumField('DocTypte', IncomingPayments);
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<IncomingPayments> = new DateField('DueDate', IncomingPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_CODE: NumberField<IncomingPayments> = new NumberField('LocationCode', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<IncomingPayments> = new EnumField('Cancelled', IncomingPayments);
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<IncomingPayments> = new StringField('ControlAccount', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_FC: NumberField<IncomingPayments> = new NumberField('UnderOverpaymentdiffFC', IncomingPayments, 'Edm.Double');
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<IncomingPayments> = new EnumField('AuthorizationStatus', IncomingPayments);
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<IncomingPayments> = new NumberField('BPLID', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<IncomingPayments> = new StringField('BPLName', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<IncomingPayments> = new StringField('VATRegNum', IncomingPayments, 'Edm.String');
  /**
   * Static representation of the [[blanketAgreement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT: NumberField<IncomingPayments> = new NumberField('BlanketAgreement', IncomingPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentChecks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CHECKS: CollectionField<IncomingPayments, PaymentCheck> = new CollectionField('PaymentChecks', IncomingPayments, PaymentCheck);
  /**
   * Static representation of the [[paymentInvoices]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INVOICES: CollectionField<IncomingPayments, PaymentInvoice> = new CollectionField('PaymentInvoices', IncomingPayments, PaymentInvoice);
  /**
   * Static representation of the [[paymentCreditCards]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CREDIT_CARDS: CollectionField<IncomingPayments, PaymentCreditCard> = new CollectionField('PaymentCreditCards', IncomingPayments, PaymentCreditCard);
  /**
   * Static representation of the [[paymentAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_ACCOUNTS: CollectionField<IncomingPayments, PaymentAccount> = new CollectionField('PaymentAccounts', IncomingPayments, PaymentAccount);
  /**
   * Static representation of the [[billOfExchange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE: BillOfExchangeField<IncomingPayments> = new BillOfExchangeField('BillOfExchange', IncomingPayments);
  /**
   * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<IncomingPayments, WithholdingTaxCertificatesData> = new CollectionField('WithholdingTaxCertificatesCollection', IncomingPayments, WithholdingTaxCertificatesData);
  /**
   * Static representation of the [[cashFlowAssignments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_FLOW_ASSIGNMENTS: CollectionField<IncomingPayments, CashFlowAssignment> = new CollectionField('CashFlowAssignments', IncomingPayments, CashFlowAssignment);
  /**
   * Static representation of the [[paymentsApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENTS_APPROVAL_REQUESTS: CollectionField<IncomingPayments, PaymentsApprovalRequest> = new CollectionField('Payments_ApprovalRequests', IncomingPayments, PaymentsApprovalRequest);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<IncomingPayments, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', IncomingPayments, WithholdingTaxDataWtx);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<IncomingPayments, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', IncomingPayments, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<IncomingPayments, Currencies> = new OneToOneLink('Currency', IncomingPayments, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<IncomingPayments, Projects> = new OneToOneLink('Project', IncomingPayments, Projects);
  /**
   * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: OneToOneLink<IncomingPayments, WithholdingTaxCodes> = new OneToOneLink('WithholdingTaxCode', IncomingPayments, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<IncomingPayments, Countries> = new OneToOneLink('Country', IncomingPayments, Countries);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<IncomingPayments, VatGroups> = new OneToOneLink('VatGroup', IncomingPayments, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE_2: OneToOneLink<IncomingPayments, TransactionCodes> = new OneToOneLink('TransactionCode2', IncomingPayments, TransactionCodes);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<IncomingPayments, WarehouseLocations> = new OneToOneLink('WarehouseLocation', IncomingPayments, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<IncomingPayments, BusinessPlaces> = new OneToOneLink('BusinessPlace', IncomingPayments, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_2: OneToOneLink<IncomingPayments, BlanketAgreements> = new OneToOneLink('BlanketAgreement2', IncomingPayments, BlanketAgreements);
  /**
   * All fields of the IncomingPayments entity.
   */
  export const _allFields: Array<NumberField<IncomingPayments> | EnumField<IncomingPayments> | DateField<IncomingPayments> | StringField<IncomingPayments> | CollectionField<IncomingPayments, PaymentCheck> | CollectionField<IncomingPayments, PaymentInvoice> | CollectionField<IncomingPayments, PaymentCreditCard> | CollectionField<IncomingPayments, PaymentAccount> | BillOfExchangeField<IncomingPayments> | CollectionField<IncomingPayments, WithholdingTaxCertificatesData> | CollectionField<IncomingPayments, CashFlowAssignment> | CollectionField<IncomingPayments, PaymentsApprovalRequest> | CollectionField<IncomingPayments, WithholdingTaxDataWtx> | OneToOneLink<IncomingPayments, ChartOfAccounts> | OneToOneLink<IncomingPayments, Currencies> | OneToOneLink<IncomingPayments, Projects> | OneToOneLink<IncomingPayments, WithholdingTaxCodes> | OneToOneLink<IncomingPayments, Countries> | OneToOneLink<IncomingPayments, VatGroups> | OneToOneLink<IncomingPayments, TransactionCodes> | OneToOneLink<IncomingPayments, WarehouseLocations> | OneToOneLink<IncomingPayments, BusinessPlaces> | OneToOneLink<IncomingPayments, BlanketAgreements>> = [
    IncomingPayments.DOC_NUM,
    IncomingPayments.DOC_TYPE,
    IncomingPayments.HAND_WRITTEN,
    IncomingPayments.PRINTED,
    IncomingPayments.DOC_DATE,
    IncomingPayments.CARD_CODE,
    IncomingPayments.CARD_NAME,
    IncomingPayments.ADDRESS,
    IncomingPayments.CASH_ACCOUNT,
    IncomingPayments.DOC_CURRENCY,
    IncomingPayments.CASH_SUM,
    IncomingPayments.CHECK_ACCOUNT,
    IncomingPayments.TRANSFER_ACCOUNT,
    IncomingPayments.TRANSFER_SUM,
    IncomingPayments.TRANSFER_DATE,
    IncomingPayments.TRANSFER_REFERENCE,
    IncomingPayments.LOCAL_CURRENCY,
    IncomingPayments.DOC_RATE,
    IncomingPayments.REFERENCE_1,
    IncomingPayments.REFERENCE_2,
    IncomingPayments.COUNTER_REFERENCE,
    IncomingPayments.REMARKS,
    IncomingPayments.JOURNAL_REMARKS,
    IncomingPayments.SPLIT_TRANSACTION,
    IncomingPayments.CONTACT_PERSON_CODE,
    IncomingPayments.APPLY_VAT,
    IncomingPayments.TAX_DATE,
    IncomingPayments.SERIES,
    IncomingPayments.BANK_CODE,
    IncomingPayments.BANK_ACCOUNT,
    IncomingPayments.DISCOUNT_PERCENT,
    IncomingPayments.PROJECT_CODE,
    IncomingPayments.CURRENCY_IS_LOCAL,
    IncomingPayments.DEDUCTION_PERCENT,
    IncomingPayments.DEDUCTION_SUM,
    IncomingPayments.CASH_SUM_FC,
    IncomingPayments.CASH_SUM_SYS,
    IncomingPayments.BOE_ACCOUNT,
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT,
    IncomingPayments.BILLOF_EXCHANGE_STATUS,
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_FC,
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_SC,
    IncomingPayments.BILL_OF_EXCHANGE_AGENT,
    IncomingPayments.WT_CODE,
    IncomingPayments.WT_AMOUNT,
    IncomingPayments.WT_AMOUNT_FC,
    IncomingPayments.WT_AMOUNT_SC,
    IncomingPayments.WT_ACCOUNT,
    IncomingPayments.WT_TAXABLE_AMOUNT,
    IncomingPayments.PROFORMA,
    IncomingPayments.PAY_TO_BANK_CODE,
    IncomingPayments.PAY_TO_BANK_BRANCH,
    IncomingPayments.PAY_TO_BANK_ACCOUNT_NO,
    IncomingPayments.PAY_TO_CODE,
    IncomingPayments.PAY_TO_BANK_COUNTRY,
    IncomingPayments.IS_PAY_TO_BANK,
    IncomingPayments.DOC_ENTRY,
    IncomingPayments.PAYMENT_PRIORITY,
    IncomingPayments.TAX_GROUP,
    IncomingPayments.BANK_CHARGE_AMOUNT,
    IncomingPayments.BANK_CHARGE_AMOUNT_IN_FC,
    IncomingPayments.BANK_CHARGE_AMOUNT_IN_SC,
    IncomingPayments.UNDER_OVERPAYMENTDIFFERENCE,
    IncomingPayments.UNDER_OVERPAYMENTDIFF_SC,
    IncomingPayments.WT_BASE_SUM,
    IncomingPayments.WT_BASE_SUM_FC,
    IncomingPayments.WT_BASE_SUM_SC,
    IncomingPayments.VAT_DATE,
    IncomingPayments.TRANSACTION_CODE,
    IncomingPayments.PAYMENT_TYPE,
    IncomingPayments.TRANSFER_REAL_AMOUNT,
    IncomingPayments.DOC_OBJECT_CODE,
    IncomingPayments.DOC_TYPTE,
    IncomingPayments.DUE_DATE,
    IncomingPayments.LOCATION_CODE,
    IncomingPayments.CANCELLED,
    IncomingPayments.CONTROL_ACCOUNT,
    IncomingPayments.UNDER_OVERPAYMENTDIFF_FC,
    IncomingPayments.AUTHORIZATION_STATUS,
    IncomingPayments.BPLID,
    IncomingPayments.BPL_NAME,
    IncomingPayments.VAT_REG_NUM,
    IncomingPayments.BLANKET_AGREEMENT,
    IncomingPayments.PAYMENT_CHECKS,
    IncomingPayments.PAYMENT_INVOICES,
    IncomingPayments.PAYMENT_CREDIT_CARDS,
    IncomingPayments.PAYMENT_ACCOUNTS,
    IncomingPayments.BILL_OF_EXCHANGE,
    IncomingPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
    IncomingPayments.CASH_FLOW_ASSIGNMENTS,
    IncomingPayments.PAYMENTS_APPROVAL_REQUESTS,
    IncomingPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    IncomingPayments.CHART_OF_ACCOUNT,
    IncomingPayments.CURRENCY,
    IncomingPayments.PROJECT,
    IncomingPayments.WITHHOLDING_TAX_CODE,
    IncomingPayments.COUNTRY,
    IncomingPayments.VAT_GROUP,
    IncomingPayments.TRANSACTION_CODE_2,
    IncomingPayments.WAREHOUSE_LOCATION,
    IncomingPayments.BUSINESS_PLACE,
    IncomingPayments.BLANKET_AGREEMENT_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<IncomingPayments> = new AllFields('*', IncomingPayments);
  /**
   * All key fields of the IncomingPayments entity.
   */
  export const _keyFields: Array<Field<IncomingPayments>> = [IncomingPayments.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property IncomingPayments.
   */
  export const _keys: { [keys: string]: Field<IncomingPayments> } = IncomingPayments._keyFields.reduce((acc: { [keys: string]: Field<IncomingPayments> }, field: Field<IncomingPayments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
