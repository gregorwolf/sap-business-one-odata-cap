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
export declare class PaymentDrafts extends EntityV4 implements PaymentDraftsType {
    /**
     * Technical entity name for PaymentDrafts.
     */
    static _entityName: string;
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
     * Returns an entity builder to construct instances of `PaymentDrafts`.
     * @returns A builder that constructs instances of entity type `PaymentDrafts`.
     */
    static builder(): EntityBuilderType<PaymentDrafts, PaymentDraftsType>;
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
    static customField(fieldName: string): CustomFieldV4<PaymentDrafts>;
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
export declare namespace PaymentDrafts {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAND_WRITTEN: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<PaymentDrafts>;
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
     * Static representation of the [[localCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_CURRENCY: EnumField<PaymentDrafts>;
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
     * Static representation of the [[splitTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPLIT_TRANSACTION: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[applyVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLY_VAT: EnumField<PaymentDrafts>;
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
     * Static representation of the [[currencyIsLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_IS_LOCAL: EnumField<PaymentDrafts>;
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
     * Static representation of the [[billofExchangeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLOF_EXCHANGE_STATUS: EnumField<PaymentDrafts>;
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
     * Static representation of the [[proforma]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFORMA: EnumField<PaymentDrafts>;
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
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PAY_TO_BANK: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[paymentPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_PRIORITY: EnumField<PaymentDrafts>;
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
     * Static representation of the [[paymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TYPE: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFER_REAL_AMOUNT: NumberField<PaymentDrafts>;
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE: EnumField<PaymentDrafts>;
    /**
     * Static representation of the [[docTypte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPTE: EnumField<PaymentDrafts>;
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
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLED: EnumField<PaymentDrafts>;
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
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_STATUS: EnumField<PaymentDrafts>;
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
    const PAYMENT_CHECKS: CollectionField<PaymentDrafts, PaymentCheck>;
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INVOICES: CollectionField<PaymentDrafts, PaymentInvoice>;
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CREDIT_CARDS: CollectionField<PaymentDrafts, PaymentCreditCard>;
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_ACCOUNTS: CollectionField<PaymentDrafts, PaymentAccount>;
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE: BillOfExchangeField<PaymentDrafts>;
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<PaymentDrafts, WithholdingTaxCertificatesData>;
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_FLOW_ASSIGNMENTS: CollectionField<PaymentDrafts, CashFlowAssignment>;
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENTS_APPROVAL_REQUESTS: CollectionField<PaymentDrafts, PaymentsApprovalRequest>;
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PaymentDrafts, WithholdingTaxDataWtx>;
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
    const _allFields: Array<NumberField<PaymentDrafts> | EnumField<PaymentDrafts> | DateField<PaymentDrafts> | StringField<PaymentDrafts> | CollectionField<PaymentDrafts, PaymentCheck> | CollectionField<PaymentDrafts, PaymentInvoice> | CollectionField<PaymentDrafts, PaymentCreditCard> | CollectionField<PaymentDrafts, PaymentAccount> | BillOfExchangeField<PaymentDrafts> | CollectionField<PaymentDrafts, WithholdingTaxCertificatesData> | CollectionField<PaymentDrafts, CashFlowAssignment> | CollectionField<PaymentDrafts, PaymentsApprovalRequest> | CollectionField<PaymentDrafts, WithholdingTaxDataWtx> | OneToOneLink<PaymentDrafts, ChartOfAccounts> | OneToOneLink<PaymentDrafts, Currencies> | OneToOneLink<PaymentDrafts, Projects> | OneToOneLink<PaymentDrafts, WithholdingTaxCodes> | OneToOneLink<PaymentDrafts, Countries> | OneToOneLink<PaymentDrafts, VatGroups> | OneToOneLink<PaymentDrafts, TransactionCodes> | OneToOneLink<PaymentDrafts, WarehouseLocations> | OneToOneLink<PaymentDrafts, BusinessPlaces> | OneToOneLink<PaymentDrafts, BlanketAgreements>>;
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