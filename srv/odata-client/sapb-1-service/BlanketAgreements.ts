/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlanketAgreementsRequestBuilder } from './BlanketAgreementsRequestBuilder';
import { Moment } from 'moment';
import { BlanketAgreementsItemsLine } from './BlanketAgreementsItemsLine';
import { BlanketAgreementTypeEnum } from './BlanketAgreementTypeEnum';
import { BlanketAgreementStatusEnum } from './BlanketAgreementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BlanketAgreementMethodEnum } from './BlanketAgreementMethodEnum';
import { PriceModeEnum } from './PriceModeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BlanketAgreements" of service "SAPB1".
 */
export class BlanketAgreements extends EntityV4 implements BlanketAgreementsType {
  /**
   * Technical entity name for BlanketAgreements.
   */
  static _entityName = 'BlanketAgreements';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Agreement No.
   * @nullable
   */
  agreementNo?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: string;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Terminate Date.
   * @nullable
   */
  terminateDate?: Moment;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Agreement Type.
   * @nullable
   */
  agreementType?: BlanketAgreementTypeEnum;
  /**
   * Status.
   * @nullable
   */
  status?: BlanketAgreementStatusEnum;
  /**
   * Owner.
   * @nullable
   */
  owner?: number;
  /**
   * Ignore Prices In Agreement.
   * @nullable
   */
  ignorePricesInAgreement?: BoYesNoEnum;
  /**
   * Renewal.
   * @nullable
   */
  renewal?: BoYesNoEnum;
  /**
   * Remind Unit.
   * @nullable
   */
  remindUnit?: BoRemindUnits;
  /**
   * Remind Time.
   * @nullable
   */
  remindTime?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Settlement Probability.
   * @nullable
   */
  settlementProbability?: number;
  /**
   * Agreement Method.
   * @nullable
   */
  agreementMethod?: BlanketAgreementMethodEnum;
  /**
   * Payment Terms.
   * @nullable
   */
  paymentTerms?: number;
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Signing Date.
   * @nullable
   */
  signingDate?: Moment;
  /**
   * Amendment To.
   * @nullable
   */
  amendmentTo?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: number;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: string;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: number;
  /**
   * Shipping Type.
   * @nullable
   */
  shippingType?: number;
  /**
   * Num At Card.
   * @nullable
   */
  numAtCard?: string;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Price Mode.
   * @nullable
   */
  priceMode?: PriceModeEnum;
  /**
   * Bp Currency.
   * @nullable
   */
  bpCurrency?: string;
  /**
   * Blanket Agreements Items Lines.
   * @nullable
   */
  blanketAgreementsItemsLines?: BlanketAgreementsItemsLine[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Attachments2]] entity.
   */
  attachments2!: Attachments2;
  /**
   * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsType!: PaymentTermsTypes;
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList2!: PriceLists;
  /**
   * One-to-one navigation property to the [[WizardPaymentMethods]] entity.
   */
  wizardPaymentMethod!: WizardPaymentMethods;
  /**
   * One-to-one navigation property to the [[ShippingTypes]] entity.
   */
  shippingType2!: ShippingTypes;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency!: Currencies;
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `BlanketAgreements`.
   * @returns A builder that constructs instances of entity type `BlanketAgreements`.
   */
  static builder(): EntityBuilderType<BlanketAgreements, BlanketAgreementsType> {
    return EntityV4.entityBuilder(BlanketAgreements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BlanketAgreements` entity type.
   * @returns A `BlanketAgreements` request builder.
   */
  static requestBuilder(): BlanketAgreementsRequestBuilder {
    return new BlanketAgreementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BlanketAgreements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BlanketAgreements`.
   */
  static customField(fieldName: string): CustomFieldV4<BlanketAgreements> {
    return EntityV4.customFieldSelector(fieldName, BlanketAgreements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Attachments2, Attachments2Type } from './Attachments2';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { PriceLists, PriceListsType } from './PriceLists';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { Projects, ProjectsType } from './Projects';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface BlanketAgreementsType {
  agreementNo?: number | null;
  bpCode?: string | null;
  bpName?: string | null;
  contactPersonCode?: number | null;
  startDate?: Moment | null;
  endDate?: Moment | null;
  terminateDate?: Moment | null;
  description?: string | null;
  agreementType?: BlanketAgreementTypeEnum | null;
  status?: BlanketAgreementStatusEnum | null;
  owner?: number | null;
  ignorePricesInAgreement?: BoYesNoEnum | null;
  renewal?: BoYesNoEnum | null;
  remindUnit?: BoRemindUnits | null;
  remindTime?: number | null;
  remarks?: string | null;
  attachmentEntry?: number | null;
  settlementProbability?: number | null;
  agreementMethod?: BlanketAgreementMethodEnum | null;
  paymentTerms?: number | null;
  priceList?: number | null;
  signingDate?: Moment | null;
  amendmentTo?: number | null;
  series?: number | null;
  docNum?: number | null;
  handWritten?: BoYesNoEnum | null;
  periodIndicator?: string | null;
  paymentMethod?: string | null;
  exchangeRate?: number | null;
  shippingType?: number | null;
  numAtCard?: string | null;
  project?: string | null;
  priceMode?: PriceModeEnum | null;
  bpCurrency?: string | null;
  blanketAgreementsItemsLines?: BlanketAgreementsItemsLine[] | null;
  vendorPayments: VendorPaymentsType[];
  journalEntries: JournalEntriesType[];
  businessPartners: BusinessPartnersType[];
  businessPartner: BusinessPartnersType;
  employeeInfo: EmployeesInfoType;
  attachments2: Attachments2Type;
  paymentTermsType: PaymentTermsTypesType;
  priceList2: PriceListsType;
  wizardPaymentMethod: WizardPaymentMethodsType;
  shippingType2: ShippingTypesType;
  project2: ProjectsType;
  currency: CurrenciesType;
  paymentDrafts: PaymentDraftsType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace BlanketAgreements {
  /**
   * Static representation of the [[agreementNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREEMENT_NO: NumberField<BlanketAgreements> = new NumberField('AgreementNo', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CODE: StringField<BlanketAgreements> = new StringField('BPCode', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[bpName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NAME: StringField<BlanketAgreements> = new StringField('BPName', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<BlanketAgreements> = new NumberField('ContactPersonCode', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<BlanketAgreements> = new DateField('StartDate', BlanketAgreements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<BlanketAgreements> = new DateField('EndDate', BlanketAgreements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[terminateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATE_DATE: DateField<BlanketAgreements> = new DateField('TerminateDate', BlanketAgreements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BlanketAgreements> = new StringField('Description', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[agreementType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREEMENT_TYPE: EnumField<BlanketAgreements> = new EnumField('AgreementType', BlanketAgreements);
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: EnumField<BlanketAgreements> = new EnumField('Status', BlanketAgreements);
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<BlanketAgreements> = new NumberField('Owner', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[ignorePricesInAgreement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IGNORE_PRICES_IN_AGREEMENT: EnumField<BlanketAgreements> = new EnumField('IgnorePricesInAgreement', BlanketAgreements);
  /**
   * Static representation of the [[renewal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RENEWAL: EnumField<BlanketAgreements> = new EnumField('Renewal', BlanketAgreements);
  /**
   * Static representation of the [[remindUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_UNIT: EnumField<BlanketAgreements> = new EnumField('RemindUnit', BlanketAgreements);
  /**
   * Static representation of the [[remindTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMIND_TIME: NumberField<BlanketAgreements> = new NumberField('RemindTime', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<BlanketAgreements> = new StringField('Remarks', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<BlanketAgreements> = new NumberField('AttachmentEntry', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[settlementProbability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLEMENT_PROBABILITY: NumberField<BlanketAgreements> = new NumberField('SettlementProbability', BlanketAgreements, 'Edm.Double');
  /**
   * Static representation of the [[agreementMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREEMENT_METHOD: EnumField<BlanketAgreements> = new EnumField('AgreementMethod', BlanketAgreements);
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS: NumberField<BlanketAgreements> = new NumberField('PaymentTerms', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<BlanketAgreements> = new NumberField('PriceList', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[signingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNING_DATE: DateField<BlanketAgreements> = new DateField('SigningDate', BlanketAgreements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[amendmentTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMENDMENT_TO: NumberField<BlanketAgreements> = new NumberField('AmendmentTo', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<BlanketAgreements> = new NumberField('Series', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<BlanketAgreements> = new NumberField('DocNum', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<BlanketAgreements> = new EnumField('HandWritten', BlanketAgreements);
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<BlanketAgreements> = new StringField('PeriodIndicator', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<BlanketAgreements> = new StringField('PaymentMethod', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[exchangeRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE: NumberField<BlanketAgreements> = new NumberField('ExchangeRate', BlanketAgreements, 'Edm.Double');
  /**
   * Static representation of the [[shippingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: NumberField<BlanketAgreements> = new NumberField('ShippingType', BlanketAgreements, 'Edm.Int32');
  /**
   * Static representation of the [[numAtCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_AT_CARD: StringField<BlanketAgreements> = new StringField('NumAtCard', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<BlanketAgreements> = new StringField('Project', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[priceMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_MODE: EnumField<BlanketAgreements> = new EnumField('PriceMode', BlanketAgreements);
  /**
   * Static representation of the [[bpCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CURRENCY: StringField<BlanketAgreements> = new StringField('BPCurrency', BlanketAgreements, 'Edm.String');
  /**
   * Static representation of the [[blanketAgreementsItemsLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS_ITEMS_LINES: CollectionField<BlanketAgreements, BlanketAgreementsItemsLine> = new CollectionField('BlanketAgreements_ItemsLines', BlanketAgreements, BlanketAgreementsItemsLine);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<BlanketAgreements, VendorPayments> = new OneToManyLink('VendorPayments', BlanketAgreements, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<BlanketAgreements, JournalEntries> = new OneToManyLink('JournalEntries', BlanketAgreements, JournalEntries);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<BlanketAgreements, BusinessPartners> = new OneToManyLink('BusinessPartners', BlanketAgreements, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<BlanketAgreements, BusinessPartners> = new OneToOneLink('BusinessPartner', BlanketAgreements, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<BlanketAgreements, EmployeesInfo> = new OneToOneLink('EmployeeInfo', BlanketAgreements, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2: OneToOneLink<BlanketAgreements, Attachments2> = new OneToOneLink('Attachments2', BlanketAgreements, Attachments2);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<BlanketAgreements, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', BlanketAgreements, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_2: OneToOneLink<BlanketAgreements, PriceLists> = new OneToOneLink('PriceList2', BlanketAgreements, PriceLists);
  /**
   * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARD_PAYMENT_METHOD: OneToOneLink<BlanketAgreements, WizardPaymentMethods> = new OneToOneLink('WizardPaymentMethod', BlanketAgreements, WizardPaymentMethods);
  /**
   * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE_2: OneToOneLink<BlanketAgreements, ShippingTypes> = new OneToOneLink('ShippingType2', BlanketAgreements, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<BlanketAgreements, Projects> = new OneToOneLink('Project2', BlanketAgreements, Projects);
  /**
   * Static representation of the one-to-one navigation property [[currency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: OneToOneLink<BlanketAgreements, Currencies> = new OneToOneLink('Currency', BlanketAgreements, Currencies);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<BlanketAgreements, PaymentDrafts> = new OneToManyLink('PaymentDrafts', BlanketAgreements, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<BlanketAgreements, IncomingPayments> = new OneToManyLink('IncomingPayments', BlanketAgreements, IncomingPayments);
  /**
   * All fields of the BlanketAgreements entity.
   */
  export const _allFields: Array<NumberField<BlanketAgreements> | StringField<BlanketAgreements> | DateField<BlanketAgreements> | EnumField<BlanketAgreements> | CollectionField<BlanketAgreements, BlanketAgreementsItemsLine> | OneToManyLink<BlanketAgreements, VendorPayments> | OneToManyLink<BlanketAgreements, JournalEntries> | OneToManyLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, BusinessPartners> | OneToOneLink<BlanketAgreements, EmployeesInfo> | OneToOneLink<BlanketAgreements, Attachments2> | OneToOneLink<BlanketAgreements, PaymentTermsTypes> | OneToOneLink<BlanketAgreements, PriceLists> | OneToOneLink<BlanketAgreements, WizardPaymentMethods> | OneToOneLink<BlanketAgreements, ShippingTypes> | OneToOneLink<BlanketAgreements, Projects> | OneToOneLink<BlanketAgreements, Currencies> | OneToManyLink<BlanketAgreements, PaymentDrafts> | OneToManyLink<BlanketAgreements, IncomingPayments>> = [
    BlanketAgreements.AGREEMENT_NO,
    BlanketAgreements.BP_CODE,
    BlanketAgreements.BP_NAME,
    BlanketAgreements.CONTACT_PERSON_CODE,
    BlanketAgreements.START_DATE,
    BlanketAgreements.END_DATE,
    BlanketAgreements.TERMINATE_DATE,
    BlanketAgreements.DESCRIPTION,
    BlanketAgreements.AGREEMENT_TYPE,
    BlanketAgreements.STATUS,
    BlanketAgreements.OWNER,
    BlanketAgreements.IGNORE_PRICES_IN_AGREEMENT,
    BlanketAgreements.RENEWAL,
    BlanketAgreements.REMIND_UNIT,
    BlanketAgreements.REMIND_TIME,
    BlanketAgreements.REMARKS,
    BlanketAgreements.ATTACHMENT_ENTRY,
    BlanketAgreements.SETTLEMENT_PROBABILITY,
    BlanketAgreements.AGREEMENT_METHOD,
    BlanketAgreements.PAYMENT_TERMS,
    BlanketAgreements.PRICE_LIST,
    BlanketAgreements.SIGNING_DATE,
    BlanketAgreements.AMENDMENT_TO,
    BlanketAgreements.SERIES,
    BlanketAgreements.DOC_NUM,
    BlanketAgreements.HAND_WRITTEN,
    BlanketAgreements.PERIOD_INDICATOR,
    BlanketAgreements.PAYMENT_METHOD,
    BlanketAgreements.EXCHANGE_RATE,
    BlanketAgreements.SHIPPING_TYPE,
    BlanketAgreements.NUM_AT_CARD,
    BlanketAgreements.PROJECT,
    BlanketAgreements.PRICE_MODE,
    BlanketAgreements.BP_CURRENCY,
    BlanketAgreements.BLANKET_AGREEMENTS_ITEMS_LINES,
    BlanketAgreements.VENDOR_PAYMENTS,
    BlanketAgreements.JOURNAL_ENTRIES,
    BlanketAgreements.BUSINESS_PARTNERS,
    BlanketAgreements.BUSINESS_PARTNER,
    BlanketAgreements.EMPLOYEE_INFO,
    BlanketAgreements.ATTACHMENTS_2,
    BlanketAgreements.PAYMENT_TERMS_TYPE,
    BlanketAgreements.PRICE_LIST_2,
    BlanketAgreements.WIZARD_PAYMENT_METHOD,
    BlanketAgreements.SHIPPING_TYPE_2,
    BlanketAgreements.PROJECT_2,
    BlanketAgreements.CURRENCY,
    BlanketAgreements.PAYMENT_DRAFTS,
    BlanketAgreements.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BlanketAgreements> = new AllFields('*', BlanketAgreements);
  /**
   * All key fields of the BlanketAgreements entity.
   */
  export const _keyFields: Array<Field<BlanketAgreements>> = [BlanketAgreements.AGREEMENT_NO];
  /**
   * Mapping of all key field names to the respective static field property BlanketAgreements.
   */
  export const _keys: { [keys: string]: Field<BlanketAgreements> } = BlanketAgreements._keyFields.reduce((acc: { [keys: string]: Field<BlanketAgreements> }, field: Field<BlanketAgreements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
