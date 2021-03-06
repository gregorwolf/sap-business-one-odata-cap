/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CorrectionPurchaseInvoiceReversalRequestBuilder } from './CorrectionPurchaseInvoiceReversalRequestBuilder';
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
 * This class represents the entity "CorrectionPurchaseInvoiceReversal" of service "SAPB1".
 */
export class CorrectionPurchaseInvoiceReversal extends EntityV4 implements CorrectionPurchaseInvoiceReversalType {
  /**
   * Technical entity name for CorrectionPurchaseInvoiceReversal.
   */
  static _entityName = 'CorrectionPurchaseInvoiceReversal';
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
   * Returns an entity builder to construct instances of `CorrectionPurchaseInvoiceReversal`.
   * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
   */
  static builder(): EntityBuilderType<CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType> {
    return EntityV4.entityBuilder(CorrectionPurchaseInvoiceReversal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CorrectionPurchaseInvoiceReversal` entity type.
   * @returns A `CorrectionPurchaseInvoiceReversal` request builder.
   */
  static requestBuilder(): CorrectionPurchaseInvoiceReversalRequestBuilder {
    return new CorrectionPurchaseInvoiceReversalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionPurchaseInvoiceReversal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
   */
  static customField(fieldName: string): CustomFieldV4<CorrectionPurchaseInvoiceReversal> {
    return EntityV4.customFieldSelector(fieldName, CorrectionPurchaseInvoiceReversal);
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

export interface CorrectionPurchaseInvoiceReversalType {
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

export namespace CorrectionPurchaseInvoiceReversal {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DocType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('HandWritten', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Printed', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('DocDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('DocDueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('CardCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('CardName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Address', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('NumAtCard', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocTotal', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('AttachmentEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('DocCurrency', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocRate', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Reference1', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Reference2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Comments', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('JournalMemo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('PaymentGroupCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<CorrectionPurchaseInvoiceReversal> = new TimeField('DocTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('SalesPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TransportationCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Confirmed', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ImportFileNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('SummeryType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ContactPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ShowSCN', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('Series', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('TaxDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('PartialSupply', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DocObjectCode', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ShipToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Indicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('FederalTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DiscountPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PaymentReference', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('CreationDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('UpdateDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('FinancialPeriod', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TransNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('VatSum', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('VatSumSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('VatSumFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('NetProcedure', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocTotalFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocTotalSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('Form1099', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Box1099', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('RevisionPo', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('RequriedDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('CancelDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('BlockDunning', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Submitted', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('Segment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('PickStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Pick', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PaymentMethod', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('PaymentBlock', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('PaymentBlockEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('CentralBankIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('MaximumCashDiscount', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Reserve', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Project', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('ExemptionValidityDateFrom', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('ExemptionValidityDateTo', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('WareHouseUpdateType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Rounding', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ExternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('InternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('NextCorrectingDocument', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DeferredTax', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('TaxExemptionLetterNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTApplied', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTAppliedFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('BillOfExchangeReserved', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('AgentCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTAppliedSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalEqualizationTax', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalEqualizationTaxFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalEqualizationTaxSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('NumberOfInstallments', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ApplyTaxOnFirstInstallment', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTNonSubjectAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTNonSubjectAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTNonSubjectAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTExemptedAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTExemptedAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTExemptedAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BaseAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BaseAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BaseAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('WTAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('VatDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DocumentsOwner', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('FolioPrefixString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('FolioNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DocumentSubType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('BPChannelCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BPChannelContact', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Address2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DocumentStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PeriodIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PayToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ManualNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('UseShpdGoodsAct', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('IsPayToBank', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PayToBankCountry', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PayToBankCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PayToBankAccountNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PayToBankBranch', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BPL_IDAssignedToInvoice', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DownPayment', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ReserveInvoice', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('LanguageCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('TrackingNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PickRemark', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('ClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('SequenceCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('SequenceSerial', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('SeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('SubSeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('SequenceModel', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('UseCorrectionVATGroup', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalDiscount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DownPaymentAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DownPaymentPercentage', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DownPaymentType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DownPaymentAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('DownPaymentAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('VatPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ServiceGrossProfitPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('OpeningRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ClosingRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RoundingDiffAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RoundingDiffAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RoundingDiffAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Cancelled', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('SignatureInputMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('SignatureDigest', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('CertificationNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('PrivateKeyVersion', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ControlAccount', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('InsuranceOperation347', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ArchiveNonremovableSalesQuotation', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('GTSChecker', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('GTSPayee', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ExtraMonth', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ExtraDays', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('CashDiscountDateOffset', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('StartFrom', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('NTSApproved', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ETaxWebSite', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ETaxNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('NTSApprovedNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('EDocGenerationType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('EDocSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('EDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('EDocExportFormat', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('EDocStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('EDocErrorCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('EDocErrorMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DownPaymentStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('GroupSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('GroupNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('GroupHandWritten', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ReopenOriginalDocument', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ReopenManuallyClosedOrCanceledDocument', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('CreateOnlineQuotation', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('POSEquipmentNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('POSManufacturerSerialNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('POSCashierNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ClosingOption', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('SpecifiedClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('OpenForLandedCosts', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('AuthorizationStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalDiscountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('TotalDiscountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('RelevantToGTS', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('BPLName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('VATRegNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('AnnualInvoiceDeclarationReference', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Supplier', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('Releaser', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('Receiver', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('BlanketAgreementNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('IsAlteration', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('CancelStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('AssetValueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('Requester', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('RequesterName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RequesterBranch', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RequesterDepartment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('RequesterEmail', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('SendNotification', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('ReqType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('DocumentDelivery', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('AuthorizationCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('StartDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<CorrectionPurchaseInvoiceReversal> = new TimeField('StartDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('EndDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<CorrectionPurchaseInvoiceReversal> = new TimeField('EndDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('VehiclePlate', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ATDocumentType', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ElecCommStatus', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ElecCommMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ReuseDocumentNum', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ReuseNotaFiscalNum', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('PrintSEPADirect', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('FiscalDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('POSDailySummaryNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('POSReceiptNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('PointOfIssueCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Letter', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('FolioNumberFrom', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('FolioNumberTo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('InterimType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RelatedType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('RelatedEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('DocumentTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('DateOfReportingControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ReportingSectionControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('ExcludeFromTaxReportControlStatementVAT', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('POS_CashRegister', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<CorrectionPurchaseInvoiceReversal> = new TimeField('UpdateTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('PriceMode', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('DownPaymentTrasactionID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('Revision', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('OriginalRefNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('OriginalRefDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('GSTTransactionType', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('OriginalCreditOrDebitNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('OriginalCreditOrDebitDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ECommerceOperator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ECommerceGSTIN', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('TaxInvoiceNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<CorrectionPurchaseInvoiceReversal> = new DateField('TaxInvoiceDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<CorrectionPurchaseInvoiceReversal> = new StringField('ShipFrom', CorrectionPurchaseInvoiceReversal, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('CommissionTrade', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('CommissionTradeReturn', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<CorrectionPurchaseInvoiceReversal> = new EnumField('UseBillToAddrToDetermineTax', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('IssuingReason', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', CorrectionPurchaseInvoiceReversal, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentLine> = new CollectionField('DocumentLines', CorrectionPurchaseInvoiceReversal, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', CorrectionPurchaseInvoiceReversal, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<CorrectionPurchaseInvoiceReversal, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', CorrectionPurchaseInvoiceReversal, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<CorrectionPurchaseInvoiceReversal, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', CorrectionPurchaseInvoiceReversal, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentPackage> = new CollectionField('DocumentPackages', CorrectionPurchaseInvoiceReversal, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', CorrectionPurchaseInvoiceReversal, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<CorrectionPurchaseInvoiceReversal, DocumentInstallment> = new CollectionField('DocumentInstallments', CorrectionPurchaseInvoiceReversal, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<CorrectionPurchaseInvoiceReversal, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', CorrectionPurchaseInvoiceReversal, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<CorrectionPurchaseInvoiceReversal> = new TaxExtensionField('TaxExtension', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<CorrectionPurchaseInvoiceReversal> = new AddressExtensionField('AddressExtension', CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<CorrectionPurchaseInvoiceReversal> = new NumberField('SOIWizardId', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<CorrectionPurchaseInvoiceReversal, BusinessPartners> = new OneToOneLink('BusinessPartner', CorrectionPurchaseInvoiceReversal, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<CorrectionPurchaseInvoiceReversal, Currencies> = new OneToOneLink('Currency', CorrectionPurchaseInvoiceReversal, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<CorrectionPurchaseInvoiceReversal, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', CorrectionPurchaseInvoiceReversal, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<CorrectionPurchaseInvoiceReversal, SalesPersons> = new OneToOneLink('SalesPerson', CorrectionPurchaseInvoiceReversal, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<CorrectionPurchaseInvoiceReversal, ShippingTypes> = new OneToOneLink('ShippingType', CorrectionPurchaseInvoiceReversal, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<CorrectionPurchaseInvoiceReversal, FactoringIndicators> = new OneToOneLink('FactoringIndicator', CorrectionPurchaseInvoiceReversal, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<CorrectionPurchaseInvoiceReversal, JournalEntries> = new OneToOneLink('JournalEntry', CorrectionPurchaseInvoiceReversal, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<CorrectionPurchaseInvoiceReversal, Forms1099> = new OneToOneLink('Forms1099', CorrectionPurchaseInvoiceReversal, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<CorrectionPurchaseInvoiceReversal, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', CorrectionPurchaseInvoiceReversal, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<CorrectionPurchaseInvoiceReversal, PaymentBlocks> = new OneToOneLink('PaymentBlock2', CorrectionPurchaseInvoiceReversal, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<CorrectionPurchaseInvoiceReversal, Projects> = new OneToOneLink('Project2', CorrectionPurchaseInvoiceReversal, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<CorrectionPurchaseInvoiceReversal, EmployeesInfo> = new OneToOneLink('EmployeeInfo', CorrectionPurchaseInvoiceReversal, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<CorrectionPurchaseInvoiceReversal, Countries> = new OneToOneLink('Country', CorrectionPurchaseInvoiceReversal, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<CorrectionPurchaseInvoiceReversal, BusinessPlaces> = new OneToOneLink('BusinessPlace', CorrectionPurchaseInvoiceReversal, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<CorrectionPurchaseInvoiceReversal, UserLanguages> = new OneToOneLink('UserLanguage', CorrectionPurchaseInvoiceReversal, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<CorrectionPurchaseInvoiceReversal, NfModels> = new OneToOneLink('NFModel', CorrectionPurchaseInvoiceReversal, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<CorrectionPurchaseInvoiceReversal, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', CorrectionPurchaseInvoiceReversal, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<CorrectionPurchaseInvoiceReversal, TaxWebSites> = new OneToOneLink('TaxWebSite', CorrectionPurchaseInvoiceReversal, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<CorrectionPurchaseInvoiceReversal, Branches> = new OneToOneLink('Branch', CorrectionPurchaseInvoiceReversal, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<CorrectionPurchaseInvoiceReversal, Departments> = new OneToOneLink('Department', CorrectionPurchaseInvoiceReversal, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<CorrectionPurchaseInvoiceReversal, PosDailySummary> = new OneToOneLink('POSDailySummary', CorrectionPurchaseInvoiceReversal, PosDailySummary);
  /**
   * All fields of the CorrectionPurchaseInvoiceReversal entity.
   */
  export const _allFields: Array<NumberField<CorrectionPurchaseInvoiceReversal> | EnumField<CorrectionPurchaseInvoiceReversal> | DateField<CorrectionPurchaseInvoiceReversal> | StringField<CorrectionPurchaseInvoiceReversal> | TimeField<CorrectionPurchaseInvoiceReversal> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentApprovalRequest> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentLine> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentAdditionalExpense> | CollectionField<CorrectionPurchaseInvoiceReversal, WithholdingTaxDataWtx> | CollectionField<CorrectionPurchaseInvoiceReversal, WithholdingTaxData> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentPackage> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentSpecialLine> | CollectionField<CorrectionPurchaseInvoiceReversal, DocumentInstallment> | CollectionField<CorrectionPurchaseInvoiceReversal, DownPaymentToDraw> | TaxExtensionField<CorrectionPurchaseInvoiceReversal> | AddressExtensionField<CorrectionPurchaseInvoiceReversal> | OneToOneLink<CorrectionPurchaseInvoiceReversal, BusinessPartners> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Currencies> | OneToOneLink<CorrectionPurchaseInvoiceReversal, PaymentTermsTypes> | OneToOneLink<CorrectionPurchaseInvoiceReversal, SalesPersons> | OneToOneLink<CorrectionPurchaseInvoiceReversal, ShippingTypes> | OneToOneLink<CorrectionPurchaseInvoiceReversal, FactoringIndicators> | OneToOneLink<CorrectionPurchaseInvoiceReversal, JournalEntries> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Forms1099> | OneToOneLink<CorrectionPurchaseInvoiceReversal, WizardPaymentMethods> | OneToOneLink<CorrectionPurchaseInvoiceReversal, PaymentBlocks> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Projects> | OneToOneLink<CorrectionPurchaseInvoiceReversal, EmployeesInfo> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Countries> | OneToOneLink<CorrectionPurchaseInvoiceReversal, BusinessPlaces> | OneToOneLink<CorrectionPurchaseInvoiceReversal, UserLanguages> | OneToOneLink<CorrectionPurchaseInvoiceReversal, NfModels> | OneToOneLink<CorrectionPurchaseInvoiceReversal, ChartOfAccounts> | OneToOneLink<CorrectionPurchaseInvoiceReversal, TaxWebSites> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Branches> | OneToOneLink<CorrectionPurchaseInvoiceReversal, Departments> | OneToOneLink<CorrectionPurchaseInvoiceReversal, PosDailySummary>> = [
    CorrectionPurchaseInvoiceReversal.DOC_ENTRY,
    CorrectionPurchaseInvoiceReversal.DOC_NUM,
    CorrectionPurchaseInvoiceReversal.DOC_TYPE,
    CorrectionPurchaseInvoiceReversal.HAND_WRITTEN,
    CorrectionPurchaseInvoiceReversal.PRINTED,
    CorrectionPurchaseInvoiceReversal.DOC_DATE,
    CorrectionPurchaseInvoiceReversal.DOC_DUE_DATE,
    CorrectionPurchaseInvoiceReversal.CARD_CODE,
    CorrectionPurchaseInvoiceReversal.CARD_NAME,
    CorrectionPurchaseInvoiceReversal.ADDRESS,
    CorrectionPurchaseInvoiceReversal.NUM_AT_CARD,
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL,
    CorrectionPurchaseInvoiceReversal.ATTACHMENT_ENTRY,
    CorrectionPurchaseInvoiceReversal.DOC_CURRENCY,
    CorrectionPurchaseInvoiceReversal.DOC_RATE,
    CorrectionPurchaseInvoiceReversal.REFERENCE_1,
    CorrectionPurchaseInvoiceReversal.REFERENCE_2,
    CorrectionPurchaseInvoiceReversal.COMMENTS,
    CorrectionPurchaseInvoiceReversal.JOURNAL_MEMO,
    CorrectionPurchaseInvoiceReversal.PAYMENT_GROUP_CODE,
    CorrectionPurchaseInvoiceReversal.DOC_TIME,
    CorrectionPurchaseInvoiceReversal.SALES_PERSON_CODE,
    CorrectionPurchaseInvoiceReversal.TRANSPORTATION_CODE,
    CorrectionPurchaseInvoiceReversal.CONFIRMED,
    CorrectionPurchaseInvoiceReversal.IMPORT_FILE_NUM,
    CorrectionPurchaseInvoiceReversal.SUMMERY_TYPE,
    CorrectionPurchaseInvoiceReversal.CONTACT_PERSON_CODE,
    CorrectionPurchaseInvoiceReversal.SHOW_SCN,
    CorrectionPurchaseInvoiceReversal.SERIES,
    CorrectionPurchaseInvoiceReversal.TAX_DATE,
    CorrectionPurchaseInvoiceReversal.PARTIAL_SUPPLY,
    CorrectionPurchaseInvoiceReversal.DOC_OBJECT_CODE,
    CorrectionPurchaseInvoiceReversal.SHIP_TO_CODE,
    CorrectionPurchaseInvoiceReversal.INDICATOR,
    CorrectionPurchaseInvoiceReversal.FEDERAL_TAX_ID,
    CorrectionPurchaseInvoiceReversal.DISCOUNT_PERCENT,
    CorrectionPurchaseInvoiceReversal.PAYMENT_REFERENCE,
    CorrectionPurchaseInvoiceReversal.CREATION_DATE,
    CorrectionPurchaseInvoiceReversal.UPDATE_DATE,
    CorrectionPurchaseInvoiceReversal.FINANCIAL_PERIOD,
    CorrectionPurchaseInvoiceReversal.TRANS_NUM,
    CorrectionPurchaseInvoiceReversal.VAT_SUM,
    CorrectionPurchaseInvoiceReversal.VAT_SUM_SYS,
    CorrectionPurchaseInvoiceReversal.VAT_SUM_FC,
    CorrectionPurchaseInvoiceReversal.NET_PROCEDURE,
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_FC,
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_SYS,
    CorrectionPurchaseInvoiceReversal.FORM_1099,
    CorrectionPurchaseInvoiceReversal.BOX_1099,
    CorrectionPurchaseInvoiceReversal.REVISION_PO,
    CorrectionPurchaseInvoiceReversal.REQURIED_DATE,
    CorrectionPurchaseInvoiceReversal.CANCEL_DATE,
    CorrectionPurchaseInvoiceReversal.BLOCK_DUNNING,
    CorrectionPurchaseInvoiceReversal.SUBMITTED,
    CorrectionPurchaseInvoiceReversal.SEGMENT,
    CorrectionPurchaseInvoiceReversal.PICK_STATUS,
    CorrectionPurchaseInvoiceReversal.PICK,
    CorrectionPurchaseInvoiceReversal.PAYMENT_METHOD,
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK,
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_ENTRY,
    CorrectionPurchaseInvoiceReversal.CENTRAL_BANK_INDICATOR,
    CorrectionPurchaseInvoiceReversal.MAXIMUM_CASH_DISCOUNT,
    CorrectionPurchaseInvoiceReversal.RESERVE,
    CorrectionPurchaseInvoiceReversal.PROJECT,
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM,
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO,
    CorrectionPurchaseInvoiceReversal.WARE_HOUSE_UPDATE_TYPE,
    CorrectionPurchaseInvoiceReversal.ROUNDING,
    CorrectionPurchaseInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM,
    CorrectionPurchaseInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM,
    CorrectionPurchaseInvoiceReversal.NEXT_CORRECTING_DOCUMENT,
    CorrectionPurchaseInvoiceReversal.DEFERRED_TAX,
    CorrectionPurchaseInvoiceReversal.TAX_EXEMPTION_LETTER_NUM,
    CorrectionPurchaseInvoiceReversal.WT_APPLIED,
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_FC,
    CorrectionPurchaseInvoiceReversal.BILL_OF_EXCHANGE_RESERVED,
    CorrectionPurchaseInvoiceReversal.AGENT_CODE,
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_SC,
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX,
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC,
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC,
    CorrectionPurchaseInvoiceReversal.NUMBER_OF_INSTALLMENTS,
    CorrectionPurchaseInvoiceReversal.APPLY_TAX_ON_FIRST_INSTALLMENT,
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT,
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT,
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT,
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT,
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.VAT_DATE,
    CorrectionPurchaseInvoiceReversal.DOCUMENTS_OWNER,
    CorrectionPurchaseInvoiceReversal.FOLIO_PREFIX_STRING,
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_SUB_TYPE,
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CODE,
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CONTACT,
    CorrectionPurchaseInvoiceReversal.ADDRESS_2,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_STATUS,
    CorrectionPurchaseInvoiceReversal.PERIOD_INDICATOR,
    CorrectionPurchaseInvoiceReversal.PAY_TO_CODE,
    CorrectionPurchaseInvoiceReversal.MANUAL_NUMBER,
    CorrectionPurchaseInvoiceReversal.USE_SHPD_GOODS_ACT,
    CorrectionPurchaseInvoiceReversal.IS_PAY_TO_BANK,
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_COUNTRY,
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_CODE,
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO,
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_BRANCH,
    CorrectionPurchaseInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT,
    CorrectionPurchaseInvoiceReversal.RESERVE_INVOICE,
    CorrectionPurchaseInvoiceReversal.LANGUAGE_CODE,
    CorrectionPurchaseInvoiceReversal.TRACKING_NUMBER,
    CorrectionPurchaseInvoiceReversal.PICK_REMARK,
    CorrectionPurchaseInvoiceReversal.CLOSING_DATE,
    CorrectionPurchaseInvoiceReversal.SEQUENCE_CODE,
    CorrectionPurchaseInvoiceReversal.SEQUENCE_SERIAL,
    CorrectionPurchaseInvoiceReversal.SERIES_STRING,
    CorrectionPurchaseInvoiceReversal.SUB_SERIES_STRING,
    CorrectionPurchaseInvoiceReversal.SEQUENCE_MODEL,
    CorrectionPurchaseInvoiceReversal.USE_CORRECTION_VAT_GROUP,
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_PERCENTAGE,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TYPE,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.VAT_PERCENT,
    CorrectionPurchaseInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT,
    CorrectionPurchaseInvoiceReversal.OPENING_REMARKS,
    CorrectionPurchaseInvoiceReversal.CLOSING_REMARKS,
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT,
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC,
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC,
    CorrectionPurchaseInvoiceReversal.CANCELLED,
    CorrectionPurchaseInvoiceReversal.SIGNATURE_INPUT_MESSAGE,
    CorrectionPurchaseInvoiceReversal.SIGNATURE_DIGEST,
    CorrectionPurchaseInvoiceReversal.CERTIFICATION_NUMBER,
    CorrectionPurchaseInvoiceReversal.PRIVATE_KEY_VERSION,
    CorrectionPurchaseInvoiceReversal.CONTROL_ACCOUNT,
    CorrectionPurchaseInvoiceReversal.INSURANCE_OPERATION_347,
    CorrectionPurchaseInvoiceReversal.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    CorrectionPurchaseInvoiceReversal.GTS_CHECKER,
    CorrectionPurchaseInvoiceReversal.GTS_PAYEE,
    CorrectionPurchaseInvoiceReversal.EXTRA_MONTH,
    CorrectionPurchaseInvoiceReversal.EXTRA_DAYS,
    CorrectionPurchaseInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET,
    CorrectionPurchaseInvoiceReversal.START_FROM,
    CorrectionPurchaseInvoiceReversal.NTS_APPROVED,
    CorrectionPurchaseInvoiceReversal.E_TAX_WEB_SITE,
    CorrectionPurchaseInvoiceReversal.E_TAX_NUMBER,
    CorrectionPurchaseInvoiceReversal.NTS_APPROVED_NUMBER,
    CorrectionPurchaseInvoiceReversal.E_DOC_GENERATION_TYPE,
    CorrectionPurchaseInvoiceReversal.E_DOC_SERIES,
    CorrectionPurchaseInvoiceReversal.E_DOC_NUM,
    CorrectionPurchaseInvoiceReversal.E_DOC_EXPORT_FORMAT,
    CorrectionPurchaseInvoiceReversal.E_DOC_STATUS,
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_CODE,
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_MESSAGE,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_STATUS,
    CorrectionPurchaseInvoiceReversal.GROUP_SERIES,
    CorrectionPurchaseInvoiceReversal.GROUP_NUMBER,
    CorrectionPurchaseInvoiceReversal.GROUP_HAND_WRITTEN,
    CorrectionPurchaseInvoiceReversal.REOPEN_ORIGINAL_DOCUMENT,
    CorrectionPurchaseInvoiceReversal.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    CorrectionPurchaseInvoiceReversal.CREATE_ONLINE_QUOTATION,
    CorrectionPurchaseInvoiceReversal.POS_EQUIPMENT_NUMBER,
    CorrectionPurchaseInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER,
    CorrectionPurchaseInvoiceReversal.POS_CASHIER_NUMBER,
    CorrectionPurchaseInvoiceReversal.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    CorrectionPurchaseInvoiceReversal.CLOSING_OPTION,
    CorrectionPurchaseInvoiceReversal.SPECIFIED_CLOSING_DATE,
    CorrectionPurchaseInvoiceReversal.OPEN_FOR_LANDED_COSTS,
    CorrectionPurchaseInvoiceReversal.AUTHORIZATION_STATUS,
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_FC,
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_SC,
    CorrectionPurchaseInvoiceReversal.RELEVANT_TO_GTS,
    CorrectionPurchaseInvoiceReversal.BPL_NAME,
    CorrectionPurchaseInvoiceReversal.VAT_REG_NUM,
    CorrectionPurchaseInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    CorrectionPurchaseInvoiceReversal.SUPPLIER,
    CorrectionPurchaseInvoiceReversal.RELEASER,
    CorrectionPurchaseInvoiceReversal.RECEIVER,
    CorrectionPurchaseInvoiceReversal.BLANKET_AGREEMENT_NUMBER,
    CorrectionPurchaseInvoiceReversal.IS_ALTERATION,
    CorrectionPurchaseInvoiceReversal.CANCEL_STATUS,
    CorrectionPurchaseInvoiceReversal.ASSET_VALUE_DATE,
    CorrectionPurchaseInvoiceReversal.REQUESTER,
    CorrectionPurchaseInvoiceReversal.REQUESTER_NAME,
    CorrectionPurchaseInvoiceReversal.REQUESTER_BRANCH,
    CorrectionPurchaseInvoiceReversal.REQUESTER_DEPARTMENT,
    CorrectionPurchaseInvoiceReversal.REQUESTER_EMAIL,
    CorrectionPurchaseInvoiceReversal.SEND_NOTIFICATION,
    CorrectionPurchaseInvoiceReversal.REQ_TYPE,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_DELIVERY,
    CorrectionPurchaseInvoiceReversal.AUTHORIZATION_CODE,
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_DATE,
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_TIME,
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_DATE,
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_TIME,
    CorrectionPurchaseInvoiceReversal.VEHICLE_PLATE,
    CorrectionPurchaseInvoiceReversal.AT_DOCUMENT_TYPE,
    CorrectionPurchaseInvoiceReversal.ELEC_COMM_STATUS,
    CorrectionPurchaseInvoiceReversal.ELEC_COMM_MESSAGE,
    CorrectionPurchaseInvoiceReversal.REUSE_DOCUMENT_NUM,
    CorrectionPurchaseInvoiceReversal.REUSE_NOTA_FISCAL_NUM,
    CorrectionPurchaseInvoiceReversal.PRINT_SEPA_DIRECT,
    CorrectionPurchaseInvoiceReversal.FISCAL_DOC_NUM,
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY_NO,
    CorrectionPurchaseInvoiceReversal.POS_RECEIPT_NO,
    CorrectionPurchaseInvoiceReversal.POINT_OF_ISSUE_CODE,
    CorrectionPurchaseInvoiceReversal.LETTER,
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_FROM,
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_TO,
    CorrectionPurchaseInvoiceReversal.INTERIM_TYPE,
    CorrectionPurchaseInvoiceReversal.RELATED_TYPE,
    CorrectionPurchaseInvoiceReversal.RELATED_ENTRY,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_TAX_ID,
    CorrectionPurchaseInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoiceReversal.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoiceReversal.POS_CASH_REGISTER,
    CorrectionPurchaseInvoiceReversal.UPDATE_TIME,
    CorrectionPurchaseInvoiceReversal.PRICE_MODE,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID,
    CorrectionPurchaseInvoiceReversal.REVISION,
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_NO,
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_DATE,
    CorrectionPurchaseInvoiceReversal.GST_TRANSACTION_TYPE,
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO,
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_OPERATOR,
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_GSTIN,
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_NO,
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_DATE,
    CorrectionPurchaseInvoiceReversal.SHIP_FROM,
    CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE,
    CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE_RETURN,
    CorrectionPurchaseInvoiceReversal.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    CorrectionPurchaseInvoiceReversal.ISSUING_REASON,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_LINES,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES,
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_PACKAGES,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_SPECIAL_LINES,
    CorrectionPurchaseInvoiceReversal.DOCUMENT_INSTALLMENTS,
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENTS_TO_DRAW,
    CorrectionPurchaseInvoiceReversal.TAX_EXTENSION,
    CorrectionPurchaseInvoiceReversal.ADDRESS_EXTENSION,
    CorrectionPurchaseInvoiceReversal.SOI_WIZARD_ID,
    CorrectionPurchaseInvoiceReversal.BUSINESS_PARTNER,
    CorrectionPurchaseInvoiceReversal.CURRENCY,
    CorrectionPurchaseInvoiceReversal.PAYMENT_TERMS_TYPE,
    CorrectionPurchaseInvoiceReversal.SALES_PERSON,
    CorrectionPurchaseInvoiceReversal.SHIPPING_TYPE,
    CorrectionPurchaseInvoiceReversal.FACTORING_INDICATOR,
    CorrectionPurchaseInvoiceReversal.JOURNAL_ENTRY,
    CorrectionPurchaseInvoiceReversal.FORMS_1099,
    CorrectionPurchaseInvoiceReversal.WIZARD_PAYMENT_METHOD,
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_2,
    CorrectionPurchaseInvoiceReversal.PROJECT_2,
    CorrectionPurchaseInvoiceReversal.EMPLOYEE_INFO,
    CorrectionPurchaseInvoiceReversal.COUNTRY,
    CorrectionPurchaseInvoiceReversal.BUSINESS_PLACE,
    CorrectionPurchaseInvoiceReversal.USER_LANGUAGE,
    CorrectionPurchaseInvoiceReversal.NF_MODEL,
    CorrectionPurchaseInvoiceReversal.CHART_OF_ACCOUNT,
    CorrectionPurchaseInvoiceReversal.TAX_WEB_SITE,
    CorrectionPurchaseInvoiceReversal.BRANCH,
    CorrectionPurchaseInvoiceReversal.DEPARTMENT,
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CorrectionPurchaseInvoiceReversal> = new AllFields('*', CorrectionPurchaseInvoiceReversal);
  /**
   * All key fields of the CorrectionPurchaseInvoiceReversal entity.
   */
  export const _keyFields: Array<Field<CorrectionPurchaseInvoiceReversal>> = [CorrectionPurchaseInvoiceReversal.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property CorrectionPurchaseInvoiceReversal.
   */
  export const _keys: { [keys: string]: Field<CorrectionPurchaseInvoiceReversal> } = CorrectionPurchaseInvoiceReversal._keyFields.reduce((acc: { [keys: string]: Field<CorrectionPurchaseInvoiceReversal> }, field: Field<CorrectionPurchaseInvoiceReversal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
