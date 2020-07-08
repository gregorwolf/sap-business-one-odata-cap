import { InventoryGenExitsRequestBuilder } from './InventoryGenExitsRequestBuilder';
import { Moment } from 'moment';
import { DocumentApprovalRequest } from './DocumentApprovalRequest';
import { DocumentLine } from './DocumentLine';
import { DocumentAdditionalExpense } from './DocumentAdditionalExpense';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import { WithholdingTaxData } from './WithholdingTaxData';
import { DocumentPackage } from './DocumentPackage';
import { DocumentSpecialLine } from './DocumentSpecialLine';
import { DocumentInstallment } from './DocumentInstallment';
import { DownPaymentToDraw } from './DownPaymentToDraw';
import { TaxExtension, TaxExtensionField } from './TaxExtension';
import { AddressExtension, AddressExtensionField } from './AddressExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "InventoryGenExits" of service "SAPB1".
 */
export declare class InventoryGenExits extends Entity implements InventoryGenExitsType {
    /**
     * Technical entity name for InventoryGenExits.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryGenExits.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
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
     * Doc Due Date.
     * @nullable
     */
    docDueDate?: Moment;
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
     * Num At Card.
     * @nullable
     */
    numAtCard?: string;
    /**
     * Doc Total.
     * @nullable
     */
    docTotal?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Doc Currency.
     * @nullable
     */
    docCurrency?: string;
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
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Journal Memo.
     * @nullable
     */
    journalMemo?: string;
    /**
     * Payment Group Code.
     * @nullable
     */
    paymentGroupCode?: number;
    /**
     * Doc Time.
     * @nullable
     */
    docTime?: Time;
    /**
     * Sales Person Code.
     * @nullable
     */
    salesPersonCode?: number;
    /**
     * Transportation Code.
     * @nullable
     */
    transportationCode?: number;
    /**
     * Import File Num.
     * @nullable
     */
    importFileNum?: number;
    /**
     * Contact Person Code.
     * @nullable
     */
    contactPersonCode?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Ship To Code.
     * @nullable
     */
    shipToCode?: string;
    /**
     * Indicator.
     * @nullable
     */
    indicator?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Discount Percent.
     * @nullable
     */
    discountPercent?: number;
    /**
     * Payment Reference.
     * @nullable
     */
    paymentReference?: string;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Financial Period.
     * @nullable
     */
    financialPeriod?: number;
    /**
     * Trans Num.
     * @nullable
     */
    transNum?: number;
    /**
     * Vat Sum.
     * @nullable
     */
    vatSum?: number;
    /**
     * Vat Sum Sys.
     * @nullable
     */
    vatSumSys?: number;
    /**
     * Vat Sum Fc.
     * @nullable
     */
    vatSumFc?: number;
    /**
     * Doc Total Fc.
     * @nullable
     */
    docTotalFc?: number;
    /**
     * Doc Total Sys.
     * @nullable
     */
    docTotalSys?: number;
    /**
     * Form 1099.
     * @nullable
     */
    form1099?: number;
    /**
     * Box 1099.
     * @nullable
     */
    box1099?: string;
    /**
     * Requried Date.
     * @nullable
     */
    requriedDate?: Moment;
    /**
     * Cancel Date.
     * @nullable
     */
    cancelDate?: Moment;
    /**
     * Segment.
     * @nullable
     */
    segment?: number;
    /**
     * Payment Method.
     * @nullable
     */
    paymentMethod?: string;
    /**
     * Payment Block Entry.
     * @nullable
     */
    paymentBlockEntry?: number;
    /**
     * Central Bank Indicator.
     * @nullable
     */
    centralBankIndicator?: string;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Exemption Validity Date From.
     * @nullable
     */
    exemptionValidityDateFrom?: Moment;
    /**
     * Exemption Validity Date To.
     * @nullable
     */
    exemptionValidityDateTo?: Moment;
    /**
     * External Corrected Doc Num.
     * @nullable
     */
    externalCorrectedDocNum?: string;
    /**
     * Internal Corrected Doc Num.
     * @nullable
     */
    internalCorrectedDocNum?: number;
    /**
     * Next Correcting Document.
     * @nullable
     */
    nextCorrectingDocument?: number;
    /**
     * Tax Exemption Letter Num.
     * @nullable
     */
    taxExemptionLetterNum?: string;
    /**
     * Wt Applied.
     * @nullable
     */
    wtApplied?: number;
    /**
     * Wt Applied Fc.
     * @nullable
     */
    wtAppliedFc?: number;
    /**
     * Agent Code.
     * @nullable
     */
    agentCode?: string;
    /**
     * Wt Applied Sc.
     * @nullable
     */
    wtAppliedSc?: number;
    /**
     * Total Equalization Tax.
     * @nullable
     */
    totalEqualizationTax?: number;
    /**
     * Total Equalization Tax Fc.
     * @nullable
     */
    totalEqualizationTaxFc?: number;
    /**
     * Total Equalization Tax Sc.
     * @nullable
     */
    totalEqualizationTaxSc?: number;
    /**
     * Number Of Installments.
     * @nullable
     */
    numberOfInstallments?: number;
    /**
     * Wt Non Subject Amount.
     * @nullable
     */
    wtNonSubjectAmount?: number;
    /**
     * Wt Non Subject Amount Sc.
     * @nullable
     */
    wtNonSubjectAmountSc?: number;
    /**
     * Wt Non Subject Amount Fc.
     * @nullable
     */
    wtNonSubjectAmountFc?: number;
    /**
     * Wt Exempted Amount.
     * @nullable
     */
    wtExemptedAmount?: number;
    /**
     * Wt Exempted Amount Sc.
     * @nullable
     */
    wtExemptedAmountSc?: number;
    /**
     * Wt Exempted Amount Fc.
     * @nullable
     */
    wtExemptedAmountFc?: number;
    /**
     * Base Amount.
     * @nullable
     */
    baseAmount?: number;
    /**
     * Base Amount Sc.
     * @nullable
     */
    baseAmountSc?: number;
    /**
     * Base Amount Fc.
     * @nullable
     */
    baseAmountFc?: number;
    /**
     * Wt Amount.
     * @nullable
     */
    wtAmount?: number;
    /**
     * Wt Amount Sc.
     * @nullable
     */
    wtAmountSc?: number;
    /**
     * Wt Amount Fc.
     * @nullable
     */
    wtAmountFc?: number;
    /**
     * Vat Date.
     * @nullable
     */
    vatDate?: Moment;
    /**
     * Documents Owner.
     * @nullable
     */
    documentsOwner?: number;
    /**
     * Folio Prefix String.
     * @nullable
     */
    folioPrefixString?: string;
    /**
     * Folio Number.
     * @nullable
     */
    folioNumber?: number;
    /**
     * Bp Channel Code.
     * @nullable
     */
    bpChannelCode?: string;
    /**
     * Bp Channel Contact.
     * @nullable
     */
    bpChannelContact?: number;
    /**
     * Address 2.
     * @nullable
     */
    address2?: string;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Pay To Code.
     * @nullable
     */
    payToCode?: string;
    /**
     * Manual Number.
     * @nullable
     */
    manualNumber?: string;
    /**
     * Pay To Bank Country.
     * @nullable
     */
    payToBankCountry?: string;
    /**
     * Pay To Bank Code.
     * @nullable
     */
    payToBankCode?: string;
    /**
     * Pay To Bank Account No.
     * @nullable
     */
    payToBankAccountNo?: string;
    /**
     * Pay To Bank Branch.
     * @nullable
     */
    payToBankBranch?: string;
    /**
     * Bpl Id Assigned To Invoice.
     * @nullable
     */
    bplIdAssignedToInvoice?: number;
    /**
     * Down Payment.
     * @nullable
     */
    downPayment?: number;
    /**
     * Language Code.
     * @nullable
     */
    languageCode?: number;
    /**
     * Tracking Number.
     * @nullable
     */
    trackingNumber?: string;
    /**
     * Pick Remark.
     * @nullable
     */
    pickRemark?: string;
    /**
     * Closing Date.
     * @nullable
     */
    closingDate?: Moment;
    /**
     * Sequence Code.
     * @nullable
     */
    sequenceCode?: number;
    /**
     * Sequence Serial.
     * @nullable
     */
    sequenceSerial?: number;
    /**
     * Series String.
     * @nullable
     */
    seriesString?: string;
    /**
     * Sub Series String.
     * @nullable
     */
    subSeriesString?: string;
    /**
     * Sequence Model.
     * @nullable
     */
    sequenceModel?: string;
    /**
     * Total Discount.
     * @nullable
     */
    totalDiscount?: number;
    /**
     * Down Payment Amount.
     * @nullable
     */
    downPaymentAmount?: number;
    /**
     * Down Payment Percentage.
     * @nullable
     */
    downPaymentPercentage?: number;
    /**
     * Down Payment Amount Sc.
     * @nullable
     */
    downPaymentAmountSc?: number;
    /**
     * Down Payment Amount Fc.
     * @nullable
     */
    downPaymentAmountFc?: number;
    /**
     * Vat Percent.
     * @nullable
     */
    vatPercent?: number;
    /**
     * Service Gross Profit Percent.
     * @nullable
     */
    serviceGrossProfitPercent?: number;
    /**
     * Opening Remarks.
     * @nullable
     */
    openingRemarks?: string;
    /**
     * Closing Remarks.
     * @nullable
     */
    closingRemarks?: string;
    /**
     * Rounding Diff Amount.
     * @nullable
     */
    roundingDiffAmount?: number;
    /**
     * Rounding Diff Amount Fc.
     * @nullable
     */
    roundingDiffAmountFc?: number;
    /**
     * Rounding Diff Amount Sc.
     * @nullable
     */
    roundingDiffAmountSc?: number;
    /**
     * Signature Input Message.
     * @nullable
     */
    signatureInputMessage?: string;
    /**
     * Signature Digest.
     * @nullable
     */
    signatureDigest?: string;
    /**
     * Certification Number.
     * @nullable
     */
    certificationNumber?: string;
    /**
     * Private Key Version.
     * @nullable
     */
    privateKeyVersion?: number;
    /**
     * Control Account.
     * @nullable
     */
    controlAccount?: string;
    /**
     * Gts Checker.
     * @nullable
     */
    gtsChecker?: number;
    /**
     * Gts Payee.
     * @nullable
     */
    gtsPayee?: number;
    /**
     * Extra Month.
     * @nullable
     */
    extraMonth?: number;
    /**
     * Extra Days.
     * @nullable
     */
    extraDays?: number;
    /**
     * Cash Discount Date Offset.
     * @nullable
     */
    cashDiscountDateOffset?: number;
    /**
     * E Tax Web Site.
     * @nullable
     */
    eTaxWebSite?: number;
    /**
     * E Tax Number.
     * @nullable
     */
    eTaxNumber?: string;
    /**
     * Nts Approved Number.
     * @nullable
     */
    ntsApprovedNumber?: string;
    /**
     * E Doc Series.
     * @nullable
     */
    eDocSeries?: number;
    /**
     * E Doc Num.
     * @nullable
     */
    eDocNum?: string;
    /**
     * E Doc Export Format.
     * @nullable
     */
    eDocExportFormat?: number;
    /**
     * E Doc Error Code.
     * @nullable
     */
    eDocErrorCode?: string;
    /**
     * E Doc Error Message.
     * @nullable
     */
    eDocErrorMessage?: string;
    /**
     * Group Series.
     * @nullable
     */
    groupSeries?: number;
    /**
     * Group Number.
     * @nullable
     */
    groupNumber?: number;
    /**
     * Pos Equipment Number.
     * @nullable
     */
    posEquipmentNumber?: string;
    /**
     * Pos Manufacturer Serial Number.
     * @nullable
     */
    posManufacturerSerialNumber?: string;
    /**
     * Pos Cashier Number.
     * @nullable
     */
    posCashierNumber?: number;
    /**
     * Specified Closing Date.
     * @nullable
     */
    specifiedClosingDate?: Moment;
    /**
     * Total Discount Fc.
     * @nullable
     */
    totalDiscountFc?: number;
    /**
     * Total Discount Sc.
     * @nullable
     */
    totalDiscountSc?: number;
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
     * Annual Invoice Declaration Reference.
     * @nullable
     */
    annualInvoiceDeclarationReference?: number;
    /**
     * Supplier.
     * @nullable
     */
    supplier?: string;
    /**
     * Releaser.
     * @nullable
     */
    releaser?: number;
    /**
     * Receiver.
     * @nullable
     */
    receiver?: number;
    /**
     * Blanket Agreement Number.
     * @nullable
     */
    blanketAgreementNumber?: number;
    /**
     * Asset Value Date.
     * @nullable
     */
    assetValueDate?: Moment;
    /**
     * Requester.
     * @nullable
     */
    requester?: string;
    /**
     * Requester Name.
     * @nullable
     */
    requesterName?: string;
    /**
     * Requester Branch.
     * @nullable
     */
    requesterBranch?: number;
    /**
     * Requester Department.
     * @nullable
     */
    requesterDepartment?: number;
    /**
     * Requester Email.
     * @nullable
     */
    requesterEmail?: string;
    /**
     * Req Type.
     * @nullable
     */
    reqType?: number;
    /**
     * Authorization Code.
     * @nullable
     */
    authorizationCode?: string;
    /**
     * Start Delivery Date.
     * @nullable
     */
    startDeliveryDate?: Moment;
    /**
     * Start Delivery Time.
     * @nullable
     */
    startDeliveryTime?: Time;
    /**
     * End Delivery Date.
     * @nullable
     */
    endDeliveryDate?: Moment;
    /**
     * End Delivery Time.
     * @nullable
     */
    endDeliveryTime?: Time;
    /**
     * Vehicle Plate.
     * @nullable
     */
    vehiclePlate?: string;
    /**
     * At Document Type.
     * @nullable
     */
    atDocumentType?: string;
    /**
     * Elec Comm Message.
     * @nullable
     */
    elecCommMessage?: string;
    /**
     * Fiscal Doc Num.
     * @nullable
     */
    fiscalDocNum?: string;
    /**
     * Pos Daily Summary No.
     * @nullable
     */
    posDailySummaryNo?: number;
    /**
     * Pos Receipt No.
     * @nullable
     */
    posReceiptNo?: number;
    /**
     * Point Of Issue Code.
     * @nullable
     */
    pointOfIssueCode?: string;
    /**
     * Folio Number From.
     * @nullable
     */
    folioNumberFrom?: number;
    /**
     * Folio Number To.
     * @nullable
     */
    folioNumberTo?: number;
    /**
     * Related Type.
     * @nullable
     */
    relatedType?: number;
    /**
     * Related Entry.
     * @nullable
     */
    relatedEntry?: number;
    /**
     * Document Tax Id.
     * @nullable
     */
    documentTaxId?: string;
    /**
     * Date Of Reporting Control Statement Vat.
     * @nullable
     */
    dateOfReportingControlStatementVat?: Moment;
    /**
     * Reporting Section Control Statement Vat.
     * @nullable
     */
    reportingSectionControlStatementVat?: string;
    /**
     * Pos Cash Register.
     * @nullable
     */
    posCashRegister?: number;
    /**
     * Update Time.
     * @nullable
     */
    updateTime?: Time;
    /**
     * Down Payment Trasaction Id.
     * @nullable
     */
    downPaymentTrasactionId?: string;
    /**
     * Original Ref No.
     * @nullable
     */
    originalRefNo?: string;
    /**
     * Original Ref Date.
     * @nullable
     */
    originalRefDate?: Moment;
    /**
     * Original Credit Or Debit No.
     * @nullable
     */
    originalCreditOrDebitNo?: string;
    /**
     * Original Credit Or Debit Date.
     * @nullable
     */
    originalCreditOrDebitDate?: Moment;
    /**
     * E Commerce Operator.
     * @nullable
     */
    eCommerceOperator?: string;
    /**
     * E Commerce Gstin.
     * @nullable
     */
    eCommerceGstin?: string;
    /**
     * Tax Invoice No.
     * @nullable
     */
    taxInvoiceNo?: string;
    /**
     * Tax Invoice Date.
     * @nullable
     */
    taxInvoiceDate?: Moment;
    /**
     * Ship From.
     * @nullable
     */
    shipFrom?: string;
    /**
     * Issuing Reason.
     * @nullable
     */
    issuingReason?: number;
    /**
     * Document Approval Requests.
     * @nullable
     */
    documentApprovalRequests?: DocumentApprovalRequest[];
    /**
     * Document Lines.
     * @nullable
     */
    documentLines?: DocumentLine[];
    /**
     * Document Additional Expenses.
     * @nullable
     */
    documentAdditionalExpenses?: DocumentAdditionalExpense[];
    /**
     * Withholding Tax Data Wtx Collection.
     * @nullable
     */
    withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[];
    /**
     * Withholding Tax Data Collection.
     * @nullable
     */
    withholdingTaxDataCollection?: WithholdingTaxData[];
    /**
     * Document Packages.
     * @nullable
     */
    documentPackages?: DocumentPackage[];
    /**
     * Document Special Lines.
     * @nullable
     */
    documentSpecialLines?: DocumentSpecialLine[];
    /**
     * Document Installments.
     * @nullable
     */
    documentInstallments?: DocumentInstallment[];
    /**
     * Down Payments To Draw.
     * @nullable
     */
    downPaymentsToDraw?: DownPaymentToDraw[];
    /**
     * Tax Extension.
     * @nullable
     */
    taxExtension?: TaxExtension;
    /**
     * Address Extension.
     * @nullable
     */
    addressExtension?: AddressExtension;
    /**
     * Soi Wizard Id.
     * @nullable
     */
    soiWizardId?: number;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency: Currencies;
    /**
     * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsType: PaymentTermsTypes;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[ShippingTypes]] entity.
     */
    shippingType: ShippingTypes;
    /**
     * One-to-one navigation property to the [[FactoringIndicators]] entity.
     */
    factoringIndicator: FactoringIndicators;
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * One-to-one navigation property to the [[Forms1099]] entity.
     */
    forms1099: Forms1099;
    /**
     * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethod: WizardPaymentMethods;
    /**
     * One-to-one navigation property to the [[PaymentBlocks]] entity.
     */
    paymentBlock2: PaymentBlocks;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project2: Projects;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * One-to-one navigation property to the [[UserLanguages]] entity.
     */
    userLanguage: UserLanguages;
    /**
     * One-to-one navigation property to the [[NfModels]] entity.
     */
    nfModel: NfModels;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[TaxWebSites]] entity.
     */
    taxWebSite: TaxWebSites;
    /**
     * One-to-one navigation property to the [[Branches]] entity.
     */
    branch: Branches;
    /**
     * One-to-one navigation property to the [[Departments]] entity.
     */
    department: Departments;
    /**
     * One-to-one navigation property to the [[PosDailySummary]] entity.
     */
    posDailySummary: PosDailySummary;
    /**
     * Returns an entity builder to construct instances `InventoryGenExits`.
     * @returns A builder that constructs instances of entity type `InventoryGenExits`.
     */
    static builder(): EntityBuilderType<InventoryGenExits, InventoryGenExitsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InventoryGenExits` entity type.
     * @returns A `InventoryGenExits` request builder.
     */
    static requestBuilder(): InventoryGenExitsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryGenExits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryGenExits`.
     */
    static customField(fieldName: string): CustomField<InventoryGenExits>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { FactoringIndicators, FactoringIndicatorsType } from './FactoringIndicators';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Forms1099, Forms1099Type } from './Forms1099';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { PaymentBlocks, PaymentBlocksType } from './PaymentBlocks';
