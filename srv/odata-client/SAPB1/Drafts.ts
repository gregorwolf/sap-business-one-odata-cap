/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { DocumentApprovalRequest } from './DocumentApprovalRequest';
import { DocumentLine } from './DocumentLine';
import { EWayBillDetails, EWayBillDetailsField } from './EWayBillDetails';
import { ElectronicProtocol } from './ElectronicProtocol';
import { DocumentAdditionalExpense } from './DocumentAdditionalExpense';
import { DocumentDistributedExpense } from './DocumentDistributedExpense';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import { WithholdingTaxData } from './WithholdingTaxData';
import { DocumentPackage } from './DocumentPackage';
import { DocumentSpecialLine } from './DocumentSpecialLine';
import { DocumentInstallment } from './DocumentInstallment';
import { DownPaymentToDraw } from './DownPaymentToDraw';
import { TaxExtension, TaxExtensionField } from './TaxExtension';
import { AddressExtension, AddressExtensionField } from './AddressExtension';
import { DocumentReference } from './DocumentReference';
import type { DraftsApi } from './DraftsApi';
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
import { EDocTypeEnum } from './EDocTypeEnum';
import { BoFatherCardTypes } from './BoFatherCardTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import {
  FactoringIndicators,
  FactoringIndicatorsType
} from './FactoringIndicators';
import { Users, UsersType } from './Users';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Forms1099, Forms1099Type } from './Forms1099';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
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

/**
 * This class represents the entity "Drafts" of service "SAPB1".
 */
