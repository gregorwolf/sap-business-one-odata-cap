/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CorrectionPurchaseInvoiceRequestBuilder } from './CorrectionPurchaseInvoiceRequestBuilder';
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
 * This class represents the entity "CorrectionPurchaseInvoice" of service "SAPB1".
 */
export class CorrectionPurchaseInvoice extends EntityV4 implements CorrectionPurchaseInvoiceType {
  /**
   * Technical entity name for CorrectionPurchaseInvoice.
   */
  static _entityName = 'CorrectionPurchaseInvoice';
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
   * Returns an entity builder to construct instances of `CorrectionPurchaseInvoice`.
   * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoice`.
   */
  static builder(): EntityBuilderType<CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType> {
    return EntityV4.entityBuilder(CorrectionPurchaseInvoice);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CorrectionPurchaseInvoice` entity type.
   * @returns A `CorrectionPurchaseInvoice` request builder.
   */
  static requestBuilder(): CorrectionPurchaseInvoiceRequestBuilder {
    return new CorrectionPurchaseInvoiceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionPurchaseInvoice`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoice`.
   */
  static customField(fieldName: string): CustomFieldV4<CorrectionPurchaseInvoice> {
    return EntityV4.customFieldSelector(fieldName, CorrectionPurchaseInvoice);
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

export interface CorrectionPurchaseInvoiceType {
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

export namespace CorrectionPurchaseInvoice {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocNum', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('DocType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<CorrectionPurchaseInvoice> = new EnumField('HandWritten', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<CorrectionPurchaseInvoice> = new EnumField('Printed', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('DocDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('DocDueDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('CardCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<CorrectionPurchaseInvoice> = new StringField('CardName', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<CorrectionPurchaseInvoice> = new StringField('Address', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<CorrectionPurchaseInvoice> = new StringField('NumAtCard', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocTotal', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<CorrectionPurchaseInvoice> = new NumberField('AttachmentEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<CorrectionPurchaseInvoice> = new StringField('DocCurrency', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocRate', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<CorrectionPurchaseInvoice> = new StringField('Reference1', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<CorrectionPurchaseInvoice> = new StringField('Reference2', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<CorrectionPurchaseInvoice> = new StringField('Comments', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<CorrectionPurchaseInvoice> = new StringField('JournalMemo', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('PaymentGroupCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<CorrectionPurchaseInvoice> = new TimeField('DocTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('SalesPersonCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('TransportationCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<CorrectionPurchaseInvoice> = new EnumField('Confirmed', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<CorrectionPurchaseInvoice> = new NumberField('ImportFileNum', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('SummeryType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('ContactPersonCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<CorrectionPurchaseInvoice> = new EnumField('ShowSCN', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<CorrectionPurchaseInvoice> = new NumberField('Series', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('TaxDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<CorrectionPurchaseInvoice> = new EnumField('PartialSupply', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<CorrectionPurchaseInvoice> = new EnumField('DocObjectCode', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('ShipToCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<CorrectionPurchaseInvoice> = new StringField('Indicator', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<CorrectionPurchaseInvoice> = new StringField('FederalTaxID', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('DiscountPercent', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<CorrectionPurchaseInvoice> = new StringField('PaymentReference', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('CreationDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('UpdateDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<CorrectionPurchaseInvoice> = new NumberField('FinancialPeriod', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<CorrectionPurchaseInvoice> = new NumberField('TransNum', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<CorrectionPurchaseInvoice> = new NumberField('VatSum', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<CorrectionPurchaseInvoice> = new NumberField('VatSumSys', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('VatSumFc', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<CorrectionPurchaseInvoice> = new EnumField('NetProcedure', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocTotalFc', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocTotalSys', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<CorrectionPurchaseInvoice> = new NumberField('Form1099', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<CorrectionPurchaseInvoice> = new StringField('Box1099', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<CorrectionPurchaseInvoice> = new EnumField('RevisionPo', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('RequriedDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('CancelDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<CorrectionPurchaseInvoice> = new EnumField('BlockDunning', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<CorrectionPurchaseInvoice> = new EnumField('Submitted', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('Segment', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('PickStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<CorrectionPurchaseInvoice> = new EnumField('Pick', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<CorrectionPurchaseInvoice> = new StringField('PaymentMethod', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<CorrectionPurchaseInvoice> = new EnumField('PaymentBlock', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<CorrectionPurchaseInvoice> = new NumberField('PaymentBlockEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<CorrectionPurchaseInvoice> = new StringField('CentralBankIndicator', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<CorrectionPurchaseInvoice> = new EnumField('MaximumCashDiscount', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<CorrectionPurchaseInvoice> = new EnumField('Reserve', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<CorrectionPurchaseInvoice> = new StringField('Project', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<CorrectionPurchaseInvoice> = new DateField('ExemptionValidityDateFrom', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<CorrectionPurchaseInvoice> = new DateField('ExemptionValidityDateTo', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('WareHouseUpdateType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<CorrectionPurchaseInvoice> = new EnumField('Rounding', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<CorrectionPurchaseInvoice> = new StringField('ExternalCorrectedDocNum', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<CorrectionPurchaseInvoice> = new NumberField('InternalCorrectedDocNum', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('NextCorrectingDocument', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<CorrectionPurchaseInvoice> = new EnumField('DeferredTax', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<CorrectionPurchaseInvoice> = new StringField('TaxExemptionLetterNum', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTApplied', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTAppliedFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<CorrectionPurchaseInvoice> = new EnumField('BillOfExchangeReserved', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('AgentCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTAppliedSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalEqualizationTax', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalEqualizationTaxFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalEqualizationTaxSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<CorrectionPurchaseInvoice> = new NumberField('NumberOfInstallments', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<CorrectionPurchaseInvoice> = new EnumField('ApplyTaxOnFirstInstallment', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTNonSubjectAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTNonSubjectAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTNonSubjectAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTExemptedAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTExemptedAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTExemptedAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('BaseAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('BaseAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('BaseAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('WTAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('VatDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<CorrectionPurchaseInvoice> = new NumberField('DocumentsOwner', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<CorrectionPurchaseInvoice> = new StringField('FolioPrefixString', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<CorrectionPurchaseInvoice> = new NumberField('FolioNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('DocumentSubType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('BPChannelCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<CorrectionPurchaseInvoice> = new NumberField('BPChannelContact', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<CorrectionPurchaseInvoice> = new StringField('Address2', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('DocumentStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<CorrectionPurchaseInvoice> = new StringField('PeriodIndicator', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('PayToCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('ManualNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<CorrectionPurchaseInvoice> = new EnumField('UseShpdGoodsAct', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<CorrectionPurchaseInvoice> = new EnumField('IsPayToBank', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<CorrectionPurchaseInvoice> = new StringField('PayToBankCountry', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('PayToBankCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<CorrectionPurchaseInvoice> = new StringField('PayToBankAccountNo', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<CorrectionPurchaseInvoice> = new StringField('PayToBankBranch', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<CorrectionPurchaseInvoice> = new NumberField('BPL_IDAssignedToInvoice', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('DownPayment', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<CorrectionPurchaseInvoice> = new EnumField('ReserveInvoice', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('LanguageCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('TrackingNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<CorrectionPurchaseInvoice> = new StringField('PickRemark', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('ClosingDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<CorrectionPurchaseInvoice> = new NumberField('SequenceCode', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<CorrectionPurchaseInvoice> = new NumberField('SequenceSerial', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<CorrectionPurchaseInvoice> = new StringField('SeriesString', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<CorrectionPurchaseInvoice> = new StringField('SubSeriesString', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<CorrectionPurchaseInvoice> = new StringField('SequenceModel', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<CorrectionPurchaseInvoice> = new EnumField('UseCorrectionVATGroup', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalDiscount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('DownPaymentAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<CorrectionPurchaseInvoice> = new NumberField('DownPaymentPercentage', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('DownPaymentType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('DownPaymentAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('DownPaymentAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('VatPercent', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('ServiceGrossProfitPercent', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<CorrectionPurchaseInvoice> = new StringField('OpeningRemarks', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<CorrectionPurchaseInvoice> = new StringField('ClosingRemarks', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<CorrectionPurchaseInvoice> = new NumberField('RoundingDiffAmount', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('RoundingDiffAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('RoundingDiffAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<CorrectionPurchaseInvoice> = new EnumField('Cancelled', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<CorrectionPurchaseInvoice> = new StringField('SignatureInputMessage', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<CorrectionPurchaseInvoice> = new StringField('SignatureDigest', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('CertificationNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<CorrectionPurchaseInvoice> = new NumberField('PrivateKeyVersion', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<CorrectionPurchaseInvoice> = new StringField('ControlAccount', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<CorrectionPurchaseInvoice> = new EnumField('InsuranceOperation347', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<CorrectionPurchaseInvoice> = new EnumField('ArchiveNonremovableSalesQuotation', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<CorrectionPurchaseInvoice> = new NumberField('GTSChecker', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<CorrectionPurchaseInvoice> = new NumberField('GTSPayee', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<CorrectionPurchaseInvoice> = new NumberField('ExtraMonth', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<CorrectionPurchaseInvoice> = new NumberField('ExtraDays', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<CorrectionPurchaseInvoice> = new NumberField('CashDiscountDateOffset', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<CorrectionPurchaseInvoice> = new EnumField('StartFrom', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<CorrectionPurchaseInvoice> = new EnumField('NTSApproved', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<CorrectionPurchaseInvoice> = new NumberField('ETaxWebSite', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('ETaxNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('NTSApprovedNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('EDocGenerationType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<CorrectionPurchaseInvoice> = new NumberField('EDocSeries', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<CorrectionPurchaseInvoice> = new StringField('EDocNum', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<CorrectionPurchaseInvoice> = new NumberField('EDocExportFormat', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('EDocStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('EDocErrorCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<CorrectionPurchaseInvoice> = new StringField('EDocErrorMessage', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('DownPaymentStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<CorrectionPurchaseInvoice> = new NumberField('GroupSeries', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<CorrectionPurchaseInvoice> = new NumberField('GroupNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<CorrectionPurchaseInvoice> = new EnumField('GroupHandWritten', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<CorrectionPurchaseInvoice> = new EnumField('ReopenOriginalDocument', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<CorrectionPurchaseInvoice> = new EnumField('ReopenManuallyClosedOrCanceledDocument', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<CorrectionPurchaseInvoice> = new EnumField('CreateOnlineQuotation', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('POSEquipmentNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<CorrectionPurchaseInvoice> = new StringField('POSManufacturerSerialNumber', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<CorrectionPurchaseInvoice> = new NumberField('POSCashierNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<CorrectionPurchaseInvoice> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<CorrectionPurchaseInvoice> = new EnumField('ClosingOption', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('SpecifiedClosingDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<CorrectionPurchaseInvoice> = new EnumField('OpenForLandedCosts', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('AuthorizationStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalDiscountFC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<CorrectionPurchaseInvoice> = new NumberField('TotalDiscountSC', CorrectionPurchaseInvoice, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<CorrectionPurchaseInvoice> = new EnumField('RelevantToGTS', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<CorrectionPurchaseInvoice> = new StringField('BPLName', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<CorrectionPurchaseInvoice> = new StringField('VATRegNum', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<CorrectionPurchaseInvoice> = new NumberField('AnnualInvoiceDeclarationReference', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<CorrectionPurchaseInvoice> = new StringField('Supplier', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<CorrectionPurchaseInvoice> = new NumberField('Releaser', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<CorrectionPurchaseInvoice> = new NumberField('Receiver', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<CorrectionPurchaseInvoice> = new NumberField('BlanketAgreementNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<CorrectionPurchaseInvoice> = new EnumField('IsAlteration', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('CancelStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('AssetValueDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<CorrectionPurchaseInvoice> = new StringField('Requester', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<CorrectionPurchaseInvoice> = new StringField('RequesterName', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<CorrectionPurchaseInvoice> = new NumberField('RequesterBranch', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<CorrectionPurchaseInvoice> = new NumberField('RequesterDepartment', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<CorrectionPurchaseInvoice> = new StringField('RequesterEmail', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<CorrectionPurchaseInvoice> = new EnumField('SendNotification', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<CorrectionPurchaseInvoice> = new NumberField('ReqType', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<CorrectionPurchaseInvoice> = new EnumField('DocumentDelivery', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('AuthorizationCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('StartDeliveryDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<CorrectionPurchaseInvoice> = new TimeField('StartDeliveryTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('EndDeliveryDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<CorrectionPurchaseInvoice> = new TimeField('EndDeliveryTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<CorrectionPurchaseInvoice> = new StringField('VehiclePlate', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<CorrectionPurchaseInvoice> = new StringField('ATDocumentType', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<CorrectionPurchaseInvoice> = new EnumField('ElecCommStatus', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<CorrectionPurchaseInvoice> = new StringField('ElecCommMessage', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<CorrectionPurchaseInvoice> = new EnumField('ReuseDocumentNum', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<CorrectionPurchaseInvoice> = new EnumField('ReuseNotaFiscalNum', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<CorrectionPurchaseInvoice> = new EnumField('PrintSEPADirect', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<CorrectionPurchaseInvoice> = new StringField('FiscalDocNum', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<CorrectionPurchaseInvoice> = new NumberField('POSDailySummaryNo', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<CorrectionPurchaseInvoice> = new NumberField('POSReceiptNo', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<CorrectionPurchaseInvoice> = new StringField('PointOfIssueCode', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<CorrectionPurchaseInvoice> = new EnumField('Letter', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<CorrectionPurchaseInvoice> = new NumberField('FolioNumberFrom', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<CorrectionPurchaseInvoice> = new NumberField('FolioNumberTo', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('InterimType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<CorrectionPurchaseInvoice> = new NumberField('RelatedType', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<CorrectionPurchaseInvoice> = new NumberField('RelatedEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<CorrectionPurchaseInvoice> = new StringField('DocumentTaxID', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<CorrectionPurchaseInvoice> = new DateField('DateOfReportingControlStatementVAT', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<CorrectionPurchaseInvoice> = new StringField('ReportingSectionControlStatementVAT', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<CorrectionPurchaseInvoice> = new EnumField('ExcludeFromTaxReportControlStatementVAT', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<CorrectionPurchaseInvoice> = new NumberField('POS_CashRegister', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<CorrectionPurchaseInvoice> = new TimeField('UpdateTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<CorrectionPurchaseInvoice> = new EnumField('PriceMode', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<CorrectionPurchaseInvoice> = new StringField('DownPaymentTrasactionID', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<CorrectionPurchaseInvoice> = new EnumField('Revision', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<CorrectionPurchaseInvoice> = new StringField('OriginalRefNo', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('OriginalRefDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<CorrectionPurchaseInvoice> = new EnumField('GSTTransactionType', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<CorrectionPurchaseInvoice> = new StringField('OriginalCreditOrDebitNo', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('OriginalCreditOrDebitDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<CorrectionPurchaseInvoice> = new StringField('ECommerceOperator', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<CorrectionPurchaseInvoice> = new StringField('ECommerceGSTIN', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<CorrectionPurchaseInvoice> = new StringField('TaxInvoiceNo', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<CorrectionPurchaseInvoice> = new DateField('TaxInvoiceDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<CorrectionPurchaseInvoice> = new StringField('ShipFrom', CorrectionPurchaseInvoice, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<CorrectionPurchaseInvoice> = new EnumField('CommissionTrade', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<CorrectionPurchaseInvoice> = new EnumField('CommissionTradeReturn', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<CorrectionPurchaseInvoice> = new EnumField('UseBillToAddrToDetermineTax', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<CorrectionPurchaseInvoice> = new NumberField('IssuingReason', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<CorrectionPurchaseInvoice, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', CorrectionPurchaseInvoice, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<CorrectionPurchaseInvoice, DocumentLine> = new CollectionField('DocumentLines', CorrectionPurchaseInvoice, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<CorrectionPurchaseInvoice, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', CorrectionPurchaseInvoice, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<CorrectionPurchaseInvoice, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', CorrectionPurchaseInvoice, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<CorrectionPurchaseInvoice, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', CorrectionPurchaseInvoice, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<CorrectionPurchaseInvoice, DocumentPackage> = new CollectionField('DocumentPackages', CorrectionPurchaseInvoice, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<CorrectionPurchaseInvoice, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', CorrectionPurchaseInvoice, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<CorrectionPurchaseInvoice, DocumentInstallment> = new CollectionField('DocumentInstallments', CorrectionPurchaseInvoice, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<CorrectionPurchaseInvoice, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', CorrectionPurchaseInvoice, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<CorrectionPurchaseInvoice> = new TaxExtensionField('TaxExtension', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<CorrectionPurchaseInvoice> = new AddressExtensionField('AddressExtension', CorrectionPurchaseInvoice);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<CorrectionPurchaseInvoice> = new NumberField('SOIWizardId', CorrectionPurchaseInvoice, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<CorrectionPurchaseInvoice, BusinessPartners> = new OneToOneLink('BusinessPartner', CorrectionPurchaseInvoice, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<CorrectionPurchaseInvoice, Currencies> = new OneToOneLink('Currency', CorrectionPurchaseInvoice, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<CorrectionPurchaseInvoice, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', CorrectionPurchaseInvoice, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<CorrectionPurchaseInvoice, SalesPersons> = new OneToOneLink('SalesPerson', CorrectionPurchaseInvoice, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<CorrectionPurchaseInvoice, ShippingTypes> = new OneToOneLink('ShippingType', CorrectionPurchaseInvoice, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<CorrectionPurchaseInvoice, FactoringIndicators> = new OneToOneLink('FactoringIndicator', CorrectionPurchaseInvoice, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<CorrectionPurchaseInvoice, JournalEntries> = new OneToOneLink('JournalEntry', CorrectionPurchaseInvoice, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<CorrectionPurchaseInvoice, Forms1099> = new OneToOneLink('Forms1099', CorrectionPurchaseInvoice, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<CorrectionPurchaseInvoice, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', CorrectionPurchaseInvoice, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<CorrectionPurchaseInvoice, PaymentBlocks> = new OneToOneLink('PaymentBlock2', CorrectionPurchaseInvoice, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<CorrectionPurchaseInvoice, Projects> = new OneToOneLink('Project2', CorrectionPurchaseInvoice, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<CorrectionPurchaseInvoice, EmployeesInfo> = new OneToOneLink('EmployeeInfo', CorrectionPurchaseInvoice, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<CorrectionPurchaseInvoice, Countries> = new OneToOneLink('Country', CorrectionPurchaseInvoice, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<CorrectionPurchaseInvoice, BusinessPlaces> = new OneToOneLink('BusinessPlace', CorrectionPurchaseInvoice, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<CorrectionPurchaseInvoice, UserLanguages> = new OneToOneLink('UserLanguage', CorrectionPurchaseInvoice, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<CorrectionPurchaseInvoice, NfModels> = new OneToOneLink('NFModel', CorrectionPurchaseInvoice, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<CorrectionPurchaseInvoice, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', CorrectionPurchaseInvoice, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<CorrectionPurchaseInvoice, TaxWebSites> = new OneToOneLink('TaxWebSite', CorrectionPurchaseInvoice, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<CorrectionPurchaseInvoice, Branches> = new OneToOneLink('Branch', CorrectionPurchaseInvoice, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<CorrectionPurchaseInvoice, Departments> = new OneToOneLink('Department', CorrectionPurchaseInvoice, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<CorrectionPurchaseInvoice, PosDailySummary> = new OneToOneLink('POSDailySummary', CorrectionPurchaseInvoice, PosDailySummary);
  /**
   * All fields of the CorrectionPurchaseInvoice entity.
   */
  export const _allFields: Array<NumberField<CorrectionPurchaseInvoice> | EnumField<CorrectionPurchaseInvoice> | DateField<CorrectionPurchaseInvoice> | StringField<CorrectionPurchaseInvoice> | TimeField<CorrectionPurchaseInvoice> | CollectionField<CorrectionPurchaseInvoice, DocumentApprovalRequest> | CollectionField<CorrectionPurchaseInvoice, DocumentLine> | CollectionField<CorrectionPurchaseInvoice, DocumentAdditionalExpense> | CollectionField<CorrectionPurchaseInvoice, WithholdingTaxDataWtx> | CollectionField<CorrectionPurchaseInvoice, WithholdingTaxData> | CollectionField<CorrectionPurchaseInvoice, DocumentPackage> | CollectionField<CorrectionPurchaseInvoice, DocumentSpecialLine> | CollectionField<CorrectionPurchaseInvoice, DocumentInstallment> | CollectionField<CorrectionPurchaseInvoice, DownPaymentToDraw> | TaxExtensionField<CorrectionPurchaseInvoice> | AddressExtensionField<CorrectionPurchaseInvoice> | OneToOneLink<CorrectionPurchaseInvoice, BusinessPartners> | OneToOneLink<CorrectionPurchaseInvoice, Currencies> | OneToOneLink<CorrectionPurchaseInvoice, PaymentTermsTypes> | OneToOneLink<CorrectionPurchaseInvoice, SalesPersons> | OneToOneLink<CorrectionPurchaseInvoice, ShippingTypes> | OneToOneLink<CorrectionPurchaseInvoice, FactoringIndicators> | OneToOneLink<CorrectionPurchaseInvoice, JournalEntries> | OneToOneLink<CorrectionPurchaseInvoice, Forms1099> | OneToOneLink<CorrectionPurchaseInvoice, WizardPaymentMethods> | OneToOneLink<CorrectionPurchaseInvoice, PaymentBlocks> | OneToOneLink<CorrectionPurchaseInvoice, Projects> | OneToOneLink<CorrectionPurchaseInvoice, EmployeesInfo> | OneToOneLink<CorrectionPurchaseInvoice, Countries> | OneToOneLink<CorrectionPurchaseInvoice, BusinessPlaces> | OneToOneLink<CorrectionPurchaseInvoice, UserLanguages> | OneToOneLink<CorrectionPurchaseInvoice, NfModels> | OneToOneLink<CorrectionPurchaseInvoice, ChartOfAccounts> | OneToOneLink<CorrectionPurchaseInvoice, TaxWebSites> | OneToOneLink<CorrectionPurchaseInvoice, Branches> | OneToOneLink<CorrectionPurchaseInvoice, Departments> | OneToOneLink<CorrectionPurchaseInvoice, PosDailySummary>> = [
    CorrectionPurchaseInvoice.DOC_ENTRY,
    CorrectionPurchaseInvoice.DOC_NUM,
    CorrectionPurchaseInvoice.DOC_TYPE,
    CorrectionPurchaseInvoice.HAND_WRITTEN,
    CorrectionPurchaseInvoice.PRINTED,
    CorrectionPurchaseInvoice.DOC_DATE,
    CorrectionPurchaseInvoice.DOC_DUE_DATE,
    CorrectionPurchaseInvoice.CARD_CODE,
    CorrectionPurchaseInvoice.CARD_NAME,
    CorrectionPurchaseInvoice.ADDRESS,
    CorrectionPurchaseInvoice.NUM_AT_CARD,
    CorrectionPurchaseInvoice.DOC_TOTAL,
    CorrectionPurchaseInvoice.ATTACHMENT_ENTRY,
    CorrectionPurchaseInvoice.DOC_CURRENCY,
    CorrectionPurchaseInvoice.DOC_RATE,
    CorrectionPurchaseInvoice.REFERENCE_1,
    CorrectionPurchaseInvoice.REFERENCE_2,
    CorrectionPurchaseInvoice.COMMENTS,
    CorrectionPurchaseInvoice.JOURNAL_MEMO,
    CorrectionPurchaseInvoice.PAYMENT_GROUP_CODE,
    CorrectionPurchaseInvoice.DOC_TIME,
    CorrectionPurchaseInvoice.SALES_PERSON_CODE,
    CorrectionPurchaseInvoice.TRANSPORTATION_CODE,
    CorrectionPurchaseInvoice.CONFIRMED,
    CorrectionPurchaseInvoice.IMPORT_FILE_NUM,
    CorrectionPurchaseInvoice.SUMMERY_TYPE,
    CorrectionPurchaseInvoice.CONTACT_PERSON_CODE,
    CorrectionPurchaseInvoice.SHOW_SCN,
    CorrectionPurchaseInvoice.SERIES,
    CorrectionPurchaseInvoice.TAX_DATE,
    CorrectionPurchaseInvoice.PARTIAL_SUPPLY,
    CorrectionPurchaseInvoice.DOC_OBJECT_CODE,
    CorrectionPurchaseInvoice.SHIP_TO_CODE,
    CorrectionPurchaseInvoice.INDICATOR,
    CorrectionPurchaseInvoice.FEDERAL_TAX_ID,
    CorrectionPurchaseInvoice.DISCOUNT_PERCENT,
    CorrectionPurchaseInvoice.PAYMENT_REFERENCE,
    CorrectionPurchaseInvoice.CREATION_DATE,
    CorrectionPurchaseInvoice.UPDATE_DATE,
    CorrectionPurchaseInvoice.FINANCIAL_PERIOD,
    CorrectionPurchaseInvoice.TRANS_NUM,
    CorrectionPurchaseInvoice.VAT_SUM,
    CorrectionPurchaseInvoice.VAT_SUM_SYS,
    CorrectionPurchaseInvoice.VAT_SUM_FC,
    CorrectionPurchaseInvoice.NET_PROCEDURE,
    CorrectionPurchaseInvoice.DOC_TOTAL_FC,
    CorrectionPurchaseInvoice.DOC_TOTAL_SYS,
    CorrectionPurchaseInvoice.FORM_1099,
    CorrectionPurchaseInvoice.BOX_1099,
    CorrectionPurchaseInvoice.REVISION_PO,
    CorrectionPurchaseInvoice.REQURIED_DATE,
    CorrectionPurchaseInvoice.CANCEL_DATE,
    CorrectionPurchaseInvoice.BLOCK_DUNNING,
    CorrectionPurchaseInvoice.SUBMITTED,
    CorrectionPurchaseInvoice.SEGMENT,
    CorrectionPurchaseInvoice.PICK_STATUS,
    CorrectionPurchaseInvoice.PICK,
    CorrectionPurchaseInvoice.PAYMENT_METHOD,
    CorrectionPurchaseInvoice.PAYMENT_BLOCK,
    CorrectionPurchaseInvoice.PAYMENT_BLOCK_ENTRY,
    CorrectionPurchaseInvoice.CENTRAL_BANK_INDICATOR,
    CorrectionPurchaseInvoice.MAXIMUM_CASH_DISCOUNT,
    CorrectionPurchaseInvoice.RESERVE,
    CorrectionPurchaseInvoice.PROJECT,
    CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_FROM,
    CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_TO,
    CorrectionPurchaseInvoice.WARE_HOUSE_UPDATE_TYPE,
    CorrectionPurchaseInvoice.ROUNDING,
    CorrectionPurchaseInvoice.EXTERNAL_CORRECTED_DOC_NUM,
    CorrectionPurchaseInvoice.INTERNAL_CORRECTED_DOC_NUM,
    CorrectionPurchaseInvoice.NEXT_CORRECTING_DOCUMENT,
    CorrectionPurchaseInvoice.DEFERRED_TAX,
    CorrectionPurchaseInvoice.TAX_EXEMPTION_LETTER_NUM,
    CorrectionPurchaseInvoice.WT_APPLIED,
    CorrectionPurchaseInvoice.WT_APPLIED_FC,
    CorrectionPurchaseInvoice.BILL_OF_EXCHANGE_RESERVED,
    CorrectionPurchaseInvoice.AGENT_CODE,
    CorrectionPurchaseInvoice.WT_APPLIED_SC,
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX,
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_FC,
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_SC,
    CorrectionPurchaseInvoice.NUMBER_OF_INSTALLMENTS,
    CorrectionPurchaseInvoice.APPLY_TAX_ON_FIRST_INSTALLMENT,
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT,
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_SC,
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_FC,
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT,
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_SC,
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_FC,
    CorrectionPurchaseInvoice.BASE_AMOUNT,
    CorrectionPurchaseInvoice.BASE_AMOUNT_SC,
    CorrectionPurchaseInvoice.BASE_AMOUNT_FC,
    CorrectionPurchaseInvoice.WT_AMOUNT,
    CorrectionPurchaseInvoice.WT_AMOUNT_SC,
    CorrectionPurchaseInvoice.WT_AMOUNT_FC,
    CorrectionPurchaseInvoice.VAT_DATE,
    CorrectionPurchaseInvoice.DOCUMENTS_OWNER,
    CorrectionPurchaseInvoice.FOLIO_PREFIX_STRING,
    CorrectionPurchaseInvoice.FOLIO_NUMBER,
    CorrectionPurchaseInvoice.DOCUMENT_SUB_TYPE,
    CorrectionPurchaseInvoice.BP_CHANNEL_CODE,
    CorrectionPurchaseInvoice.BP_CHANNEL_CONTACT,
    CorrectionPurchaseInvoice.ADDRESS_2,
    CorrectionPurchaseInvoice.DOCUMENT_STATUS,
    CorrectionPurchaseInvoice.PERIOD_INDICATOR,
    CorrectionPurchaseInvoice.PAY_TO_CODE,
    CorrectionPurchaseInvoice.MANUAL_NUMBER,
    CorrectionPurchaseInvoice.USE_SHPD_GOODS_ACT,
    CorrectionPurchaseInvoice.IS_PAY_TO_BANK,
    CorrectionPurchaseInvoice.PAY_TO_BANK_COUNTRY,
    CorrectionPurchaseInvoice.PAY_TO_BANK_CODE,
    CorrectionPurchaseInvoice.PAY_TO_BANK_ACCOUNT_NO,
    CorrectionPurchaseInvoice.PAY_TO_BANK_BRANCH,
    CorrectionPurchaseInvoice.BPL_ID_ASSIGNED_TO_INVOICE,
    CorrectionPurchaseInvoice.DOWN_PAYMENT,
    CorrectionPurchaseInvoice.RESERVE_INVOICE,
    CorrectionPurchaseInvoice.LANGUAGE_CODE,
    CorrectionPurchaseInvoice.TRACKING_NUMBER,
    CorrectionPurchaseInvoice.PICK_REMARK,
    CorrectionPurchaseInvoice.CLOSING_DATE,
    CorrectionPurchaseInvoice.SEQUENCE_CODE,
    CorrectionPurchaseInvoice.SEQUENCE_SERIAL,
    CorrectionPurchaseInvoice.SERIES_STRING,
    CorrectionPurchaseInvoice.SUB_SERIES_STRING,
    CorrectionPurchaseInvoice.SEQUENCE_MODEL,
    CorrectionPurchaseInvoice.USE_CORRECTION_VAT_GROUP,
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_PERCENTAGE,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_TYPE,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_SC,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_FC,
    CorrectionPurchaseInvoice.VAT_PERCENT,
    CorrectionPurchaseInvoice.SERVICE_GROSS_PROFIT_PERCENT,
    CorrectionPurchaseInvoice.OPENING_REMARKS,
    CorrectionPurchaseInvoice.CLOSING_REMARKS,
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT,
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_FC,
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_SC,
    CorrectionPurchaseInvoice.CANCELLED,
    CorrectionPurchaseInvoice.SIGNATURE_INPUT_MESSAGE,
    CorrectionPurchaseInvoice.SIGNATURE_DIGEST,
    CorrectionPurchaseInvoice.CERTIFICATION_NUMBER,
    CorrectionPurchaseInvoice.PRIVATE_KEY_VERSION,
    CorrectionPurchaseInvoice.CONTROL_ACCOUNT,
    CorrectionPurchaseInvoice.INSURANCE_OPERATION_347,
    CorrectionPurchaseInvoice.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    CorrectionPurchaseInvoice.GTS_CHECKER,
    CorrectionPurchaseInvoice.GTS_PAYEE,
    CorrectionPurchaseInvoice.EXTRA_MONTH,
    CorrectionPurchaseInvoice.EXTRA_DAYS,
    CorrectionPurchaseInvoice.CASH_DISCOUNT_DATE_OFFSET,
    CorrectionPurchaseInvoice.START_FROM,
    CorrectionPurchaseInvoice.NTS_APPROVED,
    CorrectionPurchaseInvoice.E_TAX_WEB_SITE,
    CorrectionPurchaseInvoice.E_TAX_NUMBER,
    CorrectionPurchaseInvoice.NTS_APPROVED_NUMBER,
    CorrectionPurchaseInvoice.E_DOC_GENERATION_TYPE,
    CorrectionPurchaseInvoice.E_DOC_SERIES,
    CorrectionPurchaseInvoice.E_DOC_NUM,
    CorrectionPurchaseInvoice.E_DOC_EXPORT_FORMAT,
    CorrectionPurchaseInvoice.E_DOC_STATUS,
    CorrectionPurchaseInvoice.E_DOC_ERROR_CODE,
    CorrectionPurchaseInvoice.E_DOC_ERROR_MESSAGE,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_STATUS,
    CorrectionPurchaseInvoice.GROUP_SERIES,
    CorrectionPurchaseInvoice.GROUP_NUMBER,
    CorrectionPurchaseInvoice.GROUP_HAND_WRITTEN,
    CorrectionPurchaseInvoice.REOPEN_ORIGINAL_DOCUMENT,
    CorrectionPurchaseInvoice.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    CorrectionPurchaseInvoice.CREATE_ONLINE_QUOTATION,
    CorrectionPurchaseInvoice.POS_EQUIPMENT_NUMBER,
    CorrectionPurchaseInvoice.POS_MANUFACTURER_SERIAL_NUMBER,
    CorrectionPurchaseInvoice.POS_CASHIER_NUMBER,
    CorrectionPurchaseInvoice.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    CorrectionPurchaseInvoice.CLOSING_OPTION,
    CorrectionPurchaseInvoice.SPECIFIED_CLOSING_DATE,
    CorrectionPurchaseInvoice.OPEN_FOR_LANDED_COSTS,
    CorrectionPurchaseInvoice.AUTHORIZATION_STATUS,
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT_FC,
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT_SC,
    CorrectionPurchaseInvoice.RELEVANT_TO_GTS,
    CorrectionPurchaseInvoice.BPL_NAME,
    CorrectionPurchaseInvoice.VAT_REG_NUM,
    CorrectionPurchaseInvoice.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    CorrectionPurchaseInvoice.SUPPLIER,
    CorrectionPurchaseInvoice.RELEASER,
    CorrectionPurchaseInvoice.RECEIVER,
    CorrectionPurchaseInvoice.BLANKET_AGREEMENT_NUMBER,
    CorrectionPurchaseInvoice.IS_ALTERATION,
    CorrectionPurchaseInvoice.CANCEL_STATUS,
    CorrectionPurchaseInvoice.ASSET_VALUE_DATE,
    CorrectionPurchaseInvoice.REQUESTER,
    CorrectionPurchaseInvoice.REQUESTER_NAME,
    CorrectionPurchaseInvoice.REQUESTER_BRANCH,
    CorrectionPurchaseInvoice.REQUESTER_DEPARTMENT,
    CorrectionPurchaseInvoice.REQUESTER_EMAIL,
    CorrectionPurchaseInvoice.SEND_NOTIFICATION,
    CorrectionPurchaseInvoice.REQ_TYPE,
    CorrectionPurchaseInvoice.DOCUMENT_DELIVERY,
    CorrectionPurchaseInvoice.AUTHORIZATION_CODE,
    CorrectionPurchaseInvoice.START_DELIVERY_DATE,
    CorrectionPurchaseInvoice.START_DELIVERY_TIME,
    CorrectionPurchaseInvoice.END_DELIVERY_DATE,
    CorrectionPurchaseInvoice.END_DELIVERY_TIME,
    CorrectionPurchaseInvoice.VEHICLE_PLATE,
    CorrectionPurchaseInvoice.AT_DOCUMENT_TYPE,
    CorrectionPurchaseInvoice.ELEC_COMM_STATUS,
    CorrectionPurchaseInvoice.ELEC_COMM_MESSAGE,
    CorrectionPurchaseInvoice.REUSE_DOCUMENT_NUM,
    CorrectionPurchaseInvoice.REUSE_NOTA_FISCAL_NUM,
    CorrectionPurchaseInvoice.PRINT_SEPA_DIRECT,
    CorrectionPurchaseInvoice.FISCAL_DOC_NUM,
    CorrectionPurchaseInvoice.POS_DAILY_SUMMARY_NO,
    CorrectionPurchaseInvoice.POS_RECEIPT_NO,
    CorrectionPurchaseInvoice.POINT_OF_ISSUE_CODE,
    CorrectionPurchaseInvoice.LETTER,
    CorrectionPurchaseInvoice.FOLIO_NUMBER_FROM,
    CorrectionPurchaseInvoice.FOLIO_NUMBER_TO,
    CorrectionPurchaseInvoice.INTERIM_TYPE,
    CorrectionPurchaseInvoice.RELATED_TYPE,
    CorrectionPurchaseInvoice.RELATED_ENTRY,
    CorrectionPurchaseInvoice.DOCUMENT_TAX_ID,
    CorrectionPurchaseInvoice.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoice.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoice.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    CorrectionPurchaseInvoice.POS_CASH_REGISTER,
    CorrectionPurchaseInvoice.UPDATE_TIME,
    CorrectionPurchaseInvoice.PRICE_MODE,
    CorrectionPurchaseInvoice.DOWN_PAYMENT_TRASACTION_ID,
    CorrectionPurchaseInvoice.REVISION,
    CorrectionPurchaseInvoice.ORIGINAL_REF_NO,
    CorrectionPurchaseInvoice.ORIGINAL_REF_DATE,
    CorrectionPurchaseInvoice.GST_TRANSACTION_TYPE,
    CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_NO,
    CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    CorrectionPurchaseInvoice.E_COMMERCE_OPERATOR,
    CorrectionPurchaseInvoice.E_COMMERCE_GSTIN,
    CorrectionPurchaseInvoice.TAX_INVOICE_NO,
    CorrectionPurchaseInvoice.TAX_INVOICE_DATE,
    CorrectionPurchaseInvoice.SHIP_FROM,
    CorrectionPurchaseInvoice.COMMISSION_TRADE,
    CorrectionPurchaseInvoice.COMMISSION_TRADE_RETURN,
    CorrectionPurchaseInvoice.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    CorrectionPurchaseInvoice.ISSUING_REASON,
    CorrectionPurchaseInvoice.DOCUMENT_APPROVAL_REQUESTS,
    CorrectionPurchaseInvoice.DOCUMENT_LINES,
    CorrectionPurchaseInvoice.DOCUMENT_ADDITIONAL_EXPENSES,
    CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_COLLECTION,
    CorrectionPurchaseInvoice.DOCUMENT_PACKAGES,
    CorrectionPurchaseInvoice.DOCUMENT_SPECIAL_LINES,
    CorrectionPurchaseInvoice.DOCUMENT_INSTALLMENTS,
    CorrectionPurchaseInvoice.DOWN_PAYMENTS_TO_DRAW,
    CorrectionPurchaseInvoice.TAX_EXTENSION,
    CorrectionPurchaseInvoice.ADDRESS_EXTENSION,
    CorrectionPurchaseInvoice.SOI_WIZARD_ID,
    CorrectionPurchaseInvoice.BUSINESS_PARTNER,
    CorrectionPurchaseInvoice.CURRENCY,
    CorrectionPurchaseInvoice.PAYMENT_TERMS_TYPE,
    CorrectionPurchaseInvoice.SALES_PERSON,
    CorrectionPurchaseInvoice.SHIPPING_TYPE,
    CorrectionPurchaseInvoice.FACTORING_INDICATOR,
    CorrectionPurchaseInvoice.JOURNAL_ENTRY,
    CorrectionPurchaseInvoice.FORMS_1099,
    CorrectionPurchaseInvoice.WIZARD_PAYMENT_METHOD,
    CorrectionPurchaseInvoice.PAYMENT_BLOCK_2,
    CorrectionPurchaseInvoice.PROJECT_2,
    CorrectionPurchaseInvoice.EMPLOYEE_INFO,
    CorrectionPurchaseInvoice.COUNTRY,
    CorrectionPurchaseInvoice.BUSINESS_PLACE,
    CorrectionPurchaseInvoice.USER_LANGUAGE,
    CorrectionPurchaseInvoice.NF_MODEL,
    CorrectionPurchaseInvoice.CHART_OF_ACCOUNT,
    CorrectionPurchaseInvoice.TAX_WEB_SITE,
    CorrectionPurchaseInvoice.BRANCH,
    CorrectionPurchaseInvoice.DEPARTMENT,
    CorrectionPurchaseInvoice.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CorrectionPurchaseInvoice> = new AllFields('*', CorrectionPurchaseInvoice);
  /**
   * All key fields of the CorrectionPurchaseInvoice entity.
   */
  export const _keyFields: Array<Field<CorrectionPurchaseInvoice>> = [CorrectionPurchaseInvoice.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property CorrectionPurchaseInvoice.
   */
  export const _keys: { [keys: string]: Field<CorrectionPurchaseInvoice> } = CorrectionPurchaseInvoice._keyFields.reduce((acc: { [keys: string]: Field<CorrectionPurchaseInvoice> }, field: Field<CorrectionPurchaseInvoice>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
