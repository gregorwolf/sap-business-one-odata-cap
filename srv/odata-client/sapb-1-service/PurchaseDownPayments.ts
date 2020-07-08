/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseDownPaymentsRequestBuilder } from './PurchaseDownPaymentsRequestBuilder';
import { Moment } from 'moment';
import { DocumentApprovalRequest, DocumentApprovalRequestField } from './DocumentApprovalRequest';
import { DocumentLine, DocumentLineField } from './DocumentLine';
import { DocumentAdditionalExpense, DocumentAdditionalExpenseField } from './DocumentAdditionalExpense';
import { WithholdingTaxDataWtx, WithholdingTaxDataWtxField } from './WithholdingTaxDataWtx';
import { WithholdingTaxData, WithholdingTaxDataField } from './WithholdingTaxData';
import { DocumentPackage, DocumentPackageField } from './DocumentPackage';
import { DocumentSpecialLine, DocumentSpecialLineField } from './DocumentSpecialLine';
import { DocumentInstallment, DocumentInstallmentField } from './DocumentInstallment';
import { DownPaymentToDraw, DownPaymentToDrawField } from './DownPaymentToDraw';
import { TaxExtension, TaxExtensionField } from './TaxExtension';
import { AddressExtension, AddressExtensionField } from './AddressExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "PurchaseDownPayments" of service "SAPB1".
 */
