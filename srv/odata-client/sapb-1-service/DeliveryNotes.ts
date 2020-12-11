/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeliveryNotesRequestBuilder } from './DeliveryNotesRequestBuilder';
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
 * This class represents the entity "DeliveryNotes" of service "SAPB1".
 */
export class DeliveryNotes extends EntityV4 implements DeliveryNotesType {
  /**
   * Technical entity name for DeliveryNotes.
   */
  static _entityName = 'DeliveryNotes';
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
   * Returns an entity builder to construct instances of `DeliveryNotes`.
   * @returns A builder that constructs instances of entity type `DeliveryNotes`.
   */
  static builder(): EntityBuilderType<DeliveryNotes, DeliveryNotesType> {
    return EntityV4.entityBuilder(DeliveryNotes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeliveryNotes` entity type.
   * @returns A `DeliveryNotes` request builder.
   */
  static requestBuilder(): DeliveryNotesRequestBuilder {
    return new DeliveryNotesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeliveryNotes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeliveryNotes`.
   */
  static customField(fieldName: string): CustomFieldV4<DeliveryNotes> {
    return EntityV4.customFieldSelector(fieldName, DeliveryNotes);
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

export interface DeliveryNotesType {
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

export namespace DeliveryNotes {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<DeliveryNotes> = new NumberField('DocEntry', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<DeliveryNotes> = new NumberField('DocNum', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<DeliveryNotes> = new EnumField('DocType', DeliveryNotes);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<DeliveryNotes> = new EnumField('HandWritten', DeliveryNotes);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<DeliveryNotes> = new EnumField('Printed', DeliveryNotes);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<DeliveryNotes> = new DateField('DocDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<DeliveryNotes> = new DateField('DocDueDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<DeliveryNotes> = new StringField('CardCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<DeliveryNotes> = new StringField('CardName', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<DeliveryNotes> = new StringField('Address', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<DeliveryNotes> = new StringField('NumAtCard', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<DeliveryNotes> = new NumberField('DocTotal', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<DeliveryNotes> = new NumberField('AttachmentEntry', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<DeliveryNotes> = new StringField('DocCurrency', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<DeliveryNotes> = new NumberField('DocRate', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<DeliveryNotes> = new StringField('Reference1', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<DeliveryNotes> = new StringField('Reference2', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<DeliveryNotes> = new StringField('Comments', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<DeliveryNotes> = new StringField('JournalMemo', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<DeliveryNotes> = new NumberField('PaymentGroupCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<DeliveryNotes> = new TimeField('DocTime', DeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<DeliveryNotes> = new NumberField('SalesPersonCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<DeliveryNotes> = new NumberField('TransportationCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<DeliveryNotes> = new EnumField('Confirmed', DeliveryNotes);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<DeliveryNotes> = new NumberField('ImportFileNum', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<DeliveryNotes> = new EnumField('SummeryType', DeliveryNotes);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<DeliveryNotes> = new NumberField('ContactPersonCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<DeliveryNotes> = new EnumField('ShowSCN', DeliveryNotes);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<DeliveryNotes> = new NumberField('Series', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<DeliveryNotes> = new DateField('TaxDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<DeliveryNotes> = new EnumField('PartialSupply', DeliveryNotes);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<DeliveryNotes> = new EnumField('DocObjectCode', DeliveryNotes);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<DeliveryNotes> = new StringField('ShipToCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<DeliveryNotes> = new StringField('Indicator', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<DeliveryNotes> = new StringField('FederalTaxID', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<DeliveryNotes> = new NumberField('DiscountPercent', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<DeliveryNotes> = new StringField('PaymentReference', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<DeliveryNotes> = new DateField('CreationDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<DeliveryNotes> = new DateField('UpdateDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<DeliveryNotes> = new NumberField('FinancialPeriod', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<DeliveryNotes> = new NumberField('TransNum', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<DeliveryNotes> = new NumberField('VatSum', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<DeliveryNotes> = new NumberField('VatSumSys', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<DeliveryNotes> = new NumberField('VatSumFc', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<DeliveryNotes> = new EnumField('NetProcedure', DeliveryNotes);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<DeliveryNotes> = new NumberField('DocTotalFc', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<DeliveryNotes> = new NumberField('DocTotalSys', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<DeliveryNotes> = new NumberField('Form1099', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<DeliveryNotes> = new StringField('Box1099', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<DeliveryNotes> = new EnumField('RevisionPo', DeliveryNotes);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<DeliveryNotes> = new DateField('RequriedDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<DeliveryNotes> = new DateField('CancelDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<DeliveryNotes> = new EnumField('BlockDunning', DeliveryNotes);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<DeliveryNotes> = new EnumField('Submitted', DeliveryNotes);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<DeliveryNotes> = new NumberField('Segment', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<DeliveryNotes> = new EnumField('PickStatus', DeliveryNotes);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<DeliveryNotes> = new EnumField('Pick', DeliveryNotes);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<DeliveryNotes> = new StringField('PaymentMethod', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<DeliveryNotes> = new EnumField('PaymentBlock', DeliveryNotes);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<DeliveryNotes> = new NumberField('PaymentBlockEntry', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<DeliveryNotes> = new StringField('CentralBankIndicator', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<DeliveryNotes> = new EnumField('MaximumCashDiscount', DeliveryNotes);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<DeliveryNotes> = new EnumField('Reserve', DeliveryNotes);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<DeliveryNotes> = new StringField('Project', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<DeliveryNotes> = new DateField('ExemptionValidityDateFrom', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<DeliveryNotes> = new DateField('ExemptionValidityDateTo', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<DeliveryNotes> = new EnumField('WareHouseUpdateType', DeliveryNotes);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<DeliveryNotes> = new EnumField('Rounding', DeliveryNotes);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<DeliveryNotes> = new StringField('ExternalCorrectedDocNum', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<DeliveryNotes> = new NumberField('InternalCorrectedDocNum', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<DeliveryNotes> = new NumberField('NextCorrectingDocument', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<DeliveryNotes> = new EnumField('DeferredTax', DeliveryNotes);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<DeliveryNotes> = new StringField('TaxExemptionLetterNum', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<DeliveryNotes> = new NumberField('WTApplied', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<DeliveryNotes> = new NumberField('WTAppliedFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<DeliveryNotes> = new EnumField('BillOfExchangeReserved', DeliveryNotes);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<DeliveryNotes> = new StringField('AgentCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<DeliveryNotes> = new NumberField('WTAppliedSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<DeliveryNotes> = new NumberField('TotalEqualizationTax', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<DeliveryNotes> = new NumberField('TotalEqualizationTaxFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<DeliveryNotes> = new NumberField('TotalEqualizationTaxSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<DeliveryNotes> = new NumberField('NumberOfInstallments', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<DeliveryNotes> = new EnumField('ApplyTaxOnFirstInstallment', DeliveryNotes);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<DeliveryNotes> = new NumberField('WTNonSubjectAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('WTNonSubjectAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('WTNonSubjectAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<DeliveryNotes> = new NumberField('WTExemptedAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('WTExemptedAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('WTExemptedAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<DeliveryNotes> = new NumberField('BaseAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('BaseAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('BaseAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<DeliveryNotes> = new NumberField('WTAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('WTAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('WTAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<DeliveryNotes> = new DateField('VatDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<DeliveryNotes> = new NumberField('DocumentsOwner', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<DeliveryNotes> = new StringField('FolioPrefixString', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<DeliveryNotes> = new NumberField('FolioNumber', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<DeliveryNotes> = new EnumField('DocumentSubType', DeliveryNotes);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<DeliveryNotes> = new StringField('BPChannelCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<DeliveryNotes> = new NumberField('BPChannelContact', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<DeliveryNotes> = new StringField('Address2', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<DeliveryNotes> = new EnumField('DocumentStatus', DeliveryNotes);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<DeliveryNotes> = new StringField('PeriodIndicator', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<DeliveryNotes> = new StringField('PayToCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<DeliveryNotes> = new StringField('ManualNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<DeliveryNotes> = new EnumField('UseShpdGoodsAct', DeliveryNotes);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<DeliveryNotes> = new EnumField('IsPayToBank', DeliveryNotes);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<DeliveryNotes> = new StringField('PayToBankCountry', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<DeliveryNotes> = new StringField('PayToBankCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<DeliveryNotes> = new StringField('PayToBankAccountNo', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<DeliveryNotes> = new StringField('PayToBankBranch', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<DeliveryNotes> = new NumberField('BPL_IDAssignedToInvoice', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<DeliveryNotes> = new NumberField('DownPayment', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<DeliveryNotes> = new EnumField('ReserveInvoice', DeliveryNotes);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<DeliveryNotes> = new NumberField('LanguageCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<DeliveryNotes> = new StringField('TrackingNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<DeliveryNotes> = new StringField('PickRemark', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<DeliveryNotes> = new DateField('ClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<DeliveryNotes> = new NumberField('SequenceCode', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<DeliveryNotes> = new NumberField('SequenceSerial', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<DeliveryNotes> = new StringField('SeriesString', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<DeliveryNotes> = new StringField('SubSeriesString', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<DeliveryNotes> = new StringField('SequenceModel', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<DeliveryNotes> = new EnumField('UseCorrectionVATGroup', DeliveryNotes);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<DeliveryNotes> = new NumberField('TotalDiscount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<DeliveryNotes> = new NumberField('DownPaymentAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<DeliveryNotes> = new NumberField('DownPaymentPercentage', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<DeliveryNotes> = new EnumField('DownPaymentType', DeliveryNotes);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('DownPaymentAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('DownPaymentAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<DeliveryNotes> = new NumberField('VatPercent', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<DeliveryNotes> = new NumberField('ServiceGrossProfitPercent', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<DeliveryNotes> = new StringField('OpeningRemarks', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<DeliveryNotes> = new StringField('ClosingRemarks', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<DeliveryNotes> = new NumberField('RoundingDiffAmount', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<DeliveryNotes> = new NumberField('RoundingDiffAmountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<DeliveryNotes> = new NumberField('RoundingDiffAmountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<DeliveryNotes> = new EnumField('Cancelled', DeliveryNotes);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<DeliveryNotes> = new StringField('SignatureInputMessage', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<DeliveryNotes> = new StringField('SignatureDigest', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<DeliveryNotes> = new StringField('CertificationNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<DeliveryNotes> = new NumberField('PrivateKeyVersion', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<DeliveryNotes> = new StringField('ControlAccount', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<DeliveryNotes> = new EnumField('InsuranceOperation347', DeliveryNotes);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<DeliveryNotes> = new EnumField('ArchiveNonremovableSalesQuotation', DeliveryNotes);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<DeliveryNotes> = new NumberField('GTSChecker', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<DeliveryNotes> = new NumberField('GTSPayee', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<DeliveryNotes> = new NumberField('ExtraMonth', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<DeliveryNotes> = new NumberField('ExtraDays', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<DeliveryNotes> = new NumberField('CashDiscountDateOffset', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<DeliveryNotes> = new EnumField('StartFrom', DeliveryNotes);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<DeliveryNotes> = new EnumField('NTSApproved', DeliveryNotes);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<DeliveryNotes> = new NumberField('ETaxWebSite', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<DeliveryNotes> = new StringField('ETaxNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<DeliveryNotes> = new StringField('NTSApprovedNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<DeliveryNotes> = new EnumField('EDocGenerationType', DeliveryNotes);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<DeliveryNotes> = new NumberField('EDocSeries', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<DeliveryNotes> = new StringField('EDocNum', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<DeliveryNotes> = new NumberField('EDocExportFormat', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<DeliveryNotes> = new EnumField('EDocStatus', DeliveryNotes);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<DeliveryNotes> = new StringField('EDocErrorCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<DeliveryNotes> = new StringField('EDocErrorMessage', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<DeliveryNotes> = new EnumField('DownPaymentStatus', DeliveryNotes);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<DeliveryNotes> = new NumberField('GroupSeries', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<DeliveryNotes> = new NumberField('GroupNumber', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<DeliveryNotes> = new EnumField('GroupHandWritten', DeliveryNotes);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<DeliveryNotes> = new EnumField('ReopenOriginalDocument', DeliveryNotes);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<DeliveryNotes> = new EnumField('ReopenManuallyClosedOrCanceledDocument', DeliveryNotes);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<DeliveryNotes> = new EnumField('CreateOnlineQuotation', DeliveryNotes);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<DeliveryNotes> = new StringField('POSEquipmentNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<DeliveryNotes> = new StringField('POSManufacturerSerialNumber', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<DeliveryNotes> = new NumberField('POSCashierNumber', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<DeliveryNotes> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', DeliveryNotes);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<DeliveryNotes> = new EnumField('ClosingOption', DeliveryNotes);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<DeliveryNotes> = new DateField('SpecifiedClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<DeliveryNotes> = new EnumField('OpenForLandedCosts', DeliveryNotes);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<DeliveryNotes> = new EnumField('AuthorizationStatus', DeliveryNotes);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<DeliveryNotes> = new NumberField('TotalDiscountFC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<DeliveryNotes> = new NumberField('TotalDiscountSC', DeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<DeliveryNotes> = new EnumField('RelevantToGTS', DeliveryNotes);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<DeliveryNotes> = new StringField('BPLName', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<DeliveryNotes> = new StringField('VATRegNum', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<DeliveryNotes> = new NumberField('AnnualInvoiceDeclarationReference', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<DeliveryNotes> = new StringField('Supplier', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<DeliveryNotes> = new NumberField('Releaser', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<DeliveryNotes> = new NumberField('Receiver', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<DeliveryNotes> = new NumberField('BlanketAgreementNumber', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<DeliveryNotes> = new EnumField('IsAlteration', DeliveryNotes);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<DeliveryNotes> = new EnumField('CancelStatus', DeliveryNotes);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<DeliveryNotes> = new DateField('AssetValueDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<DeliveryNotes> = new StringField('Requester', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<DeliveryNotes> = new StringField('RequesterName', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<DeliveryNotes> = new NumberField('RequesterBranch', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<DeliveryNotes> = new NumberField('RequesterDepartment', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<DeliveryNotes> = new StringField('RequesterEmail', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<DeliveryNotes> = new EnumField('SendNotification', DeliveryNotes);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<DeliveryNotes> = new NumberField('ReqType', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<DeliveryNotes> = new EnumField('DocumentDelivery', DeliveryNotes);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<DeliveryNotes> = new StringField('AuthorizationCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<DeliveryNotes> = new DateField('StartDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<DeliveryNotes> = new TimeField('StartDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<DeliveryNotes> = new DateField('EndDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<DeliveryNotes> = new TimeField('EndDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<DeliveryNotes> = new StringField('VehiclePlate', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<DeliveryNotes> = new StringField('ATDocumentType', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<DeliveryNotes> = new EnumField('ElecCommStatus', DeliveryNotes);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<DeliveryNotes> = new StringField('ElecCommMessage', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<DeliveryNotes> = new EnumField('ReuseDocumentNum', DeliveryNotes);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<DeliveryNotes> = new EnumField('ReuseNotaFiscalNum', DeliveryNotes);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<DeliveryNotes> = new EnumField('PrintSEPADirect', DeliveryNotes);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<DeliveryNotes> = new StringField('FiscalDocNum', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<DeliveryNotes> = new NumberField('POSDailySummaryNo', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<DeliveryNotes> = new NumberField('POSReceiptNo', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<DeliveryNotes> = new StringField('PointOfIssueCode', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<DeliveryNotes> = new EnumField('Letter', DeliveryNotes);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<DeliveryNotes> = new NumberField('FolioNumberFrom', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<DeliveryNotes> = new NumberField('FolioNumberTo', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<DeliveryNotes> = new EnumField('InterimType', DeliveryNotes);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<DeliveryNotes> = new NumberField('RelatedType', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<DeliveryNotes> = new NumberField('RelatedEntry', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<DeliveryNotes> = new StringField('DocumentTaxID', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<DeliveryNotes> = new DateField('DateOfReportingControlStatementVAT', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<DeliveryNotes> = new StringField('ReportingSectionControlStatementVAT', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<DeliveryNotes> = new EnumField('ExcludeFromTaxReportControlStatementVAT', DeliveryNotes);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<DeliveryNotes> = new NumberField('POS_CashRegister', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<DeliveryNotes> = new TimeField('UpdateTime', DeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<DeliveryNotes> = new EnumField('PriceMode', DeliveryNotes);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<DeliveryNotes> = new StringField('DownPaymentTrasactionID', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<DeliveryNotes> = new EnumField('Revision', DeliveryNotes);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<DeliveryNotes> = new StringField('OriginalRefNo', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<DeliveryNotes> = new DateField('OriginalRefDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<DeliveryNotes> = new EnumField('GSTTransactionType', DeliveryNotes);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<DeliveryNotes> = new StringField('OriginalCreditOrDebitNo', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<DeliveryNotes> = new DateField('OriginalCreditOrDebitDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<DeliveryNotes> = new StringField('ECommerceOperator', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<DeliveryNotes> = new StringField('ECommerceGSTIN', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<DeliveryNotes> = new StringField('TaxInvoiceNo', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<DeliveryNotes> = new DateField('TaxInvoiceDate', DeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<DeliveryNotes> = new StringField('ShipFrom', DeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<DeliveryNotes> = new EnumField('CommissionTrade', DeliveryNotes);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<DeliveryNotes> = new EnumField('CommissionTradeReturn', DeliveryNotes);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<DeliveryNotes> = new EnumField('UseBillToAddrToDetermineTax', DeliveryNotes);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<DeliveryNotes> = new NumberField('IssuingReason', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<DeliveryNotes, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', DeliveryNotes, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<DeliveryNotes, DocumentLine> = new CollectionField('DocumentLines', DeliveryNotes, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<DeliveryNotes, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', DeliveryNotes, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<DeliveryNotes, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', DeliveryNotes, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<DeliveryNotes, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', DeliveryNotes, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<DeliveryNotes, DocumentPackage> = new CollectionField('DocumentPackages', DeliveryNotes, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<DeliveryNotes, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', DeliveryNotes, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<DeliveryNotes, DocumentInstallment> = new CollectionField('DocumentInstallments', DeliveryNotes, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<DeliveryNotes, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', DeliveryNotes, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<DeliveryNotes> = new TaxExtensionField('TaxExtension', DeliveryNotes);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<DeliveryNotes> = new AddressExtensionField('AddressExtension', DeliveryNotes);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<DeliveryNotes> = new NumberField('SOIWizardId', DeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<DeliveryNotes, BusinessPartners> = new OneToOneLink('BusinessPartner', DeliveryNotes, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<DeliveryNotes, Currencies> = new OneToOneLink('Currency', DeliveryNotes, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<DeliveryNotes, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', DeliveryNotes, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<DeliveryNotes, SalesPersons> = new OneToOneLink('SalesPerson', DeliveryNotes, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<DeliveryNotes, ShippingTypes> = new OneToOneLink('ShippingType', DeliveryNotes, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<DeliveryNotes, FactoringIndicators> = new OneToOneLink('FactoringIndicator', DeliveryNotes, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<DeliveryNotes, JournalEntries> = new OneToOneLink('JournalEntry', DeliveryNotes, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<DeliveryNotes, Forms1099> = new OneToOneLink('Forms1099', DeliveryNotes, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<DeliveryNotes, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', DeliveryNotes, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<DeliveryNotes, PaymentBlocks> = new OneToOneLink('PaymentBlock2', DeliveryNotes, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<DeliveryNotes, Projects> = new OneToOneLink('Project2', DeliveryNotes, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<DeliveryNotes, EmployeesInfo> = new OneToOneLink('EmployeeInfo', DeliveryNotes, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<DeliveryNotes, Countries> = new OneToOneLink('Country', DeliveryNotes, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<DeliveryNotes, BusinessPlaces> = new OneToOneLink('BusinessPlace', DeliveryNotes, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<DeliveryNotes, UserLanguages> = new OneToOneLink('UserLanguage', DeliveryNotes, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<DeliveryNotes, NfModels> = new OneToOneLink('NFModel', DeliveryNotes, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<DeliveryNotes, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', DeliveryNotes, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<DeliveryNotes, TaxWebSites> = new OneToOneLink('TaxWebSite', DeliveryNotes, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<DeliveryNotes, Branches> = new OneToOneLink('Branch', DeliveryNotes, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<DeliveryNotes, Departments> = new OneToOneLink('Department', DeliveryNotes, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<DeliveryNotes, PosDailySummary> = new OneToOneLink('POSDailySummary', DeliveryNotes, PosDailySummary);
  /**
   * All fields of the DeliveryNotes entity.
   */
  export const _allFields: Array<NumberField<DeliveryNotes> | EnumField<DeliveryNotes> | DateField<DeliveryNotes> | StringField<DeliveryNotes> | TimeField<DeliveryNotes> | CollectionField<DeliveryNotes, DocumentApprovalRequest> | CollectionField<DeliveryNotes, DocumentLine> | CollectionField<DeliveryNotes, DocumentAdditionalExpense> | CollectionField<DeliveryNotes, WithholdingTaxDataWtx> | CollectionField<DeliveryNotes, WithholdingTaxData> | CollectionField<DeliveryNotes, DocumentPackage> | CollectionField<DeliveryNotes, DocumentSpecialLine> | CollectionField<DeliveryNotes, DocumentInstallment> | CollectionField<DeliveryNotes, DownPaymentToDraw> | TaxExtensionField<DeliveryNotes> | AddressExtensionField<DeliveryNotes> | OneToOneLink<DeliveryNotes, BusinessPartners> | OneToOneLink<DeliveryNotes, Currencies> | OneToOneLink<DeliveryNotes, PaymentTermsTypes> | OneToOneLink<DeliveryNotes, SalesPersons> | OneToOneLink<DeliveryNotes, ShippingTypes> | OneToOneLink<DeliveryNotes, FactoringIndicators> | OneToOneLink<DeliveryNotes, JournalEntries> | OneToOneLink<DeliveryNotes, Forms1099> | OneToOneLink<DeliveryNotes, WizardPaymentMethods> | OneToOneLink<DeliveryNotes, PaymentBlocks> | OneToOneLink<DeliveryNotes, Projects> | OneToOneLink<DeliveryNotes, EmployeesInfo> | OneToOneLink<DeliveryNotes, Countries> | OneToOneLink<DeliveryNotes, BusinessPlaces> | OneToOneLink<DeliveryNotes, UserLanguages> | OneToOneLink<DeliveryNotes, NfModels> | OneToOneLink<DeliveryNotes, ChartOfAccounts> | OneToOneLink<DeliveryNotes, TaxWebSites> | OneToOneLink<DeliveryNotes, Branches> | OneToOneLink<DeliveryNotes, Departments> | OneToOneLink<DeliveryNotes, PosDailySummary>> = [
    DeliveryNotes.DOC_ENTRY,
    DeliveryNotes.DOC_NUM,
    DeliveryNotes.DOC_TYPE,
    DeliveryNotes.HAND_WRITTEN,
    DeliveryNotes.PRINTED,
    DeliveryNotes.DOC_DATE,
    DeliveryNotes.DOC_DUE_DATE,
    DeliveryNotes.CARD_CODE,
    DeliveryNotes.CARD_NAME,
    DeliveryNotes.ADDRESS,
    DeliveryNotes.NUM_AT_CARD,
    DeliveryNotes.DOC_TOTAL,
    DeliveryNotes.ATTACHMENT_ENTRY,
    DeliveryNotes.DOC_CURRENCY,
    DeliveryNotes.DOC_RATE,
    DeliveryNotes.REFERENCE_1,
    DeliveryNotes.REFERENCE_2,
    DeliveryNotes.COMMENTS,
    DeliveryNotes.JOURNAL_MEMO,
    DeliveryNotes.PAYMENT_GROUP_CODE,
    DeliveryNotes.DOC_TIME,
    DeliveryNotes.SALES_PERSON_CODE,
    DeliveryNotes.TRANSPORTATION_CODE,
    DeliveryNotes.CONFIRMED,
    DeliveryNotes.IMPORT_FILE_NUM,
    DeliveryNotes.SUMMERY_TYPE,
    DeliveryNotes.CONTACT_PERSON_CODE,
    DeliveryNotes.SHOW_SCN,
    DeliveryNotes.SERIES,
    DeliveryNotes.TAX_DATE,
    DeliveryNotes.PARTIAL_SUPPLY,
    DeliveryNotes.DOC_OBJECT_CODE,
    DeliveryNotes.SHIP_TO_CODE,
    DeliveryNotes.INDICATOR,
    DeliveryNotes.FEDERAL_TAX_ID,
    DeliveryNotes.DISCOUNT_PERCENT,
    DeliveryNotes.PAYMENT_REFERENCE,
    DeliveryNotes.CREATION_DATE,
    DeliveryNotes.UPDATE_DATE,
    DeliveryNotes.FINANCIAL_PERIOD,
    DeliveryNotes.TRANS_NUM,
    DeliveryNotes.VAT_SUM,
    DeliveryNotes.VAT_SUM_SYS,
    DeliveryNotes.VAT_SUM_FC,
    DeliveryNotes.NET_PROCEDURE,
    DeliveryNotes.DOC_TOTAL_FC,
    DeliveryNotes.DOC_TOTAL_SYS,
    DeliveryNotes.FORM_1099,
    DeliveryNotes.BOX_1099,
    DeliveryNotes.REVISION_PO,
    DeliveryNotes.REQURIED_DATE,
    DeliveryNotes.CANCEL_DATE,
    DeliveryNotes.BLOCK_DUNNING,
    DeliveryNotes.SUBMITTED,
    DeliveryNotes.SEGMENT,
    DeliveryNotes.PICK_STATUS,
    DeliveryNotes.PICK,
    DeliveryNotes.PAYMENT_METHOD,
    DeliveryNotes.PAYMENT_BLOCK,
    DeliveryNotes.PAYMENT_BLOCK_ENTRY,
    DeliveryNotes.CENTRAL_BANK_INDICATOR,
    DeliveryNotes.MAXIMUM_CASH_DISCOUNT,
    DeliveryNotes.RESERVE,
    DeliveryNotes.PROJECT,
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM,
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_TO,
    DeliveryNotes.WARE_HOUSE_UPDATE_TYPE,
    DeliveryNotes.ROUNDING,
    DeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM,
    DeliveryNotes.INTERNAL_CORRECTED_DOC_NUM,
    DeliveryNotes.NEXT_CORRECTING_DOCUMENT,
    DeliveryNotes.DEFERRED_TAX,
    DeliveryNotes.TAX_EXEMPTION_LETTER_NUM,
    DeliveryNotes.WT_APPLIED,
    DeliveryNotes.WT_APPLIED_FC,
    DeliveryNotes.BILL_OF_EXCHANGE_RESERVED,
    DeliveryNotes.AGENT_CODE,
    DeliveryNotes.WT_APPLIED_SC,
    DeliveryNotes.TOTAL_EQUALIZATION_TAX,
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_FC,
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_SC,
    DeliveryNotes.NUMBER_OF_INSTALLMENTS,
    DeliveryNotes.APPLY_TAX_ON_FIRST_INSTALLMENT,
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT,
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC,
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC,
    DeliveryNotes.WT_EXEMPTED_AMOUNT,
    DeliveryNotes.WT_EXEMPTED_AMOUNT_SC,
    DeliveryNotes.WT_EXEMPTED_AMOUNT_FC,
    DeliveryNotes.BASE_AMOUNT,
    DeliveryNotes.BASE_AMOUNT_SC,
    DeliveryNotes.BASE_AMOUNT_FC,
    DeliveryNotes.WT_AMOUNT,
    DeliveryNotes.WT_AMOUNT_SC,
    DeliveryNotes.WT_AMOUNT_FC,
    DeliveryNotes.VAT_DATE,
    DeliveryNotes.DOCUMENTS_OWNER,
    DeliveryNotes.FOLIO_PREFIX_STRING,
    DeliveryNotes.FOLIO_NUMBER,
    DeliveryNotes.DOCUMENT_SUB_TYPE,
    DeliveryNotes.BP_CHANNEL_CODE,
    DeliveryNotes.BP_CHANNEL_CONTACT,
    DeliveryNotes.ADDRESS_2,
    DeliveryNotes.DOCUMENT_STATUS,
    DeliveryNotes.PERIOD_INDICATOR,
    DeliveryNotes.PAY_TO_CODE,
    DeliveryNotes.MANUAL_NUMBER,
    DeliveryNotes.USE_SHPD_GOODS_ACT,
    DeliveryNotes.IS_PAY_TO_BANK,
    DeliveryNotes.PAY_TO_BANK_COUNTRY,
    DeliveryNotes.PAY_TO_BANK_CODE,
    DeliveryNotes.PAY_TO_BANK_ACCOUNT_NO,
    DeliveryNotes.PAY_TO_BANK_BRANCH,
    DeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE,
    DeliveryNotes.DOWN_PAYMENT,
    DeliveryNotes.RESERVE_INVOICE,
    DeliveryNotes.LANGUAGE_CODE,
    DeliveryNotes.TRACKING_NUMBER,
    DeliveryNotes.PICK_REMARK,
    DeliveryNotes.CLOSING_DATE,
    DeliveryNotes.SEQUENCE_CODE,
    DeliveryNotes.SEQUENCE_SERIAL,
    DeliveryNotes.SERIES_STRING,
    DeliveryNotes.SUB_SERIES_STRING,
    DeliveryNotes.SEQUENCE_MODEL,
    DeliveryNotes.USE_CORRECTION_VAT_GROUP,
    DeliveryNotes.TOTAL_DISCOUNT,
    DeliveryNotes.DOWN_PAYMENT_AMOUNT,
    DeliveryNotes.DOWN_PAYMENT_PERCENTAGE,
    DeliveryNotes.DOWN_PAYMENT_TYPE,
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_SC,
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_FC,
    DeliveryNotes.VAT_PERCENT,
    DeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT,
    DeliveryNotes.OPENING_REMARKS,
    DeliveryNotes.CLOSING_REMARKS,
    DeliveryNotes.ROUNDING_DIFF_AMOUNT,
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_FC,
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_SC,
    DeliveryNotes.CANCELLED,
    DeliveryNotes.SIGNATURE_INPUT_MESSAGE,
    DeliveryNotes.SIGNATURE_DIGEST,
    DeliveryNotes.CERTIFICATION_NUMBER,
    DeliveryNotes.PRIVATE_KEY_VERSION,
    DeliveryNotes.CONTROL_ACCOUNT,
    DeliveryNotes.INSURANCE_OPERATION_347,
    DeliveryNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    DeliveryNotes.GTS_CHECKER,
    DeliveryNotes.GTS_PAYEE,
    DeliveryNotes.EXTRA_MONTH,
    DeliveryNotes.EXTRA_DAYS,
    DeliveryNotes.CASH_DISCOUNT_DATE_OFFSET,
    DeliveryNotes.START_FROM,
    DeliveryNotes.NTS_APPROVED,
    DeliveryNotes.E_TAX_WEB_SITE,
    DeliveryNotes.E_TAX_NUMBER,
    DeliveryNotes.NTS_APPROVED_NUMBER,
    DeliveryNotes.E_DOC_GENERATION_TYPE,
    DeliveryNotes.E_DOC_SERIES,
    DeliveryNotes.E_DOC_NUM,
    DeliveryNotes.E_DOC_EXPORT_FORMAT,
    DeliveryNotes.E_DOC_STATUS,
    DeliveryNotes.E_DOC_ERROR_CODE,
    DeliveryNotes.E_DOC_ERROR_MESSAGE,
    DeliveryNotes.DOWN_PAYMENT_STATUS,
    DeliveryNotes.GROUP_SERIES,
    DeliveryNotes.GROUP_NUMBER,
    DeliveryNotes.GROUP_HAND_WRITTEN,
    DeliveryNotes.REOPEN_ORIGINAL_DOCUMENT,
    DeliveryNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    DeliveryNotes.CREATE_ONLINE_QUOTATION,
    DeliveryNotes.POS_EQUIPMENT_NUMBER,
    DeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER,
    DeliveryNotes.POS_CASHIER_NUMBER,
    DeliveryNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    DeliveryNotes.CLOSING_OPTION,
    DeliveryNotes.SPECIFIED_CLOSING_DATE,
    DeliveryNotes.OPEN_FOR_LANDED_COSTS,
    DeliveryNotes.AUTHORIZATION_STATUS,
    DeliveryNotes.TOTAL_DISCOUNT_FC,
    DeliveryNotes.TOTAL_DISCOUNT_SC,
    DeliveryNotes.RELEVANT_TO_GTS,
    DeliveryNotes.BPL_NAME,
    DeliveryNotes.VAT_REG_NUM,
    DeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    DeliveryNotes.SUPPLIER,
    DeliveryNotes.RELEASER,
    DeliveryNotes.RECEIVER,
    DeliveryNotes.BLANKET_AGREEMENT_NUMBER,
    DeliveryNotes.IS_ALTERATION,
    DeliveryNotes.CANCEL_STATUS,
    DeliveryNotes.ASSET_VALUE_DATE,
    DeliveryNotes.REQUESTER,
    DeliveryNotes.REQUESTER_NAME,
    DeliveryNotes.REQUESTER_BRANCH,
    DeliveryNotes.REQUESTER_DEPARTMENT,
    DeliveryNotes.REQUESTER_EMAIL,
    DeliveryNotes.SEND_NOTIFICATION,
    DeliveryNotes.REQ_TYPE,
    DeliveryNotes.DOCUMENT_DELIVERY,
    DeliveryNotes.AUTHORIZATION_CODE,
    DeliveryNotes.START_DELIVERY_DATE,
    DeliveryNotes.START_DELIVERY_TIME,
    DeliveryNotes.END_DELIVERY_DATE,
    DeliveryNotes.END_DELIVERY_TIME,
    DeliveryNotes.VEHICLE_PLATE,
    DeliveryNotes.AT_DOCUMENT_TYPE,
    DeliveryNotes.ELEC_COMM_STATUS,
    DeliveryNotes.ELEC_COMM_MESSAGE,
    DeliveryNotes.REUSE_DOCUMENT_NUM,
    DeliveryNotes.REUSE_NOTA_FISCAL_NUM,
    DeliveryNotes.PRINT_SEPA_DIRECT,
    DeliveryNotes.FISCAL_DOC_NUM,
    DeliveryNotes.POS_DAILY_SUMMARY_NO,
    DeliveryNotes.POS_RECEIPT_NO,
    DeliveryNotes.POINT_OF_ISSUE_CODE,
    DeliveryNotes.LETTER,
    DeliveryNotes.FOLIO_NUMBER_FROM,
    DeliveryNotes.FOLIO_NUMBER_TO,
    DeliveryNotes.INTERIM_TYPE,
    DeliveryNotes.RELATED_TYPE,
    DeliveryNotes.RELATED_ENTRY,
    DeliveryNotes.DOCUMENT_TAX_ID,
    DeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    DeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    DeliveryNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    DeliveryNotes.POS_CASH_REGISTER,
    DeliveryNotes.UPDATE_TIME,
    DeliveryNotes.PRICE_MODE,
    DeliveryNotes.DOWN_PAYMENT_TRASACTION_ID,
    DeliveryNotes.REVISION,
    DeliveryNotes.ORIGINAL_REF_NO,
    DeliveryNotes.ORIGINAL_REF_DATE,
    DeliveryNotes.GST_TRANSACTION_TYPE,
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    DeliveryNotes.E_COMMERCE_OPERATOR,
    DeliveryNotes.E_COMMERCE_GSTIN,
    DeliveryNotes.TAX_INVOICE_NO,
    DeliveryNotes.TAX_INVOICE_DATE,
    DeliveryNotes.SHIP_FROM,
    DeliveryNotes.COMMISSION_TRADE,
    DeliveryNotes.COMMISSION_TRADE_RETURN,
    DeliveryNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    DeliveryNotes.ISSUING_REASON,
    DeliveryNotes.DOCUMENT_APPROVAL_REQUESTS,
    DeliveryNotes.DOCUMENT_LINES,
    DeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES,
    DeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    DeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION,
    DeliveryNotes.DOCUMENT_PACKAGES,
    DeliveryNotes.DOCUMENT_SPECIAL_LINES,
    DeliveryNotes.DOCUMENT_INSTALLMENTS,
    DeliveryNotes.DOWN_PAYMENTS_TO_DRAW,
    DeliveryNotes.TAX_EXTENSION,
    DeliveryNotes.ADDRESS_EXTENSION,
    DeliveryNotes.SOI_WIZARD_ID,
    DeliveryNotes.BUSINESS_PARTNER,
    DeliveryNotes.CURRENCY,
    DeliveryNotes.PAYMENT_TERMS_TYPE,
    DeliveryNotes.SALES_PERSON,
    DeliveryNotes.SHIPPING_TYPE,
    DeliveryNotes.FACTORING_INDICATOR,
    DeliveryNotes.JOURNAL_ENTRY,
    DeliveryNotes.FORMS_1099,
    DeliveryNotes.WIZARD_PAYMENT_METHOD,
    DeliveryNotes.PAYMENT_BLOCK_2,
    DeliveryNotes.PROJECT_2,
    DeliveryNotes.EMPLOYEE_INFO,
    DeliveryNotes.COUNTRY,
    DeliveryNotes.BUSINESS_PLACE,
    DeliveryNotes.USER_LANGUAGE,
    DeliveryNotes.NF_MODEL,
    DeliveryNotes.CHART_OF_ACCOUNT,
    DeliveryNotes.TAX_WEB_SITE,
    DeliveryNotes.BRANCH,
    DeliveryNotes.DEPARTMENT,
    DeliveryNotes.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeliveryNotes> = new AllFields('*', DeliveryNotes);
  /**
   * All key fields of the DeliveryNotes entity.
   */
  export const _keyFields: Array<Field<DeliveryNotes>> = [DeliveryNotes.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property DeliveryNotes.
   */
  export const _keys: { [keys: string]: Field<DeliveryNotes> } = DeliveryNotes._keyFields.reduce((acc: { [keys: string]: Field<DeliveryNotes> }, field: Field<DeliveryNotes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
