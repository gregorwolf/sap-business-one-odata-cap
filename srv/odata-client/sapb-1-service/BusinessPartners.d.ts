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
export declare class BusinessPartners extends EntityV4 implements BusinessPartnersType {
    /**
     * Technical entity name for BusinessPartners.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[SpecialPrices]] entity.
     */
    specialPrices: SpecialPrices[];
    /**
     * One-to-many navigation property to the [[LandedCosts]] entity.
     */
    landedCosts: LandedCosts[];
    /**
     * One-to-many navigation property to the [[WorkOrders]] entity.
     */
    workOrders: WorkOrders[];
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[BankPages]] entity.
     */
    bankPages: BankPages[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[DepreciationAreas]] entity.
     */
    depreciationAreas: DepreciationAreas[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-one navigation property to the [[BusinessPartnerGroups]] entity.
     */
    businessPartnerGroup: BusinessPartnerGroups;
    /**
     * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
     */
    paymentTermsType: PaymentTermsTypes;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList: PriceLists;
    /**
     * One-to-one navigation property to the [[CommissionGroups]] entity.
     */
    commissionGroup: CommissionGroups;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency2: Currencies;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[VatGroups]] entity.
     */
    vatGroup2: VatGroups;
    /**
     * One-to-one navigation property to the [[ShippingTypes]] entity.
     */
    shippingType2: ShippingTypes;
    /**
     * One-to-one navigation property to the [[FactoringIndicators]] entity.
     */
    factoringIndicator: FactoringIndicators;
    /**
     * One-to-one navigation property to the [[CreditCards]] entity.
     */
    creditCard: CreditCards;
    /**
     * One-to-one navigation property to the [[BpPriorities]] entity.
     */
    bpPriority: BpPriorities;
    /**
     * One-to-one navigation property to the [[Forms1099]] entity.
     */
    forms1099: Forms1099;
    /**
     * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethod: WizardPaymentMethods;
    /**
     * One-to-one navigation property to the [[DunningLetters]] entity.
     */
    dunningLetter: DunningLetters;
    /**
     * One-to-one navigation property to the [[PaymentBlocks]] entity.
     */
    paymentBlock2: PaymentBlocks;
    /**
     * One-to-one navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCode: WithholdingTaxCodes;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Territories]] entity.
     */
    territory2: Territories;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCode: SalesTaxCodes;
    /**
     * One-to-one navigation property to the [[DunningTerms]] entity.
     */
    dunningTerm2: DunningTerms;
    /**
     * One-to-one navigation property to the [[UserLanguages]] entity.
     */
    userLanguage: UserLanguages;
    /**
     * One-to-one navigation property to the [[DeductionTaxGroups]] entity.
     */
    deductionTaxGroup: DeductionTaxGroups;
    /**
     * One-to-one navigation property to the [[BankChargesAllocationCodes]] entity.
     */
    bankChargesAllocationCode2: BankChargesAllocationCodes;
    /**
     * One-to-one navigation property to the [[Industries]] entity.
     */
    industry2: Industries;
    /**
     * One-to-one navigation property to the [[TaxWebSites]] entity.
     */
    taxWebSite: TaxWebSites;
    /**
     * One-to-one navigation property to the [[Campaigns]] entity.
     */
    campaign: Campaigns;
    /**
     * One-to-one navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreement: BlanketAgreements;
    /**
     * One-to-many navigation property to the [[Quotations]] entity.
     */
    quotations: Quotations[];
    /**
     * One-to-many navigation property to the [[ServiceContracts]] entity.
     */
    serviceContracts: ServiceContracts[];
    /**
     * One-to-many navigation property to the [[InventoryGenExits]] entity.
     */
    inventoryGenExits: InventoryGenExits[];
    /**
     * One-to-many navigation property to the [[PurchaseRequests]] entity.
     */
    purchaseRequests: PurchaseRequests[];
    /**
     * One-to-many navigation property to the [[DeductionTaxHierarchies]] entity.
     */
    deductionTaxHierarchies: DeductionTaxHierarchies[];
    /**
     * One-to-many navigation property to the [[ReturnRequest]] entity.
     */
    returnRequest: ReturnRequest[];
    /**
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * One-to-many navigation property to the [[PurchaseReturns]] entity.
     */
    purchaseReturns: PurchaseReturns[];
    /**
     * One-to-many navigation property to the [[Invoices]] entity.
     */
    invoices: Invoices[];
    /**
     * One-to-many navigation property to the [[CreditNotes]] entity.
     */
    creditNotes: CreditNotes[];
    /**
     * One-to-many navigation property to the [[StockTransfers]] entity.
     */
    stockTransfers: StockTransfers[];
    /**
     * One-to-many navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlaces: BusinessPlaces[];
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[PartnersSetups]] entity.
     */
    partnersSetups: PartnersSetups[];
    /**
     * One-to-many navigation property to the [[InventoryTransferRequests]] entity.
     */
    inventoryTransferRequests: InventoryTransferRequests[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[StockTransferDrafts]] entity.
     */
    stockTransferDrafts: StockTransferDrafts[];
    /**
     * One-to-many navigation property to the [[Returns]] entity.
     */
    returns: Returns[];
    /**
     * One-to-many navigation property to the [[MaterialRevaluation]] entity.
     */
    materialRevaluation: MaterialRevaluation[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
     */
    correctionInvoiceReversal: CorrectionInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
     */
    correctionPurchaseInvoice: CorrectionPurchaseInvoice[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
     */
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[PurchaseInvoices]] entity.
     */
    purchaseInvoices: PurchaseInvoices[];
    /**
     * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
     */
    purchaseDeliveryNotes: PurchaseDeliveryNotes[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoice]] entity.
     */
    correctionInvoice: CorrectionInvoice[];
    /**
     * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
     */
    purchaseCreditNotes: PurchaseCreditNotes[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[AlternateCatNum]] entity.
     */
    alternateCatNum: AlternateCatNum[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * One-to-many navigation property to the [[SalesTaxInvoices]] entity.
     */
    salesTaxInvoices: SalesTaxInvoices[];
    /**
     * One-to-many navigation property to the [[PurchaseTaxInvoices]] entity.
     */
    purchaseTaxInvoices: PurchaseTaxInvoices[];
    /**
     * Returns an entity builder to construct instances of `BusinessPartners`.
     * @returns A builder that constructs instances of entity type `BusinessPartners`.
     */
    static builder(): EntityBuilderType<BusinessPartners, BusinessPartnersType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartners` entity type.
     * @returns A `BusinessPartners` request builder.
     */
    static requestBuilder(): BusinessPartnersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartners`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartners`.
     */
    static customField(fieldName: string): CustomFieldV4<BusinessPartners>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BusinessPartners {
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[cardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_TYPE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[mailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL_ADDRESS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[mailZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL_ZIP_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[phone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_1: StringField<BusinessPartners>;
    /**
     * Static representation of the [[phone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_2: StringField<BusinessPartners>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<BusinessPartners>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: StringField<BusinessPartners>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<BusinessPartners>;
    /**
     * Static representation of the [[payTermsGrpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TERMS_GRP_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[creditLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_LIMIT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[maxCommitment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_COMMITMENT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_PERCENT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[vatLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_LIABLE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_TAX_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[deductibleAtSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTIBLE_AT_SOURCE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_PERCENT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[deductionValidUntil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_VALID_UNTIL: DateField<BusinessPartners>;
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_NUM: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[intrestRatePercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTREST_RATE_PERCENT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_PERCENT: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[freeText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_TEXT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[rateDiffAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE_DIFF_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[cellular]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELLULAR: StringField<BusinessPartners>;
    /**
     * Static representation of the [[avarageLate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVARAGE_LATE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[mailCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL_CITY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[mailCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL_COUNTY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[mailCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL_COUNTRY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICTURE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[defaultAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[defaultBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BRANCH: StringField<BusinessPartners>;
    /**
     * Static representation of the [[defaultBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BANK_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[additionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[pager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAGER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[fatherCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FATHER_CARD: StringField<BusinessPartners>;
    /**
     * Static representation of the [[cardForeignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_FOREIGN_NAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[fatherType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FATHER_TYPE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[deductionOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_OFFICE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[exportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPORT_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[minIntrest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_INTREST: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[currentAccountBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_ACCOUNT_BALANCE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[openDeliveryNotesBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPEN_DELIVERY_NOTES_BALANCE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[openOrdersBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPEN_ORDERS_BALANCE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: StringField<BusinessPartners>;
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSWORD: StringField<BusinessPartners>;
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDICATOR: StringField<BusinessPartners>;
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN: StringField<BusinessPartners>;
    /**
     * Static representation of the [[creditCardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[creditCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD_NUM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[creditCardExpiration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD_EXPIRATION: DateField<BusinessPartners>;
    /**
     * Static representation of the [[debitorAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEBITOR_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[openOpportunities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPEN_OPPORTUNITIES: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[valid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<BusinessPartners>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<BusinessPartners>;
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_REMARKS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[frozen]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_FROM: DateField<BusinessPartners>;
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_TO: DateField<BusinessPartners>;
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_REMARKS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<BusinessPartners>;
    /**
     * Static representation of the [[billToState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_TO_STATE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[exemptNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPT_NUM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[formCode1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CODE_1099: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOX_1099: StringField<BusinessPartners>;
    /**
     * Static representation of the [[peymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PEYMENT_METHOD_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[backOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACK_ORDER: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[partialDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTIAL_DELIVERY: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_DUNNING: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK: StringField<BusinessPartners>;
    /**
     * Static representation of the [[houseBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_COUNTRY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[houseBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[shipToDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_DEFAULT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LEVEL: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[dunningDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_DATE: DateField<BusinessPartners>;
    /**
     * Static representation of the [[collectionAuthorization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_AUTHORIZATION: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[dme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[instructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_KEY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[singlePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_PAYMENT: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISR_BILLER_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[referenceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_DETAILS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[houseBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_BRANCH: StringField<BusinessPartners>;
    /**
     * Static representation of the [[ownerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_ID_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[paymentBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_DESCRIPTION: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_EXEMPTION_LETTER_NUM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[maxAmountOfExemption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_AMOUNT_OF_EXEMPTION: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_FROM: DateField<BusinessPartners>;
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_VALIDITY_DATE_TO: DateField<BusinessPartners>;
    /**
     * Static representation of the [[linkedBusinessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_BUSINESS_PARTNER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[lastMultiReconciliationNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MULTI_RECONCILIATION_NUM: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFERRED_TAX: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[equalization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUALIZATION: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[subjectToWithholdingTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_TO_WITHHOLDING_TAX: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[certificateNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATE_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRATION_DATE: DateField<BusinessPartners>;
    /**
     * Static representation of the [[nationalInsuranceNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIONAL_INSURANCE_NUM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[accrualCriteria]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCRUAL_CRITERIA: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[billToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_TO_BUILDING_FLOOR_ROOM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[downPaymentClearAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_CLEAR_ACT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[channelBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANNEL_BP: StringField<BusinessPartners>;
    /**
     * Static representation of the [[defaultTechnician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TECHNICIAN: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[billtoDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLTO_DEFAULT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[customerBillofExchangDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_BILLOF_EXCHANG_DISC: StringField<BusinessPartners>;
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[shipToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_BUILDING_FLOOR_ROOM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[customerBillofExchangPres]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_BILLOF_EXCHANG_PRES: StringField<BusinessPartners>;
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[vatGroupLatinAmerica]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP_LATIN_AMERICA: StringField<BusinessPartners>;
    /**
     * Static representation of the [[dunningTerm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_TERM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[website]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEBSITE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[otherReceivablePayable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHER_RECEIVABLE_PAYABLE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[billofExchangeonCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLOF_EXCHANGEON_COLLECTION: StringField<BusinessPartners>;
    /**
     * Static representation of the [[companyPrivate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_PRIVATE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[unpaidBillofExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNPAID_BILLOF_EXCHANGE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[withholdingTaxDeductionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_DEDUCTION_GROUP: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[closingDateProcedureNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE_PROCEDURE_NUMBER: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[profession]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFESSION: StringField<BusinessPartners>;
    /**
     * Static representation of the [[bankChargesAllocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGES_ALLOCATION_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[taxRoundingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_ROUNDING_RULE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_1: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_2: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_3: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_4: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_5: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_6: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_7: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_8: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_9: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_10: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_11: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_12: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_13: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_14: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_15: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_16: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_17: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_18: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_19: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_20: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_21: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_22: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_23: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_24: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_25: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_26: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_27: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_28: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_29: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_30: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_31: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_32: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_33: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_34: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_35: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_36: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_37: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_38: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_39: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_40: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_41: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_42: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_43: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_44: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_45: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_46: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_47: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_48: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_49: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_50: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_51: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_52: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_53: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_54: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_55: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_56: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_57: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_58: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_59: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_60: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_61: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_62: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_63: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[properties64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_64: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[companyRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_REGISTRATION_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[verificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VERIFICATION_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[discountBaseObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_BASE_OBJECT: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[discountRelations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_RELATIONS: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[typeReport]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_REPORT: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[thresholdOverlook]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THRESHOLD_OVERLOOK: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[surchargeOverlook]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SURCHARGE_OVERLOOK: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[downPaymentInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENT_INTERIM_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[operationCode347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION_CODE_347: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSURANCE_OPERATION_347: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[hierarchicalDeduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIERARCHICAL_DEDUCTION: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[shaamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHAAM_GROUP: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[withholdingTaxCertified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CERTIFIED: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[bookkeepingCertified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKKEEPING_CERTIFIED: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[planningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNING_GROUP: StringField<BusinessPartners>;
    /**
     * Static representation of the [[affiliate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AFFILIATE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[vatIdNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_ID_NUM: StringField<BusinessPartners>;
    /**
     * Static representation of the [[datevAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATEV_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[datevFirstDataEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATEV_FIRST_DATA_ENTRY: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[gtsRegNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_REG_NO: StringField<BusinessPartners>;
    /**
     * Static representation of the [[gtsBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_BANK_ACCOUNT_NO: StringField<BusinessPartners>;
    /**
     * Static representation of the [[gtsBillingAddrTel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_BILLING_ADDR_TEL: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAX_WEB_SITE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[houseBankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK_IBAN: StringField<BusinessPartners>;
    /**
     * Static representation of the [[vatRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REGISTRATION_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[representativeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPRESENTATIVE_NAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[industryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_TYPE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[automaticPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTOMATIC_POSTING: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[feeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEE_ACCOUNT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN_NUMBER: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALIAS_NAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[defaultBlanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_BLANKET_AGREEMENT_NUMBER: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[effectiveDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_DISCOUNT: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[noDiscounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NO_DISCOUNTS: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[effectivePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_PRICE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GLOBAL_LOCATION_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[ediSenderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDI_SENDER_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[ediRecipientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDI_RECIPIENT_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[residenNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESIDEN_NUMBER: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[relationshipDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_DATE_FROM: DateField<BusinessPartners>;
    /**
     * Static representation of the [[relationshipDateTill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_DATE_TILL: DateField<BusinessPartners>;
    /**
     * Static representation of the [[unifiedFederalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIFIED_FEDERAL_TAX_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[typeOfOperation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_OF_OPERATION: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[endorsableChecksFromBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENDORSABLE_CHECKS_FROM_BP: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[acceptsEndorsedChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCEPTS_ENDORSED_CHECKS: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[ownerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_CODE: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[blockSendingMarketingContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_SENDING_MARKETING_CONTENT: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENT_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_MODE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_GENERATION_TYPE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[eDocStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_STREET: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_STREET_NUMBER: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocBuildingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_BUILDING_NUMBER: NumberField<BusinessPartners>;
    /**
     * Static representation of the [[eDocZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_ZIP_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_CITY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_COUNTRY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_DISTRICT: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocRepresentativeFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_REPRESENTATIVE_FIRST_NAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocRepresentativeSurname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_REPRESENTATIVE_SURNAME: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocRepresentativeCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_REPRESENTATIVE_COMPANY: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocRepresentativeFiscalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_REPRESENTATIVE_FISCAL_CODE: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocRepresentativeAdditionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_REPRESENTATIVE_ADDITIONAL_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[eDocPecAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_PEC_ADDRESS: StringField<BusinessPartners>;
    /**
     * Static representation of the [[ipaCodeForPa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IPA_CODE_FOR_PA: StringField<BusinessPartners>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<BusinessPartners>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<BusinessPartners>;
    /**
     * Static representation of the [[exemptionMaxAmountValidationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_MAX_AMOUNT_VALIDATION_TYPE: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[eCommerceMerchantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_COMMERCE_MERCHANT_ID: StringField<BusinessPartners>;
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<BusinessPartners>;
    /**
     * Static representation of the [[bpAddresses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ADDRESSES: CollectionField<BusinessPartners, BpAddress>;
    /**
     * Static representation of the [[contactEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMPLOYEES: CollectionField<BusinessPartners, ContactEmployee>;
    /**
     * Static representation of the [[bpAccountReceivablePaybleCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION: CollectionField<BusinessPartners, BpAccountReceivablePayble>;
    /**
     * Static representation of the [[bpPaymentMethods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PAYMENT_METHODS: CollectionField<BusinessPartners, BpPaymentMethod>;
    /**
     * Static representation of the [[bpWithholdingTaxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_WITHHOLDING_TAX_COLLECTION: CollectionField<BusinessPartners, BpWithholdingTax>;
    /**
     * Static representation of the [[bpPaymentDates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PAYMENT_DATES: CollectionField<BusinessPartners, BpPaymentDate>;
    /**
     * Static representation of the [[bpBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BRANCH_ASSIGNMENT: CollectionField<BusinessPartners, BpBranchAssignmentItem>;
    /**
     * Static representation of the [[bpBankAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BANK_ACCOUNTS: CollectionField<BusinessPartners, BpBankAccount>;
    /**
     * Static representation of the [[bpFiscalTaxIdCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_FISCAL_TAX_ID_COLLECTION: CollectionField<BusinessPartners, BpFiscalTaxId>;
    /**
     * Static representation of the [[discountGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_GROUPS: CollectionField<BusinessPartners, DiscountGroup>;
    /**
     * Static representation of the [[bpIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_INTRASTAT_EXTENSION: BpIntrastatExtensionField<BusinessPartners>;
    /**
     * Static representation of the [[bpBlockSendingMarketingContents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BLOCK_SENDING_MARKETING_CONTENTS: CollectionField<BusinessPartners, BpBlockSendingMarketingContent>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<BusinessPartners, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<BusinessPartners, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_PRICES: OneToManyLink<BusinessPartners, SpecialPrices>;
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COSTS: OneToManyLink<BusinessPartners, LandedCosts>;
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDERS: OneToManyLink<BusinessPartners, WorkOrders>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<BusinessPartners, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<BusinessPartners, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<BusinessPartners, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_PAGES: OneToManyLink<BusinessPartners, BankPages>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<BusinessPartners, Items>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<BusinessPartners, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<BusinessPartners, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREAS: OneToManyLink<BusinessPartners, DepreciationAreas>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<BusinessPartners, DeliveryNotes>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUP: OneToOneLink<BusinessPartners, BusinessPartnerGroups>;
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS_TYPE: OneToOneLink<BusinessPartners, PaymentTermsTypes>;
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: OneToOneLink<BusinessPartners, PriceLists>;
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP: OneToOneLink<BusinessPartners, CommissionGroups>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<BusinessPartners, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_2: OneToOneLink<BusinessPartners, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<BusinessPartners, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<BusinessPartners, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[vatGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP_2: OneToOneLink<BusinessPartners, VatGroups>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE_2: OneToOneLink<BusinessPartners, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTORING_INDICATOR: OneToOneLink<BusinessPartners, FactoringIndicators>;
    /**
     * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CARD: OneToOneLink<BusinessPartners, CreditCards>;
    /**
     * Static representation of the one-to-one navigation property [[bpPriority]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PRIORITY: OneToOneLink<BusinessPartners, BpPriorities>;
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMS_1099: OneToOneLink<BusinessPartners, Forms1099>;
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHOD: OneToOneLink<BusinessPartners, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-one navigation property [[dunningLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LETTER: OneToOneLink<BusinessPartners, DunningLetters>;
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCK_2: OneToOneLink<BusinessPartners, PaymentBlocks>;
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODE: OneToOneLink<BusinessPartners, WithholdingTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<BusinessPartners, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_2: OneToOneLink<BusinessPartners, Territories>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<BusinessPartners, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODE: OneToOneLink<BusinessPartners, SalesTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[dunningTerm2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_TERM_2: OneToOneLink<BusinessPartners, DunningTerms>;
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_LANGUAGE: OneToOneLink<BusinessPartners, UserLanguages>;
    /**
     * Static representation of the one-to-one navigation property [[deductionTaxGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TAX_GROUP: OneToOneLink<BusinessPartners, DeductionTaxGroups>;
    /**
     * Static representation of the one-to-one navigation property [[bankChargesAllocationCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CHARGES_ALLOCATION_CODE_2: OneToOneLink<BusinessPartners, BankChargesAllocationCodes>;
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_2: OneToOneLink<BusinessPartners, Industries>;
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_WEB_SITE: OneToOneLink<BusinessPartners, TaxWebSites>;
    /**
     * Static representation of the one-to-one navigation property [[campaign]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGN: OneToOneLink<BusinessPartners, Campaigns>;
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENT: OneToOneLink<BusinessPartners, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<BusinessPartners, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACTS: OneToManyLink<BusinessPartners, ServiceContracts>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<BusinessPartners, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<BusinessPartners, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[deductionTaxHierarchies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_TAX_HIERARCHIES: OneToManyLink<BusinessPartners, DeductionTaxHierarchies>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<BusinessPartners, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<BusinessPartners, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<BusinessPartners, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<BusinessPartners, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<BusinessPartners, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<BusinessPartners, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFERS: OneToManyLink<BusinessPartners, StockTransfers>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<BusinessPartners, BusinessPlaces>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<BusinessPartners, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNERS_SETUPS: OneToManyLink<BusinessPartners, PartnersSetups>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_TRANSFER_REQUESTS: OneToManyLink<BusinessPartners, InventoryTransferRequests>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<BusinessPartners, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<BusinessPartners, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<BusinessPartners, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_DRAFTS: OneToManyLink<BusinessPartners, StockTransferDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<BusinessPartners, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_REVALUATION: OneToManyLink<BusinessPartners, MaterialRevaluation>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<BusinessPartners, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<BusinessPartners, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<BusinessPartners, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<BusinessPartners, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<BusinessPartners, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<BusinessPartners, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<BusinessPartners, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<BusinessPartners, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<BusinessPartners, ServiceCalls>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<BusinessPartners, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<BusinessPartners, EmployeesInfo>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<BusinessPartners, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATE_CAT_NUM: OneToManyLink<BusinessPartners, AlternateCatNum>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<BusinessPartners, ProjectManagements>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<BusinessPartners, GoodsReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_INVOICES: OneToManyLink<BusinessPartners, SalesTaxInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_TAX_INVOICES: OneToManyLink<BusinessPartners, PurchaseTaxInvoices>;
    /**
     * All fields of the BusinessPartners entity.
     */
    const _allFields: Array<StringField<BusinessPartners> | EnumField<BusinessPartners> | NumberField<BusinessPartners> | DateField<BusinessPartners> | TimeField<BusinessPartners> | CollectionField<BusinessPartners, BpAddress> | CollectionField<BusinessPartners, ContactEmployee> | CollectionField<BusinessPartners, BpAccountReceivablePayble> | CollectionField<BusinessPartners, BpPaymentMethod> | CollectionField<BusinessPartners, BpWithholdingTax> | CollectionField<BusinessPartners, BpPaymentDate> | CollectionField<BusinessPartners, BpBranchAssignmentItem> | CollectionField<BusinessPartners, BpBankAccount> | CollectionField<BusinessPartners, BpFiscalTaxId> | CollectionField<BusinessPartners, DiscountGroup> | BpIntrastatExtensionField<BusinessPartners> | CollectionField<BusinessPartners, BpBlockSendingMarketingContent> | OneToManyLink<BusinessPartners, SalesOpportunities> | OneToManyLink<BusinessPartners, UserDefaultGroups> | OneToManyLink<BusinessPartners, SpecialPrices> | OneToManyLink<BusinessPartners, LandedCosts> | OneToManyLink<BusinessPartners, WorkOrders> | OneToManyLink<BusinessPartners, Warehouses> | OneToManyLink<BusinessPartners, InventoryGenEntries> | OneToManyLink<BusinessPartners, PurchaseQuotations> | OneToManyLink<BusinessPartners, BankPages> | OneToManyLink<BusinessPartners, Items> | OneToManyLink<BusinessPartners, Contacts> | OneToManyLink<BusinessPartners, ProductionOrders> | OneToManyLink<BusinessPartners, DepreciationAreas> | OneToManyLink<BusinessPartners, DeliveryNotes> | OneToOneLink<BusinessPartners, BusinessPartnerGroups> | OneToOneLink<BusinessPartners, PaymentTermsTypes> | OneToOneLink<BusinessPartners, PriceLists> | OneToOneLink<BusinessPartners, CommissionGroups> | OneToOneLink<BusinessPartners, SalesPersons> | OneToOneLink<BusinessPartners, Currencies> | OneToOneLink<BusinessPartners, ChartOfAccounts> | OneToOneLink<BusinessPartners, Countries> | OneToOneLink<BusinessPartners, VatGroups> | OneToOneLink<BusinessPartners, ShippingTypes> | OneToOneLink<BusinessPartners, FactoringIndicators> | OneToOneLink<BusinessPartners, CreditCards> | OneToOneLink<BusinessPartners, BpPriorities> | OneToOneLink<BusinessPartners, Forms1099> | OneToOneLink<BusinessPartners, WizardPaymentMethods> | OneToOneLink<BusinessPartners, DunningLetters> | OneToOneLink<BusinessPartners, PaymentBlocks> | OneToOneLink<BusinessPartners, WithholdingTaxCodes> | OneToOneLink<BusinessPartners, EmployeesInfo> | OneToOneLink<BusinessPartners, Territories> | OneToOneLink<BusinessPartners, Projects> | OneToOneLink<BusinessPartners, SalesTaxCodes> | OneToOneLink<BusinessPartners, DunningTerms> | OneToOneLink<BusinessPartners, UserLanguages> | OneToOneLink<BusinessPartners, DeductionTaxGroups> | OneToOneLink<BusinessPartners, BankChargesAllocationCodes> | OneToOneLink<BusinessPartners, Industries> | OneToOneLink<BusinessPartners, TaxWebSites> | OneToOneLink<BusinessPartners, Campaigns> | OneToOneLink<BusinessPartners, BlanketAgreements> | OneToManyLink<BusinessPartners, Quotations> | OneToManyLink<BusinessPartners, ServiceContracts> | OneToManyLink<BusinessPartners, InventoryGenExits> | OneToManyLink<BusinessPartners, PurchaseRequests> | OneToManyLink<BusinessPartners, DeductionTaxHierarchies> | OneToManyLink<BusinessPartners, ReturnRequest> | OneToManyLink<BusinessPartners, BlanketAgreements> | OneToManyLink<BusinessPartners, GlAccountAdvancedRules> | OneToManyLink<BusinessPartners, PurchaseReturns> | OneToManyLink<BusinessPartners, Invoices> | OneToManyLink<BusinessPartners, CreditNotes> | OneToManyLink<BusinessPartners, StockTransfers> | OneToManyLink<BusinessPartners, BusinessPlaces> | OneToManyLink<BusinessPartners, Orders> | OneToManyLink<BusinessPartners, PartnersSetups> | OneToManyLink<BusinessPartners, InventoryTransferRequests> | OneToManyLink<BusinessPartners, Activities> | OneToManyLink<BusinessPartners, DownPayments> | OneToManyLink<BusinessPartners, Drafts> | OneToManyLink<BusinessPartners, StockTransferDrafts> | OneToManyLink<BusinessPartners, Returns> | OneToManyLink<BusinessPartners, MaterialRevaluation> | OneToManyLink<BusinessPartners, CorrectionInvoiceReversal> | OneToManyLink<BusinessPartners, CorrectionPurchaseInvoice> | OneToManyLink<BusinessPartners, CorrectionPurchaseInvoiceReversal> | OneToManyLink<BusinessPartners, CustomerEquipmentCards> | OneToManyLink<BusinessPartners, PurchaseInvoices> | OneToManyLink<BusinessPartners, PurchaseDeliveryNotes> | OneToManyLink<BusinessPartners, CorrectionInvoice> | OneToManyLink<BusinessPartners, PurchaseCreditNotes> | OneToManyLink<BusinessPartners, ServiceCalls> | OneToManyLink<BusinessPartners, PurchaseDownPayments> | OneToManyLink<BusinessPartners, EmployeesInfo> | OneToManyLink<BusinessPartners, PurchaseOrders> | OneToManyLink<BusinessPartners, AlternateCatNum> | OneToManyLink<BusinessPartners, ProjectManagements> | OneToManyLink<BusinessPartners, GoodsReturnRequest> | OneToManyLink<BusinessPartners, SalesTaxInvoices> | OneToManyLink<BusinessPartners, PurchaseTaxInvoices>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartners>;
    /**
     * All key fields of the BusinessPartners entity.
     */
    const _keyFields: Array<Field<BusinessPartners>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartners.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartners>;
    };
}
//# sourceMappingURL=BusinessPartners.d.ts.map