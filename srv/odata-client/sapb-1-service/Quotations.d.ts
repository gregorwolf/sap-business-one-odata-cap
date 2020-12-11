import { QuotationsRequestBuilder } from './QuotationsRequestBuilder';
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
import { BoDocumentTypes } from './BoDocumentTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintStatusEnum } from './PrintStatusEnum';
import { BoDocSummaryTypes } from './BoDocSummaryTypes';
import { BoObjectTypes } from './BoObjectTypes';
import { BoDocWhsUpdateTypes } from './BoDocWhsUpdateTypes';
import { BoDocumentSubType } from './BoDocumentSubType';
import { BoStatus } from './BoStatus';
import { DownPaymentTypeEnum } from './DownPaymentTypeEnum';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { EDocGenerationTypeEnum } from './EDocGenerationTypeEnum';
import { EDocStatusEnum } from './EDocStatusEnum';
import { BoSoStatus } from './BoSoStatus';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { DocumentAuthorizationStatusEnum } from './DocumentAuthorizationStatusEnum';
import { CancelStatusEnum } from './CancelStatusEnum';
import { DocumentDeliveryTypeEnum } from './DocumentDeliveryTypeEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoInterimDocTypes } from './BoInterimDocTypes';
import { PriceModeDocumentEnum } from './PriceModeDocumentEnum';
import { GstTransactionTypeEnum } from './GstTransactionTypeEnum';
import { CommissionTradeTypeEnum } from './CommissionTradeTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Quotations" of service "SAPB1".
 */
