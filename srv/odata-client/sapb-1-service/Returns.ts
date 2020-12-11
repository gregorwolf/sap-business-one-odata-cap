/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReturnsRequestBuilder } from './ReturnsRequestBuilder';
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
 * This class represents the entity "Returns" of service "SAPB1".
 */
export class Returns extends EntityV4 implements ReturnsType {
  /**
   * Technical entity name for Returns.
   */
  static _entityName = 'Returns';
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
   * Returns an entity builder to construct instances of `Returns`.
   * @returns A builder that constructs instances of entity type `Returns`.
   */
  static builder(): EntityBuilderType<Returns, ReturnsType> {
    return EntityV4.entityBuilder(Returns);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Returns` entity type.
   * @returns A `Returns` request builder.
   */
  static requestBuilder(): ReturnsRequestBuilder {
    return new ReturnsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Returns`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Returns`.
   */
  static customField(fieldName: string): CustomFieldV4<Returns> {
    return EntityV4.customFieldSelector(fieldName, Returns);
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

export interface ReturnsType {
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

export namespace Returns {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<Returns> = new NumberField('DocEntry', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<Returns> = new NumberField('DocNum', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<Returns> = new EnumField('DocType', Returns);
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<Returns> = new EnumField('HandWritten', Returns);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<Returns> = new EnumField('Printed', Returns);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<Returns> = new DateField('DocDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<Returns> = new DateField('DocDueDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<Returns> = new StringField('CardCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<Returns> = new StringField('CardName', Returns, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<Returns> = new StringField('Address', Returns, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<Returns> = new StringField('NumAtCard', Returns, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<Returns> = new NumberField('DocTotal', Returns, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Returns> = new NumberField('AttachmentEntry', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<Returns> = new StringField('DocCurrency', Returns, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<Returns> = new NumberField('DocRate', Returns, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<Returns> = new StringField('Reference1', Returns, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<Returns> = new StringField('Reference2', Returns, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<Returns> = new StringField('Comments', Returns, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<Returns> = new StringField('JournalMemo', Returns, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<Returns> = new NumberField('PaymentGroupCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<Returns> = new TimeField('DocTime', Returns, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<Returns> = new NumberField('SalesPersonCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<Returns> = new NumberField('TransportationCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[confirmed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIRMED: EnumField<Returns> = new EnumField('Confirmed', Returns);
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<Returns> = new NumberField('ImportFileNum', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[summeryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERY_TYPE: EnumField<Returns> = new EnumField('SummeryType', Returns);
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<Returns> = new NumberField('ContactPersonCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[showScn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_SCN: EnumField<Returns> = new EnumField('ShowSCN', Returns);
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<Returns> = new NumberField('Series', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<Returns> = new DateField('TaxDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[partialSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_SUPPLY: EnumField<Returns> = new EnumField('PartialSupply', Returns);
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: EnumField<Returns> = new EnumField('DocObjectCode', Returns);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<Returns> = new StringField('ShipToCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<Returns> = new StringField('Indicator', Returns, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<Returns> = new StringField('FederalTaxID', Returns, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<Returns> = new NumberField('DiscountPercent', Returns, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<Returns> = new StringField('PaymentReference', Returns, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<Returns> = new DateField('CreationDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<Returns> = new DateField('UpdateDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<Returns> = new NumberField('FinancialPeriod', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<Returns> = new NumberField('TransNum', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<Returns> = new NumberField('VatSum', Returns, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<Returns> = new NumberField('VatSumSys', Returns, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<Returns> = new NumberField('VatSumFc', Returns, 'Edm.Double');
  /**
   * Static representation of the [[netProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PROCEDURE: EnumField<Returns> = new EnumField('NetProcedure', Returns);
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<Returns> = new NumberField('DocTotalFc', Returns, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<Returns> = new NumberField('DocTotalSys', Returns, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<Returns> = new NumberField('Form1099', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<Returns> = new StringField('Box1099', Returns, 'Edm.String');
  /**
   * Static representation of the [[revisionPo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_PO: EnumField<Returns> = new EnumField('RevisionPo', Returns);
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<Returns> = new DateField('RequriedDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<Returns> = new DateField('CancelDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<Returns> = new EnumField('BlockDunning', Returns);
  /**
   * Static representation of the [[submitted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBMITTED: EnumField<Returns> = new EnumField('Submitted', Returns);
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<Returns> = new NumberField('Segment', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_STATUS: EnumField<Returns> = new EnumField('PickStatus', Returns);
  /**
   * Static representation of the [[pick]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK: EnumField<Returns> = new EnumField('Pick', Returns);
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<Returns> = new StringField('PaymentMethod', Returns, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<Returns> = new EnumField('PaymentBlock', Returns);
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<Returns> = new NumberField('PaymentBlockEntry', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<Returns> = new StringField('CentralBankIndicator', Returns, 'Edm.String');
  /**
   * Static representation of the [[maximumCashDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CASH_DISCOUNT: EnumField<Returns> = new EnumField('MaximumCashDiscount', Returns);
  /**
   * Static representation of the [[reserve]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE: EnumField<Returns> = new EnumField('Reserve', Returns);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<Returns> = new StringField('Project', Returns, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<Returns> = new DateField('ExemptionValidityDateFrom', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<Returns> = new DateField('ExemptionValidityDateTo', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[wareHouseUpdateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARE_HOUSE_UPDATE_TYPE: EnumField<Returns> = new EnumField('WareHouseUpdateType', Returns);
  /**
   * Static representation of the [[rounding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING: EnumField<Returns> = new EnumField('Rounding', Returns);
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<Returns> = new StringField('ExternalCorrectedDocNum', Returns, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<Returns> = new NumberField('InternalCorrectedDocNum', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<Returns> = new NumberField('NextCorrectingDocument', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<Returns> = new EnumField('DeferredTax', Returns);
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<Returns> = new StringField('TaxExemptionLetterNum', Returns, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<Returns> = new NumberField('WTApplied', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<Returns> = new NumberField('WTAppliedFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[billOfExchangeReserved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_RESERVED: EnumField<Returns> = new EnumField('BillOfExchangeReserved', Returns);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<Returns> = new StringField('AgentCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<Returns> = new NumberField('WTAppliedSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<Returns> = new NumberField('TotalEqualizationTax', Returns, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<Returns> = new NumberField('TotalEqualizationTaxFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<Returns> = new NumberField('TotalEqualizationTaxSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<Returns> = new NumberField('NumberOfInstallments', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<Returns> = new EnumField('ApplyTaxOnFirstInstallment', Returns);
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<Returns> = new NumberField('WTNonSubjectAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<Returns> = new NumberField('WTNonSubjectAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<Returns> = new NumberField('WTNonSubjectAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<Returns> = new NumberField('WTExemptedAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<Returns> = new NumberField('WTExemptedAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<Returns> = new NumberField('WTExemptedAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<Returns> = new NumberField('BaseAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<Returns> = new NumberField('BaseAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<Returns> = new NumberField('BaseAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<Returns> = new NumberField('WTAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<Returns> = new NumberField('WTAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<Returns> = new NumberField('WTAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<Returns> = new DateField('VatDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<Returns> = new NumberField('DocumentsOwner', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<Returns> = new StringField('FolioPrefixString', Returns, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<Returns> = new NumberField('FolioNumber', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SUB_TYPE: EnumField<Returns> = new EnumField('DocumentSubType', Returns);
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<Returns> = new StringField('BPChannelCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<Returns> = new NumberField('BPChannelContact', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<Returns> = new StringField('Address2', Returns, 'Edm.String');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<Returns> = new EnumField('DocumentStatus', Returns);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<Returns> = new StringField('PeriodIndicator', Returns, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<Returns> = new StringField('PayToCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<Returns> = new StringField('ManualNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[useShpdGoodsAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_SHPD_GOODS_ACT: EnumField<Returns> = new EnumField('UseShpdGoodsAct', Returns);
  /**
   * Static representation of the [[isPayToBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAY_TO_BANK: EnumField<Returns> = new EnumField('IsPayToBank', Returns);
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<Returns> = new StringField('PayToBankCountry', Returns, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<Returns> = new StringField('PayToBankCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<Returns> = new StringField('PayToBankAccountNo', Returns, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<Returns> = new StringField('PayToBankBranch', Returns, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<Returns> = new NumberField('BPL_IDAssignedToInvoice', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<Returns> = new NumberField('DownPayment', Returns, 'Edm.Double');
  /**
   * Static representation of the [[reserveInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVE_INVOICE: EnumField<Returns> = new EnumField('ReserveInvoice', Returns);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<Returns> = new NumberField('LanguageCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<Returns> = new StringField('TrackingNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<Returns> = new StringField('PickRemark', Returns, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<Returns> = new DateField('ClosingDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<Returns> = new NumberField('SequenceCode', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<Returns> = new NumberField('SequenceSerial', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<Returns> = new StringField('SeriesString', Returns, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<Returns> = new StringField('SubSeriesString', Returns, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<Returns> = new StringField('SequenceModel', Returns, 'Edm.String');
  /**
   * Static representation of the [[useCorrectionVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_CORRECTION_VAT_GROUP: EnumField<Returns> = new EnumField('UseCorrectionVATGroup', Returns);
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<Returns> = new NumberField('TotalDiscount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<Returns> = new NumberField('DownPaymentAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<Returns> = new NumberField('DownPaymentPercentage', Returns, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TYPE: EnumField<Returns> = new EnumField('DownPaymentType', Returns);
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<Returns> = new NumberField('DownPaymentAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<Returns> = new NumberField('DownPaymentAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<Returns> = new NumberField('VatPercent', Returns, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<Returns> = new NumberField('ServiceGrossProfitPercent', Returns, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<Returns> = new StringField('OpeningRemarks', Returns, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<Returns> = new StringField('ClosingRemarks', Returns, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<Returns> = new NumberField('RoundingDiffAmount', Returns, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<Returns> = new NumberField('RoundingDiffAmountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<Returns> = new NumberField('RoundingDiffAmountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[cancelled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLED: EnumField<Returns> = new EnumField('Cancelled', Returns);
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<Returns> = new StringField('SignatureInputMessage', Returns, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<Returns> = new StringField('SignatureDigest', Returns, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<Returns> = new StringField('CertificationNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<Returns> = new NumberField('PrivateKeyVersion', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<Returns> = new StringField('ControlAccount', Returns, 'Edm.String');
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<Returns> = new EnumField('InsuranceOperation347', Returns);
  /**
   * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<Returns> = new EnumField('ArchiveNonremovableSalesQuotation', Returns);
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<Returns> = new NumberField('GTSChecker', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<Returns> = new NumberField('GTSPayee', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<Returns> = new NumberField('ExtraMonth', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<Returns> = new NumberField('ExtraDays', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<Returns> = new NumberField('CashDiscountDateOffset', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[startFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_FROM: EnumField<Returns> = new EnumField('StartFrom', Returns);
  /**
   * Static representation of the [[ntsApproved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED: EnumField<Returns> = new EnumField('NTSApproved', Returns);
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<Returns> = new NumberField('ETaxWebSite', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<Returns> = new StringField('ETaxNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<Returns> = new StringField('NTSApprovedNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<Returns> = new EnumField('EDocGenerationType', Returns);
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<Returns> = new NumberField('EDocSeries', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<Returns> = new StringField('EDocNum', Returns, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<Returns> = new NumberField('EDocExportFormat', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[eDocStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STATUS: EnumField<Returns> = new EnumField('EDocStatus', Returns);
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<Returns> = new StringField('EDocErrorCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<Returns> = new StringField('EDocErrorMessage', Returns, 'Edm.String');
  /**
   * Static representation of the [[downPaymentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_STATUS: EnumField<Returns> = new EnumField('DownPaymentStatus', Returns);
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<Returns> = new NumberField('GroupSeries', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<Returns> = new NumberField('GroupNumber', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[groupHandWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_HAND_WRITTEN: EnumField<Returns> = new EnumField('GroupHandWritten', Returns);
  /**
   * Static representation of the [[reopenOriginalDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_ORIGINAL_DOCUMENT: EnumField<Returns> = new EnumField('ReopenOriginalDocument', Returns);
  /**
   * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<Returns> = new EnumField('ReopenManuallyClosedOrCanceledDocument', Returns);
  /**
   * Static representation of the [[createOnlineQuotation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ONLINE_QUOTATION: EnumField<Returns> = new EnumField('CreateOnlineQuotation', Returns);
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<Returns> = new StringField('POSEquipmentNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<Returns> = new StringField('POSManufacturerSerialNumber', Returns, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<Returns> = new NumberField('POSCashierNumber', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<Returns> = new EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Returns);
  /**
   * Static representation of the [[closingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_OPTION: EnumField<Returns> = new EnumField('ClosingOption', Returns);
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<Returns> = new DateField('SpecifiedClosingDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[openForLandedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_FOR_LANDED_COSTS: EnumField<Returns> = new EnumField('OpenForLandedCosts', Returns);
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<Returns> = new EnumField('AuthorizationStatus', Returns);
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<Returns> = new NumberField('TotalDiscountFC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<Returns> = new NumberField('TotalDiscountSC', Returns, 'Edm.Double');
  /**
   * Static representation of the [[relevantToGts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEVANT_TO_GTS: EnumField<Returns> = new EnumField('RelevantToGTS', Returns);
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<Returns> = new StringField('BPLName', Returns, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<Returns> = new StringField('VATRegNum', Returns, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<Returns> = new NumberField('AnnualInvoiceDeclarationReference', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<Returns> = new StringField('Supplier', Returns, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<Returns> = new NumberField('Releaser', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<Returns> = new NumberField('Receiver', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<Returns> = new NumberField('BlanketAgreementNumber', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[isAlteration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALTERATION: EnumField<Returns> = new EnumField('IsAlteration', Returns);
  /**
   * Static representation of the [[cancelStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_STATUS: EnumField<Returns> = new EnumField('CancelStatus', Returns);
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<Returns> = new DateField('AssetValueDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<Returns> = new StringField('Requester', Returns, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<Returns> = new StringField('RequesterName', Returns, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<Returns> = new NumberField('RequesterBranch', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<Returns> = new NumberField('RequesterDepartment', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<Returns> = new StringField('RequesterEmail', Returns, 'Edm.String');
  /**
   * Static representation of the [[sendNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_NOTIFICATION: EnumField<Returns> = new EnumField('SendNotification', Returns);
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<Returns> = new NumberField('ReqType', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[documentDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DELIVERY: EnumField<Returns> = new EnumField('DocumentDelivery', Returns);
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<Returns> = new StringField('AuthorizationCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<Returns> = new DateField('StartDeliveryDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<Returns> = new TimeField('StartDeliveryTime', Returns, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<Returns> = new DateField('EndDeliveryDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<Returns> = new TimeField('EndDeliveryTime', Returns, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<Returns> = new StringField('VehiclePlate', Returns, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<Returns> = new StringField('ATDocumentType', Returns, 'Edm.String');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<Returns> = new EnumField('ElecCommStatus', Returns);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<Returns> = new StringField('ElecCommMessage', Returns, 'Edm.String');
  /**
   * Static representation of the [[reuseDocumentNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_DOCUMENT_NUM: EnumField<Returns> = new EnumField('ReuseDocumentNum', Returns);
  /**
   * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REUSE_NOTA_FISCAL_NUM: EnumField<Returns> = new EnumField('ReuseNotaFiscalNum', Returns);
  /**
   * Static representation of the [[printSepaDirect]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_SEPA_DIRECT: EnumField<Returns> = new EnumField('PrintSEPADirect', Returns);
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<Returns> = new StringField('FiscalDocNum', Returns, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<Returns> = new NumberField('POSDailySummaryNo', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<Returns> = new NumberField('POSReceiptNo', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<Returns> = new StringField('PointOfIssueCode', Returns, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<Returns> = new EnumField('Letter', Returns);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<Returns> = new NumberField('FolioNumberFrom', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<Returns> = new NumberField('FolioNumberTo', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[interimType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_TYPE: EnumField<Returns> = new EnumField('InterimType', Returns);
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<Returns> = new NumberField('RelatedType', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<Returns> = new NumberField('RelatedEntry', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<Returns> = new StringField('DocumentTaxID', Returns, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<Returns> = new DateField('DateOfReportingControlStatementVAT', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<Returns> = new StringField('ReportingSectionControlStatementVAT', Returns, 'Edm.String');
  /**
   * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<Returns> = new EnumField('ExcludeFromTaxReportControlStatementVAT', Returns);
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<Returns> = new NumberField('POS_CashRegister', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<Returns> = new TimeField('UpdateTime', Returns, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<Returns> = new EnumField('PriceMode', Returns);
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<Returns> = new StringField('DownPaymentTrasactionID', Returns, 'Edm.String');
  /**
   * Static representation of the [[revision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION: EnumField<Returns> = new EnumField('Revision', Returns);
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<Returns> = new StringField('OriginalRefNo', Returns, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<Returns> = new DateField('OriginalRefDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[gstTransactionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TRANSACTION_TYPE: EnumField<Returns> = new EnumField('GSTTransactionType', Returns);
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<Returns> = new StringField('OriginalCreditOrDebitNo', Returns, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<Returns> = new DateField('OriginalCreditOrDebitDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<Returns> = new StringField('ECommerceOperator', Returns, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<Returns> = new StringField('ECommerceGSTIN', Returns, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<Returns> = new StringField('TaxInvoiceNo', Returns, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<Returns> = new DateField('TaxInvoiceDate', Returns, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<Returns> = new StringField('ShipFrom', Returns, 'Edm.String');
  /**
   * Static representation of the [[commissionTrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE: EnumField<Returns> = new EnumField('CommissionTrade', Returns);
  /**
   * Static representation of the [[commissionTradeReturn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_TRADE_RETURN: EnumField<Returns> = new EnumField('CommissionTradeReturn', Returns);
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<Returns> = new EnumField('UseBillToAddrToDetermineTax', Returns);
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<Returns> = new NumberField('IssuingReason', Returns, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<Returns, DocumentApprovalRequest> = new CollectionField('Document_ApprovalRequests', Returns, DocumentApprovalRequest);
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<Returns, DocumentLine> = new CollectionField('DocumentLines', Returns, DocumentLine);
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<Returns, DocumentAdditionalExpense> = new CollectionField('DocumentAdditionalExpenses', Returns, DocumentAdditionalExpense);
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<Returns, WithholdingTaxDataWtx> = new CollectionField('WithholdingTaxDataWTXCollection', Returns, WithholdingTaxDataWtx);
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<Returns, WithholdingTaxData> = new CollectionField('WithholdingTaxDataCollection', Returns, WithholdingTaxData);
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<Returns, DocumentPackage> = new CollectionField('DocumentPackages', Returns, DocumentPackage);
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<Returns, DocumentSpecialLine> = new CollectionField('DocumentSpecialLines', Returns, DocumentSpecialLine);
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<Returns, DocumentInstallment> = new CollectionField('DocumentInstallments', Returns, DocumentInstallment);
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<Returns, DownPaymentToDraw> = new CollectionField('DownPaymentsToDraw', Returns, DownPaymentToDraw);
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<Returns> = new TaxExtensionField('TaxExtension', Returns);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<Returns> = new AddressExtensionField('AddressExtension', Returns);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<Returns> = new NumberField('SOIWizardId', Returns, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<Returns, BusinessPartners> = new OneToOneLink('BusinessPartner', Returns, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<Returns, Currencies> = new OneToOneLink('Currency', Returns, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<Returns, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', Returns, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<Returns, SalesPersons> = new OneToOneLink('SalesPerson', Returns, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<Returns, ShippingTypes> = new OneToOneLink('ShippingType', Returns, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<Returns, FactoringIndicators> = new OneToOneLink('FactoringIndicator', Returns, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<Returns, JournalEntries> = new OneToOneLink('JournalEntry', Returns, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<Returns, Forms1099> = new OneToOneLink('Forms1099', Returns, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<Returns, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', Returns, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<Returns, PaymentBlocks> = new OneToOneLink('PaymentBlock2', Returns, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<Returns, Projects> = new OneToOneLink('Project2', Returns, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<Returns, EmployeesInfo> = new OneToOneLink('EmployeeInfo', Returns, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<Returns, Countries> = new OneToOneLink('Country', Returns, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<Returns, BusinessPlaces> = new OneToOneLink('BusinessPlace', Returns, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<Returns, UserLanguages> = new OneToOneLink('UserLanguage', Returns, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<Returns, NfModels> = new OneToOneLink('NFModel', Returns, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<Returns, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', Returns, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<Returns, TaxWebSites> = new OneToOneLink('TaxWebSite', Returns, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<Returns, Branches> = new OneToOneLink('Branch', Returns, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<Returns, Departments> = new OneToOneLink('Department', Returns, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<Returns, PosDailySummary> = new OneToOneLink('POSDailySummary', Returns, PosDailySummary);
  /**
   * All fields of the Returns entity.
   */
  export const _allFields: Array<NumberField<Returns> | EnumField<Returns> | DateField<Returns> | StringField<Returns> | TimeField<Returns> | CollectionField<Returns, DocumentApprovalRequest> | CollectionField<Returns, DocumentLine> | CollectionField<Returns, DocumentAdditionalExpense> | CollectionField<Returns, WithholdingTaxDataWtx> | CollectionField<Returns, WithholdingTaxData> | CollectionField<Returns, DocumentPackage> | CollectionField<Returns, DocumentSpecialLine> | CollectionField<Returns, DocumentInstallment> | CollectionField<Returns, DownPaymentToDraw> | TaxExtensionField<Returns> | AddressExtensionField<Returns> | OneToOneLink<Returns, BusinessPartners> | OneToOneLink<Returns, Currencies> | OneToOneLink<Returns, PaymentTermsTypes> | OneToOneLink<Returns, SalesPersons> | OneToOneLink<Returns, ShippingTypes> | OneToOneLink<Returns, FactoringIndicators> | OneToOneLink<Returns, JournalEntries> | OneToOneLink<Returns, Forms1099> | OneToOneLink<Returns, WizardPaymentMethods> | OneToOneLink<Returns, PaymentBlocks> | OneToOneLink<Returns, Projects> | OneToOneLink<Returns, EmployeesInfo> | OneToOneLink<Returns, Countries> | OneToOneLink<Returns, BusinessPlaces> | OneToOneLink<Returns, UserLanguages> | OneToOneLink<Returns, NfModels> | OneToOneLink<Returns, ChartOfAccounts> | OneToOneLink<Returns, TaxWebSites> | OneToOneLink<Returns, Branches> | OneToOneLink<Returns, Departments> | OneToOneLink<Returns, PosDailySummary>> = [
    Returns.DOC_ENTRY,
    Returns.DOC_NUM,
    Returns.DOC_TYPE,
    Returns.HAND_WRITTEN,
    Returns.PRINTED,
    Returns.DOC_DATE,
    Returns.DOC_DUE_DATE,
    Returns.CARD_CODE,
    Returns.CARD_NAME,
    Returns.ADDRESS,
    Returns.NUM_AT_CARD,
    Returns.DOC_TOTAL,
    Returns.ATTACHMENT_ENTRY,
    Returns.DOC_CURRENCY,
    Returns.DOC_RATE,
    Returns.REFERENCE_1,
    Returns.REFERENCE_2,
    Returns.COMMENTS,
    Returns.JOURNAL_MEMO,
    Returns.PAYMENT_GROUP_CODE,
    Returns.DOC_TIME,
    Returns.SALES_PERSON_CODE,
    Returns.TRANSPORTATION_CODE,
    Returns.CONFIRMED,
    Returns.IMPORT_FILE_NUM,
    Returns.SUMMERY_TYPE,
    Returns.CONTACT_PERSON_CODE,
    Returns.SHOW_SCN,
    Returns.SERIES,
    Returns.TAX_DATE,
    Returns.PARTIAL_SUPPLY,
    Returns.DOC_OBJECT_CODE,
    Returns.SHIP_TO_CODE,
    Returns.INDICATOR,
    Returns.FEDERAL_TAX_ID,
    Returns.DISCOUNT_PERCENT,
    Returns.PAYMENT_REFERENCE,
    Returns.CREATION_DATE,
    Returns.UPDATE_DATE,
    Returns.FINANCIAL_PERIOD,
    Returns.TRANS_NUM,
    Returns.VAT_SUM,
    Returns.VAT_SUM_SYS,
    Returns.VAT_SUM_FC,
    Returns.NET_PROCEDURE,
    Returns.DOC_TOTAL_FC,
    Returns.DOC_TOTAL_SYS,
    Returns.FORM_1099,
    Returns.BOX_1099,
    Returns.REVISION_PO,
    Returns.REQURIED_DATE,
    Returns.CANCEL_DATE,
    Returns.BLOCK_DUNNING,
    Returns.SUBMITTED,
    Returns.SEGMENT,
    Returns.PICK_STATUS,
    Returns.PICK,
    Returns.PAYMENT_METHOD,
    Returns.PAYMENT_BLOCK,
    Returns.PAYMENT_BLOCK_ENTRY,
    Returns.CENTRAL_BANK_INDICATOR,
    Returns.MAXIMUM_CASH_DISCOUNT,
    Returns.RESERVE,
    Returns.PROJECT,
    Returns.EXEMPTION_VALIDITY_DATE_FROM,
    Returns.EXEMPTION_VALIDITY_DATE_TO,
    Returns.WARE_HOUSE_UPDATE_TYPE,
    Returns.ROUNDING,
    Returns.EXTERNAL_CORRECTED_DOC_NUM,
    Returns.INTERNAL_CORRECTED_DOC_NUM,
    Returns.NEXT_CORRECTING_DOCUMENT,
    Returns.DEFERRED_TAX,
    Returns.TAX_EXEMPTION_LETTER_NUM,
    Returns.WT_APPLIED,
    Returns.WT_APPLIED_FC,
    Returns.BILL_OF_EXCHANGE_RESERVED,
    Returns.AGENT_CODE,
    Returns.WT_APPLIED_SC,
    Returns.TOTAL_EQUALIZATION_TAX,
    Returns.TOTAL_EQUALIZATION_TAX_FC,
    Returns.TOTAL_EQUALIZATION_TAX_SC,
    Returns.NUMBER_OF_INSTALLMENTS,
    Returns.APPLY_TAX_ON_FIRST_INSTALLMENT,
    Returns.WT_NON_SUBJECT_AMOUNT,
    Returns.WT_NON_SUBJECT_AMOUNT_SC,
    Returns.WT_NON_SUBJECT_AMOUNT_FC,
    Returns.WT_EXEMPTED_AMOUNT,
    Returns.WT_EXEMPTED_AMOUNT_SC,
    Returns.WT_EXEMPTED_AMOUNT_FC,
    Returns.BASE_AMOUNT,
    Returns.BASE_AMOUNT_SC,
    Returns.BASE_AMOUNT_FC,
    Returns.WT_AMOUNT,
    Returns.WT_AMOUNT_SC,
    Returns.WT_AMOUNT_FC,
    Returns.VAT_DATE,
    Returns.DOCUMENTS_OWNER,
    Returns.FOLIO_PREFIX_STRING,
    Returns.FOLIO_NUMBER,
    Returns.DOCUMENT_SUB_TYPE,
    Returns.BP_CHANNEL_CODE,
    Returns.BP_CHANNEL_CONTACT,
    Returns.ADDRESS_2,
    Returns.DOCUMENT_STATUS,
    Returns.PERIOD_INDICATOR,
    Returns.PAY_TO_CODE,
    Returns.MANUAL_NUMBER,
    Returns.USE_SHPD_GOODS_ACT,
    Returns.IS_PAY_TO_BANK,
    Returns.PAY_TO_BANK_COUNTRY,
    Returns.PAY_TO_BANK_CODE,
    Returns.PAY_TO_BANK_ACCOUNT_NO,
    Returns.PAY_TO_BANK_BRANCH,
    Returns.BPL_ID_ASSIGNED_TO_INVOICE,
    Returns.DOWN_PAYMENT,
    Returns.RESERVE_INVOICE,
    Returns.LANGUAGE_CODE,
    Returns.TRACKING_NUMBER,
    Returns.PICK_REMARK,
    Returns.CLOSING_DATE,
    Returns.SEQUENCE_CODE,
    Returns.SEQUENCE_SERIAL,
    Returns.SERIES_STRING,
    Returns.SUB_SERIES_STRING,
    Returns.SEQUENCE_MODEL,
    Returns.USE_CORRECTION_VAT_GROUP,
    Returns.TOTAL_DISCOUNT,
    Returns.DOWN_PAYMENT_AMOUNT,
    Returns.DOWN_PAYMENT_PERCENTAGE,
    Returns.DOWN_PAYMENT_TYPE,
    Returns.DOWN_PAYMENT_AMOUNT_SC,
    Returns.DOWN_PAYMENT_AMOUNT_FC,
    Returns.VAT_PERCENT,
    Returns.SERVICE_GROSS_PROFIT_PERCENT,
    Returns.OPENING_REMARKS,
    Returns.CLOSING_REMARKS,
    Returns.ROUNDING_DIFF_AMOUNT,
    Returns.ROUNDING_DIFF_AMOUNT_FC,
    Returns.ROUNDING_DIFF_AMOUNT_SC,
    Returns.CANCELLED,
    Returns.SIGNATURE_INPUT_MESSAGE,
    Returns.SIGNATURE_DIGEST,
    Returns.CERTIFICATION_NUMBER,
    Returns.PRIVATE_KEY_VERSION,
    Returns.CONTROL_ACCOUNT,
    Returns.INSURANCE_OPERATION_347,
    Returns.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
    Returns.GTS_CHECKER,
    Returns.GTS_PAYEE,
    Returns.EXTRA_MONTH,
    Returns.EXTRA_DAYS,
    Returns.CASH_DISCOUNT_DATE_OFFSET,
    Returns.START_FROM,
    Returns.NTS_APPROVED,
    Returns.E_TAX_WEB_SITE,
    Returns.E_TAX_NUMBER,
    Returns.NTS_APPROVED_NUMBER,
    Returns.E_DOC_GENERATION_TYPE,
    Returns.E_DOC_SERIES,
    Returns.E_DOC_NUM,
    Returns.E_DOC_EXPORT_FORMAT,
    Returns.E_DOC_STATUS,
    Returns.E_DOC_ERROR_CODE,
    Returns.E_DOC_ERROR_MESSAGE,
    Returns.DOWN_PAYMENT_STATUS,
    Returns.GROUP_SERIES,
    Returns.GROUP_NUMBER,
    Returns.GROUP_HAND_WRITTEN,
    Returns.REOPEN_ORIGINAL_DOCUMENT,
    Returns.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
    Returns.CREATE_ONLINE_QUOTATION,
    Returns.POS_EQUIPMENT_NUMBER,
    Returns.POS_MANUFACTURER_SERIAL_NUMBER,
    Returns.POS_CASHIER_NUMBER,
    Returns.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
    Returns.CLOSING_OPTION,
    Returns.SPECIFIED_CLOSING_DATE,
    Returns.OPEN_FOR_LANDED_COSTS,
    Returns.AUTHORIZATION_STATUS,
    Returns.TOTAL_DISCOUNT_FC,
    Returns.TOTAL_DISCOUNT_SC,
    Returns.RELEVANT_TO_GTS,
    Returns.BPL_NAME,
    Returns.VAT_REG_NUM,
    Returns.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    Returns.SUPPLIER,
    Returns.RELEASER,
    Returns.RECEIVER,
    Returns.BLANKET_AGREEMENT_NUMBER,
    Returns.IS_ALTERATION,
    Returns.CANCEL_STATUS,
    Returns.ASSET_VALUE_DATE,
    Returns.REQUESTER,
    Returns.REQUESTER_NAME,
    Returns.REQUESTER_BRANCH,
    Returns.REQUESTER_DEPARTMENT,
    Returns.REQUESTER_EMAIL,
    Returns.SEND_NOTIFICATION,
    Returns.REQ_TYPE,
    Returns.DOCUMENT_DELIVERY,
    Returns.AUTHORIZATION_CODE,
    Returns.START_DELIVERY_DATE,
    Returns.START_DELIVERY_TIME,
    Returns.END_DELIVERY_DATE,
    Returns.END_DELIVERY_TIME,
    Returns.VEHICLE_PLATE,
    Returns.AT_DOCUMENT_TYPE,
    Returns.ELEC_COMM_STATUS,
    Returns.ELEC_COMM_MESSAGE,
    Returns.REUSE_DOCUMENT_NUM,
    Returns.REUSE_NOTA_FISCAL_NUM,
    Returns.PRINT_SEPA_DIRECT,
    Returns.FISCAL_DOC_NUM,
    Returns.POS_DAILY_SUMMARY_NO,
    Returns.POS_RECEIPT_NO,
    Returns.POINT_OF_ISSUE_CODE,
    Returns.LETTER,
    Returns.FOLIO_NUMBER_FROM,
    Returns.FOLIO_NUMBER_TO,
    Returns.INTERIM_TYPE,
    Returns.RELATED_TYPE,
    Returns.RELATED_ENTRY,
    Returns.DOCUMENT_TAX_ID,
    Returns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    Returns.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    Returns.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
    Returns.POS_CASH_REGISTER,
    Returns.UPDATE_TIME,
    Returns.PRICE_MODE,
    Returns.DOWN_PAYMENT_TRASACTION_ID,
    Returns.REVISION,
    Returns.ORIGINAL_REF_NO,
    Returns.ORIGINAL_REF_DATE,
    Returns.GST_TRANSACTION_TYPE,
    Returns.ORIGINAL_CREDIT_OR_DEBIT_NO,
    Returns.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    Returns.E_COMMERCE_OPERATOR,
    Returns.E_COMMERCE_GSTIN,
    Returns.TAX_INVOICE_NO,
    Returns.TAX_INVOICE_DATE,
    Returns.SHIP_FROM,
    Returns.COMMISSION_TRADE,
    Returns.COMMISSION_TRADE_RETURN,
    Returns.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    Returns.ISSUING_REASON,
    Returns.DOCUMENT_APPROVAL_REQUESTS,
    Returns.DOCUMENT_LINES,
    Returns.DOCUMENT_ADDITIONAL_EXPENSES,
    Returns.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    Returns.WITHHOLDING_TAX_DATA_COLLECTION,
    Returns.DOCUMENT_PACKAGES,
    Returns.DOCUMENT_SPECIAL_LINES,
    Returns.DOCUMENT_INSTALLMENTS,
    Returns.DOWN_PAYMENTS_TO_DRAW,
    Returns.TAX_EXTENSION,
    Returns.ADDRESS_EXTENSION,
    Returns.SOI_WIZARD_ID,
    Returns.BUSINESS_PARTNER,
    Returns.CURRENCY,
    Returns.PAYMENT_TERMS_TYPE,
    Returns.SALES_PERSON,
    Returns.SHIPPING_TYPE,
    Returns.FACTORING_INDICATOR,
    Returns.JOURNAL_ENTRY,
    Returns.FORMS_1099,
    Returns.WIZARD_PAYMENT_METHOD,
    Returns.PAYMENT_BLOCK_2,
    Returns.PROJECT_2,
    Returns.EMPLOYEE_INFO,
    Returns.COUNTRY,
    Returns.BUSINESS_PLACE,
    Returns.USER_LANGUAGE,
    Returns.NF_MODEL,
    Returns.CHART_OF_ACCOUNT,
    Returns.TAX_WEB_SITE,
    Returns.BRANCH,
    Returns.DEPARTMENT,
    Returns.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Returns> = new AllFields('*', Returns);
  /**
   * All key fields of the Returns entity.
   */
  export const _keyFields: Array<Field<Returns>> = [Returns.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Returns.
   */
  export const _keys: { [keys: string]: Field<Returns> } = Returns._keyFields.reduce((acc: { [keys: string]: Field<Returns> }, field: Field<Returns>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
