/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallScheduling
 */
export interface ServiceCallScheduling {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Technician.
   * @nullable
   */
  technician?: number;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * Duration.
   * @nullable
   */
  duration?: number;
  /**
   * Actual Duration.
   * @nullable
   */
  actualDuration?: number;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: number;
  /**
   * Reminder Date.
   * @nullable
   */
  reminderDate?: Moment;
  /**
   * Reminder Time.
   * @nullable
   */
  reminderTime?: Time;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: string;
  /**
   * Address Text.
   * @nullable
   */
  addressText?: string;
  /**
   * Street.
   * @nullable
   */
  street?: string;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * Room.
   * @nullable
   */
  room?: string;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Address 2.
   * @nullable
   */
  address2?: string;
  /**
   * Address 3.
   * @nullable
   */
  address3?: string;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: string;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: string;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: string;
  /**
   * Block.
   * @nullable
   */
  block?: string;
  /**
   * County.
   * @nullable
   */
  county?: string;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: string;
  /**
   * Global Loc Num.
   * @nullable
   */
  globalLocNum?: string;
  /**
   * Remark.
   * @nullable
   */
  remark?: string;
  /**
   * Signature Name.
   * @nullable
   */
  signatureName?: string;
  /**
   * Sales Orders.
   * @nullable
   */
  salesOrders?: string;
  /**
   * Check In Date.
   * @nullable
   */
  checkInDate?: Moment;
  /**
   * Check In Time.
   * @nullable
   */
  checkInTime?: Time;
  /**
   * Check In Location.
   * @nullable
   */
  checkInLocation?: string;
  /**
   * Check In Latitude.
   * @nullable
   */
  checkInLatitude?: string;
  /**
   * Check In Longitude.
   * @nullable
   */
  checkInLongitude?: string;
  /**
   * Check Out Date.
   * @nullable
   */
  checkOutDate?: Moment;
  /**
   * Check Out Time.
   * @nullable
   */
  checkOutTime?: Time;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallScheduling.build]] instead.
 */
export function createServiceCallScheduling(json: any): ServiceCallScheduling {
  return ServiceCallScheduling.build(json);
}

