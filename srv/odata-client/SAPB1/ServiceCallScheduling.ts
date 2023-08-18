/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDurations } from './BoDurations';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAddressType } from './BoAddressType';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ServiceCallScheduling
 */
export interface ServiceCallScheduling<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Technician.
   * @nullable
   */
  technician?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Duration.
   * @nullable
   */
  duration?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Duration.
   * @nullable
   */
  actualDuration?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Duration Type.
   * @nullable
   */
  durationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Actual Duration Type.
   * @nullable
   */
  actualDurationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reminder.
   * @nullable
   */
  reminder?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Reminder Type.
   * @nullable
   */
  reminderType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reminder Sent.
   * @nullable
   */
  reminderSent?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reminder Date.
   * @nullable
   */
  reminderDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reminder Time.
   * @nullable
   */
  reminderTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Display In Calendar.
   * @nullable
   */
  displayInCalendar?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Unscheduled.
   * @nullable
   */
  isUnscheduled?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Text.
   * @nullable
   */
  addressText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address 2.
   * @nullable
   */
  address2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address 3.
   * @nullable
   */
  address3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Global Loc Num.
   * @nullable
   */
  globalLocNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Closed.
   * @nullable
   */
  isClosed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Remark.
   * @nullable
   */
  remark?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Type Bs.
   * @nullable
   */
  addressTypeBs?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Signature Name.
   * @nullable
   */
  signatureName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Orders.
   * @nullable
   */
  salesOrders?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check In Date.
   * @nullable
   */
  checkInDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Check In Time.
   * @nullable
   */
  checkInTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Check In Location.
   * @nullable
   */
  checkInLocation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check In Latitude.
   * @nullable
   */
  checkInLatitude?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check In Longitude.
   * @nullable
   */
  checkInLongitude?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Out Date.
   * @nullable
   */
  checkOutDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Check Out Time.
   * @nullable
   */
  checkOutTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
}

/**
 * ServiceCallSchedulingField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallSchedulingField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceCallScheduling,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceCallScheduling.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallScheduling.technician} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  technician: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Technician', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallScheduling.handledBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  handledBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HandledBy', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallScheduling.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.startTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StartTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ServiceCallScheduling.endDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.endTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EndTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ServiceCallScheduling.duration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  duration: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Duration', 'Edm.Double', true);
  /**
   * Representation of the {@link ServiceCallScheduling.actualDuration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDuration: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualDuration',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.durationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  durationType: EnumField<EntityT, DeSerializersT, BoDurations, true, false> =
    this._fieldBuilder.buildEnumField('DurationType', BoDurations, true);
  /**
   * Representation of the {@link ServiceCallScheduling.actualDurationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualDurationType: EnumField<
    EntityT,
    DeSerializersT,
    BoDurations,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ActualDurationType',
    BoDurations,
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.reminder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminder: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Reminder', BoYesNoEnum, true);
  /**
   * Representation of the {@link ServiceCallScheduling.reminderPeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderPeriod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReminderPeriod',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.reminderType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderType: EnumField<EntityT, DeSerializersT, BoDurations, true, false> =
    this._fieldBuilder.buildEnumField('ReminderType', BoDurations, true);
  /**
   * Representation of the {@link ServiceCallScheduling.reminderSent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderSent: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ReminderSent', BoYesNoEnum, true);
  /**
   * Representation of the {@link ServiceCallScheduling.reminderDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReminderDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.reminderTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reminderTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReminderTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.displayInCalendar} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayInCalendar: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DisplayInCalendar', BoYesNoEnum, true);
  /**
   * Representation of the {@link ServiceCallScheduling.isUnscheduled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isUnscheduled: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsUnscheduled', BoYesNoEnum, true);
  /**
   * Representation of the {@link ServiceCallScheduling.location} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallScheduling.addressName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.addressText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressText', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.street} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.city} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.room} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  room: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.address2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address2', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.address3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address3', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.addressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.streetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetNo', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.zipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.block} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.county} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.taxOffice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxOffice', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.globalLocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GlobalLocNum', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.isClosed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isClosed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsClosed', BoYesNoEnum, true);
  /**
   * Representation of the {@link ServiceCallScheduling.remark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remark: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remark', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.addressTypeBs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressTypeBs: EnumField<
    EntityT,
    DeSerializersT,
    BoAddressType,
    true,
    false
  > = this._fieldBuilder.buildEnumField('AddressTypeBS', BoAddressType, true);
  /**
   * Representation of the {@link ServiceCallScheduling.signatureName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SignatureName', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.salesOrders} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesOrders: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SalesOrders', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallScheduling.checkInDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckInDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkInTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckInTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkInLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckInLocation',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkInLatitude} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLatitude: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckInLatitude',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkInLongitude} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkInLongitude: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckInLongitude',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkOutDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkOutDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckOutDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ServiceCallScheduling.checkOutTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkOutTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckOutTime',
    'Edm.TimeOfDay',
    true
  );

  /**
   * Creates an instance of ServiceCallSchedulingField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ServiceCallScheduling,
      fieldOptions
    );
  }
}

export namespace ServiceCallScheduling {
  /**
   * Metadata information on all properties of the `ServiceCallScheduling` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallScheduling>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Technician',
      name: 'technician',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HandledBy',
      name: 'handledBy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'StartTime',
      name: 'startTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'EndDate',
      name: 'endDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EndTime',
      name: 'endTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'Duration',
      name: 'duration',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualDuration',
      name: 'actualDuration',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DurationType',
      name: 'durationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActualDurationType',
      name: 'actualDurationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Reminder',
      name: 'reminder',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReminderPeriod',
      name: 'reminderPeriod',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ReminderType',
      name: 'reminderType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReminderSent',
      name: 'reminderSent',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReminderDate',
      name: 'reminderDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ReminderTime',
      name: 'reminderTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'DisplayInCalendar',
      name: 'displayInCalendar',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsUnscheduled',
      name: 'isUnscheduled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Location',
      name: 'location',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AddressName',
      name: 'addressName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressText',
      name: 'addressText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Street',
      name: 'street',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'City',
      name: 'city',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Room',
      name: 'room',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'State',
      name: 'state',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Country',
      name: 'country',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address2',
      name: 'address2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address3',
      name: 'address3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressType',
      name: 'addressType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StreetNo',
      name: 'streetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ZipCode',
      name: 'zipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Block',
      name: 'block',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'County',
      name: 'county',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxOffice',
      name: 'taxOffice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GlobalLocNum',
      name: 'globalLocNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IsClosed',
      name: 'isClosed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Remark',
      name: 'remark',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressTypeBS',
      name: 'addressTypeBs',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SignatureName',
      name: 'signatureName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesOrders',
      name: 'salesOrders',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckInDate',
      name: 'checkInDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CheckInTime',
      name: 'checkInTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'CheckInLocation',
      name: 'checkInLocation',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckInLatitude',
      name: 'checkInLatitude',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckInLongitude',
      name: 'checkInLongitude',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckOutDate',
      name: 'checkOutDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CheckOutTime',
      name: 'checkOutTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    }
  ];
}
