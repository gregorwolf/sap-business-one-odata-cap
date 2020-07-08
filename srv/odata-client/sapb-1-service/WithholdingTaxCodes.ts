/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxCodesRequestBuilder } from './WithholdingTaxCodesRequestBuilder';
import { Moment } from 'moment';
import { WithholdingTaxCodesLine, WithholdingTaxCodesLineField } from './WithholdingTaxCodesLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "WithholdingTaxCodes" of service "SAPB1".
 */
export class WithholdingTaxCodes extends Entity implements WithholdingTaxCodesType {
  /**
   * Technical entity name for WithholdingTaxCodes.
   */
  static _entityName = 'WithholdingTaxCodes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WithholdingTaxCodes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Wt Name.
   * @nullable
   */
  wtName?: string;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: number;
  /**
   * Official Code.
   * @nullable
   */
  officialCode?: string;
  /**
   * Account.
   * @nullable
   */
  account?: string;
  /**
   * Section.
   * @nullable
   */
  section?: number;
  /**
   * Threshold.
   * @nullable
   */
  threshold?: number;
  /**
   * Surcharge.
   * @nullable
   */
  surcharge?: number;
  /**
   * Assessee.
   * @nullable
   */
  assessee?: number;
  /**
   * Aptds Account.
   * @nullable
   */
  aptdsAccount?: string;
  /**
   * Ap Surcharge Account.
   * @nullable
   */
  apSurchargeAccount?: string;
  /**
   * Ap Cess Account.
   * @nullable
   */
  apCessAccount?: string;
  /**
   * Aphsc Account.
   * @nullable
   */
  aphscAccount?: string;
  /**
   * Apigst Account.
   * @nullable
   */
  apigstAccount?: string;
  /**
   * Apcgst Account.
   * @nullable
   */
  apcgstAccount?: string;
  /**
   * Apsgst Account.
   * @nullable
   */
  apsgstAccount?: string;
  /**
   * Aputgst Account.
   * @nullable
   */
  aputgstAccount?: string;
  /**
   * Ap Cess Gst Account.
   * @nullable
   */
  apCessGstAccount?: string;
  /**
   * Artds Account.
   * @nullable
   */
  artdsAccount?: string;
  /**
   * Ar Surcharge Account.
   * @nullable
   */
  arSurchargeAccount?: string;
  /**
   * Ar Cess Account.
   * @nullable
   */
  arCessAccount?: string;
  /**
   * Arhsc Account.
   * @nullable
   */
  arhscAccount?: string;
  /**
   * Arigst Account.
   * @nullable
   */
  arigstAccount?: string;
  /**
   * Arcgst Account.
   * @nullable
   */
  arcgstAccount?: string;
  /**
   * Arsgst Account.
   * @nullable
   */
  arsgstAccount?: string;
  /**
   * Arutgst Account.
   * @nullable
   */
  arutgstAccount?: string;
  /**
   * Ar Cess Gst Account.
   * @nullable
   */
  arCessGstAccount?: string;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Cst Code Incoming Id.
   * @nullable
   */
  cstCodeIncomingId?: number;
  /**
   * Cst Code Outgoing Id.
   * @nullable
   */
  cstCodeOutgoingId?: number;
  /**
   * Nature Of Calculation Base Code.
   * @nullable
   */
  natureOfCalculationBaseCode?: string;
  /**
   * Type Id.
   * @nullable
   */
  typeId?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Minimum Taxable Amount.
   * @nullable
   */
  minimumTaxableAmount?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Withholding Tax Codes Lines.
   * @nullable
   */
  withholdingTaxCodesLines?: WithholdingTaxCodesLine[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Sections]] entity.
   */
  section2!: Sections;
  /**
   * One-to-one navigation property to the [[NatureOfAssessees]] entity.
   */
  natureOfAssessee!: NatureOfAssessees;
  /**
   * One-to-one navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocation!: WarehouseLocations;
  /**
   * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
   */
  brazilStringIndexer!: BrazilStringIndexers;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency2!: Currencies;
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances `WithholdingTaxCodes`.
   * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
   */
  static builder(): EntityBuilderType<WithholdingTaxCodes, WithholdingTaxCodesTypeForceMandatory> {
    return Entity.entityBuilder(WithholdingTaxCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WithholdingTaxCodes` entity type.
   * @returns A `WithholdingTaxCodes` request builder.
   */
  static requestBuilder(): WithholdingTaxCodesRequestBuilder {
    return new WithholdingTaxCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WithholdingTaxCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
   */
  static customField(fieldName: string): CustomField<WithholdingTaxCodes> {
    return Entity.customFieldSelector(fieldName, WithholdingTaxCodes);
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
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Sections, SectionsType } from './Sections';
import { NatureOfAssessees, NatureOfAssesseesType } from './NatureOfAssessees';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { Currencies, CurrenciesType } from './Currencies';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface WithholdingTaxCodesType {
  wtCode?: string;
  wtName?: string;
  baseAmount?: number;
  officialCode?: string;
  account?: string;
  section?: number;
  threshold?: number;
  surcharge?: number;
  assessee?: number;
  aptdsAccount?: string;
  apSurchargeAccount?: string;
  apCessAccount?: string;
  aphscAccount?: string;
  apigstAccount?: string;
  apcgstAccount?: string;
  apsgstAccount?: string;
  aputgstAccount?: string;
  apCessGstAccount?: string;
  artdsAccount?: string;
  arSurchargeAccount?: string;
  arCessAccount?: string;
  arhscAccount?: string;
  arigstAccount?: string;
  arcgstAccount?: string;
  arsgstAccount?: string;
  arutgstAccount?: string;
  arCessGstAccount?: string;
  location?: number;
  cstCodeIncomingId?: number;
  cstCodeOutgoingId?: number;
  natureOfCalculationBaseCode?: string;
  typeId?: number;
  rate?: number;
  effectiveFrom?: Moment;
  minimumTaxableAmount?: number;
  currency?: string;
  withholdingTaxCodesLines?: WithholdingTaxCodesLine[];
  vendorPayments: VendorPaymentsType[];
  businessPartners: BusinessPartnersType[];
  paymentDrafts: PaymentDraftsType[];
  chartOfAccount: ChartOfAccountsType;
  section2: SectionsType;
  natureOfAssessee: NatureOfAssesseesType;
  warehouseLocation: WarehouseLocationsType;
  brazilStringIndexer: BrazilStringIndexersType;
  currency2: CurrenciesType;
  incomingPayments: IncomingPaymentsType[];
}

export interface WithholdingTaxCodesTypeForceMandatory {
  wtCode: string;
  wtName: string;
  baseAmount: number;
  officialCode: string;
  account: string;
  section: number;
  threshold: number;
  surcharge: number;
  assessee: number;
  aptdsAccount: string;
  apSurchargeAccount: string;
  apCessAccount: string;
  aphscAccount: string;
  apigstAccount: string;
  apcgstAccount: string;
  apsgstAccount: string;
  aputgstAccount: string;
  apCessGstAccount: string;
  artdsAccount: string;
  arSurchargeAccount: string;
  arCessAccount: string;
  arhscAccount: string;
  arigstAccount: string;
  arcgstAccount: string;
  arsgstAccount: string;
  arutgstAccount: string;
  arCessGstAccount: string;
  location: number;
  cstCodeIncomingId: number;
  cstCodeOutgoingId: number;
  natureOfCalculationBaseCode: string;
  typeId: number;
  rate: number;
  effectiveFrom: Moment;
  minimumTaxableAmount: number;
  currency: string;
  withholdingTaxCodesLines: WithholdingTaxCodesLine[];
  vendorPayments: VendorPaymentsType[];
  businessPartners: BusinessPartnersType[];
  paymentDrafts: PaymentDraftsType[];
  chartOfAccount: ChartOfAccountsType;
  section2: SectionsType;
  natureOfAssessee: NatureOfAssesseesType;
  warehouseLocation: WarehouseLocationsType;
  brazilStringIndexer: BrazilStringIndexersType;
  currency2: CurrenciesType;
  incomingPayments: IncomingPaymentsType[];
}

export namespace WithholdingTaxCodes {
  /**
   * Static representation of the [[wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_CODE: StringField<WithholdingTaxCodes> = new StringField('WTCode', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[wtName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_NAME: StringField<WithholdingTaxCodes> = new StringField('WTName', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT: NumberField<WithholdingTaxCodes> = new NumberField('BaseAmount', WithholdingTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[officialCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_CODE: StringField<WithholdingTaxCodes> = new StringField('OfficialCode', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[account]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('Account', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[section]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION: NumberField<WithholdingTaxCodes> = new NumberField('Section', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[threshold]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THRESHOLD: NumberField<WithholdingTaxCodes> = new NumberField('Threshold', WithholdingTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[surcharge]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SURCHARGE: NumberField<WithholdingTaxCodes> = new NumberField('Surcharge', WithholdingTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[assessee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSEE: NumberField<WithholdingTaxCodes> = new NumberField('Assessee', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[aptdsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APTDS_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APTDSAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apSurchargeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AP_SURCHARGE_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APSurchargeAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apCessAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AP_CESS_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APCessAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[aphscAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APHSC_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APHSCAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apigstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APIGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APIGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apcgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APCGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APCGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apsgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APSGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APSGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[aputgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APUTGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APUTGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[apCessGstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AP_CESS_GST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('APCessGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[artdsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARTDS_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARTDSAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arSurchargeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AR_SURCHARGE_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARSurchargeAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arCessAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AR_CESS_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARCessAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arhscAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARHSC_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARHSCAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arigstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARIGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARIGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arcgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARCGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARCGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arsgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARSGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARSGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arutgstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ARUTGST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARUTGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[arCessGstAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AR_CESS_GST_ACCOUNT: StringField<WithholdingTaxCodes> = new StringField('ARCessGSTAccount', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<WithholdingTaxCodes> = new NumberField('Location', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[cstCodeIncomingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CST_CODE_INCOMING_ID: NumberField<WithholdingTaxCodes> = new NumberField('CSTCodeIncomingID', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[cstCodeOutgoingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CST_CODE_OUTGOING_ID: NumberField<WithholdingTaxCodes> = new NumberField('CSTCodeOutgoingID', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[natureOfCalculationBaseCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATURE_OF_CALCULATION_BASE_CODE: StringField<WithholdingTaxCodes> = new StringField('NatureOfCalculationBaseCode', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[typeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_ID: NumberField<WithholdingTaxCodes> = new NumberField('TypeID', WithholdingTaxCodes, 'Edm.Int32');
  /**
   * Static representation of the [[rate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE: NumberField<WithholdingTaxCodes> = new NumberField('Rate', WithholdingTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_FROM: DateField<WithholdingTaxCodes> = new DateField('EffectiveFrom', WithholdingTaxCodes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[minimumTaxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_TAXABLE_AMOUNT: NumberField<WithholdingTaxCodes> = new NumberField('MinimumTaxableAmount', WithholdingTaxCodes, 'Edm.Double');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<WithholdingTaxCodes> = new StringField('Currency', WithholdingTaxCodes, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxCodesLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES_LINES: CollectionField<WithholdingTaxCodes> = new CollectionField('WithholdingTaxCodes_Lines', WithholdingTaxCodes, new WithholdingTaxCodesLineField('', WithholdingTaxCodes));
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<WithholdingTaxCodes, VendorPayments> = new OneToManyLink('VendorPayments', WithholdingTaxCodes, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<WithholdingTaxCodes, BusinessPartners> = new OneToManyLink('BusinessPartners', WithholdingTaxCodes, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<WithholdingTaxCodes, PaymentDrafts> = new OneToManyLink('PaymentDrafts', WithholdingTaxCodes, PaymentDrafts);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<WithholdingTaxCodes, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', WithholdingTaxCodes, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[section2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_2: OneToOneLink<WithholdingTaxCodes, Sections> = new OneToOneLink('Section2', WithholdingTaxCodes, Sections);
  /**
   * Static representation of the one-to-one navigation property [[natureOfAssessee]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATURE_OF_ASSESSEE: OneToOneLink<WithholdingTaxCodes, NatureOfAssessees> = new OneToOneLink('NatureOfAssessee', WithholdingTaxCodes, NatureOfAssessees);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<WithholdingTaxCodes, WarehouseLocations> = new OneToOneLink('WarehouseLocation', WithholdingTaxCodes, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_STRING_INDEXER: OneToOneLink<WithholdingTaxCodes, BrazilStringIndexers> = new OneToOneLink('BrazilStringIndexer', WithholdingTaxCodes, BrazilStringIndexers);
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<WithholdingTaxCodes, Currencies> = new OneToOneLink('Currency2', WithholdingTaxCodes, Currencies);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<WithholdingTaxCodes, IncomingPayments> = new OneToManyLink('IncomingPayments', WithholdingTaxCodes, IncomingPayments);
  /**
   * All fields of the WithholdingTaxCodes entity.
   */
  export const _allFields: Array<StringField<WithholdingTaxCodes> | NumberField<WithholdingTaxCodes> | DateField<WithholdingTaxCodes> | CollectionField<WithholdingTaxCodes> | OneToManyLink<WithholdingTaxCodes, VendorPayments> | OneToManyLink<WithholdingTaxCodes, BusinessPartners> | OneToManyLink<WithholdingTaxCodes, PaymentDrafts> | OneToOneLink<WithholdingTaxCodes, ChartOfAccounts> | OneToOneLink<WithholdingTaxCodes, Sections> | OneToOneLink<WithholdingTaxCodes, NatureOfAssessees> | OneToOneLink<WithholdingTaxCodes, WarehouseLocations> | OneToOneLink<WithholdingTaxCodes, BrazilStringIndexers> | OneToOneLink<WithholdingTaxCodes, Currencies> | OneToManyLink<WithholdingTaxCodes, IncomingPayments>> = [
    WithholdingTaxCodes.WT_CODE,
    WithholdingTaxCodes.WT_NAME,
    WithholdingTaxCodes.BASE_AMOUNT,
    WithholdingTaxCodes.OFFICIAL_CODE,
    WithholdingTaxCodes.ACCOUNT,
    WithholdingTaxCodes.SECTION,
    WithholdingTaxCodes.THRESHOLD,
    WithholdingTaxCodes.SURCHARGE,
    WithholdingTaxCodes.ASSESSEE,
    WithholdingTaxCodes.APTDS_ACCOUNT,
    WithholdingTaxCodes.AP_SURCHARGE_ACCOUNT,
    WithholdingTaxCodes.AP_CESS_ACCOUNT,
    WithholdingTaxCodes.APHSC_ACCOUNT,
    WithholdingTaxCodes.APIGST_ACCOUNT,
    WithholdingTaxCodes.APCGST_ACCOUNT,
    WithholdingTaxCodes.APSGST_ACCOUNT,
    WithholdingTaxCodes.APUTGST_ACCOUNT,
    WithholdingTaxCodes.AP_CESS_GST_ACCOUNT,
    WithholdingTaxCodes.ARTDS_ACCOUNT,
    WithholdingTaxCodes.AR_SURCHARGE_ACCOUNT,
    WithholdingTaxCodes.AR_CESS_ACCOUNT,
    WithholdingTaxCodes.ARHSC_ACCOUNT,
    WithholdingTaxCodes.ARIGST_ACCOUNT,
    WithholdingTaxCodes.ARCGST_ACCOUNT,
    WithholdingTaxCodes.ARSGST_ACCOUNT,
    WithholdingTaxCodes.ARUTGST_ACCOUNT,
    WithholdingTaxCodes.AR_CESS_GST_ACCOUNT,
    WithholdingTaxCodes.LOCATION,
    WithholdingTaxCodes.CST_CODE_INCOMING_ID,
    WithholdingTaxCodes.CST_CODE_OUTGOING_ID,
    WithholdingTaxCodes.NATURE_OF_CALCULATION_BASE_CODE,
    WithholdingTaxCodes.TYPE_ID,
    WithholdingTaxCodes.RATE,
    WithholdingTaxCodes.EFFECTIVE_FROM,
    WithholdingTaxCodes.MINIMUM_TAXABLE_AMOUNT,
    WithholdingTaxCodes.CURRENCY,
    WithholdingTaxCodes.WITHHOLDING_TAX_CODES_LINES,
    WithholdingTaxCodes.VENDOR_PAYMENTS,
    WithholdingTaxCodes.BUSINESS_PARTNERS,
    WithholdingTaxCodes.PAYMENT_DRAFTS,
    WithholdingTaxCodes.CHART_OF_ACCOUNT,
    WithholdingTaxCodes.SECTION_2,
    WithholdingTaxCodes.NATURE_OF_ASSESSEE,
    WithholdingTaxCodes.WAREHOUSE_LOCATION,
    WithholdingTaxCodes.BRAZIL_STRING_INDEXER,
    WithholdingTaxCodes.CURRENCY_2,
    WithholdingTaxCodes.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WithholdingTaxCodes> = new AllFields('*', WithholdingTaxCodes);
  /**
   * All key fields of the WithholdingTaxCodes entity.
   */
  export const _keyFields: Array<Field<WithholdingTaxCodes>> = [WithholdingTaxCodes.WT_CODE];
  /**
   * Mapping of all key field names to the respective static field property WithholdingTaxCodes.
   */
  export const _keys: { [keys: string]: Field<WithholdingTaxCodes> } = WithholdingTaxCodes._keyFields.reduce((acc: { [keys: string]: Field<WithholdingTaxCodes> }, field: Field<WithholdingTaxCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