/**
 * ServiceCallSchedulingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallSchedulingField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallScheduling.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallScheduling.technician]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Technician', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallScheduling.handledBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  handledBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HandledBy', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallScheduling.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallScheduling.startTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('StartTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ServiceCallScheduling.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallScheduling.endTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('EndTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ServiceCallScheduling.duration]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  duration: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Duration', this, 'Edm.Double');
  /**
   * Representation of the [[ServiceCallScheduling.actualDuration]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDuration: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualDuration', this, 'Edm.Double');
  /**
   * Representation of the [[ServiceCallScheduling.reminderPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderPeriod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReminderPeriod', this, 'Edm.Double');
  /**
   * Representation of the [[ServiceCallScheduling.reminderDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReminderDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallScheduling.reminderTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('ReminderTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ServiceCallScheduling.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Location', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallScheduling.addressName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.addressText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressText', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.room]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  room: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Room', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.address2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address2', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.address3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address3', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.addressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressType', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetNo', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.taxOffice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxOffice', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.globalLocNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GlobalLocNum', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.remark]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remark: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remark', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.signatureName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SignatureName', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.salesOrders]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesOrders: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesOrders', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.checkInDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CheckInDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallScheduling.checkInTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('CheckInTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ServiceCallScheduling.checkInLocation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLocation: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckInLocation', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.checkInLatitude]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLatitude: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckInLatitude', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.checkInLongitude]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLongitude: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckInLongitude', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.checkOutDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkOutDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CheckOutDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallScheduling.checkOutTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkOutTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('CheckOutTime', this, 'Edm.TimeOfDay');
}

export namespace ServiceCallScheduling {
  export function build(json: { [keys: string]: FieldType }): ServiceCallScheduling {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      Technician: (technician: number) => ({ technician: edmToTs(technician, 'Edm.Int32') }),
      HandledBy: (handledBy: number) => ({ handledBy: edmToTs(handledBy, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      StartTime: (startTime: Time) => ({ startTime: edmToTs(startTime, 'Edm.TimeOfDay') }),
      EndDate: (endDate: Moment) => ({ endDate: edmToTs(endDate, 'Edm.DateTimeOffset') }),
      EndTime: (endTime: Time) => ({ endTime: edmToTs(endTime, 'Edm.TimeOfDay') }),
      Duration: (duration: number) => ({ duration: edmToTs(duration, 'Edm.Double') }),
      ActualDuration: (actualDuration: number) => ({ actualDuration: edmToTs(actualDuration, 'Edm.Double') }),
      ReminderPeriod: (reminderPeriod: number) => ({ reminderPeriod: edmToTs(reminderPeriod, 'Edm.Double') }),
      ReminderDate: (reminderDate: Moment) => ({ reminderDate: edmToTs(reminderDate, 'Edm.DateTimeOffset') }),
      ReminderTime: (reminderTime: Time) => ({ reminderTime: edmToTs(reminderTime, 'Edm.TimeOfDay') }),
      Location: (location: number) => ({ location: edmToTs(location, 'Edm.Int32') }),
      AddressName: (addressName: string) => ({ addressName: edmToTs(addressName, 'Edm.String') }),
      AddressText: (addressText: string) => ({ addressText: edmToTs(addressText, 'Edm.String') }),
      Street: (street: string) => ({ street: edmToTs(street, 'Edm.String') }),
      City: (city: string) => ({ city: edmToTs(city, 'Edm.String') }),
      Room: (room: string) => ({ room: edmToTs(room, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      Address2: (address2: string) => ({ address2: edmToTs(address2, 'Edm.String') }),
      Address3: (address3: string) => ({ address3: edmToTs(address3, 'Edm.String') }),
      AddressType: (addressType: string) => ({ addressType: edmToTs(addressType, 'Edm.String') }),
      StreetNo: (streetNo: string) => ({ streetNo: edmToTs(streetNo, 'Edm.String') }),
      ZipCode: (zipCode: string) => ({ zipCode: edmToTs(zipCode, 'Edm.String') }),
      Block: (block: string) => ({ block: edmToTs(block, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      TaxOffice: (taxOffice: string) => ({ taxOffice: edmToTs(taxOffice, 'Edm.String') }),
      GlobalLocNum: (globalLocNum: string) => ({ globalLocNum: edmToTs(globalLocNum, 'Edm.String') }),
      Remark: (remark: string) => ({ remark: edmToTs(remark, 'Edm.String') }),
      SignatureName: (signatureName: string) => ({ signatureName: edmToTs(signatureName, 'Edm.String') }),
      SalesOrders: (salesOrders: string) => ({ salesOrders: edmToTs(salesOrders, 'Edm.String') }),
      CheckInDate: (checkInDate: Moment) => ({ checkInDate: edmToTs(checkInDate, 'Edm.DateTimeOffset') }),
      CheckInTime: (checkInTime: Time) => ({ checkInTime: edmToTs(checkInTime, 'Edm.TimeOfDay') }),
      CheckInLocation: (checkInLocation: string) => ({ checkInLocation: edmToTs(checkInLocation, 'Edm.String') }),
      CheckInLatitude: (checkInLatitude: string) => ({ checkInLatitude: edmToTs(checkInLatitude, 'Edm.String') }),
      CheckInLongitude: (checkInLongitude: string) => ({ checkInLongitude: edmToTs(checkInLongitude, 'Edm.String') }),
      CheckOutDate: (checkOutDate: Moment) => ({ checkOutDate: edmToTs(checkOutDate, 'Edm.DateTimeOffset') }),
      CheckOutTime: (checkOutTime: Time) => ({ checkOutTime: edmToTs(checkOutTime, 'Edm.TimeOfDay') })
    });
  }
}
