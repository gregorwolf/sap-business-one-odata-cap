/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * CheckInParams
 */
export interface CheckInParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Time.
   * @nullable
   */
  time?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Latitude.
   * @nullable
   */
  latitude?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Longitude.
   * @nullable
   */
  longitude?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Handled By Employee.
   * @nullable
   */
  handledByEmployee?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CheckInParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckInParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CheckInParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CheckInParams.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CheckInParams.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link CheckInParams.time} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Time', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link CheckInParams.location} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Location', 'Edm.String', true);
  /**
   * Representation of the {@link CheckInParams.latitude} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  latitude: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Latitude', 'Edm.String', true);
  /**
   * Representation of the {@link CheckInParams.longitude} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  longitude: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Longitude', 'Edm.String', true);
  /**
   * Representation of the {@link CheckInParams.handledBy} property for query construction.
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
   * Representation of the {@link CheckInParams.handledByEmployee} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  handledByEmployee: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'HandledByEmployee',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of CheckInParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CheckInParams, fieldOptions);
  }
}

export namespace CheckInParams {
  /**
   * Metadata information on all properties of the `CheckInParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CheckInParams>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Time',
      name: 'time',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'Location',
      name: 'location',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Latitude',
      name: 'latitude',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Longitude',
      name: 'longitude',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'HandledBy',
      name: 'handledBy',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HandledByEmployee',
      name: 'handledByEmployee',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
