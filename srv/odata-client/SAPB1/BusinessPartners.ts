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
import { ElectronicProtocol } from './ElectronicProtocol';
import { BpAddress } from './BpAddress';
import { ContactEmployee } from './ContactEmployee';
import { BpAccountReceivablePayble } from './BpAccountReceivablePayble';
import { BpPaymentMethod } from './BpPaymentMethod';
import { BpWithholdingTax } from './BpWithholdingTax';
import { BpPaymentDate } from './BpPaymentDate';
import { BpBranchAssignmentItem } from './BpBranchAssignmentItem';
import { BpBankAccount } from './BpBankAccount';
import { BpFiscalTaxId } from './BpFiscalTaxId';
import { DiscountGroup } from './DiscountGroup';
import {
  BpIntrastatExtension,
  BpIntrastatExtensionField
} from './BpIntrastatExtension';
import { BpBlockSendingMarketingContent } from './BpBlockSendingMarketingContent';
import { BpCurrencies } from './BpCurrencies';
import type { BusinessPartnersApi } from './BusinessPartnersApi';
import { BoCardTypes } from './BoCardTypes';
import { BoVatStatus } from './BoVatStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoFatherCardTypes } from './BoFatherCardTypes';
import { BoYesNoNoneEnum } from './BoYesNoNoneEnum';
import { BoCardCompanyTypes } from './BoCardCompanyTypes';
import { BoTaxRoundingRuleTypes } from './BoTaxRoundingRuleTypes';
import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { DiscountGroupRelationsEnum } from './DiscountGroupRelationsEnum';
import { AssesseeTypeEnum } from './AssesseeTypeEnum';
import { OperationCode347Enum } from './OperationCode347Enum';
import { ShaamGroupEnum } from './ShaamGroupEnum';
import { AutomaticPostingEnum } from './AutomaticPostingEnum';
import { EffectivePriceEnum } from './EffectivePriceEnum';
import { ResidenceNumberTypeEnum } from './ResidenceNumberTypeEnum';
import { TypeOfOperationEnum } from './TypeOfOperationEnum';
import { PriceModeEnum } from './PriceModeEnum';
import { EDocGenerationTypeEnum } from './EDocGenerationTypeEnum';
import { ExemptionMaxAmountValidationTypeEnum } from './ExemptionMaxAmountValidationTypeEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { LandedCosts, LandedCostsType } from './LandedCosts';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { Items, ItemsType } from './Items';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';
import {
  CorrectionPurchaseInvoice,
  CorrectionPurchaseInvoiceType
} from './CorrectionPurchaseInvoice';
import { PartnersSetups, PartnersSetupsType } from './PartnersSetups';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import { BpVatExemptions, BpVatExemptionsType } from './BpVatExemptions';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { AlternateCatNum, AlternateCatNumType } from './AlternateCatNum';
import { Orders, OrdersType } from './Orders';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import {
  MaterialRevaluation,
  MaterialRevaluationType
} from './MaterialRevaluation';
import { Drafts, DraftsType } from './Drafts';
import {
  InventoryTransferRequests,
  InventoryTransferRequestsType
} from './InventoryTransferRequests';
import {
  ExportDeterminations,
  ExportDeterminationsType
} from './ExportDeterminations';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  DeductionTaxHierarchies,
  DeductionTaxHierarchiesType
} from './DeductionTaxHierarchies';
import { Contacts, ContactsType } from './Contacts';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import {
  BusinessPartnerGroups,
  BusinessPartnerGroupsType
} from './BusinessPartnerGroups';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { PriceLists, PriceListsType } from './PriceLists';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Currencies, CurrenciesType } from './Currencies';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';
import { VatGroups, VatGroupsType } from './VatGroups';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import {
  FactoringIndicators,
  FactoringIndicatorsType
} from './FactoringIndicators';
import { CreditCards, CreditCardsType } from './CreditCards';
import { BpPriorities, BpPrioritiesType } from './BpPriorities';
import { Forms1099, Forms1099Type } from './Forms1099';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import { DunningLetters, DunningLettersType } from './DunningLetters';
import { PaymentBlocks, PaymentBlocksType } from './PaymentBlocks';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { Territories, TerritoriesType } from './Territories';
import { Projects, ProjectsType } from './Projects';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { DunningTerms, DunningTermsType } from './DunningTerms';
import { UserLanguages, UserLanguagesType } from './UserLanguages';
import {
  DeductionTaxGroups,
  DeductionTaxGroupsType
} from './DeductionTaxGroups';
import {
  ClosingDateProcedure,
  ClosingDateProcedureType
} from './ClosingDateProcedure';
import {
  BankChargesAllocationCodes,
  BankChargesAllocationCodesType
} from './BankChargesAllocationCodes';
import { Industries, IndustriesType } from './Industries';
import { TaxWebSites, TaxWebSitesType } from './TaxWebSites';
import { Campaigns, CampaignsType } from './Campaigns';
import { EwbTransporters, EwbTransportersType } from './EwbTransporters';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { SalesTaxInvoices, SalesTaxInvoicesType } from './SalesTaxInvoices';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Activities, ActivitiesType } from './Activities';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import {
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import { BankPages, BankPagesType } from './BankPages';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import {
  PurchaseTaxInvoices,
  PurchaseTaxInvoicesType
} from './PurchaseTaxInvoices';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "BusinessPartners" of service "SAPB1".
 */
export class BusinessPartners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnersType<T>
{
  /**
   * Technical entity name for BusinessPartners.
   */
  static _entityName = 'BusinessPartners';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartners entity
   */
  static _keys = ['CardCode'];
  /**
   * Card Code.
   */
  cardCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Type.
   * @nullable
   */
  cardType?: BoCardTypes | null;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mail Address.
   * @nullable
   */
  mailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mail Zip Code.
   * @nullable
   */
  mailZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone 1.
   * @nullable
   */
  phone1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone 2.
   * @nullable
   */
  phone2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Terms Grp Code.
   * @nullable
   */
  payTermsGrpCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Credit Limit.
   * @nullable
   */
  creditLimit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Commitment.
   * @nullable
   */
  maxCommitment?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Liable.
   * @nullable
   */
  vatLiable?: BoVatStatus | null;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deductible At Source.
   * @nullable
   */
  deductibleAtSource?: BoYesNoEnum | null;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Deduction Valid Until.
   * @nullable
   */
  deductionValidUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Intrest Rate Percent.
   * @nullable
   */
  intrestRatePercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Percent.
   * @nullable
   */
  commissionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Diff Account.
   * @nullable
   */
  rateDiffAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cellular.
   * @nullable
   */
  cellular?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Avarage Late.
   * @nullable
   */
  avarageLate?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mail City.
   * @nullable
   */
  mailCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mail County.
   * @nullable
   */
  mailCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mail Country.
   * @nullable
   */
  mailCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picture.
   * @nullable
   */
  picture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Account.
   * @nullable
   */
  defaultAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Branch.
   * @nullable
   */
  defaultBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Bank Code.
   * @nullable
   */
  defaultBankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Id.
   * @nullable
   */
  additionalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pager.
   * @nullable
   */
  pager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Card.
   * @nullable
   */
  fatherCard?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Foreign Name.
   * @nullable
   */
  cardForeignName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Type.
   * @nullable
   */
  fatherType?: BoFatherCardTypes | null;
  /**
   * Deduction Office.
   * @nullable
   */
  deductionOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Code.
   * @nullable
   */
  exportCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Min Intrest.
   * @nullable
   */
  minIntrest?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Current Account Balance.
   * @nullable
   */
  currentAccountBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Open Delivery Notes Balance.
   * @nullable
   */
  openDeliveryNotesBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Open Orders Balance.
   * @nullable
   */
  openOrdersBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Open Checks Balance.
   * @nullable
   */
  openChecksBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Type.
   * @nullable
   */
  shippingType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Password.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator.
   * @nullable
   */
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Credit Card Num.
   * @nullable
   */
  creditCardNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Expiration.
   * @nullable
   */
  creditCardExpiration?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Debitor Account.
   * @nullable
   */
  debitorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Open Opportunities.
   * @nullable
   */
  openOpportunities?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Valid.
   * @nullable
   */
  valid?: BoYesNoEnum | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frozen.
   * @nullable
   */
  frozen?: BoYesNoEnum | null;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill To State.
   * @nullable
   */
  billToState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Num.
   * @nullable
   */
  exemptNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Form Code 1099.
   * @nullable
   */
  formCode1099?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Box 1099.
   * @nullable
   */
  box1099?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Peyment Method Code.
   * @nullable
   */
  peymentMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Back Order.
   * @nullable
   */
  backOrder?: BoYesNoEnum | null;
  /**
   * Partial Delivery.
   * @nullable
   */
  partialDelivery?: BoYesNoEnum | null;
  /**
   * Block Dunning.
   * @nullable
   */
  blockDunning?: BoYesNoEnum | null;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank.
   * @nullable
   */
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Country.
   * @nullable
   */
  houseBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Account.
   * @nullable
   */
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To Default.
   * @nullable
   */
  shipToDefault?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Level.
   * @nullable
   */
  dunningLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Dunning Date.
   * @nullable
   */
  dunningDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Collection Authorization.
   * @nullable
   */
  collectionAuthorization?: BoYesNoEnum | null;
  /**
   * Dme.
   * @nullable
   */
  dme?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instruction Key.
   * @nullable
   */
  instructionKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Single Payment.
   * @nullable
   */
  singlePayment?: BoYesNoEnum | null;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Block.
   * @nullable
   */
  paymentBlock?: BoYesNoEnum | null;
  /**
   * Reference Details.
   * @nullable
   */
  referenceDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Branch.
   * @nullable
   */
  houseBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner Id Number.
   * @nullable
   */
  ownerIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Block Description.
   * @nullable
   */
  paymentBlockDescription?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Exemption Letter Num.
   * @nullable
   */
  taxExemptionLetterNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Amount Of Exemption.
   * @nullable
   */
  maxAmountOfExemption?: DeserializedType<T, 'Edm.Double'> | null;
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
   * Linked Business Partner.
   * @nullable
   */
  linkedBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Multi Reconciliation Num.
   * @nullable
   */
  lastMultiReconciliationNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum | null;
  /**
   * Equalization.
   * @nullable
   */
  equalization?: BoYesNoEnum | null;
  /**
   * Subject To Withholding Tax.
   * @nullable
   */
  subjectToWithholdingTax?: BoYesNoNoneEnum | null;
  /**
   * Certificate Number.
   * @nullable
   */
  certificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * National Insurance Num.
   * @nullable
   */
  nationalInsuranceNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Criteria.
   * @nullable
   */
  accrualCriteria?: BoYesNoEnum | null;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill To Building Floor Room.
   * @nullable
   */
  billToBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Down Payment Clear Act.
   * @nullable
   */
  downPaymentClearAct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Bp.
   * @nullable
   */
  channelBp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Technician.
   * @nullable
   */
  defaultTechnician?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Billto Default.
   * @nullable
   */
  billtoDefault?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Billof Exchang Disc.
   * @nullable
   */
  customerBillofExchangDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Territory.
   * @nullable
   */
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Ship To Building Floor Room.
   * @nullable
   */
  shipToBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Billof Exchang Pres.
   * @nullable
   */
  customerBillofExchangPres?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Group Latin America.
   * @nullable
   */
  vatGroupLatinAmerica?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Term.
   * @nullable
   */
  dunningTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Website.
   * @nullable
   */
  website?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Other Receivable Payable.
   * @nullable
   */
  otherReceivablePayable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billof Exchangeon Collection.
   * @nullable
   */
  billofExchangeonCollection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Private.
   * @nullable
   */
  companyPrivate?: BoCardCompanyTypes | null;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Unpaid Billof Exchange.
   * @nullable
   */
  unpaidBillofExchange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Deduction Group.
   * @nullable
   */
  withholdingTaxDeductionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Closing Date Procedure Number.
   * @nullable
   */
  closingDateProcedureNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Profession.
   * @nullable
   */
  profession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Charges Allocation Code.
   * @nullable
   */
  bankChargesAllocationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rounding Rule.
   * @nullable
   */
  taxRoundingRule?: BoTaxRoundingRuleTypes | null;
  /**
   * Properties 1.
   * @nullable
   */
  properties1?: BoYesNoEnum | null;
  /**
   * Properties 2.
   * @nullable
   */
  properties2?: BoYesNoEnum | null;
  /**
   * Properties 3.
   * @nullable
   */
  properties3?: BoYesNoEnum | null;
  /**
   * Properties 4.
   * @nullable
   */
  properties4?: BoYesNoEnum | null;
  /**
   * Properties 5.
   * @nullable
   */
  properties5?: BoYesNoEnum | null;
  /**
   * Properties 6.
   * @nullable
   */
  properties6?: BoYesNoEnum | null;
  /**
   * Properties 7.
   * @nullable
   */
  properties7?: BoYesNoEnum | null;
  /**
   * Properties 8.
   * @nullable
   */
  properties8?: BoYesNoEnum | null;
  /**
   * Properties 9.
   * @nullable
   */
  properties9?: BoYesNoEnum | null;
  /**
   * Properties 10.
   * @nullable
   */
  properties10?: BoYesNoEnum | null;
  /**
   * Properties 11.
   * @nullable
   */
  properties11?: BoYesNoEnum | null;
  /**
   * Properties 12.
   * @nullable
   */
  properties12?: BoYesNoEnum | null;
  /**
   * Properties 13.
   * @nullable
   */
  properties13?: BoYesNoEnum | null;
  /**
   * Properties 14.
   * @nullable
   */
  properties14?: BoYesNoEnum | null;
  /**
   * Properties 15.
   * @nullable
   */
  properties15?: BoYesNoEnum | null;
  /**
   * Properties 16.
   * @nullable
   */
  properties16?: BoYesNoEnum | null;
  /**
   * Properties 17.
   * @nullable
   */
  properties17?: BoYesNoEnum | null;
  /**
   * Properties 18.
   * @nullable
   */
  properties18?: BoYesNoEnum | null;
  /**
   * Properties 19.
   * @nullable
   */
  properties19?: BoYesNoEnum | null;
  /**
   * Properties 20.
   * @nullable
   */
  properties20?: BoYesNoEnum | null;
  /**
   * Properties 21.
   * @nullable
   */
  properties21?: BoYesNoEnum | null;
  /**
   * Properties 22.
   * @nullable
   */
  properties22?: BoYesNoEnum | null;
  /**
   * Properties 23.
   * @nullable
   */
  properties23?: BoYesNoEnum | null;
  /**
   * Properties 24.
   * @nullable
   */
  properties24?: BoYesNoEnum | null;
  /**
   * Properties 25.
   * @nullable
   */
  properties25?: BoYesNoEnum | null;
  /**
   * Properties 26.
   * @nullable
   */
  properties26?: BoYesNoEnum | null;
  /**
   * Properties 27.
   * @nullable
   */
  properties27?: BoYesNoEnum | null;
  /**
   * Properties 28.
   * @nullable
   */
  properties28?: BoYesNoEnum | null;
  /**
   * Properties 29.
   * @nullable
   */
  properties29?: BoYesNoEnum | null;
  /**
   * Properties 30.
   * @nullable
   */
  properties30?: BoYesNoEnum | null;
  /**
   * Properties 31.
   * @nullable
   */
  properties31?: BoYesNoEnum | null;
  /**
   * Properties 32.
   * @nullable
   */
  properties32?: BoYesNoEnum | null;
  /**
   * Properties 33.
   * @nullable
   */
  properties33?: BoYesNoEnum | null;
  /**
   * Properties 34.
   * @nullable
   */
  properties34?: BoYesNoEnum | null;
  /**
   * Properties 35.
   * @nullable
   */
  properties35?: BoYesNoEnum | null;
  /**
   * Properties 36.
   * @nullable
   */
  properties36?: BoYesNoEnum | null;
  /**
   * Properties 37.
   * @nullable
   */
  properties37?: BoYesNoEnum | null;
  /**
   * Properties 38.
   * @nullable
   */
  properties38?: BoYesNoEnum | null;
  /**
   * Properties 39.
   * @nullable
   */
  properties39?: BoYesNoEnum | null;
  /**
   * Properties 40.
   * @nullable
   */
  properties40?: BoYesNoEnum | null;
  /**
   * Properties 41.
   * @nullable
   */
  properties41?: BoYesNoEnum | null;
  /**
   * Properties 42.
   * @nullable
   */
  properties42?: BoYesNoEnum | null;
  /**
   * Properties 43.
   * @nullable
   */
  properties43?: BoYesNoEnum | null;
  /**
   * Properties 44.
   * @nullable
   */
  properties44?: BoYesNoEnum | null;
  /**
   * Properties 45.
   * @nullable
   */
  properties45?: BoYesNoEnum | null;
  /**
   * Properties 46.
   * @nullable
   */
  properties46?: BoYesNoEnum | null;
  /**
   * Properties 47.
   * @nullable
   */
  properties47?: BoYesNoEnum | null;
  /**
   * Properties 48.
   * @nullable
   */
  properties48?: BoYesNoEnum | null;
  /**
   * Properties 49.
   * @nullable
   */
  properties49?: BoYesNoEnum | null;
  /**
   * Properties 50.
   * @nullable
   */
  properties50?: BoYesNoEnum | null;
  /**
   * Properties 51.
   * @nullable
   */
  properties51?: BoYesNoEnum | null;
  /**
   * Properties 52.
   * @nullable
   */
  properties52?: BoYesNoEnum | null;
  /**
   * Properties 53.
   * @nullable
   */
  properties53?: BoYesNoEnum | null;
  /**
   * Properties 54.
   * @nullable
   */
  properties54?: BoYesNoEnum | null;
  /**
   * Properties 55.
   * @nullable
   */
  properties55?: BoYesNoEnum | null;
  /**
   * Properties 56.
   * @nullable
   */
  properties56?: BoYesNoEnum | null;
  /**
   * Properties 57.
   * @nullable
   */
  properties57?: BoYesNoEnum | null;
  /**
   * Properties 58.
   * @nullable
   */
  properties58?: BoYesNoEnum | null;
  /**
   * Properties 59.
   * @nullable
   */
  properties59?: BoYesNoEnum | null;
  /**
   * Properties 60.
   * @nullable
   */
  properties60?: BoYesNoEnum | null;
  /**
   * Properties 61.
   * @nullable
   */
  properties61?: BoYesNoEnum | null;
  /**
   * Properties 62.
   * @nullable
   */
  properties62?: BoYesNoEnum | null;
  /**
   * Properties 63.
   * @nullable
   */
  properties63?: BoYesNoEnum | null;
  /**
   * Properties 64.
   * @nullable
   */
  properties64?: BoYesNoEnum | null;
  /**
   * Company Registration Number.
   * @nullable
   */
  companyRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Verification Number.
   * @nullable
   */
  verificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Base Object.
   * @nullable
   */
  discountBaseObject?: DiscountGroupBaseObjectEnum | null;
  /**
   * Discount Relations.
   * @nullable
   */
  discountRelations?: DiscountGroupRelationsEnum | null;
  /**
   * Type Report.
   * @nullable
   */
  typeReport?: AssesseeTypeEnum | null;
  /**
   * Threshold Overlook.
   * @nullable
   */
  thresholdOverlook?: BoYesNoEnum | null;
  /**
   * Surcharge Overlook.
   * @nullable
   */
  surchargeOverlook?: BoYesNoEnum | null;
  /**
   * Down Payment Interim Account.
   * @nullable
   */
  downPaymentInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Code 347.
   * @nullable
   */
  operationCode347?: OperationCode347Enum | null;
  /**
   * Insurance Operation 347.
   * @nullable
   */
  insuranceOperation347?: BoYesNoEnum | null;
  /**
   * Hierarchical Deduction.
   * @nullable
   */
  hierarchicalDeduction?: BoYesNoEnum | null;
  /**
   * Shaam Group.
   * @nullable
   */
  shaamGroup?: ShaamGroupEnum | null;
  /**
   * Withholding Tax Certified.
   * @nullable
   */
  withholdingTaxCertified?: BoYesNoEnum | null;
  /**
   * Bookkeeping Certified.
   * @nullable
   */
  bookkeepingCertified?: BoYesNoEnum | null;
  /**
   * Planning Group.
   * @nullable
   */
  planningGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Affiliate.
   * @nullable
   */
  affiliate?: BoYesNoEnum | null;
  /**
   * Industry.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Vat Id Num.
   * @nullable
   */
  vatIdNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Datev Account.
   * @nullable
   */
  datevAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Datev First Data Entry.
   * @nullable
   */
  datevFirstDataEntry?: BoYesNoEnum | null;
  /**
   * Use Shipped Goods Account.
   * @nullable
   */
  useShippedGoodsAccount?: BoYesNoEnum | null;
  /**
   * Gts Reg No.
   * @nullable
   */
  gtsRegNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gts Bank Account No.
   * @nullable
   */
  gtsBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gts Billing Addr Tel.
   * @nullable
   */
  gtsBillingAddrTel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Tax Web Site.
   * @nullable
   */
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * House Bank Iban.
   * @nullable
   */
  houseBankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Registration Number.
   * @nullable
   */
  vatRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Representative Name.
   * @nullable
   */
  representativeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry Type.
   * @nullable
   */
  industryType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Type.
   * @nullable
   */
  businessType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Automatic Posting.
   * @nullable
   */
  automaticPosting?: AutomaticPostingEnum | null;
  /**
   * Interest Account.
   * @nullable
   */
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Account.
   * @nullable
   */
  feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Alias Name.
   * @nullable
   */
  aliasName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Blanket Agreement Number.
   * @nullable
   */
  defaultBlanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Effective Discount.
   * @nullable
   */
  effectiveDiscount?: DiscountGroupRelationsEnum | null;
  /**
   * No Discounts.
   * @nullable
   */
  noDiscounts?: BoYesNoEnum | null;
  /**
   * Effective Price.
   * @nullable
   */
  effectivePrice?: EffectivePriceEnum | null;
  /**
   * Effective Price Considers Price Before Discount.
   * @nullable
   */
  effectivePriceConsidersPriceBeforeDiscount?: BoYesNoEnum | null;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Edi Sender Id.
   * @nullable
   */
  ediSenderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Edi Recipient Id.
   * @nullable
   */
  ediRecipientId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Residen Number.
   * @nullable
   */
  residenNumber?: ResidenceNumberTypeEnum | null;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relationship Date From.
   * @nullable
   */
  relationshipDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Relationship Date Till.
   * @nullable
   */
  relationshipDateTill?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Unified Federal Tax Id.
   * @nullable
   */
  unifiedFederalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Type Of Operation.
   * @nullable
   */
  typeOfOperation?: TypeOfOperationEnum | null;
  /**
   * Endorsable Checks From Bp.
   * @nullable
   */
  endorsableChecksFromBp?: BoYesNoEnum | null;
  /**
   * Accepts Endorsed Checks.
   * @nullable
   */
  acceptsEndorsedChecks?: BoYesNoEnum | null;
  /**
   * Owner Code.
   * @nullable
   */
  ownerCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Block Sending Marketing Content.
   * @nullable
   */
  blockSendingMarketingContent?: BoYesNoEnum | null;
  /**
   * Agent Code.
   * @nullable
   */
  agentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Mode.
   * @nullable
   */
  priceMode?: PriceModeEnum | null;
  /**
   * E Doc Generation Type.
   * @nullable
   */
  eDocGenerationType?: EDocGenerationTypeEnum | null;
  /**
   * E Doc Street.
   * @nullable
   */
  eDocStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Street Number.
   * @nullable
   */
  eDocStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Building Number.
   * @nullable
   */
  eDocBuildingNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Doc Zip Code.
   * @nullable
   */
  eDocZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc City.
   * @nullable
   */
  eDocCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Country.
   * @nullable
   */
  eDocCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc District.
   * @nullable
   */
  eDocDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Representative First Name.
   * @nullable
   */
  eDocRepresentativeFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Representative Surname.
   * @nullable
   */
  eDocRepresentativeSurname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Representative Company.
   * @nullable
   */
  eDocRepresentativeCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Representative Fiscal Code.
   * @nullable
   */
  eDocRepresentativeFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Representative Additional Id.
   * @nullable
   */
  eDocRepresentativeAdditionalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Pec Address.
   * @nullable
   */
  eDocPecAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ipa Code For Pa.
   * @nullable
   */
  ipaCodeForPa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Exemption Max Amount Validation Type.
   * @nullable
   */
  exemptionMaxAmountValidationType?: ExemptionMaxAmountValidationTypeEnum | null;
  /**
   * E Commerce Merchant Id.
   * @nullable
   */
  eCommerceMerchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Bill To Addr To Determine Tax.
   * @nullable
   */
  useBillToAddrToDetermineTax?: BoYesNoEnum | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Default Transporter Entry.
   * @nullable
   */
  defaultTransporterEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Transporter Line Number.
   * @nullable
   */
  defaultTransporterLineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fce Relevant.
   * @nullable
   */
  fceRelevant?: BoYesNoEnum | null;
  /**
   * Fce Validate Base Delivery.
   * @nullable
   */
  fceValidateBaseDelivery?: BoYesNoEnum | null;
  /**
   * Main Usage.
   * @nullable
   */
  mainUsage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Books Vat Exemption Cause.
   * @nullable
   */
  eBooksVatExemptionCause?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Legal Text.
   * @nullable
   */
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Version.
   * @nullable
   */
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Exchange Rate For Incoming Payment.
   * @nullable
   */
  exchangeRateForIncomingPayment?: BoYesNoEnum | null;
  /**
   * Exchange Rate For Outgoing Payment.
   * @nullable
   */
  exchangeRateForOutgoingPayment?: BoYesNoEnum | null;
  /**
   * Certificate Details.
   * @nullable
   */
  certificateDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Currency.
   * @nullable
   */
  defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eori Number.
   * @nullable
   */
  eoriNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fce As Payment Means.
   * @nullable
   */
  fceAsPaymentMeans?: BoYesNoEnum | null;
  /**
   * Not Relevant For Monthly Invoice.
   * @nullable
   */
  notRelevantForMonthlyInvoice?: BoYesNoEnum | null;
  /**
   * U Potential.
   * @nullable
   */
  uPotential?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Fax Buchhaltung.
   * @nullable
   */
  uFaxBuchhaltung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Planung E.
   * @nullable
   */
  uPlanungE?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Planung U.
   * @nullable
   */
  uPlanungU?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Kundenbesuche.
   * @nullable
   */
  uKundenbesuche?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Cor Form Type.
   * @nullable
   */
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Buchaltung Info.
   * @nullable
   */
  uBuchaltungInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Re Kopien.
   * @nullable
   */
  uReKopien?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bd Erst.
   * @nullable
   */
  uBdErst?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bd Datev.
   * @nullable
   */
  uBdDatev?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Datanormk.
   * @nullable
   */
  uDatanormk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U L Websuche.
   * @nullable
   */
  uLWebsuche?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Datanormi.
   */
  uDatanormi!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Kundenbetreuer.
   * @nullable
   */
  uKundenbetreuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kdinfopreis.
   * @nullable
   */
  uKdinfopreis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kdinfolv.
   * @nullable
   */
  uKdinfolv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kdinfotechnik.
   * @nullable
   */
  uKdinfotechnik?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kdinfobesonders.
   * @nullable
   */
  uKdinfobesonders?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Adtour.
   * @nullable
   */
  uAdtour?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Planung E Fj.
   * @nullable
   */
  uPlanungEFj?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Planung U Fj.
   * @nullable
   */
  uPlanungUFj?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Kundenbesuche Fj.
   * @nullable
   */
  uKundenbesucheFj?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Actovent.
   * @nullable
   */
  uActovent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kdinfofracht.
   * @nullable
   */
  uKdinfofracht?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Temp Preis.
   * @nullable
   */
  uTempPreis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kreditversicherung.
   * @nullable
   */
  uKreditversicherung?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Erp System.
   * @nullable
   */
  uErpSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Anlieferung.
   * @nullable
   */
  uAnlieferung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  /**
   * Bp Addresses.
   * @nullable
   */
  bpAddresses?: BpAddress<T>[] | null;
  /**
   * Contact Employees.
   * @nullable
   */
  contactEmployees?: ContactEmployee<T>[] | null;
  /**
   * Bp Account Receivable Payble Collection.
   * @nullable
   */
  bpAccountReceivablePaybleCollection?: BpAccountReceivablePayble<T>[] | null;
  /**
   * Bp Payment Methods.
   * @nullable
   */
  bpPaymentMethods?: BpPaymentMethod<T>[] | null;
  /**
   * Bp Withholding Tax Collection.
   * @nullable
   */
  bpWithholdingTaxCollection?: BpWithholdingTax<T>[] | null;
  /**
   * Bp Payment Dates.
   * @nullable
   */
  bpPaymentDates?: BpPaymentDate<T>[] | null;
  /**
   * Bp Branch Assignment.
   * @nullable
   */
  bpBranchAssignment?: BpBranchAssignmentItem<T>[] | null;
  /**
   * Bp Bank Accounts.
   * @nullable
   */
  bpBankAccounts?: BpBankAccount<T>[] | null;
  /**
   * Bp Fiscal Tax Id Collection.
   * @nullable
   */
  bpFiscalTaxIdCollection?: BpFiscalTaxId<T>[] | null;
  /**
   * Discount Groups.
   * @nullable
   */
  discountGroups?: DiscountGroup<T>[] | null;
  /**
   * Bp Intrastat Extension.
   * @nullable
   */
  bpIntrastatExtension?: BpIntrastatExtension<T> | null;
  /**
   * Bp Block Sending Marketing Contents.
   * @nullable
   */
  bpBlockSendingMarketingContents?: BpBlockSendingMarketingContent<T>[] | null;
  /**
   * Bp Currencies Collection.
   * @nullable
   */
  bpCurrenciesCollection?: BpCurrencies<T>[] | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link LandedCosts} entity.
   */
  landedCosts!: LandedCosts<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransfers} entity.
   */
  stockTransfers!: StockTransfers<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoice} entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link PartnersSetups} entity.
   */
  partnersSetups!: PartnersSetups<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-many navigation property to the {@link BpVatExemptions} entity.
   */
  bpVatExemptions!: BpVatExemptions<T>[];
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];
  /**
   * One-to-many navigation property to the {@link AlternateCatNum} entity.
   */
  alternateCatNum!: AlternateCatNum<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceContracts} entity.
   */
  serviceContracts!: ServiceContracts<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link MaterialRevaluation} entity.
   */
  materialRevaluation!: MaterialRevaluation<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTransferRequests} entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests<T>[];
  /**
   * One-to-many navigation property to the {@link ExportDeterminations} entity.
   */
  exportDeterminations!: ExportDeterminations<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransferDrafts} entity.
   */
  stockTransferDrafts!: StockTransferDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link DeductionTaxHierarchies} entity.
   */
  deductionTaxHierarchies!: DeductionTaxHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link Contacts} entity.
   */
  contacts!: Contacts<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPartnerGroups} entity.
   */
  businessPartnerGroup?: BusinessPartnerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsType?: PaymentTermsTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceLists} entity.
   */
  priceList?: PriceLists<T> | null;
  /**
   * One-to-one navigation property to the {@link CommissionGroups} entity.
   */
  commissionGroup?: CommissionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency2?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup2?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingTypes} entity.
   */
  shippingType2?: ShippingTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link FactoringIndicators} entity.
   */
  factoringIndicator?: FactoringIndicators<T> | null;
  /**
   * One-to-one navigation property to the {@link CreditCards} entity.
   */
  creditCard?: CreditCards<T> | null;
  /**
   * One-to-one navigation property to the {@link BpPriorities} entity.
   */
  bpPriority?: BpPriorities<T> | null;
  /**
   * One-to-one navigation property to the {@link Forms1099} entity.
   */
  forms1099?: Forms1099<T> | null;
  /**
   * One-to-one navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethod?: WizardPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link DunningLetters} entity.
   */
  dunningLetter?: DunningLetters<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentBlocks} entity.
   */
  paymentBlock2?: PaymentBlocks<T> | null;
  /**
   * One-to-one navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCode?: WithholdingTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Territories} entity.
   */
  territory2?: Territories<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCode?: SalesTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link DunningTerms} entity.
   */
  dunningTerm2?: DunningTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link UserLanguages} entity.
   */
  userLanguage?: UserLanguages<T> | null;
  /**
   * One-to-one navigation property to the {@link DeductionTaxGroups} entity.
   */
  deductionTaxGroup?: DeductionTaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ClosingDateProcedure} entity.
   */
  closingDateProcedure?: ClosingDateProcedure<T> | null;
  /**
   * One-to-one navigation property to the {@link BankChargesAllocationCodes} entity.
   */
  bankChargesAllocationCode2?: BankChargesAllocationCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Industries} entity.
   */
  industry2?: Industries<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxWebSites} entity.
   */
  taxWebSite?: TaxWebSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Campaigns} entity.
   */
  campaign?: Campaigns<T> | null;
  /**
   * One-to-one navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreement?: BlanketAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link EwbTransporters} entity.
   */
  ewbTransporter?: EwbTransporters<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];
  /**
   * One-to-many navigation property to the {@link DownPayments} entity.
   */
  downPayments!: DownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTaxInvoices} entity.
   */
  salesTaxInvoices!: SalesTaxInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDownPayments} entity.
   */
  purchaseDownPayments!: PurchaseDownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseReturns} entity.
   */
  purchaseReturns!: PurchaseReturns<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrders} entity.
   */
  purchaseOrders!: PurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link Quotations} entity.
   */
  quotations!: Quotations<T>[];
  /**
   * One-to-many navigation property to the {@link Returns} entity.
   */
  returns!: Returns<T>[];
  /**
   * One-to-many navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationAreas!: DepreciationAreas<T>[];
  /**
   * One-to-many navigation property to the {@link SpecialPrices} entity.
   */
  specialPrices!: SpecialPrices<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link BankPages} entity.
   */
  bankPages!: BankPages<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseTaxInvoices} entity.
   */
  purchaseTaxInvoices!: PurchaseTaxInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];

  constructor(readonly _entityApi: BusinessPartnersApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cardCode: DeserializedType<T, 'Edm.String'>;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  cardType?: BoCardTypes | null;
  groupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  mailAddress?: DeserializedType<T, 'Edm.String'> | null;
  mailZipCode?: DeserializedType<T, 'Edm.String'> | null;
  phone1?: DeserializedType<T, 'Edm.String'> | null;
  phone2?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  payTermsGrpCode?: DeserializedType<T, 'Edm.Int32'> | null;
  creditLimit?: DeserializedType<T, 'Edm.Double'> | null;
  maxCommitment?: DeserializedType<T, 'Edm.Double'> | null;
  discountPercent?: DeserializedType<T, 'Edm.Double'> | null;
  vatLiable?: BoVatStatus | null;
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  deductibleAtSource?: BoYesNoEnum | null;
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  deductionValidUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  priceListNum?: DeserializedType<T, 'Edm.Int32'> | null;
  intrestRatePercent?: DeserializedType<T, 'Edm.Double'> | null;
  commissionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  commissionGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  freeText?: DeserializedType<T, 'Edm.String'> | null;
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  rateDiffAccount?: DeserializedType<T, 'Edm.String'> | null;
  cellular?: DeserializedType<T, 'Edm.String'> | null;
  avarageLate?: DeserializedType<T, 'Edm.Int32'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  mailCity?: DeserializedType<T, 'Edm.String'> | null;
  mailCounty?: DeserializedType<T, 'Edm.String'> | null;
  mailCountry?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  picture?: DeserializedType<T, 'Edm.String'> | null;
  defaultAccount?: DeserializedType<T, 'Edm.String'> | null;
  defaultBranch?: DeserializedType<T, 'Edm.String'> | null;
  defaultBankCode?: DeserializedType<T, 'Edm.String'> | null;
  additionalId?: DeserializedType<T, 'Edm.String'> | null;
  pager?: DeserializedType<T, 'Edm.String'> | null;
  fatherCard?: DeserializedType<T, 'Edm.String'> | null;
  cardForeignName?: DeserializedType<T, 'Edm.String'> | null;
  fatherType?: BoFatherCardTypes | null;
  deductionOffice?: DeserializedType<T, 'Edm.String'> | null;
  exportCode?: DeserializedType<T, 'Edm.String'> | null;
  minIntrest?: DeserializedType<T, 'Edm.Double'> | null;
  currentAccountBalance?: DeserializedType<T, 'Edm.Double'> | null;
  openDeliveryNotesBalance?: DeserializedType<T, 'Edm.Double'> | null;
  openOrdersBalance?: DeserializedType<T, 'Edm.Double'> | null;
  openChecksBalance?: DeserializedType<T, 'Edm.Double'> | null;
  vatGroup?: DeserializedType<T, 'Edm.String'> | null;
  shippingType?: DeserializedType<T, 'Edm.Int32'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  indicator?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  creditCardCode?: DeserializedType<T, 'Edm.Int32'> | null;
  creditCardNum?: DeserializedType<T, 'Edm.String'> | null;
  creditCardExpiration?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  debitorAccount?: DeserializedType<T, 'Edm.String'> | null;
  openOpportunities?: DeserializedType<T, 'Edm.Int32'> | null;
  valid?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  frozen?: BoYesNoEnum | null;
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  billToState?: DeserializedType<T, 'Edm.String'> | null;
  shipToState?: DeserializedType<T, 'Edm.String'> | null;
  exemptNum?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.Int32'> | null;
  formCode1099?: DeserializedType<T, 'Edm.Int32'> | null;
  box1099?: DeserializedType<T, 'Edm.String'> | null;
  peymentMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  backOrder?: BoYesNoEnum | null;
  partialDelivery?: BoYesNoEnum | null;
  blockDunning?: BoYesNoEnum | null;
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  houseBankCountry?: DeserializedType<T, 'Edm.String'> | null;
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  shipToDefault?: DeserializedType<T, 'Edm.String'> | null;
  dunningLevel?: DeserializedType<T, 'Edm.Int32'> | null;
  dunningDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  collectionAuthorization?: BoYesNoEnum | null;
  dme?: DeserializedType<T, 'Edm.String'> | null;
  instructionKey?: DeserializedType<T, 'Edm.String'> | null;
  singlePayment?: BoYesNoEnum | null;
  isrBillerId?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlock?: BoYesNoEnum | null;
  referenceDetails?: DeserializedType<T, 'Edm.String'> | null;
  houseBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  ownerIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlockDescription?: DeserializedType<T, 'Edm.Int32'> | null;
  taxExemptionLetterNum?: DeserializedType<T, 'Edm.String'> | null;
  maxAmountOfExemption?: DeserializedType<T, 'Edm.Double'> | null;
  exemptionValidityDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  exemptionValidityDateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  linkedBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
  lastMultiReconciliationNum?: DeserializedType<T, 'Edm.Int32'> | null;
  deferredTax?: BoYesNoEnum | null;
  equalization?: BoYesNoEnum | null;
  subjectToWithholdingTax?: BoYesNoNoneEnum | null;
  certificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  nationalInsuranceNum?: DeserializedType<T, 'Edm.String'> | null;
  accrualCriteria?: BoYesNoEnum | null;
  wtCode?: DeserializedType<T, 'Edm.String'> | null;
  billToBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  downPaymentClearAct?: DeserializedType<T, 'Edm.String'> | null;
  channelBp?: DeserializedType<T, 'Edm.String'> | null;
  defaultTechnician?: DeserializedType<T, 'Edm.Int32'> | null;
  billtoDefault?: DeserializedType<T, 'Edm.String'> | null;
  customerBillofExchangDisc?: DeserializedType<T, 'Edm.String'> | null;
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  shipToBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  customerBillofExchangPres?: DeserializedType<T, 'Edm.String'> | null;
  projectCode?: DeserializedType<T, 'Edm.String'> | null;
  vatGroupLatinAmerica?: DeserializedType<T, 'Edm.String'> | null;
  dunningTerm?: DeserializedType<T, 'Edm.String'> | null;
  website?: DeserializedType<T, 'Edm.String'> | null;
  otherReceivablePayable?: DeserializedType<T, 'Edm.String'> | null;
  billofExchangeonCollection?: DeserializedType<T, 'Edm.String'> | null;
  companyPrivate?: BoCardCompanyTypes | null;
  languageCode?: DeserializedType<T, 'Edm.Int32'> | null;
  unpaidBillofExchange?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxDeductionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  closingDateProcedureNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  profession?: DeserializedType<T, 'Edm.String'> | null;
  bankChargesAllocationCode?: DeserializedType<T, 'Edm.String'> | null;
  taxRoundingRule?: BoTaxRoundingRuleTypes | null;
  properties1?: BoYesNoEnum | null;
  properties2?: BoYesNoEnum | null;
  properties3?: BoYesNoEnum | null;
  properties4?: BoYesNoEnum | null;
  properties5?: BoYesNoEnum | null;
  properties6?: BoYesNoEnum | null;
  properties7?: BoYesNoEnum | null;
  properties8?: BoYesNoEnum | null;
  properties9?: BoYesNoEnum | null;
  properties10?: BoYesNoEnum | null;
  properties11?: BoYesNoEnum | null;
  properties12?: BoYesNoEnum | null;
  properties13?: BoYesNoEnum | null;
  properties14?: BoYesNoEnum | null;
  properties15?: BoYesNoEnum | null;
  properties16?: BoYesNoEnum | null;
  properties17?: BoYesNoEnum | null;
  properties18?: BoYesNoEnum | null;
  properties19?: BoYesNoEnum | null;
  properties20?: BoYesNoEnum | null;
  properties21?: BoYesNoEnum | null;
  properties22?: BoYesNoEnum | null;
  properties23?: BoYesNoEnum | null;
  properties24?: BoYesNoEnum | null;
  properties25?: BoYesNoEnum | null;
  properties26?: BoYesNoEnum | null;
  properties27?: BoYesNoEnum | null;
  properties28?: BoYesNoEnum | null;
  properties29?: BoYesNoEnum | null;
  properties30?: BoYesNoEnum | null;
  properties31?: BoYesNoEnum | null;
  properties32?: BoYesNoEnum | null;
  properties33?: BoYesNoEnum | null;
  properties34?: BoYesNoEnum | null;
  properties35?: BoYesNoEnum | null;
  properties36?: BoYesNoEnum | null;
  properties37?: BoYesNoEnum | null;
  properties38?: BoYesNoEnum | null;
  properties39?: BoYesNoEnum | null;
  properties40?: BoYesNoEnum | null;
  properties41?: BoYesNoEnum | null;
  properties42?: BoYesNoEnum | null;
  properties43?: BoYesNoEnum | null;
  properties44?: BoYesNoEnum | null;
  properties45?: BoYesNoEnum | null;
  properties46?: BoYesNoEnum | null;
  properties47?: BoYesNoEnum | null;
  properties48?: BoYesNoEnum | null;
  properties49?: BoYesNoEnum | null;
  properties50?: BoYesNoEnum | null;
  properties51?: BoYesNoEnum | null;
  properties52?: BoYesNoEnum | null;
  properties53?: BoYesNoEnum | null;
  properties54?: BoYesNoEnum | null;
  properties55?: BoYesNoEnum | null;
  properties56?: BoYesNoEnum | null;
  properties57?: BoYesNoEnum | null;
  properties58?: BoYesNoEnum | null;
  properties59?: BoYesNoEnum | null;
  properties60?: BoYesNoEnum | null;
  properties61?: BoYesNoEnum | null;
  properties62?: BoYesNoEnum | null;
  properties63?: BoYesNoEnum | null;
  properties64?: BoYesNoEnum | null;
  companyRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  verificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  discountBaseObject?: DiscountGroupBaseObjectEnum | null;
  discountRelations?: DiscountGroupRelationsEnum | null;
  typeReport?: AssesseeTypeEnum | null;
  thresholdOverlook?: BoYesNoEnum | null;
  surchargeOverlook?: BoYesNoEnum | null;
  downPaymentInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  operationCode347?: OperationCode347Enum | null;
  insuranceOperation347?: BoYesNoEnum | null;
  hierarchicalDeduction?: BoYesNoEnum | null;
  shaamGroup?: ShaamGroupEnum | null;
  withholdingTaxCertified?: BoYesNoEnum | null;
  bookkeepingCertified?: BoYesNoEnum | null;
  planningGroup?: DeserializedType<T, 'Edm.String'> | null;
  affiliate?: BoYesNoEnum | null;
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  vatIdNum?: DeserializedType<T, 'Edm.String'> | null;
  datevAccount?: DeserializedType<T, 'Edm.String'> | null;
  datevFirstDataEntry?: BoYesNoEnum | null;
  useShippedGoodsAccount?: BoYesNoEnum | null;
  gtsRegNo?: DeserializedType<T, 'Edm.String'> | null;
  gtsBankAccountNo?: DeserializedType<T, 'Edm.String'> | null;
  gtsBillingAddrTel?: DeserializedType<T, 'Edm.String'> | null;
  eTaxWebSite?: DeserializedType<T, 'Edm.Int32'> | null;
  houseBankIban?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  representativeName?: DeserializedType<T, 'Edm.String'> | null;
  industryType?: DeserializedType<T, 'Edm.String'> | null;
  businessType?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  automaticPosting?: AutomaticPostingEnum | null;
  interestAccount?: DeserializedType<T, 'Edm.String'> | null;
  feeAccount?: DeserializedType<T, 'Edm.String'> | null;
  campaignNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  aliasName?: DeserializedType<T, 'Edm.String'> | null;
  defaultBlanketAgreementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  effectiveDiscount?: DiscountGroupRelationsEnum | null;
  noDiscounts?: BoYesNoEnum | null;
  effectivePrice?: EffectivePriceEnum | null;
  effectivePriceConsidersPriceBeforeDiscount?: BoYesNoEnum | null;
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  ediSenderId?: DeserializedType<T, 'Edm.String'> | null;
  ediRecipientId?: DeserializedType<T, 'Edm.String'> | null;
  residenNumber?: ResidenceNumberTypeEnum | null;
  relationshipCode?: DeserializedType<T, 'Edm.String'> | null;
  relationshipDateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  relationshipDateTill?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  unifiedFederalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  typeOfOperation?: TypeOfOperationEnum | null;
  endorsableChecksFromBp?: BoYesNoEnum | null;
  acceptsEndorsedChecks?: BoYesNoEnum | null;
  ownerCode?: DeserializedType<T, 'Edm.Int32'> | null;
  blockSendingMarketingContent?: BoYesNoEnum | null;
  agentCode?: DeserializedType<T, 'Edm.String'> | null;
  priceMode?: PriceModeEnum | null;
  eDocGenerationType?: EDocGenerationTypeEnum | null;
  eDocStreet?: DeserializedType<T, 'Edm.String'> | null;
  eDocStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  eDocBuildingNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  eDocZipCode?: DeserializedType<T, 'Edm.String'> | null;
  eDocCity?: DeserializedType<T, 'Edm.String'> | null;
  eDocCountry?: DeserializedType<T, 'Edm.String'> | null;
  eDocDistrict?: DeserializedType<T, 'Edm.String'> | null;
  eDocRepresentativeFirstName?: DeserializedType<T, 'Edm.String'> | null;
  eDocRepresentativeSurname?: DeserializedType<T, 'Edm.String'> | null;
  eDocRepresentativeCompany?: DeserializedType<T, 'Edm.String'> | null;
  eDocRepresentativeFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  eDocRepresentativeAdditionalId?: DeserializedType<T, 'Edm.String'> | null;
  eDocPecAddress?: DeserializedType<T, 'Edm.String'> | null;
  ipaCodeForPa?: DeserializedType<T, 'Edm.String'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  exemptionMaxAmountValidationType?: ExemptionMaxAmountValidationTypeEnum | null;
  eCommerceMerchantId?: DeserializedType<T, 'Edm.String'> | null;
  useBillToAddrToDetermineTax?: BoYesNoEnum | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  defaultTransporterEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultTransporterLineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  fceRelevant?: BoYesNoEnum | null;
  fceValidateBaseDelivery?: BoYesNoEnum | null;
  mainUsage?: DeserializedType<T, 'Edm.Int32'> | null;
  eBooksVatExemptionCause?: DeserializedType<T, 'Edm.Int32'> | null;
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  exchangeRateForIncomingPayment?: BoYesNoEnum | null;
  exchangeRateForOutgoingPayment?: BoYesNoEnum | null;
  certificateDetails?: DeserializedType<T, 'Edm.String'> | null;
  defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  eoriNumber?: DeserializedType<T, 'Edm.String'> | null;
  fceAsPaymentMeans?: BoYesNoEnum | null;
  notRelevantForMonthlyInvoice?: BoYesNoEnum | null;
  uPotential?: DeserializedType<T, 'Edm.Int32'> | null;
  uFaxBuchhaltung?: DeserializedType<T, 'Edm.String'> | null;
  uPlanungE?: DeserializedType<T, 'Edm.Int32'> | null;
  uPlanungU?: DeserializedType<T, 'Edm.Int32'> | null;
  uKundenbesuche?: DeserializedType<T, 'Edm.Int32'> | null;
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  uBuchaltungInfo?: DeserializedType<T, 'Edm.String'> | null;
  uReKopien?: DeserializedType<T, 'Edm.Int32'> | null;
  uBdErst?: DeserializedType<T, 'Edm.String'> | null;
  uBdDatev?: DeserializedType<T, 'Edm.String'> | null;
  uDatanormk?: DeserializedType<T, 'Edm.String'> | null;
  uLWebsuche?: DeserializedType<T, 'Edm.String'> | null;
  uDatanormi: DeserializedType<T, 'Edm.String'>;
  uKundenbetreuer?: DeserializedType<T, 'Edm.String'> | null;
  uKdinfopreis?: DeserializedType<T, 'Edm.String'> | null;
  uKdinfolv?: DeserializedType<T, 'Edm.String'> | null;
  uKdinfotechnik?: DeserializedType<T, 'Edm.String'> | null;
  uKdinfobesonders?: DeserializedType<T, 'Edm.String'> | null;
  uAdtour?: DeserializedType<T, 'Edm.String'> | null;
  uPlanungEFj?: DeserializedType<T, 'Edm.Int32'> | null;
  uPlanungUFj?: DeserializedType<T, 'Edm.Int32'> | null;
  uKundenbesucheFj?: DeserializedType<T, 'Edm.Int32'> | null;
  uActovent?: DeserializedType<T, 'Edm.String'> | null;
  uKdinfofracht?: DeserializedType<T, 'Edm.String'> | null;
  uTempPreis?: DeserializedType<T, 'Edm.String'> | null;
  uKreditversicherung?: DeserializedType<T, 'Edm.Int32'> | null;
  uErpSystem?: DeserializedType<T, 'Edm.String'> | null;
  uAnlieferung?: DeserializedType<T, 'Edm.String'> | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  bpAddresses?: BpAddress<T>[] | null;
  contactEmployees?: ContactEmployee<T>[] | null;
  bpAccountReceivablePaybleCollection?: BpAccountReceivablePayble<T>[] | null;
  bpPaymentMethods?: BpPaymentMethod<T>[] | null;
  bpWithholdingTaxCollection?: BpWithholdingTax<T>[] | null;
  bpPaymentDates?: BpPaymentDate<T>[] | null;
  bpBranchAssignment?: BpBranchAssignmentItem<T>[] | null;
  bpBankAccounts?: BpBankAccount<T>[] | null;
  bpFiscalTaxIdCollection?: BpFiscalTaxId<T>[] | null;
  discountGroups?: DiscountGroup<T>[] | null;
  bpIntrastatExtension?: BpIntrastatExtension<T> | null;
  bpBlockSendingMarketingContents?: BpBlockSendingMarketingContent<T>[] | null;
  bpCurrenciesCollection?: BpCurrencies<T>[] | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  userDefaultGroups: UserDefaultGroupsType<T>[];
  landedCosts: LandedCostsType<T>[];
  stockTransfers: StockTransfersType<T>[];
  warehouses: WarehousesType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  items: ItemsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  partnersSetups: PartnersSetupsType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  bpVatExemptions: BpVatExemptionsType<T>[];
  employeesInfo: EmployeesInfoType<T>[];
  alternateCatNum: AlternateCatNumType<T>[];
  orders: OrdersType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  serviceContracts: ServiceContractsType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  materialRevaluation: MaterialRevaluationType<T>[];
  drafts: DraftsType<T>[];
  inventoryTransferRequests: InventoryTransferRequestsType<T>[];
  exportDeterminations: ExportDeterminationsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  invoices: InvoicesType<T>[];
  creditNotes: CreditNotesType<T>[];
  deductionTaxHierarchies: DeductionTaxHierarchiesType<T>[];
  contacts: ContactsType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartnerGroup?: BusinessPartnerGroupsType<T> | null;
  paymentTermsType?: PaymentTermsTypesType<T> | null;
  priceList?: PriceListsType<T> | null;
  commissionGroup?: CommissionGroupsType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  currency2?: CurrenciesType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  country2?: CountriesType<T> | null;
  vatGroup2?: VatGroupsType<T> | null;
  shippingType2?: ShippingTypesType<T> | null;
  factoringIndicator?: FactoringIndicatorsType<T> | null;
  creditCard?: CreditCardsType<T> | null;
  bpPriority?: BpPrioritiesType<T> | null;
  forms1099?: Forms1099Type<T> | null;
  wizardPaymentMethod?: WizardPaymentMethodsType<T> | null;
  dunningLetter?: DunningLettersType<T> | null;
  paymentBlock2?: PaymentBlocksType<T> | null;
  withholdingTaxCode?: WithholdingTaxCodesType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  territory2?: TerritoriesType<T> | null;
  project?: ProjectsType<T> | null;
  salesTaxCode?: SalesTaxCodesType<T> | null;
  dunningTerm2?: DunningTermsType<T> | null;
  userLanguage?: UserLanguagesType<T> | null;
  deductionTaxGroup?: DeductionTaxGroupsType<T> | null;
  closingDateProcedure?: ClosingDateProcedureType<T> | null;
  bankChargesAllocationCode2?: BankChargesAllocationCodesType<T> | null;
  industry2?: IndustriesType<T> | null;
  taxWebSite?: TaxWebSitesType<T> | null;
  campaign?: CampaignsType<T> | null;
  blanketAgreement?: BlanketAgreementsType<T> | null;
  ewbTransporter?: EwbTransportersType<T> | null;
  productionOrders: ProductionOrdersType<T>[];
  downPayments: DownPaymentsType<T>[];
  salesTaxInvoices: SalesTaxInvoicesType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  activities: ActivitiesType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  depreciationAreas: DepreciationAreasType<T>[];
  specialPrices: SpecialPricesType<T>[];
  projectManagements: ProjectManagementsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  bankPages: BankPagesType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
  purchaseTaxInvoices: PurchaseTaxInvoicesType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
}
