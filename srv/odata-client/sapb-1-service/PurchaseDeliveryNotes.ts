/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseDeliveryNotesRequestBuilder } from './PurchaseDeliveryNotesRequestBuilder';
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
 * This class represents the entity "PurchaseDeliveryNotes" of service "SAPB1".
 */
export class PurchaseDeliveryNotes extends Entity implements PurchaseDeliveryNotesType {
  /**
   * Technical entity name for PurchaseDeliveryNotes.
   */
  static _entityName = 'PurchaseDeliveryNotes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PurchaseDeliveryNotes.
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
   * One-to-one navigation property to the [[LandedCosts]] entity.
   */
  landedCost!: LandedCosts;
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
   * Returns an entity builder to construct instances `PurchaseDeliveryNotes`.
   * @returns A builder that constructs instances of entity type `PurchaseDeliveryNotes`.
   */
  static builder(): EntityBuilderType<PurchaseDeliveryNotes, PurchaseDeliveryNotesTypeForceMandatory> {
    return Entity.entityBuilder(PurchaseDeliveryNotes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PurchaseDeliveryNotes` entity type.
   * @returns A `PurchaseDeliveryNotes` request builder.
   */
  static requestBuilder(): PurchaseDeliveryNotesRequestBuilder {
    return new PurchaseDeliveryNotesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseDeliveryNotes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PurchaseDeliveryNotes`.
   */
  static customField(fieldName: string): CustomField<PurchaseDeliveryNotes> {
    return Entity.customFieldSelector(fieldName, PurchaseDeliveryNotes);
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
import { LandedCosts, LandedCostsType } from './LandedCosts';
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

export interface PurchaseDeliveryNotesType {
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
  landedCost: LandedCostsType;
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

export interface PurchaseDeliveryNotesTypeForceMandatory {
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
  landedCost: LandedCostsType;
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

export namespace PurchaseDeliveryNotes {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<PurchaseDeliveryNotes> = new NumberField('DocEntry', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<PurchaseDeliveryNotes> = new NumberField('DocNum', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<PurchaseDeliveryNotes> = new DateField('DocDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<PurchaseDeliveryNotes> = new DateField('DocDueDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<PurchaseDeliveryNotes> = new StringField('CardCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<PurchaseDeliveryNotes> = new StringField('CardName', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<PurchaseDeliveryNotes> = new StringField('Address', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<PurchaseDeliveryNotes> = new StringField('NumAtCard', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<PurchaseDeliveryNotes> = new NumberField('DocTotal', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<PurchaseDeliveryNotes> = new NumberField('AttachmentEntry', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<PurchaseDeliveryNotes> = new StringField('DocCurrency', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<PurchaseDeliveryNotes> = new NumberField('DocRate', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<PurchaseDeliveryNotes> = new StringField('Reference1', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<PurchaseDeliveryNotes> = new StringField('Reference2', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<PurchaseDeliveryNotes> = new StringField('Comments', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<PurchaseDeliveryNotes> = new StringField('JournalMemo', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('PaymentGroupCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<PurchaseDeliveryNotes> = new TimeField('DocTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('SalesPersonCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('TransportationCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<PurchaseDeliveryNotes> = new NumberField('ImportFileNum', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('ContactPersonCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<PurchaseDeliveryNotes> = new NumberField('Series', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<PurchaseDeliveryNotes> = new DateField('TaxDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<PurchaseDeliveryNotes> = new StringField('ShipToCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<PurchaseDeliveryNotes> = new StringField('Indicator', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<PurchaseDeliveryNotes> = new StringField('FederalTaxID', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<PurchaseDeliveryNotes> = new NumberField('DiscountPercent', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<PurchaseDeliveryNotes> = new StringField('PaymentReference', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<PurchaseDeliveryNotes> = new DateField('CreationDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<PurchaseDeliveryNotes> = new DateField('UpdateDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<PurchaseDeliveryNotes> = new NumberField('FinancialPeriod', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<PurchaseDeliveryNotes> = new NumberField('TransNum', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<PurchaseDeliveryNotes> = new NumberField('VatSum', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<PurchaseDeliveryNotes> = new NumberField('VatSumSys', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('VatSumFc', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('DocTotalFc', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<PurchaseDeliveryNotes> = new NumberField('DocTotalSys', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<PurchaseDeliveryNotes> = new NumberField('Form1099', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<PurchaseDeliveryNotes> = new StringField('Box1099', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<PurchaseDeliveryNotes> = new DateField('RequriedDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<PurchaseDeliveryNotes> = new DateField('CancelDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<PurchaseDeliveryNotes> = new NumberField('Segment', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<PurchaseDeliveryNotes> = new StringField('PaymentMethod', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<PurchaseDeliveryNotes> = new NumberField('PaymentBlockEntry', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<PurchaseDeliveryNotes> = new StringField('CentralBankIndicator', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<PurchaseDeliveryNotes> = new StringField('Project', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<PurchaseDeliveryNotes> = new DateField('ExemptionValidityDateFrom', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<PurchaseDeliveryNotes> = new DateField('ExemptionValidityDateTo', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<PurchaseDeliveryNotes> = new StringField('ExternalCorrectedDocNum', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<PurchaseDeliveryNotes> = new NumberField('InternalCorrectedDocNum', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<PurchaseDeliveryNotes> = new NumberField('NextCorrectingDocument', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<PurchaseDeliveryNotes> = new StringField('TaxExemptionLetterNum', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<PurchaseDeliveryNotes> = new NumberField('WTApplied', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTAppliedFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<PurchaseDeliveryNotes> = new StringField('AgentCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTAppliedSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalEqualizationTax', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalEqualizationTaxFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalEqualizationTaxSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<PurchaseDeliveryNotes> = new NumberField('NumberOfInstallments', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('WTNonSubjectAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTNonSubjectAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTNonSubjectAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('WTExemptedAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTExemptedAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTExemptedAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('BaseAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('BaseAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('BaseAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('WTAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('WTAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<PurchaseDeliveryNotes> = new DateField('VatDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<PurchaseDeliveryNotes> = new NumberField('DocumentsOwner', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<PurchaseDeliveryNotes> = new StringField('FolioPrefixString', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<PurchaseDeliveryNotes> = new NumberField('FolioNumber', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<PurchaseDeliveryNotes> = new StringField('BPChannelCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<PurchaseDeliveryNotes> = new NumberField('BPChannelContact', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<PurchaseDeliveryNotes> = new StringField('Address2', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<PurchaseDeliveryNotes> = new StringField('PeriodIndicator', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<PurchaseDeliveryNotes> = new StringField('PayToCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('ManualNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<PurchaseDeliveryNotes> = new StringField('PayToBankCountry', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<PurchaseDeliveryNotes> = new StringField('PayToBankCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<PurchaseDeliveryNotes> = new StringField('PayToBankAccountNo', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<PurchaseDeliveryNotes> = new StringField('PayToBankBranch', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<PurchaseDeliveryNotes> = new NumberField('BPL_IDAssignedToInvoice', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<PurchaseDeliveryNotes> = new NumberField('DownPayment', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('LanguageCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('TrackingNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<PurchaseDeliveryNotes> = new StringField('PickRemark', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<PurchaseDeliveryNotes> = new DateField('ClosingDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<PurchaseDeliveryNotes> = new NumberField('SequenceCode', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<PurchaseDeliveryNotes> = new NumberField('SequenceSerial', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<PurchaseDeliveryNotes> = new StringField('SeriesString', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<PurchaseDeliveryNotes> = new StringField('SubSeriesString', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<PurchaseDeliveryNotes> = new StringField('SequenceModel', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalDiscount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('DownPaymentAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<PurchaseDeliveryNotes> = new NumberField('DownPaymentPercentage', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('DownPaymentAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('DownPaymentAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<PurchaseDeliveryNotes> = new NumberField('VatPercent', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<PurchaseDeliveryNotes> = new NumberField('ServiceGrossProfitPercent', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<PurchaseDeliveryNotes> = new StringField('OpeningRemarks', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<PurchaseDeliveryNotes> = new StringField('ClosingRemarks', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<PurchaseDeliveryNotes> = new NumberField('RoundingDiffAmount', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('RoundingDiffAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('RoundingDiffAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<PurchaseDeliveryNotes> = new StringField('SignatureInputMessage', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<PurchaseDeliveryNotes> = new StringField('SignatureDigest', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('CertificationNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<PurchaseDeliveryNotes> = new NumberField('PrivateKeyVersion', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<PurchaseDeliveryNotes> = new StringField('ControlAccount', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<PurchaseDeliveryNotes> = new NumberField('GTSChecker', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<PurchaseDeliveryNotes> = new NumberField('GTSPayee', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<PurchaseDeliveryNotes> = new NumberField('ExtraMonth', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<PurchaseDeliveryNotes> = new NumberField('ExtraDays', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<PurchaseDeliveryNotes> = new NumberField('CashDiscountDateOffset', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<PurchaseDeliveryNotes> = new NumberField('ETaxWebSite', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('ETaxNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('NTSApprovedNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<PurchaseDeliveryNotes> = new NumberField('EDocSeries', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<PurchaseDeliveryNotes> = new StringField('EDocNum', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<PurchaseDeliveryNotes> = new NumberField('EDocExportFormat', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<PurchaseDeliveryNotes> = new StringField('EDocErrorCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<PurchaseDeliveryNotes> = new StringField('EDocErrorMessage', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<PurchaseDeliveryNotes> = new NumberField('GroupSeries', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<PurchaseDeliveryNotes> = new NumberField('GroupNumber', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('POSEquipmentNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<PurchaseDeliveryNotes> = new StringField('POSManufacturerSerialNumber', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<PurchaseDeliveryNotes> = new NumberField('POSCashierNumber', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<PurchaseDeliveryNotes> = new DateField('SpecifiedClosingDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalDiscountFC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<PurchaseDeliveryNotes> = new NumberField('TotalDiscountSC', PurchaseDeliveryNotes, 'Edm.Double');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<PurchaseDeliveryNotes> = new StringField('BPLName', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<PurchaseDeliveryNotes> = new StringField('VATRegNum', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<PurchaseDeliveryNotes> = new NumberField('AnnualInvoiceDeclarationReference', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<PurchaseDeliveryNotes> = new StringField('Supplier', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<PurchaseDeliveryNotes> = new NumberField('Releaser', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<PurchaseDeliveryNotes> = new NumberField('Receiver', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<PurchaseDeliveryNotes> = new NumberField('BlanketAgreementNumber', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<PurchaseDeliveryNotes> = new DateField('AssetValueDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<PurchaseDeliveryNotes> = new StringField('Requester', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<PurchaseDeliveryNotes> = new StringField('RequesterName', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<PurchaseDeliveryNotes> = new NumberField('RequesterBranch', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<PurchaseDeliveryNotes> = new NumberField('RequesterDepartment', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<PurchaseDeliveryNotes> = new StringField('RequesterEmail', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<PurchaseDeliveryNotes> = new NumberField('ReqType', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<PurchaseDeliveryNotes> = new StringField('AuthorizationCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<PurchaseDeliveryNotes> = new DateField('StartDeliveryDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<PurchaseDeliveryNotes> = new TimeField('StartDeliveryTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<PurchaseDeliveryNotes> = new DateField('EndDeliveryDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<PurchaseDeliveryNotes> = new TimeField('EndDeliveryTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<PurchaseDeliveryNotes> = new StringField('VehiclePlate', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<PurchaseDeliveryNotes> = new StringField('ATDocumentType', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<PurchaseDeliveryNotes> = new StringField('ElecCommMessage', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<PurchaseDeliveryNotes> = new StringField('FiscalDocNum', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<PurchaseDeliveryNotes> = new NumberField('POSDailySummaryNo', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<PurchaseDeliveryNotes> = new NumberField('POSReceiptNo', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<PurchaseDeliveryNotes> = new StringField('PointOfIssueCode', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<PurchaseDeliveryNotes> = new NumberField('FolioNumberFrom', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<PurchaseDeliveryNotes> = new NumberField('FolioNumberTo', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<PurchaseDeliveryNotes> = new NumberField('RelatedType', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<PurchaseDeliveryNotes> = new NumberField('RelatedEntry', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<PurchaseDeliveryNotes> = new StringField('DocumentTaxID', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<PurchaseDeliveryNotes> = new DateField('DateOfReportingControlStatementVAT', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<PurchaseDeliveryNotes> = new StringField('ReportingSectionControlStatementVAT', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<PurchaseDeliveryNotes> = new NumberField('POS_CashRegister', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<PurchaseDeliveryNotes> = new TimeField('UpdateTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<PurchaseDeliveryNotes> = new StringField('DownPaymentTrasactionID', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<PurchaseDeliveryNotes> = new StringField('OriginalRefNo', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<PurchaseDeliveryNotes> = new DateField('OriginalRefDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<PurchaseDeliveryNotes> = new StringField('OriginalCreditOrDebitNo', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<PurchaseDeliveryNotes> = new DateField('OriginalCreditOrDebitDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<PurchaseDeliveryNotes> = new StringField('ECommerceOperator', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<PurchaseDeliveryNotes> = new StringField('ECommerceGSTIN', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<PurchaseDeliveryNotes> = new StringField('TaxInvoiceNo', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<PurchaseDeliveryNotes> = new DateField('TaxInvoiceDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<PurchaseDeliveryNotes> = new StringField('ShipFrom', PurchaseDeliveryNotes, 'Edm.String');
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<PurchaseDeliveryNotes> = new NumberField('IssuingReason', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<PurchaseDeliveryNotes> = new CollectionField('Document_ApprovalRequests', PurchaseDeliveryNotes, new DocumentApprovalRequestField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DocumentLines', PurchaseDeliveryNotes, new DocumentLineField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DocumentAdditionalExpenses', PurchaseDeliveryNotes, new DocumentAdditionalExpenseField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PurchaseDeliveryNotes> = new CollectionField('WithholdingTaxDataWTXCollection', PurchaseDeliveryNotes, new WithholdingTaxDataWtxField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<PurchaseDeliveryNotes> = new CollectionField('WithholdingTaxDataCollection', PurchaseDeliveryNotes, new WithholdingTaxDataField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DocumentPackages', PurchaseDeliveryNotes, new DocumentPackageField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DocumentSpecialLines', PurchaseDeliveryNotes, new DocumentSpecialLineField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DocumentInstallments', PurchaseDeliveryNotes, new DocumentInstallmentField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<PurchaseDeliveryNotes> = new CollectionField('DownPaymentsToDraw', PurchaseDeliveryNotes, new DownPaymentToDrawField('', PurchaseDeliveryNotes));
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<PurchaseDeliveryNotes> = new TaxExtensionField('TaxExtension', PurchaseDeliveryNotes);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<PurchaseDeliveryNotes> = new AddressExtensionField('AddressExtension', PurchaseDeliveryNotes);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<PurchaseDeliveryNotes> = new NumberField('SOIWizardId', PurchaseDeliveryNotes, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<PurchaseDeliveryNotes, BusinessPartners> = new OneToOneLink('BusinessPartner', PurchaseDeliveryNotes, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<PurchaseDeliveryNotes, Currencies> = new OneToOneLink('Currency', PurchaseDeliveryNotes, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<PurchaseDeliveryNotes, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', PurchaseDeliveryNotes, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<PurchaseDeliveryNotes, SalesPersons> = new OneToOneLink('SalesPerson', PurchaseDeliveryNotes, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<PurchaseDeliveryNotes, ShippingTypes> = new OneToOneLink('ShippingType', PurchaseDeliveryNotes, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[landedCost]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COST: OneToOneLink<PurchaseDeliveryNotes, LandedCosts> = new OneToOneLink('LandedCost', PurchaseDeliveryNotes, LandedCosts);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<PurchaseDeliveryNotes, FactoringIndicators> = new OneToOneLink('FactoringIndicator', PurchaseDeliveryNotes, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<PurchaseDeliveryNotes, JournalEntries> = new OneToOneLink('JournalEntry', PurchaseDeliveryNotes, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<PurchaseDeliveryNotes, Forms1099> = new OneToOneLink('Forms1099', PurchaseDeliveryNotes, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<PurchaseDeliveryNotes, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', PurchaseDeliveryNotes, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<PurchaseDeliveryNotes, PaymentBlocks> = new OneToOneLink('PaymentBlock2', PurchaseDeliveryNotes, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<PurchaseDeliveryNotes, Projects> = new OneToOneLink('Project2', PurchaseDeliveryNotes, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<PurchaseDeliveryNotes, EmployeesInfo> = new OneToOneLink('EmployeeInfo', PurchaseDeliveryNotes, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<PurchaseDeliveryNotes, Countries> = new OneToOneLink('Country', PurchaseDeliveryNotes, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<PurchaseDeliveryNotes, BusinessPlaces> = new OneToOneLink('BusinessPlace', PurchaseDeliveryNotes, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<PurchaseDeliveryNotes, UserLanguages> = new OneToOneLink('UserLanguage', PurchaseDeliveryNotes, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<PurchaseDeliveryNotes, NfModels> = new OneToOneLink('NFModel', PurchaseDeliveryNotes, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<PurchaseDeliveryNotes, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', PurchaseDeliveryNotes, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<PurchaseDeliveryNotes, TaxWebSites> = new OneToOneLink('TaxWebSite', PurchaseDeliveryNotes, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<PurchaseDeliveryNotes, Branches> = new OneToOneLink('Branch', PurchaseDeliveryNotes, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<PurchaseDeliveryNotes, Departments> = new OneToOneLink('Department', PurchaseDeliveryNotes, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<PurchaseDeliveryNotes, PosDailySummary> = new OneToOneLink('POSDailySummary', PurchaseDeliveryNotes, PosDailySummary);
  /**
   * All fields of the PurchaseDeliveryNotes entity.
   */
  export const _allFields: Array<NumberField<PurchaseDeliveryNotes> | DateField<PurchaseDeliveryNotes> | StringField<PurchaseDeliveryNotes> | TimeField<PurchaseDeliveryNotes> | CollectionField<PurchaseDeliveryNotes> | TaxExtensionField<PurchaseDeliveryNotes> | AddressExtensionField<PurchaseDeliveryNotes> | OneToOneLink<PurchaseDeliveryNotes, BusinessPartners> | OneToOneLink<PurchaseDeliveryNotes, Currencies> | OneToOneLink<PurchaseDeliveryNotes, PaymentTermsTypes> | OneToOneLink<PurchaseDeliveryNotes, SalesPersons> | OneToOneLink<PurchaseDeliveryNotes, ShippingTypes> | OneToOneLink<PurchaseDeliveryNotes, LandedCosts> | OneToOneLink<PurchaseDeliveryNotes, FactoringIndicators> | OneToOneLink<PurchaseDeliveryNotes, JournalEntries> | OneToOneLink<PurchaseDeliveryNotes, Forms1099> | OneToOneLink<PurchaseDeliveryNotes, WizardPaymentMethods> | OneToOneLink<PurchaseDeliveryNotes, PaymentBlocks> | OneToOneLink<PurchaseDeliveryNotes, Projects> | OneToOneLink<PurchaseDeliveryNotes, EmployeesInfo> | OneToOneLink<PurchaseDeliveryNotes, Countries> | OneToOneLink<PurchaseDeliveryNotes, BusinessPlaces> | OneToOneLink<PurchaseDeliveryNotes, UserLanguages> | OneToOneLink<PurchaseDeliveryNotes, NfModels> | OneToOneLink<PurchaseDeliveryNotes, ChartOfAccounts> | OneToOneLink<PurchaseDeliveryNotes, TaxWebSites> | OneToOneLink<PurchaseDeliveryNotes, Branches> | OneToOneLink<PurchaseDeliveryNotes, Departments> | OneToOneLink<PurchaseDeliveryNotes, PosDailySummary>> = [
    PurchaseDeliveryNotes.DOC_ENTRY,
    PurchaseDeliveryNotes.DOC_NUM,
    PurchaseDeliveryNotes.DOC_DATE,
    PurchaseDeliveryNotes.DOC_DUE_DATE,
    PurchaseDeliveryNotes.CARD_CODE,
    PurchaseDeliveryNotes.CARD_NAME,
    PurchaseDeliveryNotes.ADDRESS,
    PurchaseDeliveryNotes.NUM_AT_CARD,
    PurchaseDeliveryNotes.DOC_TOTAL,
    PurchaseDeliveryNotes.ATTACHMENT_ENTRY,
    PurchaseDeliveryNotes.DOC_CURRENCY,
    PurchaseDeliveryNotes.DOC_RATE,
    PurchaseDeliveryNotes.REFERENCE_1,
    PurchaseDeliveryNotes.REFERENCE_2,
    PurchaseDeliveryNotes.COMMENTS,
    PurchaseDeliveryNotes.JOURNAL_MEMO,
    PurchaseDeliveryNotes.PAYMENT_GROUP_CODE,
    PurchaseDeliveryNotes.DOC_TIME,
    PurchaseDeliveryNotes.SALES_PERSON_CODE,
    PurchaseDeliveryNotes.TRANSPORTATION_CODE,
    PurchaseDeliveryNotes.IMPORT_FILE_NUM,
    PurchaseDeliveryNotes.CONTACT_PERSON_CODE,
    PurchaseDeliveryNotes.SERIES,
    PurchaseDeliveryNotes.TAX_DATE,
    PurchaseDeliveryNotes.SHIP_TO_CODE,
    PurchaseDeliveryNotes.INDICATOR,
    PurchaseDeliveryNotes.FEDERAL_TAX_ID,
    PurchaseDeliveryNotes.DISCOUNT_PERCENT,
    PurchaseDeliveryNotes.PAYMENT_REFERENCE,
    PurchaseDeliveryNotes.CREATION_DATE,
    PurchaseDeliveryNotes.UPDATE_DATE,
    PurchaseDeliveryNotes.FINANCIAL_PERIOD,
    PurchaseDeliveryNotes.TRANS_NUM,
    PurchaseDeliveryNotes.VAT_SUM,
    PurchaseDeliveryNotes.VAT_SUM_SYS,
    PurchaseDeliveryNotes.VAT_SUM_FC,
    PurchaseDeliveryNotes.DOC_TOTAL_FC,
    PurchaseDeliveryNotes.DOC_TOTAL_SYS,
    PurchaseDeliveryNotes.FORM_1099,
    PurchaseDeliveryNotes.BOX_1099,
    PurchaseDeliveryNotes.REQURIED_DATE,
    PurchaseDeliveryNotes.CANCEL_DATE,
    PurchaseDeliveryNotes.SEGMENT,
    PurchaseDeliveryNotes.PAYMENT_METHOD,
    PurchaseDeliveryNotes.PAYMENT_BLOCK_ENTRY,
    PurchaseDeliveryNotes.CENTRAL_BANK_INDICATOR,
    PurchaseDeliveryNotes.PROJECT,
    PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM,
    PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_TO,
    PurchaseDeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM,
    PurchaseDeliveryNotes.INTERNAL_CORRECTED_DOC_NUM,
    PurchaseDeliveryNotes.NEXT_CORRECTING_DOCUMENT,
    PurchaseDeliveryNotes.TAX_EXEMPTION_LETTER_NUM,
    PurchaseDeliveryNotes.WT_APPLIED,
    PurchaseDeliveryNotes.WT_APPLIED_FC,
    PurchaseDeliveryNotes.AGENT_CODE,
    PurchaseDeliveryNotes.WT_APPLIED_SC,
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX,
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_FC,
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_SC,
    PurchaseDeliveryNotes.NUMBER_OF_INSTALLMENTS,
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT,
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC,
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC,
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT,
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_SC,
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_FC,
    PurchaseDeliveryNotes.BASE_AMOUNT,
    PurchaseDeliveryNotes.BASE_AMOUNT_SC,
    PurchaseDeliveryNotes.BASE_AMOUNT_FC,
    PurchaseDeliveryNotes.WT_AMOUNT,
    PurchaseDeliveryNotes.WT_AMOUNT_SC,
    PurchaseDeliveryNotes.WT_AMOUNT_FC,
    PurchaseDeliveryNotes.VAT_DATE,
    PurchaseDeliveryNotes.DOCUMENTS_OWNER,
    PurchaseDeliveryNotes.FOLIO_PREFIX_STRING,
    PurchaseDeliveryNotes.FOLIO_NUMBER,
    PurchaseDeliveryNotes.BP_CHANNEL_CODE,
    PurchaseDeliveryNotes.BP_CHANNEL_CONTACT,
    PurchaseDeliveryNotes.ADDRESS_2,
    PurchaseDeliveryNotes.PERIOD_INDICATOR,
    PurchaseDeliveryNotes.PAY_TO_CODE,
    PurchaseDeliveryNotes.MANUAL_NUMBER,
    PurchaseDeliveryNotes.PAY_TO_BANK_COUNTRY,
    PurchaseDeliveryNotes.PAY_TO_BANK_CODE,
    PurchaseDeliveryNotes.PAY_TO_BANK_ACCOUNT_NO,
    PurchaseDeliveryNotes.PAY_TO_BANK_BRANCH,
    PurchaseDeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE,
    PurchaseDeliveryNotes.DOWN_PAYMENT,
    PurchaseDeliveryNotes.LANGUAGE_CODE,
    PurchaseDeliveryNotes.TRACKING_NUMBER,
    PurchaseDeliveryNotes.PICK_REMARK,
    PurchaseDeliveryNotes.CLOSING_DATE,
    PurchaseDeliveryNotes.SEQUENCE_CODE,
    PurchaseDeliveryNotes.SEQUENCE_SERIAL,
    PurchaseDeliveryNotes.SERIES_STRING,
    PurchaseDeliveryNotes.SUB_SERIES_STRING,
    PurchaseDeliveryNotes.SEQUENCE_MODEL,
    PurchaseDeliveryNotes.TOTAL_DISCOUNT,
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT,
    PurchaseDeliveryNotes.DOWN_PAYMENT_PERCENTAGE,
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_SC,
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_FC,
    PurchaseDeliveryNotes.VAT_PERCENT,
    PurchaseDeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT,
    PurchaseDeliveryNotes.OPENING_REMARKS,
    PurchaseDeliveryNotes.CLOSING_REMARKS,
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT,
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_FC,
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_SC,
    PurchaseDeliveryNotes.SIGNATURE_INPUT_MESSAGE,
    PurchaseDeliveryNotes.SIGNATURE_DIGEST,
    PurchaseDeliveryNotes.CERTIFICATION_NUMBER,
    PurchaseDeliveryNotes.PRIVATE_KEY_VERSION,
    PurchaseDeliveryNotes.CONTROL_ACCOUNT,
    PurchaseDeliveryNotes.GTS_CHECKER,
    PurchaseDeliveryNotes.GTS_PAYEE,
    PurchaseDeliveryNotes.EXTRA_MONTH,
    PurchaseDeliveryNotes.EXTRA_DAYS,
    PurchaseDeliveryNotes.CASH_DISCOUNT_DATE_OFFSET,
    PurchaseDeliveryNotes.E_TAX_WEB_SITE,
    PurchaseDeliveryNotes.E_TAX_NUMBER,
    PurchaseDeliveryNotes.NTS_APPROVED_NUMBER,
    PurchaseDeliveryNotes.E_DOC_SERIES,
    PurchaseDeliveryNotes.E_DOC_NUM,
    PurchaseDeliveryNotes.E_DOC_EXPORT_FORMAT,
    PurchaseDeliveryNotes.E_DOC_ERROR_CODE,
    PurchaseDeliveryNotes.E_DOC_ERROR_MESSAGE,
    PurchaseDeliveryNotes.GROUP_SERIES,
    PurchaseDeliveryNotes.GROUP_NUMBER,
    PurchaseDeliveryNotes.POS_EQUIPMENT_NUMBER,
    PurchaseDeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER,
    PurchaseDeliveryNotes.POS_CASHIER_NUMBER,
    PurchaseDeliveryNotes.SPECIFIED_CLOSING_DATE,
    PurchaseDeliveryNotes.TOTAL_DISCOUNT_FC,
    PurchaseDeliveryNotes.TOTAL_DISCOUNT_SC,
    PurchaseDeliveryNotes.BPL_NAME,
    PurchaseDeliveryNotes.VAT_REG_NUM,
    PurchaseDeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    PurchaseDeliveryNotes.SUPPLIER,
    PurchaseDeliveryNotes.RELEASER,
    PurchaseDeliveryNotes.RECEIVER,
    PurchaseDeliveryNotes.BLANKET_AGREEMENT_NUMBER,
    PurchaseDeliveryNotes.ASSET_VALUE_DATE,
    PurchaseDeliveryNotes.REQUESTER,
    PurchaseDeliveryNotes.REQUESTER_NAME,
    PurchaseDeliveryNotes.REQUESTER_BRANCH,
    PurchaseDeliveryNotes.REQUESTER_DEPARTMENT,
    PurchaseDeliveryNotes.REQUESTER_EMAIL,
    PurchaseDeliveryNotes.REQ_TYPE,
    PurchaseDeliveryNotes.AUTHORIZATION_CODE,
    PurchaseDeliveryNotes.START_DELIVERY_DATE,
    PurchaseDeliveryNotes.START_DELIVERY_TIME,
    PurchaseDeliveryNotes.END_DELIVERY_DATE,
    PurchaseDeliveryNotes.END_DELIVERY_TIME,
    PurchaseDeliveryNotes.VEHICLE_PLATE,
    PurchaseDeliveryNotes.AT_DOCUMENT_TYPE,
    PurchaseDeliveryNotes.ELEC_COMM_MESSAGE,
    PurchaseDeliveryNotes.FISCAL_DOC_NUM,
    PurchaseDeliveryNotes.POS_DAILY_SUMMARY_NO,
    PurchaseDeliveryNotes.POS_RECEIPT_NO,
    PurchaseDeliveryNotes.POINT_OF_ISSUE_CODE,
    PurchaseDeliveryNotes.FOLIO_NUMBER_FROM,
    PurchaseDeliveryNotes.FOLIO_NUMBER_TO,
    PurchaseDeliveryNotes.RELATED_TYPE,
    PurchaseDeliveryNotes.RELATED_ENTRY,
    PurchaseDeliveryNotes.DOCUMENT_TAX_ID,
    PurchaseDeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    PurchaseDeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    PurchaseDeliveryNotes.POS_CASH_REGISTER,
    PurchaseDeliveryNotes.UPDATE_TIME,
    PurchaseDeliveryNotes.DOWN_PAYMENT_TRASACTION_ID,
    PurchaseDeliveryNotes.ORIGINAL_REF_NO,
    PurchaseDeliveryNotes.ORIGINAL_REF_DATE,
    PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
    PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    PurchaseDeliveryNotes.E_COMMERCE_OPERATOR,
    PurchaseDeliveryNotes.E_COMMERCE_GSTIN,
    PurchaseDeliveryNotes.TAX_INVOICE_NO,
    PurchaseDeliveryNotes.TAX_INVOICE_DATE,
    PurchaseDeliveryNotes.SHIP_FROM,
    PurchaseDeliveryNotes.ISSUING_REASON,
    PurchaseDeliveryNotes.DOCUMENT_APPROVAL_REQUESTS,
    PurchaseDeliveryNotes.DOCUMENT_LINES,
    PurchaseDeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES,
    PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION,
    PurchaseDeliveryNotes.DOCUMENT_PACKAGES,
    PurchaseDeliveryNotes.DOCUMENT_SPECIAL_LINES,
    PurchaseDeliveryNotes.DOCUMENT_INSTALLMENTS,
    PurchaseDeliveryNotes.DOWN_PAYMENTS_TO_DRAW,
    PurchaseDeliveryNotes.TAX_EXTENSION,
    PurchaseDeliveryNotes.ADDRESS_EXTENSION,
    PurchaseDeliveryNotes.SOI_WIZARD_ID,
    PurchaseDeliveryNotes.BUSINESS_PARTNER,
    PurchaseDeliveryNotes.CURRENCY,
    PurchaseDeliveryNotes.PAYMENT_TERMS_TYPE,
    PurchaseDeliveryNotes.SALES_PERSON,
    PurchaseDeliveryNotes.SHIPPING_TYPE,
    PurchaseDeliveryNotes.LANDED_COST,
    PurchaseDeliveryNotes.FACTORING_INDICATOR,
    PurchaseDeliveryNotes.JOURNAL_ENTRY,
    PurchaseDeliveryNotes.FORMS_1099,
    PurchaseDeliveryNotes.WIZARD_PAYMENT_METHOD,
    PurchaseDeliveryNotes.PAYMENT_BLOCK_2,
    PurchaseDeliveryNotes.PROJECT_2,
    PurchaseDeliveryNotes.EMPLOYEE_INFO,
    PurchaseDeliveryNotes.COUNTRY,
    PurchaseDeliveryNotes.BUSINESS_PLACE,
    PurchaseDeliveryNotes.USER_LANGUAGE,
    PurchaseDeliveryNotes.NF_MODEL,
    PurchaseDeliveryNotes.CHART_OF_ACCOUNT,
    PurchaseDeliveryNotes.TAX_WEB_SITE,
    PurchaseDeliveryNotes.BRANCH,
    PurchaseDeliveryNotes.DEPARTMENT,
    PurchaseDeliveryNotes.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PurchaseDeliveryNotes> = new AllFields('*', PurchaseDeliveryNotes);
  /**
   * All key fields of the PurchaseDeliveryNotes entity.
   */
  export const _keyFields: Array<Field<PurchaseDeliveryNotes>> = [PurchaseDeliveryNotes.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PurchaseDeliveryNotes.
   */
  export const _keys: { [keys: string]: Field<PurchaseDeliveryNotes> } = PurchaseDeliveryNotes._keyFields.reduce((acc: { [keys: string]: Field<PurchaseDeliveryNotes> }, field: Field<PurchaseDeliveryNotes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
