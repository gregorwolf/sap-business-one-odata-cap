/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
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
 * InventoryCountingBatchNumber
 */
export interface InventoryCountingBatchNumber<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Batch Number.
   * @nullable
   */
  batchNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Manufacture Date.
   * @nullable
   */
  manufactureDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
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
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
 * InventoryCountingBatchNumberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingBatchNumberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryCountingBatchNumber,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryCountingBatchNumber.batchNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BatchNumber', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryCountingBatchNumber.manufacturerSerialNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.internalSerialNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.expiryDate} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.manufactureDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManufactureDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InventoryCountingBatchNumber.addmisionDate} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.location} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.notes} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.quantity} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.baseLineNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingBatchNumber.counterType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: EnumField<
    EntityT,
    DeSerializersT,
    CounterTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CounterType', CounterTypeEnum, true);
  /**
   * Representation of the {@link InventoryCountingBatchNumber.counterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterID', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingBatchNumber.multipleCounterRole} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: EnumField<
    EntityT,
    DeSerializersT,
    MultipleCounterRoleEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MultipleCounterRole',
    MultipleCounterRoleEnum,
    true
  );
  /**
   * Representation of the {@link InventoryCountingBatchNumber.trackingNote} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.trackingNoteLine} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.itemCode} property for query construction.
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
   * Representation of the {@link InventoryCountingBatchNumber.systemSerialNumber} property for query construction.
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
   * Creates an instance of InventoryCountingBatchNumberField.
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
      InventoryCountingBatchNumber,
      fieldOptions
    );
  }
}

export namespace InventoryCountingBatchNumber {
  /**
   * Metadata information on all properties of the `InventoryCountingBatchNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingBatchNumber>[] =
    [
      {
        originalName: 'BatchNumber',
        name: 'batchNumber',
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
        originalName: 'ManufactureDate',
        name: 'manufactureDate',
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
        originalName: 'DocumentEntry',
        name: 'documentEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CounterType',
        name: 'counterType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'CounterID',
        name: 'counterId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'MultipleCounterRole',
        name: 'multipleCounterRole',
        type: 'Edm.Enum',
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
