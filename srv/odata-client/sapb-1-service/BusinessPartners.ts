/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnersRequestBuilder } from './BusinessPartnersRequestBuilder';
import { Moment } from 'moment';
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
import { BpIntrastatExtension, BpIntrastatExtensionField } from './BpIntrastatExtension';
import { BpBlockSendingMarketingContent } from './BpBlockSendingMarketingContent';
import { BoCardTypes } from './BoCardTypes';
import { BoVatStatus } from './BoVatStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoFatherCardTypes } from './BoFatherCardTypes';
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
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BusinessPartners" of service "SAPB1".
 */
export class BusinessPartners extends EntityV4 implements BusinessPartnersType {
  /**
   * Technical entity name for BusinessPartners.
   */
  static _entityName = 'BusinessPartners';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Card Type.
   * @nullable
   */
  cardType?: BoCardTypes;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: number;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: string;
  /**
   * Mail Address.
   * @nullable
   */
  mailAddress?: string;
  /**
   * Mail Zip Code.
   * @nullable
   */
  mailZipCode?: string;
  /**
   * Phone 1.
   * @nullable
   */
  phone1?: string;
  /**
   * Phone 2.
   * @nullable
   */
  phone2?: string;
  /**
   * Fax.
   * @nullable
   */
  fax?: string;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: string;
  /**
   * Notes.
   * @nullable
   */
  notes?: string;
  /**
   * Pay Terms Grp Code.
   * @nullable
   */
  payTermsGrpCode?: number;
  /**
   * Credit Limit.
   * @nullable
   */
  creditLimit?: number;
  /**
   * Max Commitment.
   * @nullable
   */
  maxCommitment?: number;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Vat Liable.
   * @nullable
   */
  vatLiable?: BoVatStatus;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Deductible At Source.
   * @nullable
   */
  deductibleAtSource?: BoYesNoEnum;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: number;
  /**
   * Deduction Valid Until.
   * @nullable
   */
  deductionValidUntil?: Moment;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: number;
  /**
   * Intrest Rate Percent.
   * @nullable
   */
  intrestRatePercent?: number;
  /**
   * Commission Percent.
   * @nullable
   */
  commissionPercent?: number;
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: number;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: string;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Rate Diff Account.
   * @nullable
   */
  rateDiffAccount?: string;
  /**
   * Cellular.
   * @nullable
   */
  cellular?: string;
  /**
   * Avarage Late.
   * @nullable
   */
  avarageLate?: number;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * County.
   * @nullable
   */
  county?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Mail City.
   * @nullable
   */
  mailCity?: string;
  /**
   * Mail County.
   * @nullable
   */
  mailCounty?: string;
  /**
   * Mail Country.
   * @nullable
   */
  mailCountry?: string;
  /**
   * Email Address.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Picture.
   * @nullable
   */
  picture?: string;
  /**
   * Default Account.
   * @nullable
   */
  defaultAccount?: string;
  /**
   * Default Branch.
   * @nullable
   */
  defaultBranch?: string;
  /**
   * Default Bank Code.
   * @nullable
   */
  defaultBankCode?: string;
  /**
   * Additional Id.
   * @nullable
   */
  additionalId?: string;
  /**
   * Pager.
   * @nullable
   */
  pager?: string;
  /**
   * Father Card.
   * @nullable
   */
  fatherCard?: string;
  /**
   * Card Foreign Name.
   * @nullable
   */
  cardForeignName?: string;
  /**
   * Father Type.
   * @nullable
   */
  fatherType?: BoFatherCardTypes;
  /**
   * Deduction Office.
   * @nullable
   */
  deductionOffice?: string;
  /**
   * Export Code.
   * @nullable
   */
  exportCode?: string;
  /**
   * Min Intrest.
   * @nullable
   */
  minIntrest?: number;
  /**
   * Current Account Balance.
   * @nullable
   */
  currentAccountBalance?: number;
  /**
   * Open Delivery Notes Balance.
   * @nullable
   */
  openDeliveryNotesBalance?: number;
  /**
   * Open Orders Balance.
   * @nullable
   */
  openOrdersBalance?: number;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Shipping Type.
   * @nullable
   */
  shippingType?: number;
  /**
   * Password.
   * @nullable
   */
  password?: string;
  /**
   * Indicator.
   * @nullable
   */
  indicator?: string;
  /**
   * Iban.
   * @nullable
   */
  iban?: string;
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: number;
  /**
   * Credit Card Num.
   * @nullable
   */
  creditCardNum?: string;
  /**
   * Credit Card Expiration.
   * @nullable
   */
  creditCardExpiration?: Moment;
  /**
   * Debitor Account.
   * @nullable
   */
  debitorAccount?: string;
  /**
   * Open Opportunities.
   * @nullable
   */
  openOpportunities?: number;
  /**
   * Valid.
   * @nullable
   */
  valid?: BoYesNoEnum;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: string;
  /**
   * Frozen.
   * @nullable
   */
  frozen?: BoYesNoEnum;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: Moment;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: Moment;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: string;
  /**
   * Block.
   * @nullable
   */
  block?: string;
  /**
   * Bill To State.
   * @nullable
   */
  billToState?: string;
  /**
   * Exempt Num.
   * @nullable
   */
  exemptNum?: string;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
  /**
   * Form Code 1099.
   * @nullable
   */
  formCode1099?: number;
  /**
   * Box 1099.
   * @nullable
   */
  box1099?: string;
  /**
   * Peyment Method Code.
   * @nullable
   */
  peymentMethodCode?: string;
  /**
   * Back Order.
   * @nullable
   */
  backOrder?: BoYesNoEnum;
  /**
   * Partial Delivery.
   * @nullable
   */
  partialDelivery?: BoYesNoEnum;
  /**
   * Block Dunning.
   * @nullable
   */
  blockDunning?: BoYesNoEnum;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: string;
  /**
   * House Bank.
   * @nullable
   */
  houseBank?: string;
  /**
   * House Bank Country.
   * @nullable
   */
  houseBankCountry?: string;
  /**
   * House Bank Account.
   * @nullable
   */
  houseBankAccount?: string;
  /**
   * Ship To Default.
   * @nullable
   */
  shipToDefault?: string;
  /**
   * Dunning Level.
   * @nullable
   */
  dunningLevel?: number;
  /**
   * Dunning Date.
   * @nullable
   */
  dunningDate?: Moment;
  /**
   * Collection Authorization.
   * @nullable
   */
  collectionAuthorization?: BoYesNoEnum;
  /**
   * Dme.
   * @nullable
   */
  dme?: string;
  /**
   * Instruction Key.
   * @nullable
   */
  instructionKey?: string;
  /**
   * Single Payment.
   * @nullable
   */
  singlePayment?: BoYesNoEnum;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: string;
  /**
   * Payment Block.
   * @nullable
   */
  paymentBlock?: BoYesNoEnum;
  /**
   * Reference Details.
   * @nullable
   */
  referenceDetails?: string;
  /**
   * House Bank Branch.
   * @nullable
   */
  houseBankBranch?: string;
  /**
   * Owner Id Number.
   * @nullable
   */
  ownerIdNumber?: string;
  /**
   * Payment Block Description.
   * @nullable
   */
  paymentBlockDescription?: number;
  /**
   * Tax Exemption Letter Num.
   * @nullable
   */
  taxExemptionLetterNum?: string;
  /**
   * Max Amount Of Exemption.
   * @nullable
   */
  maxAmountOfExemption?: number;
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
   * Linked Business Partner.
   * @nullable
   */
  linkedBusinessPartner?: string;
  /**
   * Last Multi Reconciliation Num.
   * @nullable
   */
  lastMultiReconciliationNum?: number;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum;
  /**
   * Equalization.
   * @nullable
   */
  equalization?: BoYesNoEnum;
  /**
   * Subject To Withholding Tax.
   * @nullable
   */
  subjectToWithholdingTax?: BoYesNoEnum;
  /**
   * Certificate Number.
   * @nullable
   */
  certificateNumber?: string;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: Moment;
  /**
   * National Insurance Num.
   * @nullable
   */
  nationalInsuranceNum?: string;
  /**
   * Accrual Criteria.
   * @nullable
   */
  accrualCriteria?: BoYesNoEnum;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Bill To Building Floor Room.
   * @nullable
   */
  billToBuildingFloorRoom?: string;
  /**
   * Down Payment Clear Act.
   * @nullable
   */
  downPaymentClearAct?: string;
  /**
   * Channel Bp.
   * @nullable
   */
  channelBp?: string;
  /**
   * Default Technician.
   * @nullable
   */
  defaultTechnician?: number;
  /**
   * Billto Default.
   * @nullable
   */
  billtoDefault?: string;
  /**
   * Customer Billof Exchang Disc.
   * @nullable
   */
  customerBillofExchangDisc?: string;
  /**
   * Territory.
   * @nullable
   */
  territory?: number;
  /**
   * Ship To Building Floor Room.
   * @nullable
   */
  shipToBuildingFloorRoom?: string;
  /**
   * Customer Billof Exchang Pres.
   * @nullable
   */
  customerBillofExchangPres?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Vat Group Latin America.
   * @nullable
   */
  vatGroupLatinAmerica?: string;
  /**
   * Dunning Term.
   * @nullable
   */
  dunningTerm?: string;
  /**
   * Website.
   * @nullable
   */
  website?: string;
  /**
   * Other Receivable Payable.
   * @nullable
   */
  otherReceivablePayable?: string;
  /**
   * Billof Exchangeon Collection.
   * @nullable
   */
  billofExchangeonCollection?: string;
  /**
   * Company Private.
   * @nullable
   */
  companyPrivate?: BoCardCompanyTypes;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: number;
  /**
   * Unpaid Billof Exchange.
   * @nullable
   */
  unpaidBillofExchange?: string;
  /**
   * Withholding Tax Deduction Group.
   * @nullable
   */
  withholdingTaxDeductionGroup?: number;
  /**
   * Closing Date Procedure Number.
   * @nullable
   */
  closingDateProcedureNumber?: number;
  /**
   * Profession.
   * @nullable
   */
  profession?: string;
  /**
   * Bank Charges Allocation Code.
   * @nullable
   */
  bankChargesAllocationCode?: string;
  /**
   * Tax Rounding Rule.
   * @nullable
   */
  taxRoundingRule?: BoTaxRoundingRuleTypes;
  /**
   * Properties 1.
   * @nullable
   */
  properties1?: BoYesNoEnum;
  /**
   * Properties 2.
   * @nullable
   */
  properties2?: BoYesNoEnum;
  /**
   * Properties 3.
   * @nullable
   */
  properties3?: BoYesNoEnum;
  /**
   * Properties 4.
   * @nullable
   */
  properties4?: BoYesNoEnum;
  /**
   * Properties 5.
   * @nullable
   */
  properties5?: BoYesNoEnum;
  /**
   * Properties 6.
   * @nullable
   */
  properties6?: BoYesNoEnum;
  /**
   * Properties 7.
   * @nullable
   */
  properties7?: BoYesNoEnum;
  /**
   * Properties 8.
   * @nullable
   */
  properties8?: BoYesNoEnum;
  /**
   * Properties 9.
   * @nullable
   */
  properties9?: BoYesNoEnum;
  /**
   * Properties 10.
   * @nullable
   */
  properties10?: BoYesNoEnum;
  /**
   * Properties 11.
   * @nullable
   */
  properties11?: BoYesNoEnum;
  /**
   * Properties 12.
   * @nullable
   */
  properties12?: BoYesNoEnum;
  /**
   * Properties 13.
   * @nullable
   */
  properties13?: BoYesNoEnum;
  /**
   * Properties 14.
   * @nullable
   */
  properties14?: BoYesNoEnum;
  /**
   * Properties 15.
   * @nullable
   */
  properties15?: BoYesNoEnum;
  /**
   * Properties 16.
   * @nullable
   */
  properties16?: BoYesNoEnum;
  /**
   * Properties 17.
   * @nullable
   */
  properties17?: BoYesNoEnum;
  /**
   * Properties 18.
   * @nullable
   */
  properties18?: BoYesNoEnum;
  /**
   * Properties 19.
   * @nullable
   */
  properties19?: BoYesNoEnum;
  /**
   * Properties 20.
   * @nullable
   */
  properties20?: BoYesNoEnum;
  /**
   * Properties 21.
   * @nullable
   */
  properties21?: BoYesNoEnum;
  /**
   * Properties 22.
   * @nullable
   */
  properties22?: BoYesNoEnum;
  /**
   * Properties 23.
   * @nullable
   */
  properties23?: BoYesNoEnum;
  /**
   * Properties 24.
   * @nullable
   */
  properties24?: BoYesNoEnum;
  /**
   * Properties 25.
   * @nullable
   */
  properties25?: BoYesNoEnum;
  /**
   * Properties 26.
   * @nullable
   */
  properties26?: BoYesNoEnum;
  /**
   * Properties 27.
   * @nullable
   */
  properties27?: BoYesNoEnum;
  /**
   * Properties 28.
   * @nullable
   */
  properties28?: BoYesNoEnum;
  /**
   * Properties 29.
   * @nullable
   */
  properties29?: BoYesNoEnum;
  /**
   * Properties 30.
   * @nullable
   */
  properties30?: BoYesNoEnum;
  /**
   * Properties 31.
   * @nullable
   */
  properties31?: BoYesNoEnum;
  /**
   * Properties 32.
   * @nullable
   */
  properties32?: BoYesNoEnum;
  /**
   * Properties 33.
   * @nullable
   */
  properties33?: BoYesNoEnum;
  /**
   * Properties 34.
   * @nullable
   */
  properties34?: BoYesNoEnum;
  /**
   * Properties 35.
   * @nullable
   */
  properties35?: BoYesNoEnum;
  /**
   * Properties 36.
   * @nullable
   */
  properties36?: BoYesNoEnum;
  /**
   * Properties 37.
   * @nullable
   */
  properties37?: BoYesNoEnum;
  /**
   * Properties 38.
   * @nullable
   */
  properties38?: BoYesNoEnum;
  /**
   * Properties 39.
   * @nullable
   */
  properties39?: BoYesNoEnum;
  /**
   * Properties 40.
   * @nullable
   */
  properties40?: BoYesNoEnum;
  /**
   * Properties 41.
   * @nullable
   */
  properties41?: BoYesNoEnum;
  /**
   * Properties 42.
   * @nullable
   */
  properties42?: BoYesNoEnum;
  /**
   * Properties 43.
   * @nullable
   */
  properties43?: BoYesNoEnum;
  /**
   * Properties 44.
   * @nullable
   */
  properties44?: BoYesNoEnum;
  /**
   * Properties 45.
   * @nullable
   */
  properties45?: BoYesNoEnum;
  /**
   * Properties 46.
   * @nullable
   */
  properties46?: BoYesNoEnum;
  /**
   * Properties 47.
   * @nullable
   */
  properties47?: BoYesNoEnum;
  /**
   * Properties 48.
   * @nullable
   */
  properties48?: BoYesNoEnum;
  /**
   * Properties 49.
   * @nullable
   */
  properties49?: BoYesNoEnum;
  /**
   * Properties 50.
   * @nullable
   */
  properties50?: BoYesNoEnum;
  /**
   * Properties 51.
   * @nullable
   */
  properties51?: BoYesNoEnum;
  /**
   * Properties 52.
   * @nullable
   */
  properties52?: BoYesNoEnum;
  /**
   * Properties 53.
   * @nullable
   */
  properties53?: BoYesNoEnum;
  /**
   * Properties 54.
   * @nullable
   */
  properties54?: BoYesNoEnum;
  /**
   * Properties 55.
   * @nullable
   */
  properties55?: BoYesNoEnum;
  /**
   * Properties 56.
   * @nullable
   */
  properties56?: BoYesNoEnum;
  /**
   * Properties 57.
   * @nullable
   */
  properties57?: BoYesNoEnum;
  /**
   * Properties 58.
   * @nullable
   */
  properties58?: BoYesNoEnum;
  /**
   * Properties 59.
   * @nullable
   */
  properties59?: BoYesNoEnum;
  /**
   * Properties 60.
   * @nullable
   */
  properties60?: BoYesNoEnum;
  /**
   * Properties 61.
   * @nullable
   */
  properties61?: BoYesNoEnum;
  /**
   * Properties 62.
   * @nullable
   */
  properties62?: BoYesNoEnum;
  /**
   * Properties 63.
   * @nullable
   */
  properties63?: BoYesNoEnum;
  /**
   * Properties 64.
   * @nullable
   */
  properties64?: BoYesNoEnum;
  /**
   * Company Registration Number.
   * @nullable
   */
  companyRegistrationNumber?: string;
  /**
   * Verification Number.
   * @nullable
   */
  verificationNumber?: string;
  /**
   * Discount Base Object.
   * @nullable
   */
  discountBaseObject?: DiscountGroupBaseObjectEnum;
  /**
   * Discount Relations.
   * @nullable
   */
  discountRelations?: DiscountGroupRelationsEnum;
  /**
   * Type Report.
   * @nullable
   */
  typeReport?: AssesseeTypeEnum;
  /**
   * Threshold Overlook.
   * @nullable
   */
  thresholdOverlook?: BoYesNoEnum;
  /**
   * Surcharge Overlook.
   * @nullable
   */
  surchargeOverlook?: BoYesNoEnum;
  /**
   * Down Payment Interim Account.
   * @nullable
   */
  downPaymentInterimAccount?: string;
  /**
   * Operation Code 347.
   * @nullable
   */
  operationCode347?: OperationCode347Enum;
  /**
   * Insurance Operation 347.
   * @nullable
   */
  insuranceOperation347?: BoYesNoEnum;
  /**
   * Hierarchical Deduction.
   * @nullable
   */
  hierarchicalDeduction?: BoYesNoEnum;
  /**
   * Shaam Group.
   * @nullable
   */
  shaamGroup?: ShaamGroupEnum;
  /**
   * Withholding Tax Certified.
   * @nullable
   */
  withholdingTaxCertified?: BoYesNoEnum;
  /**
   * Bookkeeping Certified.
   * @nullable
   */
  bookkeepingCertified?: BoYesNoEnum;
  /**
   * Planning Group.
   * @nullable
   */
  planningGroup?: string;
  /**
   * Affiliate.
   * @nullable
   */
  affiliate?: BoYesNoEnum;
  /**
   * Industry.
   * @nullable
   */
  industry?: number;
  /**
   * Vat Id Num.
   * @nullable
   */
  vatIdNum?: string;
  /**
   * Datev Account.
   * @nullable
   */
  datevAccount?: string;
  /**
   * Datev First Data Entry.
   * @nullable
   */
  datevFirstDataEntry?: BoYesNoEnum;
  /**
   * Gts Reg No.
   * @nullable
   */
  gtsRegNo?: string;
  /**
   * Gts Bank Account No.
   * @nullable
   */
  gtsBankAccountNo?: string;
  /**
   * Gts Billing Addr Tel.
   * @nullable
   */
  gtsBillingAddrTel?: string;
  /**
   * E Tax Web Site.
   * @nullable
   */
  eTaxWebSite?: number;
  /**
   * House Bank Iban.
   * @nullable
   */
  houseBankIban?: string;
  /**
   * Vat Registration Number.
   * @nullable
   */
  vatRegistrationNumber?: string;
  /**
   * Representative Name.
   * @nullable
   */
  representativeName?: string;
  /**
   * Industry Type.
   * @nullable
   */
  industryType?: string;
  /**
   * Business Type.
   * @nullable
   */
  businessType?: string;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Automatic Posting.
   * @nullable
   */
  automaticPosting?: AutomaticPostingEnum;
  /**
   * Interest Account.
   * @nullable
   */
  interestAccount?: string;
  /**
   * Fee Account.
   * @nullable
   */
  feeAccount?: string;
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: number;
  /**
   * Alias Name.
   * @nullable
   */
  aliasName?: string;
  /**
   * Default Blanket Agreement Number.
   * @nullable
   */
  defaultBlanketAgreementNumber?: number;
  /**
   * Effective Discount.
   * @nullable
   */
  effectiveDiscount?: DiscountGroupRelationsEnum;
  /**
   * No Discounts.
   * @nullable
   */
  noDiscounts?: BoYesNoEnum;
  /**
   * Effective Price.
   * @nullable
   */
  effectivePrice?: EffectivePriceEnum;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: string;
  /**
   * Edi Sender Id.
   * @nullable
   */
  ediSenderId?: string;
  /**
   * Edi Recipient Id.
   * @nullable
   */
  ediRecipientId?: string;
  /**
   * Residen Number.
   * @nullable
   */
  residenNumber?: ResidenceNumberTypeEnum;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: string;
  /**
   * Relationship Date From.
   * @nullable
   */
  relationshipDateFrom?: Moment;
  /**
   * Relationship Date Till.
   * @nullable
   */
  relationshipDateTill?: Moment;
  /**
   * Unified Federal Tax Id.
   * @nullable
   */
  unifiedFederalTaxId?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Type Of Operation.
   * @nullable
   */
  typeOfOperation?: TypeOfOperationEnum;
  /**
   * Endorsable Checks From Bp.
   * @nullable
   */
  endorsableChecksFromBp?: BoYesNoEnum;
  /**
   * Accepts Endorsed Checks.
   * @nullable
   */
  acceptsEndorsedChecks?: BoYesNoEnum;
  /**
   * Owner Code.
   * @nullable
   */
  ownerCode?: number;
  /**
   * Block Sending Marketing Content.
   * @nullable
   */
  blockSendingMarketingContent?: BoYesNoEnum;
  /**
   * Agent Code.
   * @nullable
   */
  agentCode?: string;
  /**
   * Price Mode.
   * @nullable
   */
  priceMode?: PriceModeEnum;
  /**
   * E Doc Generation Type.
   * @nullable
   */
  eDocGenerationType?: EDocGenerationTypeEnum;
  /**
   * E Doc Street.
   * @nullable
   */
  eDocStreet?: string;
  /**
   * E Doc Street Number.
   * @nullable
   */
  eDocStreetNumber?: string;
  /**
   * E Doc Building Number.
   * @nullable
   */
  eDocBuildingNumber?: number;
  /**
   * E Doc Zip Code.
   * @nullable
   */
  eDocZipCode?: string;
  /**
   * E Doc City.
   * @nullable
   */
  eDocCity?: string;
  /**
   * E Doc Country.
   * @nullable
   */
  eDocCountry?: string;
  /**
   * E Doc District.
   * @nullable
   */
  eDocDistrict?: string;
  /**
   * E Doc Representative First Name.
   * @nullable
   */
  eDocRepresentativeFirstName?: string;
  /**
   * E Doc Representative Surname.
   * @nullable
   */
  eDocRepresentativeSurname?: string;
  /**
   * E Doc Representative Company.
   * @nullable
   */
  eDocRepresentativeCompany?: string;
  /**
   * E Doc Representative Fiscal Code.
   * @nullable
   */
  eDocRepresentativeFiscalCode?: string;
  /**
   * E Doc Representative Additional Id.
   * @nullable
   */
  eDocRepresentativeAdditionalId?: string;
  /**
   * E Doc Pec Address.
   * @nullable
   */
  eDocPecAddress?: string;
  /**
   * Ipa Code For Pa.
   * @nullable
   */
  ipaCodeForPa?: string;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: Time;
  /**
   * Exemption Max Amount Validation Type.
   * @nullable
   */
  exemptionMaxAmountValidationType?: ExemptionMaxAmountValidationTypeEnum;
  /**
   * E Commerce Merchant Id.
   * @nullable
   */
  eCommerceMerchantId?: string;
  /**
   * Use Bill To Addr To Determine Tax.
   * @nullable
   */
  useBillToAddrToDetermineTax?: BoYesNoEnum;
  /**
   * Bp Addresses.
   * @nullable
   */
  bpAddresses?: BpAddress[];
  /**
   * Contact Employees.
   * @nullable
   */
  contactEmployees?: ContactEmployee[];
  /**
   * Bp Account Receivable Payble Collection.
   * @nullable
   */
  bpAccountReceivablePaybleCollection?: BpAccountReceivablePayble[];
  /**
   * Bp Payment Methods.
   * @nullable
   */
  bpPaymentMethods?: BpPaymentMethod[];
  /**
   * Bp Withholding Tax Collection.
   * @nullable
   */
  bpWithholdingTaxCollection?: BpWithholdingTax[];
  /**
   * Bp Payment Dates.
   * @nullable
   */
  bpPaymentDates?: BpPaymentDate[];
  /**
   * Bp Branch Assignment.
   * @nullable
   */
  bpBranchAssignment?: BpBranchAssignmentItem[];
  /**
   * Bp Bank Accounts.
   * @nullable
   */
  bpBankAccounts?: BpBankAccount[];
  /**
   * Bp Fiscal Tax Id Collection.
   * @nullable
   */
  bpFiscalTaxIdCollection?: BpFiscalTaxId[];
  /**
   * Discount Groups.
   * @nullable
   */
  discountGroups?: DiscountGroup[];
  /**
   * Bp Intrastat Extension.
   * @nullable
   */
  bpIntrastatExtension?: BpIntrastatExtension;
  /**
   * Bp Block Sending Marketing Contents.
   * @nullable
   */
  bpBlockSendingMarketingContents?: BpBlockSendingMarketingContent[];
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];
  /**
   * One-to-many navigation property to the [[UserDefaultGroups]] entity.
   */
  userDefaultGroups!: UserDefaultGroups[];
  /**
   * One-to-many navigation property to the [[SpecialPrices]] entity.
   */
  specialPrices!: SpecialPrices[];
  /**
   * One-to-many navigation property to the [[LandedCosts]] entity.
   */
  landedCosts!: LandedCosts[];
  /**
   * One-to-many navigation property to the [[WorkOrders]] entity.
   */
  workOrders!: WorkOrders[];
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-many navigation property to the [[InventoryGenEntries]] entity.
   */
  inventoryGenEntries!: InventoryGenEntries[];
  /**
   * One-to-many navigation property to the [[PurchaseQuotations]] entity.
   */
  purchaseQuotations!: PurchaseQuotations[];
  /**
   * One-to-many navigation property to the [[BankPages]] entity.
   */
  bankPages!: BankPages[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[Contacts]] entity.
   */
  contacts!: Contacts[];
  /**
   * One-to-many navigation property to the [[ProductionOrders]] entity.
   */
  productionOrders!: ProductionOrders[];
  /**
   * One-to-many navigation property to the [[DepreciationAreas]] entity.
   */
  depreciationAreas!: DepreciationAreas[];
  /**
   * One-to-many navigation property to the [[DeliveryNotes]] entity.
   */
  deliveryNotes!: DeliveryNotes[];
  /**
   * One-to-one navigation property to the [[BusinessPartnerGroups]] entity.
   */
  businessPartnerGroup!: BusinessPartnerGroups;
  /**
   * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsType!: PaymentTermsTypes;
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList!: PriceLists;
  /**
   * One-to-one navigation property to the [[CommissionGroups]] entity.
   */
  commissionGroup!: CommissionGroups;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency2!: Currencies;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup2!: VatGroups;
  /**
   * One-to-one navigation property to the [[ShippingTypes]] entity.
   */
  shippingType2!: ShippingTypes;
  /**
   * One-to-one navigation property to the [[FactoringIndicators]] entity.
   */
  factoringIndicator!: FactoringIndicators;
  /**
   * One-to-one navigation property to the [[CreditCards]] entity.
   */
  creditCard!: CreditCards;
  /**
   * One-to-one navigation property to the [[BpPriorities]] entity.
   */
  bpPriority!: BpPriorities;
  /**
   * One-to-one navigation property to the [[Forms1099]] entity.
   */
  forms1099!: Forms1099;
  /**
   * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethod!: WizardPaymentMethods;
  /**
   * One-to-one navigation property to the [[DunningLetters]] entity.
   */
  dunningLetter!: DunningLetters;
  /**
   * One-to-one navigation property to the [[PaymentBlocks]] entity.
   */
  paymentBlock2!: PaymentBlocks;
  /**
   * One-to-one navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCode!: WithholdingTaxCodes;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Territories]] entity.
   */
  territory2!: Territories;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[SalesTaxCodes]] entity.
   */
  salesTaxCode!: SalesTaxCodes;
  /**
   * One-to-one navigation property to the [[DunningTerms]] entity.
   */
  dunningTerm2!: DunningTerms;
  /**
   * One-to-one navigation property to the [[UserLanguages]] entity.
   */
  userLanguage!: UserLanguages;
  /**
   * One-to-one navigation property to the [[DeductionTaxGroups]] entity.
   */
  deductionTaxGroup!: DeductionTaxGroups;
  /**
   * One-to-one navigation property to the [[BankChargesAllocationCodes]] entity.
   */
  bankChargesAllocationCode2!: BankChargesAllocationCodes;
  /**
   * One-to-one navigation property to the [[Industries]] entity.
   */
  industry2!: Industries;
  /**
   * One-to-one navigation property to the [[TaxWebSites]] entity.
   */
  taxWebSite!: TaxWebSites;
  /**
   * One-to-one navigation property to the [[Campaigns]] entity.
   */
  campaign!: Campaigns;
  /**
   * One-to-one navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreement!: BlanketAgreements;
  /**
   * One-to-many navigation property to the [[Quotations]] entity.
   */
  quotations!: Quotations[];
  /**
   * One-to-many navigation property to the [[ServiceContracts]] entity.
   */
  serviceContracts!: ServiceContracts[];
  /**
   * One-to-many navigation property to the [[InventoryGenExits]] entity.
   */
  inventoryGenExits!: InventoryGenExits[];
  /**
   * One-to-many navigation property to the [[PurchaseRequests]] entity.
   */
  purchaseRequests!: PurchaseRequests[];
  /**
   * One-to-many navigation property to the [[DeductionTaxHierarchies]] entity.
   */
  deductionTaxHierarchies!: DeductionTaxHierarchies[];
  /**
   * One-to-many navigation property to the [[ReturnRequest]] entity.
   */
  returnRequest!: ReturnRequest[];
  /**
   * One-to-many navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreements!: BlanketAgreements[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[PurchaseReturns]] entity.
   */
  purchaseReturns!: PurchaseReturns[];
  /**
   * One-to-many navigation property to the [[Invoices]] entity.
   */
  invoices!: Invoices[];
  /**
   * One-to-many navigation property to the [[CreditNotes]] entity.
   */
  creditNotes!: CreditNotes[];
  /**
   * One-to-many navigation property to the [[StockTransfers]] entity.
   */
  stockTransfers!: StockTransfers[];
  /**
   * One-to-many navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlaces!: BusinessPlaces[];
  /**
   * One-to-many navigation property to the [[Orders]] entity.
   */
  orders!: Orders[];
  /**
   * One-to-many navigation property to the [[PartnersSetups]] entity.
   */
  partnersSetups!: PartnersSetups[];
  /**
   * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests[];
  /**
   * One-to-many navigation property to the [[Activities]] entity.
   */
  activities!: Activities[];
  /**
   * One-to-many navigation property to the [[DownPayments]] entity.
   */
  downPayments!: DownPayments[];
  /**
   * One-to-many navigation property to the [[Drafts]] entity.
   */
  drafts!: Drafts[];
  /**
   * One-to-many navigation property to the [[StockTransferDrafts]] entity.
   */
  stockTransferDrafts!: StockTransferDrafts[];
  /**
   * One-to-many navigation property to the [[Returns]] entity.
   */
  returns!: Returns[];
  /**
   * One-to-many navigation property to the [[MaterialRevaluation]] entity.
   */
  materialRevaluation!: MaterialRevaluation[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice[];
  /**
   * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal[];
  /**
   * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards[];
  /**
   * One-to-many navigation property to the [[PurchaseInvoices]] entity.
   */
  purchaseInvoices!: PurchaseInvoices[];
  /**
   * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes[];
  /**
   * One-to-many navigation property to the [[CorrectionInvoice]] entity.
   */
  correctionInvoice!: CorrectionInvoice[];
  /**
   * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes[];
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];
  /**
   * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
   */
  purchaseDownPayments!: PurchaseDownPayments[];
  /**
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];
  /**
   * One-to-many navigation property to the [[PurchaseOrders]] entity.
   */
  purchaseOrders!: PurchaseOrders[];
  /**
   * One-to-many navigation property to the [[AlternateCatNum]] entity.
   */
  alternateCatNum!: AlternateCatNum[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];
  /**
   * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
   */
  goodsReturnRequest!: GoodsReturnRequest[];
  /**
   * One-to-many navigation property to the [[SalesTaxInvoices]] entity.
   */
  salesTaxInvoices!: SalesTaxInvoices[];
  /**
   * One-to-many navigation property to the [[PurchaseTaxInvoices]] entity.
   */
  purchaseTaxInvoices!: PurchaseTaxInvoices[];

  /**
   * Returns an entity builder to construct instances of `BusinessPartners`.
   * @returns A builder that constructs instances of entity type `BusinessPartners`.
   */
  static builder(): EntityBuilderType<BusinessPartners, BusinessPartnersType> {
    return EntityV4.entityBuilder(BusinessPartners);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartners` entity type.
   * @returns A `BusinessPartners` request builder.
   */
  static requestBuilder(): BusinessPartnersRequestBuilder {
    return new BusinessPartnersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartners`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartners`.
   */
  static customField(fieldName: string): CustomFieldV4<BusinessPartners> {
    return EntityV4.customFieldSelector(fieldName, BusinessPartners);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import { LandedCosts, LandedCostsType } from './LandedCosts';
import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { Warehouses, WarehousesType } from './Warehouses';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { BankPages, BankPagesType } from './BankPages';
import { Items, ItemsType } from './Items';
import { Contacts, ContactsType } from './Contacts';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartnerGroups, BusinessPartnerGroupsType } from './BusinessPartnerGroups';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { PriceLists, PriceListsType } from './PriceLists';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Currencies, CurrenciesType } from './Currencies';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Countries, CountriesType } from './Countries';
import { VatGroups, VatGroupsType } from './VatGroups';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { FactoringIndicators, FactoringIndicatorsType } from './FactoringIndicators';
import { CreditCards, CreditCardsType } from './CreditCards';
import { BpPriorities, BpPrioritiesType } from './BpPriorities';
import { Forms1099, Forms1099Type } from './Forms1099';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { DunningLetters, DunningLettersType } from './DunningLetters';
import { PaymentBlocks, PaymentBlocksType } from './PaymentBlocks';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Territories, TerritoriesType } from './Territories';
import { Projects, ProjectsType } from './Projects';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { DunningTerms, DunningTermsType } from './DunningTerms';
import { UserLanguages, UserLanguagesType } from './UserLanguages';
import { DeductionTaxGroups, DeductionTaxGroupsType } from './DeductionTaxGroups';
import { BankChargesAllocationCodes, BankChargesAllocationCodesType } from './BankChargesAllocationCodes';
import { Industries, IndustriesType } from './Industries';
import { TaxWebSites, TaxWebSitesType } from './TaxWebSites';
import { Campaigns, CampaignsType } from './Campaigns';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Quotations, QuotationsType } from './Quotations';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { DeductionTaxHierarchies, DeductionTaxHierarchiesType } from './DeductionTaxHierarchies';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { Orders, OrdersType } from './Orders';
import { PartnersSetups, PartnersSetupsType } from './PartnersSetups';
import { InventoryTransferRequests, InventoryTransferRequestsType } from './InventoryTransferRequests';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { StockTransferDrafts, StockTransferDraftsType } from './StockTransferDrafts';
import { Returns, ReturnsType } from './Returns';
import { MaterialRevaluation, MaterialRevaluationType } from './MaterialRevaluation';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { AlternateCatNum, AlternateCatNumType } from './AlternateCatNum';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
import { SalesTaxInvoices, SalesTaxInvoicesType } from './SalesTaxInvoices';
import { PurchaseTaxInvoices, PurchaseTaxInvoicesType } from './PurchaseTaxInvoices';

export interface BusinessPartnersType {
  cardCode?: string | null;
  cardName?: string | null;
  cardType?: BoCardTypes | null;
  groupCode?: number | null;
  address?: string | null;
  zipCode?: string | null;
  mailAddress?: string | null;
  mailZipCode?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  fax?: string | null;
  contactPerson?: string | null;
  notes?: string | null;
  payTermsGrpCode?: number | null;
  creditLimit?: number | null;
  maxCommitment?: number | null;
  discountPercent?: number | null;
  vatLiable?: BoVatStatus | null;
  federalTaxId?: string | null;
  deductibleAtSource?: BoYesNoEnum | null;
  deductionPercent?: number | null;
  deductionValidUntil?: Moment | null;
  priceListNum?: number | null;
  intrestRatePercent?: number | null;
  commissionPercent?: number | null;
  commissionGroupCode?: number | null;
  freeText?: string | null;
  salesPersonCode?: number | null;
  currency?: string | null;
  rateDiffAccount?: string | null;
  cellular?: string | null;
  avarageLate?: number | null;
  city?: string | null;
  county?: string | null;
  country?: string | null;
  mailCity?: string | null;
  mailCounty?: string | null;
  mailCountry?: string | null;
  emailAddress?: string | null;
  picture?: string | null;
  defaultAccount?: string | null;
  defaultBranch?: string | null;
  defaultBankCode?: string | null;
  additionalId?: string | null;
  pager?: string | null;
  fatherCard?: string | null;
  cardForeignName?: string | null;
  fatherType?: BoFatherCardTypes | null;
  deductionOffice?: string | null;
  exportCode?: string | null;
  minIntrest?: number | null;
  currentAccountBalance?: number | null;
  openDeliveryNotesBalance?: number | null;
  openOrdersBalance?: number | null;
  vatGroup?: string | null;
  shippingType?: number | null;
  password?: string | null;
  indicator?: string | null;
  iban?: string | null;
  creditCardCode?: number | null;
  creditCardNum?: string | null;
  creditCardExpiration?: Moment | null;
  debitorAccount?: string | null;
  openOpportunities?: number | null;
  valid?: BoYesNoEnum | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  validRemarks?: string | null;
  frozen?: BoYesNoEnum | null;
  frozenFrom?: Moment | null;
  frozenTo?: Moment | null;
  frozenRemarks?: string | null;
  block?: string | null;
  billToState?: string | null;
  exemptNum?: string | null;
  priority?: number | null;
  formCode1099?: number | null;
  box1099?: string | null;
  peymentMethodCode?: string | null;
  backOrder?: BoYesNoEnum | null;
  partialDelivery?: BoYesNoEnum | null;
  blockDunning?: BoYesNoEnum | null;
  bankCountry?: string | null;
  houseBank?: string | null;
  houseBankCountry?: string | null;
  houseBankAccount?: string | null;
  shipToDefault?: string | null;
  dunningLevel?: number | null;
  dunningDate?: Moment | null;
  collectionAuthorization?: BoYesNoEnum | null;
  dme?: string | null;
  instructionKey?: string | null;
  singlePayment?: BoYesNoEnum | null;
  isrBillerId?: string | null;
  paymentBlock?: BoYesNoEnum | null;
  referenceDetails?: string | null;
  houseBankBranch?: string | null;
  ownerIdNumber?: string | null;
  paymentBlockDescription?: number | null;
  taxExemptionLetterNum?: string | null;
  maxAmountOfExemption?: number | null;
  exemptionValidityDateFrom?: Moment | null;
  exemptionValidityDateTo?: Moment | null;
  linkedBusinessPartner?: string | null;
  lastMultiReconciliationNum?: number | null;
  deferredTax?: BoYesNoEnum | null;
  equalization?: BoYesNoEnum | null;
  subjectToWithholdingTax?: BoYesNoEnum | null;
  certificateNumber?: string | null;
  expirationDate?: Moment | null;
  nationalInsuranceNum?: string | null;
  accrualCriteria?: BoYesNoEnum | null;
  wtCode?: string | null;
  billToBuildingFloorRoom?: string | null;
  downPaymentClearAct?: string | null;
  channelBp?: string | null;
  defaultTechnician?: number | null;
  billtoDefault?: string | null;
  customerBillofExchangDisc?: string | null;
  territory?: number | null;
  shipToBuildingFloorRoom?: string | null;
  customerBillofExchangPres?: string | null;
  projectCode?: string | null;
  vatGroupLatinAmerica?: string | null;
  dunningTerm?: string | null;
  website?: string | null;
  otherReceivablePayable?: string | null;
  billofExchangeonCollection?: string | null;
  companyPrivate?: BoCardCompanyTypes | null;
  languageCode?: number | null;
  unpaidBillofExchange?: string | null;
  withholdingTaxDeductionGroup?: number | null;
  closingDateProcedureNumber?: number | null;
  profession?: string | null;
  bankChargesAllocationCode?: string | null;
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
  companyRegistrationNumber?: string | null;
  verificationNumber?: string | null;
  discountBaseObject?: DiscountGroupBaseObjectEnum | null;
  discountRelations?: DiscountGroupRelationsEnum | null;
  typeReport?: AssesseeTypeEnum | null;
  thresholdOverlook?: BoYesNoEnum | null;
  surchargeOverlook?: BoYesNoEnum | null;
  downPaymentInterimAccount?: string | null;
  operationCode347?: OperationCode347Enum | null;
  insuranceOperation347?: BoYesNoEnum | null;
  hierarchicalDeduction?: BoYesNoEnum | null;
  shaamGroup?: ShaamGroupEnum | null;
  withholdingTaxCertified?: BoYesNoEnum | null;
  bookkeepingCertified?: BoYesNoEnum | null;
  planningGroup?: string | null;
  affiliate?: BoYesNoEnum | null;
  industry?: number | null;
  vatIdNum?: string | null;
  datevAccount?: string | null;
  datevFirstDataEntry?: BoYesNoEnum | null;
  gtsRegNo?: string | null;
  gtsBankAccountNo?: string | null;
  gtsBillingAddrTel?: string | null;
  eTaxWebSite?: number | null;
  houseBankIban?: string | null;
  vatRegistrationNumber?: string | null;
  representativeName?: string | null;
  industryType?: string | null;
  businessType?: string | null;
  series?: number | null;
  automaticPosting?: AutomaticPostingEnum | null;
  interestAccount?: string | null;
  feeAccount?: string | null;
  campaignNumber?: number | null;
  aliasName?: string | null;
  defaultBlanketAgreementNumber?: number | null;
  effectiveDiscount?: DiscountGroupRelationsEnum | null;
  noDiscounts?: BoYesNoEnum | null;
  effectivePrice?: EffectivePriceEnum | null;
  globalLocationNumber?: string | null;
  ediSenderId?: string | null;
  ediRecipientId?: string | null;
  residenNumber?: ResidenceNumberTypeEnum | null;
  relationshipCode?: string | null;
  relationshipDateFrom?: Moment | null;
  relationshipDateTill?: Moment | null;
  unifiedFederalTaxId?: string | null;
  attachmentEntry?: number | null;
  typeOfOperation?: TypeOfOperationEnum | null;
  endorsableChecksFromBp?: BoYesNoEnum | null;
  acceptsEndorsedChecks?: BoYesNoEnum | null;
  ownerCode?: number | null;
  blockSendingMarketingContent?: BoYesNoEnum | null;
  agentCode?: string | null;
  priceMode?: PriceModeEnum | null;
  eDocGenerationType?: EDocGenerationTypeEnum | null;
  eDocStreet?: string | null;
  eDocStreetNumber?: string | null;
  eDocBuildingNumber?: number | null;
  eDocZipCode?: string | null;
  eDocCity?: string | null;
  eDocCountry?: string | null;
  eDocDistrict?: string | null;
  eDocRepresentativeFirstName?: string | null;
  eDocRepresentativeSurname?: string | null;
  eDocRepresentativeCompany?: string | null;
  eDocRepresentativeFiscalCode?: string | null;
  eDocRepresentativeAdditionalId?: string | null;
  eDocPecAddress?: string | null;
  ipaCodeForPa?: string | null;
  updateDate?: Moment | null;
  updateTime?: Time | null;
  exemptionMaxAmountValidationType?: ExemptionMaxAmountValidationTypeEnum | null;
  eCommerceMerchantId?: string | null;
  useBillToAddrToDetermineTax?: BoYesNoEnum | null;
  bpAddresses?: BpAddress[] | null;
  contactEmployees?: ContactEmployee[] | null;
  bpAccountReceivablePaybleCollection?: BpAccountReceivablePayble[] | null;
  bpPaymentMethods?: BpPaymentMethod[] | null;
  bpWithholdingTaxCollection?: BpWithholdingTax[] | null;
  bpPaymentDates?: BpPaymentDate[] | null;
  bpBranchAssignment?: BpBranchAssignmentItem[] | null;
  bpBankAccounts?: BpBankAccount[] | null;
  bpFiscalTaxIdCollection?: BpFiscalTaxId[] | null;
  discountGroups?: DiscountGroup[] | null;
  bpIntrastatExtension?: BpIntrastatExtension | null;
  bpBlockSendingMarketingContents?: BpBlockSendingMarketingContent[] | null;
  salesOpportunities: SalesOpportunitiesType[];
  userDefaultGroups: UserDefaultGroupsType[];
  specialPrices: SpecialPricesType[];
  landedCosts: LandedCostsType[];
  workOrders: WorkOrdersType[];
  warehouses: WarehousesType[];
  inventoryGenEntries: InventoryGenEntriesType[];
  purchaseQuotations: PurchaseQuotationsType[];
  bankPages: BankPagesType[];
  items: ItemsType[];
  contacts: ContactsType[];
  productionOrders: ProductionOrdersType[];
  depreciationAreas: DepreciationAreasType[];
  deliveryNotes: DeliveryNotesType[];
  businessPartnerGroup: BusinessPartnerGroupsType;
  paymentTermsType: PaymentTermsTypesType;
  priceList: PriceListsType;
  commissionGroup: CommissionGroupsType;
  salesPerson: SalesPersonsType;
  currency2: CurrenciesType;
  chartOfAccount: ChartOfAccountsType;
  country2: CountriesType;
  vatGroup2: VatGroupsType;
  shippingType2: ShippingTypesType;
  factoringIndicator: FactoringIndicatorsType;
  creditCard: CreditCardsType;
  bpPriority: BpPrioritiesType;
  forms1099: Forms1099Type;
  wizardPaymentMethod: WizardPaymentMethodsType;
  dunningLetter: DunningLettersType;
  paymentBlock2: PaymentBlocksType;
  withholdingTaxCode: WithholdingTaxCodesType;
  employeeInfo: EmployeesInfoType;
  territory2: TerritoriesType;
  project: ProjectsType;
  salesTaxCode: SalesTaxCodesType;
  dunningTerm2: DunningTermsType;
  userLanguage: UserLanguagesType;
  deductionTaxGroup: DeductionTaxGroupsType;
  bankChargesAllocationCode2: BankChargesAllocationCodesType;
  industry2: IndustriesType;
  taxWebSite: TaxWebSitesType;
  campaign: CampaignsType;
  blanketAgreement: BlanketAgreementsType;
  quotations: QuotationsType[];
  serviceContracts: ServiceContractsType[];
  inventoryGenExits: InventoryGenExitsType[];
  purchaseRequests: PurchaseRequestsType[];
  deductionTaxHierarchies: DeductionTaxHierarchiesType[];
  returnRequest: ReturnRequestType[];
  blanketAgreements: BlanketAgreementsType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  purchaseReturns: PurchaseReturnsType[];
  invoices: InvoicesType[];
  creditNotes: CreditNotesType[];
  stockTransfers: StockTransfersType[];
  businessPlaces: BusinessPlacesType[];
  orders: OrdersType[];
  partnersSetups: PartnersSetupsType[];
  inventoryTransferRequests: InventoryTransferRequestsType[];
  activities: ActivitiesType[];
  downPayments: DownPaymentsType[];
  drafts: DraftsType[];
  stockTransferDrafts: StockTransferDraftsType[];
  returns: ReturnsType[];
  materialRevaluation: MaterialRevaluationType[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  purchaseInvoices: PurchaseInvoicesType[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
  correctionInvoice: CorrectionInvoiceType[];
  purchaseCreditNotes: PurchaseCreditNotesType[];
  serviceCalls: ServiceCallsType[];
  purchaseDownPayments: PurchaseDownPaymentsType[];
  employeesInfo: EmployeesInfoType[];
  purchaseOrders: PurchaseOrdersType[];
  alternateCatNum: AlternateCatNumType[];
  projectManagements: ProjectManagementsType[];
  goodsReturnRequest: GoodsReturnRequestType[];
  salesTaxInvoices: SalesTaxInvoicesType[];
  purchaseTaxInvoices: PurchaseTaxInvoicesType[];
}

export namespace BusinessPartners {
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<BusinessPartners> = new StringField('CardCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<BusinessPartners> = new StringField('CardName', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[cardType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_TYPE: EnumField<BusinessPartners> = new EnumField('CardType', BusinessPartners);
  /**
   * Static representation of the [[groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_CODE: NumberField<BusinessPartners> = new NumberField('GroupCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<BusinessPartners> = new StringField('Address', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<BusinessPartners> = new StringField('ZipCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[mailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL_ADDRESS: StringField<BusinessPartners> = new StringField('MailAddress', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[mailZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL_ZIP_CODE: StringField<BusinessPartners> = new StringField('MailZipCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[phone1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_1: StringField<BusinessPartners> = new StringField('Phone1', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[phone2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_2: StringField<BusinessPartners> = new StringField('Phone2', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: StringField<BusinessPartners> = new StringField('Fax', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: StringField<BusinessPartners> = new StringField('ContactPerson', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<BusinessPartners> = new StringField('Notes', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[payTermsGrpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TERMS_GRP_CODE: NumberField<BusinessPartners> = new NumberField('PayTermsGrpCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[creditLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_LIMIT: NumberField<BusinessPartners> = new NumberField('CreditLimit', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[maxCommitment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_COMMITMENT: NumberField<BusinessPartners> = new NumberField('MaxCommitment', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<BusinessPartners> = new NumberField('DiscountPercent', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[vatLiable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_LIABLE: EnumField<BusinessPartners> = new EnumField('VatLiable', BusinessPartners);
  /**
   * Static representation of the [[federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_TAX_ID: StringField<BusinessPartners> = new StringField('FederalTaxID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[deductibleAtSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTIBLE_AT_SOURCE: EnumField<BusinessPartners> = new EnumField('DeductibleAtSource', BusinessPartners);
  /**
   * Static representation of the [[deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PERCENT: NumberField<BusinessPartners> = new NumberField('DeductionPercent', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[deductionValidUntil]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_VALID_UNTIL: DateField<BusinessPartners> = new DateField('DeductionValidUntil', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[priceListNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NUM: NumberField<BusinessPartners> = new NumberField('PriceListNum', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[intrestRatePercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTREST_RATE_PERCENT: NumberField<BusinessPartners> = new NumberField('IntrestRatePercent', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[commissionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_PERCENT: NumberField<BusinessPartners> = new NumberField('CommissionPercent', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[commissionGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP_CODE: NumberField<BusinessPartners> = new NumberField('CommissionGroupCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[freeText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREE_TEXT: StringField<BusinessPartners> = new StringField('FreeText', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<BusinessPartners> = new NumberField('SalesPersonCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<BusinessPartners> = new StringField('Currency', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[rateDiffAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE_DIFF_ACCOUNT: StringField<BusinessPartners> = new StringField('RateDiffAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[cellular]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELLULAR: StringField<BusinessPartners> = new StringField('Cellular', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[avarageLate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVARAGE_LATE: NumberField<BusinessPartners> = new NumberField('AvarageLate', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<BusinessPartners> = new StringField('City', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<BusinessPartners> = new StringField('County', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<BusinessPartners> = new StringField('Country', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[mailCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL_CITY: StringField<BusinessPartners> = new StringField('MailCity', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[mailCounty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL_COUNTY: StringField<BusinessPartners> = new StringField('MailCounty', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[mailCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL_COUNTRY: StringField<BusinessPartners> = new StringField('MailCountry', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<BusinessPartners> = new StringField('EmailAddress', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[picture]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICTURE: StringField<BusinessPartners> = new StringField('Picture', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[defaultAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_ACCOUNT: StringField<BusinessPartners> = new StringField('DefaultAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[defaultBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_BRANCH: StringField<BusinessPartners> = new StringField('DefaultBranch', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[defaultBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_BANK_CODE: StringField<BusinessPartners> = new StringField('DefaultBankCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[additionalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_ID: StringField<BusinessPartners> = new StringField('AdditionalID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[pager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAGER: StringField<BusinessPartners> = new StringField('Pager', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[fatherCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FATHER_CARD: StringField<BusinessPartners> = new StringField('FatherCard', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[cardForeignName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_FOREIGN_NAME: StringField<BusinessPartners> = new StringField('CardForeignName', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[fatherType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FATHER_TYPE: EnumField<BusinessPartners> = new EnumField('FatherType', BusinessPartners);
  /**
   * Static representation of the [[deductionOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_OFFICE: StringField<BusinessPartners> = new StringField('DeductionOffice', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[exportCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPORT_CODE: StringField<BusinessPartners> = new StringField('ExportCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[minIntrest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_INTREST: NumberField<BusinessPartners> = new NumberField('MinIntrest', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[currentAccountBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_ACCOUNT_BALANCE: NumberField<BusinessPartners> = new NumberField('CurrentAccountBalance', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[openDeliveryNotesBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_DELIVERY_NOTES_BALANCE: NumberField<BusinessPartners> = new NumberField('OpenDeliveryNotesBalance', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[openOrdersBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_ORDERS_BALANCE: NumberField<BusinessPartners> = new NumberField('OpenOrdersBalance', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: StringField<BusinessPartners> = new StringField('VatGroup', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[shippingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: NumberField<BusinessPartners> = new NumberField('ShippingType', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<BusinessPartners> = new StringField('Password', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[indicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDICATOR: StringField<BusinessPartners> = new StringField('Indicator', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[iban]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN: StringField<BusinessPartners> = new StringField('IBAN', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[creditCardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_CODE: NumberField<BusinessPartners> = new NumberField('CreditCardCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[creditCardNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_NUM: StringField<BusinessPartners> = new StringField('CreditCardNum', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[creditCardExpiration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD_EXPIRATION: DateField<BusinessPartners> = new DateField('CreditCardExpiration', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[debitorAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBITOR_ACCOUNT: StringField<BusinessPartners> = new StringField('DebitorAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[openOpportunities]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPEN_OPPORTUNITIES: NumberField<BusinessPartners> = new NumberField('OpenOpportunities', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[valid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID: EnumField<BusinessPartners> = new EnumField('Valid', BusinessPartners);
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<BusinessPartners> = new DateField('ValidFrom', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<BusinessPartners> = new DateField('ValidTo', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_REMARKS: StringField<BusinessPartners> = new StringField('ValidRemarks', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[frozen]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN: EnumField<BusinessPartners> = new EnumField('Frozen', BusinessPartners);
  /**
   * Static representation of the [[frozenFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_FROM: DateField<BusinessPartners> = new DateField('FrozenFrom', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_TO: DateField<BusinessPartners> = new DateField('FrozenTo', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_REMARKS: StringField<BusinessPartners> = new StringField('FrozenRemarks', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[block]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK: StringField<BusinessPartners> = new StringField('Block', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[billToState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_STATE: StringField<BusinessPartners> = new StringField('BillToState', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[exemptNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPT_NUM: StringField<BusinessPartners> = new StringField('ExemptNum', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[priority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIORITY: NumberField<BusinessPartners> = new NumberField('Priority', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[formCode1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CODE_1099: NumberField<BusinessPartners> = new NumberField('FormCode1099', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[box1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOX_1099: StringField<BusinessPartners> = new StringField('Box1099', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[peymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PEYMENT_METHOD_CODE: StringField<BusinessPartners> = new StringField('PeymentMethodCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[backOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACK_ORDER: EnumField<BusinessPartners> = new EnumField('BackOrder', BusinessPartners);
  /**
   * Static representation of the [[partialDelivery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTIAL_DELIVERY: EnumField<BusinessPartners> = new EnumField('PartialDelivery', BusinessPartners);
  /**
   * Static representation of the [[blockDunning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_DUNNING: EnumField<BusinessPartners> = new EnumField('BlockDunning', BusinessPartners);
  /**
   * Static representation of the [[bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_COUNTRY: StringField<BusinessPartners> = new StringField('BankCountry', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[houseBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK: StringField<BusinessPartners> = new StringField('HouseBank', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[houseBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_COUNTRY: StringField<BusinessPartners> = new StringField('HouseBankCountry', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[houseBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNT: StringField<BusinessPartners> = new StringField('HouseBankAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[shipToDefault]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_DEFAULT: StringField<BusinessPartners> = new StringField('ShipToDefault', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[dunningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_LEVEL: NumberField<BusinessPartners> = new NumberField('DunningLevel', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[dunningDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_DATE: DateField<BusinessPartners> = new DateField('DunningDate', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[collectionAuthorization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTION_AUTHORIZATION: EnumField<BusinessPartners> = new EnumField('CollectionAuthorization', BusinessPartners);
  /**
   * Static representation of the [[dme]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DME: StringField<BusinessPartners> = new StringField('DME', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[instructionKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_KEY: StringField<BusinessPartners> = new StringField('InstructionKey', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[singlePayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_PAYMENT: EnumField<BusinessPartners> = new EnumField('SinglePayment', BusinessPartners);
  /**
   * Static representation of the [[isrBillerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ISR_BILLER_ID: StringField<BusinessPartners> = new StringField('ISRBillerID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[paymentBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK: EnumField<BusinessPartners> = new EnumField('PaymentBlock', BusinessPartners);
  /**
   * Static representation of the [[referenceDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_DETAILS: StringField<BusinessPartners> = new StringField('ReferenceDetails', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[houseBankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_BRANCH: StringField<BusinessPartners> = new StringField('HouseBankBranch', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[ownerIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_ID_NUMBER: StringField<BusinessPartners> = new StringField('OwnerIDNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[paymentBlockDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_DESCRIPTION: NumberField<BusinessPartners> = new NumberField('PaymentBlockDescription', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[taxExemptionLetterNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LETTER_NUM: StringField<BusinessPartners> = new StringField('TaxExemptionLetterNum', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[maxAmountOfExemption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_AMOUNT_OF_EXEMPTION: NumberField<BusinessPartners> = new NumberField('MaxAmountOfExemption', BusinessPartners, 'Edm.Double');
  /**
   * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_FROM: DateField<BusinessPartners> = new DateField('ExemptionValidityDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[exemptionValidityDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_VALIDITY_DATE_TO: DateField<BusinessPartners> = new DateField('ExemptionValidityDateTo', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[linkedBusinessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_BUSINESS_PARTNER: StringField<BusinessPartners> = new StringField('LinkedBusinessPartner', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[lastMultiReconciliationNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MULTI_RECONCILIATION_NUM: NumberField<BusinessPartners> = new NumberField('LastMultiReconciliationNum', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[deferredTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX: EnumField<BusinessPartners> = new EnumField('DeferredTax', BusinessPartners);
  /**
   * Static representation of the [[equalization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUALIZATION: EnumField<BusinessPartners> = new EnumField('Equalization', BusinessPartners);
  /**
   * Static representation of the [[subjectToWithholdingTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_TO_WITHHOLDING_TAX: EnumField<BusinessPartners> = new EnumField('SubjectToWithholdingTax', BusinessPartners);
  /**
   * Static representation of the [[certificateNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATE_NUMBER: StringField<BusinessPartners> = new StringField('CertificateNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRATION_DATE: DateField<BusinessPartners> = new DateField('ExpirationDate', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[nationalInsuranceNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONAL_INSURANCE_NUM: StringField<BusinessPartners> = new StringField('NationalInsuranceNum', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[accrualCriteria]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CRITERIA: EnumField<BusinessPartners> = new EnumField('AccrualCriteria', BusinessPartners);
  /**
   * Static representation of the [[wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_CODE: StringField<BusinessPartners> = new StringField('WTCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[billToBuildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_BUILDING_FLOOR_ROOM: StringField<BusinessPartners> = new StringField('BillToBuildingFloorRoom', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[downPaymentClearAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_CLEAR_ACT: StringField<BusinessPartners> = new StringField('DownPaymentClearAct', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[channelBp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANNEL_BP: StringField<BusinessPartners> = new StringField('ChannelBP', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[defaultTechnician]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TECHNICIAN: NumberField<BusinessPartners> = new NumberField('DefaultTechnician', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[billtoDefault]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLTO_DEFAULT: StringField<BusinessPartners> = new StringField('BilltoDefault', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[customerBillofExchangDisc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_BILLOF_EXCHANG_DISC: StringField<BusinessPartners> = new StringField('CustomerBillofExchangDisc', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[territory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY: NumberField<BusinessPartners> = new NumberField('Territory', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[shipToBuildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_BUILDING_FLOOR_ROOM: StringField<BusinessPartners> = new StringField('ShipToBuildingFloorRoom', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[customerBillofExchangPres]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_BILLOF_EXCHANG_PRES: StringField<BusinessPartners> = new StringField('CustomerBillofExchangPres', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_CODE: StringField<BusinessPartners> = new StringField('ProjectCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[vatGroupLatinAmerica]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP_LATIN_AMERICA: StringField<BusinessPartners> = new StringField('VatGroupLatinAmerica', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[dunningTerm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_TERM: StringField<BusinessPartners> = new StringField('DunningTerm', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[website]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEBSITE: StringField<BusinessPartners> = new StringField('Website', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[otherReceivablePayable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHER_RECEIVABLE_PAYABLE: StringField<BusinessPartners> = new StringField('OtherReceivablePayable', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[billofExchangeonCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLOF_EXCHANGEON_COLLECTION: StringField<BusinessPartners> = new StringField('BillofExchangeonCollection', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[companyPrivate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_PRIVATE: EnumField<BusinessPartners> = new EnumField('CompanyPrivate', BusinessPartners);
  /**
   * Static representation of the [[languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_CODE: NumberField<BusinessPartners> = new NumberField('LanguageCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[unpaidBillofExchange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNPAID_BILLOF_EXCHANGE: StringField<BusinessPartners> = new StringField('UnpaidBillofExchange', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxDeductionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_DEDUCTION_GROUP: NumberField<BusinessPartners> = new NumberField('WithholdingTaxDeductionGroup', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[closingDateProcedureNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE_PROCEDURE_NUMBER: NumberField<BusinessPartners> = new NumberField('ClosingDateProcedureNumber', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[profession]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFESSION: StringField<BusinessPartners> = new StringField('Profession', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[bankChargesAllocationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGES_ALLOCATION_CODE: StringField<BusinessPartners> = new StringField('BankChargesAllocationCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[taxRoundingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_ROUNDING_RULE: EnumField<BusinessPartners> = new EnumField('TaxRoundingRule', BusinessPartners);
  /**
   * Static representation of the [[properties1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_1: EnumField<BusinessPartners> = new EnumField('Properties1', BusinessPartners);
  /**
   * Static representation of the [[properties2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_2: EnumField<BusinessPartners> = new EnumField('Properties2', BusinessPartners);
  /**
   * Static representation of the [[properties3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_3: EnumField<BusinessPartners> = new EnumField('Properties3', BusinessPartners);
  /**
   * Static representation of the [[properties4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_4: EnumField<BusinessPartners> = new EnumField('Properties4', BusinessPartners);
  /**
   * Static representation of the [[properties5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_5: EnumField<BusinessPartners> = new EnumField('Properties5', BusinessPartners);
  /**
   * Static representation of the [[properties6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_6: EnumField<BusinessPartners> = new EnumField('Properties6', BusinessPartners);
  /**
   * Static representation of the [[properties7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_7: EnumField<BusinessPartners> = new EnumField('Properties7', BusinessPartners);
  /**
   * Static representation of the [[properties8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_8: EnumField<BusinessPartners> = new EnumField('Properties8', BusinessPartners);
  /**
   * Static representation of the [[properties9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_9: EnumField<BusinessPartners> = new EnumField('Properties9', BusinessPartners);
  /**
   * Static representation of the [[properties10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_10: EnumField<BusinessPartners> = new EnumField('Properties10', BusinessPartners);
  /**
   * Static representation of the [[properties11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_11: EnumField<BusinessPartners> = new EnumField('Properties11', BusinessPartners);
  /**
   * Static representation of the [[properties12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_12: EnumField<BusinessPartners> = new EnumField('Properties12', BusinessPartners);
  /**
   * Static representation of the [[properties13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_13: EnumField<BusinessPartners> = new EnumField('Properties13', BusinessPartners);
  /**
   * Static representation of the [[properties14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_14: EnumField<BusinessPartners> = new EnumField('Properties14', BusinessPartners);
  /**
   * Static representation of the [[properties15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_15: EnumField<BusinessPartners> = new EnumField('Properties15', BusinessPartners);
  /**
   * Static representation of the [[properties16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_16: EnumField<BusinessPartners> = new EnumField('Properties16', BusinessPartners);
  /**
   * Static representation of the [[properties17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_17: EnumField<BusinessPartners> = new EnumField('Properties17', BusinessPartners);
  /**
   * Static representation of the [[properties18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_18: EnumField<BusinessPartners> = new EnumField('Properties18', BusinessPartners);
  /**
   * Static representation of the [[properties19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_19: EnumField<BusinessPartners> = new EnumField('Properties19', BusinessPartners);
  /**
   * Static representation of the [[properties20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_20: EnumField<BusinessPartners> = new EnumField('Properties20', BusinessPartners);
  /**
   * Static representation of the [[properties21]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_21: EnumField<BusinessPartners> = new EnumField('Properties21', BusinessPartners);
  /**
   * Static representation of the [[properties22]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_22: EnumField<BusinessPartners> = new EnumField('Properties22', BusinessPartners);
  /**
   * Static representation of the [[properties23]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_23: EnumField<BusinessPartners> = new EnumField('Properties23', BusinessPartners);
  /**
   * Static representation of the [[properties24]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_24: EnumField<BusinessPartners> = new EnumField('Properties24', BusinessPartners);
  /**
   * Static representation of the [[properties25]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_25: EnumField<BusinessPartners> = new EnumField('Properties25', BusinessPartners);
  /**
   * Static representation of the [[properties26]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_26: EnumField<BusinessPartners> = new EnumField('Properties26', BusinessPartners);
  /**
   * Static representation of the [[properties27]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_27: EnumField<BusinessPartners> = new EnumField('Properties27', BusinessPartners);
  /**
   * Static representation of the [[properties28]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_28: EnumField<BusinessPartners> = new EnumField('Properties28', BusinessPartners);
  /**
   * Static representation of the [[properties29]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_29: EnumField<BusinessPartners> = new EnumField('Properties29', BusinessPartners);
  /**
   * Static representation of the [[properties30]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_30: EnumField<BusinessPartners> = new EnumField('Properties30', BusinessPartners);
  /**
   * Static representation of the [[properties31]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_31: EnumField<BusinessPartners> = new EnumField('Properties31', BusinessPartners);
  /**
   * Static representation of the [[properties32]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_32: EnumField<BusinessPartners> = new EnumField('Properties32', BusinessPartners);
  /**
   * Static representation of the [[properties33]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_33: EnumField<BusinessPartners> = new EnumField('Properties33', BusinessPartners);
  /**
   * Static representation of the [[properties34]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_34: EnumField<BusinessPartners> = new EnumField('Properties34', BusinessPartners);
  /**
   * Static representation of the [[properties35]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_35: EnumField<BusinessPartners> = new EnumField('Properties35', BusinessPartners);
  /**
   * Static representation of the [[properties36]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_36: EnumField<BusinessPartners> = new EnumField('Properties36', BusinessPartners);
  /**
   * Static representation of the [[properties37]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_37: EnumField<BusinessPartners> = new EnumField('Properties37', BusinessPartners);
  /**
   * Static representation of the [[properties38]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_38: EnumField<BusinessPartners> = new EnumField('Properties38', BusinessPartners);
  /**
   * Static representation of the [[properties39]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_39: EnumField<BusinessPartners> = new EnumField('Properties39', BusinessPartners);
  /**
   * Static representation of the [[properties40]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_40: EnumField<BusinessPartners> = new EnumField('Properties40', BusinessPartners);
  /**
   * Static representation of the [[properties41]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_41: EnumField<BusinessPartners> = new EnumField('Properties41', BusinessPartners);
  /**
   * Static representation of the [[properties42]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_42: EnumField<BusinessPartners> = new EnumField('Properties42', BusinessPartners);
  /**
   * Static representation of the [[properties43]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_43: EnumField<BusinessPartners> = new EnumField('Properties43', BusinessPartners);
  /**
   * Static representation of the [[properties44]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_44: EnumField<BusinessPartners> = new EnumField('Properties44', BusinessPartners);
  /**
   * Static representation of the [[properties45]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_45: EnumField<BusinessPartners> = new EnumField('Properties45', BusinessPartners);
  /**
   * Static representation of the [[properties46]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_46: EnumField<BusinessPartners> = new EnumField('Properties46', BusinessPartners);
  /**
   * Static representation of the [[properties47]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_47: EnumField<BusinessPartners> = new EnumField('Properties47', BusinessPartners);
  /**
   * Static representation of the [[properties48]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_48: EnumField<BusinessPartners> = new EnumField('Properties48', BusinessPartners);
  /**
   * Static representation of the [[properties49]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_49: EnumField<BusinessPartners> = new EnumField('Properties49', BusinessPartners);
  /**
   * Static representation of the [[properties50]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_50: EnumField<BusinessPartners> = new EnumField('Properties50', BusinessPartners);
  /**
   * Static representation of the [[properties51]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_51: EnumField<BusinessPartners> = new EnumField('Properties51', BusinessPartners);
  /**
   * Static representation of the [[properties52]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_52: EnumField<BusinessPartners> = new EnumField('Properties52', BusinessPartners);
  /**
   * Static representation of the [[properties53]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_53: EnumField<BusinessPartners> = new EnumField('Properties53', BusinessPartners);
  /**
   * Static representation of the [[properties54]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_54: EnumField<BusinessPartners> = new EnumField('Properties54', BusinessPartners);
  /**
   * Static representation of the [[properties55]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_55: EnumField<BusinessPartners> = new EnumField('Properties55', BusinessPartners);
  /**
   * Static representation of the [[properties56]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_56: EnumField<BusinessPartners> = new EnumField('Properties56', BusinessPartners);
  /**
   * Static representation of the [[properties57]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_57: EnumField<BusinessPartners> = new EnumField('Properties57', BusinessPartners);
  /**
   * Static representation of the [[properties58]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_58: EnumField<BusinessPartners> = new EnumField('Properties58', BusinessPartners);
  /**
   * Static representation of the [[properties59]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_59: EnumField<BusinessPartners> = new EnumField('Properties59', BusinessPartners);
  /**
   * Static representation of the [[properties60]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_60: EnumField<BusinessPartners> = new EnumField('Properties60', BusinessPartners);
  /**
   * Static representation of the [[properties61]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_61: EnumField<BusinessPartners> = new EnumField('Properties61', BusinessPartners);
  /**
   * Static representation of the [[properties62]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_62: EnumField<BusinessPartners> = new EnumField('Properties62', BusinessPartners);
  /**
   * Static representation of the [[properties63]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_63: EnumField<BusinessPartners> = new EnumField('Properties63', BusinessPartners);
  /**
   * Static representation of the [[properties64]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES_64: EnumField<BusinessPartners> = new EnumField('Properties64', BusinessPartners);
  /**
   * Static representation of the [[companyRegistrationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_REGISTRATION_NUMBER: StringField<BusinessPartners> = new StringField('CompanyRegistrationNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[verificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VERIFICATION_NUMBER: StringField<BusinessPartners> = new StringField('VerificationNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[discountBaseObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_BASE_OBJECT: EnumField<BusinessPartners> = new EnumField('DiscountBaseObject', BusinessPartners);
  /**
   * Static representation of the [[discountRelations]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_RELATIONS: EnumField<BusinessPartners> = new EnumField('DiscountRelations', BusinessPartners);
  /**
   * Static representation of the [[typeReport]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_REPORT: EnumField<BusinessPartners> = new EnumField('TypeReport', BusinessPartners);
  /**
   * Static representation of the [[thresholdOverlook]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THRESHOLD_OVERLOOK: EnumField<BusinessPartners> = new EnumField('ThresholdOverlook', BusinessPartners);
  /**
   * Static representation of the [[surchargeOverlook]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SURCHARGE_OVERLOOK: EnumField<BusinessPartners> = new EnumField('SurchargeOverlook', BusinessPartners);
  /**
   * Static representation of the [[downPaymentInterimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_INTERIM_ACCOUNT: StringField<BusinessPartners> = new StringField('DownPaymentInterimAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[operationCode347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_CODE_347: EnumField<BusinessPartners> = new EnumField('OperationCode347', BusinessPartners);
  /**
   * Static representation of the [[insuranceOperation347]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSURANCE_OPERATION_347: EnumField<BusinessPartners> = new EnumField('InsuranceOperation347', BusinessPartners);
  /**
   * Static representation of the [[hierarchicalDeduction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIERARCHICAL_DEDUCTION: EnumField<BusinessPartners> = new EnumField('HierarchicalDeduction', BusinessPartners);
  /**
   * Static representation of the [[shaamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHAAM_GROUP: EnumField<BusinessPartners> = new EnumField('ShaamGroup', BusinessPartners);
  /**
   * Static representation of the [[withholdingTaxCertified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFIED: EnumField<BusinessPartners> = new EnumField('WithholdingTaxCertified', BusinessPartners);
  /**
   * Static representation of the [[bookkeepingCertified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKKEEPING_CERTIFIED: EnumField<BusinessPartners> = new EnumField('BookkeepingCertified', BusinessPartners);
  /**
   * Static representation of the [[planningGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNING_GROUP: StringField<BusinessPartners> = new StringField('PlanningGroup', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[affiliate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AFFILIATE: EnumField<BusinessPartners> = new EnumField('Affiliate', BusinessPartners);
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY: NumberField<BusinessPartners> = new NumberField('Industry', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[vatIdNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_ID_NUM: StringField<BusinessPartners> = new StringField('VatIDNum', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[datevAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEV_ACCOUNT: StringField<BusinessPartners> = new StringField('DatevAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[datevFirstDataEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEV_FIRST_DATA_ENTRY: EnumField<BusinessPartners> = new EnumField('DatevFirstDataEntry', BusinessPartners);
  /**
   * Static representation of the [[gtsRegNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_REG_NO: StringField<BusinessPartners> = new StringField('GTSRegNo', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[gtsBankAccountNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_BANK_ACCOUNT_NO: StringField<BusinessPartners> = new StringField('GTSBankAccountNo', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[gtsBillingAddrTel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_BILLING_ADDR_TEL: StringField<BusinessPartners> = new StringField('GTSBillingAddrTel', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eTaxWebSite]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAX_WEB_SITE: NumberField<BusinessPartners> = new NumberField('ETaxWebSite', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[houseBankIban]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_IBAN: StringField<BusinessPartners> = new StringField('HouseBankIBAN', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[vatRegistrationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REGISTRATION_NUMBER: StringField<BusinessPartners> = new StringField('VATRegistrationNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[representativeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPRESENTATIVE_NAME: StringField<BusinessPartners> = new StringField('RepresentativeName', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[industryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_TYPE: StringField<BusinessPartners> = new StringField('IndustryType', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[businessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE: StringField<BusinessPartners> = new StringField('BusinessType', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<BusinessPartners> = new NumberField('Series', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[automaticPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTOMATIC_POSTING: EnumField<BusinessPartners> = new EnumField('AutomaticPosting', BusinessPartners);
  /**
   * Static representation of the [[interestAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_ACCOUNT: StringField<BusinessPartners> = new StringField('InterestAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[feeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEE_ACCOUNT: StringField<BusinessPartners> = new StringField('FeeAccount', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN_NUMBER: NumberField<BusinessPartners> = new NumberField('CampaignNumber', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[aliasName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALIAS_NAME: StringField<BusinessPartners> = new StringField('AliasName', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[defaultBlanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_BLANKET_AGREEMENT_NUMBER: NumberField<BusinessPartners> = new NumberField('DefaultBlanketAgreementNumber', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[effectiveDiscount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_DISCOUNT: EnumField<BusinessPartners> = new EnumField('EffectiveDiscount', BusinessPartners);
  /**
   * Static representation of the [[noDiscounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_DISCOUNTS: EnumField<BusinessPartners> = new EnumField('NoDiscounts', BusinessPartners);
  /**
   * Static representation of the [[effectivePrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_PRICE: EnumField<BusinessPartners> = new EnumField('EffectivePrice', BusinessPartners);
  /**
   * Static representation of the [[globalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GLOBAL_LOCATION_NUMBER: StringField<BusinessPartners> = new StringField('GlobalLocationNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[ediSenderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDI_SENDER_ID: StringField<BusinessPartners> = new StringField('EDISenderID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[ediRecipientId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDI_RECIPIENT_ID: StringField<BusinessPartners> = new StringField('EDIRecipientID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[residenNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESIDEN_NUMBER: EnumField<BusinessPartners> = new EnumField('ResidenNumber', BusinessPartners);
  /**
   * Static representation of the [[relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_CODE: StringField<BusinessPartners> = new StringField('RelationshipCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[relationshipDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_DATE_FROM: DateField<BusinessPartners> = new DateField('RelationshipDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[relationshipDateTill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_DATE_TILL: DateField<BusinessPartners> = new DateField('RelationshipDateTill', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[unifiedFederalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIFIED_FEDERAL_TAX_ID: StringField<BusinessPartners> = new StringField('UnifiedFederalTaxID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<BusinessPartners> = new NumberField('AttachmentEntry', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[typeOfOperation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_OF_OPERATION: EnumField<BusinessPartners> = new EnumField('TypeOfOperation', BusinessPartners);
  /**
   * Static representation of the [[endorsableChecksFromBp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENDORSABLE_CHECKS_FROM_BP: EnumField<BusinessPartners> = new EnumField('EndorsableChecksFromBP', BusinessPartners);
  /**
   * Static representation of the [[acceptsEndorsedChecks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCEPTS_ENDORSED_CHECKS: EnumField<BusinessPartners> = new EnumField('AcceptsEndorsedChecks', BusinessPartners);
  /**
   * Static representation of the [[ownerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_CODE: NumberField<BusinessPartners> = new NumberField('OwnerCode', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[blockSendingMarketingContent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK_SENDING_MARKETING_CONTENT: EnumField<BusinessPartners> = new EnumField('BlockSendingMarketingContent', BusinessPartners);
  /**
   * Static representation of the [[agentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENT_CODE: StringField<BusinessPartners> = new StringField('AgentCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<BusinessPartners> = new EnumField('PriceMode', BusinessPartners);
  /**
   * Static representation of the [[eDocGenerationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_GENERATION_TYPE: EnumField<BusinessPartners> = new EnumField('EDocGenerationType', BusinessPartners);
  /**
   * Static representation of the [[eDocStreet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STREET: StringField<BusinessPartners> = new StringField('EDocStreet', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocStreetNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_STREET_NUMBER: StringField<BusinessPartners> = new StringField('EDocStreetNumber', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocBuildingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_BUILDING_NUMBER: NumberField<BusinessPartners> = new NumberField('EDocBuildingNumber', BusinessPartners, 'Edm.Int32');
  /**
   * Static representation of the [[eDocZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_ZIP_CODE: StringField<BusinessPartners> = new StringField('EDocZipCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_CITY: StringField<BusinessPartners> = new StringField('EDocCity', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_COUNTRY: StringField<BusinessPartners> = new StringField('EDocCountry', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocDistrict]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_DISTRICT: StringField<BusinessPartners> = new StringField('EDocDistrict', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocRepresentativeFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_REPRESENTATIVE_FIRST_NAME: StringField<BusinessPartners> = new StringField('EDocRepresentativeFirstName', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocRepresentativeSurname]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_REPRESENTATIVE_SURNAME: StringField<BusinessPartners> = new StringField('EDocRepresentativeSurname', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocRepresentativeCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_REPRESENTATIVE_COMPANY: StringField<BusinessPartners> = new StringField('EDocRepresentativeCompany', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocRepresentativeFiscalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_REPRESENTATIVE_FISCAL_CODE: StringField<BusinessPartners> = new StringField('EDocRepresentativeFiscalCode', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocRepresentativeAdditionalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_REPRESENTATIVE_ADDITIONAL_ID: StringField<BusinessPartners> = new StringField('EDocRepresentativeAdditionalId', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[eDocPecAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_PEC_ADDRESS: StringField<BusinessPartners> = new StringField('EDocPECAddress', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[ipaCodeForPa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IPA_CODE_FOR_PA: StringField<BusinessPartners> = new StringField('IPACodeForPA', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<BusinessPartners> = new DateField('UpdateDate', BusinessPartners, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<BusinessPartners> = new TimeField('UpdateTime', BusinessPartners, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[exemptionMaxAmountValidationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_MAX_AMOUNT_VALIDATION_TYPE: EnumField<BusinessPartners> = new EnumField('ExemptionMaxAmountValidationType', BusinessPartners);
  /**
   * Static representation of the [[eCommerceMerchantId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_COMMERCE_MERCHANT_ID: StringField<BusinessPartners> = new StringField('ECommerceMerchantID', BusinessPartners, 'Edm.String');
  /**
   * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<BusinessPartners> = new EnumField('UseBillToAddrToDetermineTax', BusinessPartners);
  /**
   * Static representation of the [[bpAddresses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ADDRESSES: CollectionField<BusinessPartners, BpAddress> = new CollectionField('BPAddresses', BusinessPartners, BpAddress);
  /**
   * Static representation of the [[contactEmployees]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMPLOYEES: CollectionField<BusinessPartners, ContactEmployee> = new CollectionField('ContactEmployees', BusinessPartners, ContactEmployee);
  /**
   * Static representation of the [[bpAccountReceivablePaybleCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION: CollectionField<BusinessPartners, BpAccountReceivablePayble> = new CollectionField('BPAccountReceivablePaybleCollection', BusinessPartners, BpAccountReceivablePayble);
  /**
   * Static representation of the [[bpPaymentMethods]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PAYMENT_METHODS: CollectionField<BusinessPartners, BpPaymentMethod> = new CollectionField('BPPaymentMethods', BusinessPartners, BpPaymentMethod);
  /**
   * Static representation of the [[bpWithholdingTaxCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_WITHHOLDING_TAX_COLLECTION: CollectionField<BusinessPartners, BpWithholdingTax> = new CollectionField('BPWithholdingTaxCollection', BusinessPartners, BpWithholdingTax);
  /**
   * Static representation of the [[bpPaymentDates]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PAYMENT_DATES: CollectionField<BusinessPartners, BpPaymentDate> = new CollectionField('BPPaymentDates', BusinessPartners, BpPaymentDate);
  /**
   * Static representation of the [[bpBranchAssignment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BRANCH_ASSIGNMENT: CollectionField<BusinessPartners, BpBranchAssignmentItem> = new CollectionField('BPBranchAssignment', BusinessPartners, BpBranchAssignmentItem);
  /**
   * Static representation of the [[bpBankAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BANK_ACCOUNTS: CollectionField<BusinessPartners, BpBankAccount> = new CollectionField('BPBankAccounts', BusinessPartners, BpBankAccount);
  /**
   * Static representation of the [[bpFiscalTaxIdCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FISCAL_TAX_ID_COLLECTION: CollectionField<BusinessPartners, BpFiscalTaxId> = new CollectionField('BPFiscalTaxIDCollection', BusinessPartners, BpFiscalTaxId);
  /**
   * Static representation of the [[discountGroups]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_GROUPS: CollectionField<BusinessPartners, DiscountGroup> = new CollectionField('DiscountGroups', BusinessPartners, DiscountGroup);
  /**
   * Static representation of the [[bpIntrastatExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_INTRASTAT_EXTENSION: BpIntrastatExtensionField<BusinessPartners> = new BpIntrastatExtensionField('BPIntrastatExtension', BusinessPartners);
  /**
   * Static representation of the [[bpBlockSendingMarketingContents]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BLOCK_SENDING_MARKETING_CONTENTS: CollectionField<BusinessPartners, BpBlockSendingMarketingContent> = new CollectionField('BPBlockSendingMarketingContents', BusinessPartners, BpBlockSendingMarketingContent);
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<BusinessPartners, SalesOpportunities> = new OneToManyLink('SalesOpportunities', BusinessPartners, SalesOpportunities);
  /**
   * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_DEFAULT_GROUPS: OneToManyLink<BusinessPartners, UserDefaultGroups> = new OneToManyLink('UserDefaultGroups', BusinessPartners, UserDefaultGroups);
  /**
   * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_PRICES: OneToManyLink<BusinessPartners, SpecialPrices> = new OneToManyLink('SpecialPrices', BusinessPartners, SpecialPrices);
  /**
   * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COSTS: OneToManyLink<BusinessPartners, LandedCosts> = new OneToManyLink('LandedCosts', BusinessPartners, LandedCosts);
  /**
   * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ORDERS: OneToManyLink<BusinessPartners, WorkOrders> = new OneToManyLink('WorkOrders', BusinessPartners, WorkOrders);
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<BusinessPartners, Warehouses> = new OneToManyLink('Warehouses', BusinessPartners, Warehouses);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_ENTRIES: OneToManyLink<BusinessPartners, InventoryGenEntries> = new OneToManyLink('InventoryGenEntries', BusinessPartners, InventoryGenEntries);
  /**
   * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QUOTATIONS: OneToManyLink<BusinessPartners, PurchaseQuotations> = new OneToManyLink('PurchaseQuotations', BusinessPartners, PurchaseQuotations);
  /**
   * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_PAGES: OneToManyLink<BusinessPartners, BankPages> = new OneToManyLink('BankPages', BusinessPartners, BankPages);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<BusinessPartners, Items> = new OneToManyLink('Items', BusinessPartners, Items);
  /**
   * Static representation of the one-to-many navigation property [[contacts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACTS: OneToManyLink<BusinessPartners, Contacts> = new OneToManyLink('Contacts', BusinessPartners, Contacts);
  /**
   * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCTION_ORDERS: OneToManyLink<BusinessPartners, ProductionOrders> = new OneToManyLink('ProductionOrders', BusinessPartners, ProductionOrders);
  /**
   * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREAS: OneToManyLink<BusinessPartners, DepreciationAreas> = new OneToManyLink('DepreciationAreas', BusinessPartners, DepreciationAreas);
  /**
   * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NOTES: OneToManyLink<BusinessPartners, DeliveryNotes> = new OneToManyLink('DeliveryNotes', BusinessPartners, DeliveryNotes);
  /**
   * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUP: OneToOneLink<BusinessPartners, BusinessPartnerGroups> = new OneToOneLink('BusinessPartnerGroup', BusinessPartners, BusinessPartnerGroups);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<BusinessPartners, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', BusinessPartners, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[priceList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: OneToOneLink<BusinessPartners, PriceLists> = new OneToOneLink('PriceList', BusinessPartners, PriceLists);
  /**
   * Static representation of the one-to-one navigation property [[commissionGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP: OneToOneLink<BusinessPartners, CommissionGroups> = new OneToOneLink('CommissionGroup', BusinessPartners, CommissionGroups);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<BusinessPartners, SalesPersons> = new OneToOneLink('SalesPerson', BusinessPartners, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<BusinessPartners, Currencies> = new OneToOneLink('Currency2', BusinessPartners, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<BusinessPartners, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', BusinessPartners, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<BusinessPartners, Countries> = new OneToOneLink('Country2', BusinessPartners, Countries);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP_2: OneToOneLink<BusinessPartners, VatGroups> = new OneToOneLink('VatGroup2', BusinessPartners, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE_2: OneToOneLink<BusinessPartners, ShippingTypes> = new OneToOneLink('ShippingType2', BusinessPartners, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORING_INDICATOR: OneToOneLink<BusinessPartners, FactoringIndicators> = new OneToOneLink('FactoringIndicator', BusinessPartners, FactoringIndicators);
  /**
   * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_CARD: OneToOneLink<BusinessPartners, CreditCards> = new OneToOneLink('CreditCard', BusinessPartners, CreditCards);
  /**
   * Static representation of the one-to-one navigation property [[bpPriority]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PRIORITY: OneToOneLink<BusinessPartners, BpPriorities> = new OneToOneLink('BPPriority', BusinessPartners, BpPriorities);
  /**
   * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS_1099: OneToOneLink<BusinessPartners, Forms1099> = new OneToOneLink('Forms1099', BusinessPartners, Forms1099);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<BusinessPartners, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', BusinessPartners, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[dunningLetter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_LETTER: OneToOneLink<BusinessPartners, DunningLetters> = new OneToOneLink('DunningLetter', BusinessPartners, DunningLetters);
  /**
   * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCK_2: OneToOneLink<BusinessPartners, PaymentBlocks> = new OneToOneLink('PaymentBlock2', BusinessPartners, PaymentBlocks);
  /**
   * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: OneToOneLink<BusinessPartners, WithholdingTaxCodes> = new OneToOneLink('WithholdingTaxCode', BusinessPartners, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<BusinessPartners, EmployeesInfo> = new OneToOneLink('EmployeeInfo', BusinessPartners, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[territory2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_2: OneToOneLink<BusinessPartners, Territories> = new OneToOneLink('Territory2', BusinessPartners, Territories);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<BusinessPartners, Projects> = new OneToOneLink('Project', BusinessPartners, Projects);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_CODE: OneToOneLink<BusinessPartners, SalesTaxCodes> = new OneToOneLink('SalesTaxCode', BusinessPartners, SalesTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[dunningTerm2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_TERM_2: OneToOneLink<BusinessPartners, DunningTerms> = new OneToOneLink('DunningTerm2', BusinessPartners, DunningTerms);
  /**
   * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_LANGUAGE: OneToOneLink<BusinessPartners, UserLanguages> = new OneToOneLink('UserLanguage', BusinessPartners, UserLanguages);
  /**
   * Static representation of the one-to-one navigation property [[deductionTaxGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TAX_GROUP: OneToOneLink<BusinessPartners, DeductionTaxGroups> = new OneToOneLink('DeductionTaxGroup', BusinessPartners, DeductionTaxGroups);
  /**
   * Static representation of the one-to-one navigation property [[bankChargesAllocationCode2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CHARGES_ALLOCATION_CODE_2: OneToOneLink<BusinessPartners, BankChargesAllocationCodes> = new OneToOneLink('BankChargesAllocationCode2', BusinessPartners, BankChargesAllocationCodes);
  /**
   * Static representation of the one-to-one navigation property [[industry2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_2: OneToOneLink<BusinessPartners, Industries> = new OneToOneLink('Industry2', BusinessPartners, Industries);
  /**
   * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_WEB_SITE: OneToOneLink<BusinessPartners, TaxWebSites> = new OneToOneLink('TaxWebSite', BusinessPartners, TaxWebSites);
  /**
   * Static representation of the one-to-one navigation property [[campaign]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGN: OneToOneLink<BusinessPartners, Campaigns> = new OneToOneLink('Campaign', BusinessPartners, Campaigns);
  /**
   * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENT: OneToOneLink<BusinessPartners, BlanketAgreements> = new OneToOneLink('BlanketAgreement', BusinessPartners, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[quotations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUOTATIONS: OneToManyLink<BusinessPartners, Quotations> = new OneToManyLink('Quotations', BusinessPartners, Quotations);
  /**
   * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACTS: OneToManyLink<BusinessPartners, ServiceContracts> = new OneToManyLink('ServiceContracts', BusinessPartners, ServiceContracts);
  /**
   * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_GEN_EXITS: OneToManyLink<BusinessPartners, InventoryGenExits> = new OneToManyLink('InventoryGenExits', BusinessPartners, InventoryGenExits);
  /**
   * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_REQUESTS: OneToManyLink<BusinessPartners, PurchaseRequests> = new OneToManyLink('PurchaseRequests', BusinessPartners, PurchaseRequests);
  /**
   * Static representation of the one-to-many navigation property [[deductionTaxHierarchies]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TAX_HIERARCHIES: OneToManyLink<BusinessPartners, DeductionTaxHierarchies> = new OneToManyLink('DeductionTaxHierarchies', BusinessPartners, DeductionTaxHierarchies);
  /**
   * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REQUEST: OneToManyLink<BusinessPartners, ReturnRequest> = new OneToManyLink('ReturnRequest', BusinessPartners, ReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<BusinessPartners, BlanketAgreements> = new OneToManyLink('BlanketAgreements', BusinessPartners, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<BusinessPartners, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', BusinessPartners, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_RETURNS: OneToManyLink<BusinessPartners, PurchaseReturns> = new OneToManyLink('PurchaseReturns', BusinessPartners, PurchaseReturns);
  /**
   * Static representation of the one-to-many navigation property [[invoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICES: OneToManyLink<BusinessPartners, Invoices> = new OneToManyLink('Invoices', BusinessPartners, Invoices);
  /**
   * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_NOTES: OneToManyLink<BusinessPartners, CreditNotes> = new OneToManyLink('CreditNotes', BusinessPartners, CreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFERS: OneToManyLink<BusinessPartners, StockTransfers> = new OneToManyLink('StockTransfers', BusinessPartners, StockTransfers);
  /**
   * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACES: OneToManyLink<BusinessPartners, BusinessPlaces> = new OneToManyLink('BusinessPlaces', BusinessPartners, BusinessPlaces);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: OneToManyLink<BusinessPartners, Orders> = new OneToManyLink('Orders', BusinessPartners, Orders);
  /**
   * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNERS_SETUPS: OneToManyLink<BusinessPartners, PartnersSetups> = new OneToManyLink('PartnersSetups', BusinessPartners, PartnersSetups);
  /**
   * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<BusinessPartners, InventoryTransferRequests> = new OneToManyLink('InventoryTransferRequests', BusinessPartners, InventoryTransferRequests);
  /**
   * Static representation of the one-to-many navigation property [[activities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITIES: OneToManyLink<BusinessPartners, Activities> = new OneToManyLink('Activities', BusinessPartners, Activities);
  /**
   * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENTS: OneToManyLink<BusinessPartners, DownPayments> = new OneToManyLink('DownPayments', BusinessPartners, DownPayments);
  /**
   * Static representation of the one-to-many navigation property [[drafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFTS: OneToManyLink<BusinessPartners, Drafts> = new OneToManyLink('Drafts', BusinessPartners, Drafts);
  /**
   * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_DRAFTS: OneToManyLink<BusinessPartners, StockTransferDrafts> = new OneToManyLink('StockTransferDrafts', BusinessPartners, StockTransferDrafts);
  /**
   * Static representation of the one-to-many navigation property [[returns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS: OneToManyLink<BusinessPartners, Returns> = new OneToManyLink('Returns', BusinessPartners, Returns);
  /**
   * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_REVALUATION: OneToManyLink<BusinessPartners, MaterialRevaluation> = new OneToManyLink('MaterialRevaluation', BusinessPartners, MaterialRevaluation);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE_REVERSAL: OneToManyLink<BusinessPartners, CorrectionInvoiceReversal> = new OneToManyLink('CorrectionInvoiceReversal', BusinessPartners, CorrectionInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE: OneToManyLink<BusinessPartners, CorrectionPurchaseInvoice> = new OneToManyLink('CorrectionPurchaseInvoice', BusinessPartners, CorrectionPurchaseInvoice);
  /**
   * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<BusinessPartners, CorrectionPurchaseInvoiceReversal> = new OneToManyLink('CorrectionPurchaseInvoiceReversal', BusinessPartners, CorrectionPurchaseInvoiceReversal);
  /**
   * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<BusinessPartners, CustomerEquipmentCards> = new OneToManyLink('CustomerEquipmentCards', BusinessPartners, CustomerEquipmentCards);
  /**
   * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_INVOICES: OneToManyLink<BusinessPartners, PurchaseInvoices> = new OneToManyLink('PurchaseInvoices', BusinessPartners, PurchaseInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DELIVERY_NOTES: OneToManyLink<BusinessPartners, PurchaseDeliveryNotes> = new OneToManyLink('PurchaseDeliveryNotes', BusinessPartners, PurchaseDeliveryNotes);
  /**
   * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRECTION_INVOICE: OneToManyLink<BusinessPartners, CorrectionInvoice> = new OneToManyLink('CorrectionInvoice', BusinessPartners, CorrectionInvoice);
  /**
   * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_NOTES: OneToManyLink<BusinessPartners, PurchaseCreditNotes> = new OneToManyLink('PurchaseCreditNotes', BusinessPartners, PurchaseCreditNotes);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<BusinessPartners, ServiceCalls> = new OneToManyLink('ServiceCalls', BusinessPartners, ServiceCalls);
  /**
   * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_DOWN_PAYMENTS: OneToManyLink<BusinessPartners, PurchaseDownPayments> = new OneToManyLink('PurchaseDownPayments', BusinessPartners, PurchaseDownPayments);
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<BusinessPartners, EmployeesInfo> = new OneToManyLink('EmployeesInfo', BusinessPartners, EmployeesInfo);
  /**
   * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDERS: OneToManyLink<BusinessPartners, PurchaseOrders> = new OneToManyLink('PurchaseOrders', BusinessPartners, PurchaseOrders);
  /**
   * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATE_CAT_NUM: OneToManyLink<BusinessPartners, AlternateCatNum> = new OneToManyLink('AlternateCatNum', BusinessPartners, AlternateCatNum);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<BusinessPartners, ProjectManagements> = new OneToManyLink('ProjectManagements', BusinessPartners, ProjectManagements);
  /**
   * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_RETURN_REQUEST: OneToManyLink<BusinessPartners, GoodsReturnRequest> = new OneToManyLink('GoodsReturnRequest', BusinessPartners, GoodsReturnRequest);
  /**
   * Static representation of the one-to-many navigation property [[salesTaxInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_INVOICES: OneToManyLink<BusinessPartners, SalesTaxInvoices> = new OneToManyLink('SalesTaxInvoices', BusinessPartners, SalesTaxInvoices);
  /**
   * Static representation of the one-to-many navigation property [[purchaseTaxInvoices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_TAX_INVOICES: OneToManyLink<BusinessPartners, PurchaseTaxInvoices> = new OneToManyLink('PurchaseTaxInvoices', BusinessPartners, PurchaseTaxInvoices);
  /**
   * All fields of the BusinessPartners entity.
   */
  export const _allFields: Array<StringField<BusinessPartners> | EnumField<BusinessPartners> | NumberField<BusinessPartners> | DateField<BusinessPartners> | TimeField<BusinessPartners> | CollectionField<BusinessPartners, BpAddress> | CollectionField<BusinessPartners, ContactEmployee> | CollectionField<BusinessPartners, BpAccountReceivablePayble> | CollectionField<BusinessPartners, BpPaymentMethod> | CollectionField<BusinessPartners, BpWithholdingTax> | CollectionField<BusinessPartners, BpPaymentDate> | CollectionField<BusinessPartners, BpBranchAssignmentItem> | CollectionField<BusinessPartners, BpBankAccount> | CollectionField<BusinessPartners, BpFiscalTaxId> | CollectionField<BusinessPartners, DiscountGroup> | BpIntrastatExtensionField<BusinessPartners> | CollectionField<BusinessPartners, BpBlockSendingMarketingContent> | OneToManyLink<BusinessPartners, SalesOpportunities> | OneToManyLink<BusinessPartners, UserDefaultGroups> | OneToManyLink<BusinessPartners, SpecialPrices> | OneToManyLink<BusinessPartners, LandedCosts> | OneToManyLink<BusinessPartners, WorkOrders> | OneToManyLink<BusinessPartners, Warehouses> | OneToManyLink<BusinessPartners, InventoryGenEntries> | OneToManyLink<BusinessPartners, PurchaseQuotations> | OneToManyLink<BusinessPartners, BankPages> | OneToManyLink<BusinessPartners, Items> | OneToManyLink<BusinessPartners, Contacts> | OneToManyLink<BusinessPartners, ProductionOrders> | OneToManyLink<BusinessPartners, DepreciationAreas> | OneToManyLink<BusinessPartners, DeliveryNotes> | OneToOneLink<BusinessPartners, BusinessPartnerGroups> | OneToOneLink<BusinessPartners, PaymentTermsTypes> | OneToOneLink<BusinessPartners, PriceLists> | OneToOneLink<BusinessPartners, CommissionGroups> | OneToOneLink<BusinessPartners, SalesPersons> | OneToOneLink<BusinessPartners, Currencies> | OneToOneLink<BusinessPartners, ChartOfAccounts> | OneToOneLink<BusinessPartners, Countries> | OneToOneLink<BusinessPartners, VatGroups> | OneToOneLink<BusinessPartners, ShippingTypes> | OneToOneLink<BusinessPartners, FactoringIndicators> | OneToOneLink<BusinessPartners, CreditCards> | OneToOneLink<BusinessPartners, BpPriorities> | OneToOneLink<BusinessPartners, Forms1099> | OneToOneLink<BusinessPartners, WizardPaymentMethods> | OneToOneLink<BusinessPartners, DunningLetters> | OneToOneLink<BusinessPartners, PaymentBlocks> | OneToOneLink<BusinessPartners, WithholdingTaxCodes> | OneToOneLink<BusinessPartners, EmployeesInfo> | OneToOneLink<BusinessPartners, Territories> | OneToOneLink<BusinessPartners, Projects> | OneToOneLink<BusinessPartners, SalesTaxCodes> | OneToOneLink<BusinessPartners, DunningTerms> | OneToOneLink<BusinessPartners, UserLanguages> | OneToOneLink<BusinessPartners, DeductionTaxGroups> | OneToOneLink<BusinessPartners, BankChargesAllocationCodes> | OneToOneLink<BusinessPartners, Industries> | OneToOneLink<BusinessPartners, TaxWebSites> | OneToOneLink<BusinessPartners, Campaigns> | OneToOneLink<BusinessPartners, BlanketAgreements> | OneToManyLink<BusinessPartners, Quotations> | OneToManyLink<BusinessPartners, ServiceContracts> | OneToManyLink<BusinessPartners, InventoryGenExits> | OneToManyLink<BusinessPartners, PurchaseRequests> | OneToManyLink<BusinessPartners, DeductionTaxHierarchies> | OneToManyLink<BusinessPartners, ReturnRequest> | OneToManyLink<BusinessPartners, BlanketAgreements> | OneToManyLink<BusinessPartners, GlAccountAdvancedRules> | OneToManyLink<BusinessPartners, PurchaseReturns> | OneToManyLink<BusinessPartners, Invoices> | OneToManyLink<BusinessPartners, CreditNotes> | OneToManyLink<BusinessPartners, StockTransfers> | OneToManyLink<BusinessPartners, BusinessPlaces> | OneToManyLink<BusinessPartners, Orders> | OneToManyLink<BusinessPartners, PartnersSetups> | OneToManyLink<BusinessPartners, InventoryTransferRequests> | OneToManyLink<BusinessPartners, Activities> | OneToManyLink<BusinessPartners, DownPayments> | OneToManyLink<BusinessPartners, Drafts> | OneToManyLink<BusinessPartners, StockTransferDrafts> | OneToManyLink<BusinessPartners, Returns> | OneToManyLink<BusinessPartners, MaterialRevaluation> | OneToManyLink<BusinessPartners, CorrectionInvoiceReversal> | OneToManyLink<BusinessPartners, CorrectionPurchaseInvoice> | OneToManyLink<BusinessPartners, CorrectionPurchaseInvoiceReversal> | OneToManyLink<BusinessPartners, CustomerEquipmentCards> | OneToManyLink<BusinessPartners, PurchaseInvoices> | OneToManyLink<BusinessPartners, PurchaseDeliveryNotes> | OneToManyLink<BusinessPartners, CorrectionInvoice> | OneToManyLink<BusinessPartners, PurchaseCreditNotes> | OneToManyLink<BusinessPartners, ServiceCalls> | OneToManyLink<BusinessPartners, PurchaseDownPayments> | OneToManyLink<BusinessPartners, EmployeesInfo> | OneToManyLink<BusinessPartners, PurchaseOrders> | OneToManyLink<BusinessPartners, AlternateCatNum> | OneToManyLink<BusinessPartners, ProjectManagements> | OneToManyLink<BusinessPartners, GoodsReturnRequest> | OneToManyLink<BusinessPartners, SalesTaxInvoices> | OneToManyLink<BusinessPartners, PurchaseTaxInvoices>> = [
    BusinessPartners.CARD_CODE,
    BusinessPartners.CARD_NAME,
    BusinessPartners.CARD_TYPE,
    BusinessPartners.GROUP_CODE,
    BusinessPartners.ADDRESS,
    BusinessPartners.ZIP_CODE,
    BusinessPartners.MAIL_ADDRESS,
    BusinessPartners.MAIL_ZIP_CODE,
    BusinessPartners.PHONE_1,
    BusinessPartners.PHONE_2,
    BusinessPartners.FAX,
    BusinessPartners.CONTACT_PERSON,
    BusinessPartners.NOTES,
    BusinessPartners.PAY_TERMS_GRP_CODE,
    BusinessPartners.CREDIT_LIMIT,
    BusinessPartners.MAX_COMMITMENT,
    BusinessPartners.DISCOUNT_PERCENT,
    BusinessPartners.VAT_LIABLE,
    BusinessPartners.FEDERAL_TAX_ID,
    BusinessPartners.DEDUCTIBLE_AT_SOURCE,
    BusinessPartners.DEDUCTION_PERCENT,
    BusinessPartners.DEDUCTION_VALID_UNTIL,
    BusinessPartners.PRICE_LIST_NUM,
    BusinessPartners.INTREST_RATE_PERCENT,
    BusinessPartners.COMMISSION_PERCENT,
    BusinessPartners.COMMISSION_GROUP_CODE,
    BusinessPartners.FREE_TEXT,
    BusinessPartners.SALES_PERSON_CODE,
    BusinessPartners.CURRENCY,
    BusinessPartners.RATE_DIFF_ACCOUNT,
    BusinessPartners.CELLULAR,
    BusinessPartners.AVARAGE_LATE,
    BusinessPartners.CITY,
    BusinessPartners.COUNTY,
    BusinessPartners.COUNTRY,
    BusinessPartners.MAIL_CITY,
    BusinessPartners.MAIL_COUNTY,
    BusinessPartners.MAIL_COUNTRY,
    BusinessPartners.EMAIL_ADDRESS,
    BusinessPartners.PICTURE,
    BusinessPartners.DEFAULT_ACCOUNT,
    BusinessPartners.DEFAULT_BRANCH,
    BusinessPartners.DEFAULT_BANK_CODE,
    BusinessPartners.ADDITIONAL_ID,
    BusinessPartners.PAGER,
    BusinessPartners.FATHER_CARD,
    BusinessPartners.CARD_FOREIGN_NAME,
    BusinessPartners.FATHER_TYPE,
    BusinessPartners.DEDUCTION_OFFICE,
    BusinessPartners.EXPORT_CODE,
    BusinessPartners.MIN_INTREST,
    BusinessPartners.CURRENT_ACCOUNT_BALANCE,
    BusinessPartners.OPEN_DELIVERY_NOTES_BALANCE,
    BusinessPartners.OPEN_ORDERS_BALANCE,
    BusinessPartners.VAT_GROUP,
    BusinessPartners.SHIPPING_TYPE,
    BusinessPartners.PASSWORD,
    BusinessPartners.INDICATOR,
    BusinessPartners.IBAN,
    BusinessPartners.CREDIT_CARD_CODE,
    BusinessPartners.CREDIT_CARD_NUM,
    BusinessPartners.CREDIT_CARD_EXPIRATION,
    BusinessPartners.DEBITOR_ACCOUNT,
    BusinessPartners.OPEN_OPPORTUNITIES,
    BusinessPartners.VALID,
    BusinessPartners.VALID_FROM,
    BusinessPartners.VALID_TO,
    BusinessPartners.VALID_REMARKS,
    BusinessPartners.FROZEN,
    BusinessPartners.FROZEN_FROM,
    BusinessPartners.FROZEN_TO,
    BusinessPartners.FROZEN_REMARKS,
    BusinessPartners.BLOCK,
    BusinessPartners.BILL_TO_STATE,
    BusinessPartners.EXEMPT_NUM,
    BusinessPartners.PRIORITY,
    BusinessPartners.FORM_CODE_1099,
    BusinessPartners.BOX_1099,
    BusinessPartners.PEYMENT_METHOD_CODE,
    BusinessPartners.BACK_ORDER,
    BusinessPartners.PARTIAL_DELIVERY,
    BusinessPartners.BLOCK_DUNNING,
    BusinessPartners.BANK_COUNTRY,
    BusinessPartners.HOUSE_BANK,
    BusinessPartners.HOUSE_BANK_COUNTRY,
    BusinessPartners.HOUSE_BANK_ACCOUNT,
    BusinessPartners.SHIP_TO_DEFAULT,
    BusinessPartners.DUNNING_LEVEL,
    BusinessPartners.DUNNING_DATE,
    BusinessPartners.COLLECTION_AUTHORIZATION,
    BusinessPartners.DME,
    BusinessPartners.INSTRUCTION_KEY,
    BusinessPartners.SINGLE_PAYMENT,
    BusinessPartners.ISR_BILLER_ID,
    BusinessPartners.PAYMENT_BLOCK,
    BusinessPartners.REFERENCE_DETAILS,
    BusinessPartners.HOUSE_BANK_BRANCH,
    BusinessPartners.OWNER_ID_NUMBER,
    BusinessPartners.PAYMENT_BLOCK_DESCRIPTION,
    BusinessPartners.TAX_EXEMPTION_LETTER_NUM,
    BusinessPartners.MAX_AMOUNT_OF_EXEMPTION,
    BusinessPartners.EXEMPTION_VALIDITY_DATE_FROM,
    BusinessPartners.EXEMPTION_VALIDITY_DATE_TO,
    BusinessPartners.LINKED_BUSINESS_PARTNER,
    BusinessPartners.LAST_MULTI_RECONCILIATION_NUM,
    BusinessPartners.DEFERRED_TAX,
    BusinessPartners.EQUALIZATION,
    BusinessPartners.SUBJECT_TO_WITHHOLDING_TAX,
    BusinessPartners.CERTIFICATE_NUMBER,
    BusinessPartners.EXPIRATION_DATE,
    BusinessPartners.NATIONAL_INSURANCE_NUM,
    BusinessPartners.ACCRUAL_CRITERIA,
    BusinessPartners.WT_CODE,
    BusinessPartners.BILL_TO_BUILDING_FLOOR_ROOM,
    BusinessPartners.DOWN_PAYMENT_CLEAR_ACT,
    BusinessPartners.CHANNEL_BP,
    BusinessPartners.DEFAULT_TECHNICIAN,
    BusinessPartners.BILLTO_DEFAULT,
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_DISC,
    BusinessPartners.TERRITORY,
    BusinessPartners.SHIP_TO_BUILDING_FLOOR_ROOM,
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_PRES,
    BusinessPartners.PROJECT_CODE,
    BusinessPartners.VAT_GROUP_LATIN_AMERICA,
    BusinessPartners.DUNNING_TERM,
    BusinessPartners.WEBSITE,
    BusinessPartners.OTHER_RECEIVABLE_PAYABLE,
    BusinessPartners.BILLOF_EXCHANGEON_COLLECTION,
    BusinessPartners.COMPANY_PRIVATE,
    BusinessPartners.LANGUAGE_CODE,
    BusinessPartners.UNPAID_BILLOF_EXCHANGE,
    BusinessPartners.WITHHOLDING_TAX_DEDUCTION_GROUP,
    BusinessPartners.CLOSING_DATE_PROCEDURE_NUMBER,
    BusinessPartners.PROFESSION,
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE,
    BusinessPartners.TAX_ROUNDING_RULE,
    BusinessPartners.PROPERTIES_1,
    BusinessPartners.PROPERTIES_2,
    BusinessPartners.PROPERTIES_3,
    BusinessPartners.PROPERTIES_4,
    BusinessPartners.PROPERTIES_5,
    BusinessPartners.PROPERTIES_6,
    BusinessPartners.PROPERTIES_7,
    BusinessPartners.PROPERTIES_8,
    BusinessPartners.PROPERTIES_9,
    BusinessPartners.PROPERTIES_10,
    BusinessPartners.PROPERTIES_11,
    BusinessPartners.PROPERTIES_12,
    BusinessPartners.PROPERTIES_13,
    BusinessPartners.PROPERTIES_14,
    BusinessPartners.PROPERTIES_15,
    BusinessPartners.PROPERTIES_16,
    BusinessPartners.PROPERTIES_17,
    BusinessPartners.PROPERTIES_18,
    BusinessPartners.PROPERTIES_19,
    BusinessPartners.PROPERTIES_20,
    BusinessPartners.PROPERTIES_21,
    BusinessPartners.PROPERTIES_22,
    BusinessPartners.PROPERTIES_23,
    BusinessPartners.PROPERTIES_24,
    BusinessPartners.PROPERTIES_25,
    BusinessPartners.PROPERTIES_26,
    BusinessPartners.PROPERTIES_27,
    BusinessPartners.PROPERTIES_28,
    BusinessPartners.PROPERTIES_29,
    BusinessPartners.PROPERTIES_30,
    BusinessPartners.PROPERTIES_31,
    BusinessPartners.PROPERTIES_32,
    BusinessPartners.PROPERTIES_33,
    BusinessPartners.PROPERTIES_34,
    BusinessPartners.PROPERTIES_35,
    BusinessPartners.PROPERTIES_36,
    BusinessPartners.PROPERTIES_37,
    BusinessPartners.PROPERTIES_38,
    BusinessPartners.PROPERTIES_39,
    BusinessPartners.PROPERTIES_40,
    BusinessPartners.PROPERTIES_41,
    BusinessPartners.PROPERTIES_42,
    BusinessPartners.PROPERTIES_43,
    BusinessPartners.PROPERTIES_44,
    BusinessPartners.PROPERTIES_45,
    BusinessPartners.PROPERTIES_46,
    BusinessPartners.PROPERTIES_47,
    BusinessPartners.PROPERTIES_48,
    BusinessPartners.PROPERTIES_49,
    BusinessPartners.PROPERTIES_50,
    BusinessPartners.PROPERTIES_51,
    BusinessPartners.PROPERTIES_52,
    BusinessPartners.PROPERTIES_53,
    BusinessPartners.PROPERTIES_54,
    BusinessPartners.PROPERTIES_55,
    BusinessPartners.PROPERTIES_56,
    BusinessPartners.PROPERTIES_57,
    BusinessPartners.PROPERTIES_58,
    BusinessPartners.PROPERTIES_59,
    BusinessPartners.PROPERTIES_60,
    BusinessPartners.PROPERTIES_61,
    BusinessPartners.PROPERTIES_62,
    BusinessPartners.PROPERTIES_63,
    BusinessPartners.PROPERTIES_64,
    BusinessPartners.COMPANY_REGISTRATION_NUMBER,
    BusinessPartners.VERIFICATION_NUMBER,
    BusinessPartners.DISCOUNT_BASE_OBJECT,
    BusinessPartners.DISCOUNT_RELATIONS,
    BusinessPartners.TYPE_REPORT,
    BusinessPartners.THRESHOLD_OVERLOOK,
    BusinessPartners.SURCHARGE_OVERLOOK,
    BusinessPartners.DOWN_PAYMENT_INTERIM_ACCOUNT,
    BusinessPartners.OPERATION_CODE_347,
    BusinessPartners.INSURANCE_OPERATION_347,
    BusinessPartners.HIERARCHICAL_DEDUCTION,
    BusinessPartners.SHAAM_GROUP,
    BusinessPartners.WITHHOLDING_TAX_CERTIFIED,
    BusinessPartners.BOOKKEEPING_CERTIFIED,
    BusinessPartners.PLANNING_GROUP,
    BusinessPartners.AFFILIATE,
    BusinessPartners.INDUSTRY,
    BusinessPartners.VAT_ID_NUM,
    BusinessPartners.DATEV_ACCOUNT,
    BusinessPartners.DATEV_FIRST_DATA_ENTRY,
    BusinessPartners.GTS_REG_NO,
    BusinessPartners.GTS_BANK_ACCOUNT_NO,
    BusinessPartners.GTS_BILLING_ADDR_TEL,
    BusinessPartners.E_TAX_WEB_SITE,
    BusinessPartners.HOUSE_BANK_IBAN,
    BusinessPartners.VAT_REGISTRATION_NUMBER,
    BusinessPartners.REPRESENTATIVE_NAME,
    BusinessPartners.INDUSTRY_TYPE,
    BusinessPartners.BUSINESS_TYPE,
    BusinessPartners.SERIES,
    BusinessPartners.AUTOMATIC_POSTING,
    BusinessPartners.INTEREST_ACCOUNT,
    BusinessPartners.FEE_ACCOUNT,
    BusinessPartners.CAMPAIGN_NUMBER,
    BusinessPartners.ALIAS_NAME,
    BusinessPartners.DEFAULT_BLANKET_AGREEMENT_NUMBER,
    BusinessPartners.EFFECTIVE_DISCOUNT,
    BusinessPartners.NO_DISCOUNTS,
    BusinessPartners.EFFECTIVE_PRICE,
    BusinessPartners.GLOBAL_LOCATION_NUMBER,
    BusinessPartners.EDI_SENDER_ID,
    BusinessPartners.EDI_RECIPIENT_ID,
    BusinessPartners.RESIDEN_NUMBER,
    BusinessPartners.RELATIONSHIP_CODE,
    BusinessPartners.RELATIONSHIP_DATE_FROM,
    BusinessPartners.RELATIONSHIP_DATE_TILL,
    BusinessPartners.UNIFIED_FEDERAL_TAX_ID,
    BusinessPartners.ATTACHMENT_ENTRY,
    BusinessPartners.TYPE_OF_OPERATION,
    BusinessPartners.ENDORSABLE_CHECKS_FROM_BP,
    BusinessPartners.ACCEPTS_ENDORSED_CHECKS,
    BusinessPartners.OWNER_CODE,
    BusinessPartners.BLOCK_SENDING_MARKETING_CONTENT,
    BusinessPartners.AGENT_CODE,
    BusinessPartners.PRICE_MODE,
    BusinessPartners.E_DOC_GENERATION_TYPE,
    BusinessPartners.E_DOC_STREET,
    BusinessPartners.E_DOC_STREET_NUMBER,
    BusinessPartners.E_DOC_BUILDING_NUMBER,
    BusinessPartners.E_DOC_ZIP_CODE,
    BusinessPartners.E_DOC_CITY,
    BusinessPartners.E_DOC_COUNTRY,
    BusinessPartners.E_DOC_DISTRICT,
    BusinessPartners.E_DOC_REPRESENTATIVE_FIRST_NAME,
    BusinessPartners.E_DOC_REPRESENTATIVE_SURNAME,
    BusinessPartners.E_DOC_REPRESENTATIVE_COMPANY,
    BusinessPartners.E_DOC_REPRESENTATIVE_FISCAL_CODE,
    BusinessPartners.E_DOC_REPRESENTATIVE_ADDITIONAL_ID,
    BusinessPartners.E_DOC_PEC_ADDRESS,
    BusinessPartners.IPA_CODE_FOR_PA,
    BusinessPartners.UPDATE_DATE,
    BusinessPartners.UPDATE_TIME,
    BusinessPartners.EXEMPTION_MAX_AMOUNT_VALIDATION_TYPE,
    BusinessPartners.E_COMMERCE_MERCHANT_ID,
    BusinessPartners.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
    BusinessPartners.BP_ADDRESSES,
    BusinessPartners.CONTACT_EMPLOYEES,
    BusinessPartners.BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION,
    BusinessPartners.BP_PAYMENT_METHODS,
    BusinessPartners.BP_WITHHOLDING_TAX_COLLECTION,
    BusinessPartners.BP_PAYMENT_DATES,
    BusinessPartners.BP_BRANCH_ASSIGNMENT,
    BusinessPartners.BP_BANK_ACCOUNTS,
    BusinessPartners.BP_FISCAL_TAX_ID_COLLECTION,
    BusinessPartners.DISCOUNT_GROUPS,
    BusinessPartners.BP_INTRASTAT_EXTENSION,
    BusinessPartners.BP_BLOCK_SENDING_MARKETING_CONTENTS,
    BusinessPartners.SALES_OPPORTUNITIES,
    BusinessPartners.USER_DEFAULT_GROUPS,
    BusinessPartners.SPECIAL_PRICES,
    BusinessPartners.LANDED_COSTS,
    BusinessPartners.WORK_ORDERS,
    BusinessPartners.WAREHOUSES,
    BusinessPartners.INVENTORY_GEN_ENTRIES,
    BusinessPartners.PURCHASE_QUOTATIONS,
    BusinessPartners.BANK_PAGES,
    BusinessPartners.ITEMS,
    BusinessPartners.CONTACTS,
    BusinessPartners.PRODUCTION_ORDERS,
    BusinessPartners.DEPRECIATION_AREAS,
    BusinessPartners.DELIVERY_NOTES,
    BusinessPartners.BUSINESS_PARTNER_GROUP,
    BusinessPartners.PAYMENT_TERMS_TYPE,
    BusinessPartners.PRICE_LIST,
    BusinessPartners.COMMISSION_GROUP,
    BusinessPartners.SALES_PERSON,
    BusinessPartners.CURRENCY_2,
    BusinessPartners.CHART_OF_ACCOUNT,
    BusinessPartners.COUNTRY_2,
    BusinessPartners.VAT_GROUP_2,
    BusinessPartners.SHIPPING_TYPE_2,
    BusinessPartners.FACTORING_INDICATOR,
    BusinessPartners.CREDIT_CARD,
    BusinessPartners.BP_PRIORITY,
    BusinessPartners.FORMS_1099,
    BusinessPartners.WIZARD_PAYMENT_METHOD,
    BusinessPartners.DUNNING_LETTER,
    BusinessPartners.PAYMENT_BLOCK_2,
    BusinessPartners.WITHHOLDING_TAX_CODE,
    BusinessPartners.EMPLOYEE_INFO,
    BusinessPartners.TERRITORY_2,
    BusinessPartners.PROJECT,
    BusinessPartners.SALES_TAX_CODE,
    BusinessPartners.DUNNING_TERM_2,
    BusinessPartners.USER_LANGUAGE,
    BusinessPartners.DEDUCTION_TAX_GROUP,
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE_2,
    BusinessPartners.INDUSTRY_2,
    BusinessPartners.TAX_WEB_SITE,
    BusinessPartners.CAMPAIGN,
    BusinessPartners.BLANKET_AGREEMENT,
    BusinessPartners.QUOTATIONS,
    BusinessPartners.SERVICE_CONTRACTS,
    BusinessPartners.INVENTORY_GEN_EXITS,
    BusinessPartners.PURCHASE_REQUESTS,
    BusinessPartners.DEDUCTION_TAX_HIERARCHIES,
    BusinessPartners.RETURN_REQUEST,
    BusinessPartners.BLANKET_AGREEMENTS,
    BusinessPartners.GL_ACCOUNT_ADVANCED_RULES,
    BusinessPartners.PURCHASE_RETURNS,
    BusinessPartners.INVOICES,
    BusinessPartners.CREDIT_NOTES,
    BusinessPartners.STOCK_TRANSFERS,
    BusinessPartners.BUSINESS_PLACES,
    BusinessPartners.ORDERS,
    BusinessPartners.PARTNERS_SETUPS,
    BusinessPartners.INVENTORY_TRANSFER_REQUESTS,
    BusinessPartners.ACTIVITIES,
    BusinessPartners.DOWN_PAYMENTS,
    BusinessPartners.DRAFTS,
    BusinessPartners.STOCK_TRANSFER_DRAFTS,
    BusinessPartners.RETURNS,
    BusinessPartners.MATERIAL_REVALUATION,
    BusinessPartners.CORRECTION_INVOICE_REVERSAL,
    BusinessPartners.CORRECTION_PURCHASE_INVOICE,
    BusinessPartners.CORRECTION_PURCHASE_INVOICE_REVERSAL,
    BusinessPartners.CUSTOMER_EQUIPMENT_CARDS,
    BusinessPartners.PURCHASE_INVOICES,
    BusinessPartners.PURCHASE_DELIVERY_NOTES,
    BusinessPartners.CORRECTION_INVOICE,
    BusinessPartners.PURCHASE_CREDIT_NOTES,
    BusinessPartners.SERVICE_CALLS,
    BusinessPartners.PURCHASE_DOWN_PAYMENTS,
    BusinessPartners.EMPLOYEES_INFO,
    BusinessPartners.PURCHASE_ORDERS,
    BusinessPartners.ALTERNATE_CAT_NUM,
    BusinessPartners.PROJECT_MANAGEMENTS,
    BusinessPartners.GOODS_RETURN_REQUEST,
    BusinessPartners.SALES_TAX_INVOICES,
    BusinessPartners.PURCHASE_TAX_INVOICES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartners> = new AllFields('*', BusinessPartners);
  /**
   * All key fields of the BusinessPartners entity.
   */
  export const _keyFields: Array<Field<BusinessPartners>> = [BusinessPartners.CARD_CODE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartners.
   */
  export const _keys: { [keys: string]: Field<BusinessPartners> } = BusinessPartners._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartners> }, field: Field<BusinessPartners>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
