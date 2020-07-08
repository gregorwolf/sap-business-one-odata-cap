/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryTransferRequestsRequestBuilder } from './InventoryTransferRequestsRequestBuilder';
import { Moment } from 'moment';
import { StockTransferApprovalRequest, StockTransferApprovalRequestField } from './StockTransferApprovalRequest';
import { StockTransferLine, StockTransferLineField } from './StockTransferLine';
import { StockTransferTaxExtension, StockTransferTaxExtensionField } from './StockTransferTaxExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "InventoryTransferRequests" of service "SAPB1".
 */
export class InventoryTransferRequests extends Entity implements InventoryTransferRequestsType {
  /**
   * Technical entity name for InventoryTransferRequests.
   */
  static _entityName = 'InventoryTransferRequests';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InventoryTransferRequests.
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
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances `InventoryTransferRequests`.
   * @returns A builder that constructs instances of entity type `InventoryTransferRequests`.
   */
  static builder(): EntityBuilderType<InventoryTransferRequests, InventoryTransferRequestsTypeForceMandatory> {
    return Entity.entityBuilder(InventoryTransferRequests);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InventoryTransferRequests` entity type.
   * @returns A `InventoryTransferRequests` request builder.
   */
  static requestBuilder(): InventoryTransferRequestsRequestBuilder {
    return new InventoryTransferRequestsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryTransferRequests`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InventoryTransferRequests`.
   */
  static customField(fieldName: string): CustomField<InventoryTransferRequests> {
    return Entity.customFieldSelector(fieldName, InventoryTransferRequests);
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
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface InventoryTransferRequestsType {
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
  paymentTermsType: PaymentTermsTypesType;
  salesPerson: SalesPersonsType;
  warehouse: WarehousesType;
  businessPlace: BusinessPlacesType;
}

export interface InventoryTransferRequestsTypeForceMandatory {
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
  paymentTermsType: PaymentTermsTypesType;
  salesPerson: SalesPersonsType;
  warehouse: WarehousesType;
  businessPlace: BusinessPlacesType;
}

export namespace InventoryTransferRequests {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<InventoryTransferRequests> = new NumberField('DocEntry', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<InventoryTransferRequests> = new NumberField('Series', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<InventoryTransferRequests> = new DateField('DocDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<InventoryTransferRequests> = new DateField('DueDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<InventoryTransferRequests> = new StringField('CardCode', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<InventoryTransferRequests> = new StringField('CardName', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<InventoryTransferRequests> = new StringField('Address', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[reference1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_1: StringField<InventoryTransferRequests> = new StringField('Reference1', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<InventoryTransferRequests> = new StringField('Reference2', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<InventoryTransferRequests> = new StringField('Comments', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[journalMemo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_MEMO: StringField<InventoryTransferRequests> = new StringField('JournalMemo', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<InventoryTransferRequests> = new NumberField('PriceList', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[salesPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON_CODE: NumberField<InventoryTransferRequests> = new NumberField('SalesPersonCode', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[fromWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROM_WAREHOUSE: StringField<InventoryTransferRequests> = new StringField('FromWarehouse', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[toWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_WAREHOUSE: StringField<InventoryTransferRequests> = new StringField('ToWarehouse', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<InventoryTransferRequests> = new DateField('CreationDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<InventoryTransferRequests> = new DateField('UpdateDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<InventoryTransferRequests> = new NumberField('FinancialPeriod', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[transNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_NUM: NumberField<InventoryTransferRequests> = new NumberField('TransNum', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<InventoryTransferRequests> = new NumberField('DocNum', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<InventoryTransferRequests> = new DateField('TaxDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<InventoryTransferRequests> = new NumberField('ContactPerson', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_PREFIX_STRING: StringField<InventoryTransferRequests> = new StringField('FolioPrefixString', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER: NumberField<InventoryTransferRequests> = new NumberField('FolioNumber', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[docObjectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE: StringField<InventoryTransferRequests> = new StringField('DocObjectCode', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<InventoryTransferRequests> = new NumberField('BPLID', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<InventoryTransferRequests> = new StringField('BPLName', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<InventoryTransferRequests> = new StringField('VATRegNum', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[authorizationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_CODE: StringField<InventoryTransferRequests> = new StringField('AuthorizationCode', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[startDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_DATE: DateField<InventoryTransferRequests> = new DateField('StartDeliveryDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DELIVERY_TIME: TimeField<InventoryTransferRequests> = new TimeField('StartDeliveryTime', InventoryTransferRequests, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endDeliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_DATE: DateField<InventoryTransferRequests> = new DateField('EndDeliveryDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDeliveryTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DELIVERY_TIME: TimeField<InventoryTransferRequests> = new TimeField('EndDeliveryTime', InventoryTransferRequests, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[vehiclePlate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VEHICLE_PLATE: StringField<InventoryTransferRequests> = new StringField('VehiclePlate', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[atDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AT_DOCUMENT_TYPE: StringField<InventoryTransferRequests> = new StringField('ATDocumentType', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[eDocExportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_DOC_EXPORT_FORMAT: NumberField<InventoryTransferRequests> = new NumberField('EDocExportFormat', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[elecCommMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEC_COMM_MESSAGE: StringField<InventoryTransferRequests> = new StringField('ElecCommMessage', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[pointOfIssueCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POINT_OF_ISSUE_CODE: StringField<InventoryTransferRequests> = new StringField('PointOfIssueCode', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[folioNumberFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_FROM: NumberField<InventoryTransferRequests> = new NumberField('FolioNumberFrom', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[folioNumberTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLIO_NUMBER_TO: NumberField<InventoryTransferRequests> = new NumberField('FolioNumberTo', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<InventoryTransferRequests> = new NumberField('AttachmentEntry', InventoryTransferRequests, 'Edm.Int32');
  /**
   * Static representation of the [[shipToCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_CODE: StringField<InventoryTransferRequests> = new StringField('ShipToCode', InventoryTransferRequests, 'Edm.String');
  /**
   * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<InventoryTransferRequests> = new CollectionField('StockTransfer_ApprovalRequests', InventoryTransferRequests, new StockTransferApprovalRequestField('', InventoryTransferRequests));
  /**
   * Static representation of the [[stockTransferLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_LINES: CollectionField<InventoryTransferRequests> = new CollectionField('StockTransferLines', InventoryTransferRequests, new StockTransferLineField('', InventoryTransferRequests));
  /**
   * Static representation of the [[stockTransferTaxExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFER_TAX_EXTENSION: StockTransferTaxExtensionField<InventoryTransferRequests> = new StockTransferTaxExtensionField('StockTransferTaxExtension', InventoryTransferRequests);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<InventoryTransferRequests, BusinessPartners> = new OneToOneLink('BusinessPartner', InventoryTransferRequests, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPE: OneToOneLink<InventoryTransferRequests, PaymentTermsTypes> = new OneToOneLink('PaymentTermsType', InventoryTransferRequests, PaymentTermsTypes);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<InventoryTransferRequests, SalesPersons> = new OneToOneLink('SalesPerson', InventoryTransferRequests, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: OneToOneLink<InventoryTransferRequests, Warehouses> = new OneToOneLink('Warehouse', InventoryTransferRequests, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<InventoryTransferRequests, BusinessPlaces> = new OneToOneLink('BusinessPlace', InventoryTransferRequests, BusinessPlaces);
  /**
   * All fields of the InventoryTransferRequests entity.
   */
  export const _allFields: Array<NumberField<InventoryTransferRequests> | DateField<InventoryTransferRequests> | StringField<InventoryTransferRequests> | TimeField<InventoryTransferRequests> | CollectionField<InventoryTransferRequests> | StockTransferTaxExtensionField<InventoryTransferRequests> | OneToOneLink<InventoryTransferRequests, BusinessPartners> | OneToOneLink<InventoryTransferRequests, PaymentTermsTypes> | OneToOneLink<InventoryTransferRequests, SalesPersons> | OneToOneLink<InventoryTransferRequests, Warehouses> | OneToOneLink<InventoryTransferRequests, BusinessPlaces>> = [
    InventoryTransferRequests.DOC_ENTRY,
    InventoryTransferRequests.SERIES,
    InventoryTransferRequests.DOC_DATE,
    InventoryTransferRequests.DUE_DATE,
    InventoryTransferRequests.CARD_CODE,
    InventoryTransferRequests.CARD_NAME,
    InventoryTransferRequests.ADDRESS,
    InventoryTransferRequests.REFERENCE_1,
    InventoryTransferRequests.REFERENCE_2,
    InventoryTransferRequests.COMMENTS,
    InventoryTransferRequests.JOURNAL_MEMO,
    InventoryTransferRequests.PRICE_LIST,
    InventoryTransferRequests.SALES_PERSON_CODE,
    InventoryTransferRequests.FROM_WAREHOUSE,
    InventoryTransferRequests.TO_WAREHOUSE,
    InventoryTransferRequests.CREATION_DATE,
    InventoryTransferRequests.UPDATE_DATE,
    InventoryTransferRequests.FINANCIAL_PERIOD,
    InventoryTransferRequests.TRANS_NUM,
    InventoryTransferRequests.DOC_NUM,
    InventoryTransferRequests.TAX_DATE,
    InventoryTransferRequests.CONTACT_PERSON,
    InventoryTransferRequests.FOLIO_PREFIX_STRING,
    InventoryTransferRequests.FOLIO_NUMBER,
    InventoryTransferRequests.DOC_OBJECT_CODE,
    InventoryTransferRequests.BPLID,
    InventoryTransferRequests.BPL_NAME,
    InventoryTransferRequests.VAT_REG_NUM,
    InventoryTransferRequests.AUTHORIZATION_CODE,
    InventoryTransferRequests.START_DELIVERY_DATE,
    InventoryTransferRequests.START_DELIVERY_TIME,
    InventoryTransferRequests.END_DELIVERY_DATE,
    InventoryTransferRequests.END_DELIVERY_TIME,
    InventoryTransferRequests.VEHICLE_PLATE,
    InventoryTransferRequests.AT_DOCUMENT_TYPE,
    InventoryTransferRequests.E_DOC_EXPORT_FORMAT,
    InventoryTransferRequests.ELEC_COMM_MESSAGE,
    InventoryTransferRequests.POINT_OF_ISSUE_CODE,
    InventoryTransferRequests.FOLIO_NUMBER_FROM,
    InventoryTransferRequests.FOLIO_NUMBER_TO,
    InventoryTransferRequests.ATTACHMENT_ENTRY,
    InventoryTransferRequests.SHIP_TO_CODE,
    InventoryTransferRequests.STOCK_TRANSFER_APPROVAL_REQUESTS,
    InventoryTransferRequests.STOCK_TRANSFER_LINES,
    InventoryTransferRequests.STOCK_TRANSFER_TAX_EXTENSION,
    InventoryTransferRequests.BUSINESS_PARTNER,
    InventoryTransferRequests.PAYMENT_TERMS_TYPE,
    InventoryTransferRequests.SALES_PERSON,
    InventoryTransferRequests.WAREHOUSE,
    InventoryTransferRequests.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InventoryTransferRequests> = new AllFields('*', InventoryTransferRequests);
  /**
   * All key fields of the InventoryTransferRequests entity.
   */
  export const _keyFields: Array<Field<InventoryTransferRequests>> = [InventoryTransferRequests.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property InventoryTransferRequests.
   */
  export const _keys: { [keys: string]: Field<InventoryTransferRequests> } = InventoryTransferRequests._keyFields.reduce((acc: { [keys: string]: Field<InventoryTransferRequests> }, field: Field<InventoryTransferRequests>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