export class Drafts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DraftsType<T>
{
  /**
   * Technical entity name for Drafts.
   */
  static _entityName = 'Drafts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Drafts entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: BoDocumentTypes | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: PrintStatusEnum | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Doc Due Date.
   * @nullable
   */
  docDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Num At Card.
   * @nullable
   */
  numAtCard?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Total.
   * @nullable
   */
  docTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Memo.
   * @nullable
   */
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Group Code.
   * @nullable
   */
  paymentGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Time.
   * @nullable
   */
  docTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transportation Code.
   * @nullable
   */
  transportationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Confirmed.
   * @nullable
   */
  confirmed?: BoYesNoEnum | null;
  /**
   * Import File Num.
   * @nullable
   */
  importFileNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Summery Type.
   * @nullable
   */
  summeryType?: BoDocSummaryTypes | null;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Show Scn.
   * @nullable
   */
  showScn?: BoYesNoEnum | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Partial Supply.
   * @nullable
   */
  partialSupply?: BoYesNoEnum | null;
  /**
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: BoObjectTypes | null;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator.
   * @nullable
   */
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Payment Reference.
   * @nullable
   */
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * User Sign.
   * @nullable
   */
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Trans Num.
   * @nullable
   */
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Vat Sum.
   * @nullable
   */
  vatSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Sum Sys.
   * @nullable
   */
  vatSumSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Sum Fc.
   * @nullable
   */
  vatSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Net Procedure.
   * @nullable
   */
  netProcedure?: BoYesNoEnum | null;
  /**
   * Doc Total Fc.
   * @nullable
   */
  docTotalFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Total Sys.
   * @nullable
   */
  docTotalSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Form 1099.
   * @nullable
   */
  form1099?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Box 1099.
   * @nullable
   */
  box1099?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revision Po.
   * @nullable
   */
  revisionPo?: BoYesNoEnum | null;
  /**
   * Requried Date.
   * @nullable
   */
  requriedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Cancel Date.
   * @nullable
   */
  cancelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Block Dunning.
   * @nullable
   */
  blockDunning?: BoYesNoEnum | null;
  /**
   * Submitted.
   * @nullable
   */
  submitted?: BoYesNoEnum | null;
  /**
   * Segment.
   * @nullable
   */
  segment?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Pick Status.
   * @nullable
   */
  pickStatus?: BoYesNoEnum | null;
  /**
   * Pick.
   * @nullable
   */
  pick?: BoYesNoEnum | null;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Block.
   * @nullable
   */
  paymentBlock?: BoYesNoEnum | null;
  /**
   * Payment Block Entry.
   * @nullable
   */
  paymentBlockEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Central Bank Indicator.
   * @nullable
   */
  centralBankIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Cash Discount.
   * @nullable
   */
  maximumCashDiscount?: BoYesNoEnum | null;
  /**
   * Reserve.
   * @nullable
   */
  reserve?: BoYesNoEnum | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Validity Date From.
   * @nullable
   */
  exemptionValidityDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Exemption Validity Date To.
   * @nullable
   */
  exemptionValidityDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Ware House Update Type.
   * @nullable
   */
  wareHouseUpdateType?: BoDocWhsUpdateTypes | null;
  /**
   * Rounding.
   * @nullable
   */
  rounding?: BoYesNoEnum | null;
  /**
   * External Corrected Doc Num.
   * @nullable
   */
  externalCorrectedDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Corrected Doc Num.
   * @nullable
   */
  internalCorrectedDocNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Next Correcting Document.
   * @nullable
   */
  nextCorrectingDocument?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum | null;
  /**
   * Tax Exemption Letter Num.
   * @nullable
   */
  taxExemptionLetterNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Applied.
   * @nullable
   */
  wtApplied?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Applied Fc.
   * @nullable
   */
  wtAppliedFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bill Of Exchange Reserved.
   * @nullable
   */
  billOfExchangeReserved?: BoYesNoEnum | null;
  /**
   * Agent Code.
   * @nullable
   */
  agentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wt Applied Sc.
   * @nullable
   */
  wtAppliedSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Equalization Tax.
   * @nullable
   */
  totalEqualizationTax?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Equalization Tax Fc.
   * @nullable
   */
  totalEqualizationTaxFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Equalization Tax Sc.
   * @nullable
   */
  totalEqualizationTaxSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Number Of Installments.
   * @nullable
   */
  numberOfInstallments?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Apply Tax On First Installment.
   * @nullable
   */
  applyTaxOnFirstInstallment?: BoYesNoEnum | null;
  /**
   * Wt Non Subject Amount.
   * @nullable
   */
  wtNonSubjectAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Non Subject Amount Sc.
   * @nullable
   */
  wtNonSubjectAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Non Subject Amount Fc.
   * @nullable
   */
  wtNonSubjectAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Exempted Amount.
   * @nullable
   */
  wtExemptedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Exempted Amount Sc.
   * @nullable
   */
  wtExemptedAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Exempted Amount Fc.
   * @nullable
   */
  wtExemptedAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Base Amount Sc.
   * @nullable
   */
  baseAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Base Amount Fc.
   * @nullable
   */
  baseAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Amount Sc.
   * @nullable
   */
  wtAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Date.
   * @nullable
   */
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Documents Owner.
   * @nullable
   */
  documentsOwner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: BoDocumentSubType | null;
  /**
   * Bp Channel Code.
   * @nullable
   */
  bpChannelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Channel Contact.
   * @nullable
   */
  bpChannelContact?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Address 2.
   * @nullable
   */
  address2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Status.
   * @nullable
   */
  documentStatus?: BoStatus | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Code.
   * @nullable
   */
  payToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Number.
   * @nullable
   */
  manualNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Shpd Goods Act.
   * @nullable
   */
  useShpdGoodsAct?: BoYesNoEnum | null;
  /**
   * Is Pay To Bank.
   * @nullable
   */
  isPayToBank?: BoYesNoEnum | null;
  /**
   * Pay To Bank Country.
   * @nullable
   */
  payToBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Code.
   * @nullable
   */
  payToBankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Account No.
   * @nullable
   */
  payToBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay To Bank Branch.
   * @nullable
   */
  payToBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bpl Id Assigned To Invoice.
   * @nullable
   */
  bplIdAssignedToInvoice?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Down Payment.
   * @nullable
   */
  downPayment?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reserve Invoice.
   * @nullable
   */
  reserveInvoice?: BoYesNoEnum | null;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tracking Number.
   * @nullable
   */
  trackingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pick Remark.
   * @nullable
   */
  pickRemark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Sequence Code.
   * @nullable
   */
  sequenceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sequence Serial.
   * @nullable
   */
  sequenceSerial?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series String.
   * @nullable
   */
  seriesString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Series String.
   * @nullable
   */
  subSeriesString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence Model.
   * @nullable
   */
  sequenceModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Correction Vat Group.
   * @nullable
   */
  useCorrectionVatGroup?: BoYesNoEnum | null;
  /**
   * Total Discount.
   * @nullable
   */
  totalDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Down Payment Amount.
   * @nullable
   */
  downPaymentAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Down Payment Percentage.
   * @nullable
   */
  downPaymentPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Down Payment Type.
   * @nullable
   */
  downPaymentType?: DownPaymentTypeEnum | null;
  /**
   * Down Payment Amount Sc.
   * @nullable
   */
  downPaymentAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Down Payment Amount Fc.
   * @nullable
   */
  downPaymentAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Service Gross Profit Percent.
   * @nullable
   */
  serviceGrossProfitPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Opening Remarks.
   * @nullable
   */
  openingRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closing Remarks.
   * @nullable
   */
  closingRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Diff Amount.
   * @nullable
   */
  roundingDiffAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Rounding Diff Amount Fc.
   * @nullable
   */
  roundingDiffAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Rounding Diff Amount Sc.
   * @nullable
   */
  roundingDiffAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cancelled.
   * @nullable
   */
  cancelled?: BoYesNoEnum | null;
  /**
   * Signature Input Message.
   * @nullable
   */
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Digest.
   * @nullable
   */
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Number.
   * @nullable
   */
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Private Key Version.
   * @nullable
   */
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Operation 347.
   * @nullable
   */
  insuranceOperation347?: BoYesNoEnum | null;
  /**
   * Archive Nonremovable Sales Quotation.
   * @nullable
   */
  archiveNonremovableSalesQuotation?: BoYesNoEnum | null;
  /**
   * Gts Checker.
   * @nullable
   */
  gtsChecker?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Gts Payee.
   * @nullable
   */
  gtsPayee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Extra Month.
   * @nullable
   */
  extraMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Extra Days.
   * @nullable
   */
  extraDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cash Discount Date Offset.
   * @nullable
   */
  cashDiscountDateOffset?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start From.
   * @nullable
   */
  startFrom?: BoPayTermDueTypes | null;
  /**
   * Nts Approved.
   * @nullable
   */
  ntsApproved?: BoYesNoEnum | null;
  /**
   * E Tax Web Site.
   * @nullable
   */
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Tax Number.
   * @nullable
   */
  eTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nts Approved Number.
   * @nullable
   */
  ntsApprovedNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Generation Type.
   * @nullable
   */
  eDocGenerationType?: EDocGenerationTypeEnum | null;
  /**
   * E Doc Series.
   * @nullable
   */
  eDocSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Doc Num.
   * @nullable
   */
  eDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Export Format.
   * @nullable
   */
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Doc Status.
   * @nullable
   */
  eDocStatus?: EDocStatusEnum | null;
  /**
   * E Doc Error Code.
   * @nullable
   */
  eDocErrorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Error Message.
   * @nullable
   */
  eDocErrorMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Down Payment Status.
   * @nullable
   */
  downPaymentStatus?: BoSoStatus | null;
  /**
   * Group Series.
   * @nullable
   */
  groupSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Group Number.
   * @nullable
   */
  groupNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Group Hand Written.
   * @nullable
   */
  groupHandWritten?: BoYesNoEnum | null;
  /**
   * Reopen Original Document.
   * @nullable
   */
  reopenOriginalDocument?: BoYesNoEnum | null;
  /**
   * Reopen Manually Closed Or Canceled Document.
   * @nullable
   */
  reopenManuallyClosedOrCanceledDocument?: BoYesNoEnum | null;
  /**
   * Create Online Quotation.
   * @nullable
   */
  createOnlineQuotation?: BoYesNoEnum | null;
  /**
   * Pos Equipment Number.
   * @nullable
   */
  posEquipmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Manufacturer Serial Number.
   * @nullable
   */
  posManufacturerSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Cashier Number.
   * @nullable
   */
  posCashierNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Apply Current Vat Rates For Down Payments To Draw.
   * @nullable
   */
  applyCurrentVatRatesForDownPaymentsToDraw?: BoYesNoEnum | null;
  /**
   * Closing Option.
   * @nullable
   */
  closingOption?: ClosingOptionEnum | null;
  /**
   * Specified Closing Date.
   * @nullable
   */
  specifiedClosingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Open For Landed Costs.
   * @nullable
   */
  openForLandedCosts?: BoYesNoEnum | null;
  /**
   * Authorization Status.
   * @nullable
   */
  authorizationStatus?: DocumentAuthorizationStatusEnum | null;
  /**
   * Total Discount Fc.
   * @nullable
   */
  totalDiscountFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Discount Sc.
   * @nullable
   */
  totalDiscountSc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Relevant To Gts.
   * @nullable
   */
  relevantToGts?: BoYesNoEnum | null;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annual Invoice Declaration Reference.
   * @nullable
   */
  annualInvoiceDeclarationReference?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Supplier.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Releaser.
   * @nullable
   */
  releaser?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Receiver.
   * @nullable
   */
  receiver?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Alteration.
   * @nullable
   */
  isAlteration?: BoYesNoEnum | null;
  /**
   * Cancel Status.
   * @nullable
   */
  cancelStatus?: CancelStatusEnum | null;
  /**
   * Asset Value Date.
   * @nullable
   */
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Requester.
   * @nullable
   */
  requester?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Name.
   * @nullable
   */
  requesterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Branch.
   * @nullable
   */
  requesterBranch?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Requester Department.
   * @nullable
   */
  requesterDepartment?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Requester Email.
   * @nullable
   */
  requesterEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Send Notification.
   * @nullable
   */
  sendNotification?: BoYesNoEnum | null;
  /**
   * Req Type.
   * @nullable
   */
  reqType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Req Code.
   * @nullable
   */
  reqCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Payment.
   * @nullable
   */
  invoicePayment?: BoYesNoEnum | null;
  /**
   * Document Delivery.
   * @nullable
   */
  documentDelivery?: DocumentDeliveryTypeEnum | null;
  /**
   * Authorization Code.
   * @nullable
   */
  authorizationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Delivery Date.
   * @nullable
   */
  startDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Start Delivery Time.
   * @nullable
   */
  startDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * End Delivery Date.
   * @nullable
   */
  endDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Delivery Time.
   * @nullable
   */
  endDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Vehicle Plate.
   * @nullable
   */
  vehiclePlate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * At Document Type.
   * @nullable
   */
  atDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Elec Comm Status.
   * @nullable
   */
  elecCommStatus?: ElecCommStatusEnum | null;
  /**
   * Elec Comm Message.
   * @nullable
   */
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reuse Document Num.
   * @nullable
   */
  reuseDocumentNum?: BoYesNoEnum | null;
  /**
   * Reuse Nota Fiscal Num.
   * @nullable
   */
  reuseNotaFiscalNum?: BoYesNoEnum | null;
  /**
   * Print Sepa Direct.
   * @nullable
   */
  printSepaDirect?: BoYesNoEnum | null;
  /**
   * Fiscal Doc Num.
   * @nullable
   */
  fiscalDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Daily Summary No.
   * @nullable
   */
  posDailySummaryNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Pos Receipt No.
   * @nullable
   */
  posReceiptNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Point Of Issue Code.
   * @nullable
   */
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Letter.
   * @nullable
   */
  letter?: FolioLetterEnum | null;
  /**
   * Folio Number From.
   * @nullable
   */
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Number To.
   * @nullable
   */
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interim Type.
   * @nullable
   */
  interimType?: BoInterimDocTypes | null;
  /**
   * Related Type.
   * @nullable
   */
  relatedType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Related Entry.
   * @nullable
   */
  relatedEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Tax Id.
   * @nullable
   */
  documentTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Reporting Control Statement Vat.
   * @nullable
   */
  dateOfReportingControlStatementVat?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Reporting Section Control Statement Vat.
   * @nullable
   */
  reportingSectionControlStatementVat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exclude From Tax Report Control Statement Vat.
   * @nullable
   */
  excludeFromTaxReportControlStatementVat?: BoYesNoEnum | null;
  /**
   * Pos Cash Register.
   * @nullable
   */
  posCashRegister?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Create Qr Code From.
   * @nullable
   */
  createQrCodeFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Mode.
   * @nullable
   */
  priceMode?: PriceModeDocumentEnum | null;
  /**
   * Down Payment Trasaction Id.
   * @nullable
   */
  downPaymentTrasactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revision.
   * @nullable
   */
  revision?: BoYesNoEnum | null;
  /**
   * Original Ref No.
   * @nullable
   */
  originalRefNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Ref Date.
   * @nullable
   */
  originalRefDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Gst Transaction Type.
   * @nullable
   */
  gstTransactionType?: GstTransactionTypeEnum | null;
  /**
   * Original Credit Or Debit No.
   * @nullable
   */
  originalCreditOrDebitNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Credit Or Debit Date.
   * @nullable
   */
  originalCreditOrDebitDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * E Commerce Operator.
   * @nullable
   */
  eCommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Commerce Gstin.
   * @nullable
   */
  eCommerceGstin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice No.
   * @nullable
   */
  taxInvoiceNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice Date.
   * @nullable
   */
  taxInvoiceDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Ship From.
   * @nullable
   */
  shipFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Trade.
   * @nullable
   */
  commissionTrade?: CommissionTradeTypeEnum | null;
  /**
   * Commission Trade Return.
   * @nullable
   */
  commissionTradeReturn?: BoYesNoEnum | null;
  /**
   * Use Bill To Addr To Determine Tax.
   * @nullable
   */
  useBillToAddrToDetermineTax?: BoYesNoEnum | null;
  /**
   * Issuing Reason.
   * @nullable
   */
  issuingReason?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cig.
   * @nullable
   */
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cup.
   * @nullable
   */
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Doc Type.
   * @nullable
   */
  eDocType?: EDocTypeEnum | null;
  /**
   * Fce As Payment Means.
   * @nullable
   */
  fceAsPaymentMeans?: BoYesNoEnum | null;
  /**
   * Paid To Date.
   * @nullable
   */
  paidToDate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Paid To Date Fc.
   * @nullable
   */
  paidToDateFc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Paid To Date Sys.
   * @nullable
   */
  paidToDateSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Father Card.
   * @nullable
   */
  fatherCard?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Type.
   * @nullable
   */
  fatherType?: BoFatherCardTypes | null;
  /**
   * Ship State.
   * @nullable
   */
  shipState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Place.
   * @nullable
   */
  shipPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Office.
   * @nullable
   */
  custOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fci.
   * @nullable
   */
  fci?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Add Leg In.
   * @nullable
   */
  addLegIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leg Text F.
   * @nullable
   */
  legTextF?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Danfe Lg Txt.
   * @nullable
   */
  danfeLgTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Version.
   * @nullable
   */
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Last Page Folio Number.
   * @nullable
   */
  lastPageFolioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inventory Status.
   * @nullable
   */
  inventoryStatus?: BoStatus | null;
  /**
   * Plastic Packaging Tax Relevant.
   * @nullable
   */
  plasticPackagingTaxRelevant?: BoYesNoEnum | null;
  /**
   * Not Relevant For Monthly Invoice.
   * @nullable
   */
  notRelevantForMonthlyInvoice?: BoYesNoEnum | null;
  /**
   * U Fertigungszeit.
   * @nullable
   */
  uFertigungszeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Iltis Lieferzeit.
   * @nullable
   */
  uIltisLieferzeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Cor Form Type.
   * @nullable
   */
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Belegok.
   */
  uBelegok!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Est 1.
   */
  uEst1!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 2.
   */
  uEst2!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 3.
   */
  uEst3!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 1.
   */
  uAct1!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 2.
   */
  uAct2!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 3.
   */
  uAct3!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 4.
   */
  uEst4!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 4.
   */
  uAct4!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 5.
   */
  uAct5!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Bs Infoservice.
   */
  uBsInfoservice!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Ab Ok.
   * @nullable
   */
  uAbOk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cor Bw From Date.
   * @nullable
   */
  uCorBwFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Cor Bw To Date.
   * @nullable
   */
  uCorBwToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Testbeleg.
   * @nullable
   */
  uTestbeleg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Artikel Detail.
   * @nullable
   */
  uArtikelDetail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Intern.
   * @nullable
   */
  uIntern?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kalkulation.
   * @nullable
   */
  uKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Prov Best.
   * @nullable
   */
  uProvBest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Av.
   * @nullable
   */
  uAv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Qm.
   * @nullable
   */
  uQm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fert Stand.
   * @nullable
   */
  uFertStand?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rahmenvertrag.
   * @nullable
   */
  uRahmenvertrag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rahmenvertrags Nr.
   * @nullable
   */
  uRahmenvertragsNr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Eingegangen.
   * @nullable
   */
  uEingegangen?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Kalkulation.
   * @nullable
   */
  uOppKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Abgabeart.
   * @nullable
   */
  uOppAbgabeart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Preise.
   * @nullable
   */
  uOppPreise?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Einvoice.
   * @nullable
   */
  uEinvoice?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Document Approval Requests.
   * @nullable
   */
  documentApprovalRequests?: DocumentApprovalRequest<T>[] | null;
  /**
   * Document Lines.
   * @nullable
   */
  documentLines?: DocumentLine<T>[] | null;
  /**
   * E Way Bill Details.
   * @nullable
   */
  eWayBillDetails?: EWayBillDetails<T> | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  /**
   * Document Additional Expenses.
   * @nullable
   */
  documentAdditionalExpenses?: DocumentAdditionalExpense<T>[] | null;
  /**
   * Document Distributed Expenses.
   * @nullable
   */
  documentDistributedExpenses?: DocumentDistributedExpense<T>[] | null;
  /**
   * Withholding Tax Data Wtx Collection.
   * @nullable
   */
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx<T>[] | null;
  /**
   * Withholding Tax Data Collection.
   * @nullable
   */
  withholdingTaxDataCollection?: WithholdingTaxData<T>[] | null;
  /**
   * Document Packages.
   * @nullable
   */
  documentPackages?: DocumentPackage<T>[] | null;
  /**
   * Document Special Lines.
   * @nullable
   */
  documentSpecialLines?: DocumentSpecialLine<T>[] | null;
  /**
   * Document Installments.
   * @nullable
   */
  documentInstallments?: DocumentInstallment<T>[] | null;
  /**
   * Down Payments To Draw.
   * @nullable
   */
  downPaymentsToDraw?: DownPaymentToDraw<T>[] | null;
  /**
   * Tax Extension.
   * @nullable
   */
  taxExtension?: TaxExtension<T> | null;
  /**
   * Address Extension.
   * @nullable
   */
  addressExtension?: AddressExtension<T> | null;
  /**
   * Document References.
   * @nullable
   */
  documentReferences?: DocumentReference<T>[] | null;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Ind Final.
   * @nullable
   */
  indFinal?: BoYesNoEnum | null;
  /**
   * Soi Wizard Id.
   * @nullable
   */
  soiWizardId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsType?: PaymentTermsTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingTypes} entity.
   */
  shippingType?: ShippingTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link FactoringIndicators} entity.
   */
  factoringIndicator?: FactoringIndicators<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link Forms1099} entity.
   */
  forms1099?: Forms1099<T> | null;
  /**
   * One-to-one navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethod?: WizardPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentBlocks} entity.
   */
  paymentBlock2?: PaymentBlocks<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link UserLanguages} entity.
   */
  userLanguage?: UserLanguages<T> | null;
  /**
   * One-to-one navigation property to the {@link NfModels} entity.
   */
  nfModel?: NfModels<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxWebSites} entity.
   */
  taxWebSite?: TaxWebSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Branches} entity.
   */
  branch?: Branches<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link PosDailySummary} entity.
   */
  posDailySummary?: PosDailySummary<T> | null;

  constructor(readonly _entityApi: DraftsApi<T>) {
    super(_entityApi);
  }
}

