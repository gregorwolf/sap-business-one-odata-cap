/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
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
 * ActivityParams
 */
export interface ActivityParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Notes.
   * @nullable
   */
  notes?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Closed.
   * @nullable
   */
  closed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Activity.
   * @nullable
   */
  activity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inactive Flag.
   * @nullable
   */
  inactiveFlag?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
   * Tentative Flag.
   * @nullable
   */
  tentativeFlag?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * End Due Date.
   * @nullable
   */
  endDueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Sales Opportunity Id.
   * @nullable
   */
  salesOpportunityId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sales Opportunity Line.
   * @nullable
   */
  salesOpportunityLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ActivityParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ActivityParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ActivityParams.activityCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActivityCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ActivityParams.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.notes} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.startDate} property for query construction.
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
   * Representation of the {@link ActivityParams.closed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Closed', BoYesNoEnum, true);
  /**
   * Representation of the {@link ActivityParams.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocType', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.docNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNum', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.priority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: EnumField<EntityT, DeSerializersT, BoMsgPriorities, true, false> =
    this._fieldBuilder.buildEnumField('Priority', BoMsgPriorities, true);
  /**
   * Representation of the {@link ActivityParams.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link ActivityParams.activity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activity: EnumField<EntityT, DeSerializersT, BoActivities, true, false> =
    this._fieldBuilder.buildEnumField('Activity', BoActivities, true);
  /**
   * Representation of the {@link ActivityParams.startTime} property for query construction.
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
   * Representation of the {@link ActivityParams.endTime} property for query construction.
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
   * Representation of the {@link ActivityParams.handledBy} property for query construction.
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
   * Representation of the {@link ActivityParams.city} property for query construction.
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
   * Representation of the {@link ActivityParams.street} property for query construction.
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
   * Representation of the {@link ActivityParams.room} property for query construction.
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
   * Representation of the {@link ActivityParams.inactiveFlag} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inactiveFlag: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('InactiveFlag', BoYesNoEnum, true);
  /**
   * Representation of the {@link ActivityParams.state} property for query construction.
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
   * Representation of the {@link ActivityParams.country} property for query construction.
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
   * Representation of the {@link ActivityParams.tentativeFlag} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tentativeFlag: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TentativeFlag', BoYesNoEnum, true);
  /**
   * Representation of the {@link ActivityParams.endDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ActivityParams.salesOpportunityId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesOpportunityId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesOpportunityId',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ActivityParams.salesOpportunityLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesOpportunityLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesOpportunityLine',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of ActivityParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ActivityParams, fieldOptions);
  }
}

export namespace ActivityParams {
  /**
   * Metadata information on all properties of the `ActivityParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityParams>[] = [
    {
      originalName: 'ActivityCode',
      name: 'activityCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Notes',
      name: 'notes',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Closed',
      name: 'closed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocType',
      name: 'docType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocNum',
      name: 'docNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Priority',
      name: 'priority',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Activity',
      name: 'activity',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StartTime',
      name: 'startTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'EndTime',
      name: 'endTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'HandledBy',
      name: 'handledBy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'City',
      name: 'city',
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
      originalName: 'Room',
      name: 'room',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InactiveFlag',
      name: 'inactiveFlag',
      type: 'Edm.Enum',
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
      originalName: 'TentativeFlag',
      name: 'tentativeFlag',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EndDueDate',
      name: 'endDueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'SalesOpportunityId',
      name: 'salesOpportunityId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SalesOpportunityLine',
      name: 'salesOpportunityLine',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
