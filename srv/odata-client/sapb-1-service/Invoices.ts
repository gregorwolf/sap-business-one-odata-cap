/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InvoicesRequestBuilder } from './InvoicesRequestBuilder';
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
 * This class represents the entity "Invoices" of service "SAPB1".
 */
export class Invoices extends EntityV4 implements InvoicesType {
  /**
   * Technical entity name for Invoices.
   */
  static _entityName = 'Invoices';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency!: Currencies;
  /**
   * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsType!: PaymentTermsTypes;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[ShippingTypes]] entity.
   */
  shippingType!: ShippingTypes;
  /**
   * One-to-one navigation property to the [[FactoringIndicators]] entity.
   */
  factoringIndicator!: FactoringIndicators;
  /**
   * One-to-one navigation property to the [[JournalEntries]] entity.
   */
  journalEntry!: JournalEntries;
  /**
   * One-to-one navigation property to the [[Forms1099]] entity.
   */
  forms1099!: Forms1099;
  /**
   * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethod!: WizardPaymentMethods;
  /**
   * One-to-one navigation property to the [[PaymentBlocks]] entity.
   */
  paymentBlock2!: PaymentBlocks;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;
  /**
   * One-to-one navigation property to the [[UserLanguages]] entity.
   */
  userLanguage!: UserLanguages;
  /**
   * One-to-one navigation property to the [[NfModels]] entity.
   */
  nfModel!: NfModels;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[TaxWebSites]] entity.
   */
  taxWebSite!: TaxWebSites;
  /**
   * One-to-one navigation property to the [[Branches]] entity.
   */
  branch!: Branches;
  /**
   * One-to-one navigation property to the [[Departments]] entity.
   */
  department!: Departments;
  /**
   * One-to-one navigation property to the [[PosDailySummary]] entity.
   */
  posDailySummary!: PosDailySummary;

  /**
   * Returns an entity builder to construct instances of `Invoices`.
   * @returns A builder that constructs instances of entity type `Invoices`.
   */
  static builder(): EntityBuilderType<Invoices, InvoicesType> {
    return EntityV4.entityBuilder(Invoices);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Invoices` entity type.
   * @returns A `Invoices` request builder.
   */
  static requestBuilder(): InvoicesRequestBuilder {
    return new InvoicesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Invoices`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Invoices`.
   */
  static customField(fieldName: string): CustomFieldV4<Invoices> {
    return EntityV4.customFieldSelector(fieldName, Invoices);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export interface InvoicesType {
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

export namespace Invoices {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<Invoices> = new NumberField('DocEntry', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<Invoices> = new NumberField('DocNum', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<Invoices> = new EnumField('DocType', Invoices);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<Invoices> = new EnumField('HandWritten', Invoices);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<Invoices> = new EnumField('Printed', Invoices);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<Invoices> = new DateField('DocDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<Invoices> = new DateField('DocDueDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<Invoices> = new StringField('CardCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<Invoices> = new StringField('CardName', Invoices, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<Invoices> = new StringField('Address', Invoices, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<Invoices> = new StringField('NumAtCard', Invoices, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<Invoices> = new NumberField('DocTotal', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Invoices> = new NumberField('AttachmentEntry', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<Invoices> = new StringField('DocCurrency', Invoices, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<Invoices> = new NumberField('DocRate', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<Invoices> = new StringField('Reference1', Invoices, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<Invoices> = new StringField('Reference2', Invoices, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<Invoices> = new StringField('Comments', Invoices, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<Invoices> = new StringField('JournalMemo', Invoices, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<Invoices> = new NumberField('PaymentGroupCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<Invoices> = new TimeField('DocTime', Invoices, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<Invoices> = new NumberField('SalesPersonCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<Invoices> = new NumberField('TransportationCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<Invoices> = new EnumField('Confirmed', Invoices);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<Invoices> = new NumberField('ImportFileNum', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<Invoices> = new EnumField('SummeryType', Invoices);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<Invoices> = new NumberField('ContactPersonCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<Invoices> = new EnumField('ShowSCN', Invoices);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<Invoices> = new NumberField('Series', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<Invoices> = new DateField('TaxDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<Invoices> = new EnumField('PartialSupply', Invoices);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<Invoices> = new EnumField('DocObjectCode', Invoices);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<Invoices> = new StringField('ShipToCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<Invoices> = new StringField('Indicator', Invoices, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<Invoices> = new StringField('FederalTaxID', Invoices, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<Invoices> = new NumberField('DiscountPercent', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<Invoices> = new StringField('PaymentReference', Invoices, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<Invoices> = new DateField('CreationDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<Invoices> = new DateField('UpdateDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<Invoices> = new NumberField('FinancialPeriod', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<Invoices> = new NumberField('TransNum', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<Invoices> = new NumberField('VatSum', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<Invoices> = new NumberField('VatSumSys', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<Invoices> = new NumberField('VatSumFc', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<Invoices> = new EnumField('NetProcedure', Invoices);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<Invoices> = new NumberField('DocTotalFc', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<Invoices> = new NumberField('DocTotalSys', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<Invoices> = new NumberField('Form1099', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<Invoices> = new StringField('Box1099', Invoices, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<Invoices> = new EnumField('RevisionPo', Invoices);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<Invoices> = new DateField('RequriedDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<Invoices> = new DateField('CancelDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<Invoices> = new EnumField('BlockDunning', Invoices);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<Invoices> = new EnumField('Submitted', Invoices);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<Invoices> = new NumberField('Segment', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<Invoices> = new EnumField('PickStatus', Invoices);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<Invoices> = new EnumField('Pick', Invoices);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<Invoices> = new StringField('PaymentMethod', Invoices, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<Invoices> = new EnumField('PaymentBlock', Invoices);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<Invoices> = new NumberField('PaymentBlockEntry', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<Invoices> = new StringField('CentralBankIndicator', Invoices, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<Invoices> = new EnumField('MaximumCashDiscount', Invoices);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<Invoices> = new EnumField('Reserve', Invoices);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<Invoices> = new StringField('Project', Invoices, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<Invoices> = new DateField('ExemptionValidityDateFrom', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<Invoices> = new DateField('ExemptionValidityDateTo', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<Invoices> = new EnumField('WareHouseUpdateType', Invoices);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<Invoices> = new EnumField('Rounding', Invoices);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<Invoices> = new StringField('ExternalCorrectedDocNum', Invoices, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<Invoices> = new NumberField('InternalCorrectedDocNum', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<Invoices> = new NumberField('NextCorrectingDocument', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<Invoices> = new EnumField('DeferredTax', Invoices);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<Invoices> = new StringField('TaxExemptionLetterNum', Invoices, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<Invoices> = new NumberField('WTApplied', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<Invoices> = new NumberField('WTAppliedFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<Invoices> = new EnumField('BillOfExchangeReserved', Invoices);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<Invoices> = new StringField('AgentCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<Invoices> = new NumberField('WTAppliedSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<Invoices> = new NumberField('TotalEqualizationTax', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<Invoices> = new NumberField('TotalEqualizationTaxFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<Invoices> = new NumberField('TotalEqualizationTaxSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<Invoices> = new NumberField('NumberOfInstallments', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<Invoices> = new EnumField('ApplyTaxOnFirstInstallment', Invoices);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<Invoices> = new NumberField('WTNonSubjectAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<Invoices> = new NumberField('WTNonSubjectAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<Invoices> = new NumberField('WTNonSubjectAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<Invoices> = new NumberField('WTExemptedAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<Invoices> = new NumberField('WTExemptedAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<Invoices> = new NumberField('WTExemptedAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<Invoices> = new NumberField('BaseAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<Invoices> = new NumberField('BaseAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<Invoices> = new NumberField('BaseAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<Invoices> = new NumberField('WTAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<Invoices> = new NumberField('WTAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<Invoices> = new NumberField('WTAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<Invoices> = new DateField('VatDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<Invoices> = new NumberField('DocumentsOwner', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<Invoices> = new StringField('FolioPrefixString', Invoices, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<Invoices> = new NumberField('FolioNumber', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<Invoices> = new EnumField('DocumentSubType', Invoices);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<Invoices> = new StringField('BPChannelCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<Invoices> = new NumberField('BPChannelContact', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<Invoices> = new StringField('Address2', Invoices, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<Invoices> = new EnumField('DocumentStatus', Invoices);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<Invoices> = new StringField('PeriodIndicator', Invoices, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<Invoices> = new StringField('PayToCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<Invoices> = new StringField('ManualNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<Invoices> = new EnumField('UseShpdGoodsAct', Invoices);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<Invoices> = new EnumField('IsPayToBank', Invoices);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<Invoices> = new StringField('PayToBankCountry', Invoices, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<Invoices> = new StringField('PayToBankCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<Invoices> = new StringField('PayToBankAccountNo', Invoices, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<Invoices> = new StringField('PayToBankBranch', Invoices, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<Invoices> = new NumberField('BPL_IDAssignedToInvoice', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<Invoices> = new NumberField('DownPayment', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<Invoices> = new EnumField('ReserveInvoice', Invoices);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<Invoices> = new NumberField('LanguageCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<Invoices> = new StringField('TrackingNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<Invoices> = new StringField('PickRemark', Invoices, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<Invoices> = new DateField('ClosingDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<Invoices> = new NumberField('SequenceCode', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<Invoices> = new NumberField('SequenceSerial', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<Invoices> = new StringField('SeriesString', Invoices, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<Invoices> = new StringField('SubSeriesString', Invoices, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<Invoices> = new StringField('SequenceModel', Invoices, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<Invoices> = new EnumField('UseCorrectionVATGroup', Invoices);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<Invoices> = new NumberField('TotalDiscount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<Invoices> = new NumberField('DownPaymentAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<Invoices> = new NumberField('DownPaymentPercentage', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<Invoices> = new EnumField('DownPaymentType', Invoices);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<Invoices> = new NumberField('DownPaymentAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<Invoices> = new NumberField('DownPaymentAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<Invoices> = new NumberField('VatPercent', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<Invoices> = new NumberField('ServiceGrossProfitPercent', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<Invoices> = new StringField('OpeningRemarks', Invoices, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<Invoices> = new StringField('ClosingRemarks', Invoices, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<Invoices> = new NumberField('RoundingDiffAmount', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<Invoices> = new NumberField('RoundingDiffAmountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<Invoices> = new NumberField('RoundingDiffAmountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<Invoices> = new EnumField('Cancelled', Invoices);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<Invoices> = new StringField('SignatureInputMessage', Invoices, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<Invoices> = new StringField('SignatureDigest', Invoices, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<Invoices> = new StringField('CertificationNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<Invoices> = new NumberField('PrivateKeyVersion', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<Invoices> = new StringField('ControlAccount', Invoices, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<Invoices> = new EnumField('InsuranceOperation347', Invoices);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<Invoices> = new EnumField('ArchiveNonremovableSalesQuotation', Invoices);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<Invoices> = new NumberField('GTSChecker', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<Invoices> = new NumberField('GTSPayee', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<Invoices> = new NumberField('ExtraMonth', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<Invoices> = new NumberField('ExtraDays', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<Invoices> = new NumberField('CashDiscountDateOffset', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<Invoices> = new EnumField('StartFrom', Invoices);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<Invoices> = new EnumField('NTSApproved', Invoices);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<Invoices> = new NumberField('ETaxWebSite', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<Invoices> = new StringField('ETaxNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<Invoices> = new StringField('NTSApprovedNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<Invoices> = new EnumField('EDocGenerationType', Invoices);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<Invoices> = new NumberField('EDocSeries', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<Invoices> = new StringField('EDocNum', Invoices, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<Invoices> = new NumberField('EDocExportFormat', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<Invoices> = new EnumField('EDocStatus', Invoices);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<Invoices> = new StringField('EDocErrorCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<Invoices> = new StringField('EDocErrorMessage', Invoices, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<Invoices> = new EnumField('DownPaymentStatus', Invoices);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<Invoices> = new NumberField('GroupSeries', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<Invoices> = new NumberField('GroupNumber', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<Invoices> = new EnumField('GroupHandWritten', Invoices);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<Invoices> = new EnumField('ReopenOriginalDocument', Invoices);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<Invoices> = new EnumField('ReopenManuallyClosedOrCanceledDocument', Invoices);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<Invoices> = new EnumField('CreateOnlineQuotation', Invoices);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<Invoices> = new StringField('POSEquipmentNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<Invoices> = new StringField('POSManufacturerSerialNumber', Invoices, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<Invoices> = new NumberField('POSCashierNumber', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<Invoices> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Invoices);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<Invoices> = new EnumField('ClosingOption', Invoices);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<Invoices> = new DateField('SpecifiedClosingDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<Invoices> = new EnumField('OpenForLandedCosts', Invoices);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<Invoices> = new EnumField('AuthorizationStatus', Invoices);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<Invoices> = new NumberField('TotalDiscountFC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<Invoices> = new NumberField('TotalDiscountSC', Invoices, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<Invoices> = new EnumField('RelevantToGTS', Invoices);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<Invoices> = new StringField('BPLName', Invoices, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<Invoices> = new StringField('VATRegNum', Invoices, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<Invoices> = new NumberField('AnnualInvoiceDeclarationReference', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<Invoices> = new StringField('Supplier', Invoices, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<Invoices> = new NumberField('Releaser', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<Invoices> = new NumberField('Receiver', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<Invoices> = new NumberField('BlanketAgreementNumber', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<Invoices> = new EnumField('IsAlteration', Invoices);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<Invoices> = new EnumField('CancelStatus', Invoices);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<Invoices> = new DateField('AssetValueDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<Invoices> = new StringField('Requester', Invoices, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<Invoices> = new StringField('RequesterName', Invoices, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<Invoices> = new NumberField('RequesterBranch', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<Invoices> = new NumberField('RequesterDepartment', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<Invoices> = new StringField('RequesterEmail', Invoices, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<Invoices> = new EnumField('SendNotification', Invoices);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<Invoices> = new NumberField('ReqType', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<Invoices> = new EnumField('DocumentDelivery', Invoices);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<Invoices> = new StringField('AuthorizationCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<Invoices> = new DateField('StartDeliveryDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<Invoices> = new TimeField('StartDeliveryTime', Invoices, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<Invoices> = new DateField('EndDeliveryDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<Invoices> = new TimeField('EndDeliveryTime', Invoices, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<Invoices> = new StringField('VehiclePlate', Invoices, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<Invoices> = new StringField('ATDocumentType', Invoices, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<Invoices> = new EnumField('ElecCommStatus', Invoices);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<Invoices> = new StringField('ElecCommMessage', Invoices, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<Invoices> = new EnumField('ReuseDocumentNum', Invoices);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<Invoices> = new EnumField('ReuseNotaFiscalNum', Invoices);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<Invoices> = new EnumField('PrintSEPADirect', Invoices);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<Invoices> = new StringField('FiscalDocNum', Invoices, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<Invoices> = new NumberField('POSDailySummaryNo', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<Invoices> = new NumberField('POSReceiptNo', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<Invoices> = new StringField('PointOfIssueCode', Invoices, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<Invoices> = new EnumField('Letter', Invoices);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<Invoices> = new NumberField('FolioNumberFrom', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<Invoices> = new NumberField('FolioNumberTo', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<Invoices> = new EnumField('InterimType', Invoices);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<Invoices> = new NumberField('RelatedType', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<Invoices> = new NumberField('RelatedEntry', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<Invoices> = new StringField('DocumentTaxID', Invoices, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<Invoices> = new DateField('DateOfReportingControlStatementVAT', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<Invoices> = new StringField('ReportingSectionControlStatementVAT', Invoices, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<Invoices> = new EnumField('ExcludeFromTaxReportControlStatementVAT', Invoices);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<Invoices> = new NumberField('POS_CashRegister', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<Invoices> = new TimeField('UpdateTime', Invoices, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<Invoices> = new EnumField('PriceMode', Invoices);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<Invoices> = new StringField('DownPaymentTrasactionID', Invoices, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<Invoices> = new EnumField('Revision', Invoices);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<Invoices> = new StringField('OriginalRefNo', Invoices, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<Invoices> = new DateField('OriginalRefDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<Invoices> = new EnumField('GSTTransactionType', Invoices);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<Invoices> = new StringField('OriginalCreditOrDebitNo', Invoices, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<Invoices> = new DateField('OriginalCreditOrDebitDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<Invoices> = new StringField('ECommerceOperator', Invoices, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<Invoices> = new StringField('ECommerceGSTIN', Invoices, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<Invoices> = new StringField('TaxInvoiceNo', Invoices, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<Invoices> = new DateField('TaxInvoiceDate', Invoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<Invoices> = new StringField('ShipFrom', Invoices, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<Invoices> = new EnumField('CommissionTrade', Invoices);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<Invoices> = new EnumField('CommissionTradeReturn', Invoices);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<Invoices> = new EnumField('UseBillToAddrToDetermineTax', Invoices);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<Invoices> = new NumberField('IssuingReason', Invoices, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<Invoices, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', Invoices, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<Invoices, DocumentLine> = new CollectionField('DocumentLines', Invoices, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<Invoices, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', Invoices, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<Invoices, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', Invoices, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<Invoices, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', Invoices, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<Invoices, DocumentPackage> = new CollectionField('DocumentPackages', Invoices, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<Invoices, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', Invoices, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<Invoices, DocumentInstallment> = new CollectionField('DocumentInstallments', Invoices, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<Invoices, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', Invoices, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<Invoices> = new TaxExtensionField('TaxExtension', Invoices);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<Invoices> = new AddressExtensionField('AddressExtension', Invoices);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<Invoices> = new NumberField('SOIWizardId', Invoices, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<Invoices, BusinessPartners> = new OneToOneLink('BusinessPartner', Invoices, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<Invoices, Currencies> = new OneToOneLink('Currency', Invoices, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<Invoices, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', Invoices, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<Invoices, SalesPersons> = new OneToOneLink('SalesPerson', Invoices, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<Invoices, ShippingTypes> = new OneToOneLink('ShippingType', Invoices, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<Invoices, FactoringIndicators> = new OneToOneLink('FactoringIndicator', Invoices, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<Invoices, JournalEntries> = new OneToOneLink('JournalEntry', Invoices, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<Invoices, Forms1099> = new OneToOneLink('Forms1099', Invoices, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<Invoices, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', Invoices, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<Invoices, PaymentBlocks> = new OneToOneLink('PaymentBlock2', Invoices, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<Invoices, Projects> = new OneToOneLink('Project2', Invoices, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<Invoices, EmployeesInfo> = new OneToOneLink('EmployeeInfo', Invoices, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<Invoices, Countries> = new OneToOneLink('Country', Invoices, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<Invoices, BusinessPlaces> = new OneToOneLink('BusinessPlace', Invoices, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<Invoices, UserLanguages> = new OneToOneLink('UserLanguage', Invoices, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<Invoices, NfModels> = new OneToOneLink('NFModel', Invoices, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<Invoices, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', Invoices, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<Invoices, TaxWebSites> = new OneToOneLink('TaxWebSite', Invoices, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<Invoices, Branches> = new OneToOneLink('Branch', Invoices, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<Invoices, Departments> = new OneToOneLink('Department', Invoices, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<Invoices, PosDailySummary> = new OneToOneLink('POSDailySummary', Invoices, PosDailySummary);
  /**
   * All fields of the Invoices entity.
   */
  export const _allFields: Array<NumberField<Invoices> | EnumField<Invoices> | DateField<Invoices> | StringField<Invoices> | TimeField<Invoices> | CollectionField<Invoices, DocumentApprovalRequest> | CollectionField<Invoices, DocumentLine> | CollectionField<Invoices, DocumentAdditionalExpense> | CollectionField<Invoices, WithholdingTaxDataWtx> | CollectionField<Invoices, WithholdingTaxData> | CollectionField<Invoices, DocumentPackage> | CollectionField<Invoices, DocumentSpecialLine> | CollectionField<Invoices, DocumentInstallment> | CollectionField<Invoices, DownPaymentToDraw> | TaxExtensionField<Invoices> | AddressExtensionField<Invoices> | OneToOneLink<Invoices, BusinessPartners> | OneToOneLink<Invoices, Currencies> | OneToOneLink<Invoices, PaymentTermsTypes> | OneToOneLink<Invoices, SalesPersons> | OneToOneLink<Invoices, ShippingTypes> | OneToOneLink<Invoices, FactoringIndicators> | OneToOneLink<Invoices, JournalEntries> | OneToOneLink<Invoices, Forms1099> | OneToOneLink<Invoices, WizardPaymentMethods> | OneToOneLink<Invoices, PaymentBlocks> | OneToOneLink<Invoices, Projects> | OneToOneLink<Invoices, EmployeesInfo> | OneToOneLink<Invoices, Countries> | OneToOneLink<Invoices, BusinessPlaces> | OneToOneLink<Invoices, UserLanguages> | OneToOneLink<Invoices, NfModels> | OneToOneLink<Invoices, ChartOfAccounts> | OneToOneLink<Invoices, TaxWebSites> | OneToOneLink<Invoices, Branches> | OneToOneLink<Invoices, Departments> | OneToOneLink<Invoices, PosDailySummary>> = [
    Invoices.DOC_ENTRY,
    Invoices.DOC_NUM,
    Invoices.DOC_TYPE,
    Invoices.HAND_WRITTEN,
    Invoices.PRINTED,
    Invoices.DOC_DATE,
    Invoices.DOC_DUE_DATE,
    Invoices.CARD_CODE,
    Invoices.CARD_NAME,
    Invoices.ADDRESS,
    Invoices.NUM_AT_CARD,
    Invoices.DOC_TOTAL,
    Invoices.ATTACHMENT_ENTRY,
    Invoices.DOC_CURRENCY,
    Invoices.DOC_RATE,
    Invoices.REFERENCE_1,
    Invoices.REFERENCE_2,
    Invoices.COMMENTS,
    Invoices.JOURNAL_MEMO,
    Invoices.PAYMENT_GROUP_CODE,
    Invoices.DOC_TIME,
    Invoices.SALES_PERSON_CODE,
    Invoices.TRANSPORTATION_CODE,
    Invoices.CONFIRMED,
    Invoices.IMPORT_FILE_NUM,
    Invoices.SUMMERY_TYPE,
    Invoices.CONTACT_PERSON_CODE,
    Invoices.SHOW_SCN,
    Invoices.SERIES,
    Invoices.TAX_DATE,
    Invoices.PARTIAL_SUPPLY,
    Invoices.DOC_OBJECT_CODE,
    Invoices.SHIP_TO_CODE,
    Invoices.INDICATOR,
    Invoices.FEDERAL_TAX_ID,
    Invoices.DISCOUNT_PERCENT,
    Invoices.PAYMENT_REFERENCE,
    Invoices.CREATION_DATE,
    Invoices.UPDATE_DATE,
    Invoices.FINANCIAL_PERIOD,
    Invoices.TRANS_NUM,
    Invoices.VAT_SUM,
    Invoices.VAT_SUM_SYS,
    Invoices.VAT_SUM_FC,
    Invoices.NET_PROCEDURE,
    Invoices.DOC_TOTAL_FC,
    Invoices.DOC_TOTAL_SYS,
    Invoices.FORM_1099,
    Invoices.BOX_1099,
    Invoices.REVISION_PO,
    Invoices.REQURIED_DATE,
    Invoices.CANCEL_DATE,
    Invoices.BLOCK_DUNNING,
    Invoices.SUBMITTED,
    Invoices.SEGMENT,
    Invoices.PICK_STATUS,
    Invoices.PICK,
    Invoices.PAYMENT_METHOD,
    Invoices.PAYMENT_BLOCK,
    Invoices.PAYMENT_BLOCK_ENTRY,
    Invoices.CENTRAL_BANK_INDICATOR,
    Invoices.MAXIMUM_CASH_DISCOUNT,
    Invoices.RESERVE,
    Invoices.PROJECT,
    Invoices.EXEMPTION_VALIDITY_DATE_FROM,
    Invoices.EXEMPTION_VALIDITY_DATE_TO,
    Invoices.WARE_HOUSE_UPDATE_TYPE,
    Invoices.ROUNDING,
    Invoices.EXTERNAL_CORRECTED_DOC_NUM,
    Invoices.INTERNAL_CORRECTED_DOC_NUM,
    Invoices.NEXT_CORRECTING_DOCUMENT,
    Invoices.DEFERRED_TAX,
    Invoices.TAX_EXEMPTION_LETTER_NUM,
    Invoices.WT_APPLIED,
    Invoices.WT_APPLIED_FC,
    Invoices.BILL_OF_EXCHANGE_RESERVED,
    Invoices.AGENT_CODE,
    Invoices.WT_APPLIED_SC,
    Invoices.TOTAL_EQUALIZATION_TAX,
    Invoices.TOTAL_EQUALIZATION_TAX_FC,
    Invoices.TOTAL_EQUALIZATION_TAX_SC,
    Invoices.NUMBER_OF_INSTALLMENTS,
    Invoices.APPLY_TAX_ON_FIRST_INSTALLMENT,
    Invoices.WT_NON_SUBJECT_AMOUNT,
    Invoices.WT_NON_SUBJECT_AMOUNT_SC,
    Invoices.WT_NON_SUBJECT_AMOUNT_FC,
    Invoices.WT_EXEMPTED_AMOUNT,
    Invoices.WT_EXEMPTED_AMOUNT_SC,
    Invoices.WT_EXEMPTED_AMOUNT_FC,
    Invoices.BASE_AMOUNT,
    Invoices.BASE_AMOUNT_SC,
    Invoices.BASE_AMOUNT_FC,
    Invoices.WT_AMOUNT,
    Invoices.WT_AMOUNT_SC,
    Invoices.WT_AMOUNT_FC,
    Invoices.VAT_DATE,
    Invoices.DOCUMENTS_OWNER,
    Invoices.FOLIO_PREFIX_STRING,
    Invoices.FOLIO_NUMBER,
    Invoices.DOCUMENT_SUB_TYPE,
    Invoices.BP_CHANNEL_CODE,
    Invoices.BP_CHANNEL_CONTACT,
    Invoices.ADDRESS_2,
    Invoices.DOCUMENT_STATUS,
    Invoices.PERIOD_INDICATOR,
    Invoices.PAY_TO_CODE,
    Invoices.MANUAL_NUMBER,
    Invoices.USE_SHPD_GOODS_ACT,
    Invoices.IS_PAY_TO_BANK,
    Invoices.PAY_TO_BANK_COUNTRY,
    Invoices.PAY_TO_BANK_CODE,
    Invoices.PAY_TO_BANK_ACCOUNT_NO,
    Invoices.PAY_TO_BANK_BRANCH,
    Invoices.BPL_ID_ASSIGNED_TO_INVOICE,
    Invoices.DOWN_PAYMENT,
    Invoices.RESERVE_INVOICE,
    Invoices.LANGUAGE_CODE,
    Invoices.TRACKING_NUMBER,
    Invoices.PICK_REMARK,
    Invoices.CLOSING_DATE,
    Invoices.SEQUENCE_CODE,
    Invoices.SEQUENCE_SERIAL,
    Invoices.SERIES_STRING,
    Invoices.SUB_SERIES_STRING,
    Invoices.SEQUENCE_MODEL,
    Invoices.USE_CORRECTION_VAT_GROUP,
    Invoices.TOTAL_DISCOUNT,
    Invoices.DOWN_PAYMENT_AMOUNT,
    Invoices.DOWN_PAYMENT_PERCENTAGE,
    Invoices.DOWN_PAYMENT_TYPE,
    Invoices.DOWN_PAYMENT_AMOUNT_SC,
    Invoices.DOWN_PAYMENT_AMOUNT_FC,
    Invoices.VAT_PERCENT,
    Invoices.SERVICE_GROSS_PROFIT_PERCENT,
    Invoices.OPENING_REMARKS,
    Invoices.CLOSING_REMARKS,
    Invoices.ROUNDING_DIFF_AMOUNT,
    Invoices.ROUNDING_DIFF_AMOUNT_FC,
    Invoices.ROUNDING_DIFF_AMOUNT_SC,
    Invoices.CANCELLED,
    Invoices.SIGNATURE_INPUT_MESSAGE,
    Invoices.SIGNATURE_DIGEST,
    Invoices.CERTIFICATION_NUMBER,
    Invoices.PRIVATE_KEY_VERSION,
    Invoices.CONTROL_ACCOUNT,
    Invoices.INSURANCE_OPERATION_347,
    Invoices.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    Invoices.GTS_CHECKER,
    Invoices.GTS_PAYEE,
    Invoices.EXTRA_MONTH,
    Invoices.EXTRA_DAYS,
    Invoices.CASH_DISCOUNT_DATE_OFFSET,
    Invoices.START_FROM,
    Invoices.NTS_APPROVED,
    Invoices.E_TAX_WEB_SITE,
    Invoices.E_TAX_NUMBER,
    Invoices.NTS_APPROVED_NUMBER,
    Invoices.E_DOC_GENERATION_TYPE,
    Invoices.E_DOC_SERIES,
    Invoices.E_DOC_NUM,
    Invoices.E_DOC_EXPORT_FORMAT,
    Invoices.E_DOC_STATUS,
    Invoices.E_DOC_ERROR_CODE,
    Invoices.E_DOC_ERROR_MESSAGE,
    Invoices.DOWN_PAYMENT_STATUS,
    Invoices.GROUP_SERIES,
    Invoices.GROUP_NUMBER,
    Invoices.GROUP_HAND_WRITTEN,
    Invoices.REOPEN_ORIGINAL_DOCUMENT,
    Invoices.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    Invoices.CREATE_ONLINE_QUOTATION,
    Invoices.POS_EQUIPMENT_NUMBER,
    Invoices.POS_MANUFACTURER_SERIAL_NUMBER,
    Invoices.POS_CASHIER_NUMBER,
    Invoices.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    Invoices.CLOSING_OPTION,
    Invoices.SPECIFIED_CLOSING_DATE,
    Invoices.OPEN_FOR_LANDED_COSTS,
    Invoices.AUTHORIZATION_STATUS,
    Invoices.TOTAL_DISCOUNT_FC,
    Invoices.TOTAL_DISCOUNT_SC,
    Invoices.RELEVANT_TO_GTS,
    Invoices.BPL_NAME,
    Invoices.VAT_REG_NUM,
    Invoices.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    Invoices.SUPPLIER,
    Invoices.RELEASER,
    Invoices.RECEIVER,
    Invoices.BLANKET_AGREEMENT_NUMBER,
    Invoices.IS_ALTERATION,
    Invoices.CANCEL_STATUS,
    Invoices.ASSET_VALUE_DATE,
    Invoices.REQUESTER,
    Invoices.REQUESTER_NAME,
    Invoices.REQUESTER_BRANCH,
    Invoices.REQUESTER_DEPARTMENT,
    Invoices.REQUESTER_EMAIL,
    Invoices.SEND_NOTIFICATION,
    Invoices.REQ_TYPE,
    Invoices.DOCUMENT_DELIVERY,
    Invoices.AUTHORIZATION_CODE,
    Invoices.START_DELIVERY_DATE,
    Invoices.START_DELIVERY_TIME,
    Invoices.END_DELIVERY_DATE,
    Invoices.END_DELIVERY_TIME,
    Invoices.VEHICLE_PLATE,
    Invoices.AT_DOCUMENT_TYPE,
    Invoices.ELEC_COMM_STATUS,
    Invoices.ELEC_COMM_MESSAGE,
    Invoices.REUSE_DOCUMENT_NUM,
    Invoices.REUSE_NOTA_FISCAL_NUM,
    Invoices.PRINT_SEPA_DIRECT,
    Invoices.FISCAL_DOC_NUM,
    Invoices.POS_DAILY_SUMMARY_NO,
    Invoices.POS_RECEIPT_NO,
    Invoices.POINT_OF_ISSUE_CODE,
    Invoices.LETTER,
    Invoices.FOLIO_NUMBER_FROM,
    Invoices.FOLIO_NUMBER_TO,
    Invoices.INTERIM_TYPE,
    Invoices.RELATED_TYPE,
    Invoices.RELATED_ENTRY,
    Invoices.DOCUMENT_TAX_ID,
    Invoices.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    Invoices.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    Invoices.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    Invoices.POS_CASH_REGISTER,
    Invoices.UPDATE_TIME,
    Invoices.PRICE_MODE,
    Invoices.DOWN_PAYMENT_TRASACTION_ID,
    Invoices.REVISION,
    Invoices.ORIGINAL_REF_NO,
    Invoices.ORIGINAL_REF_DATE,
    Invoices.GST_TRANSACTION_TYPE,
    Invoices.ORIGINAL_CREDIT_OR_DEBIT_NO,
    Invoices.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    Invoices.E_COMMERCE_OPERATOR,
    Invoices.E_COMMERCE_GSTIN,
    Invoices.TAX_INVOICE_NO,
    Invoices.TAX_INVOICE_DATE,
    Invoices.SHIP_FROM,
    Invoices.COMMISSION_TRADE,
    Invoices.COMMISSION_TRADE_RETURN,
    Invoices.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    Invoices.ISSUING_REASON,
    Invoices.DOCUMENT_APPROVAL_REQUESTS,
    Invoices.DOCUMENT_LINES,
    Invoices.DOCUMENT_ADDITIONAL_EXPENSES,
    Invoices.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    Invoices.WITHHOLDING_TAX_DATA_COLLECTION,
    Invoices.DOCUMENT_PACKAGES,
    Invoices.DOCUMENT_SPECIAL_LINES,
    Invoices.DOCUMENT_INSTALLMENTS,
    Invoices.DOWN_PAYMENTS_TO_DRAW,
    Invoices.TAX_EXTENSION,
    Invoices.ADDRESS_EXTENSION,
    Invoices.SOI_WIZARD_ID,
    Invoices.BUSINESS_PARTNER,
    Invoices.CURRENCY,
    Invoices.PAYMENT_TERMS_TYPE,
    Invoices.SALES_PERSON,
    Invoices.SHIPPING_TYPE,
    Invoices.FACTORING_INDICATOR,
    Invoices.JOURNAL_ENTRY,
    Invoices.FORMS_1099,
    Invoices.WIZARD_PAYMENT_METHOD,
    Invoices.PAYMENT_BLOCK_2,
    Invoices.PROJECT_2,
    Invoices.EMPLOYEE_INFO,
    Invoices.COUNTRY,
    Invoices.BUSINESS_PLACE,
    Invoices.USER_LANGUAGE,
    Invoices.NF_MODEL,
    Invoices.CHART_OF_ACCOUNT,
    Invoices.TAX_WEB_SITE,
    Invoices.BRANCH,
    Invoices.DEPARTMENT,
    Invoices.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Invoices> = new AllFields('*', Invoices);
  /**
   * All key fields of the Invoices entity.
   */
  export const _keyFields: Array<Field<Invoices>> = [Invoices.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Invoices.
   */
  export const _keys: { [keys: string]: Field<Invoices> } = Invoices._keyFields.reduce((acc: { [keys: string]: Field<Invoices> }, field: Field<Invoices>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
