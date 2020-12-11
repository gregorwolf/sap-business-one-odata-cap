/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseLocationsRequestBuilder } from './WarehouseLocationsRequestBuilder';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WarehouseLocations" of service "SAPB1".
 */
export class WarehouseLocations extends EntityV4 implements WarehouseLocationsType {
  /**
   * Technical entity name for WarehouseLocations.
   */
  static _entityName = 'WarehouseLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Lstvat Number.
   * @nullable
   */
  lstvatNumber?: string;
  /**
   * Cst Number.
   * @nullable
   */
  cstNumber?: string;
  /**
   * Exemption Number.
   * @nullable
   */
  exemptionNumber?: string;
  /**
   * Tan Number.
   * @nullable
   */
  tanNumber?: string;
  /**
   * Service Tax Number.
   * @nullable
   */
  serviceTaxNumber?: string;
  /**
   * Assessee Type.
   * @nullable
   */
  assesseeType?: string;
  /**
   * Company Type.
   * @nullable
   */
  companyType?: string;
  /**
   * Nature Of Business.
   * @nullable
   */
  natureOfBusiness?: string;
  /**
   * Tin Number.
   * @nullable
   */
  tinNumber?: string;
  /**
   * Registration Type.
   * @nullable
   */
  registrationType?: string;
  /**
   * Ecc Number.
   * @nullable
   */
  eccNumber?: string;
  /**
   * Ce Range.
   * @nullable
   */
  ceRange?: string;
  /**
   * Ce Division.
   * @nullable
   */
  ceDivision?: string;
  /**
   * Ce Commissionerate.
   * @nullable
   */
  ceCommissionerate?: string;
  /**
   * Manufacturer Code.
   * @nullable
   */
  manufacturerCode?: string;
  /**
   * Jurisdiction.
   * @nullable
   */
  jurisdiction?: string;
  /**
   * Street.
   * @nullable
   */
  street?: string;
  /**
   * Block.
   * @nullable
   */
  block?: string;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: string;
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
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Pan Number.
   * @nullable
   */
  panNumber?: string;
  /**
   * Ce Register Number.
   * @nullable
   */
  ceRegisterNumber?: string;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: string;
  /**
   * Gstin.
   * @nullable
   */
  gstin?: string;
  /**
   * Gst Type.
   * @nullable
   */
  gstType?: BoGstRegnTypeEnum;
  /**
   * Gsttds.
   * @nullable
   */
  gsttds?: string;
  /**
   * Gstisd.
   * @nullable
   */
  gstisd?: string;
  /**
   * One-to-many navigation property to the [[Warehouses]] entity.
   */
  warehouses!: Warehouses[];
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-many navigation property to the [[CertificateSeries]] entity.
   */
  certificateSeries!: CertificateSeries[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `WarehouseLocations`.
   * @returns A builder that constructs instances of entity type `WarehouseLocations`.
   */
  static builder(): EntityBuilderType<WarehouseLocations, WarehouseLocationsType> {
    return EntityV4.entityBuilder(WarehouseLocations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WarehouseLocations` entity type.
   * @returns A `WarehouseLocations` request builder.
   */
  static requestBuilder(): WarehouseLocationsRequestBuilder {
    return new WarehouseLocationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseLocations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WarehouseLocations`.
   */
  static customField(fieldName: string): CustomFieldV4<WarehouseLocations> {
    return EntityV4.customFieldSelector(fieldName, WarehouseLocations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Warehouses, WarehousesType } from './Warehouses';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { Items, ItemsType } from './Items';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Countries, CountriesType } from './Countries';
import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface WarehouseLocationsType {
  code?: number | null;
  name?: string | null;
  lstvatNumber?: string | null;
  cstNumber?: string | null;
  exemptionNumber?: string | null;
  tanNumber?: string | null;
  serviceTaxNumber?: string | null;
  assesseeType?: string | null;
  companyType?: string | null;
  natureOfBusiness?: string | null;
  tinNumber?: string | null;
  registrationType?: string | null;
  eccNumber?: string | null;
  ceRange?: string | null;
  ceDivision?: string | null;
  ceCommissionerate?: string | null;
  manufacturerCode?: string | null;
  jurisdiction?: string | null;
  street?: string | null;
  block?: string | null;
  zipCode?: string | null;
  city?: string | null;
  county?: string | null;
  country?: string | null;
  state?: string | null;
  panNumber?: string | null;
  ceRegisterNumber?: string | null;
  buildingFloorRoom?: string | null;
  gstin?: string | null;
  gstType?: BoGstRegnTypeEnum | null;
  gsttds?: string | null;
  gstisd?: string | null;
  warehouses: WarehousesType[];
  vendorPayments: VendorPaymentsType[];
  items: ItemsType[];
  journalEntries: JournalEntriesType[];
  country2: CountriesType;
  certificateSeries: CertificateSeriesType[];
  paymentDrafts: PaymentDraftsType[];
  withholdingTaxCodes: WithholdingTaxCodesType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace WarehouseLocations {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<WarehouseLocations> = new NumberField('Code', WarehouseLocations, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<WarehouseLocations> = new StringField('Name', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[lstvatNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LSTVAT_NUMBER: StringField<WarehouseLocations> = new StringField('LSTVATNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[cstNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CST_NUMBER: StringField<WarehouseLocations> = new StringField('CSTNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[exemptionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_NUMBER: StringField<WarehouseLocations> = new StringField('ExemptionNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[tanNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAN_NUMBER: StringField<WarehouseLocations> = new StringField('TANNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[serviceTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_TAX_NUMBER: StringField<WarehouseLocations> = new StringField('ServiceTaxNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[assesseeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSEE_TYPE: StringField<WarehouseLocations> = new StringField('AssesseeType', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[companyType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_TYPE: StringField<WarehouseLocations> = new StringField('CompanyType', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[natureOfBusiness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATURE_OF_BUSINESS: StringField<WarehouseLocations> = new StringField('NatureOfBusiness', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[tinNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIN_NUMBER: StringField<WarehouseLocations> = new StringField('TINNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[registrationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGISTRATION_TYPE: StringField<WarehouseLocations> = new StringField('RegistrationType', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[eccNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ECC_NUMBER: StringField<WarehouseLocations> = new StringField('EccNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[ceRange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CE_RANGE: StringField<WarehouseLocations> = new StringField('CERange', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[ceDivision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CE_DIVISION: StringField<WarehouseLocations> = new StringField('CEDivision', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[ceCommissionerate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CE_COMMISSIONERATE: StringField<WarehouseLocations> = new StringField('CECommissionerate', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[manufacturerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_CODE: StringField<WarehouseLocations> = new StringField('ManufacturerCode', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[jurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JURISDICTION: StringField<WarehouseLocations> = new StringField('Jurisdiction', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<WarehouseLocations> = new StringField('Street', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[block]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK: StringField<WarehouseLocations> = new StringField('Block', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<WarehouseLocations> = new StringField('ZipCode', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<WarehouseLocations> = new StringField('City', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<WarehouseLocations> = new StringField('County', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<WarehouseLocations> = new StringField('Country', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<WarehouseLocations> = new StringField('State', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[panNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAN_NUMBER: StringField<WarehouseLocations> = new StringField('PANNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[ceRegisterNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CE_REGISTER_NUMBER: StringField<WarehouseLocations> = new StringField('CERegisterNumber', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[buildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING_FLOOR_ROOM: StringField<WarehouseLocations> = new StringField('BuildingFloorRoom', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[gstin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GSTIN: StringField<WarehouseLocations> = new StringField('GSTIN', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[gstType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GST_TYPE: EnumField<WarehouseLocations> = new EnumField('GstType', WarehouseLocations);
  /**
   * Static representation of the [[gsttds]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GSTTDS: StringField<WarehouseLocations> = new StringField('GSTTDS', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the [[gstisd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GSTISD: StringField<WarehouseLocations> = new StringField('GSTISD', WarehouseLocations, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSES: OneToManyLink<WarehouseLocations, Warehouses> = new OneToManyLink('Warehouses', WarehouseLocations, Warehouses);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<WarehouseLocations, VendorPayments> = new OneToManyLink('VendorPayments', WarehouseLocations, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<WarehouseLocations, Items> = new OneToManyLink('Items', WarehouseLocations, Items);
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<WarehouseLocations, JournalEntries> = new OneToManyLink('JournalEntries', WarehouseLocations, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<WarehouseLocations, Countries> = new OneToOneLink('Country2', WarehouseLocations, Countries);
  /**
   * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATE_SERIES: OneToManyLink<WarehouseLocations, CertificateSeries> = new OneToManyLink('CertificateSeries', WarehouseLocations, CertificateSeries);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<WarehouseLocations, PaymentDrafts> = new OneToManyLink('PaymentDrafts', WarehouseLocations, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<WarehouseLocations, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', WarehouseLocations, WithholdingTaxCodes);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<WarehouseLocations, IncomingPayments> = new OneToManyLink('IncomingPayments', WarehouseLocations, IncomingPayments);
  /**
   * All fields of the WarehouseLocations entity.
   */
  export const _allFields: Array<NumberField<WarehouseLocations> | StringField<WarehouseLocations> | EnumField<WarehouseLocations> | OneToManyLink<WarehouseLocations, Warehouses> | OneToManyLink<WarehouseLocations, VendorPayments> | OneToManyLink<WarehouseLocations, Items> | OneToManyLink<WarehouseLocations, JournalEntries> | OneToOneLink<WarehouseLocations, Countries> | OneToManyLink<WarehouseLocations, CertificateSeries> | OneToManyLink<WarehouseLocations, PaymentDrafts> | OneToManyLink<WarehouseLocations, WithholdingTaxCodes> | OneToManyLink<WarehouseLocations, IncomingPayments>> = [
    WarehouseLocations.CODE,
    WarehouseLocations.NAME,
    WarehouseLocations.LSTVAT_NUMBER,
    WarehouseLocations.CST_NUMBER,
    WarehouseLocations.EXEMPTION_NUMBER,
    WarehouseLocations.TAN_NUMBER,
    WarehouseLocations.SERVICE_TAX_NUMBER,
    WarehouseLocations.ASSESSEE_TYPE,
    WarehouseLocations.COMPANY_TYPE,
    WarehouseLocations.NATURE_OF_BUSINESS,
    WarehouseLocations.TIN_NUMBER,
    WarehouseLocations.REGISTRATION_TYPE,
    WarehouseLocations.ECC_NUMBER,
    WarehouseLocations.CE_RANGE,
    WarehouseLocations.CE_DIVISION,
    WarehouseLocations.CE_COMMISSIONERATE,
    WarehouseLocations.MANUFACTURER_CODE,
    WarehouseLocations.JURISDICTION,
    WarehouseLocations.STREET,
    WarehouseLocations.BLOCK,
    WarehouseLocations.ZIP_CODE,
    WarehouseLocations.CITY,
    WarehouseLocations.COUNTY,
    WarehouseLocations.COUNTRY,
    WarehouseLocations.STATE,
    WarehouseLocations.PAN_NUMBER,
    WarehouseLocations.CE_REGISTER_NUMBER,
    WarehouseLocations.BUILDING_FLOOR_ROOM,
    WarehouseLocations.GSTIN,
    WarehouseLocations.GST_TYPE,
    WarehouseLocations.GSTTDS,
    WarehouseLocations.GSTISD,
    WarehouseLocations.WAREHOUSES,
    WarehouseLocations.VENDOR_PAYMENTS,
    WarehouseLocations.ITEMS,
    WarehouseLocations.JOURNAL_ENTRIES,
    WarehouseLocations.COUNTRY_2,
    WarehouseLocations.CERTIFICATE_SERIES,
    WarehouseLocations.PAYMENT_DRAFTS,
    WarehouseLocations.WITHHOLDING_TAX_CODES,
    WarehouseLocations.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WarehouseLocations> = new AllFields('*', WarehouseLocations);
  /**
   * All key fields of the WarehouseLocations entity.
   */
  export const _keyFields: Array<Field<WarehouseLocations>> = [WarehouseLocations.CODE];
  /**
   * Mapping of all key field names to the respective static field property WarehouseLocations.
   */
  export const _keys: { [keys: string]: Field<WarehouseLocations> } = WarehouseLocations._keyFields.reduce((acc: { [keys: string]: Field<WarehouseLocations> }, field: Field<WarehouseLocations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
