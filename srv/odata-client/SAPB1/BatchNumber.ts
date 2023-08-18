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
 * BatchNumber
 */
export interface BatchNumber<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Batch Number Property.
   * @nullable
   */
  batchNumberProperty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Manufacturer Serial Number.
   * @nullable
   */
  manufacturerSerialNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Serial Number.
   * @nullable
   */
  internalSerialNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expiry Date.
   * @nullable
   */
  expiryDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Manufacturing Date.
   * @nullable
   */
  manufacturingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Addmision Date.
   * @nullable
   */
  addmisionDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Notes.
   * @nullable
   */
  notes?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tracking Note.
   * @nullable
   */
  trackingNote?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tracking Note Line.
   * @nullable
   */
  trackingNoteLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * System Serial Number.
   * @nullable
   */
  systemSerialNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * BatchNumberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BatchNumberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BatchNumber,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BatchNumber.batchNumberProperty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumberProperty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BatchNumberProperty',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BatchNumber.manufacturerSerialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManufacturerSerialNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BatchNumber.internalSerialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InternalSerialNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BatchNumber.expiryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpiryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BatchNumber.manufacturingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManufacturingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BatchNumber.addmisionDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addmisionDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AddmisionDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BatchNumber.location} property for query construction.
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
   * Representation of the {@link BatchNumber.notes} property for query construction.
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
   * Representation of the {@link BatchNumber.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link BatchNumber.baseLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BatchNumber.trackingNote} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TrackingNote', 'Edm.Int32', true);
  /**
   * Representation of the {@link BatchNumber.trackingNoteLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteLine',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BatchNumber.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link BatchNumber.systemSerialNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemSerialNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SystemSerialNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of BatchNumberField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BatchNumber, fieldOptions);
  }
}

export namespace BatchNumber {
  /**
   * Metadata information on all properties of the `BatchNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BatchNumber>[] = [
    {
      originalName: 'BatchNumberProperty',
      name: 'batchNumberProperty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ManufacturerSerialNumber',
      name: 'manufacturerSerialNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InternalSerialNumber',
      name: 'internalSerialNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpiryDate',
      name: 'expiryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ManufacturingDate',
      name: 'manufacturingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'AddmisionDate',
      name: 'addmisionDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Location',
      name: 'location',
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
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseLineNumber',
      name: 'baseLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TrackingNote',
      name: 'trackingNote',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TrackingNoteLine',
      name: 'trackingNoteLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SystemSerialNumber',
      name: 'systemSerialNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