export declare class Quotations extends EntityV4 implements QuotationsType {
    /**
     * Technical entity name for Quotations.
     */
    static _entityName: string;
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
     * Doc Type.
     * @nullable
     */
    docType?: BoDocumentTypes;
    /**
     * Hand Written.
     * @nullable
     */
    handWritten?: BoYesNoEnum;
    /**
     * Printed.
     * @nullable
     */
    printed?: PrintStatusEnum;
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
     * Confirmed.
     * @nullable
     */
    confirmed?: BoYesNoEnum;
    /**
     * Import File Num.
     * @nullable
     */
    importFileNum?: number;
    /**
     * Summery Type.
     * @nullable
     */
    summeryType?: BoDocSummaryTypes;
    /**
     * Contact Person Code.
     * @nullable
     */
    contactPersonCode?: number;
    /**
     * Show Scn.
     * @nullable
     */
    showScn?: BoYesNoEnum;
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
     * Partial Supply.
     * @nullable
     */
    partialSupply?: BoYesNoEnum;
    /**
     * Doc Object Code.
     * @nullable
     */
    docObjectCode?: BoObjectTypes;
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
     * Net Procedure.
     * @nullable
     */
    netProcedure?: BoYesNoEnum;
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
     * Revision Po.
     * @nullable
     */
    revisionPo?: BoYesNoEnum;
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
     * Block Dunning.
     * @nullable
     */
    blockDunning?: BoYesNoEnum;
    /**
     * Submitted.
     * @nullable
     */
    submitted?: BoYesNoEnum;
    /**
     * Segment.
     * @nullable
     */
    segment?: number;
    /**
     * Pick Status.
     * @nullable
     */
    pickStatus?: BoYesNoEnum;
    /**
     * Pick.
     * @nullable
     */
    pick?: BoYesNoEnum;
    /**
     * Payment Method.
     * @nullable
     */
    paymentMethod?: string;
    /**
     * Payment Block.
     * @nullable
     */
    paymentBlock?: BoYesNoEnum;
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
     * Maximum Cash Discount.
     * @nullable
     */
    maximumCashDiscount?: BoYesNoEnum;
    /**
     * Reserve.
     * @nullable
     */
    reserve?: BoYesNoEnum;
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
     * Ware House Update Type.
     * @nullable
     */
    wareHouseUpdateType?: BoDocWhsUpdateTypes;
    /**
     * Rounding.
     * @nullable
     */
    rounding?: BoYesNoEnum;
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
     * Deferred Tax.
     * @nullable
     */
    deferredTax?: BoYesNoEnum;
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
     * Bill Of Exchange Reserved.
     * @nullable
     */
    billOfExchangeReserved?: BoYesNoEnum;
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
     * Apply Tax On First Installment.
     * @nullable
     */
    applyTaxOnFirstInstallment?: BoYesNoEnum;
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
     * Document Sub Type.
     * @nullable
     */
    documentSubType?: BoDocumentSubType;
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
     * Document Status.
     * @nullable
     */
    documentStatus?: BoStatus;
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
     * Use Shpd Goods Act.
     * @nullable
     */
    useShpdGoodsAct?: BoYesNoEnum;
    /**
     * Is Pay To Bank.
     * @nullable
     */
    isPayToBank?: BoYesNoEnum;
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
     * Reserve Invoice.
     * @nullable
     */
    reserveInvoice?: BoYesNoEnum;
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
     * Use Correction Vat Group.
     * @nullable
     */
    useCorrectionVatGroup?: BoYesNoEnum;
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
     * Down Payment Type.
     * @nullable
     */
    downPaymentType?: DownPaymentTypeEnum;
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
     * Cancelled.
     * @nullable
     */
    cancelled?: BoYesNoEnum;
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
     * Insurance Operation 347.
     * @nullable
     */
    insuranceOperation347?: BoYesNoEnum;
    /**
     * Archive Nonremovable Sales Quotation.
     * @nullable
     */
    archiveNonremovableSalesQuotation?: BoYesNoEnum;
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
     * Start From.
     * @nullable
     */
    startFrom?: BoPayTermDueTypes;
    /**
     * Nts Approved.
     * @nullable
     */
    ntsApproved?: BoYesNoEnum;
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
     * E Doc Generation Type.
     * @nullable
     */
    eDocGenerationType?: EDocGenerationTypeEnum;
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
     * E Doc Status.
     * @nullable
     */
    eDocStatus?: EDocStatusEnum;
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
     * Down Payment Status.
     * @nullable
     */
    downPaymentStatus?: BoSoStatus;
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
     * Group Hand Written.
     * @nullable
     */
    groupHandWritten?: BoYesNoEnum;
    /**
     * Reopen Original Document.
     * @nullable
     */
    reopenOriginalDocument?: BoYesNoEnum;
    /**
     * Reopen Manually Closed Or Canceled Document.
     * @nullable
     */
    reopenManuallyClosedOrCanceledDocument?: BoYesNoEnum;
    /**
     * Create Online Quotation.
     * @nullable
     */
    createOnlineQuotation?: BoYesNoEnum;
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
     * Apply Current Vat Rates For Down Payments To Draw.
     * @nullable
     */
    applyCurrentVatRatesForDownPaymentsToDraw?: BoYesNoEnum;
    /**
     * Closing Option.
     * @nullable
     */
    closingOption?: ClosingOptionEnum;
    /**
     * Specified Closing Date.
     * @nullable
     */
    specifiedClosingDate?: Moment;
    /**
     * Open For Landed Costs.
     * @nullable
     */
    openForLandedCosts?: BoYesNoEnum;
    /**
     * Authorization Status.
     * @nullable
     */
    authorizationStatus?: DocumentAuthorizationStatusEnum;
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
     * Relevant To Gts.
     * @nullable
     */
    relevantToGts?: BoYesNoEnum;
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
     * Is Alteration.
     * @nullable
     */
    isAlteration?: BoYesNoEnum;
    /**
     * Cancel Status.
     * @nullable
     */
    cancelStatus?: CancelStatusEnum;
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
     * Send Notification.
     * @nullable
     */
    sendNotification?: BoYesNoEnum;
    /**
     * Req Type.
     * @nullable
     */
    reqType?: number;
    /**
     * Document Delivery.
     * @nullable
     */
    documentDelivery?: DocumentDeliveryTypeEnum;
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
     * Elec Comm Status.
     * @nullable
     */
    elecCommStatus?: ElecCommStatusEnum;
    /**
     * Elec Comm Message.
     * @nullable
     */
    elecCommMessage?: string;
    /**
     * Reuse Document Num.
     * @nullable
     */
    reuseDocumentNum?: BoYesNoEnum;
    /**
     * Reuse Nota Fiscal Num.
     * @nullable
     */
    reuseNotaFiscalNum?: BoYesNoEnum;
    /**
     * Print Sepa Direct.
     * @nullable
     */
    printSepaDirect?: BoYesNoEnum;
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
     * Letter.
     * @nullable
     */
    letter?: FolioLetterEnum;
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
     * Interim Type.
     * @nullable
     */
    interimType?: BoInterimDocTypes;
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
     * Exclude From Tax Report Control Statement Vat.
     * @nullable
     */
    excludeFromTaxReportControlStatementVat?: BoYesNoEnum;
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
     * Price Mode.
     * @nullable
     */
    priceMode?: PriceModeDocumentEnum;
    /**
     * Down Payment Trasaction Id.
     * @nullable
     */
    downPaymentTrasactionId?: string;
    /**
     * Revision.
     * @nullable
     */
    revision?: BoYesNoEnum;
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
     * Gst Transaction Type.
     * @nullable
     */
    gstTransactionType?: GstTransactionTypeEnum;
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
     * Commission Trade.
     * @nullable
     */
    commissionTrade?: CommissionTradeTypeEnum;
    /**
     * Commission Trade Return.
     * @nullable
     */
    commissionTradeReturn?: BoYesNoEnum;
    /**
     * Use Bill To Addr To Determine Tax.
     * @nullable
     */
    useBillToAddrToDetermineTax?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `Quotations`.
     * @returns A builder that constructs instances of entity type `Quotations`.
     */
    static builder(): EntityBuilderType<Quotations, QuotationsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Quotations` entity type.
     * @returns A `Quotations` request builder.
     */
    static requestBuilder(): QuotationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Quotations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Quotations`.
     */
    static customField(fieldName: string): CustomFieldV4<Quotations>;
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
export interface QuotationsType {
    docEntry?: number | null;
    docNum?: number | null;
    docType?: BoDocumentTypes | null;
    handWritten?: BoYesNoEnum | null;
    printed?: PrintStatusEnum | null;
    docDate?: Moment | null;
    docDueDate?: Moment | null;
    cardCode?: string | null;
    cardName?: string | null;
    address?: string | null;
    numAtCard?: string | null;
    docTotal?: number | null;
    attachmentEntry?: number | null;
    docCurrency?: string | null;
    docRate?: number | null;
    reference1?: string | null;
    reference2?: string | null;
    comments?: string | null;
    journalMemo?: string | null;
    paymentGroupCode?: number | null;
    docTime?: Time | null;
    salesPersonCode?: number | null;
    transportationCode?: number | null;
    confirmed?: BoYesNoEnum | null;
    importFileNum?: number | null;
    summeryType?: BoDocSummaryTypes | null;
    contactPersonCode?: number | null;
    showScn?: BoYesNoEnum | null;
    series?: number | null;
    taxDate?: Moment | null;
    partialSupply?: BoYesNoEnum | null;
    docObjectCode?: BoObjectTypes | null;
    shipToCode?: string | null;
    indicator?: string | null;
    federalTaxId?: string | null;
    discountPercent?: number | null;
    paymentReference?: string | null;
    creationDate?: Moment | null;
    updateDate?: Moment | null;
    financialPeriod?: number | null;
    transNum?: number | null;
    vatSum?: number | null;
    vatSumSys?: number | null;
    vatSumFc?: number | null;
    netProcedure?: BoYesNoEnum | null;
    docTotalFc?: number | null;
    docTotalSys?: number | null;
    form1099?: number | null;
    box1099?: string | null;
    revisionPo?: BoYesNoEnum | null;
    requriedDate?: Moment | null;
    cancelDate?: Moment | null;
    blockDunning?: BoYesNoEnum | null;
    submitted?: BoYesNoEnum | null;
    segment?: number | null;
    pickStatus?: BoYesNoEnum | null;
    pick?: BoYesNoEnum | null;
    paymentMethod?: string | null;
    paymentBlock?: BoYesNoEnum | null;
    paymentBlockEntry?: number | null;
    centralBankIndicator?: string | null;
    maximumCashDiscount?: BoYesNoEnum | null;
    reserve?: BoYesNoEnum | null;
    project?: string | null;
    exemptionValidityDateFrom?: Moment | null;
    exemptionValidityDateTo?: Moment | null;
    wareHouseUpdateType?: BoDocWhsUpdateTypes | null;
    rounding?: BoYesNoEnum | null;
    externalCorrectedDocNum?: string | null;
    internalCorrectedDocNum?: number | null;
    nextCorrectingDocument?: number | null;
    deferredTax?: BoYesNoEnum | null;
    taxExemptionLetterNum?: string | null;
    wtApplied?: number | null;
    wtAppliedFc?: number | null;
    billOfExchangeReserved?: BoYesNoEnum | null;
    agentCode?: string | null;
    wtAppliedSc?: number | null;
    totalEqualizationTax?: number | null;
    totalEqualizationTaxFc?: number | null;
    totalEqualizationTaxSc?: number | null;
    numberOfInstallments?: number | null;
    applyTaxOnFirstInstallment?: BoYesNoEnum | null;
    wtNonSubjectAmount?: number | null;
    wtNonSubjectAmountSc?: number | null;
    wtNonSubjectAmountFc?: number | null;
    wtExemptedAmount?: number | null;
    wtExemptedAmountSc?: number | null;
    wtExemptedAmountFc?: number | null;
    baseAmount?: number | null;
    baseAmountSc?: number | null;
    baseAmountFc?: number | null;
    wtAmount?: number | null;
    wtAmountSc?: number | null;
    wtAmountFc?: number | null;
    vatDate?: Moment | null;
    documentsOwner?: number | null;
    folioPrefixString?: string | null;
    folioNumber?: number | null;
    documentSubType?: BoDocumentSubType | null;
    bpChannelCode?: string | null;
    bpChannelContact?: number | null;
    address2?: string | null;
    documentStatus?: BoStatus | null;
    periodIndicator?: string | null;
    payToCode?: string | null;
    manualNumber?: string | null;
    useShpdGoodsAct?: BoYesNoEnum | null;
    isPayToBank?: BoYesNoEnum | null;
    payToBankCountry?: string | null;
    payToBankCode?: string | null;
    payToBankAccountNo?: string | null;
    payToBankBranch?: string | null;
    bplIdAssignedToInvoice?: number | null;
    downPayment?: number | null;
    reserveInvoice?: BoYesNoEnum | null;
    languageCode?: number | null;
    trackingNumber?: string | null;
    pickRemark?: string | null;
    closingDate?: Moment | null;
    sequenceCode?: number | null;
    sequenceSerial?: number | null;
    seriesString?: string | null;
    subSeriesString?: string | null;
    sequenceModel?: string | null;
    useCorrectionVatGroup?: BoYesNoEnum | null;
    totalDiscount?: number | null;
    downPaymentAmount?: number | null;
    downPaymentPercentage?: number | null;
    downPaymentType?: DownPaymentTypeEnum | null;
    downPaymentAmountSc?: number | null;
    downPaymentAmountFc?: number | null;
    vatPercent?: number | null;
    serviceGrossProfitPercent?: number | null;
    openingRemarks?: string | null;
    closingRemarks?: string | null;
    roundingDiffAmount?: number | null;
    roundingDiffAmountFc?: number | null;
    roundingDiffAmountSc?: number | null;
    cancelled?: BoYesNoEnum | null;
    signatureInputMessage?: string | null;
    signatureDigest?: string | null;
    certificationNumber?: string | null;
    privateKeyVersion?: number | null;
    controlAccount?: string | null;
    insuranceOperation347?: BoYesNoEnum | null;
    archiveNonremovableSalesQuotation?: BoYesNoEnum | null;
    gtsChecker?: number | null;
    gtsPayee?: number | null;
    extraMonth?: number | null;
    extraDays?: number | null;
    cashDiscountDateOffset?: number | null;
    startFrom?: BoPayTermDueTypes | null;
    ntsApproved?: BoYesNoEnum | null;
    eTaxWebSite?: number | null;
    eTaxNumber?: string | null;
    ntsApprovedNumber?: string | null;
    eDocGenerationType?: EDocGenerationTypeEnum | null;
    eDocSeries?: number | null;
    eDocNum?: string | null;
    eDocExportFormat?: number | null;
    eDocStatus?: EDocStatusEnum | null;
    eDocErrorCode?: string | null;
    eDocErrorMessage?: string | null;
    downPaymentStatus?: BoSoStatus | null;
    groupSeries?: number | null;
    groupNumber?: number | null;
    groupHandWritten?: BoYesNoEnum | null;
    reopenOriginalDocument?: BoYesNoEnum | null;
    reopenManuallyClosedOrCanceledDocument?: BoYesNoEnum | null;
    createOnlineQuotation?: BoYesNoEnum | null;
    posEquipmentNumber?: string | null;
    posManufacturerSerialNumber?: string | null;
    posCashierNumber?: number | null;
    applyCurrentVatRatesForDownPaymentsToDraw?: BoYesNoEnum | null;
    closingOption?: ClosingOptionEnum | null;
    specifiedClosingDate?: Moment | null;
    openForLandedCosts?: BoYesNoEnum | null;
    authorizationStatus?: DocumentAuthorizationStatusEnum | null;
    totalDiscountFc?: number | null;
    totalDiscountSc?: number | null;
    relevantToGts?: BoYesNoEnum | null;
    bplName?: string | null;
    vatRegNum?: string | null;
    annualInvoiceDeclarationReference?: number | null;
    supplier?: string | null;
    releaser?: number | null;
    receiver?: number | null;
    blanketAgreementNumber?: number | null;
    isAlteration?: BoYesNoEnum | null;
    cancelStatus?: CancelStatusEnum | null;
    assetValueDate?: Moment | null;
    requester?: string | null;
    requesterName?: string | null;
    requesterBranch?: number | null;
    requesterDepartment?: number | null;
    requesterEmail?: string | null;
    sendNotification?: BoYesNoEnum | null;
    reqType?: number | null;
    documentDelivery?: DocumentDeliveryTypeEnum | null;
    authorizationCode?: string | null;
    startDeliveryDate?: Moment | null;
    startDeliveryTime?: Time | null;
    endDeliveryDate?: Moment | null;
    endDeliveryTime?: Time | null;
    vehiclePlate?: string | null;
    atDocumentType?: string | null;
    elecCommStatus?: ElecCommStatusEnum | null;
    elecCommMessage?: string | null;
    reuseDocumentNum?: BoYesNoEnum | null;
    reuseNotaFiscalNum?: BoYesNoEnum | null;
    printSepaDirect?: BoYesNoEnum | null;
    fiscalDocNum?: string | null;
    posDailySummaryNo?: number | null;
    posReceiptNo?: number | null;
    pointOfIssueCode?: string | null;
    letter?: FolioLetterEnum | null;
    folioNumberFrom?: number | null;
    folioNumberTo?: number | null;
    interimType?: BoInterimDocTypes | null;
    relatedType?: number | null;
    relatedEntry?: number | null;
    documentTaxId?: string | null;
    dateOfReportingControlStatementVat?: Moment | null;
    reportingSectionControlStatementVat?: string | null;
    excludeFromTaxReportControlStatementVat?: BoYesNoEnum | null;
    posCashRegister?: number | null;
    updateTime?: Time | null;
    priceMode?: PriceModeDocumentEnum | null;
    downPaymentTrasactionId?: string | null;
    revision?: BoYesNoEnum | null;
    originalRefNo?: string | null;
    originalRefDate?: Moment | null;
    gstTransactionType?: GstTransactionTypeEnum | null;
    originalCreditOrDebitNo?: string | null;
    originalCreditOrDebitDate?: Moment | null;
    eCommerceOperator?: string | null;
    eCommerceGstin?: string | null;
    taxInvoiceNo?: string | null;
    taxInvoiceDate?: Moment | null;
    shipFrom?: string | null;
    commissionTrade?: CommissionTradeTypeEnum | null;
    commissionTradeReturn?: BoYesNoEnum | null;
    useBillToAddrToDetermineTax?: BoYesNoEnum | null;
    issuingReason?: number | null;
    documentApprovalRequests?: DocumentApprovalRequest[] | null;
    documentLines?: DocumentLine[] | null;
    documentAdditionalExpenses?: DocumentAdditionalExpense[] | null;
    withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx[] | null;
    withholdingTaxDataCollection?: WithholdingTaxData[] | null;
    documentPackages?: DocumentPackage[] | null;
    documentSpecialLines?: DocumentSpecialLine[] | null;
    documentInstallments?: DocumentInstallment[] | null;
    downPaymentsToDraw?: DownPaymentToDraw[] | null;
    taxExtension?: TaxExtension | null;
    addressExtension?: AddressExtension | null;
    soiWizardId?: number | null;
    businessPartner: BusinessPartnersType;
    currency: CurrenciesType;
    paymentTermsType: PaymentTermsTypesType;
    salesPerson: SalesPersonsType;
    shippingType: ShippingTypesType;
    factoringIndicator: FactoringIndicatorsType;
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
export declare namespace Quotations {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<Quotations>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<Quotations>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAND_WRITTEN: EnumField<Quotations>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<Quotations>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DUE_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<Quotations>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<Quotations>;
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUM_AT_CARD: StringField<Quotations>;
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL: NumberField<Quotations>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<Quotations>;
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRENCY: StringField<Quotations>;
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_RATE: NumberField<Quotations>;
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_1: StringField<Quotations>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<Quotations>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<Quotations>;
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_MEMO: StringField<Quotations>;
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_GROUP_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TIME: TimeField<Quotations>;
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORTATION_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONFIRMED: EnumField<Quotations>;
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPORT_FILE_NUM: NumberField<Quotations>;
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUMMERY_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_SCN: EnumField<Quotations>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<Quotations>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTIAL_SUPPLY: EnumField<Quotations>;
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE: EnumField<Quotations>;
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDICATOR: StringField<Quotations>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<Quotations>;
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_PERCENT: NumberField<Quotations>;
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REFERENCE: StringField<Quotations>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<Quotations>;
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_NUM: NumberField<Quotations>;
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM: NumberField<Quotations>;
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM_SYS: NumberField<Quotations>;
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_SUM_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_PROCEDURE: EnumField<Quotations>;
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TOTAL_SYS: NumberField<Quotations>;
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_1099: NumberField<Quotations>;
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOX_1099: StringField<Quotations>;
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVISION_PO: EnumField<Quotations>;
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQURIED_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_DUNNING: EnumField<Quotations>;
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBMITTED: EnumField<Quotations>;
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENT: NumberField<Quotations>;
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK: EnumField<Quotations>;
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD: StringField<Quotations>;
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK: EnumField<Quotations>;
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_ENTRY: NumberField<Quotations>;
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CENTRAL_BANK_INDICATOR: StringField<Quotations>;
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_CASH_DISCOUNT: EnumField<Quotations>;
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESERVE: EnumField<Quotations>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<Quotations>;
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_FROM: DateField<Quotations>;
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_TO: DateField<Quotations>;
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WARE_HOUSE_UPDATE_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING: EnumField<Quotations>;
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CORRECTED_DOC_NUM: StringField<Quotations>;
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_CORRECTED_DOC_NUM: NumberField<Quotations>;
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_CORRECTING_DOCUMENT: NumberField<Quotations>;
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFERRED_TAX: EnumField<Quotations>;
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_EXEMPTION_LETTER_NUM: StringField<Quotations>;
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED: NumberField<Quotations>;
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_EXCHANGE_RESERVED: EnumField<Quotations>;
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENT_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_APPLIED_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX: NumberField<Quotations>;
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_EQUALIZATION_TAX_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_INSTALLMENTS: NumberField<Quotations>;
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<Quotations>;
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_NON_SUBJECT_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_EXEMPTED_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENTS_OWNER: NumberField<Quotations>;
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_PREFIX_STRING: StringField<Quotations>;
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER: NumberField<Quotations>;
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_SUB_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANNEL_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CHANNEL_CONTACT: NumberField<Quotations>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<Quotations>;
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_INDICATOR: StringField<Quotations>;
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_SHPD_GOODS_ACT: EnumField<Quotations>;
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PAY_TO_BANK: EnumField<Quotations>;
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_COUNTRY: StringField<Quotations>;
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_ACCOUNT_NO: StringField<Quotations>;
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TO_BANK_BRANCH: StringField<Quotations>;
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<Quotations>;
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT: NumberField<Quotations>;
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESERVE_INVOICE: EnumField<Quotations>;
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRACKING_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_REMARK: StringField<Quotations>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_CODE: NumberField<Quotations>;
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_SERIAL: NumberField<Quotations>;
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_STRING: StringField<Quotations>;
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_SERIES_STRING: StringField<Quotations>;
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_MODEL: StringField<Quotations>;
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_CORRECTION_VAT_GROUP: EnumField<Quotations>;
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_PERCENTAGE: NumberField<Quotations>;
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_PERCENT: NumberField<Quotations>;
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_GROSS_PROFIT_PERCENT: NumberField<Quotations>;
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPENING_REMARKS: StringField<Quotations>;
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_REMARKS: StringField<Quotations>;
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT: NumberField<Quotations>;
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_DIFF_AMOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLED: EnumField<Quotations>;
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_INPUT_MESSAGE: StringField<Quotations>;
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_DIGEST: StringField<Quotations>;
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATION_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVATE_KEY_VERSION: NumberField<Quotations>;
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTROL_ACCOUNT: StringField<Quotations>;
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSURANCE_OPERATION_347: EnumField<Quotations>;
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<Quotations>;
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_CHECKER: NumberField<Quotations>;
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_PAYEE: NumberField<Quotations>;
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTRA_MONTH: NumberField<Quotations>;
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTRA_DAYS: NumberField<Quotations>;
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_DISCOUNT_DATE_OFFSET: NumberField<Quotations>;
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_FROM: EnumField<Quotations>;
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NTS_APPROVED: EnumField<Quotations>;
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAX_WEB_SITE: NumberField<Quotations>;
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAX_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NTS_APPROVED_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_GENERATION_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_SERIES: NumberField<Quotations>;
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_NUM: StringField<Quotations>;
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_EXPORT_FORMAT: NumberField<Quotations>;
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_ERROR_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_ERROR_MESSAGE: StringField<Quotations>;
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_SERIES: NumberField<Quotations>;
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NUMBER: NumberField<Quotations>;
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_HAND_WRITTEN: EnumField<Quotations>;
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REOPEN_ORIGINAL_DOCUMENT: EnumField<Quotations>;
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<Quotations>;
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_ONLINE_QUOTATION: EnumField<Quotations>;
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_EQUIPMENT_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_MANUFACTURER_SERIAL_NUMBER: StringField<Quotations>;
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_CASHIER_NUMBER: NumberField<Quotations>;
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<Quotations>;
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_OPTION: EnumField<Quotations>;
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIFIED_CLOSING_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPEN_FOR_LANDED_COSTS: EnumField<Quotations>;
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT_FC: NumberField<Quotations>;
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_DISCOUNT_SC: NumberField<Quotations>;
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_TO_GTS: EnumField<Quotations>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<Quotations>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<Quotations>;
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<Quotations>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Quotations>;
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEASER: NumberField<Quotations>;
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECEIVER: NumberField<Quotations>;
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT_NUMBER: NumberField<Quotations>;
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ALTERATION: EnumField<Quotations>;
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_VALUE_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER: StringField<Quotations>;
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_NAME: StringField<Quotations>;
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_BRANCH: NumberField<Quotations>;
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_DEPARTMENT: NumberField<Quotations>;
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_EMAIL: StringField<Quotations>;
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEND_NOTIFICATION: EnumField<Quotations>;
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQ_TYPE: NumberField<Quotations>;
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DELIVERY: EnumField<Quotations>;
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_TIME: TimeField<Quotations>;
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_TIME: TimeField<Quotations>;
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VEHICLE_PLATE: StringField<Quotations>;
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AT_DOCUMENT_TYPE: StringField<Quotations>;
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEC_COMM_STATUS: EnumField<Quotations>;
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEC_COMM_MESSAGE: StringField<Quotations>;
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REUSE_DOCUMENT_NUM: EnumField<Quotations>;
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REUSE_NOTA_FISCAL_NUM: EnumField<Quotations>;
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINT_SEPA_DIRECT: EnumField<Quotations>;
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_DOC_NUM: StringField<Quotations>;
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_DAILY_SUMMARY_NO: NumberField<Quotations>;
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_RECEIPT_NO: NumberField<Quotations>;
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POINT_OF_ISSUE_CODE: StringField<Quotations>;
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LETTER: EnumField<Quotations>;
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_FROM: NumberField<Quotations>;
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_TO: NumberField<Quotations>;
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERIM_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_TYPE: NumberField<Quotations>;
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_ENTRY: NumberField<Quotations>;
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TAX_ID: StringField<Quotations>;
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<Quotations>;
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<Quotations>;
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<Quotations>;
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_CASH_REGISTER: NumberField<Quotations>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<Quotations>;
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_MODE: EnumField<Quotations>;
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_TRASACTION_ID: StringField<Quotations>;
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVISION: EnumField<Quotations>;
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_REF_NO: StringField<Quotations>;
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_REF_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GST_TRANSACTION_TYPE: EnumField<Quotations>;
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<Quotations>;
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_COMMERCE_OPERATOR: StringField<Quotations>;
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_COMMERCE_GSTIN: StringField<Quotations>;
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_INVOICE_NO: StringField<Quotations>;
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_INVOICE_DATE: DateField<Quotations>;
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_FROM: StringField<Quotations>;
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_TRADE: EnumField<Quotations>;
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_TRADE_RETURN: EnumField<Quotations>;
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<Quotations>;
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUING_REASON: NumberField<Quotations>;
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_APPROVAL_REQUESTS: CollectionField<Quotations, DocumentApprovalRequest>;
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_LINES: CollectionField<Quotations, DocumentLine>;
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<Quotations, DocumentAdditionalExpense>;
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<Quotations, WithholdingTaxDataWtx>;
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<Quotations, WithholdingTaxData>;
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_PACKAGES: CollectionField<Quotations, DocumentPackage>;
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_SPECIAL_LINES: CollectionField<Quotations, DocumentSpecialLine>;
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_INSTALLMENTS: CollectionField<Quotations, DocumentInstallment>;
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS_TO_DRAW: CollectionField<Quotations, DownPaymentToDraw>;
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_EXTENSION: TaxExtensionField<Quotations>;
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_EXTENSION: AddressExtensionField<Quotations>;
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOI_WIZARD_ID: NumberField<Quotations>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<Quotations, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: OneToOneLink<Quotations, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPE: OneToOneLink<Quotations, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<Quotations, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: OneToOneLink<Quotations, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTORING_INDICATOR: OneToOneLink<Quotations, FactoringIndicators>;
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMS_1099: OneToOneLink<Quotations, Forms1099>;
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHOD: OneToOneLink<Quotations, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_2: OneToOneLink<Quotations, PaymentBlocks>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<Quotations, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<Quotations, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<Quotations, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<Quotations, BusinessPlaces>;
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_LANGUAGE: OneToOneLink<Quotations, UserLanguages>;
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_MODEL: OneToOneLink<Quotations, NfModels>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<Quotations, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_WEB_SITE: OneToOneLink<Quotations, TaxWebSites>;
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: OneToOneLink<Quotations, Branches>;
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: OneToOneLink<Quotations, Departments>;
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_DAILY_SUMMARY: OneToOneLink<Quotations, PosDailySummary>;
    /**
     * All fields of the Quotations entity.
     */
    const _allFields: Array<NumberField<Quotations> | EnumField<Quotations> | DateField<Quotations> | StringField<Quotations> | TimeField<Quotations> | CollectionField<Quotations, DocumentApprovalRequest> | CollectionField<Quotations, DocumentLine> | CollectionField<Quotations, DocumentAdditionalExpense> | CollectionField<Quotations, WithholdingTaxDataWtx> | CollectionField<Quotations, WithholdingTaxData> | CollectionField<Quotations, DocumentPackage> | CollectionField<Quotations, DocumentSpecialLine> | CollectionField<Quotations, DocumentInstallment> | CollectionField<Quotations, DownPaymentToDraw> | TaxExtensionField<Quotations> | AddressExtensionField<Quotations> | OneToOneLink<Quotations, BusinessPartners> | OneToOneLink<Quotations, Currencies> | OneToOneLink<Quotations, PaymentTermsTypes> | OneToOneLink<Quotations, SalesPersons> | OneToOneLink<Quotations, ShippingTypes> | OneToOneLink<Quotations, FactoringIndicators> | OneToOneLink<Quotations, Forms1099> | OneToOneLink<Quotations, WizardPaymentMethods> | OneToOneLink<Quotations, PaymentBlocks> | OneToOneLink<Quotations, Projects> | OneToOneLink<Quotations, EmployeesInfo> | OneToOneLink<Quotations, Countries> | OneToOneLink<Quotations, BusinessPlaces> | OneToOneLink<Quotations, UserLanguages> | OneToOneLink<Quotations, NfModels> | OneToOneLink<Quotations, ChartOfAccounts> | OneToOneLink<Quotations, TaxWebSites> | OneToOneLink<Quotations, Branches> | OneToOneLink<Quotations, Departments> | OneToOneLink<Quotations, PosDailySummary>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Quotations>;
    /**
     * All key fields of the Quotations entity.
     */
    const _keyFields: Array<Field<Quotations>>;
    /**
     * Mapping of all key field names to the respective static field property Quotations.
     */
    const _keys: {
        [keys: string]: Field<Quotations>;
    };
}
//# sourceMappingURL=Quotations.d.ts.map