export interface DraftsType<T extends DeSerializers = DefaultDeSerializers> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: BoDocumentTypes | null;
  handWritten?: BoYesNoEnum | null;
  printed?: PrintStatusEnum | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  docDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  numAtCard?: DeserializedType<T, 'Edm.String'> | null;
  docTotal?: DeserializedType<T, 'Edm.Double'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  docRate?: DeserializedType<T, 'Edm.Double'> | null;
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  paymentGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  docTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  transportationCode?: DeserializedType<T, 'Edm.Int32'> | null;
  confirmed?: BoYesNoEnum | null;
  importFileNum?: DeserializedType<T, 'Edm.Int32'> | null;
  summeryType?: BoDocSummaryTypes | null;
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  showScn?: BoYesNoEnum | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  partialSupply?: BoYesNoEnum | null;
  docObjectCode?: BoObjectTypes | null;
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  vatSum?: DeserializedType<T, 'Edm.Double'> | null;
  vatSumSys?: DeserializedType<T, 'Edm.Double'> | null;
  vatSumFc?: DeserializedType<T, 'Edm.Double'> | null;
  netProcedure?: BoYesNoEnum | null;
  docTotalFc?: DeserializedType<T, 'Edm.Double'> | null;
  docTotalSys?: DeserializedType<T, 'Edm.Double'> | null;
  form1099?: DeserializedType<T, 'Edm.Int32'> | null;
  box1099?: DeserializedType<T, 'Edm.String'> | null;
  revisionPo?: BoYesNoEnum | null;
  requriedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cancelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  blockDunning?: BoYesNoEnum | null;
  submitted?: BoYesNoEnum | null;
  segment?: DeserializedType<T, 'Edm.Int32'> | null;
  pickStatus?: BoYesNoEnum | null;
  pick?: BoYesNoEnum | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlock?: BoYesNoEnum | null;
  paymentBlockEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  centralBankIndicator?: DeserializedType<T, 'Edm.String'> | null;
  maximumCashDiscount?: BoYesNoEnum | null;
  reserve?: BoYesNoEnum | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  exemptionValidityDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  exemptionValidityDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  wareHouseUpdateType?: BoDocWhsUpdateTypes | null;
  rounding?: BoYesNoEnum | null;
  externalCorrectedDocNum?: DeserializedType<T, 'Edm.String'> | null;
  internalCorrectedDocNum?: DeserializedType<T, 'Edm.Int32'> | null;
  nextCorrectingDocument?: DeserializedType<T, 'Edm.Int32'> | null;
  deferredTax?: BoYesNoEnum | null;
  taxExemptionLetterNum?: DeserializedType<T, 'Edm.String'> | null;
  wtApplied?: DeserializedType<T, 'Edm.Double'> | null;
  wtAppliedFc?: DeserializedType<T, 'Edm.Double'> | null;
  billOfExchangeReserved?: BoYesNoEnum | null;
  agentCode?: DeserializedType<T, 'Edm.String'> | null;
  wtAppliedSc?: DeserializedType<T, 'Edm.Double'> | null;
  totalEqualizationTax?: DeserializedType<T, 'Edm.Double'> | null;
  totalEqualizationTaxFc?: DeserializedType<T, 'Edm.Double'> | null;
  totalEqualizationTaxSc?: DeserializedType<T, 'Edm.Double'> | null;
  numberOfInstallments?: DeserializedType<T, 'Edm.Int32'> | null;
  applyTaxOnFirstInstallment?: BoYesNoEnum | null;
  wtNonSubjectAmount?: DeserializedType<T, 'Edm.Double'> | null;
  wtNonSubjectAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtNonSubjectAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  wtExemptedAmount?: DeserializedType<T, 'Edm.Double'> | null;
  wtExemptedAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtExemptedAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  baseAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  baseAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  wtAmount?: DeserializedType<T, 'Edm.Double'> | null;
  wtAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  wtAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  vatDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentsOwner?: DeserializedType<T, 'Edm.Int32'> | null;
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  documentSubType?: BoDocumentSubType | null;
  bpChannelCode?: DeserializedType<T, 'Edm.String'> | null;
  bpChannelContact?: DeserializedType<T, 'Edm.Int32'> | null;
  address2?: DeserializedType<T, 'Edm.String'> | null;
  documentStatus?: BoStatus | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  payToCode?: DeserializedType<T, 'Edm.String'> | null;
  manualNumber?: DeserializedType<T, 'Edm.String'> | null;
  useShpdGoodsAct?: BoYesNoEnum | null;
  isPayToBank?: BoYesNoEnum | null;
  payToBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  payToBankCode?: DeserializedType<T, 'Edm.String'> | null;
  payToBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  payToBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  bplIdAssignedToInvoice?: DeserializedType<T, 'Edm.Int32'> | null;
  downPayment?: DeserializedType<T, 'Edm.Double'> | null;
  reserveInvoice?: BoYesNoEnum | null;
  languageCode?: DeserializedType<T, 'Edm.Int32'> | null;
  trackingNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickRemark?: DeserializedType<T, 'Edm.String'> | null;
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sequenceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  sequenceSerial?: DeserializedType<T, 'Edm.Int32'> | null;
  seriesString?: DeserializedType<T, 'Edm.String'> | null;
  subSeriesString?: DeserializedType<T, 'Edm.String'> | null;
  sequenceModel?: DeserializedType<T, 'Edm.String'> | null;
  useCorrectionVatGroup?: BoYesNoEnum | null;
  totalDiscount?: DeserializedType<T, 'Edm.Double'> | null;
  downPaymentAmount?: DeserializedType<T, 'Edm.Double'> | null;
  downPaymentPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  downPaymentType?: DownPaymentTypeEnum | null;
  downPaymentAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  downPaymentAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  vatPercent?: DeserializedType<T, 'Edm.Double'> | null;
  serviceGrossProfitPercent?: DeserializedType<T, 'Edm.Double'> | null;
  openingRemarks?: DeserializedType<T, 'Edm.String'> | null;
  closingRemarks?: DeserializedType<T, 'Edm.String'> | null;
  roundingDiffAmount?: DeserializedType<T, 'Edm.Double'> | null;
  roundingDiffAmountFc?: DeserializedType<T, 'Edm.Double'> | null;
  roundingDiffAmountSc?: DeserializedType<T, 'Edm.Double'> | null;
  cancelled?: BoYesNoEnum | null;
  signatureInputMessage?: DeserializedType<T, 'Edm.String'> | null;
  signatureDigest?: DeserializedType<T, 'Edm.String'> | null;
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  privateKeyVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  controlAccount?: DeserializedType<T, 'Edm.String'> | null;
  insuranceOperation347?: BoYesNoEnum | null;
  archiveNonremovableSalesQuotation?: BoYesNoEnum | null;
  gtsChecker?: DeserializedType<T, 'Edm.Int32'> | null;
  gtsPayee?: DeserializedType<T, 'Edm.Int32'> | null;
  extraMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  extraDays?: DeserializedType<T, 'Edm.Int32'> | null;
  cashDiscountDateOffset?: DeserializedType<T, 'Edm.Int32'> | null;
  startFrom?: BoPayTermDueTypes | null;
  ntsApproved?: BoYesNoEnum | null;
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  eTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  ntsApprovedNumber?: DeserializedType<T, 'Edm.String'> | null;
  eDocGenerationType?: EDocGenerationTypeEnum | null;
  eDocSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  eDocNum?: DeserializedType<T, 'Edm.String'> | null;
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  eDocStatus?: EDocStatusEnum | null;
  eDocErrorCode?: DeserializedType<T, 'Edm.String'> | null;
  eDocErrorMessage?: DeserializedType<T, 'Edm.String'> | null;
  downPaymentStatus?: BoSoStatus | null;
  groupSeries?: DeserializedType<T, 'Edm.Int32'> | null;
  groupNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  groupHandWritten?: BoYesNoEnum | null;
  reopenOriginalDocument?: BoYesNoEnum | null;
  reopenManuallyClosedOrCanceledDocument?: BoYesNoEnum | null;
  createOnlineQuotation?: BoYesNoEnum | null;
  posEquipmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  posManufacturerSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  posCashierNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  applyCurrentVatRatesForDownPaymentsToDraw?: BoYesNoEnum | null;
  closingOption?: ClosingOptionEnum | null;
  specifiedClosingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  openForLandedCosts?: BoYesNoEnum | null;
  authorizationStatus?: DocumentAuthorizationStatusEnum | null;
  totalDiscountFc?: DeserializedType<T, 'Edm.Double'> | null;
  totalDiscountSc?: DeserializedType<T, 'Edm.Double'> | null;
  relevantToGts?: BoYesNoEnum | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  annualInvoiceDeclarationReference?: DeserializedType<T, 'Edm.Int32'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  releaser?: DeserializedType<T, 'Edm.Int32'> | null;
  receiver?: DeserializedType<T, 'Edm.Int32'> | null;
  blanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  isAlteration?: BoYesNoEnum | null;
  cancelStatus?: CancelStatusEnum | null;
  assetValueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  requester?: DeserializedType<T, 'Edm.String'> | null;
  requesterName?: DeserializedType<T, 'Edm.String'> | null;
  requesterBranch?: DeserializedType<T, 'Edm.Int32'> | null;
  requesterDepartment?: DeserializedType<T, 'Edm.Int32'> | null;
  requesterEmail?: DeserializedType<T, 'Edm.String'> | null;
  sendNotification?: BoYesNoEnum | null;
  reqType?: DeserializedType<T, 'Edm.Int32'> | null;
  reqCode?: DeserializedType<T, 'Edm.String'> | null;
  invoicePayment?: BoYesNoEnum | null;
  documentDelivery?: DocumentDeliveryTypeEnum | null;
  authorizationCode?: DeserializedType<T, 'Edm.String'> | null;
  startDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  startDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  endDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  vehiclePlate?: DeserializedType<T, 'Edm.String'> | null;
  atDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  elecCommStatus?: ElecCommStatusEnum | null;
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  reuseDocumentNum?: BoYesNoEnum | null;
  reuseNotaFiscalNum?: BoYesNoEnum | null;
  printSepaDirect?: BoYesNoEnum | null;
  fiscalDocNum?: DeserializedType<T, 'Edm.String'> | null;
  posDailySummaryNo?: DeserializedType<T, 'Edm.Int32'> | null;
  posReceiptNo?: DeserializedType<T, 'Edm.Int32'> | null;
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  letter?: FolioLetterEnum | null;
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  interimType?: BoInterimDocTypes | null;
  relatedType?: DeserializedType<T, 'Edm.Int32'> | null;
  relatedEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  documentTaxId?: DeserializedType<T, 'Edm.String'> | null;
  dateOfReportingControlStatementVat?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  reportingSectionControlStatementVat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  excludeFromTaxReportControlStatementVat?: BoYesNoEnum | null;
  posCashRegister?: DeserializedType<T, 'Edm.Int32'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  createQrCodeFrom?: DeserializedType<T, 'Edm.String'> | null;
  priceMode?: PriceModeDocumentEnum | null;
  downPaymentTrasactionId?: DeserializedType<T, 'Edm.String'> | null;
  revision?: BoYesNoEnum | null;
  originalRefNo?: DeserializedType<T, 'Edm.String'> | null;
  originalRefDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  gstTransactionType?: GstTransactionTypeEnum | null;
  originalCreditOrDebitNo?: DeserializedType<T, 'Edm.String'> | null;
  originalCreditOrDebitDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  eCommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  eCommerceGstin?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoiceNo?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoiceDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shipFrom?: DeserializedType<T, 'Edm.String'> | null;
  commissionTrade?: CommissionTradeTypeEnum | null;
  commissionTradeReturn?: BoYesNoEnum | null;
  useBillToAddrToDetermineTax?: BoYesNoEnum | null;
  issuingReason?: DeserializedType<T, 'Edm.Int32'> | null;
  cig?: DeserializedType<T, 'Edm.Int32'> | null;
  cup?: DeserializedType<T, 'Edm.Int32'> | null;
  eDocType?: EDocTypeEnum | null;
  fceAsPaymentMeans?: BoYesNoEnum | null;
  paidToDate?: DeserializedType<T, 'Edm.Double'> | null;
  paidToDateFc?: DeserializedType<T, 'Edm.Double'> | null;
  paidToDateSys?: DeserializedType<T, 'Edm.Double'> | null;
  fatherCard?: DeserializedType<T, 'Edm.String'> | null;
  fatherType?: BoFatherCardTypes | null;
  shipState?: DeserializedType<T, 'Edm.String'> | null;
  shipPlace?: DeserializedType<T, 'Edm.String'> | null;
  custOffice?: DeserializedType<T, 'Edm.String'> | null;
  fci?: DeserializedType<T, 'Edm.String'> | null;
  addLegIn?: DeserializedType<T, 'Edm.String'> | null;
  legTextF?: DeserializedType<T, 'Edm.Int32'> | null;
  danfeLgTxt?: DeserializedType<T, 'Edm.String'> | null;
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  lastPageFolioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  inventoryStatus?: BoStatus | null;
  plasticPackagingTaxRelevant?: BoYesNoEnum | null;
  notRelevantForMonthlyInvoice?: BoYesNoEnum | null;
  uFertigungszeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uIltisLieferzeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  uBelegok: DeserializedType<T, 'Edm.String'>;
  uEst1: DeserializedType<T, 'Edm.Int32'>;
  uEst2: DeserializedType<T, 'Edm.Int32'>;
  uEst3: DeserializedType<T, 'Edm.Int32'>;
  uAct1: DeserializedType<T, 'Edm.Int32'>;
  uAct2: DeserializedType<T, 'Edm.Int32'>;
  uAct3: DeserializedType<T, 'Edm.Int32'>;
  uEst4: DeserializedType<T, 'Edm.Int32'>;
  uAct4: DeserializedType<T, 'Edm.Int32'>;
  uAct5: DeserializedType<T, 'Edm.Int32'>;
  uBsInfoservice: DeserializedType<T, 'Edm.String'>;
  uAbOk?: DeserializedType<T, 'Edm.String'> | null;
  uCorBwFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uCorBwToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uTestbeleg?: DeserializedType<T, 'Edm.String'> | null;
  uArtikelDetail?: DeserializedType<T, 'Edm.String'> | null;
  uIntern?: DeserializedType<T, 'Edm.String'> | null;
  uKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  uProvBest?: DeserializedType<T, 'Edm.String'> | null;
  uAv?: DeserializedType<T, 'Edm.String'> | null;
  uQm?: DeserializedType<T, 'Edm.String'> | null;
  uFertStand?: DeserializedType<T, 'Edm.String'> | null;
  uRahmenvertrag?: DeserializedType<T, 'Edm.Int32'> | null;
  uRahmenvertragsNr?: DeserializedType<T, 'Edm.Int32'> | null;
  uEingegangen?: DeserializedType<T, 'Edm.String'> | null;
  uOppKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  uOppAbgabeart?: DeserializedType<T, 'Edm.String'> | null;
  uOppPreise?: DeserializedType<T, 'Edm.String'> | null;
  uEinvoice?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentApprovalRequests?: DocumentApprovalRequest<T>[] | null;
  documentLines?: DocumentLine<T>[] | null;
  eWayBillDetails?: EWayBillDetails<T> | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  documentAdditionalExpenses?: DocumentAdditionalExpense<T>[] | null;
  documentDistributedExpenses?: DocumentDistributedExpense<T>[] | null;
  withholdingTaxDataWtxCollection?: WithholdingTaxDataWtx<T>[] | null;
  withholdingTaxDataCollection?: WithholdingTaxData<T>[] | null;
  documentPackages?: DocumentPackage<T>[] | null;
  documentSpecialLines?: DocumentSpecialLine<T>[] | null;
  documentInstallments?: DocumentInstallment<T>[] | null;
  downPaymentsToDraw?: DownPaymentToDraw<T>[] | null;
  taxExtension?: TaxExtension<T> | null;
  addressExtension?: AddressExtension<T> | null;
  documentReferences?: DocumentReference<T>[] | null;
  baseType?: DeserializedType<T, 'Edm.Int32'> | null;
  baseEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  indFinal?: BoYesNoEnum | null;
  soiWizardId?: DeserializedType<T, 'Edm.Int32'> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  currency?: CurrenciesType<T> | null;
  paymentTermsType?: PaymentTermsTypesType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  shippingType?: ShippingTypesType<T> | null;
  factoringIndicator?: FactoringIndicatorsType<T> | null;
  user?: UsersType<T> | null;
  journalEntry?: JournalEntriesType<T> | null;
  forms1099?: Forms1099Type<T> | null;
  wizardPaymentMethod?: WizardPaymentMethodsType<T> | null;
  paymentBlock2?: PaymentBlocksType<T> | null;
  project2?: ProjectsType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  country?: CountriesType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
  userLanguage?: UserLanguagesType<T> | null;
  nfModel?: NfModelsType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  taxWebSite?: TaxWebSitesType<T> | null;
  branch?: BranchesType<T> | null;
  department?: DepartmentsType<T> | null;
  posDailySummary?: PosDailySummaryType<T> | null;
}
