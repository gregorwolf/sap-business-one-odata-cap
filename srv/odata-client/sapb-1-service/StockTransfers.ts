/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StockTransfersRequestBuilder } from './StockTransfersRequestBuilder';
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
 * This class represents the entity "StockTransfers" of service "SAPB1".
 */
export class StockTransfers extends EntityV4 implements StockTransfersType {
  /**
   * Technical entity name for StockTransfers.
   */
  static _entityName = 'StockTransfers';
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
   * Returns an entity builder to construct instances of `StockTransfers`.
   * @returns A builder that constructs instances of entity type `StockTransfers`.
   */
  static builder(): EntityBuilderType<StockTransfers, StockTransfersType> {
    return EntityV4.entityBuilder(StockTransfers);
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
  static customField(fieldName: string): CustomFieldV4<StockTransfers> {
    return EntityV4.customFieldSelector(fieldName, StockTransfers);
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
   * Static representation of the [[printed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTED: EnumField<StockTransfers> = new EnumField('Printed', StockTransfers);
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
   * Static representation of the [[authorizationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_STATUS: EnumField<StockTransfers> = new EnumField('AuthorizationStatus', StockTransfers);
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
   * Static representation of the [[elecCommStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_STATUS: EnumField<StockTransfers> = new EnumField('ElecCommStatus', StockTransfers);
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
   * Static representation of the [[letter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER: EnumField<StockTransfers> = new EnumField('Letter', StockTransfers);
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
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<StockTransfers> = new EnumField('DocumentStatus', StockTransfers);
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<StockTransfers> = new StringField('ShipToCode', StockTransfers, 'Edm.String');
  /**
   * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<StockTransfers, StockTransferApprovalRequest> = new CollectionField('StockTransfer_ApprovalRequests', StockTransfers, StockTransferApprovalRequest);
  /**
   * Static representation of the [[stockTransferLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_LINES: CollectionField<StockTransfers, StockTransferLine> = new CollectionField('StockTransferLines', StockTransfers, StockTransferLine);
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
  export const _allFields: Array<NumberField<StockTransfers> | EnumField<StockTransfers> | DateField<StockTransfers> | StringField<StockTransfers> | TimeField<StockTransfers> | CollectionField<StockTransfers, StockTransferApprovalRequest> | CollectionField<StockTransfers, StockTransferLine> | StockTransferTaxExtensionField<StockTransfers> | OneToOneLink<StockTransfers, BusinessPartners> | OneToOneLink<StockTransfers, PriceLists> | OneToOneLink<StockTransfers, SalesPersons> | OneToOneLink<StockTransfers, Warehouses> | OneToOneLink<StockTransfers, JournalEntries> | OneToOneLink<StockTransfers, BusinessPlaces>> = [
    StockTransfers.DOC_ENTRY,
    StockTransfers.SERIES,
    StockTransfers.PRINTED,
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
    StockTransfers.AUTHORIZATION_STATUS,
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
    StockTransfers.ELEC_COMM_STATUS,
    StockTransfers.ELEC_COMM_MESSAGE,
    StockTransfers.POINT_OF_ISSUE_CODE,
    StockTransfers.LETTER,
    StockTransfers.FOLIO_NUMBER_FROM,
    StockTransfers.FOLIO_NUMBER_TO,
    StockTransfers.ATTACHMENT_ENTRY,
    StockTransfers.DOCUMENT_STATUS,
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
