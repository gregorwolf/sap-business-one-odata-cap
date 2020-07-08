/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StockTransfersRequestBuilder } from './StockTransfersRequestBuilder';
import { Moment } from 'moment';
import { StockTransferApprovalRequest, StockTransferApprovalRequestField } from './StockTransferApprovalRequest';
import { StockTransferLine, StockTransferLineField } from './StockTransferLine';
import { StockTransferTaxExtension, StockTransferTaxExtensionField } from './StockTransferTaxExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "StockTransfers" of service "SAPB1".
 */
export class StockTransfers extends Entity implements StockTransfersType {
  /**
   * Technical entity name for StockTransfers.
   */
  static _entityName = 'StockTransfers';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for StockTransfers.
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
   * Series.
   * @nullable
   */
  series?: number;
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
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList2!: PriceLists;
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
   * Returns an entity builder to construct instances `StockTransfers`.
   * @returns A builder that constructs instances of entity type `StockTransfers`.
   */
  static builder(): EntityBuilderType<StockTransfers, StockTransfersTypeForceMandatory> {
    return Entity.entityBuilder(StockTransfers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `StockTransfers` entity type.
   * @returns A `StockTransfers` request builder.
   */
  static requestBuilder(): StockTransfersRequestBuilder {
    return new StockTransfersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTransfers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `StockTransfers`.
   */
  static customField(fieldName: string): CustomField<StockTransfers> {
    return Entity.customFieldSelector(fieldName, StockTransfers);
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
import { PriceLists, PriceListsType } from './PriceLists';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Warehouses, WarehousesType } from './Warehouses';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface StockTransfersType {
  docEntry?: number;
  series?: number;
  docDate?: Moment;
  dueDate?: Moment;
  cardCode?: string;
  cardName?: string;
  address?: string;
  reference1?: string;
  reference2?: string;
  comments?: string;
  journalMemo?: string;
  priceList?: number;
  salesPersonCode?: number;
  fromWarehouse?: string;
  toWarehouse?: string;
  creationDate?: Moment;
  updateDate?: Moment;
  financialPeriod?: number;
  transNum?: number;
  docNum?: number;
  taxDate?: Moment;
  contactPerson?: number;
  folioPrefixString?: string;
  folioNumber?: number;
  docObjectCode?: string;
  bplid?: number;
  bplName?: string;
  vatRegNum?: string;
  authorizationCode?: string;
  startDeliveryDate?: Moment;
  startDeliveryTime?: Time;
  endDeliveryDate?: Moment;
  endDeliveryTime?: Time;
  vehiclePlate?: string;
  atDocumentType?: string;
  eDocExportFormat?: number;
  elecCommMessage?: string;
  pointOfIssueCode?: string;
  folioNumberFrom?: number;
  folioNumberTo?: number;
  attachmentEntry?: number;
  shipToCode?: string;
  stockTransferApprovalRequests?: StockTransferApprovalRequest[];
  stockTransferLines?: StockTransferLine[];
  stockTransferTaxExtension?: StockTransferTaxExtension;
  businessPartner: BusinessPartnersType;
  priceList2: PriceListsType;
  salesPerson: SalesPersonsType;
  warehouse: WarehousesType;
  journalEntry: JournalEntriesType;
  businessPlace: BusinessPlacesType;
}

export interface StockTransfersTypeForceMandatory {
  docEntry: number;
  series: number;
  docDate: Moment;
  dueDate: Moment;
  cardCode: string;
  cardName: string;
  address: string;
  reference1: string;
  reference2: string;
  comments: string;
  journalMemo: string;
  priceList: number;
  salesPersonCode: number;
  fromWarehouse: string;
  toWarehouse: string;
  creationDate: Moment;
  updateDate: Moment;
  financialPeriod: number;
  transNum: number;
  docNum: number;
  taxDate: Moment;
  contactPerson: number;
  folioPrefixString: string;
  folioNumber: number;
  docObjectCode: string;
  bplid: number;
  bplName: string;
  vatRegNum: string;
  authorizationCode: string;
  startDeliveryDate: Moment;
  startDeliveryTime: Time;
  endDeliveryDate: Moment;
  endDeliveryTime: Time;
  vehiclePlate: string;
  atDocumentType: string;
  eDocExportFormat: number;
  elecCommMessage: string;
  pointOfIssueCode: string;
  folioNumberFrom: number;
  folioNumberTo: number;
  attachmentEntry: number;
  shipToCode: string;
  stockTransferApprovalRequests: StockTransferApprovalRequest[];
  stockTransferLines: StockTransferLine[];
  stockTransferTaxExtension: StockTransferTaxExtension;
  businessPartner: BusinessPartnersType;
  priceList2: PriceListsType;
  salesPerson: SalesPersonsType;
  warehouse: WarehousesType;
  journalEntry: JournalEntriesType;
  businessPlace: BusinessPlacesType;
}

export namespace StockTransfers {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<StockTransfers> = new NumberField('DocEntry', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<StockTransfers> = new NumberField('Series', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<StockTransfers> = new DateField('DocDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<StockTransfers> = new DateField('DueDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<StockTransfers> = new StringField('CardCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<StockTransfers> = new StringField('CardName', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<StockTransfers> = new StringField('Address', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<StockTransfers> = new StringField('Reference1', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<StockTransfers> = new StringField('Reference2', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<StockTransfers> = new StringField('Comments', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<StockTransfers> = new StringField('JournalMemo', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<StockTransfers> = new NumberField('PriceList', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<StockTransfers> = new NumberField('SalesPersonCode', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[fromWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_WAREHOUSE: StringField<StockTransfers> = new StringField('FromWarehouse', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[toWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_WAREHOUSE: StringField<StockTransfers> = new StringField('ToWarehouse', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<StockTransfers> = new DateField('CreationDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<StockTransfers> = new DateField('UpdateDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<StockTransfers> = new NumberField('FinancialPeriod', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<StockTransfers> = new NumberField('TransNum', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<StockTransfers> = new NumberField('DocNum', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<StockTransfers> = new DateField('TaxDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<StockTransfers> = new NumberField('ContactPerson', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<StockTransfers> = new StringField('FolioPrefixString', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<StockTransfers> = new NumberField('FolioNumber', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: StringField<StockTransfers> = new StringField('DocObjectCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<StockTransfers> = new NumberField('BPLID', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<StockTransfers> = new StringField('BPLName', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<StockTransfers> = new StringField('VATRegNum', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<StockTransfers> = new StringField('AuthorizationCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<StockTransfers> = new DateField('StartDeliveryDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<StockTransfers> = new TimeField('StartDeliveryTime', StockTransfers, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<StockTransfers> = new DateField('EndDeliveryDate', StockTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<StockTransfers> = new TimeField('EndDeliveryTime', StockTransfers, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<StockTransfers> = new StringField('VehiclePlate', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<StockTransfers> = new StringField('ATDocumentType', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<StockTransfers> = new NumberField('EDocExportFormat', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<StockTransfers> = new StringField('ElecCommMessage', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<StockTransfers> = new StringField('PointOfIssueCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<StockTransfers> = new NumberField('FolioNumberFrom', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<StockTransfers> = new NumberField('FolioNumberTo', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<StockTransfers> = new NumberField('AttachmentEntry', StockTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<StockTransfers> = new StringField('ShipToCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<StockTransfers> = new CollectionField('StockTransfer_ApprovalRequests', StockTransfers, new StockTransferApprovalRequestField('', StockTransfers));
  /**
   * Static representation of the [[stockTransferLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_LINES: CollectionField<StockTransfers> = new CollectionField('StockTransferLines', StockTransfers, new StockTransferLineField('', StockTransfers));
  /**
   * Static representation of the [[stockTransferTaxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_TAX_EXTENSION: StockTransferTaxExtensionField<StockTransfers> = new StockTransferTaxExtensionField('StockTransferTaxExtension', StockTransfers);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<StockTransfers, BusinessPartners> = new OneToOneLink('BusinessPartner', StockTransfers, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_2: OneToOneLink<StockTransfers, PriceLists> = new OneToOneLink('PriceList2', StockTransfers, PriceLists);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<StockTransfers, SalesPersons> = new OneToOneLink('SalesPerson', StockTransfers, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: OneToOneLink<StockTransfers, Warehouses> = new OneToOneLink('Warehouse', StockTransfers, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<StockTransfers, JournalEntries> = new OneToOneLink('JournalEntry', StockTransfers, JournalEntries);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<StockTransfers, BusinessPlaces> = new OneToOneLink('BusinessPlace', StockTransfers, BusinessPlaces);
  /**
   * All fields of the StockTransfers entity.
   */
  export const _allFields: Array<NumberField<StockTransfers> | DateField<StockTransfers> | StringField<StockTransfers> | TimeField<StockTransfers> | CollectionField<StockTransfers> | StockTransferTaxExtensionField<StockTransfers> | OneToOneLink<StockTransfers, BusinessPartners> | OneToOneLink<StockTransfers, PriceLists> | OneToOneLink<StockTransfers, SalesPersons> | OneToOneLink<StockTransfers, Warehouses> | OneToOneLink<StockTransfers, JournalEntries> | OneToOneLink<StockTransfers, BusinessPlaces>> = [
    StockTransfers.DOC_ENTRY,
    StockTransfers.SERIES,
    StockTransfers.DOC_DATE,
    StockTransfers.DUE_DATE,
    StockTransfers.CARD_CODE,
    StockTransfers.CARD_NAME,
    StockTransfers.ADDRESS,
    StockTransfers.REFERENCE_1,
    StockTransfers.REFERENCE_2,
    StockTransfers.COMMENTS,
    StockTransfers.JOURNAL_MEMO,
    StockTransfers.PRICE_LIST,
    StockTransfers.SALES_PERSON_CODE,
    StockTransfers.FROM_WAREHOUSE,
    StockTransfers.TO_WAREHOUSE,
    StockTransfers.CREATION_DATE,
    StockTransfers.UPDATE_DATE,
    StockTransfers.FINANCIAL_PERIOD,
    StockTransfers.TRANS_NUM,
    StockTransfers.DOC_NUM,
    StockTransfers.TAX_DATE,
    StockTransfers.CONTACT_PERSON,
    StockTransfers.FOLIO_PREFIX_STRING,
    StockTransfers.FOLIO_NUMBER,
    StockTransfers.DOC_OBJECT_CODE,
    StockTransfers.BPLID,
    StockTransfers.BPL_NAME,
    StockTransfers.VAT_REG_NUM,
    StockTransfers.AUTHORIZATION_CODE,
    StockTransfers.START_DELIVERY_DATE,
    StockTransfers.START_DELIVERY_TIME,
    StockTransfers.END_DELIVERY_DATE,
    StockTransfers.END_DELIVERY_TIME,
    StockTransfers.VEHICLE_PLATE,
    StockTransfers.AT_DOCUMENT_TYPE,
    StockTransfers.E_DOC_EXPORT_FORMAT,
    StockTransfers.ELEC_COMM_MESSAGE,
    StockTransfers.POINT_OF_ISSUE_CODE,
    StockTransfers.FOLIO_NUMBER_FROM,
    StockTransfers.FOLIO_NUMBER_TO,
    StockTransfers.ATTACHMENT_ENTRY,
    StockTransfers.SHIP_TO_CODE,
    StockTransfers.STOCK_TRANSFER_APPROVAL_REQUESTS,
    StockTransfers.STOCK_TRANSFER_LINES,
    StockTransfers.STOCK_TRANSFER_TAX_EXTENSION,
    StockTransfers.BUSINESS_PARTNER,
    StockTransfers.PRICE_LIST_2,
    StockTransfers.SALES_PERSON,
    StockTransfers.WAREHOUSE,
    StockTransfers.JOURNAL_ENTRY,
    StockTransfers.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<StockTransfers> = new AllFields('*', StockTransfers);
  /**
   * All key fields of the StockTransfers entity.
   */
  export const _keyFields: Array<Field<StockTransfers>> = [StockTransfers.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property StockTransfers.
   */
  export const _keys: { [keys: string]: Field<StockTransfers> } = StockTransfers._keyFields.reduce((acc: { [keys: string]: Field<StockTransfers> }, field: Field<StockTransfers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
