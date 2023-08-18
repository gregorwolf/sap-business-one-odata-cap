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
 * InventoryCountingSerialNumber
 */
export interface InventoryCountingSerialNumber<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
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
   * Reception Date.
   * @nullable
   */
  receptionDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Warranty Start.
   * @nullable
   */
  warrantyStart?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Warranty End.
   * @nullable
   */
  warrantyEnd?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
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
   * Batch Id.
   * @nullable
   */
  batchId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * System Serial Number.
   * @nullable
   */
  systemSerialNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
}

/**
 * InventoryCountingSerialNumberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingSerialNumberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryCountingSerialNumber,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryCountingSerialNumber.manufacturerSerialNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.internalSerialNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.expiryDate} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.manufactureDate} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.receptionDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receptionDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReceptionDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InventoryCountingSerialNumber.warrantyStart} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyStart: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WarrantyStart',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InventoryCountingSerialNumber.warrantyEnd} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyEnd: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WarrantyEnd',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InventoryCountingSerialNumber.location} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.notes} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.batchId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BatchID', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryCountingSerialNumber.systemSerialNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.baseLineNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.quantity} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.documentEntry} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.counterType} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.counterId} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.multipleCounterRole} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.trackingNote} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.trackingNoteLine} property for query construction.
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
   * Representation of the {@link InventoryCountingSerialNumber.itemCode} property for query construction.
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
   * Creates an instance of InventoryCountingSerialNumberField.
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
      InventoryCountingSerialNumber,
      fieldOptions
    );
  }
}

export namespace InventoryCountingSerialNumber {
  /**
   * Metadata information on all properties of the `InventoryCountingSerialNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingSerialNumber>[] =
    [
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
        originalName: 'ReceptionDate',
        name: 'receptionDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'WarrantyStart',
        name: 'warrantyStart',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'WarrantyEnd',
        name: 'warrantyEnd',
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
        originalName: 'BatchID',
        name: 'batchId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SystemSerialNumber',
        name: 'systemSerialNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseLineNumber',
        name: 'baseLineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Quantity',
        name: 'quantity',
        type: 'Edm.Double',
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
      }
    ];
}
