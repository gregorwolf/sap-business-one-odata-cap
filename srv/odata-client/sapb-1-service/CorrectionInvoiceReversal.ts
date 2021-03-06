/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CorrectionInvoiceReversalRequestBuilder } from './CorrectionInvoiceReversalRequestBuilder';
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
 * This class represents the entity "CorrectionInvoiceReversal" of service "SAPB1".
 */
export class CorrectionInvoiceReversal extends EntityV4 implements CorrectionInvoiceReversalType {
  /**
   * Technical entity name for CorrectionInvoiceReversal.
   */
  static _entityName = 'CorrectionInvoiceReversal';
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
   * Returns an entity builder to construct instances of `CorrectionInvoiceReversal`.
   * @returns A builder that constructs instances of entity type `CorrectionInvoiceReversal`.
   */
  static builder(): EntityBuilderType<CorrectionInvoiceReversal, CorrectionInvoiceReversalType> {
    return EntityV4.entityBuilder(CorrectionInvoiceReversal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CorrectionInvoiceReversal` entity type.
   * @returns A `CorrectionInvoiceReversal` request builder.
   */
  static requestBuilder(): CorrectionInvoiceReversalRequestBuilder {
    return new CorrectionInvoiceReversalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionInvoiceReversal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CorrectionInvoiceReversal`.
   */
  static customField(fieldName: string): CustomFieldV4<CorrectionInvoiceReversal> {
    return EntityV4.customFieldSelector(fieldName, CorrectionInvoiceReversal);
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

export interface CorrectionInvoiceReversalType {
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

export namespace CorrectionInvoiceReversal {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<CorrectionInvoiceReversal> = new NumberField('DocEntry', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<CorrectionInvoiceReversal> = new NumberField('DocNum', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('DocType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<CorrectionInvoiceReversal> = new EnumField('HandWritten', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<CorrectionInvoiceReversal> = new EnumField('Printed', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<CorrectionInvoiceReversal> = new DateField('DocDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<CorrectionInvoiceReversal> = new DateField('DocDueDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<CorrectionInvoiceReversal> = new StringField('CardCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<CorrectionInvoiceReversal> = new StringField('CardName', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<CorrectionInvoiceReversal> = new StringField('Address', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<CorrectionInvoiceReversal> = new StringField('NumAtCard', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<CorrectionInvoiceReversal> = new NumberField('DocTotal', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<CorrectionInvoiceReversal> = new NumberField('AttachmentEntry', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<CorrectionInvoiceReversal> = new StringField('DocCurrency', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<CorrectionInvoiceReversal> = new NumberField('DocRate', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<CorrectionInvoiceReversal> = new StringField('Reference1', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<CorrectionInvoiceReversal> = new StringField('Reference2', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<CorrectionInvoiceReversal> = new StringField('Comments', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<CorrectionInvoiceReversal> = new StringField('JournalMemo', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('PaymentGroupCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<CorrectionInvoiceReversal> = new TimeField('DocTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('SalesPersonCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('TransportationCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<CorrectionInvoiceReversal> = new EnumField('Confirmed', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<CorrectionInvoiceReversal> = new NumberField('ImportFileNum', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('SummeryType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('ContactPersonCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<CorrectionInvoiceReversal> = new EnumField('ShowSCN', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<CorrectionInvoiceReversal> = new NumberField('Series', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<CorrectionInvoiceReversal> = new DateField('TaxDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<CorrectionInvoiceReversal> = new EnumField('PartialSupply', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<CorrectionInvoiceReversal> = new EnumField('DocObjectCode', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<CorrectionInvoiceReversal> = new StringField('ShipToCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<CorrectionInvoiceReversal> = new StringField('Indicator', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<CorrectionInvoiceReversal> = new StringField('FederalTaxID', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<CorrectionInvoiceReversal> = new NumberField('DiscountPercent', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<CorrectionInvoiceReversal> = new StringField('PaymentReference', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<CorrectionInvoiceReversal> = new DateField('CreationDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<CorrectionInvoiceReversal> = new DateField('UpdateDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<CorrectionInvoiceReversal> = new NumberField('FinancialPeriod', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<CorrectionInvoiceReversal> = new NumberField('TransNum', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<CorrectionInvoiceReversal> = new NumberField('VatSum', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<CorrectionInvoiceReversal> = new NumberField('VatSumSys', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('VatSumFc', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<CorrectionInvoiceReversal> = new EnumField('NetProcedure', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('DocTotalFc', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<CorrectionInvoiceReversal> = new NumberField('DocTotalSys', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<CorrectionInvoiceReversal> = new NumberField('Form1099', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<CorrectionInvoiceReversal> = new StringField('Box1099', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<CorrectionInvoiceReversal> = new EnumField('RevisionPo', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<CorrectionInvoiceReversal> = new DateField('RequriedDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<CorrectionInvoiceReversal> = new DateField('CancelDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<CorrectionInvoiceReversal> = new EnumField('BlockDunning', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<CorrectionInvoiceReversal> = new EnumField('Submitted', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<CorrectionInvoiceReversal> = new NumberField('Segment', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('PickStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<CorrectionInvoiceReversal> = new EnumField('Pick', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<CorrectionInvoiceReversal> = new StringField('PaymentMethod', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<CorrectionInvoiceReversal> = new EnumField('PaymentBlock', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<CorrectionInvoiceReversal> = new NumberField('PaymentBlockEntry', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<CorrectionInvoiceReversal> = new StringField('CentralBankIndicator', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<CorrectionInvoiceReversal> = new EnumField('MaximumCashDiscount', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<CorrectionInvoiceReversal> = new EnumField('Reserve', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<CorrectionInvoiceReversal> = new StringField('Project', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<CorrectionInvoiceReversal> = new DateField('ExemptionValidityDateFrom', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<CorrectionInvoiceReversal> = new DateField('ExemptionValidityDateTo', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('WareHouseUpdateType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<CorrectionInvoiceReversal> = new EnumField('Rounding', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<CorrectionInvoiceReversal> = new StringField('ExternalCorrectedDocNum', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<CorrectionInvoiceReversal> = new NumberField('InternalCorrectedDocNum', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<CorrectionInvoiceReversal> = new NumberField('NextCorrectingDocument', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<CorrectionInvoiceReversal> = new EnumField('DeferredTax', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<CorrectionInvoiceReversal> = new StringField('TaxExemptionLetterNum', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<CorrectionInvoiceReversal> = new NumberField('WTApplied', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTAppliedFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<CorrectionInvoiceReversal> = new EnumField('BillOfExchangeReserved', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<CorrectionInvoiceReversal> = new StringField('AgentCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTAppliedSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalEqualizationTax', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalEqualizationTaxFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalEqualizationTaxSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<CorrectionInvoiceReversal> = new NumberField('NumberOfInstallments', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<CorrectionInvoiceReversal> = new EnumField('ApplyTaxOnFirstInstallment', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('WTNonSubjectAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTNonSubjectAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTNonSubjectAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('WTExemptedAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTExemptedAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTExemptedAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('BaseAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('BaseAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('BaseAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('WTAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('WTAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<CorrectionInvoiceReversal> = new DateField('VatDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<CorrectionInvoiceReversal> = new NumberField('DocumentsOwner', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<CorrectionInvoiceReversal> = new StringField('FolioPrefixString', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<CorrectionInvoiceReversal> = new NumberField('FolioNumber', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('DocumentSubType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<CorrectionInvoiceReversal> = new StringField('BPChannelCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<CorrectionInvoiceReversal> = new NumberField('BPChannelContact', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<CorrectionInvoiceReversal> = new StringField('Address2', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('DocumentStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<CorrectionInvoiceReversal> = new StringField('PeriodIndicator', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<CorrectionInvoiceReversal> = new StringField('PayToCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('ManualNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<CorrectionInvoiceReversal> = new EnumField('UseShpdGoodsAct', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<CorrectionInvoiceReversal> = new EnumField('IsPayToBank', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<CorrectionInvoiceReversal> = new StringField('PayToBankCountry', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<CorrectionInvoiceReversal> = new StringField('PayToBankCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<CorrectionInvoiceReversal> = new StringField('PayToBankAccountNo', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<CorrectionInvoiceReversal> = new StringField('PayToBankBranch', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<CorrectionInvoiceReversal> = new NumberField('BPL_IDAssignedToInvoice', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<CorrectionInvoiceReversal> = new NumberField('DownPayment', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<CorrectionInvoiceReversal> = new EnumField('ReserveInvoice', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('LanguageCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('TrackingNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<CorrectionInvoiceReversal> = new StringField('PickRemark', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<CorrectionInvoiceReversal> = new DateField('ClosingDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<CorrectionInvoiceReversal> = new NumberField('SequenceCode', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<CorrectionInvoiceReversal> = new NumberField('SequenceSerial', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<CorrectionInvoiceReversal> = new StringField('SeriesString', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<CorrectionInvoiceReversal> = new StringField('SubSeriesString', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<CorrectionInvoiceReversal> = new StringField('SequenceModel', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<CorrectionInvoiceReversal> = new EnumField('UseCorrectionVATGroup', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalDiscount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('DownPaymentAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<CorrectionInvoiceReversal> = new NumberField('DownPaymentPercentage', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('DownPaymentType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('DownPaymentAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('DownPaymentAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<CorrectionInvoiceReversal> = new NumberField('VatPercent', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<CorrectionInvoiceReversal> = new NumberField('ServiceGrossProfitPercent', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<CorrectionInvoiceReversal> = new StringField('OpeningRemarks', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<CorrectionInvoiceReversal> = new StringField('ClosingRemarks', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<CorrectionInvoiceReversal> = new NumberField('RoundingDiffAmount', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('RoundingDiffAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('RoundingDiffAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<CorrectionInvoiceReversal> = new EnumField('Cancelled', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<CorrectionInvoiceReversal> = new StringField('SignatureInputMessage', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<CorrectionInvoiceReversal> = new StringField('SignatureDigest', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('CertificationNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<CorrectionInvoiceReversal> = new NumberField('PrivateKeyVersion', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<CorrectionInvoiceReversal> = new StringField('ControlAccount', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<CorrectionInvoiceReversal> = new EnumField('InsuranceOperation347', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<CorrectionInvoiceReversal> = new EnumField('ArchiveNonremovableSalesQuotation', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<CorrectionInvoiceReversal> = new NumberField('GTSChecker', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<CorrectionInvoiceReversal> = new NumberField('GTSPayee', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<CorrectionInvoiceReversal> = new NumberField('ExtraMonth', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<CorrectionInvoiceReversal> = new NumberField('ExtraDays', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<CorrectionInvoiceReversal> = new NumberField('CashDiscountDateOffset', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<CorrectionInvoiceReversal> = new EnumField('StartFrom', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<CorrectionInvoiceReversal> = new EnumField('NTSApproved', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<CorrectionInvoiceReversal> = new NumberField('ETaxWebSite', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('ETaxNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('NTSApprovedNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('EDocGenerationType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<CorrectionInvoiceReversal> = new NumberField('EDocSeries', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<CorrectionInvoiceReversal> = new StringField('EDocNum', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<CorrectionInvoiceReversal> = new NumberField('EDocExportFormat', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('EDocStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<CorrectionInvoiceReversal> = new StringField('EDocErrorCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<CorrectionInvoiceReversal> = new StringField('EDocErrorMessage', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('DownPaymentStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<CorrectionInvoiceReversal> = new NumberField('GroupSeries', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<CorrectionInvoiceReversal> = new NumberField('GroupNumber', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<CorrectionInvoiceReversal> = new EnumField('GroupHandWritten', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<CorrectionInvoiceReversal> = new EnumField('ReopenOriginalDocument', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<CorrectionInvoiceReversal> = new EnumField('ReopenManuallyClosedOrCanceledDocument', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<CorrectionInvoiceReversal> = new EnumField('CreateOnlineQuotation', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('POSEquipmentNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<CorrectionInvoiceReversal> = new StringField('POSManufacturerSerialNumber', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<CorrectionInvoiceReversal> = new NumberField('POSCashierNumber', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<CorrectionInvoiceReversal> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<CorrectionInvoiceReversal> = new EnumField('ClosingOption', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<CorrectionInvoiceReversal> = new DateField('SpecifiedClosingDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<CorrectionInvoiceReversal> = new EnumField('OpenForLandedCosts', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('AuthorizationStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalDiscountFC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<CorrectionInvoiceReversal> = new NumberField('TotalDiscountSC', CorrectionInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<CorrectionInvoiceReversal> = new EnumField('RelevantToGTS', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<CorrectionInvoiceReversal> = new StringField('BPLName', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<CorrectionInvoiceReversal> = new StringField('VATRegNum', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<CorrectionInvoiceReversal> = new NumberField('AnnualInvoiceDeclarationReference', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<CorrectionInvoiceReversal> = new StringField('Supplier', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<CorrectionInvoiceReversal> = new NumberField('Releaser', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<CorrectionInvoiceReversal> = new NumberField('Receiver', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<CorrectionInvoiceReversal> = new NumberField('BlanketAgreementNumber', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<CorrectionInvoiceReversal> = new EnumField('IsAlteration', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('CancelStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<CorrectionInvoiceReversal> = new DateField('AssetValueDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<CorrectionInvoiceReversal> = new StringField('Requester', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<CorrectionInvoiceReversal> = new StringField('RequesterName', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<CorrectionInvoiceReversal> = new NumberField('RequesterBranch', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<CorrectionInvoiceReversal> = new NumberField('RequesterDepartment', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<CorrectionInvoiceReversal> = new StringField('RequesterEmail', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<CorrectionInvoiceReversal> = new EnumField('SendNotification', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<CorrectionInvoiceReversal> = new NumberField('ReqType', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<CorrectionInvoiceReversal> = new EnumField('DocumentDelivery', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<CorrectionInvoiceReversal> = new StringField('AuthorizationCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<CorrectionInvoiceReversal> = new DateField('StartDeliveryDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<CorrectionInvoiceReversal> = new TimeField('StartDeliveryTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<CorrectionInvoiceReversal> = new DateField('EndDeliveryDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<CorrectionInvoiceReversal> = new TimeField('EndDeliveryTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<CorrectionInvoiceReversal> = new StringField('VehiclePlate', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<CorrectionInvoiceReversal> = new StringField('ATDocumentType', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<CorrectionInvoiceReversal> = new EnumField('ElecCommStatus', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<CorrectionInvoiceReversal> = new StringField('ElecCommMessage', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<CorrectionInvoiceReversal> = new EnumField('ReuseDocumentNum', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<CorrectionInvoiceReversal> = new EnumField('ReuseNotaFiscalNum', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<CorrectionInvoiceReversal> = new EnumField('PrintSEPADirect', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<CorrectionInvoiceReversal> = new StringField('FiscalDocNum', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<CorrectionInvoiceReversal> = new NumberField('POSDailySummaryNo', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<CorrectionInvoiceReversal> = new NumberField('POSReceiptNo', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<CorrectionInvoiceReversal> = new StringField('PointOfIssueCode', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<CorrectionInvoiceReversal> = new EnumField('Letter', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<CorrectionInvoiceReversal> = new NumberField('FolioNumberFrom', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<CorrectionInvoiceReversal> = new NumberField('FolioNumberTo', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('InterimType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<CorrectionInvoiceReversal> = new NumberField('RelatedType', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<CorrectionInvoiceReversal> = new NumberField('RelatedEntry', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<CorrectionInvoiceReversal> = new StringField('DocumentTaxID', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<CorrectionInvoiceReversal> = new DateField('DateOfReportingControlStatementVAT', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<CorrectionInvoiceReversal> = new StringField('ReportingSectionControlStatementVAT', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<CorrectionInvoiceReversal> = new EnumField('ExcludeFromTaxReportControlStatementVAT', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<CorrectionInvoiceReversal> = new NumberField('POS_CashRegister', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<CorrectionInvoiceReversal> = new TimeField('UpdateTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<CorrectionInvoiceReversal> = new EnumField('PriceMode', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<CorrectionInvoiceReversal> = new StringField('DownPaymentTrasactionID', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<CorrectionInvoiceReversal> = new EnumField('Revision', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<CorrectionInvoiceReversal> = new StringField('OriginalRefNo', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<CorrectionInvoiceReversal> = new DateField('OriginalRefDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<CorrectionInvoiceReversal> = new EnumField('GSTTransactionType', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<CorrectionInvoiceReversal> = new StringField('OriginalCreditOrDebitNo', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<CorrectionInvoiceReversal> = new DateField('OriginalCreditOrDebitDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<CorrectionInvoiceReversal> = new StringField('ECommerceOperator', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<CorrectionInvoiceReversal> = new StringField('ECommerceGSTIN', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<CorrectionInvoiceReversal> = new StringField('TaxInvoiceNo', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<CorrectionInvoiceReversal> = new DateField('TaxInvoiceDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<CorrectionInvoiceReversal> = new StringField('ShipFrom', CorrectionInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<CorrectionInvoiceReversal> = new EnumField('CommissionTrade', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<CorrectionInvoiceReversal> = new EnumField('CommissionTradeReturn', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<CorrectionInvoiceReversal> = new EnumField('UseBillToAddrToDetermineTax', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<CorrectionInvoiceReversal> = new NumberField('IssuingReason', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<CorrectionInvoiceReversal, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', CorrectionInvoiceReversal, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<CorrectionInvoiceReversal, DocumentLine> = new CollectionField('DocumentLines', CorrectionInvoiceReversal, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<CorrectionInvoiceReversal, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', CorrectionInvoiceReversal, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<CorrectionInvoiceReversal, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', CorrectionInvoiceReversal, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<CorrectionInvoiceReversal, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', CorrectionInvoiceReversal, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<CorrectionInvoiceReversal, DocumentPackage> = new CollectionField('DocumentPackages', CorrectionInvoiceReversal, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<CorrectionInvoiceReversal, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', CorrectionInvoiceReversal, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<CorrectionInvoiceReversal, DocumentInstallment> = new CollectionField('DocumentInstallments', CorrectionInvoiceReversal, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<CorrectionInvoiceReversal, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', CorrectionInvoiceReversal, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<CorrectionInvoiceReversal> = new TaxExtensionField('TaxExtension', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<CorrectionInvoiceReversal> = new AddressExtensionField('AddressExtension', CorrectionInvoiceReversal);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<CorrectionInvoiceReversal> = new NumberField('SOIWizardId', CorrectionInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<CorrectionInvoiceReversal, BusinessPartners> = new OneToOneLink('BusinessPartner', CorrectionInvoiceReversal, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<CorrectionInvoiceReversal, Currencies> = new OneToOneLink('Currency', CorrectionInvoiceReversal, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<CorrectionInvoiceReversal, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', CorrectionInvoiceReversal, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<CorrectionInvoiceReversal, SalesPersons> = new OneToOneLink('SalesPerson', CorrectionInvoiceReversal, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<CorrectionInvoiceReversal, ShippingTypes> = new OneToOneLink('ShippingType', CorrectionInvoiceReversal, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<CorrectionInvoiceReversal, FactoringIndicators> = new OneToOneLink('FactoringIndicator', CorrectionInvoiceReversal, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<CorrectionInvoiceReversal, JournalEntries> = new OneToOneLink('JournalEntry', CorrectionInvoiceReversal, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<CorrectionInvoiceReversal, Forms1099> = new OneToOneLink('Forms1099', CorrectionInvoiceReversal, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<CorrectionInvoiceReversal, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', CorrectionInvoiceReversal, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<CorrectionInvoiceReversal, PaymentBlocks> = new OneToOneLink('PaymentBlock2', CorrectionInvoiceReversal, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<CorrectionInvoiceReversal, Projects> = new OneToOneLink('Project2', CorrectionInvoiceReversal, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<CorrectionInvoiceReversal, EmployeesInfo> = new OneToOneLink('EmployeeInfo', CorrectionInvoiceReversal, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<CorrectionInvoiceReversal, Countries> = new OneToOneLink('Country', CorrectionInvoiceReversal, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<CorrectionInvoiceReversal, BusinessPlaces> = new OneToOneLink('BusinessPlace', CorrectionInvoiceReversal, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<CorrectionInvoiceReversal, UserLanguages> = new OneToOneLink('UserLanguage', CorrectionInvoiceReversal, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<CorrectionInvoiceReversal, NfModels> = new OneToOneLink('NFModel', CorrectionInvoiceReversal, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<CorrectionInvoiceReversal, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', CorrectionInvoiceReversal, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<CorrectionInvoiceReversal, TaxWebSites> = new OneToOneLink('TaxWebSite', CorrectionInvoiceReversal, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<CorrectionInvoiceReversal, Branches> = new OneToOneLink('Branch', CorrectionInvoiceReversal, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<CorrectionInvoiceReversal, Departments> = new OneToOneLink('Department', CorrectionInvoiceReversal, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<CorrectionInvoiceReversal, PosDailySummary> = new OneToOneLink('POSDailySummary', CorrectionInvoiceReversal, PosDailySummary);
  /**
   * All fields of the CorrectionInvoiceReversal entity.
   */
  export const _allFields: Array<NumberField<CorrectionInvoiceReversal> | EnumField<CorrectionInvoiceReversal> | DateField<CorrectionInvoiceReversal> | StringField<CorrectionInvoiceReversal> | TimeField<CorrectionInvoiceReversal> | CollectionField<CorrectionInvoiceReversal, DocumentApprovalRequest> | CollectionField<CorrectionInvoiceReversal, DocumentLine> | CollectionField<CorrectionInvoiceReversal, DocumentAdditionalExpense> | CollectionField<CorrectionInvoiceReversal, WithholdingTaxDataWtx> | CollectionField<CorrectionInvoiceReversal, WithholdingTaxData> | CollectionField<CorrectionInvoiceReversal, DocumentPackage> | CollectionField<CorrectionInvoiceReversal, DocumentSpecialLine> | CollectionField<CorrectionInvoiceReversal, DocumentInstallment> | CollectionField<CorrectionInvoiceReversal, DownPaymentToDraw> | TaxExtensionField<CorrectionInvoiceReversal> | AddressExtensionField<CorrectionInvoiceReversal> | OneToOneLink<CorrectionInvoiceReversal, BusinessPartners> | OneToOneLink<CorrectionInvoiceReversal, Currencies> | OneToOneLink<CorrectionInvoiceReversal, PaymentTermsTypes> | OneToOneLink<CorrectionInvoiceReversal, SalesPersons> | OneToOneLink<CorrectionInvoiceReversal, ShippingTypes> | OneToOneLink<CorrectionInvoiceReversal, FactoringIndicators> | OneToOneLink<CorrectionInvoiceReversal, JournalEntries> | OneToOneLink<CorrectionInvoiceReversal, Forms1099> | OneToOneLink<CorrectionInvoiceReversal, WizardPaymentMethods> | OneToOneLink<CorrectionInvoiceReversal, PaymentBlocks> | OneToOneLink<CorrectionInvoiceReversal, Projects> | OneToOneLink<CorrectionInvoiceReversal, EmployeesInfo> | OneToOneLink<CorrectionInvoiceReversal, Countries> | OneToOneLink<CorrectionInvoiceReversal, BusinessPlaces> | OneToOneLink<CorrectionInvoiceReversal, UserLanguages> | OneToOneLink<CorrectionInvoiceReversal, NfModels> | OneToOneLink<CorrectionInvoiceReversal, ChartOfAccounts> | OneToOneLink<CorrectionInvoiceReversal, TaxWebSites> | OneToOneLink<CorrectionInvoiceReversal, Branches> | OneToOneLink<CorrectionInvoiceReversal, Departments> | OneToOneLink<CorrectionInvoiceReversal, PosDailySummary>> = [
    CorrectionInvoiceReversal.DOC_ENTRY,
    CorrectionInvoiceReversal.DOC_NUM,
    CorrectionInvoiceReversal.DOC_TYPE,
    CorrectionInvoiceReversal.HAND_WRITTEN,
    CorrectionInvoiceReversal.PRINTED,
    CorrectionInvoiceReversal.DOC_DATE,
    CorrectionInvoiceReversal.DOC_DUE_DATE,
    CorrectionInvoiceReversal.CARD_CODE,
    CorrectionInvoiceReversal.CARD_NAME,
    CorrectionInvoiceReversal.ADDRESS,
    CorrectionInvoiceReversal.NUM_AT_CARD,
    CorrectionInvoiceReversal.DOC_TOTAL,
    CorrectionInvoiceReversal.ATTACHMENT_ENTRY,
    CorrectionInvoiceReversal.DOC_CURRENCY,
    CorrectionInvoiceReversal.DOC_RATE,
    CorrectionInvoiceReversal.REFERENCE_1,
    CorrectionInvoiceReversal.REFERENCE_2,
    CorrectionInvoiceReversal.COMMENTS,
    CorrectionInvoiceReversal.JOURNAL_MEMO,
    CorrectionInvoiceReversal.PAYMENT_GROUP_CODE,
    CorrectionInvoiceReversal.DOC_TIME,
    CorrectionInvoiceReversal.SALES_PERSON_CODE,
    CorrectionInvoiceReversal.TRANSPORTATION_CODE,
    CorrectionInvoiceReversal.CONFIRMED,
    CorrectionInvoiceReversal.IMPORT_FILE_NUM,
    CorrectionInvoiceReversal.SUMMERY_TYPE,
    CorrectionInvoiceReversal.CONTACT_PERSON_CODE,
    CorrectionInvoiceReversal.SHOW_SCN,
    CorrectionInvoiceReversal.SERIES,
    CorrectionInvoiceReversal.TAX_DATE,
    CorrectionInvoiceReversal.PARTIAL_SUPPLY,
    CorrectionInvoiceReversal.DOC_OBJECT_CODE,
    CorrectionInvoiceReversal.SHIP_TO_CODE,
    CorrectionInvoiceReversal.INDICATOR,
    CorrectionInvoiceReversal.FEDERAL_TAX_ID,
    CorrectionInvoiceReversal.DISCOUNT_PERCENT,
    CorrectionInvoiceReversal.PAYMENT_REFERENCE,
    CorrectionInvoiceReversal.CREATION_DATE,
    CorrectionInvoiceReversal.UPDATE_DATE,
    CorrectionInvoiceReversal.FINANCIAL_PERIOD,
    CorrectionInvoiceReversal.TRANS_NUM,
    CorrectionInvoiceReversal.VAT_SUM,
    CorrectionInvoiceReversal.VAT_SUM_SYS,
    CorrectionInvoiceReversal.VAT_SUM_FC,
    CorrectionInvoiceReversal.NET_PROCEDURE,
    CorrectionInvoiceReversal.DOC_TOTAL_FC,
    CorrectionInvoiceReversal.DOC_TOTAL_SYS,
    CorrectionInvoiceReversal.FORM_1099,
    CorrectionInvoiceReversal.BOX_1099,
    CorrectionInvoiceReversal.REVISION_PO,
    CorrectionInvoiceReversal.REQURIED_DATE,
    CorrectionInvoiceReversal.CANCEL_DATE,
    CorrectionInvoiceReversal.BLOCK_DUNNING,
    CorrectionInvoiceReversal.SUBMITTED,
    CorrectionInvoiceReversal.SEGMENT,
    CorrectionInvoiceReversal.PICK_STATUS,
    CorrectionInvoiceReversal.PICK,
    CorrectionInvoiceReversal.PAYMENT_METHOD,
    CorrectionInvoiceReversal.PAYMENT_BLOCK,
    CorrectionInvoiceReversal.PAYMENT_BLOCK_ENTRY,
    CorrectionInvoiceReversal.CENTRAL_BANK_INDICATOR,
    CorrectionInvoiceReversal.MAXIMUM_CASH_DISCOUNT,
    CorrectionInvoiceReversal.RESERVE,
    CorrectionInvoiceReversal.PROJECT,
    CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM,
    CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO,
    CorrectionInvoiceReversal.WARE_HOUSE_UPDATE_TYPE,
    CorrectionInvoiceReversal.ROUNDING,
    CorrectionInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM,
    CorrectionInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM,
    CorrectionInvoiceReversal.NEXT_CORRECTING_DOCUMENT,
    CorrectionInvoiceReversal.DEFERRED_TAX,
    CorrectionInvoiceReversal.TAX_EXEMPTION_LETTER_NUM,
    CorrectionInvoiceReversal.WT_APPLIED,
    CorrectionInvoiceReversal.WT_APPLIED_FC,
    CorrectionInvoiceReversal.BILL_OF_EXCHANGE_RESERVED,
    CorrectionInvoiceReversal.AGENT_CODE,
    CorrectionInvoiceReversal.WT_APPLIED_SC,
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX,
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC,
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC,
    CorrectionInvoiceReversal.NUMBER_OF_INSTALLMENTS,
    CorrectionInvoiceReversal.APPLY_TAX_ON_FIRST_INSTALLMENT,
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT,
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC,
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC,
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT,
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_SC,
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_FC,
    CorrectionInvoiceReversal.BASE_AMOUNT,
    CorrectionInvoiceReversal.BASE_AMOUNT_SC,
    CorrectionInvoiceReversal.BASE_AMOUNT_FC,
    CorrectionInvoiceReversal.WT_AMOUNT,
    CorrectionInvoiceReversal.WT_AMOUNT_SC,
    CorrectionInvoiceReversal.WT_AMOUNT_FC,
    CorrectionInvoiceReversal.VAT_DATE,
    CorrectionInvoiceReversal.DOCUMENTS_OWNER,
    CorrectionInvoiceReversal.FOLIO_PREFIX_STRING,
    CorrectionInvoiceReversal.FOLIO_NUMBER,
    CorrectionInvoiceReversal.DOCUMENT_SUB_TYPE,
    CorrectionInvoiceReversal.BP_CHANNEL_CODE,
    CorrectionInvoiceReversal.BP_CHANNEL_CONTACT,
    CorrectionInvoiceReversal.ADDRESS_2,
    CorrectionInvoiceReversal.DOCUMENT_STATUS,
    CorrectionInvoiceReversal.PERIOD_INDICATOR,
    CorrectionInvoiceReversal.PAY_TO_CODE,
    CorrectionInvoiceReversal.MANUAL_NUMBER,
    CorrectionInvoiceReversal.USE_SHPD_GOODS_ACT,
    CorrectionInvoiceReversal.IS_PAY_TO_BANK,
    CorrectionInvoiceReversal.PAY_TO_BANK_COUNTRY,
    CorrectionInvoiceReversal.PAY_TO_BANK_CODE,
    CorrectionInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO,
    CorrectionInvoiceReversal.PAY_TO_BANK_BRANCH,
    CorrectionInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE,
    CorrectionInvoiceReversal.DOWN_PAYMENT,
    CorrectionInvoiceReversal.RESERVE_INVOICE,
    CorrectionInvoiceReversal.LANGUAGE_CODE,
    CorrectionInvoiceReversal.TRACKING_NUMBER,
    CorrectionInvoiceReversal.PICK_REMARK,
    CorrectionInvoiceReversal.CLOSING_DATE,
    CorrectionInvoiceReversal.SEQUENCE_CODE,
    CorrectionInvoiceReversal.SEQUENCE_SERIAL,
    CorrectionInvoiceReversal.SERIES_STRING,
    CorrectionInvoiceReversal.SUB_SERIES_STRING,
    CorrectionInvoiceReversal.SEQUENCE_MODEL,
    CorrectionInvoiceReversal.USE_CORRECTION_VAT_GROUP,
    CorrectionInvoiceReversal.TOTAL_DISCOUNT,
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT,
    CorrectionInvoiceReversal.DOWN_PAYMENT_PERCENTAGE,
    CorrectionInvoiceReversal.DOWN_PAYMENT_TYPE,
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC,
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC,
    CorrectionInvoiceReversal.VAT_PERCENT,
    CorrectionInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT,
    CorrectionInvoiceReversal.OPENING_REMARKS,
    CorrectionInvoiceReversal.CLOSING_REMARKS,
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT,
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC,
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC,
    CorrectionInvoiceReversal.CANCELLED,
    CorrectionInvoiceReversal.SIGNATURE_INPUT_MESSAGE,
    CorrectionInvoiceReversal.SIGNATURE_DIGEST,
    CorrectionInvoiceReversal.CERTIFICATION_NUMBER,
    CorrectionInvoiceReversal.PRIVATE_KEY_VERSION,
    CorrectionInvoiceReversal.CONTROL_ACCOUNT,
    CorrectionInvoiceReversal.INSURANCE_OPERATION_347,
    CorrectionInvoiceReversal.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    CorrectionInvoiceReversal.GTS_CHECKER,
    CorrectionInvoiceReversal.GTS_PAYEE,
    CorrectionInvoiceReversal.EXTRA_MONTH,
    CorrectionInvoiceReversal.EXTRA_DAYS,
    CorrectionInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET,
    CorrectionInvoiceReversal.START_FROM,
    CorrectionInvoiceReversal.NTS_APPROVED,
    CorrectionInvoiceReversal.E_TAX_WEB_SITE,
    CorrectionInvoiceReversal.E_TAX_NUMBER,
    CorrectionInvoiceReversal.NTS_APPROVED_NUMBER,
    CorrectionInvoiceReversal.E_DOC_GENERATION_TYPE,
    CorrectionInvoiceReversal.E_DOC_SERIES,
    CorrectionInvoiceReversal.E_DOC_NUM,
    CorrectionInvoiceReversal.E_DOC_EXPORT_FORMAT,
    CorrectionInvoiceReversal.E_DOC_STATUS,
    CorrectionInvoiceReversal.E_DOC_ERROR_CODE,
    CorrectionInvoiceReversal.E_DOC_ERROR_MESSAGE,
    CorrectionInvoiceReversal.DOWN_PAYMENT_STATUS,
    CorrectionInvoiceReversal.GROUP_SERIES,
    CorrectionInvoiceReversal.GROUP_NUMBER,
    CorrectionInvoiceReversal.GROUP_HAND_WRITTEN,
    CorrectionInvoiceReversal.REOPEN_ORIGINAL_DOCUMENT,
    CorrectionInvoiceReversal.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    CorrectionInvoiceReversal.CREATE_ONLINE_QUOTATION,
    CorrectionInvoiceReversal.POS_EQUIPMENT_NUMBER,
    CorrectionInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER,
    CorrectionInvoiceReversal.POS_CASHIER_NUMBER,
    CorrectionInvoiceReversal.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    CorrectionInvoiceReversal.CLOSING_OPTION,
    CorrectionInvoiceReversal.SPECIFIED_CLOSING_DATE,
    CorrectionInvoiceReversal.OPEN_FOR_LANDED_COSTS,
    CorrectionInvoiceReversal.AUTHORIZATION_STATUS,
    CorrectionInvoiceReversal.TOTAL_DISCOUNT_FC,
    CorrectionInvoiceReversal.TOTAL_DISCOUNT_SC,
    CorrectionInvoiceReversal.RELEVANT_TO_GTS,
    CorrectionInvoiceReversal.BPL_NAME,
    CorrectionInvoiceReversal.VAT_REG_NUM,
    CorrectionInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    CorrectionInvoiceReversal.SUPPLIER,
    CorrectionInvoiceReversal.RELEASER,
    CorrectionInvoiceReversal.RECEIVER,
    CorrectionInvoiceReversal.BLANKET_AGREEMENT_NUMBER,
    CorrectionInvoiceReversal.IS_ALTERATION,
    CorrectionInvoiceReversal.CANCEL_STATUS,
    CorrectionInvoiceReversal.ASSET_VALUE_DATE,
    CorrectionInvoiceReversal.REQUESTER,
    CorrectionInvoiceReversal.REQUESTER_NAME,
    CorrectionInvoiceReversal.REQUESTER_BRANCH,
    CorrectionInvoiceReversal.REQUESTER_DEPARTMENT,
    CorrectionInvoiceReversal.REQUESTER_EMAIL,
    CorrectionInvoiceReversal.SEND_NOTIFICATION,
    CorrectionInvoiceReversal.REQ_TYPE,
    CorrectionInvoiceReversal.DOCUMENT_DELIVERY,
    CorrectionInvoiceReversal.AUTHORIZATION_CODE,
    CorrectionInvoiceReversal.START_DELIVERY_DATE,
    CorrectionInvoiceReversal.START_DELIVERY_TIME,
    CorrectionInvoiceReversal.END_DELIVERY_DATE,
    CorrectionInvoiceReversal.END_DELIVERY_TIME,
    CorrectionInvoiceReversal.VEHICLE_PLATE,
    CorrectionInvoiceReversal.AT_DOCUMENT_TYPE,
    CorrectionInvoiceReversal.ELEC_COMM_STATUS,
    CorrectionInvoiceReversal.ELEC_COMM_MESSAGE,
    CorrectionInvoiceReversal.REUSE_DOCUMENT_NUM,
    CorrectionInvoiceReversal.REUSE_NOTA_FISCAL_NUM,
    CorrectionInvoiceReversal.PRINT_SEPA_DIRECT,
    CorrectionInvoiceReversal.FISCAL_DOC_NUM,
    CorrectionInvoiceReversal.POS_DAILY_SUMMARY_NO,
    CorrectionInvoiceReversal.POS_RECEIPT_NO,
    CorrectionInvoiceReversal.POINT_OF_ISSUE_CODE,
    CorrectionInvoiceReversal.LETTER,
    CorrectionInvoiceReversal.FOLIO_NUMBER_FROM,
    CorrectionInvoiceReversal.FOLIO_NUMBER_TO,
    CorrectionInvoiceReversal.INTERIM_TYPE,
    CorrectionInvoiceReversal.RELATED_TYPE,
    CorrectionInvoiceReversal.RELATED_ENTRY,
    CorrectionInvoiceReversal.DOCUMENT_TAX_ID,
    CorrectionInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    CorrectionInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    CorrectionInvoiceReversal.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    CorrectionInvoiceReversal.POS_CASH_REGISTER,
    CorrectionInvoiceReversal.UPDATE_TIME,
    CorrectionInvoiceReversal.PRICE_MODE,
    CorrectionInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID,
    CorrectionInvoiceReversal.REVISION,
    CorrectionInvoiceReversal.ORIGINAL_REF_NO,
    CorrectionInvoiceReversal.ORIGINAL_REF_DATE,
    CorrectionInvoiceReversal.GST_TRANSACTION_TYPE,
    CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO,
    CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    CorrectionInvoiceReversal.E_COMMERCE_OPERATOR,
    CorrectionInvoiceReversal.E_COMMERCE_GSTIN,
    CorrectionInvoiceReversal.TAX_INVOICE_NO,
    CorrectionInvoiceReversal.TAX_INVOICE_DATE,
    CorrectionInvoiceReversal.SHIP_FROM,
    CorrectionInvoiceReversal.COMMISSION_TRADE,
    CorrectionInvoiceReversal.COMMISSION_TRADE_RETURN,
    CorrectionInvoiceReversal.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    CorrectionInvoiceReversal.ISSUING_REASON,
    CorrectionInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS,
    CorrectionInvoiceReversal.DOCUMENT_LINES,
    CorrectionInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES,
    CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION,
    CorrectionInvoiceReversal.DOCUMENT_PACKAGES,
    CorrectionInvoiceReversal.DOCUMENT_SPECIAL_LINES,
    CorrectionInvoiceReversal.DOCUMENT_INSTALLMENTS,
    CorrectionInvoiceReversal.DOWN_PAYMENTS_TO_DRAW,
    CorrectionInvoiceReversal.TAX_EXTENSION,
    CorrectionInvoiceReversal.ADDRESS_EXTENSION,
    CorrectionInvoiceReversal.SOI_WIZARD_ID,
    CorrectionInvoiceReversal.BUSINESS_PARTNER,
    CorrectionInvoiceReversal.CURRENCY,
    CorrectionInvoiceReversal.PAYMENT_TERMS_TYPE,
    CorrectionInvoiceReversal.SALES_PERSON,
    CorrectionInvoiceReversal.SHIPPING_TYPE,
    CorrectionInvoiceReversal.FACTORING_INDICATOR,
    CorrectionInvoiceReversal.JOURNAL_ENTRY,
    CorrectionInvoiceReversal.FORMS_1099,
    CorrectionInvoiceReversal.WIZARD_PAYMENT_METHOD,
    CorrectionInvoiceReversal.PAYMENT_BLOCK_2,
    CorrectionInvoiceReversal.PROJECT_2,
    CorrectionInvoiceReversal.EMPLOYEE_INFO,
    CorrectionInvoiceReversal.COUNTRY,
    CorrectionInvoiceReversal.BUSINESS_PLACE,
    CorrectionInvoiceReversal.USER_LANGUAGE,
    CorrectionInvoiceReversal.NF_MODEL,
    CorrectionInvoiceReversal.CHART_OF_ACCOUNT,
    CorrectionInvoiceReversal.TAX_WEB_SITE,
    CorrectionInvoiceReversal.BRANCH,
    CorrectionInvoiceReversal.DEPARTMENT,
    CorrectionInvoiceReversal.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CorrectionInvoiceReversal> = new AllFields('*', CorrectionInvoiceReversal);
  /**
   * All key fields of the CorrectionInvoiceReversal entity.
   */
  export const _keyFields: Array<Field<CorrectionInvoiceReversal>> = [CorrectionInvoiceReversal.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property CorrectionInvoiceReversal.
   */
  export const _keys: { [keys: string]: Field<CorrectionInvoiceReversal> } = CorrectionInvoiceReversal._keyFields.reduce((acc: { [keys: string]: Field<CorrectionInvoiceReversal> }, field: Field<CorrectionInvoiceReversal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
