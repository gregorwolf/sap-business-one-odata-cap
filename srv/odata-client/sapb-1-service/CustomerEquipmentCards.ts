/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerEquipmentCardsRequestBuilder } from './CustomerEquipmentCardsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CustomerEquipmentCards" of service "SAPB1".
 */
export class CustomerEquipmentCards extends Entity implements CustomerEquipmentCardsType {
  /**
   * Technical entity name for CustomerEquipmentCards.
   */
  static _entityName = 'CustomerEquipmentCards';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerEquipmentCards.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Equipment Card Num.
   * @nullable
   */
  equipmentCardNum?: number;
  /**
   * Customer Code.
   * @nullable
   */
  customerCode?: string;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: string;
  /**
   * Direct Customer Name.
   * @nullable
   */
  directCustomerName?: string;
  /**
   * Manufacturer Serial Num.
   * @nullable
   */
  manufacturerSerialNum?: string;
  /**
   * Internal Serial Num.
   * @nullable
   */
  internalSerialNum?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Invoice Code.
   * @nullable
   */
  invoiceCode?: number;
  /**
   * Invoice Number.
   * @nullable
   */
  invoiceNumber?: number;
  /**
   * Delivery Date.
   * @nullable
   */
  deliveryDate?: Moment;
  /**
   * Contact Phone.
   * @nullable
   */
  contactPhone?: string;
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
   * Country Code.
   * @nullable
   */
  countryCode?: string;
  /**
   * State Code.
   * @nullable
   */
  stateCode?: string;
  /**
   * Install Location.
   * @nullable
   */
  installLocation?: string;
  /**
   * Delivery Code.
   * @nullable
   */
  deliveryCode?: number;
  /**
   * Delivery Number.
   * @nullable
   */
  deliveryNumber?: number;
  /**
   * Replace Sn.
   * @nullable
   */
  replaceSn?: number;
  /**
   * Default Technician.
   * @nullable
   */
  defaultTechnician?: number;
  /**
   * Replaced By Sn.
   * @nullable
   */
  replacedBySn?: number;
  /**
   * Defaultterritory.
   * @nullable
   */
  defaultterritory?: number;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country!: Countries;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[Territories]] entity.
   */
  territory!: Territories;
  /**
   * One-to-one navigation property to the [[Attachments2]] entity.
   */
  attachments2!: Attachments2;

  /**
   * Returns an entity builder to construct instances `CustomerEquipmentCards`.
   * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
   */
  static builder(): EntityBuilderType<CustomerEquipmentCards, CustomerEquipmentCardsTypeForceMandatory> {
    return Entity.entityBuilder(CustomerEquipmentCards);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerEquipmentCards` entity type.
   * @returns A `CustomerEquipmentCards` request builder.
   */
  static requestBuilder(): CustomerEquipmentCardsRequestBuilder {
    return new CustomerEquipmentCardsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerEquipmentCards`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
   */
  static customField(fieldName: string): CustomField<CustomerEquipmentCards> {
    return Entity.customFieldSelector(fieldName, CustomerEquipmentCards);
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
import { Items, ItemsType } from './Items';
import { Countries, CountriesType } from './Countries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Territories, TerritoriesType } from './Territories';
import { Attachments2, Attachments2Type } from './Attachments2';

export interface CustomerEquipmentCardsType {
  equipmentCardNum?: number;
  customerCode?: string;
  customerName?: string;
  directCustomerName?: string;
  manufacturerSerialNum?: string;
  internalSerialNum?: string;
  itemCode?: string;
  itemDescription?: string;
  invoiceCode?: number;
  invoiceNumber?: number;
  deliveryDate?: Moment;
  contactPhone?: string;
  street?: string;
  block?: string;
  zipCode?: string;
  city?: string;
  county?: string;
  countryCode?: string;
  stateCode?: string;
  installLocation?: string;
  deliveryCode?: number;
  deliveryNumber?: number;
  replaceSn?: number;
  defaultTechnician?: number;
  replacedBySn?: number;
  defaultterritory?: number;
  buildingFloorRoom?: string;
  attachmentEntry?: number;
  businessPartner: BusinessPartnersType;
  item: ItemsType;
  country: CountriesType;
  employeeInfo: EmployeesInfoType;
  territory: TerritoriesType;
  attachments2: Attachments2Type;
}

export interface CustomerEquipmentCardsTypeForceMandatory {
  equipmentCardNum: number;
  customerCode: string;
  customerName: string;
  directCustomerName: string;
  manufacturerSerialNum: string;
  internalSerialNum: string;
  itemCode: string;
  itemDescription: string;
  invoiceCode: number;
  invoiceNumber: number;
  deliveryDate: Moment;
  contactPhone: string;
  street: string;
  block: string;
  zipCode: string;
  city: string;
  county: string;
  countryCode: string;
  stateCode: string;
  installLocation: string;
  deliveryCode: number;
  deliveryNumber: number;
  replaceSn: number;
  defaultTechnician: number;
  replacedBySn: number;
  defaultterritory: number;
  buildingFloorRoom: string;
  attachmentEntry: number;
  businessPartner: BusinessPartnersType;
  item: ItemsType;
  country: CountriesType;
  employeeInfo: EmployeesInfoType;
  territory: TerritoriesType;
  attachments2: Attachments2Type;
}

export namespace CustomerEquipmentCards {
  /**
   * Static representation of the [[equipmentCardNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT_CARD_NUM: NumberField<CustomerEquipmentCards> = new NumberField('EquipmentCardNum', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[customerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CODE: StringField<CustomerEquipmentCards> = new StringField('CustomerCode', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[customerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_NAME: StringField<CustomerEquipmentCards> = new StringField('CustomerName', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[directCustomerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIRECT_CUSTOMER_NAME: StringField<CustomerEquipmentCards> = new StringField('DirectCustomerName', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[manufacturerSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_SERIAL_NUM: StringField<CustomerEquipmentCards> = new StringField('ManufacturerSerialNum', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[internalSerialNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_SERIAL_NUM: StringField<CustomerEquipmentCards> = new StringField('InternalSerialNum', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<CustomerEquipmentCards> = new StringField('ItemCode', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_DESCRIPTION: StringField<CustomerEquipmentCards> = new StringField('ItemDescription', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[invoiceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_CODE: NumberField<CustomerEquipmentCards> = new NumberField('InvoiceCode', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[invoiceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_NUMBER: NumberField<CustomerEquipmentCards> = new NumberField('InvoiceNumber', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[deliveryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_DATE: DateField<CustomerEquipmentCards> = new DateField('DeliveryDate', CustomerEquipmentCards, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[contactPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PHONE: StringField<CustomerEquipmentCards> = new StringField('ContactPhone', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<CustomerEquipmentCards> = new StringField('Street', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[block]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCK: StringField<CustomerEquipmentCards> = new StringField('Block', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<CustomerEquipmentCards> = new StringField('ZipCode', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<CustomerEquipmentCards> = new StringField('City', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<CustomerEquipmentCards> = new StringField('County', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<CustomerEquipmentCards> = new StringField('CountryCode', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[stateCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_CODE: StringField<CustomerEquipmentCards> = new StringField('StateCode', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[installLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALL_LOCATION: StringField<CustomerEquipmentCards> = new StringField('InstallLocation', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[deliveryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_CODE: NumberField<CustomerEquipmentCards> = new NumberField('DeliveryCode', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[deliveryNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_NUMBER: NumberField<CustomerEquipmentCards> = new NumberField('DeliveryNumber', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[replaceSn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACE_SN: NumberField<CustomerEquipmentCards> = new NumberField('ReplaceSN', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[defaultTechnician]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TECHNICIAN: NumberField<CustomerEquipmentCards> = new NumberField('DefaultTechnician', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[replacedBySn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACED_BY_SN: NumberField<CustomerEquipmentCards> = new NumberField('ReplacedBySN', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[defaultterritory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULTTERRITORY: NumberField<CustomerEquipmentCards> = new NumberField('Defaultterritory', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the [[buildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING_FLOOR_ROOM: StringField<CustomerEquipmentCards> = new StringField('BuildingFloorRoom', CustomerEquipmentCards, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<CustomerEquipmentCards> = new NumberField('AttachmentEntry', CustomerEquipmentCards, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<CustomerEquipmentCards, BusinessPartners> = new OneToOneLink('BusinessPartner', CustomerEquipmentCards, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<CustomerEquipmentCards, Items> = new OneToOneLink('Item', CustomerEquipmentCards, Items);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<CustomerEquipmentCards, Countries> = new OneToOneLink('Country', CustomerEquipmentCards, Countries);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<CustomerEquipmentCards, EmployeesInfo> = new OneToOneLink('EmployeeInfo', CustomerEquipmentCards, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[territory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY: OneToOneLink<CustomerEquipmentCards, Territories> = new OneToOneLink('Territory', CustomerEquipmentCards, Territories);
  /**
   * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2: OneToOneLink<CustomerEquipmentCards, Attachments2> = new OneToOneLink('Attachments2', CustomerEquipmentCards, Attachments2);
  /**
   * All fields of the CustomerEquipmentCards entity.
   */
  export const _allFields: Array<NumberField<CustomerEquipmentCards> | StringField<CustomerEquipmentCards> | DateField<CustomerEquipmentCards> | OneToOneLink<CustomerEquipmentCards, BusinessPartners> | OneToOneLink<CustomerEquipmentCards, Items> | OneToOneLink<CustomerEquipmentCards, Countries> | OneToOneLink<CustomerEquipmentCards, EmployeesInfo> | OneToOneLink<CustomerEquipmentCards, Territories> | OneToOneLink<CustomerEquipmentCards, Attachments2>> = [
    CustomerEquipmentCards.EQUIPMENT_CARD_NUM,
    CustomerEquipmentCards.CUSTOMER_CODE,
    CustomerEquipmentCards.CUSTOMER_NAME,
    CustomerEquipmentCards.DIRECT_CUSTOMER_NAME,
    CustomerEquipmentCards.MANUFACTURER_SERIAL_NUM,
    CustomerEquipmentCards.INTERNAL_SERIAL_NUM,
    CustomerEquipmentCards.ITEM_CODE,
    CustomerEquipmentCards.ITEM_DESCRIPTION,
    CustomerEquipmentCards.INVOICE_CODE,
    CustomerEquipmentCards.INVOICE_NUMBER,
    CustomerEquipmentCards.DELIVERY_DATE,
    CustomerEquipmentCards.CONTACT_PHONE,
    CustomerEquipmentCards.STREET,
    CustomerEquipmentCards.BLOCK,
    CustomerEquipmentCards.ZIP_CODE,
    CustomerEquipmentCards.CITY,
    CustomerEquipmentCards.COUNTY,
    CustomerEquipmentCards.COUNTRY_CODE,
    CustomerEquipmentCards.STATE_CODE,
    CustomerEquipmentCards.INSTALL_LOCATION,
    CustomerEquipmentCards.DELIVERY_CODE,
    CustomerEquipmentCards.DELIVERY_NUMBER,
    CustomerEquipmentCards.REPLACE_SN,
    CustomerEquipmentCards.DEFAULT_TECHNICIAN,
    CustomerEquipmentCards.REPLACED_BY_SN,
    CustomerEquipmentCards.DEFAULTTERRITORY,
    CustomerEquipmentCards.BUILDING_FLOOR_ROOM,
    CustomerEquipmentCards.ATTACHMENT_ENTRY,
    CustomerEquipmentCards.BUSINESS_PARTNER,
    CustomerEquipmentCards.ITEM,
    CustomerEquipmentCards.COUNTRY,
    CustomerEquipmentCards.EMPLOYEE_INFO,
    CustomerEquipmentCards.TERRITORY,
    CustomerEquipmentCards.ATTACHMENTS_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerEquipmentCards> = new AllFields('*', CustomerEquipmentCards);
  /**
   * All key fields of the CustomerEquipmentCards entity.
   */
  export const _keyFields: Array<Field<CustomerEquipmentCards>> = [CustomerEquipmentCards.EQUIPMENT_CARD_NUM];
  /**
   * Mapping of all key field names to the respective static field property CustomerEquipmentCards.
   */
  export const _keys: { [keys: string]: Field<CustomerEquipmentCards> } = CustomerEquipmentCards._keyFields.reduce((acc: { [keys: string]: Field<CustomerEquipmentCards> }, field: Field<CustomerEquipmentCards>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