import { Projects, ProjectsType } from './Projects';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Countries, CountriesType } from './Countries';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { UserLanguages, UserLanguagesType } from './UserLanguages';
import { NfModels, NfModelsType } from './NfModels';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { TaxWebSites, TaxWebSitesType } from './TaxWebSites';
import { Branches, BranchesType } from './Branches';
import { Departments, DepartmentsType } from './Departments';
import { PosDailySummary, PosDailySummaryType } from './PosDailySummary';
export interface InventoryGenExitsType {
    docEntry?: number;
    docNum?: number;
    docDate?: Moment;
    docDueDate?: Moment;
    cardCode?: string;
    cardName?: string;
    address?: string;
    numAtCard?: string;
    docTotal?: number;
    attachmentEntry?: number;
    docCurrency?: string;
    docRate?: number;
    reference1?: string;
    reference2?: string;
    comments?: string;
    journalMemo?: string;
    paymentGroupCode?: number;
    docTime?: Time;
    salesPersonCode?: number;
    transportationCode?: number;
    importFileNum?: number;
    contactPersonCode?: number;
    series?: number;
    taxDate?: Moment;
    shipToCode?: string;
    indicator?: string;
    federalTaxId?: string;
    discountPercent?: number;
    paymentReference?: string;
    creationDate?: Moment;
    updateDate?: Moment;
    financialPeriod?: number;
    transNum?: number;
    vatSum?: number;
    vatSumSys?: number;
    vatSumFc?: number;
    docTotalFc?: number;
    docTotalSys?: number;
    form1099?: number;
    box1099?: string;
    requriedDate?: Moment;
    cancelDate?: Moment;
    segment?: number;
    paymentMethod?: string;
    paymentBlockEntry?: number;
    centralBankIndicator?: string;
    project?: string;
    exemptionValidityDateFrom?: Moment;
    exemptionValidityDateTo?: Moment;
    externalCorrectedDocNum?: string;
    internalCorrectedDocNum?: number;
    nextCorrectingDocument?: number;
    taxExemptionLetterNum?: string;
    wtApplied?: number;
    wtAppliedFc?: number;
    agentCode?: string;
    wtAppliedSc?: number;
    totalEqualizationTax?: number;
    totalEqualizationTaxFc?: number;
    totalEqualizationTaxSc?: number;
    numberOfInstallments?: number;
    wtNonSubjectAmount?: number;
    wtNonSubjectAmountSc?: number;
    wtNonSubjectAmountFc?: number;
    wtExemptedAmount?: number;
    wtExemptedAmountSc?: number;
    wtExemptedAmountFc?: number;
    baseAmount?: number;
    baseAmountSc?: number;
    baseAmountFc?: number;
    wtAmount?: number;
    wtAmountSc?: number;
    wtAmountFc?: number;
    vatDate?: Moment;
    documentsOwner?: number;
    folioPrefixString?: string;
    folioNumber?: number;
    bpChannelCode?: string;
    bpChannelContact?: number;
    address2?: string;
    periodIndicator?: string;
    payToCode?: string;
    manualNumber?: string;
    payToBankCountry?: string;
    payToBankCode?: string;
    payToBankAccountNo?: string;
    payToBankBranch?: string;
    bplIdAssignedToInvoice?: number;
    downPayment?: number;
    languageCode?: number;
    trackingNumber?: string;
    pickRemark?: string;
    closingDate?: Moment;
    sequenceCode?: number;
    sequenceSerial?: number;
    seriesString?: string;
    subSeriesString?: string;
    sequenceModel?: string;
    totalDiscount?: number;
    downPaymentAmount?: number;
    downPaymentPercentage?: number;
    downPaymentAmountSc?: number;
    downPaymentAmountFc?: number;
    vatPercent?: number;
    serviceGrossProfitPercent?: number;
    openingRemarks?: string;
    closingRemarks?: string;
    roundingDiffAmount?: number;
    roundingDiffAmountFc?: number;
    roundingDiffAmountSc?: number;
    signatureInputMessage?: string;
    signatureDigest?: string;
    certificationNumber?: string;
    privateKeyVersion?: number;
    controlAccount?: string;
    gtsChecker?: number;
    gtsPayee?: number;
    extraMonth?: number;
    extraDays?: number;
    cashDiscountDateOffset?: number;
    eTaxWebSite?: number;
    eTaxNumber?: string;
    ntsApprovedNumber?: string;
    eDocSeries?: number;
    eDocNum?: string;
    eDocExportFormat?: number;
    eDocErrorCode?: string;
    eDocErrorMessage?: string;
    groupSeries?: number;
    groupNumber?: number;
    posEquipmentNumber?: string;
    posManufacturerSerialNumber?: string;
    posCashierNumber?: number;
    specifiedClosingDate?: Moment;
    totalDiscountFc?: number;
    totalDiscountSc?: number;
    bplName?: string;
    vatRegNum?: string;
    annualInvoiceDeclarationReference?: number;
    supplier?: string;
    releaser?: number;
    receiver?: number;
    blanketAgreementNumber?: number;
    assetValueDate?: Moment;
    requester?: string;
    requesterName?: string;
    requesterBranch?: number;
    requesterDepartment?: number;
    requesterEmail?: string;
    reqType?: number;
    authorizationCode?: string;
    startDeliveryDate?: Moment;
    startDeliveryTime?: Time;
    endDeliveryDate?: Moment;
    endDeliveryTime?: Time;
    vehiclePlate?: string;
    atDocumentType?: string;
    elecCommMessage?: string;
    fiscalDocNum?: string;
    posDailySummaryNo?: number;
    posReceiptNo?: number;
    pointOfIssueCode?: string;
    folioNumberFrom?: number;
    folioNumberTo?: number;
    relatedType?: number;
    relatedEntry?: number;
    documentTaxId?: string;
    dateOfReportingControlStatementVat?: Moment;
    reportingSectionControlStatementVat?: string;
    posCashRegister?: number;
    updateTime?: Time;
    downPaymentTrasactionId?: string;
    originalRefNo?: string;
    originalRefDate?: Moment;
    originalCreditOrDebitNo?: string;
    originalCreditOrDebitDate?: Moment;
    eCommerceOperator?: string;
    eCommerceGstin?: string;
    taxInvoiceNo?: string;
    taxInvoiceDate?: Moment;
    shipFrom?: string;
    issuingReason?: number;
    documentApprovalRequests?: DocumentApprovalRequest[];
    documentLines?: DocumentLine[];
    documentAdditionalExpenses?: DocumentAdditionalExpense[];
    withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[];
    withholdingTaxDataCollection?: WithholdingTaxData[];
    documentPackages?: DocumentPackage[];
    documentSpecialLines?: DocumentSpecialLine[];
    documentInstallments?: DocumentInstallment[];
    downPaymentsToDraw?: DownPaymentToDraw[];
    taxExtension?: TaxExtension;
    addressExtension?: AddressExtension;
    soiWizardId?: number;
    businessPartner: BusinessPartnersType;
    currency: CurrenciesType;
    paymentTermsType: PaymentTermsTypesType;
    salesPerson: SalesPersonsType;
    shippingType: ShippingTypesType;
    factoringIndicator: FactoringIndicatorsType;
    journalEntry: JournalEntriesType;
    forms1099: Forms1099Type;
    wizardPaymentMethod: WizardPaymentMethodsType;
    paymentBlock2: PaymentBlocksType;
    project2: ProjectsType;
    employeeInfo: EmployeesInfoType;
    country: CountriesType;
    businessPlace: BusinessPlacesType;
    userLanguage: UserLanguagesType;
    nfModel: NfModelsType;
    chartOfAccount: ChartOfAccountsType;
    taxWebSite: TaxWebSitesType;
    branch: BranchesType;
    department: DepartmentsType;
    posDailySummary: PosDailySummaryType;
}
export interface InventoryGenExitsTypeForceMandatory {
    docEntry: number;
    docNum: number;
    docDate: Moment;
    docDueDate: Moment;
    cardCode: string;
    cardName: string;
    address: string;
    numAtCard: string;
    docTotal: number;
    attachmentEntry: number;
    docCurrency: string;
    docRate: number;
    reference1: string;
    reference2: string;
    comments: string;
    journalMemo: string;
    paymentGroupCode: number;
    docTime: Time;
    salesPersonCode: number;
    transportationCode: number;
    importFileNum: number;
    contactPersonCode: number;
    series: number;
    taxDate: Moment;
    shipToCode: string;
    indicator: string;
    federalTaxId: string;
    discountPercent: number;
    paymentReference: string;
    creationDate: Moment;
    updateDate: Moment;
    financialPeriod: number;
    transNum: number;
    vatSum: number;
    vatSumSys: number;
    vatSumFc: number;
    docTotalFc: number;
    docTotalSys: number;
    form1099: number;
    box1099: string;
    requriedDate: Moment;
    cancelDate: Moment;
    segment: number;
    paymentMethod: string;
    paymentBlockEntry: number;
    centralBankIndicator: string;
    project: string;
    exemptionValidityDateFrom: Moment;
    exemptionValidityDateTo: Moment;
    externalCorrectedDocNum: string;
    internalCorrectedDocNum: number;
    nextCorrectingDocument: number;
    taxExemptionLetterNum: string;
    wtApplied: number;
    wtAppliedFc: number;
    agentCode: string;
    wtAppliedSc: number;
    totalEqualizationTax: number;
    totalEqualizationTaxFc: number;
    totalEqualizationTaxSc: number;
    numberOfInstallments: number;
    wtNonSubjectAmount: number;
    wtNonSubjectAmountSc: number;
    wtNonSubjectAmountFc: number;
    wtExemptedAmount: number;
    wtExemptedAmountSc: number;
    wtExemptedAmountFc: number;
    baseAmount: number;
    baseAmountSc: number;
    baseAmountFc: number;
    wtAmount: number;
    wtAmountSc: number;
    wtAmountFc: number;
    vatDate: Moment;
    documentsOwner: number;
    folioPrefixString: string;
    folioNumber: number;
    bpChannelCode: string;
    bpChannelContact: number;
    address2: string;
    periodIndicator: string;
    payToCode: string;
    manualNumber: string;
    payToBankCountry: string;
    payToBankCode: string;
    payToBankAccountNo: string;
    payToBankBranch: string;
    bplIdAssignedToInvoice: number;
    downPayment: number;
    languageCode: number;
    trackingNumber: string;
    pickRemark: string;
    closingDate: Moment;
    sequenceCode: number;
    sequenceSerial: number;
    seriesString: string;
    subSeriesString: string;
    sequenceModel: string;
    totalDiscount: number;
    downPaymentAmount: number;
    downPaymentPercentage: number;
    downPaymentAmountSc: number;
    downPaymentAmountFc: number;
    vatPercent: number;
    serviceGrossProfitPercent: number;
    openingRemarks: string;
    closingRemarks: string;
    roundingDiffAmount: number;
    roundingDiffAmountFc: number;
    roundingDiffAmountSc: number;
    signatureInputMessage: string;
    signatureDigest: string;
    certificationNumber: string;
    privateKeyVersion: number;
    controlAccount: string;
    gtsChecker: number;
    gtsPayee: number;
    extraMonth: number;
    extraDays: number;
    cashDiscountDateOffset: number;
    eTaxWebSite: number;
    eTaxNumber: string;
    ntsApprovedNumber: string;
    eDocSeries: number;
    eDocNum: string;
    eDocExportFormat: number;
    eDocErrorCode: string;
    eDocErrorMessage: string;
    groupSeries: number;
    groupNumber: number;
    posEquipmentNumber: string;
    posManufacturerSerialNumber: string;
    posCashierNumber: number;
    specifiedClosingDate: Moment;
    totalDiscountFc: number;
    totalDiscountSc: number;
    bplName: string;
    vatRegNum: string;
    annualInvoiceDeclarationReference: number;
    supplier: string;
    releaser: number;
    receiver: number;
    blanketAgreementNumber: number;
    assetValueDate: Moment;
    requester: string;
    requesterName: string;
    requesterBranch: number;
    requesterDepartment: number;
    requesterEmail: string;
    reqType: number;
    authorizationCode: string;
    startDeliveryDate: Moment;
    startDeliveryTime: Time;
    endDeliveryDate: Moment;
    endDeliveryTime: Time;
    vehiclePlate: string;
    atDocumentType: string;
    elecCommMessage: string;
    fiscalDocNum: string;
    posDailySummaryNo: number;
    posReceiptNo: number;
    pointOfIssueCode: string;
    folioNumberFrom: number;
    folioNumberTo: number;
    relatedType: number;
    relatedEntry: number;
    documentTaxId: string;
    dateOfReportingControlStatementVat: Moment;
    reportingSectionControlStatementVat: string;
    posCashRegister: number;
    updateTime: Time;
    downPaymentTrasactionId: string;
    originalRefNo: string;
    originalRefDate: Moment;
    originalCreditOrDebitNo: string;
    originalCreditOrDebitDate: Moment;
    eCommerceOperator: string;
    eCommerceGstin: string;
    taxInvoiceNo: string;
    taxInvoiceDate: Moment;
    shipFrom: string;
    issuingReason: number;
    documentApprovalRequests: DocumentApprovalRequest[];
    documentLines: DocumentLine[];
    documentAdditionalExpenses: DocumentAdditionalExpense[];
    withholdingTaxDataWtxCollection: WithholdingTaxDataWtx[];
    withholdingTaxDataCollection: WithholdingTaxData[];
    documentPackages: DocumentPackage[];
    documentSpecialLines: DocumentSpecialLine[];
    documentInstallments: DocumentInstallment[];
    downPaymentsToDraw: DownPaymentToDraw[];
    taxExtension: TaxExtension;
    addressExtension: AddressExtension;
    soiWizardId: number;
    businessPartner: BusinessPartnersType;
    currency: CurrenciesType;
    paymentTermsType: PaymentTermsTypesType;
    salesPerson: SalesPersonsType;
    shippingType: ShippingTypesType;
    factoringIndicator: FactoringIndicatorsType;
    journalEntry: JournalEntriesType;
    forms1099: Forms1099Type;
    wizardPaymentMethod: WizardPaymentMethodsType;
    paymentBlock2: PaymentBlocksType;
    project2: ProjectsType;
    employeeInfo: EmployeesInfoType;
    country: CountriesType;
    businessPlace: BusinessPlacesType;
    userLanguage: UserLanguagesType;
    nfModel: NfModelsType;
    chartOfAccount: ChartOfAccountsType;
    taxWebSite: TaxWebSitesType;
    branch: BranchesType;
    department: DepartmentsType;
    posDailySummary: PosDailySummaryType;
}
export declare namespace InventoryGenExits {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DUE_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUM_AT_CARD: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRENCY: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_RATE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_1: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_MEMO: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_GROUP_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TIME: TimeField<InventoryGenExits>;
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORTATION_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPORT_FILE_NUM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDICATOR: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_PERCENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REFERENCE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_NUM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM_SYS: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL_SYS: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_1099: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOX_1099: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQURIED_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_ENTRY: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CENTRAL_BANK_INDICATOR: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_FROM: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_TO: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CORRECTED_DOC_NUM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_CORRECTED_DOC_NUM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_CORRECTING_DOCUMENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_EXEMPTION_LETTER_NUM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENT_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_INSTALLMENTS: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENTS_OWNER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_PREFIX_STRING: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANNEL_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANNEL_CONTACT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_COUNTRY: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_ACCOUNT_NO: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_BRANCH: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRACKING_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_REMARK: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_CODE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_SERIAL: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_STRING: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_SERIES_STRING: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_MODEL: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_PERCENTAGE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_PERCENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_GROSS_PROFIT_PERCENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPENING_REMARKS: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_REMARKS: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_INPUT_MESSAGE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_DIGEST: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATION_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVATE_KEY_VERSION: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTROL_ACCOUNT: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_CHECKER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_PAYEE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTRA_MONTH: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTRA_DAYS: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_DISCOUNT_DATE_OFFSET: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAX_WEB_SITE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAX_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NTS_APPROVED_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_SERIES: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_NUM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_EXPORT_FORMAT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_ERROR_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_ERROR_MESSAGE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_SERIES: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NUMBER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_EQUIPMENT_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_MANUFACTURER_SERIAL_NUMBER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_CASHIER_NUMBER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIED_CLOSING_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT_FC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT_SC: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEASER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECEIVER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT_NUMBER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_VALUE_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_NAME: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_BRANCH: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_DEPARTMENT: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_EMAIL: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQ_TYPE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_TIME: TimeField<InventoryGenExits>;
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_TIME: TimeField<InventoryGenExits>;
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VEHICLE_PLATE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AT_DOCUMENT_TYPE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEC_COMM_MESSAGE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_DOC_NUM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_DAILY_SUMMARY_NO: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_RECEIPT_NO: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POINT_OF_ISSUE_CODE: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_FROM: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_TO: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_TYPE: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_ENTRY: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TAX_ID: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_CASH_REGISTER: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_TRASACTION_ID: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_REF_NO: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_REF_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_COMMERCE_OPERATOR: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_COMMERCE_GSTIN: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_INVOICE_NO: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_INVOICE_DATE: DateField<InventoryGenExits>;
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_FROM: StringField<InventoryGenExits>;
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUING_REASON: NumberField<InventoryGenExits>;
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_APPROVAL_REQUESTS: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_LINES: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_PACKAGES: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_SPECIAL_LINES: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_INSTALLMENTS: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS_TO_DRAW: CollectionField<InventoryGenExits>;
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_EXTENSION: TaxExtensionField<InventoryGenExits>;
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_EXTENSION: AddressExtensionField<InventoryGenExits>;
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOI_WIZARD_ID: NumberField<InventoryGenExits>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<InventoryGenExits, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: OneToOneLink<InventoryGenExits, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPE: OneToOneLink<InventoryGenExits, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<InventoryGenExits, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: OneToOneLink<InventoryGenExits, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTORING_INDICATOR: OneToOneLink<InventoryGenExits, FactoringIndicators>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<InventoryGenExits, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMS_1099: OneToOneLink<InventoryGenExits, Forms1099>;
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHOD: OneToOneLink<InventoryGenExits, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_2: OneToOneLink<InventoryGenExits, PaymentBlocks>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<InventoryGenExits, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<InventoryGenExits, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<InventoryGenExits, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<InventoryGenExits, BusinessPlaces>;
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_LANGUAGE: OneToOneLink<InventoryGenExits, UserLanguages>;
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_MODEL: OneToOneLink<InventoryGenExits, NfModels>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<InventoryGenExits, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_WEB_SITE: OneToOneLink<InventoryGenExits, TaxWebSites>;
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: OneToOneLink<InventoryGenExits, Branches>;
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: OneToOneLink<InventoryGenExits, Departments>;
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_DAILY_SUMMARY: OneToOneLink<InventoryGenExits, PosDailySummary>;
    /**
     * All fields of the InventoryGenExits entity.
     */
    const _allFields: Array<NumberField<InventoryGenExits> | DateField<InventoryGenExits> | StringField<InventoryGenExits> | TimeField<InventoryGenExits> | CollectionField<InventoryGenExits> | TaxExtensionField<InventoryGenExits> | AddressExtensionField<InventoryGenExits> | OneToOneLink<InventoryGenExits, BusinessPartners> | OneToOneLink<InventoryGenExits, Currencies> | OneToOneLink<InventoryGenExits, PaymentTermsTypes> | OneToOneLink<InventoryGenExits, SalesPersons> | OneToOneLink<InventoryGenExits, ShippingTypes> | OneToOneLink<InventoryGenExits, FactoringIndicators> | OneToOneLink<InventoryGenExits, JournalEntries> | OneToOneLink<InventoryGenExits, Forms1099> | OneToOneLink<InventoryGenExits, WizardPaymentMethods> | OneToOneLink<InventoryGenExits, PaymentBlocks> | OneToOneLink<InventoryGenExits, Projects> | OneToOneLink<InventoryGenExits, EmployeesInfo> | OneToOneLink<InventoryGenExits, Countries> | OneToOneLink<InventoryGenExits, BusinessPlaces> | OneToOneLink<InventoryGenExits, UserLanguages> | OneToOneLink<InventoryGenExits, NfModels> | OneToOneLink<InventoryGenExits, ChartOfAccounts> | OneToOneLink<InventoryGenExits, TaxWebSites> | OneToOneLink<InventoryGenExits, Branches> | OneToOneLink<InventoryGenExits, Departments> | OneToOneLink<InventoryGenExits, PosDailySummary>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InventoryGenExits>;
    /**
     * All key fields of the InventoryGenExits entity.
     */
    const _keyFields: Array<Field<InventoryGenExits>>;
    /**
     * Mapping of all key field names to the respective static field property InventoryGenExits.
     */
    const _keys: {
        [keys: string]: Field<InventoryGenExits>;
    };
}
//# sourceMappingURL=InventoryGenExits.d.ts.map