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
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "PaymentDrafts" of service "SAPB1".
 */
export declare class PaymentDrafts extends Entity implements PaymentDraftsType {
    /**
     * Technical entity name for PaymentDrafts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentDrafts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency: Currencies;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCode: WithholdingTaxCodes;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[VatGroups]] entity.
     */
    vatGroup: VatGroups;
    /**
     * One-to-one navigation property to the [[TransactionCodes]] entity.
     */
    transactionCode2: TransactionCodes;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * One-to-one navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreement2: BlanketAgreements;
    /**
     * Returns an entity builder to construct instances `PaymentDrafts`.
     * @returns A builder that constructs instances of entity type `PaymentDrafts`.
     */
    static builder(): EntityBuilderType<PaymentDrafts, PaymentDraftsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentDrafts` entity type.
     * @returns A `PaymentDrafts` request builder.
     */
    static requestBuilder(): PaymentDraftsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentDrafts`.
     */
    static customField(fieldName: string): CustomField<PaymentDrafts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export interface PaymentDraftsTypeForceMandatory {
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
export declare namespace PaymentDrafts {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<PaymentDrafts>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRENCY: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[cashSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_SUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[transferSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_SUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[transferDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_DATE: DateField<PaymentDrafts>;
    /**
     * Static representation of the [[transferReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_REFERENCE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_RATE: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_1: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[counterReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTER_REFERENCE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARKS: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<PaymentDrafts>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_PERCENT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_PERCENT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[deductionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_SUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[cashSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_SUM_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[cashSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_SUM_SYS: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[boeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOE_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[billOfExchangeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_AMOUNT_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_AMOUNT_SC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[billOfExchangeAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_AGENT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_SC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[wtTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_TAXABLE_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_BRANCH: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_ACCOUNT_NO: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_COUNTRY: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_GROUP: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[bankChargeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGE_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[bankChargeAmountInFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGE_AMOUNT_IN_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[bankChargeAmountInSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGE_AMOUNT_IN_SC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[underOverpaymentdifference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDER_OVERPAYMENTDIFFERENCE: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDER_OVERPAYMENTDIFF_SC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtBaseSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_BASE_SUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtBaseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_BASE_SUM_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[wtBaseSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_BASE_SUM_SC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_DATE: DateField<PaymentDrafts>;
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_REAL_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<PaymentDrafts>;
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_CODE: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTROL_ACCOUNT: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDER_OVERPAYMENTDIFF_FC: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<PaymentDrafts>;
    /**
     * Static representation of the [[blanketAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CHECKS: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INVOICES: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CREDIT_CARDS: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_ACCOUNTS: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE: BillOfExchangeField<PaymentDrafts>;
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_FLOW_ASSIGNMENTS: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENTS_APPROVAL_REQUESTS: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PaymentDrafts>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<PaymentDrafts, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: OneToOneLink<PaymentDrafts, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<PaymentDrafts, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODE: OneToOneLink<PaymentDrafts, WithholdingTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<PaymentDrafts, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: OneToOneLink<PaymentDrafts, VatGroups>;
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_CODE_2: OneToOneLink<PaymentDrafts, TransactionCodes>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<PaymentDrafts, WarehouseLocations>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<PaymentDrafts, BusinessPlaces>;
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT_2: OneToOneLink<PaymentDrafts, BlanketAgreements>;
    /**
     * All fields of the PaymentDrafts entity.
     */
    const _allFields: Array<NumberField<PaymentDrafts> | DateField<PaymentDrafts> | StringField<PaymentDrafts> | CollectionField<PaymentDrafts> | BillOfExchangeField<PaymentDrafts> | OneToOneLink<PaymentDrafts, ChartOfAccounts> | OneToOneLink<PaymentDrafts, Currencies> | OneToOneLink<PaymentDrafts, Projects> | OneToOneLink<PaymentDrafts, WithholdingTaxCodes> | OneToOneLink<PaymentDrafts, Countries> | OneToOneLink<PaymentDrafts, VatGroups> | OneToOneLink<PaymentDrafts, TransactionCodes> | OneToOneLink<PaymentDrafts, WarehouseLocations> | OneToOneLink<PaymentDrafts, BusinessPlaces> | OneToOneLink<PaymentDrafts, BlanketAgreements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentDrafts>;
    /**
     * All key fields of the PaymentDrafts entity.
     */
    const _keyFields: Array<Field<PaymentDrafts>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentDrafts.
     */
    const _keys: {
        [keys: string]: Field<PaymentDrafts>;
    };
}
//# sourceMappingURL=PaymentDrafts.d.ts.map