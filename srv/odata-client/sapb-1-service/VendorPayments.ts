/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentsRequestBuilder } from './VendorPaymentsRequestBuilder';
import { Moment } from 'moment';
import { PaymentCheck, PaymentCheckField } from './PaymentCheck';
import { PaymentInvoice, PaymentInvoiceField } from './PaymentInvoice';
import { PaymentCreditCard, PaymentCreditCardField } from './PaymentCreditCard';
import { PaymentAccount, PaymentAccountField } from './PaymentAccount';
import { BillOfExchange, BillOfExchangeField } from './BillOfExchange';
import { WithholdingTaxCertificatesData, WithholdingTaxCertificatesDataField } from './WithholdingTaxCertificatesData';
import { CashFlowAssignment, CashFlowAssignmentField } from './CashFlowAssignment';
import { PaymentsApprovalRequest, PaymentsApprovalRequestField } from './PaymentsApprovalRequest';
import { WithholdingTaxDataWtx, WithholdingTaxDataWtxField } from './WithholdingTaxDataWtx';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "VendorPayments" of service "SAPB1".
 */
export class VendorPayments extends Entity implements VendorPaymentsType {
  /**
   * Technical entity name for VendorPayments.
   */
  static _entityName = 'VendorPayments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for VendorPayments.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: number;
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
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: number;
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
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
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
   * Transfer Real Amount.
   * @nullable
   */
  transferRealAmount?: number;
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
   * Returns an entity builder to construct instances `VendorPayments`.
   * @returns A builder that constructs instances of entity type `VendorPayments`.
   */
  static builder(): EntityBuilderType<VendorPayments, VendorPaymentsTypeForceMandatory> {
    return Entity.entityBuilder(VendorPayments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `VendorPayments` entity type.
   * @returns A `VendorPayments` request builder.
   */
  static requestBuilder(): VendorPaymentsRequestBuilder {
    return new VendorPaymentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `VendorPayments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `VendorPayments`.
   */
  static customField(fieldName: string): CustomField<VendorPayments> {
    return Entity.customFieldSelector(fieldName, VendorPayments);
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

export interface VendorPaymentsType {
  docNum?: number;
  docDate?: Moment;
  cardCode?: string;
  cardName?: string;
  address?: string;
  cashAccount?: string;
  docCurrency?: string;
  cashSum?: number;
  checkAccount?: string;
  transferAccount?: string;
  transferSum?: number;
  transferDate?: Moment;
  transferReference?: string;
  docRate?: number;
  reference1?: string;
  reference2?: string;
  counterReference?: string;
  remarks?: string;
  journalRemarks?: string;
  contactPersonCode?: number;
  taxDate?: Moment;
  series?: number;
  bankCode?: string;
  bankAccount?: string;
  discountPercent?: number;
  projectCode?: string;
  deductionPercent?: number;
  deductionSum?: number;
  cashSumFc?: number;
  cashSumSys?: number;
  boeAccount?: string;
  billOfExchangeAmount?: number;
  billOfExchangeAmountFc?: number;
  billOfExchangeAmountSc?: number;
  billOfExchangeAgent?: string;
  wtCode?: string;
  wtAmount?: number;
  wtAmountFc?: number;
  wtAmountSc?: number;
  wtAccount?: string;
  wtTaxableAmount?: number;
  payToBankCode?: string;
  payToBankBranch?: string;
  payToBankAccountNo?: string;
  payToCode?: string;
  payToBankCountry?: string;
  docEntry?: number;
  taxGroup?: string;
  bankChargeAmount?: number;
  bankChargeAmountInFc?: number;
  bankChargeAmountInSc?: number;
  underOverpaymentdifference?: number;
  underOverpaymentdiffSc?: number;
  wtBaseSum?: number;
  wtBaseSumFc?: number;
  wtBaseSumSc?: number;
  vatDate?: Moment;
  transactionCode?: string;
  transferRealAmount?: number;
  dueDate?: Moment;
  locationCode?: number;
  controlAccount?: string;
  underOverpaymentdiffFc?: number;
  bplid?: number;
  bplName?: string;
  vatRegNum?: string;
  blanketAgreement?: number;
  paymentChecks?: PaymentCheck[];
  paymentInvoices?: PaymentInvoice[];
  paymentCreditCards?: PaymentCreditCard[];
  paymentAccounts?: PaymentAccount[];
  billOfExchange?: BillOfExchange;
  withholdingTaxCertificatesCollection?: WithholdingTaxCertificatesData[];
  cashFlowAssignments?: CashFlowAssignment[];
  paymentsApprovalRequests?: PaymentsApprovalRequest[];
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[];
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

export interface VendorPaymentsTypeForceMandatory {
  docNum: number;
  docDate: Moment;
  cardCode: string;
  cardName: string;
  address: string;
  cashAccount: string;
  docCurrency: string;
  cashSum: number;
  checkAccount: string;
  transferAccount: string;
  transferSum: number;
  transferDate: Moment;
  transferReference: string;
  docRate: number;
  reference1: string;
  reference2: string;
  counterReference: string;
  remarks: string;
  journalRemarks: string;
  contactPersonCode: number;
  taxDate: Moment;
  series: number;
  bankCode: string;
  bankAccount: string;
  discountPercent: number;
  projectCode: string;
  deductionPercent: number;
  deductionSum: number;
  cashSumFc: number;
  cashSumSys: number;
  boeAccount: string;
  billOfExchangeAmount: number;
  billOfExchangeAmountFc: number;
  billOfExchangeAmountSc: number;
  billOfExchangeAgent: string;
  wtCode: string;
  wtAmount: number;
  wtAmountFc: number;
  wtAmountSc: number;
  wtAccount: string;
  wtTaxableAmount: number;
  payToBankCode: string;
  payToBankBranch: string;
  payToBankAccountNo: string;
  payToCode: string;
  payToBankCountry: string;
  docEntry: number;
  taxGroup: string;
  bankChargeAmount: number;
  bankChargeAmountInFc: number;
  bankChargeAmountInSc: number;
  underOverpaymentdifference: number;
  underOverpaymentdiffSc: number;
  wtBaseSum: number;
  wtBaseSumFc: number;
  wtBaseSumSc: number;
  vatDate: Moment;
  transactionCode: string;
  transferRealAmount: number;
  dueDate: Moment;
  locationCode: number;
  controlAccount: string;
  underOverpaymentdiffFc: number;
  bplid: number;
  bplName: string;
  vatRegNum: string;
  blanketAgreement: number;
  paymentChecks: PaymentCheck[];
  paymentInvoices: PaymentInvoice[];
  paymentCreditCards: PaymentCreditCard[];
  paymentAccounts: PaymentAccount[];
  billOfExchange: BillOfExchange;
  withholdingTaxCertificatesCollection: WithholdingTaxCertificatesData[];
  cashFlowAssignments: CashFlowAssignment[];
  paymentsApprovalRequests: PaymentsApprovalRequest[];
  withholdingTaxDataWtxCollection: WithholdingTaxDataWtx[];
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

export namespace VendorPayments {
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<VendorPayments> = new NumberField('DocNum', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<VendorPayments> = new DateField('DocDate', VendorPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<VendorPayments> = new StringField('CardCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<VendorPayments> = new StringField('CardName', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<VendorPayments> = new StringField('Address', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[cashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_ACCOUNT: StringField<VendorPayments> = new StringField('CashAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<VendorPayments> = new StringField('DocCurrency', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[cashSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM: NumberField<VendorPayments> = new NumberField('CashSum', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[checkAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_ACCOUNT: StringField<VendorPayments> = new StringField('CheckAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[transferAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_ACCOUNT: StringField<VendorPayments> = new StringField('TransferAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[transferSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_SUM: NumberField<VendorPayments> = new NumberField('TransferSum', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[transferDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_DATE: DateField<VendorPayments> = new DateField('TransferDate', VendorPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transferReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REFERENCE: StringField<VendorPayments> = new StringField('TransferReference', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<VendorPayments> = new NumberField('DocRate', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<VendorPayments> = new StringField('Reference1', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<VendorPayments> = new StringField('Reference2', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[counterReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTER_REFERENCE: StringField<VendorPayments> = new StringField('CounterReference', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<VendorPayments> = new StringField('Remarks', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<VendorPayments> = new StringField('JournalRemarks', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<VendorPayments> = new NumberField('ContactPersonCode', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<VendorPayments> = new DateField('TaxDate', VendorPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<VendorPayments> = new NumberField('Series', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<VendorPayments> = new StringField('BankCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT: StringField<VendorPayments> = new StringField('BankAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<VendorPayments> = new NumberField('DiscountPercent', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<VendorPayments> = new StringField('ProjectCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PERCENT: NumberField<VendorPayments> = new NumberField('DeductionPercent', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[deductionSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_SUM: NumberField<VendorPayments> = new NumberField('DeductionSum', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[cashSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_FC: NumberField<VendorPayments> = new NumberField('CashSumFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[cashSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_SYS: NumberField<VendorPayments> = new NumberField('CashSumSys', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[boeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOE_ACCOUNT: StringField<VendorPayments> = new StringField('BoeAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[billOfExchangeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT: NumberField<VendorPayments> = new NumberField('BillOfExchangeAmount', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_FC: NumberField<VendorPayments> = new NumberField('BillOfExchangeAmountFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_SC: NumberField<VendorPayments> = new NumberField('BillOfExchangeAmountSC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAgent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AGENT: StringField<VendorPayments> = new StringField('BillOfExchangeAgent', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_CODE: StringField<VendorPayments> = new StringField('WTCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<VendorPayments> = new NumberField('WTAmount', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<VendorPayments> = new NumberField('WTAmountFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<VendorPayments> = new NumberField('WTAmountSC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_ACCOUNT: StringField<VendorPayments> = new StringField('WTAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[wtTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_TAXABLE_AMOUNT: NumberField<VendorPayments> = new NumberField('WTTaxableAmount', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<VendorPayments> = new StringField('PayToBankCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<VendorPayments> = new StringField('PayToBankBranch', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<VendorPayments> = new StringField('PayToBankAccountNo', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<VendorPayments> = new StringField('PayToCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<VendorPayments> = new StringField('PayToBankCountry', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<VendorPayments> = new NumberField('DocEntry', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[taxGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_GROUP: StringField<VendorPayments> = new StringField('TaxGroup', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[bankChargeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT: NumberField<VendorPayments> = new NumberField('BankChargeAmount', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_FC: NumberField<VendorPayments> = new NumberField('BankChargeAmountInFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_SC: NumberField<VendorPayments> = new NumberField('BankChargeAmountInSC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdifference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFFERENCE: NumberField<VendorPayments> = new NumberField('UnderOverpaymentdifference', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_SC: NumberField<VendorPayments> = new NumberField('UnderOverpaymentdiffSC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM: NumberField<VendorPayments> = new NumberField('WtBaseSum', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_FC: NumberField<VendorPayments> = new NumberField('WtBaseSumFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_SC: NumberField<VendorPayments> = new NumberField('WtBaseSumSC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<VendorPayments> = new DateField('VatDate', VendorPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transactionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE: StringField<VendorPayments> = new StringField('TransactionCode', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[transferRealAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REAL_AMOUNT: NumberField<VendorPayments> = new NumberField('TransferRealAmount', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<VendorPayments> = new DateField('DueDate', VendorPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_CODE: NumberField<VendorPayments> = new NumberField('LocationCode', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<VendorPayments> = new StringField('ControlAccount', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_FC: NumberField<VendorPayments> = new NumberField('UnderOverpaymentdiffFC', VendorPayments, 'Edm.Double');
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<VendorPayments> = new NumberField('BPLID', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<VendorPayments> = new StringField('BPLName', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<VendorPayments> = new StringField('VATRegNum', VendorPayments, 'Edm.String');
  /**
   * Static representation of the [[blanketAgreement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT: NumberField<VendorPayments> = new NumberField('BlanketAgreement', VendorPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentChecks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CHECKS: CollectionField<VendorPayments> = new CollectionField('PaymentChecks', VendorPayments, new PaymentCheckField('', VendorPayments));
  /**
   * Static representation of the [[paymentInvoices]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INVOICES: CollectionField<VendorPayments> = new CollectionField('PaymentInvoices', VendorPayments, new PaymentInvoiceField('', VendorPayments));
  /**
   * Static representation of the [[paymentCreditCards]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CREDIT_CARDS: CollectionField<VendorPayments> = new CollectionField('PaymentCreditCards', VendorPayments, new PaymentCreditCardField('', VendorPayments));
  /**
   * Static representation of the [[paymentAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_ACCOUNTS: CollectionField<VendorPayments> = new CollectionField('PaymentAccounts', VendorPayments, new PaymentAccountField('', VendorPayments));
  /**
   * Static representation of the [[billOfExchange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE: BillOfExchangeField<VendorPayments> = new BillOfExchangeField('BillOfExchange', VendorPayments);
  /**
   * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<VendorPayments> = new CollectionField('WithholdingTaxCertificatesCollection', VendorPayments, new WithholdingTaxCertificatesDataField('', VendorPayments));
  /**
   * Static representation of the [[cashFlowAssignments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_FLOW_ASSIGNMENTS: CollectionField<VendorPayments> = new CollectionField('CashFlowAssignments', VendorPayments, new CashFlowAssignmentField('', VendorPayments));
  /**
   * Static representation of the [[paymentsApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENTS_APPROVAL_REQUESTS: CollectionField<VendorPayments> = new CollectionField('Payments_ApprovalRequests', VendorPayments, new PaymentsApprovalRequestField('', VendorPayments));
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<VendorPayments> = new CollectionField('WithholdingTaxDataWTXCollection', VendorPayments, new WithholdingTaxDataWtxField('', VendorPayments));
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<VendorPayments, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', VendorPayments, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<VendorPayments, Currencies> = new OneToOneLink('Currency', VendorPayments, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<VendorPayments, Projects> = new OneToOneLink('Project', VendorPayments, Projects);
  /**
   * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: OneToOneLink<VendorPayments, WithholdingTaxCodes> = new OneToOneLink('WithholdingTaxCode', VendorPayments, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<VendorPayments, Countries> = new OneToOneLink('Country', VendorPayments, Countries);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<VendorPayments, VatGroups> = new OneToOneLink('VatGroup', VendorPayments, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE_2: OneToOneLink<VendorPayments, TransactionCodes> = new OneToOneLink('TransactionCode2', VendorPayments, TransactionCodes);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<VendorPayments, WarehouseLocations> = new OneToOneLink('WarehouseLocation', VendorPayments, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<VendorPayments, BusinessPlaces> = new OneToOneLink('BusinessPlace', VendorPayments, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_2: OneToOneLink<VendorPayments, BlanketAgreements> = new OneToOneLink('BlanketAgreement2', VendorPayments, BlanketAgreements);
  /**
   * All fields of the VendorPayments entity.
   */
  export const _allFields: Array<NumberField<VendorPayments> | DateField<VendorPayments> | StringField<VendorPayments> | CollectionField<VendorPayments> | BillOfExchangeField<VendorPayments> | OneToOneLink<VendorPayments, ChartOfAccounts> | OneToOneLink<VendorPayments, Currencies> | OneToOneLink<VendorPayments, Projects> | OneToOneLink<VendorPayments, WithholdingTaxCodes> | OneToOneLink<VendorPayments, Countries> | OneToOneLink<VendorPayments, VatGroups> | OneToOneLink<VendorPayments, TransactionCodes> | OneToOneLink<VendorPayments, WarehouseLocations> | OneToOneLink<VendorPayments, BusinessPlaces> | OneToOneLink<VendorPayments, BlanketAgreements>> = [
    VendorPayments.DOC_NUM,
    VendorPayments.DOC_DATE,
    VendorPayments.CARD_CODE,
    VendorPayments.CARD_NAME,
    VendorPayments.ADDRESS,
    VendorPayments.CASH_ACCOUNT,
    VendorPayments.DOC_CURRENCY,
    VendorPayments.CASH_SUM,
    VendorPayments.CHECK_ACCOUNT,
    VendorPayments.TRANSFER_ACCOUNT,
    VendorPayments.TRANSFER_SUM,
    VendorPayments.TRANSFER_DATE,
    VendorPayments.TRANSFER_REFERENCE,
    VendorPayments.DOC_RATE,
    VendorPayments.REFERENCE_1,
    VendorPayments.REFERENCE_2,
    VendorPayments.COUNTER_REFERENCE,
    VendorPayments.REMARKS,
    VendorPayments.JOURNAL_REMARKS,
    VendorPayments.CONTACT_PERSON_CODE,
    VendorPayments.TAX_DATE,
    VendorPayments.SERIES,
    VendorPayments.BANK_CODE,
    VendorPayments.BANK_ACCOUNT,
    VendorPayments.DISCOUNT_PERCENT,
    VendorPayments.PROJECT_CODE,
    VendorPayments.DEDUCTION_PERCENT,
    VendorPayments.DEDUCTION_SUM,
    VendorPayments.CASH_SUM_FC,
    VendorPayments.CASH_SUM_SYS,
    VendorPayments.BOE_ACCOUNT,
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT,
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_FC,
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_SC,
    VendorPayments.BILL_OF_EXCHANGE_AGENT,
    VendorPayments.WT_CODE,
    VendorPayments.WT_AMOUNT,
    VendorPayments.WT_AMOUNT_FC,
    VendorPayments.WT_AMOUNT_SC,
    VendorPayments.WT_ACCOUNT,
    VendorPayments.WT_TAXABLE_AMOUNT,
    VendorPayments.PAY_TO_BANK_CODE,
    VendorPayments.PAY_TO_BANK_BRANCH,
    VendorPayments.PAY_TO_BANK_ACCOUNT_NO,
    VendorPayments.PAY_TO_CODE,
    VendorPayments.PAY_TO_BANK_COUNTRY,
    VendorPayments.DOC_ENTRY,
    VendorPayments.TAX_GROUP,
    VendorPayments.BANK_CHARGE_AMOUNT,
    VendorPayments.BANK_CHARGE_AMOUNT_IN_FC,
    VendorPayments.BANK_CHARGE_AMOUNT_IN_SC,
    VendorPayments.UNDER_OVERPAYMENTDIFFERENCE,
    VendorPayments.UNDER_OVERPAYMENTDIFF_SC,
    VendorPayments.WT_BASE_SUM,
    VendorPayments.WT_BASE_SUM_FC,
    VendorPayments.WT_BASE_SUM_SC,
    VendorPayments.VAT_DATE,
    VendorPayments.TRANSACTION_CODE,
    VendorPayments.TRANSFER_REAL_AMOUNT,
    VendorPayments.DUE_DATE,
    VendorPayments.LOCATION_CODE,
    VendorPayments.CONTROL_ACCOUNT,
    VendorPayments.UNDER_OVERPAYMENTDIFF_FC,
    VendorPayments.BPLID,
    VendorPayments.BPL_NAME,
    VendorPayments.VAT_REG_NUM,
    VendorPayments.BLANKET_AGREEMENT,
    VendorPayments.PAYMENT_CHECKS,
    VendorPayments.PAYMENT_INVOICES,
    VendorPayments.PAYMENT_CREDIT_CARDS,
    VendorPayments.PAYMENT_ACCOUNTS,
    VendorPayments.BILL_OF_EXCHANGE,
    VendorPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
    VendorPayments.CASH_FLOW_ASSIGNMENTS,
    VendorPayments.PAYMENTS_APPROVAL_REQUESTS,
    VendorPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    VendorPayments.CHART_OF_ACCOUNT,
    VendorPayments.CURRENCY,
    VendorPayments.PROJECT,
    VendorPayments.WITHHOLDING_TAX_CODE,
    VendorPayments.COUNTRY,
    VendorPayments.VAT_GROUP,
    VendorPayments.TRANSACTION_CODE_2,
    VendorPayments.WAREHOUSE_LOCATION,
    VendorPayments.BUSINESS_PLACE,
    VendorPayments.BLANKET_AGREEMENT_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<VendorPayments> = new AllFields('*', VendorPayments);
  /**
   * All key fields of the VendorPayments entity.
   */
  export const _keyFields: Array<Field<VendorPayments>> = [VendorPayments.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property VendorPayments.
   */
  export const _keys: { [keys: string]: Field<VendorPayments> } = VendorPayments._keyFields.reduce((acc: { [keys: string]: Field<VendorPayments> }, field: Field<VendorPayments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
