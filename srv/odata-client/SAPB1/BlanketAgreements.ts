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
import { BlanketAgreementsItemsLine } from './BlanketAgreementsItemsLine';
import type { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { BlanketAgreementTypeEnum } from './BlanketAgreementTypeEnum';
import { BlanketAgreementStatusEnum } from './BlanketAgreementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BlanketAgreementMethodEnum } from './BlanketAgreementMethodEnum';
import { PriceModeEnum } from './PriceModeEnum';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Attachments2, Attachments2Type } from './Attachments2';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { PriceLists, PriceListsType } from './PriceLists';
import {
  WizardPaymentMethods,
  WizardPaymentMethodsType
} from './WizardPaymentMethods';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { Projects, ProjectsType } from './Projects';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "BlanketAgreements" of service "SAPB1".
 */
export class BlanketAgreements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BlanketAgreementsType<T>
{
  /**
   * Technical entity name for BlanketAgreements.
   */
  static _entityName = 'BlanketAgreements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BlanketAgreements entity
   */
  static _keys = ['AgreementNo'];
  /**
   * Agreement No.
   */
  agreementNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Terminate Date.
   * @nullable
   */
  terminateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Type.
   * @nullable
   */
  agreementType?: BlanketAgreementTypeEnum | null;
  /**
   * Status.
   * @nullable
   */
  status?: BlanketAgreementStatusEnum | null;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Ignore Prices In Agreement.
   * @nullable
   */
  ignorePricesInAgreement?: BoYesNoEnum | null;
  /**
   * Renewal.
   * @nullable
   */
  renewal?: BoYesNoEnum | null;
  /**
   * Remind Unit.
   * @nullable
   */
  remindUnit?: BoRemindUnits | null;
  /**
   * Remind Time.
   * @nullable
   */
  remindTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Settlement Probability.
   * @nullable
   */
  settlementProbability?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Agreement Method.
   * @nullable
   */
  agreementMethod?: BlanketAgreementMethodEnum | null;
  /**
   * Payment Terms.
   * @nullable
   */
  paymentTerms?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Signing Date.
   * @nullable
   */
  signingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Amendment To.
   * @nullable
   */
  amendmentTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Hand Written.
   * @nullable
   */
  handWritten?: BoYesNoEnum | null;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Shipping Type.
   * @nullable
   */
  shippingType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Num At Card.
   * @nullable
   */
  numAtCard?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Mode.
   * @nullable
   */
  priceMode?: PriceModeEnum | null;
  /**
   * Bp Currency.
   * @nullable
   */
  bpCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blanket Agreements Items Lines.
   * @nullable
   */
  blanketAgreementsItemsLines?: BlanketAgreementsItemsLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsType?: PaymentTermsTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceLists} entity.
   */
  priceList2?: PriceLists<T> | null;
  /**
   * One-to-one navigation property to the {@link WizardPaymentMethods} entity.
   */
  wizardPaymentMethod?: WizardPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingTypes} entity.
   */
  shippingType2?: ShippingTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency?: Currencies<T> | null;
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: BlanketAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface BlanketAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementNo: DeserializedType<T, 'Edm.Int32'>;
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  bpName?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  terminateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  agreementType?: BlanketAgreementTypeEnum | null;
  status?: BlanketAgreementStatusEnum | null;
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  ignorePricesInAgreement?: BoYesNoEnum | null;
  renewal?: BoYesNoEnum | null;
  remindUnit?: BoRemindUnits | null;
  remindTime?: DeserializedType<T, 'Edm.Int32'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  settlementProbability?: DeserializedType<T, 'Edm.Double'> | null;
  agreementMethod?: BlanketAgreementMethodEnum | null;
  paymentTerms?: DeserializedType<T, 'Edm.Int32'> | null;
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  signingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  amendmentTo?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  handWritten?: BoYesNoEnum | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate?: DeserializedType<T, 'Edm.Double'> | null;
  shippingType?: DeserializedType<T, 'Edm.Int32'> | null;
  numAtCard?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  priceMode?: PriceModeEnum | null;
  bpCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  blanketAgreementsItemsLines?: BlanketAgreementsItemsLine<T>[] | null;
  journalEntries: JournalEntriesType<T>[];
  businessPartner?: BusinessPartnersType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  attachments2?: Attachments2Type<T> | null;
  paymentTermsType?: PaymentTermsTypesType<T> | null;
  priceList2?: PriceListsType<T> | null;
  wizardPaymentMethod?: WizardPaymentMethodsType<T> | null;
  shippingType2?: ShippingTypesType<T> | null;
  project2?: ProjectsType<T> | null;
  currency?: CurrenciesType<T> | null;
  paymentDrafts: PaymentDraftsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
