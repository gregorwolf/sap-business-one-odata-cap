/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrdersRequestBuilder } from './PurchaseOrdersRequestBuilder';
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
 * This class represents the entity "PurchaseOrders" of service "SAPB1".
 */
export class PurchaseOrders extends Entity implements PurchaseOrdersType {
  /**
   * Technical entity name for PurchaseOrders.
   */
  static _entityName = 'PurchaseOrders';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PurchaseOrders.
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
   * Returns an entity builder to construct instances `PurchaseOrders`.
   * @returns A builder that constructs instances of entity type `PurchaseOrders`.
   */
  static builder(): EntityBuilderType<PurchaseOrders, PurchaseOrdersTypeForceMandatory> {
    return Entity.entityBuilder(PurchaseOrders);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PurchaseOrders` entity type.
   * @returns A `PurchaseOrders` request builder.
   */
  static requestBuilder(): PurchaseOrdersRequestBuilder {
    return new PurchaseOrdersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseOrders`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PurchaseOrders`.
   */
  static customField(fieldName: string): CustomField<PurchaseOrders> {
    return Entity.customFieldSelector(fieldName, PurchaseOrders);
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

export interface PurchaseOrdersType {
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

export interface PurchaseOrdersTypeForceMandatory {
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

export namespace PurchaseOrders {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<PurchaseOrders> = new NumberField('DocEntry', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<PurchaseOrders> = new NumberField('DocNum', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<PurchaseOrders> = new DateField('DocDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<PurchaseOrders> = new DateField('DocDueDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<PurchaseOrders> = new StringField('CardCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<PurchaseOrders> = new StringField('CardName', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<PurchaseOrders> = new StringField('Address', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<PurchaseOrders> = new StringField('NumAtCard', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL: NumberField<PurchaseOrders> = new NumberField('DocTotal', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<PurchaseOrders> = new NumberField('AttachmentEntry', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<PurchaseOrders> = new StringField('DocCurrency', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[docRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_RATE: NumberField<PurchaseOrders> = new NumberField('DocRate', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<PurchaseOrders> = new StringField('Reference1', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<PurchaseOrders> = new StringField('Reference2', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<PurchaseOrders> = new StringField('Comments', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<PurchaseOrders> = new StringField('JournalMemo', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[paymentGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_GROUP_CODE: NumberField<PurchaseOrders> = new NumberField('PaymentGroupCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[docTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TIME: TimeField<PurchaseOrders> = new TimeField('DocTime', PurchaseOrders, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<PurchaseOrders> = new NumberField('SalesPersonCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[transportationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORTATION_CODE: NumberField<PurchaseOrders> = new NumberField('TransportationCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[importFileNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT_FILE_NUM: NumberField<PurchaseOrders> = new NumberField('ImportFileNum', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<PurchaseOrders> = new NumberField('ContactPersonCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<PurchaseOrders> = new NumberField('Series', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<PurchaseOrders> = new DateField('TaxDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<PurchaseOrders> = new StringField('ShipToCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<PurchaseOrders> = new StringField('Indicator', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<PurchaseOrders> = new StringField('FederalTaxID', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<PurchaseOrders> = new NumberField('DiscountPercent', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<PurchaseOrders> = new StringField('PaymentReference', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<PurchaseOrders> = new DateField('CreationDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<PurchaseOrders> = new DateField('UpdateDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<PurchaseOrders> = new NumberField('FinancialPeriod', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<PurchaseOrders> = new NumberField('TransNum', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[vatSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM: NumberField<PurchaseOrders> = new NumberField('VatSum', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[vatSumSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_SYS: NumberField<PurchaseOrders> = new NumberField('VatSumSys', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[vatSumFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_SUM_FC: NumberField<PurchaseOrders> = new NumberField('VatSumFc', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[docTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_FC: NumberField<PurchaseOrders> = new NumberField('DocTotalFc', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[docTotalSys]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TOTAL_SYS: NumberField<PurchaseOrders> = new NumberField('DocTotalSys', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[form1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_1099: NumberField<PurchaseOrders> = new NumberField('Form1099', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<PurchaseOrders> = new StringField('Box1099', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[requriedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQURIED_DATE: DateField<PurchaseOrders> = new DateField('RequriedDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<PurchaseOrders> = new DateField('CancelDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<PurchaseOrders> = new NumberField('Segment', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<PurchaseOrders> = new StringField('PaymentMethod', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[paymentBlockEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_ENTRY: NumberField<PurchaseOrders> = new NumberField('PaymentBlockEntry', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[centralBankIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTRAL_BANK_INDICATOR: StringField<PurchaseOrders> = new StringField('CentralBankIndicator', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<PurchaseOrders> = new StringField('Project', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<PurchaseOrders> = new DateField('ExemptionValidityDateFrom', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<PurchaseOrders> = new DateField('ExemptionValidityDateTo', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CORRECTED_DOC_NUM: StringField<PurchaseOrders> = new StringField('ExternalCorrectedDocNum', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[internalCorrectedDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_CORRECTED_DOC_NUM: NumberField<PurchaseOrders> = new NumberField('InternalCorrectedDocNum', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[nextCorrectingDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_CORRECTING_DOCUMENT: NumberField<PurchaseOrders> = new NumberField('NextCorrectingDocument', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<PurchaseOrders> = new StringField('TaxExemptionLetterNum', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[wtApplied]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED: NumberField<PurchaseOrders> = new NumberField('WTApplied', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtAppliedFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_FC: NumberField<PurchaseOrders> = new NumberField('WTAppliedFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<PurchaseOrders> = new StringField('AgentCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[wtAppliedSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_APPLIED_SC: NumberField<PurchaseOrders> = new NumberField('WTAppliedSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX: NumberField<PurchaseOrders> = new NumberField('TotalEqualizationTax', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_FC: NumberField<PurchaseOrders> = new NumberField('TotalEqualizationTaxFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_EQUALIZATION_TAX_SC: NumberField<PurchaseOrders> = new NumberField('TotalEqualizationTaxSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: NumberField<PurchaseOrders> = new NumberField('NumberOfInstallments', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[wtNonSubjectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT: NumberField<PurchaseOrders> = new NumberField('WTNonSubjectAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('WTNonSubjectAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NON_SUBJECT_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('WTNonSubjectAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT: NumberField<PurchaseOrders> = new NumberField('WTExemptedAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('WTExemptedAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtExemptedAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_EXEMPTED_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('WTExemptedAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<PurchaseOrders> = new NumberField('BaseAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('BaseAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('BaseAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT: NumberField<PurchaseOrders> = new NumberField('WTAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('WTAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('WTAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[vatDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DATE: DateField<PurchaseOrders> = new DateField('VatDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentsOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENTS_OWNER: NumberField<PurchaseOrders> = new NumberField('DocumentsOwner', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<PurchaseOrders> = new StringField('FolioPrefixString', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<PurchaseOrders> = new NumberField('FolioNumber', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[bpChannelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CODE: StringField<PurchaseOrders> = new StringField('BPChannelCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[bpChannelContact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CHANNEL_CONTACT: NumberField<PurchaseOrders> = new NumberField('BPChannelContact', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<PurchaseOrders> = new StringField('Address2', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<PurchaseOrders> = new StringField('PeriodIndicator', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[payToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_CODE: StringField<PurchaseOrders> = new StringField('PayToCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[manualNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_NUMBER: StringField<PurchaseOrders> = new StringField('ManualNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[payToBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_COUNTRY: StringField<PurchaseOrders> = new StringField('PayToBankCountry', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[payToBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_CODE: StringField<PurchaseOrders> = new StringField('PayToBankCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[payToBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_ACCOUNT_NO: StringField<PurchaseOrders> = new StringField('PayToBankAccountNo', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[payToBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TO_BANK_BRANCH: StringField<PurchaseOrders> = new StringField('PayToBankBranch', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID_ASSIGNED_TO_INVOICE: NumberField<PurchaseOrders> = new NumberField('BPL_IDAssignedToInvoice', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[downPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT: NumberField<PurchaseOrders> = new NumberField('DownPayment', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<PurchaseOrders> = new NumberField('LanguageCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[trackingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NUMBER: StringField<PurchaseOrders> = new StringField('TrackingNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[pickRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_REMARK: StringField<PurchaseOrders> = new StringField('PickRemark', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<PurchaseOrders> = new DateField('ClosingDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sequenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_CODE: NumberField<PurchaseOrders> = new NumberField('SequenceCode', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[sequenceSerial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_SERIAL: NumberField<PurchaseOrders> = new NumberField('SequenceSerial', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[seriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_STRING: StringField<PurchaseOrders> = new StringField('SeriesString', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[subSeriesString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SERIES_STRING: StringField<PurchaseOrders> = new StringField('SubSeriesString', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[sequenceModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_MODEL: StringField<PurchaseOrders> = new StringField('SequenceModel', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[totalDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT: NumberField<PurchaseOrders> = new NumberField('TotalDiscount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT: NumberField<PurchaseOrders> = new NumberField('DownPaymentAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_PERCENTAGE: NumberField<PurchaseOrders> = new NumberField('DownPaymentPercentage', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('DownPaymentAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[downPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('DownPaymentAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_PERCENT: NumberField<PurchaseOrders> = new NumberField('VatPercent', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROSS_PROFIT_PERCENT: NumberField<PurchaseOrders> = new NumberField('ServiceGrossProfitPercent', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[openingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENING_REMARKS: StringField<PurchaseOrders> = new StringField('OpeningRemarks', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[closingRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_REMARKS: StringField<PurchaseOrders> = new StringField('ClosingRemarks', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[roundingDiffAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT: NumberField<PurchaseOrders> = new NumberField('RoundingDiffAmount', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_FC: NumberField<PurchaseOrders> = new NumberField('RoundingDiffAmountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[roundingDiffAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_DIFF_AMOUNT_SC: NumberField<PurchaseOrders> = new NumberField('RoundingDiffAmountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[signatureInputMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_INPUT_MESSAGE: StringField<PurchaseOrders> = new StringField('SignatureInputMessage', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[signatureDigest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_DIGEST: StringField<PurchaseOrders> = new StringField('SignatureDigest', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[certificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NUMBER: StringField<PurchaseOrders> = new StringField('CertificationNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[privateKeyVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_KEY_VERSION: NumberField<PurchaseOrders> = new NumberField('PrivateKeyVersion', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[controlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTROL_ACCOUNT: StringField<PurchaseOrders> = new StringField('ControlAccount', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[gtsChecker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_CHECKER: NumberField<PurchaseOrders> = new NumberField('GTSChecker', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[gtsPayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_PAYEE: NumberField<PurchaseOrders> = new NumberField('GTSPayee', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[extraMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_MONTH: NumberField<PurchaseOrders> = new NumberField('ExtraMonth', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[extraDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_DAYS: NumberField<PurchaseOrders> = new NumberField('ExtraDays', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[cashDiscountDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_DATE_OFFSET: NumberField<PurchaseOrders> = new NumberField('CashDiscountDateOffset', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<PurchaseOrders> = new NumberField('ETaxWebSite', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[eTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_NUMBER: StringField<PurchaseOrders> = new StringField('ETaxNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[ntsApprovedNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NTS_APPROVED_NUMBER: StringField<PurchaseOrders> = new StringField('NTSApprovedNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[eDocSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_SERIES: NumberField<PurchaseOrders> = new NumberField('EDocSeries', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[eDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_NUM: StringField<PurchaseOrders> = new StringField('EDocNum', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<PurchaseOrders> = new NumberField('EDocExportFormat', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[eDocErrorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_CODE: StringField<PurchaseOrders> = new StringField('EDocErrorCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[eDocErrorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ERROR_MESSAGE: StringField<PurchaseOrders> = new StringField('EDocErrorMessage', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[groupSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_SERIES: NumberField<PurchaseOrders> = new NumberField('GroupSeries', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUMBER: NumberField<PurchaseOrders> = new NumberField('GroupNumber', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[posEquipmentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_EQUIPMENT_NUMBER: StringField<PurchaseOrders> = new StringField('POSEquipmentNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_MANUFACTURER_SERIAL_NUMBER: StringField<PurchaseOrders> = new StringField('POSManufacturerSerialNumber', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[posCashierNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASHIER_NUMBER: NumberField<PurchaseOrders> = new NumberField('POSCashierNumber', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[specifiedClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIFIED_CLOSING_DATE: DateField<PurchaseOrders> = new DateField('SpecifiedClosingDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[totalDiscountFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_FC: NumberField<PurchaseOrders> = new NumberField('TotalDiscountFC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[totalDiscountSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_DISCOUNT_SC: NumberField<PurchaseOrders> = new NumberField('TotalDiscountSC', PurchaseOrders, 'Edm.Double');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<PurchaseOrders> = new StringField('BPLName', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<PurchaseOrders> = new StringField('VATRegNum', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUAL_INVOICE_DECLARATION_REFERENCE: NumberField<PurchaseOrders> = new NumberField('AnnualInvoiceDeclarationReference', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<PurchaseOrders> = new StringField('Supplier', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[releaser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELEASER: NumberField<PurchaseOrders> = new NumberField('Releaser', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[receiver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVER: NumberField<PurchaseOrders> = new NumberField('Receiver', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT_NUMBER: NumberField<PurchaseOrders> = new NumberField('BlanketAgreementNumber', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<PurchaseOrders> = new DateField('AssetValueDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[requester]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER: StringField<PurchaseOrders> = new StringField('Requester', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[requesterName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_NAME: StringField<PurchaseOrders> = new StringField('RequesterName', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[requesterBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_BRANCH: NumberField<PurchaseOrders> = new NumberField('RequesterBranch', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[requesterDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_DEPARTMENT: NumberField<PurchaseOrders> = new NumberField('RequesterDepartment', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[requesterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_EMAIL: StringField<PurchaseOrders> = new StringField('RequesterEmail', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[reqType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQ_TYPE: NumberField<PurchaseOrders> = new NumberField('ReqType', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<PurchaseOrders> = new StringField('AuthorizationCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<PurchaseOrders> = new DateField('StartDeliveryDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<PurchaseOrders> = new TimeField('StartDeliveryTime', PurchaseOrders, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<PurchaseOrders> = new DateField('EndDeliveryDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<PurchaseOrders> = new TimeField('EndDeliveryTime', PurchaseOrders, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<PurchaseOrders> = new StringField('VehiclePlate', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<PurchaseOrders> = new StringField('ATDocumentType', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<PurchaseOrders> = new StringField('ElecCommMessage', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[fiscalDocNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOC_NUM: StringField<PurchaseOrders> = new StringField('FiscalDocNum', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[posDailySummaryNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY_NO: NumberField<PurchaseOrders> = new NumberField('POSDailySummaryNo', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[posReceiptNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_RECEIPT_NO: NumberField<PurchaseOrders> = new NumberField('POSReceiptNo', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<PurchaseOrders> = new StringField('PointOfIssueCode', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<PurchaseOrders> = new NumberField('FolioNumberFrom', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<PurchaseOrders> = new NumberField('FolioNumberTo', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[relatedType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TYPE: NumberField<PurchaseOrders> = new NumberField('RelatedType', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[relatedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_ENTRY: NumberField<PurchaseOrders> = new NumberField('RelatedEntry', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[documentTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TAX_ID: StringField<PurchaseOrders> = new StringField('DocumentTaxID', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: DateField<PurchaseOrders> = new DateField('DateOfReportingControlStatementVAT', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORTING_SECTION_CONTROL_STATEMENT_VAT: StringField<PurchaseOrders> = new StringField('ReportingSectionControlStatementVAT', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[posCashRegister]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_CASH_REGISTER: NumberField<PurchaseOrders> = new NumberField('POS_CashRegister', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<PurchaseOrders> = new TimeField('UpdateTime', PurchaseOrders, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[downPaymentTrasactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TRASACTION_ID: StringField<PurchaseOrders> = new StringField('DownPaymentTrasactionID', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[originalRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_NO: StringField<PurchaseOrders> = new StringField('OriginalRefNo', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[originalRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_REF_DATE: DateField<PurchaseOrders> = new DateField('OriginalRefDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_NO: StringField<PurchaseOrders> = new StringField('OriginalCreditOrDebitNo', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_CREDIT_OR_DEBIT_DATE: DateField<PurchaseOrders> = new DateField('OriginalCreditOrDebitDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eCommerceOperator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_OPERATOR: StringField<PurchaseOrders> = new StringField('ECommerceOperator', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[eCommerceGstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_GSTIN: StringField<PurchaseOrders> = new StringField('ECommerceGSTIN', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_NO: StringField<PurchaseOrders> = new StringField('TaxInvoiceNo', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[taxInvoiceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_INVOICE_DATE: DateField<PurchaseOrders> = new DateField('TaxInvoiceDate', PurchaseOrders, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[shipFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_FROM: StringField<PurchaseOrders> = new StringField('ShipFrom', PurchaseOrders, 'Edm.String');
  /**
   * Static representation of the [[issuingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISSUING_REASON: NumberField<PurchaseOrders> = new NumberField('IssuingReason', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the [[documentApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_APPROVAL_REQUESTS: CollectionField<PurchaseOrders> = new CollectionField('Document_ApprovalRequests', PurchaseOrders, new DocumentApprovalRequestField('', PurchaseOrders));
  /**
   * Static representation of the [[documentLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_LINES: CollectionField<PurchaseOrders> = new CollectionField('DocumentLines', PurchaseOrders, new DocumentLineField('', PurchaseOrders));
  /**
   * Static representation of the [[documentAdditionalExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<PurchaseOrders> = new CollectionField('DocumentAdditionalExpenses', PurchaseOrders, new DocumentAdditionalExpenseField('', PurchaseOrders));
  /**
   * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<PurchaseOrders> = new CollectionField('WithholdingTaxDataWTXCollection', PurchaseOrders, new WithholdingTaxDataWtxField('', PurchaseOrders));
  /**
   * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<PurchaseOrders> = new CollectionField('WithholdingTaxDataCollection', PurchaseOrders, new WithholdingTaxDataField('', PurchaseOrders));
  /**
   * Static representation of the [[documentPackages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_PACKAGES: CollectionField<PurchaseOrders> = new CollectionField('DocumentPackages', PurchaseOrders, new DocumentPackageField('', PurchaseOrders));
  /**
   * Static representation of the [[documentSpecialLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_SPECIAL_LINES: CollectionField<PurchaseOrders> = new CollectionField('DocumentSpecialLines', PurchaseOrders, new DocumentSpecialLineField('', PurchaseOrders));
  /**
   * Static representation of the [[documentInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_INSTALLMENTS: CollectionField<PurchaseOrders> = new CollectionField('DocumentInstallments', PurchaseOrders, new DocumentInstallmentField('', PurchaseOrders));
  /**
   * Static representation of the [[downPaymentsToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS_TO_DRAW: CollectionField<PurchaseOrders> = new CollectionField('DownPaymentsToDraw', PurchaseOrders, new DownPaymentToDrawField('', PurchaseOrders));
  /**
   * Static representation of the [[taxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXTENSION: TaxExtensionField<PurchaseOrders> = new TaxExtensionField('TaxExtension', PurchaseOrders);
  /**
   * Static representation of the [[addressExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_EXTENSION: AddressExtensionField<PurchaseOrders> = new AddressExtensionField('AddressExtension', PurchaseOrders);
  /**
   * Static representation of the [[soiWizardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOI_WIZARD_ID: NumberField<PurchaseOrders> = new NumberField('SOIWizardId', PurchaseOrders, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<PurchaseOrders, BusinessPartners> = new OneToOneLink('BusinessPartner', PurchaseOrders, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<PurchaseOrders, Currencies> = new OneToOneLink('Currency', PurchaseOrders, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<PurchaseOrders, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', PurchaseOrders, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<PurchaseOrders, SalesPersons> = new OneToOneLink('SalesPerson', PurchaseOrders, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<PurchaseOrders, ShippingTypes> = new OneToOneLink('ShippingType', PurchaseOrders, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<PurchaseOrders, FactoringIndicators> = new OneToOneLink('FactoringIndicator', PurchaseOrders, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<PurchaseOrders, Forms1099> = new OneToOneLink('Forms1099', PurchaseOrders, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<PurchaseOrders, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', PurchaseOrders, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<PurchaseOrders, PaymentBlocks> = new OneToOneLink('PaymentBlock2', PurchaseOrders, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<PurchaseOrders, Projects> = new OneToOneLink('Project2', PurchaseOrders, Projects);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<PurchaseOrders, EmployeesInfo> = new OneToOneLink('EmployeeInfo', PurchaseOrders, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<PurchaseOrders, Countries> = new OneToOneLink('Country', PurchaseOrders, Countries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<PurchaseOrders, BusinessPlaces> = new OneToOneLink('BusinessPlace', PurchaseOrders, BusinessPlaces);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<PurchaseOrders, UserLanguages> = new OneToOneLink('UserLanguage', PurchaseOrders, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<PurchaseOrders, NfModels> = new OneToOneLink('NFModel', PurchaseOrders, NfModels);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<PurchaseOrders, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', PurchaseOrders, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<PurchaseOrders, TaxWebSites> = new OneToOneLink('TaxWebSite', PurchaseOrders, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[branch]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH: OneToOneLink<PurchaseOrders, Branches> = new OneToOneLink('Branch', PurchaseOrders, Branches);
  /**
   * Static representation of the one-to-one navigation property [[department]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: OneToOneLink<PurchaseOrders, Departments> = new OneToOneLink('Department', PurchaseOrders, Departments);
  /**
   * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToOneLink<PurchaseOrders, PosDailySummary> = new OneToOneLink('POSDailySummary', PurchaseOrders, PosDailySummary);
  /**
   * All fields of the PurchaseOrders entity.
   */
  export const _allFields: Array<NumberField<PurchaseOrders> | DateField<PurchaseOrders> | StringField<PurchaseOrders> | TimeField<PurchaseOrders> | CollectionField<PurchaseOrders> | TaxExtensionField<PurchaseOrders> | AddressExtensionField<PurchaseOrders> | OneToOneLink<PurchaseOrders, BusinessPartners> | OneToOneLink<PurchaseOrders, Currencies> | OneToOneLink<PurchaseOrders, PaymentTermsTypes> | OneToOneLink<PurchaseOrders, SalesPersons> | OneToOneLink<PurchaseOrders, ShippingTypes> | OneToOneLink<PurchaseOrders, FactoringIndicators> | OneToOneLink<PurchaseOrders, Forms1099> | OneToOneLink<PurchaseOrders, WizardPaymentMethods> | OneToOneLink<PurchaseOrders, PaymentBlocks> | OneToOneLink<PurchaseOrders, Projects> | OneToOneLink<PurchaseOrders, EmployeesInfo> | OneToOneLink<PurchaseOrders, Countries> | OneToOneLink<PurchaseOrders, BusinessPlaces> | OneToOneLink<PurchaseOrders, UserLanguages> | OneToOneLink<PurchaseOrders, NfModels> | OneToOneLink<PurchaseOrders, ChartOfAccounts> | OneToOneLink<PurchaseOrders, TaxWebSites> | OneToOneLink<PurchaseOrders, Branches> | OneToOneLink<PurchaseOrders, Departments> | OneToOneLink<PurchaseOrders, PosDailySummary>> = [
    PurchaseOrders.DOC_ENTRY,
    PurchaseOrders.DOC_NUM,
    PurchaseOrders.DOC_DATE,
    PurchaseOrders.DOC_DUE_DATE,
    PurchaseOrders.CARD_CODE,
    PurchaseOrders.CARD_NAME,
    PurchaseOrders.ADDRESS,
    PurchaseOrders.NUM_AT_CARD,
    PurchaseOrders.DOC_TOTAL,
    PurchaseOrders.ATTACHMENT_ENTRY,
    PurchaseOrders.DOC_CURRENCY,
    PurchaseOrders.DOC_RATE,
    PurchaseOrders.REFERENCE_1,
    PurchaseOrders.REFERENCE_2,
    PurchaseOrders.COMMENTS,
    PurchaseOrders.JOURNAL_MEMO,
    PurchaseOrders.PAYMENT_GROUP_CODE,
    PurchaseOrders.DOC_TIME,
    PurchaseOrders.SALES_PERSON_CODE,
    PurchaseOrders.TRANSPORTATION_CODE,
    PurchaseOrders.IMPORT_FILE_NUM,
    PurchaseOrders.CONTACT_PERSON_CODE,
    PurchaseOrders.SERIES,
    PurchaseOrders.TAX_DATE,
    PurchaseOrders.SHIP_TO_CODE,
    PurchaseOrders.INDICATOR,
    PurchaseOrders.FEDERAL_TAX_ID,
    PurchaseOrders.DISCOUNT_PERCENT,
    PurchaseOrders.PAYMENT_REFERENCE,
    PurchaseOrders.CREATION_DATE,
    PurchaseOrders.UPDATE_DATE,
    PurchaseOrders.FINANCIAL_PERIOD,
    PurchaseOrders.TRANS_NUM,
    PurchaseOrders.VAT_SUM,
    PurchaseOrders.VAT_SUM_SYS,
    PurchaseOrders.VAT_SUM_FC,
    PurchaseOrders.DOC_TOTAL_FC,
    PurchaseOrders.DOC_TOTAL_SYS,
    PurchaseOrders.FORM_1099,
    PurchaseOrders.BOX_1099,
    PurchaseOrders.REQURIED_DATE,
    PurchaseOrders.CANCEL_DATE,
    PurchaseOrders.SEGMENT,
    PurchaseOrders.PAYMENT_METHOD,
    PurchaseOrders.PAYMENT_BLOCK_ENTRY,
    PurchaseOrders.CENTRAL_BANK_INDICATOR,
    PurchaseOrders.PROJECT,
    PurchaseOrders.EXEMPTION_VALIDITY_DATE_FROM,
    PurchaseOrders.EXEMPTION_VALIDITY_DATE_TO,
    PurchaseOrders.EXTERNAL_CORRECTED_DOC_NUM,
    PurchaseOrders.INTERNAL_CORRECTED_DOC_NUM,
    PurchaseOrders.NEXT_CORRECTING_DOCUMENT,
    PurchaseOrders.TAX_EXEMPTION_LETTER_NUM,
    PurchaseOrders.WT_APPLIED,
    PurchaseOrders.WT_APPLIED_FC,
    PurchaseOrders.AGENT_CODE,
    PurchaseOrders.WT_APPLIED_SC,
    PurchaseOrders.TOTAL_EQUALIZATION_TAX,
    PurchaseOrders.TOTAL_EQUALIZATION_TAX_FC,
    PurchaseOrders.TOTAL_EQUALIZATION_TAX_SC,
    PurchaseOrders.NUMBER_OF_INSTALLMENTS,
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT,
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT_SC,
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT_FC,
    PurchaseOrders.WT_EXEMPTED_AMOUNT,
    PurchaseOrders.WT_EXEMPTED_AMOUNT_SC,
    PurchaseOrders.WT_EXEMPTED_AMOUNT_FC,
    PurchaseOrders.BASE_AMOUNT,
    PurchaseOrders.BASE_AMOUNT_SC,
    PurchaseOrders.BASE_AMOUNT_FC,
    PurchaseOrders.WT_AMOUNT,
    PurchaseOrders.WT_AMOUNT_SC,
    PurchaseOrders.WT_AMOUNT_FC,
    PurchaseOrders.VAT_DATE,
    PurchaseOrders.DOCUMENTS_OWNER,
    PurchaseOrders.FOLIO_PREFIX_STRING,
    PurchaseOrders.FOLIO_NUMBER,
    PurchaseOrders.BP_CHANNEL_CODE,
    PurchaseOrders.BP_CHANNEL_CONTACT,
    PurchaseOrders.ADDRESS_2,
    PurchaseOrders.PERIOD_INDICATOR,
    PurchaseOrders.PAY_TO_CODE,
    PurchaseOrders.MANUAL_NUMBER,
    PurchaseOrders.PAY_TO_BANK_COUNTRY,
    PurchaseOrders.PAY_TO_BANK_CODE,
    PurchaseOrders.PAY_TO_BANK_ACCOUNT_NO,
    PurchaseOrders.PAY_TO_BANK_BRANCH,
    PurchaseOrders.BPL_ID_ASSIGNED_TO_INVOICE,
    PurchaseOrders.DOWN_PAYMENT,
    PurchaseOrders.LANGUAGE_CODE,
    PurchaseOrders.TRACKING_NUMBER,
    PurchaseOrders.PICK_REMARK,
    PurchaseOrders.CLOSING_DATE,
    PurchaseOrders.SEQUENCE_CODE,
    PurchaseOrders.SEQUENCE_SERIAL,
    PurchaseOrders.SERIES_STRING,
    PurchaseOrders.SUB_SERIES_STRING,
    PurchaseOrders.SEQUENCE_MODEL,
    PurchaseOrders.TOTAL_DISCOUNT,
    PurchaseOrders.DOWN_PAYMENT_AMOUNT,
    PurchaseOrders.DOWN_PAYMENT_PERCENTAGE,
    PurchaseOrders.DOWN_PAYMENT_AMOUNT_SC,
    PurchaseOrders.DOWN_PAYMENT_AMOUNT_FC,
    PurchaseOrders.VAT_PERCENT,
    PurchaseOrders.SERVICE_GROSS_PROFIT_PERCENT,
    PurchaseOrders.OPENING_REMARKS,
    PurchaseOrders.CLOSING_REMARKS,
    PurchaseOrders.ROUNDING_DIFF_AMOUNT,
    PurchaseOrders.ROUNDING_DIFF_AMOUNT_FC,
    PurchaseOrders.ROUNDING_DIFF_AMOUNT_SC,
    PurchaseOrders.SIGNATURE_INPUT_MESSAGE,
    PurchaseOrders.SIGNATURE_DIGEST,
    PurchaseOrders.CERTIFICATION_NUMBER,
    PurchaseOrders.PRIVATE_KEY_VERSION,
    PurchaseOrders.CONTROL_ACCOUNT,
    PurchaseOrders.GTS_CHECKER,
    PurchaseOrders.GTS_PAYEE,
    PurchaseOrders.EXTRA_MONTH,
    PurchaseOrders.EXTRA_DAYS,
    PurchaseOrders.CASH_DISCOUNT_DATE_OFFSET,
    PurchaseOrders.E_TAX_WEB_SITE,
    PurchaseOrders.E_TAX_NUMBER,
    PurchaseOrders.NTS_APPROVED_NUMBER,
    PurchaseOrders.E_DOC_SERIES,
    PurchaseOrders.E_DOC_NUM,
    PurchaseOrders.E_DOC_EXPORT_FORMAT,
    PurchaseOrders.E_DOC_ERROR_CODE,
    PurchaseOrders.E_DOC_ERROR_MESSAGE,
    PurchaseOrders.GROUP_SERIES,
    PurchaseOrders.GROUP_NUMBER,
    PurchaseOrders.POS_EQUIPMENT_NUMBER,
    PurchaseOrders.POS_MANUFACTURER_SERIAL_NUMBER,
    PurchaseOrders.POS_CASHIER_NUMBER,
    PurchaseOrders.SPECIFIED_CLOSING_DATE,
    PurchaseOrders.TOTAL_DISCOUNT_FC,
    PurchaseOrders.TOTAL_DISCOUNT_SC,
    PurchaseOrders.BPL_NAME,
    PurchaseOrders.VAT_REG_NUM,
    PurchaseOrders.ANNUAL_INVOICE_DECLARATION_REFERENCE,
    PurchaseOrders.SUPPLIER,
    PurchaseOrders.RELEASER,
    PurchaseOrders.RECEIVER,
    PurchaseOrders.BLANKET_AGREEMENT_NUMBER,
    PurchaseOrders.ASSET_VALUE_DATE,
    PurchaseOrders.REQUESTER,
    PurchaseOrders.REQUESTER_NAME,
    PurchaseOrders.REQUESTER_BRANCH,
    PurchaseOrders.REQUESTER_DEPARTMENT,
    PurchaseOrders.REQUESTER_EMAIL,
    PurchaseOrders.REQ_TYPE,
    PurchaseOrders.AUTHORIZATION_CODE,
    PurchaseOrders.START_DELIVERY_DATE,
    PurchaseOrders.START_DELIVERY_TIME,
    PurchaseOrders.END_DELIVERY_DATE,
    PurchaseOrders.END_DELIVERY_TIME,
    PurchaseOrders.VEHICLE_PLATE,
    PurchaseOrders.AT_DOCUMENT_TYPE,
    PurchaseOrders.ELEC_COMM_MESSAGE,
    PurchaseOrders.FISCAL_DOC_NUM,
    PurchaseOrders.POS_DAILY_SUMMARY_NO,
    PurchaseOrders.POS_RECEIPT_NO,
    PurchaseOrders.POINT_OF_ISSUE_CODE,
    PurchaseOrders.FOLIO_NUMBER_FROM,
    PurchaseOrders.FOLIO_NUMBER_TO,
    PurchaseOrders.RELATED_TYPE,
    PurchaseOrders.RELATED_ENTRY,
    PurchaseOrders.DOCUMENT_TAX_ID,
    PurchaseOrders.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
    PurchaseOrders.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
    PurchaseOrders.POS_CASH_REGISTER,
    PurchaseOrders.UPDATE_TIME,
    PurchaseOrders.DOWN_PAYMENT_TRASACTION_ID,
    PurchaseOrders.ORIGINAL_REF_NO,
    PurchaseOrders.ORIGINAL_REF_DATE,
    PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_NO,
    PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_DATE,
    PurchaseOrders.E_COMMERCE_OPERATOR,
    PurchaseOrders.E_COMMERCE_GSTIN,
    PurchaseOrders.TAX_INVOICE_NO,
    PurchaseOrders.TAX_INVOICE_DATE,
    PurchaseOrders.SHIP_FROM,
    PurchaseOrders.ISSUING_REASON,
    PurchaseOrders.DOCUMENT_APPROVAL_REQUESTS,
    PurchaseOrders.DOCUMENT_LINES,
    PurchaseOrders.DOCUMENT_ADDITIONAL_EXPENSES,
    PurchaseOrders.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
    PurchaseOrders.WITHHOLDING_TAX_DATA_COLLECTION,
    PurchaseOrders.DOCUMENT_PACKAGES,
    PurchaseOrders.DOCUMENT_SPECIAL_LINES,
    PurchaseOrders.DOCUMENT_INSTALLMENTS,
    PurchaseOrders.DOWN_PAYMENTS_TO_DRAW,
    PurchaseOrders.TAX_EXTENSION,
    PurchaseOrders.ADDRESS_EXTENSION,
    PurchaseOrders.SOI_WIZARD_ID,
    PurchaseOrders.BUSINESS_PARTNER,
    PurchaseOrders.CURRENCY,
    PurchaseOrders.PAYMENT_TERMS_TYPE,
    PurchaseOrders.SALES_PERSON,
    PurchaseOrders.SHIPPING_TYPE,
    PurchaseOrders.FACTORING_INDICATOR,
    PurchaseOrders.FORMS_1099,
    PurchaseOrders.WIZARD_PAYMENT_METHOD,
    PurchaseOrders.PAYMENT_BLOCK_2,
    PurchaseOrders.PROJECT_2,
    PurchaseOrders.EMPLOYEE_INFO,
    PurchaseOrders.COUNTRY,
    PurchaseOrders.BUSINESS_PLACE,
    PurchaseOrders.USER_LANGUAGE,
    PurchaseOrders.NF_MODEL,
    PurchaseOrders.CHART_OF_ACCOUNT,
    PurchaseOrders.TAX_WEB_SITE,
    PurchaseOrders.BRANCH,
    PurchaseOrders.DEPARTMENT,
    PurchaseOrders.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PurchaseOrders> = new AllFields('*', PurchaseOrders);
  /**
   * All key fields of the PurchaseOrders entity.
   */
  export const _keyFields: Array<Field<PurchaseOrders>> = [PurchaseOrders.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PurchaseOrders.
   */
  export const _keys: { [keys: string]: Field<PurchaseOrders> } = PurchaseOrders._keyFields.reduce((acc: { [keys: string]: Field<PurchaseOrders> }, field: Field<PurchaseOrders>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
