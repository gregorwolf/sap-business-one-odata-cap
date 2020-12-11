/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseTaxInvoicesRequestBuilder } from './PurchaseTaxInvoicesRequestBuilder';
import { Moment } from 'moment';
import { PurchaseTaxInvoiceLine } from './PurchaseTaxInvoiceLine';
import { PurchaseTaxInvoiceOperationCode } from './PurchaseTaxInvoiceOperationCode';
import { BoTaxInvoiceTypes } from './BoTaxInvoiceTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCurrencySources } from './BoCurrencySources';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PurchaseTaxInvoices" of service "SAPB1".
 */
export class PurchaseTaxInvoices extends EntityV4 implements PurchaseTaxInvoicesType {
  /**
   * Technical entity name for PurchaseTaxInvoices.
   */
  static _entityName = 'PurchaseTaxInvoices';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Doc Type.
   * @nullable
   */
  docType?: BoTaxInvoiceTypes;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
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
   * Doc Due Date.
   * @nullable
   */
  docDueDate?: Moment;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Segment.
   * @nullable
   */
  segment?: number;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: number;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Address 2.
   * @nullable
   */
  address2?: string;
  /**
   * Currency Source.
   * @nullable
   */
  currencySource?: BoCurrencySources;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: string;
  /**
   * Customer Or Vendor Ref No.
   * @nullable
   */
  customerOrVendorRefNo?: string;
  /**
   * Customer Or Vendor Name.
   * @nullable
   */
  customerOrVendorName?: string;
  /**
   * Cancel Date.
   * @nullable
   */
  cancelDate?: Moment;
  /**
   * Document Total.
   * @nullable
   */
  documentTotal?: number;
  /**
   * Tax Total.
   * @nullable
   */
  taxTotal?: number;
  /**
   * Payment Ref No.
   * @nullable
   */
  paymentRefNo?: string;
  /**
   * Payment Ref Date.
   * @nullable
   */
  paymentRefDate?: Moment;
  /**
   * Alteration Revision.
   * @nullable
   */
  alterationRevision?: number;
  /**
   * Purchase Tax Invoice Lines.
   * @nullable
   */
  purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine[];
  /**
   * Purchase Tax Invoice Operation Codes.
   * @nullable
   */
  purchaseTaxInvoiceOperationCodes?: PurchaseTaxInvoiceOperationCode[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances of `PurchaseTaxInvoices`.
   * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
   */
  static builder(): EntityBuilderType<PurchaseTaxInvoices, PurchaseTaxInvoicesType> {
    return EntityV4.entityBuilder(PurchaseTaxInvoices);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PurchaseTaxInvoices` entity type.
   * @returns A `PurchaseTaxInvoices` request builder.
   */
  static requestBuilder(): PurchaseTaxInvoicesRequestBuilder {
    return new PurchaseTaxInvoicesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseTaxInvoices`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
   */
  static customField(fieldName: string): CustomFieldV4<PurchaseTaxInvoices> {
    return EntityV4.customFieldSelector(fieldName, PurchaseTaxInvoices);
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

export interface PurchaseTaxInvoicesType {
  docEntry?: number | null;
  docNum?: number | null;
  docType?: BoTaxInvoiceTypes | null;
  printed?: BoYesNoEnum | null;
  docDate?: Moment | null;
  cardCode?: string | null;
  creationDate?: Moment | null;
  updateDate?: Moment | null;
  docDueDate?: Moment | null;
  series?: number | null;
  segment?: number | null;
  contactPersonCode?: number | null;
  taxDate?: Moment | null;
  comments?: string | null;
  shipToCode?: string | null;
  address?: string | null;
  address2?: string | null;
  currencySource?: BoCurrencySources | null;
  docCurrency?: string | null;
  customerOrVendorRefNo?: string | null;
  customerOrVendorName?: string | null;
  cancelDate?: Moment | null;
  documentTotal?: number | null;
  taxTotal?: number | null;
  paymentRefNo?: string | null;
  paymentRefDate?: Moment | null;
  alterationRevision?: number | null;
  purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine[] | null;
  purchaseTaxInvoiceOperationCodes?: PurchaseTaxInvoiceOperationCode[] | null;
  businessPartner: BusinessPartnersType;
}

export namespace PurchaseTaxInvoices {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<PurchaseTaxInvoices> = new NumberField('DocEntry', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<PurchaseTaxInvoices> = new NumberField('DocNum', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: EnumField<PurchaseTaxInvoices> = new EnumField('DocType', PurchaseTaxInvoices);
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<PurchaseTaxInvoices> = new EnumField('Printed', PurchaseTaxInvoices);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<PurchaseTaxInvoices> = new DateField('DocDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<PurchaseTaxInvoices> = new StringField('CardCode', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<PurchaseTaxInvoices> = new DateField('CreationDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<PurchaseTaxInvoices> = new DateField('UpdateDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DUE_DATE: DateField<PurchaseTaxInvoices> = new DateField('DocDueDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<PurchaseTaxInvoices> = new NumberField('Series', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[segment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEGMENT: NumberField<PurchaseTaxInvoices> = new NumberField('Segment', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<PurchaseTaxInvoices> = new NumberField('ContactPersonCode', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<PurchaseTaxInvoices> = new DateField('TaxDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<PurchaseTaxInvoices> = new StringField('Comments', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<PurchaseTaxInvoices> = new StringField('ShipToCode', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<PurchaseTaxInvoices> = new StringField('Address', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<PurchaseTaxInvoices> = new StringField('Address2', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[currencySource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_SOURCE: EnumField<PurchaseTaxInvoices> = new EnumField('CurrencySource', PurchaseTaxInvoices);
  /**
   * Static representation of the [[docCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_CURRENCY: StringField<PurchaseTaxInvoices> = new StringField('DocCurrency', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[customerOrVendorRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_OR_VENDOR_REF_NO: StringField<PurchaseTaxInvoices> = new StringField('CustomerOrVendorRefNo', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[customerOrVendorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_OR_VENDOR_NAME: StringField<PurchaseTaxInvoices> = new StringField('CustomerOrVendorName', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[cancelDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_DATE: DateField<PurchaseTaxInvoices> = new DateField('CancelDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<PurchaseTaxInvoices> = new NumberField('DocumentTotal', PurchaseTaxInvoices, 'Edm.Double');
  /**
   * Static representation of the [[taxTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TOTAL: NumberField<PurchaseTaxInvoices> = new NumberField('TaxTotal', PurchaseTaxInvoices, 'Edm.Double');
  /**
   * Static representation of the [[paymentRefNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REF_NO: StringField<PurchaseTaxInvoices> = new StringField('PaymentRefNo', PurchaseTaxInvoices, 'Edm.String');
  /**
   * Static representation of the [[paymentRefDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REF_DATE: DateField<PurchaseTaxInvoices> = new DateField('PaymentRefDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[alterationRevision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERATION_REVISION: NumberField<PurchaseTaxInvoices> = new NumberField('AlterationRevision', PurchaseTaxInvoices, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseTaxInvoiceLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_TAX_INVOICE_LINES: CollectionField<PurchaseTaxInvoices, PurchaseTaxInvoiceLine> = new CollectionField('PurchaseTaxInvoiceLines', PurchaseTaxInvoices, PurchaseTaxInvoiceLine);
  /**
   * Static representation of the [[purchaseTaxInvoiceOperationCodes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_TAX_INVOICE_OPERATION_CODES: CollectionField<PurchaseTaxInvoices, PurchaseTaxInvoiceOperationCode> = new CollectionField('PurchaseTaxInvoiceOperationCodes', PurchaseTaxInvoices, PurchaseTaxInvoiceOperationCode);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<PurchaseTaxInvoices, BusinessPartners> = new OneToOneLink('BusinessPartner', PurchaseTaxInvoices, BusinessPartners);
  /**
   * All fields of the PurchaseTaxInvoices entity.
   */
  export const _allFields: Array<NumberField<PurchaseTaxInvoices> | EnumField<PurchaseTaxInvoices> | DateField<PurchaseTaxInvoices> | StringField<PurchaseTaxInvoices> | CollectionField<PurchaseTaxInvoices, PurchaseTaxInvoiceLine> | CollectionField<PurchaseTaxInvoices, PurchaseTaxInvoiceOperationCode> | OneToOneLink<PurchaseTaxInvoices, BusinessPartners>> = [
    PurchaseTaxInvoices.DOC_ENTRY,
    PurchaseTaxInvoices.DOC_NUM,
    PurchaseTaxInvoices.DOC_TYPE,
    PurchaseTaxInvoices.PRINTED,
    PurchaseTaxInvoices.DOC_DATE,
    PurchaseTaxInvoices.CARD_CODE,
    PurchaseTaxInvoices.CREATION_DATE,
    PurchaseTaxInvoices.UPDATE_DATE,
    PurchaseTaxInvoices.DOC_DUE_DATE,
    PurchaseTaxInvoices.SERIES,
    PurchaseTaxInvoices.SEGMENT,
    PurchaseTaxInvoices.CONTACT_PERSON_CODE,
    PurchaseTaxInvoices.TAX_DATE,
    PurchaseTaxInvoices.COMMENTS,
    PurchaseTaxInvoices.SHIP_TO_CODE,
    PurchaseTaxInvoices.ADDRESS,
    PurchaseTaxInvoices.ADDRESS_2,
    PurchaseTaxInvoices.CURRENCY_SOURCE,
    PurchaseTaxInvoices.DOC_CURRENCY,
    PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_REF_NO,
    PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_NAME,
    PurchaseTaxInvoices.CANCEL_DATE,
    PurchaseTaxInvoices.DOCUMENT_TOTAL,
    PurchaseTaxInvoices.TAX_TOTAL,
    PurchaseTaxInvoices.PAYMENT_REF_NO,
    PurchaseTaxInvoices.PAYMENT_REF_DATE,
    PurchaseTaxInvoices.ALTERATION_REVISION,
    PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_LINES,
    PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_OPERATION_CODES,
    PurchaseTaxInvoices.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PurchaseTaxInvoices> = new AllFields('*', PurchaseTaxInvoices);
  /**
   * All key fields of the PurchaseTaxInvoices entity.
   */
  export const _keyFields: Array<Field<PurchaseTaxInvoices>> = [PurchaseTaxInvoices.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property PurchaseTaxInvoices.
   */
  export const _keys: { [keys: string]: Field<PurchaseTaxInvoices> } = PurchaseTaxInvoices._keyFields.reduce((acc: { [keys: string]: Field<PurchaseTaxInvoices> }, field: Field<PurchaseTaxInvoices>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