export class PurchaseDownPayments extends Entity implements PurchaseDownPaymentsType {
  /**
   * Technical entity name for PurchaseDownPayments.
   */
  static _entityName = 'PurchaseDownPayments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PurchaseDownPayments.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `PurchaseDownPayments`.
   * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
   */
  static builder(): EntityBuilderType<PurchaseDownPayments, PurchaseDownPaymentsTypeForceMandatory> {
    return Entity.entityBuilder(PurchaseDownPayments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PurchaseDownPayments` entity type.
   * @returns A `PurchaseDownPayments` request builder.
   */
  static requestBuilder(): PurchaseDownPaymentsRequestBuilder {
    return new PurchaseDownPaymentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseDownPayments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
   */
  static customField(fieldName: string): CustomField<PurchaseDownPayments> {
    return Entity.customFieldSelector(fieldName, PurchaseDownPayments);
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

export interface PurchaseDownPaymentsType {
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

export interface PurchaseDownPaymentsTypeForceMandatory {
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

export namespace PurchaseDownPayments {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<PurchaseDownPayments> = new NumberField('DocEntry', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<PurchaseDownPayments> = new NumberField('DocNum', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<PurchaseDownPayments> = new DateField('DocDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<PurchaseDownPayments> = new DateField('DocDueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<PurchaseDownPayments> = new StringField('CardCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<PurchaseDownPayments> = new StringField('CardName', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<PurchaseDownPayments> = new StringField('Address', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<PurchaseDownPayments> = new StringField('NumAtCard', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<PurchaseDownPayments> = new NumberField('DocTotal', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<PurchaseDownPayments> = new NumberField('AttachmentEntry', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<PurchaseDownPayments> = new StringField('DocCurrency', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<PurchaseDownPayments> = new NumberField('DocRate', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<PurchaseDownPayments> = new StringField('Reference1', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<PurchaseDownPayments> = new StringField('Reference2', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<PurchaseDownPayments> = new StringField('Comments', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<PurchaseDownPayments> = new StringField('JournalMemo', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<PurchaseDownPayments> = new NumberField('PaymentGroupCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<PurchaseDownPayments> = new TimeField('DocTime', PurchaseDownPayments, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<PurchaseDownPayments> = new NumberField('SalesPersonCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<PurchaseDownPayments> = new NumberField('TransportationCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<PurchaseDownPayments> = new NumberField('ImportFileNum', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<PurchaseDownPayments> = new NumberField('ContactPersonCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<PurchaseDownPayments> = new NumberField('Series', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<PurchaseDownPayments> = new DateField('TaxDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<PurchaseDownPayments> = new StringField('ShipToCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<PurchaseDownPayments> = new StringField('Indicator', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<PurchaseDownPayments> = new StringField('FederalTaxID', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<PurchaseDownPayments> = new NumberField('DiscountPercent', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<PurchaseDownPayments> = new StringField('PaymentReference', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<PurchaseDownPayments> = new DateField('CreationDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<PurchaseDownPayments> = new DateField('UpdateDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<PurchaseDownPayments> = new NumberField('FinancialPeriod', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<PurchaseDownPayments> = new NumberField('TransNum', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<PurchaseDownPayments> = new NumberField('VatSum', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<PurchaseDownPayments> = new NumberField('VatSumSys', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<PurchaseDownPayments> = new NumberField('VatSumFc', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<PurchaseDownPayments> = new NumberField('DocTotalFc', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<PurchaseDownPayments> = new NumberField('DocTotalSys', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<PurchaseDownPayments> = new NumberField('Form1099', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<PurchaseDownPayments> = new StringField('Box1099', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<PurchaseDownPayments> = new DateField('RequriedDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<PurchaseDownPayments> = new DateField('CancelDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<PurchaseDownPayments> = new NumberField('Segment', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<PurchaseDownPayments> = new StringField('PaymentMethod', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<PurchaseDownPayments> = new NumberField('PaymentBlockEntry', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<PurchaseDownPayments> = new StringField('CentralBankIndicator', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<PurchaseDownPayments> = new StringField('Project', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<PurchaseDownPayments> = new DateField('ExemptionValidityDateFrom', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<PurchaseDownPayments> = new DateField('ExemptionValidityDateTo', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<PurchaseDownPayments> = new StringField('ExternalCorrectedDocNum', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<PurchaseDownPayments> = new NumberField('InternalCorrectedDocNum', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<PurchaseDownPayments> = new NumberField('NextCorrectingDocument', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<PurchaseDownPayments> = new StringField('TaxExemptionLetterNum', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<PurchaseDownPayments> = new NumberField('WTApplied', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<PurchaseDownPayments> = new NumberField('WTAppliedFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<PurchaseDownPayments> = new StringField('AgentCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<PurchaseDownPayments> = new NumberField('WTAppliedSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<PurchaseDownPayments> = new NumberField('TotalEqualizationTax', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<PurchaseDownPayments> = new NumberField('TotalEqualizationTaxFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<PurchaseDownPayments> = new NumberField('TotalEqualizationTaxSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<PurchaseDownPayments> = new NumberField('NumberOfInstallments', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('WTNonSubjectAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('WTNonSubjectAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('WTNonSubjectAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('WTExemptedAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('WTExemptedAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('WTExemptedAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('BaseAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('BaseAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('BaseAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('WTAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('WTAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('WTAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<PurchaseDownPayments> = new DateField('VatDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<PurchaseDownPayments> = new NumberField('DocumentsOwner', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<PurchaseDownPayments> = new StringField('FolioPrefixString', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<PurchaseDownPayments> = new NumberField('FolioNumber', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<PurchaseDownPayments> = new StringField('BPChannelCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<PurchaseDownPayments> = new NumberField('BPChannelContact', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<PurchaseDownPayments> = new StringField('Address2', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<PurchaseDownPayments> = new StringField('PeriodIndicator', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<PurchaseDownPayments> = new StringField('PayToCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<PurchaseDownPayments> = new StringField('ManualNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<PurchaseDownPayments> = new StringField('PayToBankCountry', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<PurchaseDownPayments> = new StringField('PayToBankCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<PurchaseDownPayments> = new StringField('PayToBankAccountNo', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<PurchaseDownPayments> = new StringField('PayToBankBranch', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<PurchaseDownPayments> = new NumberField('BPL_IDAssignedToInvoice', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<PurchaseDownPayments> = new NumberField('DownPayment', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<PurchaseDownPayments> = new NumberField('LanguageCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<PurchaseDownPayments> = new StringField('TrackingNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<PurchaseDownPayments> = new StringField('PickRemark', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<PurchaseDownPayments> = new DateField('ClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<PurchaseDownPayments> = new NumberField('SequenceCode', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<PurchaseDownPayments> = new NumberField('SequenceSerial', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<PurchaseDownPayments> = new StringField('SeriesString', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<PurchaseDownPayments> = new StringField('SubSeriesString', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<PurchaseDownPayments> = new StringField('SequenceModel', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<PurchaseDownPayments> = new NumberField('TotalDiscount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('DownPaymentAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<PurchaseDownPayments> = new NumberField('DownPaymentPercentage', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('DownPaymentAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('DownPaymentAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<PurchaseDownPayments> = new NumberField('VatPercent', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<PurchaseDownPayments> = new NumberField('ServiceGrossProfitPercent', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<PurchaseDownPayments> = new StringField('OpeningRemarks', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<PurchaseDownPayments> = new StringField('ClosingRemarks', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<PurchaseDownPayments> = new NumberField('RoundingDiffAmount', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('RoundingDiffAmountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('RoundingDiffAmountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<PurchaseDownPayments> = new StringField('SignatureInputMessage', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<PurchaseDownPayments> = new StringField('SignatureDigest', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<PurchaseDownPayments> = new StringField('CertificationNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<PurchaseDownPayments> = new NumberField('PrivateKeyVersion', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<PurchaseDownPayments> = new StringField('ControlAccount', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<PurchaseDownPayments> = new NumberField('GTSChecker', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<PurchaseDownPayments> = new NumberField('GTSPayee', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<PurchaseDownPayments> = new NumberField('ExtraMonth', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<PurchaseDownPayments> = new NumberField('ExtraDays', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<PurchaseDownPayments> = new NumberField('CashDiscountDateOffset', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<PurchaseDownPayments> = new NumberField('ETaxWebSite', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<PurchaseDownPayments> = new StringField('ETaxNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<PurchaseDownPayments> = new StringField('NTSApprovedNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<PurchaseDownPayments> = new NumberField('EDocSeries', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<PurchaseDownPayments> = new StringField('EDocNum', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<PurchaseDownPayments> = new NumberField('EDocExportFormat', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<PurchaseDownPayments> = new StringField('EDocErrorCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<PurchaseDownPayments> = new StringField('EDocErrorMessage', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<PurchaseDownPayments> = new NumberField('GroupSeries', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<PurchaseDownPayments> = new NumberField('GroupNumber', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<PurchaseDownPayments> = new StringField('POSEquipmentNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<PurchaseDownPayments> = new StringField('POSManufacturerSerialNumber', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<PurchaseDownPayments> = new NumberField('POSCashierNumber', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<PurchaseDownPayments> = new DateField('SpecifiedClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<PurchaseDownPayments> = new NumberField('TotalDiscountFC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<PurchaseDownPayments> = new NumberField('TotalDiscountSC', PurchaseDownPayments, 'Edm.Double');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<PurchaseDownPayments> = new StringField('BPLName', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<PurchaseDownPayments> = new StringField('VATRegNum', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<PurchaseDownPayments> = new NumberField('AnnualInvoiceDeclarationReference', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<PurchaseDownPayments> = new StringField('Supplier', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<PurchaseDownPayments> = new NumberField('Releaser', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<PurchaseDownPayments> = new NumberField('Receiver', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<PurchaseDownPayments> = new NumberField('BlanketAgreementNumber', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<PurchaseDownPayments> = new DateField('AssetValueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<PurchaseDownPayments> = new StringField('Requester', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<PurchaseDownPayments> = new StringField('RequesterName', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<PurchaseDownPayments> = new NumberField('RequesterBranch', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<PurchaseDownPayments> = new NumberField('RequesterDepartment', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<PurchaseDownPayments> = new StringField('RequesterEmail', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<PurchaseDownPayments> = new NumberField('ReqType', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<PurchaseDownPayments> = new StringField('AuthorizationCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<PurchaseDownPayments> = new DateField('StartDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<PurchaseDownPayments> = new TimeField('StartDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<PurchaseDownPayments> = new DateField('EndDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<PurchaseDownPayments> = new TimeField('EndDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<PurchaseDownPayments> = new StringField('VehiclePlate', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<PurchaseDownPayments> = new StringField('ATDocumentType', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<PurchaseDownPayments> = new StringField('ElecCommMessage', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<PurchaseDownPayments> = new StringField('FiscalDocNum', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<PurchaseDownPayments> = new NumberField('POSDailySummaryNo', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<PurchaseDownPayments> = new NumberField('POSReceiptNo', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<PurchaseDownPayments> = new StringField('PointOfIssueCode', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<PurchaseDownPayments> = new NumberField('FolioNumberFrom', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<PurchaseDownPayments> = new NumberField('FolioNumberTo', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<PurchaseDownPayments> = new NumberField('RelatedType', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<PurchaseDownPayments> = new NumberField('RelatedEntry', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<PurchaseDownPayments> = new StringField('DocumentTaxID', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<PurchaseDownPayments> = new DateField('DateOfReportingControlStatementVAT', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<PurchaseDownPayments> = new StringField('ReportingSectionControlStatementVAT', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<PurchaseDownPayments> = new NumberField('POS_CashRegister', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<PurchaseDownPayments> = new TimeField('UpdateTime', PurchaseDownPayments, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<PurchaseDownPayments> = new StringField('DownPaymentTrasactionID', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<PurchaseDownPayments> = new StringField('OriginalRefNo', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<PurchaseDownPayments> = new DateField('OriginalRefDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<PurchaseDownPayments> = new StringField('OriginalCreditOrDebitNo', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<PurchaseDownPayments> = new DateField('OriginalCreditOrDebitDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<PurchaseDownPayments> = new StringField('ECommerceOperator', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<PurchaseDownPayments> = new StringField('ECommerceGSTIN', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<PurchaseDownPayments> = new StringField('TaxInvoiceNo', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<PurchaseDownPayments> = new DateField('TaxInvoiceDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<PurchaseDownPayments> = new StringField('ShipFrom', PurchaseDownPayments, 'Edm.String');
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<PurchaseDownPayments> = new NumberField('IssuingReason', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<PurchaseDownPayments> = new CollectionField('Document_ApprovalRequests', PurchaseDownPayments, new DocumentApprovalRequestField('', PurchaseDownPayments));
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<PurchaseDownPayments> = new CollectionField('DocumentLines', PurchaseDownPayments, new DocumentLineField('', PurchaseDownPayments));
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<PurchaseDownPayments> = new CollectionField('DocumentAdditionalExpenses', PurchaseDownPayments, new DocumentAdditionalExpenseField('', PurchaseDownPayments));
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PurchaseDownPayments> = new CollectionField('WithholdingTaxDataWTXCollection', PurchaseDownPayments, new WithholdingTaxDataWtxField('', PurchaseDownPayments));
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<PurchaseDownPayments> = new CollectionField('WithholdingTaxDataCollection', PurchaseDownPayments, new WithholdingTaxDataField('', PurchaseDownPayments));
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<PurchaseDownPayments> = new CollectionField('DocumentPackages', PurchaseDownPayments, new DocumentPackageField('', PurchaseDownPayments));
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<PurchaseDownPayments> = new CollectionField('DocumentSpecialLines', PurchaseDownPayments, new DocumentSpecialLineField('', PurchaseDownPayments));
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<PurchaseDownPayments> = new CollectionField('DocumentInstallments', PurchaseDownPayments, new DocumentInstallmentField('', PurchaseDownPayments));
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<PurchaseDownPayments> = new CollectionField('DownPaymentsToDraw', PurchaseDownPayments, new DownPaymentToDrawField('', PurchaseDownPayments));
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<PurchaseDownPayments> = new TaxExtensionField('TaxExtension', PurchaseDownPayments);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<PurchaseDownPayments> = new AddressExtensionField('AddressExtension', PurchaseDownPayments);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<PurchaseDownPayments> = new NumberField('SOIWizardId', PurchaseDownPayments, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<PurchaseDownPayments, BusinessPartners> = new OneToOneLink('BusinessPartner', PurchaseDownPayments, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<PurchaseDownPayments, Currencies> = new OneToOneLink('Currency', PurchaseDownPayments, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<PurchaseDownPayments, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', PurchaseDownPayments, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<PurchaseDownPayments, SalesPersons> = new OneToOneLink('SalesPerson', PurchaseDownPayments, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<PurchaseDownPayments, ShippingTypes> = new OneToOneLink('ShippingType', PurchaseDownPayments, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<PurchaseDownPayments, FactoringIndicators> = new OneToOneLink('FactoringIndicator', PurchaseDownPayments, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<PurchaseDownPayments, JournalEntries> = new OneToOneLink('JournalEntry', PurchaseDownPayments, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<PurchaseDownPayments, Forms1099> = new OneToOneLink('Forms1099', PurchaseDownPayments, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<PurchaseDownPayments, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', PurchaseDownPayments, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<PurchaseDownPayments, PaymentBlocks> = new OneToOneLink('PaymentBlock2', PurchaseDownPayments, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<PurchaseDownPayments, Projects> = new OneToOneLink('Project2', PurchaseDownPayments, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<PurchaseDownPayments, EmployeesInfo> = new OneToOneLink('EmployeeInfo', PurchaseDownPayments, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<PurchaseDownPayments, Countries> = new OneToOneLink('Country', PurchaseDownPayments, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<PurchaseDownPayments, BusinessPlaces> = new OneToOneLink('BusinessPlace', PurchaseDownPayments, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<PurchaseDownPayments, UserLanguages> = new OneToOneLink('UserLanguage', PurchaseDownPayments, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<PurchaseDownPayments, NfModels> = new OneToOneLink('NFModel', PurchaseDownPayments, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<PurchaseDownPayments, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', PurchaseDownPayments, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<PurchaseDownPayments, TaxWebSites> = new OneToOneLink('TaxWebSite', PurchaseDownPayments, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<PurchaseDownPayments, Branches> = new OneToOneLink('Branch', PurchaseDownPayments, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<PurchaseDownPayments, Departments> = new OneToOneLink('Department', PurchaseDownPayments, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<PurchaseDownPayments, PosDailySummary> = new OneToOneLink('POSDailySummary', PurchaseDownPayments, PosDailySummary);
  /**
   * All fields of the PurchaseDownPayments entity.
   */
  export const _allFields: Array<NumberField<PurchaseDownPayments> | DateField<PurchaseDownPayments> | StringField<PurchaseDownPayments> | TimeField<PurchaseDownPayments> | CollectionField<PurchaseDownPayments> | TaxExtensionField<PurchaseDownPayments> | AddressExtensionField<PurchaseDownPayments> | OneToOneLink<PurchaseDownPayments, BusinessPartners> | OneToOneLink<PurchaseDownPayments, Currencies> | OneToOneLink<PurchaseDownPayments, PaymentTermsTypes> | OneToOneLink<PurchaseDownPayments, SalesPersons> | OneToOneLink<PurchaseDownPayments, ShippingTypes> | OneToOneLink<PurchaseDownPayments, FactoringIndicators> | OneToOneLink<PurchaseDownPayments, JournalEntries> | OneToOneLink<PurchaseDownPayments, Forms1099> | OneToOneLink<PurchaseDownPayments, WizardPaymentMethods> | OneToOneLink<PurchaseDownPayments, PaymentBlocks> | OneToOneLink<PurchaseDownPayments, Projects> | OneToOneLink<PurchaseDownPayments, EmployeesInfo> | OneToOneLink<PurchaseDownPayments, Countries> | OneToOneLink<PurchaseDownPayments, BusinessPlaces> | OneToOneLink<PurchaseDownPayments, UserLanguages> | OneToOneLink<PurchaseDownPayments, NfModels> | OneToOneLink<PurchaseDownPayments, ChartOfAccounts> | OneToOneLink<PurchaseDownPayments, TaxWebSites> | OneToOneLink<PurchaseDownPayments, Branches> | OneToOneLink<PurchaseDownPayments, Departments> | OneToOneLink<PurchaseDownPayments, PosDailySummary>> = [
    PurchaseDownPayments.DOC_ENTRY,
    PurchaseDownPayments.DOC_NUM,
    PurchaseDownPayments.DOC_DATE,
    PurchaseDownPayments.DOC_DUE_DATE,
    PurchaseDownPayments.CARD_CODE,
    PurchaseDownPayments.CARD_NAME,
    PurchaseDownPayments.ADDRESS,
    PurchaseDownPayments.NUM_AT_CARD,
    PurchaseDownPayments.DOC_TOTAL,
    PurchaseDownPayments.ATTACHMENT_ENTRY,
    PurchaseDownPayments.DOC_CURRENCY,
    PurchaseDownPayments.DOC_RATE,
    PurchaseDownPayments.REFERENCE_1,
    PurchaseDownPayments.REFERENCE_2,
    PurchaseDownPayments.COMMENTS,
    PurchaseDownPayments.JOURNAL_MEMO,
    PurchaseDownPayments.PAYMENT_GROUP_CODE,
    PurchaseDownPayments.DOC_TIME,
    PurchaseDownPayments.SALES_PERSON_CODE,
    PurchaseDownPayments.TRANSPORTATION_CODE,
    PurchaseDownPayments.IMPORT_FILE_NUM,
    PurchaseDownPayments.CONTACT_PERSON_CODE,
    PurchaseDownPayments.SERIES,
    PurchaseDownPayments.TAX_DATE,
    PurchaseDownPayments.SHIP_TO_CODE,
    PurchaseDownPayments.INDICATOR,
    PurchaseDownPayments.FEDERAL_TAX_ID,
    PurchaseDownPayments.DISCOUNT_PERCENT,
    PurchaseDownPayments.PAYMENT_REFERENCE,
    PurchaseDownPayments.CREATION_DATE,
    PurchaseDownPayments.UPDATE_DATE,
    PurchaseDownPayments.FINANCIAL_PERIOD,
    PurchaseDownPayments.TRANS_NUM,
    PurchaseDownPayments.VAT_SUM,
    PurchaseDownPayments.VAT_SUM_SYS,
    PurchaseDownPayments.VAT_SUM_FC,
    PurchaseDownPayments.DOC_TOTAL_FC,
    PurchaseDownPayments.DOC_TOTAL_SYS,
    PurchaseDownPayments.FORM_1099,
    PurchaseDownPayments.BOX_1099,
    PurchaseDownPayments.REQURIED_DATE,
    PurchaseDownPayments.CANCEL_DATE,
    PurchaseDownPayments.SEGMENT,
    PurchaseDownPayments.PAYMENT_METHOD,
    PurchaseDownPayments.PAYMENT_BLOCK_ENTRY,
    PurchaseDownPayments.CENTRAL_BANK_INDICATOR,
    PurchaseDownPayments.PROJECT,
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_FROM,
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_TO,
    PurchaseDownPayments.EXTERNAL_CORRECTED_DOC_NUM,
    PurchaseDownPayments.INTERNAL_CORRECTED_DOC_NUM,
    PurchaseDownPayments.NEXT_CORRECTING_DOCUMENT,
    PurchaseDownPayments.TAX_EXEMPTION_LETTER_NUM,
    PurchaseDownPayments.WT_APPLIED,
    PurchaseDownPayments.WT_APPLIED_FC,
    PurchaseDownPayments.AGENT_CODE,
    PurchaseDownPayments.WT_APPLIED_SC,
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX,
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_FC,
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_SC,
    PurchaseDownPayments.NUMBER_OF_INSTALLMENTS,
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT,
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_SC,
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_FC,
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT,
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_SC,
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_FC,
    PurchaseDownPayments.BASE_AMOUNT,
    PurchaseDownPayments.BASE_AMOUNT_SC,
    PurchaseDownPayments.BASE_AMOUNT_FC,
    PurchaseDownPayments.WT_AMOUNT,
    PurchaseDownPayments.WT_AMOUNT_SC,
    PurchaseDownPayments.WT_AMOUNT_FC,
    PurchaseDownPayments.VAT_DATE,
    PurchaseDownPayments.DOCUMENTS_OWNER,
    PurchaseDownPayments.FOLIO_PREFIX_STRING,
    PurchaseDownPayments.FOLIO_NUMBER,
    PurchaseDownPayments.BP_CHANNEL_CODE,
    PurchaseDownPayments.BP_CHANNEL_CONTACT,
    PurchaseDownPayments.ADDRESS_2,
    PurchaseDownPayments.PERIOD_INDICATOR,
    PurchaseDownPayments.PAY_TO_CODE,
    PurchaseDownPayments.MANUAL_NUMBER,
    PurchaseDownPayments.PAY_TO_BANK_COUNTRY,
    PurchaseDownPayments.PAY_TO_BANK_CODE,
    PurchaseDownPayments.PAY_TO_BANK_ACCOUNT_NO,
    PurchaseDownPayments.PAY_TO_BANK_BRANCH,
    PurchaseDownPayments.BPL_ID_ASSIGNED_TO_INVOICE,
    PurchaseDownPayments.DOWN_PAYMENT,
    PurchaseDownPayments.LANGUAGE_CODE,
    PurchaseDownPayments.TRACKING_NUMBER,
    PurchaseDownPayments.PICK_REMARK,
    PurchaseDownPayments.CLOSING_DATE,
    PurchaseDownPayments.SEQUENCE_CODE,
    PurchaseDownPayments.SEQUENCE_SERIAL,
    PurchaseDownPayments.SERIES_STRING,
    PurchaseDownPayments.SUB_SERIES_STRING,
    PurchaseDownPayments.SEQUENCE_MODEL,
    PurchaseDownPayments.TOTAL_DISCOUNT,
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT,
    PurchaseDownPayments.DOWN_PAYMENT_PERCENTAGE,
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_SC,
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_FC,
    PurchaseDownPayments.VAT_PERCENT,
    PurchaseDownPayments.SERVICE_GROSS_PROFIT_PERCENT,
    PurchaseDownPayments.OPENING_REMARKS,
    PurchaseDownPayments.CLOSING_REMARKS,
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT,
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_FC,
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_SC,
    PurchaseDownPayments.SIGNATURE_INPUT_MESSAGE,
    PurchaseDownPayments.SIGNATURE_DIGEST,
    PurchaseDownPayments.CERTIFICATION_NUMBER,
    PurchaseDownPayments.PRIVATE_KEY_VERSION,
    PurchaseDownPayments.CONTROL_ACCOUNT,
    PurchaseDownPayments.GTS_CHECKER,
    PurchaseDownPayments.GTS_PAYEE,
    PurchaseDownPayments.EXTRA_MONTH,
    PurchaseDownPayments.EXTRA_DAYS,
    PurchaseDownPayments.CASH_DISCOUNT_DATE_OFFSET,
    PurchaseDownPayments.E_TAX_WEB_SITE,
    PurchaseDownPayments.E_TAX_NUMBER,
    PurchaseDownPayments.NTS_APPROVED_NUMBER,
    PurchaseDownPayments.E_DOC_SERIES,
    PurchaseDownPayments.E_DOC_NUM,
    PurchaseDownPayments.E_DOC_EXPORT_FORMAT,
    PurchaseDownPayments.E_DOC_ERROR_CODE,
    PurchaseDownPayments.E_DOC_ERROR_MESSAGE,
    PurchaseDownPayments.GROUP_SERIES,
    PurchaseDownPayments.GROUP_NUMBER,
    PurchaseDownPayments.POS_EQUIPMENT_NUMBER,
    PurchaseDownPayments.POS_MANUFACTURER_SERIAL_NUMBER,
    PurchaseDownPayments.POS_CASHIER_NUMBER,
    PurchaseDownPayments.SPECIFIED_CLOSING_DATE,
    PurchaseDownPayments.TOTAL_DISCOUNT_FC,
    PurchaseDownPayments.TOTAL_DISCOUNT_SC,
    PurchaseDownPayments.BPL_NAME,
    PurchaseDownPayments.VAT_REG_NUM,
    PurchaseDownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    PurchaseDownPayments.SUPPLIER,
    PurchaseDownPayments.RELEASER,
    PurchaseDownPayments.RECEIVER,
    PurchaseDownPayments.BLANKET_AGREEMENT_NUMBER,
    PurchaseDownPayments.ASSET_VALUE_DATE,
    PurchaseDownPayments.REQUESTER,
    PurchaseDownPayments.REQUESTER_NAME,
    PurchaseDownPayments.REQUESTER_BRANCH,
    PurchaseDownPayments.REQUESTER_DEPARTMENT,
    PurchaseDownPayments.REQUESTER_EMAIL,
    PurchaseDownPayments.REQ_TYPE,
    PurchaseDownPayments.AUTHORIZATION_CODE,
    PurchaseDownPayments.START_DELIVERY_DATE,
    PurchaseDownPayments.START_DELIVERY_TIME,
    PurchaseDownPayments.END_DELIVERY_DATE,
    PurchaseDownPayments.END_DELIVERY_TIME,
    PurchaseDownPayments.VEHICLE_PLATE,
    PurchaseDownPayments.AT_DOCUMENT_TYPE,
    PurchaseDownPayments.ELEC_COMM_MESSAGE,
    PurchaseDownPayments.FISCAL_DOC_NUM,
    PurchaseDownPayments.POS_DAILY_SUMMARY_NO,
    PurchaseDownPayments.POS_RECEIPT_NO,
    PurchaseDownPayments.POINT_OF_ISSUE_CODE,
    PurchaseDownPayments.FOLIO_NUMBER_FROM,
    PurchaseDownPayments.FOLIO_NUMBER_TO,
    PurchaseDownPayments.RELATED_TYPE,
    PurchaseDownPayments.RELATED_ENTRY,
    PurchaseDownPayments.DOCUMENT_TAX_ID,
    PurchaseDownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    PurchaseDownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    PurchaseDownPayments.POS_CASH_REGISTER,
    PurchaseDownPayments.UPDATE_TIME,
    PurchaseDownPayments.DOWN_PAYMENT_TRASACTION_ID,
    PurchaseDownPayments.ORIGINAL_REF_NO,
    PurchaseDownPayments.ORIGINAL_REF_DATE,
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO,
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    PurchaseDownPayments.E_COMMERCE_OPERATOR,
    PurchaseDownPayments.E_COMMERCE_GSTIN,
    PurchaseDownPayments.TAX_INVOICE_NO,
    PurchaseDownPayments.TAX_INVOICE_DATE,
    PurchaseDownPayments.SHIP_FROM,
    PurchaseDownPayments.ISSUING_REASON,
    PurchaseDownPayments.DOCUMENT_APPROVAL_REQUESTS,
    PurchaseDownPayments.DOCUMENT_LINES,
    PurchaseDownPayments.DOCUMENT_ADDITIONAL_EXPENSES,
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_COLLECTION,
    PurchaseDownPayments.DOCUMENT_PACKAGES,
    PurchaseDownPayments.DOCUMENT_SPECIAL_LINES,
    PurchaseDownPayments.DOCUMENT_INSTALLMENTS,
    PurchaseDownPayments.DOWN_PAYMENTS_TO_DRAW,
    PurchaseDownPayments.TAX_EXTENSION,
    PurchaseDownPayments.ADDRESS_EXTENSION,
    PurchaseDownPayments.SOI_WIZARD_ID,
    PurchaseDownPayments.BUSINESS_PARTNER,
    PurchaseDownPayments.CURRENCY,
    PurchaseDownPayments.PAYMENT_TERMS_TYPE,
    PurchaseDownPayments.SALES_PERSON,
    PurchaseDownPayments.SHIPPING_TYPE,
    PurchaseDownPayments.FACTORING_INDICATOR,
    PurchaseDownPayments.JOURNAL_ENTRY,
    PurchaseDownPayments.FORMS_1099,
    PurchaseDownPayments.WIZARD_PAYMENT_METHOD,
    PurchaseDownPayments.PAYMENT_BLOCK_2,
    PurchaseDownPayments.PROJECT_2,
    PurchaseDownPayments.EMPLOYEE_INFO,
    PurchaseDownPayments.COUNTRY,
    PurchaseDownPayments.BUSINESS_PLACE,
    PurchaseDownPayments.USER_LANGUAGE,
    PurchaseDownPayments.NF_MODEL,
    PurchaseDownPayments.CHART_OF_ACCOUNT,
    PurchaseDownPayments.TAX_WEB_SITE,
    PurchaseDownPayments.BRANCH,
    PurchaseDownPayments.DEPARTMENT,
    PurchaseDownPayments.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PurchaseDownPayments> = new AllFields('*', PurchaseDownPayments);
  /**
   * All key fields of the PurchaseDownPayments entity.
   */
  export const _keyFields: Array<Field<PurchaseDownPayments>> = [PurchaseDownPayments.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PurchaseDownPayments.
   */
  export const _keys: { [keys: string]: Field<PurchaseDownPayments> } = PurchaseDownPayments._keyFields.reduce((acc: { [keys: string]: Field<PurchaseDownPayments> }, field: Field<PurchaseDownPayments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
