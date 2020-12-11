/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentDraftsRequestBuilder } from './PaymentDraftsRequestBuilder';
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
 * This class represents the entity "PaymentDrafts" of service "SAPB1".
 */
export class PaymentDrafts extends EntityV4 implements PaymentDraftsType {
  /**
   * Technical entity name for PaymentDrafts.
   */
  static _entityName = 'PaymentDrafts';
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
   * Returns an entity builder to construct instances of `PaymentDrafts`.
   * @returns A builder that constructs instances of entity type `PaymentDrafts`.
   */
  static builder(): EntityBuilderType<PaymentDrafts, PaymentDraftsType> {
    return EntityV4.entityBuilder(PaymentDrafts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentDrafts` entity type.
   * @returns A `PaymentDrafts` request builder.
   */
  static requestBuilder(): PaymentDraftsRequestBuilder {
    return new PaymentDraftsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentDrafts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentDrafts`.
   */
  static customField(fieldName: string): CustomFieldV4<PaymentDrafts> {
    return EntityV4.customFieldSelector(fieldName, PaymentDrafts);
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

export interface PaymentDraftsType {
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

export namespace PaymentDrafts {
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<PaymentDrafts> = new NumberField('DocNum', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<PaymentDrafts> = new EnumField('DocType', PaymentDrafts);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<PaymentDrafts> = new EnumField('HandWritten', PaymentDrafts);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<PaymentDrafts> = new EnumField('Printed', PaymentDrafts);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<PaymentDrafts> = new DateField('DocDate', PaymentDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<PaymentDrafts> = new StringField('CardCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<PaymentDrafts> = new StringField('CardName', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<PaymentDrafts> = new StringField('Address', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[cashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_ACCOUNT: StringField<PaymentDrafts> = new StringField('CashAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<PaymentDrafts> = new StringField('DocCurrency', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[cashSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM: NumberField<PaymentDrafts> = new NumberField('CashSum', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[checkAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_ACCOUNT: StringField<PaymentDrafts> = new StringField('CheckAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[transferAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_ACCOUNT: StringField<PaymentDrafts> = new StringField('TransferAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[transferSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_SUM: NumberField<PaymentDrafts> = new NumberField('TransferSum', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[transferDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_DATE: DateField<PaymentDrafts> = new DateField('TransferDate', PaymentDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transferReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REFERENCE: StringField<PaymentDrafts> = new StringField('TransferReference', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[localCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_CURRENCY: EnumField<PaymentDrafts> = new EnumField('LocalCurrency', PaymentDrafts);
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<PaymentDrafts> = new NumberField('DocRate', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<PaymentDrafts> = new StringField('Reference1', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<PaymentDrafts> = new StringField('Reference2', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[counterReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTER_REFERENCE: StringField<PaymentDrafts> = new StringField('CounterReference', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<PaymentDrafts> = new StringField('Remarks', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARKS: StringField<PaymentDrafts> = new StringField('JournalRemarks', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[splitTransaction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPLIT_TRANSACTION: EnumField<PaymentDrafts> = new EnumField('SplitTransaction', PaymentDrafts);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<PaymentDrafts> = new NumberField('ContactPersonCode', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[applyVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_VAT: EnumField<PaymentDrafts> = new EnumField('ApplyVAT', PaymentDrafts);
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<PaymentDrafts> = new DateField('TaxDate', PaymentDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<PaymentDrafts> = new NumberField('Series', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CODE: StringField<PaymentDrafts> = new StringField('BankCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT: StringField<PaymentDrafts> = new StringField('BankAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<PaymentDrafts> = new NumberField('DiscountPercent', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<PaymentDrafts> = new StringField('ProjectCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[currencyIsLocal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_IS_LOCAL: EnumField<PaymentDrafts> = new EnumField('CurrencyIsLocal', PaymentDrafts);
  /**
   * Static representation of the [[deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PERCENT: NumberField<PaymentDrafts> = new NumberField('DeductionPercent', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[deductionSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_SUM: NumberField<PaymentDrafts> = new NumberField('DeductionSum', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[cashSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_FC: NumberField<PaymentDrafts> = new NumberField('CashSumFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[cashSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_SUM_SYS: NumberField<PaymentDrafts> = new NumberField('CashSumSys', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[boeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOE_ACCOUNT: StringField<PaymentDrafts> = new StringField('BoeAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[billOfExchangeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT: NumberField<PaymentDrafts> = new NumberField('BillOfExchangeAmount', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[billofExchangeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLOF_EXCHANGE_STATUS: EnumField<PaymentDrafts> = new EnumField('BillofExchangeStatus', PaymentDrafts);
  /**
   * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_FC: NumberField<PaymentDrafts> = new NumberField('BillOfExchangeAmountFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AMOUNT_SC: NumberField<PaymentDrafts> = new NumberField('BillOfExchangeAmountSC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeAgent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_AGENT: StringField<PaymentDrafts> = new StringField('BillOfExchangeAgent', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_CODE: StringField<PaymentDrafts> = new StringField('WTCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<PaymentDrafts> = new NumberField('WTAmount', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<PaymentDrafts> = new NumberField('WTAmountFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<PaymentDrafts> = new NumberField('WTAmountSC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_ACCOUNT: StringField<PaymentDrafts> = new StringField('WTAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[wtTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_TAXABLE_AMOUNT: NumberField<PaymentDrafts> = new NumberField('WTTaxableAmount', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[proforma]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFORMA: EnumField<PaymentDrafts> = new EnumField('Proforma', PaymentDrafts);
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<PaymentDrafts> = new StringField('PayToBankCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<PaymentDrafts> = new StringField('PayToBankBranch', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<PaymentDrafts> = new StringField('PayToBankAccountNo', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<PaymentDrafts> = new StringField('PayToCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<PaymentDrafts> = new StringField('PayToBankCountry', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<PaymentDrafts> = new EnumField('IsPayToBank', PaymentDrafts);
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<PaymentDrafts> = new NumberField('DocEntry', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[paymentPriority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_PRIORITY: EnumField<PaymentDrafts> = new EnumField('PaymentPriority', PaymentDrafts);
  /**
   * Static representation of the [[taxGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_GROUP: StringField<PaymentDrafts> = new StringField('TaxGroup', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[bankChargeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT: NumberField<PaymentDrafts> = new NumberField('BankChargeAmount', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_FC: NumberField<PaymentDrafts> = new NumberField('BankChargeAmountInFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[bankChargeAmountInSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGE_AMOUNT_IN_SC: NumberField<PaymentDrafts> = new NumberField('BankChargeAmountInSC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdifference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFFERENCE: NumberField<PaymentDrafts> = new NumberField('UnderOverpaymentdifference', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_SC: NumberField<PaymentDrafts> = new NumberField('UnderOverpaymentdiffSC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM: NumberField<PaymentDrafts> = new NumberField('WtBaseSum', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_FC: NumberField<PaymentDrafts> = new NumberField('WtBaseSumFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[wtBaseSumSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_BASE_SUM_SC: NumberField<PaymentDrafts> = new NumberField('WtBaseSumSC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<PaymentDrafts> = new DateField('VatDate', PaymentDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transactionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE: StringField<PaymentDrafts> = new StringField('TransactionCode', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[paymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TYPE: EnumField<PaymentDrafts> = new EnumField('PaymentType', PaymentDrafts);
  /**
   * Static representation of the [[transferRealAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_REAL_AMOUNT: NumberField<PaymentDrafts> = new NumberField('TransferRealAmount', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<PaymentDrafts> = new EnumField('DocObjectCode', PaymentDrafts);
  /**
   * Static representation of the [[docTypte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPTE: EnumField<PaymentDrafts> = new EnumField('DocTypte', PaymentDrafts);
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<PaymentDrafts> = new DateField('DueDate', PaymentDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_CODE: NumberField<PaymentDrafts> = new NumberField('LocationCode', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<PaymentDrafts> = new EnumField('Cancelled', PaymentDrafts);
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<PaymentDrafts> = new StringField('ControlAccount', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDER_OVERPAYMENTDIFF_FC: NumberField<PaymentDrafts> = new NumberField('UnderOverpaymentdiffFC', PaymentDrafts, 'Edm.Double');
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<PaymentDrafts> = new EnumField('AuthorizationStatus', PaymentDrafts);
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<PaymentDrafts> = new NumberField('BPLID', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<PaymentDrafts> = new StringField('BPLName', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<PaymentDrafts> = new StringField('VATRegNum', PaymentDrafts, 'Edm.String');
  /**
   * Static representation of the [[blanketAgreement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT: NumberField<PaymentDrafts> = new NumberField('BlanketAgreement', PaymentDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[paymentChecks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CHECKS: CollectionField<PaymentDrafts, PaymentCheck> = new CollectionField('PaymentChecks', PaymentDrafts, PaymentCheck);
  /**
   * Static representation of the [[paymentInvoices]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INVOICES: CollectionField<PaymentDrafts, PaymentInvoice> = new CollectionField('PaymentInvoices', PaymentDrafts, PaymentInvoice);
  /**
   * Static representation of the [[paymentCreditCards]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CREDIT_CARDS: CollectionField<PaymentDrafts, PaymentCreditCard> = new CollectionField('PaymentCreditCards', PaymentDrafts, PaymentCreditCard);
  /**
   * Static representation of the [[paymentAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_ACCOUNTS: CollectionField<PaymentDrafts, PaymentAccount> = new CollectionField('PaymentAccounts', PaymentDrafts, PaymentAccount);
  /**
   * Static representation of the [[billOfExchange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE: BillOfExchangeField<PaymentDrafts> = new BillOfExchangeField('BillOfExchange', PaymentDrafts);
  /**
   * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<PaymentDrafts, WithholdingTaxCertificatesData> = new CollectionField('WithholdingTaxCertificatesCollection', PaymentDrafts, WithholdingTaxCertificatesData);
  /**
   * Static representation of the [[cashFlowAssignments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_FLOW_ASSIGNMENTS: CollectionField<PaymentDrafts, CashFlowAssignment> = new CollectionField('CashFlowAssignments', PaymentDrafts, CashFlowAssignment);
  /**
   * Static representation of the [[paymentsApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENTS_APPROVAL_REQUESTS: CollectionField<PaymentDrafts, PaymentsApprovalRequest> = new CollectionField('Payments_ApprovalRequests', PaymentDrafts, PaymentsApprovalRequest);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PaymentDrafts, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', PaymentDrafts, WithholdingTaxDataWtx);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<PaymentDrafts, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', PaymentDrafts, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<PaymentDrafts, Currencies> = new OneToOneLink('Currency', PaymentDrafts, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<PaymentDrafts, Projects> = new OneToOneLink('Project', PaymentDrafts, Projects);
  /**
   * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: OneToOneLink<PaymentDrafts, WithholdingTaxCodes> = new OneToOneLink('WithholdingTaxCode', PaymentDrafts, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<PaymentDrafts, Countries> = new OneToOneLink('Country', PaymentDrafts, Countries);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<PaymentDrafts, VatGroups> = new OneToOneLink('VatGroup', PaymentDrafts, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CODE_2: OneToOneLink<PaymentDrafts, TransactionCodes> = new OneToOneLink('TransactionCode2', PaymentDrafts, TransactionCodes);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<PaymentDrafts, WarehouseLocations> = new OneToOneLink('WarehouseLocation', PaymentDrafts, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<PaymentDrafts, BusinessPlaces> = new OneToOneLink('BusinessPlace', PaymentDrafts, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_2: OneToOneLink<PaymentDrafts, BlanketAgreements> = new OneToOneLink('BlanketAgreement2', PaymentDrafts, BlanketAgreements);
  /**
   * All fields of the PaymentDrafts entity.
   */
  export const _allFields: Array<NumberField<PaymentDrafts> | EnumField<PaymentDrafts> | DateField<PaymentDrafts> | StringField<PaymentDrafts> | CollectionField<PaymentDrafts, PaymentCheck> | CollectionField<PaymentDrafts, PaymentInvoice> | CollectionField<PaymentDrafts, PaymentCreditCard> | CollectionField<PaymentDrafts, PaymentAccount> | BillOfExchangeField<PaymentDrafts> | CollectionField<PaymentDrafts, WithholdingTaxCertificatesData> | CollectionField<PaymentDrafts, CashFlowAssignment> | CollectionField<PaymentDrafts, PaymentsApprovalRequest> | CollectionField<PaymentDrafts, WithholdingTaxDataWtx> | OneToOneLink<PaymentDrafts, ChartOfAccounts> | OneToOneLink<PaymentDrafts, Currencies> | OneToOneLink<PaymentDrafts, Projects> | OneToOneLink<PaymentDrafts, WithholdingTaxCodes> | OneToOneLink<PaymentDrafts, Countries> | OneToOneLink<PaymentDrafts, VatGroups> | OneToOneLink<PaymentDrafts, TransactionCodes> | OneToOneLink<PaymentDrafts, WarehouseLocations> | OneToOneLink<PaymentDrafts, BusinessPlaces> | OneToOneLink<PaymentDrafts, BlanketAgreements>> = [
    PaymentDrafts.DOC_NUM,
    PaymentDrafts.DOC_TYPE,
    PaymentDrafts.HAND_WRITTEN,
    PaymentDrafts.PRINTED,
    PaymentDrafts.DOC_DATE,
    PaymentDrafts.CARD_CODE,
    PaymentDrafts.CARD_NAME,
    PaymentDrafts.ADDRESS,
    PaymentDrafts.CASH_ACCOUNT,
    PaymentDrafts.DOC_CURRENCY,
    PaymentDrafts.CASH_SUM,
    PaymentDrafts.CHECK_ACCOUNT,
    PaymentDrafts.TRANSFER_ACCOUNT,
    PaymentDrafts.TRANSFER_SUM,
    PaymentDrafts.TRANSFER_DATE,
    PaymentDrafts.TRANSFER_REFERENCE,
    PaymentDrafts.LOCAL_CURRENCY,
    PaymentDrafts.DOC_RATE,
    PaymentDrafts.REFERENCE_1,
    PaymentDrafts.REFERENCE_2,
    PaymentDrafts.COUNTER_REFERENCE,
    PaymentDrafts.REMARKS,
    PaymentDrafts.JOURNAL_REMARKS,
    PaymentDrafts.SPLIT_TRANSACTION,
    PaymentDrafts.CONTACT_PERSON_CODE,
    PaymentDrafts.APPLY_VAT,
    PaymentDrafts.TAX_DATE,
    PaymentDrafts.SERIES,
    PaymentDrafts.BANK_CODE,
    PaymentDrafts.BANK_ACCOUNT,
    PaymentDrafts.DISCOUNT_PERCENT,
    PaymentDrafts.PROJECT_CODE,
    PaymentDrafts.CURRENCY_IS_LOCAL,
    PaymentDrafts.DEDUCTION_PERCENT,
    PaymentDrafts.DEDUCTION_SUM,
    PaymentDrafts.CASH_SUM_FC,
    PaymentDrafts.CASH_SUM_SYS,
    PaymentDrafts.BOE_ACCOUNT,
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT,
    PaymentDrafts.BILLOF_EXCHANGE_STATUS,
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_FC,
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_SC,
    PaymentDrafts.BILL_OF_EXCHANGE_AGENT,
    PaymentDrafts.WT_CODE,
    PaymentDrafts.WT_AMOUNT,
    PaymentDrafts.WT_AMOUNT_FC,
    PaymentDrafts.WT_AMOUNT_SC,
    PaymentDrafts.WT_ACCOUNT,
    PaymentDrafts.WT_TAXABLE_AMOUNT,
    PaymentDrafts.PROFORMA,
    PaymentDrafts.PAY_TO_BANK_CODE,
    PaymentDrafts.PAY_TO_BANK_BRANCH,
    PaymentDrafts.PAY_TO_BANK_ACCOUNT_NO,
    PaymentDrafts.PAY_TO_CODE,
    PaymentDrafts.PAY_TO_BANK_COUNTRY,
    PaymentDrafts.IS_PAY_TO_BANK,
    PaymentDrafts.DOC_ENTRY,
    PaymentDrafts.PAYMENT_PRIORITY,
    PaymentDrafts.TAX_GROUP,
    PaymentDrafts.BANK_CHARGE_AMOUNT,
    PaymentDrafts.BANK_CHARGE_AMOUNT_IN_FC,
    PaymentDrafts.BANK_CHARGE_AMOUNT_IN_SC,
    PaymentDrafts.UNDER_OVERPAYMENTDIFFERENCE,
    PaymentDrafts.UNDER_OVERPAYMENTDIFF_SC,
    PaymentDrafts.WT_BASE_SUM,
    PaymentDrafts.WT_BASE_SUM_FC,
    PaymentDrafts.WT_BASE_SUM_SC,
    PaymentDrafts.VAT_DATE,
    PaymentDrafts.TRANSACTION_CODE,
    PaymentDrafts.PAYMENT_TYPE,
    PaymentDrafts.TRANSFER_REAL_AMOUNT,
    PaymentDrafts.DOC_OBJECT_CODE,
    PaymentDrafts.DOC_TYPTE,
    PaymentDrafts.DUE_DATE,
    PaymentDrafts.LOCATION_CODE,
    PaymentDrafts.CANCELLED,
    PaymentDrafts.CONTROL_ACCOUNT,
    PaymentDrafts.UNDER_OVERPAYMENTDIFF_FC,
    PaymentDrafts.AUTHORIZATION_STATUS,
    PaymentDrafts.BPLID,
    PaymentDrafts.BPL_NAME,
    PaymentDrafts.VAT_REG_NUM,
    PaymentDrafts.BLANKET_AGREEMENT,
    PaymentDrafts.PAYMENT_CHECKS,
    PaymentDrafts.PAYMENT_INVOICES,
    PaymentDrafts.PAYMENT_CREDIT_CARDS,
    PaymentDrafts.PAYMENT_ACCOUNTS,
    PaymentDrafts.BILL_OF_EXCHANGE,
    PaymentDrafts.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
    PaymentDrafts.CASH_FLOW_ASSIGNMENTS,
    PaymentDrafts.PAYMENTS_APPROVAL_REQUESTS,
    PaymentDrafts.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    PaymentDrafts.CHART_OF_ACCOUNT,
    PaymentDrafts.CURRENCY,
    PaymentDrafts.PROJECT,
    PaymentDrafts.WITHHOLDING_TAX_CODE,
    PaymentDrafts.COUNTRY,
    PaymentDrafts.VAT_GROUP,
    PaymentDrafts.TRANSACTION_CODE_2,
    PaymentDrafts.WAREHOUSE_LOCATION,
    PaymentDrafts.BUSINESS_PLACE,
    PaymentDrafts.BLANKET_AGREEMENT_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentDrafts> = new AllFields('*', PaymentDrafts);
  /**
   * All key fields of the PaymentDrafts entity.
   */
  export const _keyFields: Array<Field<PaymentDrafts>> = [PaymentDrafts.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PaymentDrafts.
   */
  export const _keys: { [keys: string]: Field<PaymentDrafts> } = PaymentDrafts._keyFields.reduce((acc: { [keys: string]: Field<PaymentDrafts> }, field: Field<PaymentDrafts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
