/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StockTransferDraftsRequestBuilder } from './StockTransferDraftsRequestBuilder';
import { Moment } from 'moment';
import { StockTransferApprovalRequest } from './StockTransferApprovalRequest';
import { StockTransferLine } from './StockTransferLine';
import { StockTransferTaxExtension, StockTransferTaxExtensionField } from './StockTransferTaxExtension';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StockTransferAuthorizationStatusEnum } from './StockTransferAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoStatus } from './BoStatus';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "StockTransferDrafts" of service "SAPB1".
 */
export class StockTransferDrafts extends EntityV4 implements StockTransferDraftsType {
  /**
   * Technical entity name for StockTransferDrafts.
   */
  static _entityName = 'StockTransferDrafts';
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
   * Series.
   * @nullable
   */
  series?: number;
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
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
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
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: number;
  /**
   * From Warehouse.
   * @nullable
   */
  fromWarehouse?: string;
  /**
   * To Warehouse.
   * @nullable
   */
  toWarehouse?: string;
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
   * Doc Num.
   * @nullable
   */
  docNum?: number;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: number;
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
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: string;
  /**
   * Authorization Status.
   * @nullable
   */
  authorizationStatus?: StockTransferAuthorizationStatusEnum;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
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
   * E Doc Export Format.
   * @nullable
   */
  eDocExportFormat?: number;
  /**
   * Elec Comm Status.
   * @nullable
   */
  elecCommStatus?: ElecCommStatusEnum;
  /**
   * Elec Comm Message.
   * @nullable
   */
  elecCommMessage?: string;
  /**
   * Point Of Issue Code.
   * @nullable
   */
  pointOfIssueCode?: string;
  /**
   * Letter.
   * @nullable
   */
  letter?: FolioLetterEnum;
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
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Document Status.
   * @nullable
   */
  documentStatus?: BoStatus;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: string;
  /**
   * Stock Transfer Approval Requests.
   * @nullable
   */
  stockTransferApprovalRequests?: StockTransferApprovalRequest[];
  /**
   * Stock Transfer Lines.
   * @nullable
   */
  stockTransferLines?: StockTransferLine[];
  /**
   * Stock Transfer Tax Extension.
   * @nullable
   */
  stockTransferTaxExtension?: StockTransferTaxExtension;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsType!: PaymentTermsTypes;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse!: Warehouses;
  /**
   * One-to-one navigation property to the [[JournalEntries]] entity.
   */
  journalEntry!: JournalEntries;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `StockTransferDrafts`.
   * @returns A builder that constructs instances of entity type `StockTransferDrafts`.
   */
  static builder(): EntityBuilderType<StockTransferDrafts, StockTransferDraftsType> {
    return EntityV4.entityBuilder(StockTransferDrafts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `StockTransferDrafts` entity type.
   * @returns A `StockTransferDrafts` request builder.
   */
  static requestBuilder(): StockTransferDraftsRequestBuilder {
    return new StockTransferDraftsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTransferDrafts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `StockTransferDrafts`.
   */
  static customField(fieldName: string): CustomFieldV4<StockTransferDrafts> {
    return EntityV4.customFieldSelector(fieldName, StockTransferDrafts);
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
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Warehouses, WarehousesType } from './Warehouses';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface StockTransferDraftsType {
  docEntry?: number | null;
  series?: number | null;
  printed?: BoYesNoEnum | null;
  docDate?: Moment | null;
  dueDate?: Moment | null;
  cardCode?: string | null;
  cardName?: string | null;
  address?: string | null;
  reference1?: string | null;
  reference2?: string | null;
  comments?: string | null;
  journalMemo?: string | null;
  priceList?: number | null;
  salesPersonCode?: number | null;
  fromWarehouse?: string | null;
  toWarehouse?: string | null;
  creationDate?: Moment | null;
  updateDate?: Moment | null;
  financialPeriod?: number | null;
  transNum?: number | null;
  docNum?: number | null;
  taxDate?: Moment | null;
  contactPerson?: number | null;
  folioPrefixString?: string | null;
  folioNumber?: number | null;
  docObjectCode?: string | null;
  authorizationStatus?: StockTransferAuthorizationStatusEnum | null;
  bplid?: number | null;
  bplName?: string | null;
  vatRegNum?: string | null;
  authorizationCode?: string | null;
  startDeliveryDate?: Moment | null;
  startDeliveryTime?: Time | null;
  endDeliveryDate?: Moment | null;
  endDeliveryTime?: Time | null;
  vehiclePlate?: string | null;
  atDocumentType?: string | null;
  eDocExportFormat?: number | null;
  elecCommStatus?: ElecCommStatusEnum | null;
  elecCommMessage?: string | null;
  pointOfIssueCode?: string | null;
  letter?: FolioLetterEnum | null;
  folioNumberFrom?: number | null;
  folioNumberTo?: number | null;
  attachmentEntry?: number | null;
  documentStatus?: BoStatus | null;
  shipToCode?: string | null;
  stockTransferApprovalRequests?: StockTransferApprovalRequest[] | null;
  stockTransferLines?: StockTransferLine[] | null;
  stockTransferTaxExtension?: StockTransferTaxExtension | null;
  businessPartner: BusinessPartnersType;
  paymentTermsType: PaymentTermsTypesType;
  salesPerson: SalesPersonsType;
  warehouse: WarehousesType;
  journalEntry: JournalEntriesType;
  businessPlace: BusinessPlacesType;
}

export namespace StockTransferDrafts {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<StockTransferDrafts> = new NumberField('DocEntry', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<StockTransferDrafts> = new NumberField('Series', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<StockTransferDrafts> = new EnumField('Printed', StockTransferDrafts);
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<StockTransferDrafts> = new DateField('DocDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<StockTransferDrafts> = new DateField('DueDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<StockTransferDrafts> = new StringField('CardCode', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<StockTransferDrafts> = new StringField('CardName', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<StockTransferDrafts> = new StringField('Address', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<StockTransferDrafts> = new StringField('Reference1', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<StockTransferDrafts> = new StringField('Reference2', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<StockTransferDrafts> = new StringField('Comments', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<StockTransferDrafts> = new StringField('JournalMemo', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<StockTransferDrafts> = new NumberField('PriceList', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<StockTransferDrafts> = new NumberField('SalesPersonCode', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[fromWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_WAREHOUSE: StringField<StockTransferDrafts> = new StringField('FromWarehouse', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[toWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_WAREHOUSE: StringField<StockTransferDrafts> = new StringField('ToWarehouse', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<StockTransferDrafts> = new DateField('CreationDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<StockTransferDrafts> = new DateField('UpdateDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<StockTransferDrafts> = new NumberField('FinancialPeriod', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<StockTransferDrafts> = new NumberField('TransNum', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<StockTransferDrafts> = new NumberField('DocNum', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<StockTransferDrafts> = new DateField('TaxDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<StockTransferDrafts> = new NumberField('ContactPerson', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<StockTransferDrafts> = new StringField('FolioPrefixString', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<StockTransferDrafts> = new NumberField('FolioNumber', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: StringField<StockTransferDrafts> = new StringField('DocObjectCode', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<StockTransferDrafts> = new EnumField('AuthorizationStatus', StockTransferDrafts);
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<StockTransferDrafts> = new NumberField('BPLID', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<StockTransferDrafts> = new StringField('BPLName', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<StockTransferDrafts> = new StringField('VATRegNum', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<StockTransferDrafts> = new StringField('AuthorizationCode', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<StockTransferDrafts> = new DateField('StartDeliveryDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<StockTransferDrafts> = new TimeField('StartDeliveryTime', StockTransferDrafts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<StockTransferDrafts> = new DateField('EndDeliveryDate', StockTransferDrafts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<StockTransferDrafts> = new TimeField('EndDeliveryTime', StockTransferDrafts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<StockTransferDrafts> = new StringField('VehiclePlate', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<StockTransferDrafts> = new StringField('ATDocumentType', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<StockTransferDrafts> = new NumberField('EDocExportFormat', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<StockTransferDrafts> = new EnumField('ElecCommStatus', StockTransferDrafts);
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<StockTransferDrafts> = new StringField('ElecCommMessage', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<StockTransferDrafts> = new StringField('PointOfIssueCode', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<StockTransferDrafts> = new EnumField('Letter', StockTransferDrafts);
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<StockTransferDrafts> = new NumberField('FolioNumberFrom', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<StockTransferDrafts> = new NumberField('FolioNumberTo', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<StockTransferDrafts> = new NumberField('AttachmentEntry', StockTransferDrafts, 'Edm.Int32');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<StockTransferDrafts> = new EnumField('DocumentStatus', StockTransferDrafts);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<StockTransferDrafts> = new StringField('ShipToCode', StockTransferDrafts, 'Edm.String');
  /**
   * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<StockTransferDrafts, StockTransferApprovalRequest> = new CollectionField('StockTransfer_ApprovalRequests', StockTransferDrafts, StockTransferApprovalRequest);
  /**
   * Static representation of the [[stockTransferLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_LINES: CollectionField<StockTransferDrafts, StockTransferLine> = new CollectionField('StockTransferLines', StockTransferDrafts, StockTransferLine);
  /**
   * Static representation of the [[stockTransferTaxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_TAX_EXTENSION: StockTransferTaxExtensionField<StockTransferDrafts> = new StockTransferTaxExtensionField('StockTransferTaxExtension', StockTransferDrafts);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<StockTransferDrafts, BusinessPartners> = new OneToOneLink('BusinessPartner', StockTransferDrafts, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<StockTransferDrafts, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', StockTransferDrafts, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<StockTransferDrafts, SalesPersons> = new OneToOneLink('SalesPerson', StockTransferDrafts, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: OneToOneLink<StockTransferDrafts, Warehouses> = new OneToOneLink('Warehouse', StockTransferDrafts, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<StockTransferDrafts, JournalEntries> = new OneToOneLink('JournalEntry', StockTransferDrafts, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<StockTransferDrafts, BusinessPlaces> = new OneToOneLink('BusinessPlace', StockTransferDrafts, BusinessPlaces);
  /**
   * All fields of the StockTransferDrafts entity.
   */
  export const _allFields: Array<NumberField<StockTransferDrafts> | EnumField<StockTransferDrafts> | DateField<StockTransferDrafts> | StringField<StockTransferDrafts> | TimeField<StockTransferDrafts> | CollectionField<StockTransferDrafts, StockTransferApprovalRequest> | CollectionField<StockTransferDrafts, StockTransferLine> | StockTransferTaxExtensionField<StockTransferDrafts> | OneToOneLink<StockTransferDrafts, BusinessPartners> | OneToOneLink<StockTransferDrafts, PaymentTermsTypes> | OneToOneLink<StockTransferDrafts, SalesPersons> | OneToOneLink<StockTransferDrafts, Warehouses> | OneToOneLink<StockTransferDrafts, JournalEntries> | OneToOneLink<StockTransferDrafts, BusinessPlaces>> = [
    StockTransferDrafts.DOC_ENTRY,
    StockTransferDrafts.SERIES,
    StockTransferDrafts.PRINTED,
    StockTransferDrafts.DOC_DATE,
    StockTransferDrafts.DUE_DATE,
    StockTransferDrafts.CARD_CODE,
    StockTransferDrafts.CARD_NAME,
    StockTransferDrafts.ADDRESS,
    StockTransferDrafts.REFERENCE_1,
    StockTransferDrafts.REFERENCE_2,
    StockTransferDrafts.COMMENTS,
    StockTransferDrafts.JOURNAL_MEMO,
    StockTransferDrafts.PRICE_LIST,
    StockTransferDrafts.SALES_PERSON_CODE,
    StockTransferDrafts.FROM_WAREHOUSE,
    StockTransferDrafts.TO_WAREHOUSE,
    StockTransferDrafts.CREATION_DATE,
    StockTransferDrafts.UPDATE_DATE,
    StockTransferDrafts.FINANCIAL_PERIOD,
    StockTransferDrafts.TRANS_NUM,
    StockTransferDrafts.DOC_NUM,
    StockTransferDrafts.TAX_DATE,
    StockTransferDrafts.CONTACT_PERSON,
    StockTransferDrafts.FOLIO_PREFIX_STRING,
    StockTransferDrafts.FOLIO_NUMBER,
    StockTransferDrafts.DOC_OBJECT_CODE,
    StockTransferDrafts.AUTHORIZATION_STATUS,
    StockTransferDrafts.BPLID,
    StockTransferDrafts.BPL_NAME,
    StockTransferDrafts.VAT_REG_NUM,
    StockTransferDrafts.AUTHORIZATION_CODE,
    StockTransferDrafts.START_DELIVERY_DATE,
    StockTransferDrafts.START_DELIVERY_TIME,
    StockTransferDrafts.END_DELIVERY_DATE,
    StockTransferDrafts.END_DELIVERY_TIME,
    StockTransferDrafts.VEHICLE_PLATE,
    StockTransferDrafts.AT_DOCUMENT_TYPE,
    StockTransferDrafts.E_DOC_EXPORT_FORMAT,
    StockTransferDrafts.ELEC_COMM_STATUS,
    StockTransferDrafts.ELEC_COMM_MESSAGE,
    StockTransferDrafts.POINT_OF_ISSUE_CODE,
    StockTransferDrafts.LETTER,
    StockTransferDrafts.FOLIO_NUMBER_FROM,
    StockTransferDrafts.FOLIO_NUMBER_TO,
    StockTransferDrafts.ATTACHMENT_ENTRY,
    StockTransferDrafts.DOCUMENT_STATUS,
    StockTransferDrafts.SHIP_TO_CODE,
    StockTransferDrafts.STOCK_TRANSFER_APPROVAL_REQUESTS,
    StockTransferDrafts.STOCK_TRANSFER_LINES,
    StockTransferDrafts.STOCK_TRANSFER_TAX_EXTENSION,
    StockTransferDrafts.BUSINESS_PARTNER,
    StockTransferDrafts.PAYMENT_TERMS_TYPE,
    StockTransferDrafts.SALES_PERSON,
    StockTransferDrafts.WAREHOUSE,
    StockTransferDrafts.JOURNAL_ENTRY,
    StockTransferDrafts.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<StockTransferDrafts> = new AllFields('*', StockTransferDrafts);
  /**
   * All key fields of the StockTransferDrafts entity.
   */
  export const _keyFields: Array<Field<StockTransferDrafts>> = [StockTransferDrafts.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property StockTransferDrafts.
   */
  export const _keys: { [keys: string]: Field<StockTransferDrafts> } = StockTransferDrafts._keyFields.reduce((acc: { [keys: string]: Field<StockTransferDrafts> }, field: Field<StockTransferDrafts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
