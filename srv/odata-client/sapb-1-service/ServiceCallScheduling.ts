/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoDurations } from './BoDurations';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAddressType } from './BoAddressType';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Duration Type.
   * @nullable
   */
  durationType?: BoDurations;
  /**
   * Reminder.
   * @nullable
   */
  reminder?: BoYesNoEnum;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: number;
  /**
   * Reminder Type.
   * @nullable
   */
  reminderType?: BoDurations;
  /**
   * Reminder Sent.
   * @nullable
   */
  reminderSent?: BoYesNoEnum;
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
   * Display In Calendar.
   * @nullable
   */
  displayInCalendar?: BoYesNoEnum;
  /**
   * Is Unscheduled.
   * @nullable
   */
  isUnscheduled?: BoYesNoEnum;
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
   * Is Closed.
   * @nullable
   */
  isClosed?: BoYesNoEnum;
  /**
   * Remark.
   * @nullable
   */
  remark?: string;
  /**
   * Address Type Bs.
   * @nullable
   */
  addressTypeBs?: BoAddressType;
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
export class ServiceCallSchedulingField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallScheduling> {
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
   * Representation of the [[ServiceCallScheduling.durationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  durationType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DurationType', this);
  /**
   * Representation of the [[ServiceCallScheduling.reminder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminder: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Reminder', this);
  /**
   * Representation of the [[ServiceCallScheduling.reminderPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderPeriod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReminderPeriod', this, 'Edm.Double');
  /**
   * Representation of the [[ServiceCallScheduling.reminderType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReminderType', this);
  /**
   * Representation of the [[ServiceCallScheduling.reminderSent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderSent: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReminderSent', this);
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
   * Representation of the [[ServiceCallScheduling.displayInCalendar]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayInCalendar: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisplayInCalendar', this);
  /**
   * Representation of the [[ServiceCallScheduling.isUnscheduled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isUnscheduled: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsUnscheduled', this);
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
   * Representation of the [[ServiceCallScheduling.isClosed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isClosed: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsClosed', this);
  /**
   * Representation of the [[ServiceCallScheduling.remark]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remark: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remark', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallScheduling.addressTypeBs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressTypeBs: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AddressTypeBS', this);
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

  /**
   * Creates an instance of ServiceCallSchedulingField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallScheduling);
  }
}

export namespace ServiceCallScheduling {
  /**
   * Metadata information on all properties of the `ServiceCallScheduling` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallScheduling>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Technician',
    name: 'technician',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HandledBy',
    name: 'handledBy',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'StartTime',
    name: 'startTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'EndDate',
    name: 'endDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EndTime',
    name: 'endTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'Duration',
    name: 'duration',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualDuration',
    name: 'actualDuration',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DurationType',
    name: 'durationType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Reminder',
    name: 'reminder',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReminderPeriod',
    name: 'reminderPeriod',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ReminderType',
    name: 'reminderType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReminderSent',
    name: 'reminderSent',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReminderDate',
    name: 'reminderDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReminderTime',
    name: 'reminderTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'DisplayInCalendar',
    name: 'displayInCalendar',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsUnscheduled',
    name: 'isUnscheduled',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Location',
    name: 'location',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AddressName',
    name: 'addressName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressText',
    name: 'addressText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Street',
    name: 'street',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'City',
    name: 'city',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Room',
    name: 'room',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Address2',
    name: 'address2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Address3',
    name: 'address3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressType',
    name: 'addressType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StreetNo',
    name: 'streetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCode',
    name: 'zipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Block',
    name: 'block',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'County',
    name: 'county',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxOffice',
    name: 'taxOffice',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GlobalLocNum',
    name: 'globalLocNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IsClosed',
    name: 'isClosed',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Remark',
    name: 'remark',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressTypeBS',
    name: 'addressTypeBs',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SignatureName',
    name: 'signatureName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SalesOrders',
    name: 'salesOrders',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckInDate',
    name: 'checkInDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CheckInTime',
    name: 'checkInTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'CheckInLocation',
    name: 'checkInLocation',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckInLatitude',
    name: 'checkInLatitude',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckInLongitude',
    name: 'checkInLongitude',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckOutDate',
    name: 'checkOutDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CheckOutTime',
    name: 'checkOutTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallScheduling {
    return deserializeComplexTypeV4(json, ServiceCallScheduling);
  }
}
