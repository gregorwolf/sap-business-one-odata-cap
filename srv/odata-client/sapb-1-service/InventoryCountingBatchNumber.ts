/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryCountingBatchNumber
 */
export interface InventoryCountingBatchNumber {
  /**
   * Batch Number.
   * @nullable
   */
  batchNumber?: string;
  /**
   * Manufacturer Serial Number.
   * @nullable
   */
  manufacturerSerialNumber?: string;
  /**
   * Internal Serial Number.
   * @nullable
   */
  internalSerialNumber?: string;
  /**
   * Expiry Date.
   * @nullable
   */
  expiryDate?: Moment;
  /**
   * Manufacture Date.
   * @nullable
   */
  manufactureDate?: Moment;
  /**
   * Addmision Date.
   * @nullable
   */
  addmisionDate?: Moment;
  /**
   * Location.
   * @nullable
   */
  location?: string;
  /**
   * Notes.
   * @nullable
   */
  notes?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: number;
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: CounterTypeEnum;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: number;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: MultipleCounterRoleEnum;
  /**
   * Tracking Note.
   * @nullable
   */
  trackingNote?: number;
  /**
   * Tracking Note Line.
   * @nullable
   */
  trackingNoteLine?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingBatchNumber.build]] instead.
 */
export function createInventoryCountingBatchNumber(json: any): InventoryCountingBatchNumber {
  return InventoryCountingBatchNumber.build(json);
}

/**
 * InventoryCountingBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingBatchNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingBatchNumber> {
  /**
   * Representation of the [[InventoryCountingBatchNumber.batchNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingBatchNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingBatchNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingBatchNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingBatchNumber.manufactureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufactureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingBatchNumber.addmisionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addmisionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AddmisionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingBatchNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingBatchNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingBatchNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingBatchNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingBatchNumber.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingBatchNumber.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[InventoryCountingBatchNumber.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingBatchNumber.multipleCounterRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('MultipleCounterRole', this);
  /**
   * Representation of the [[InventoryCountingBatchNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingBatchNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');

  /**
   * Creates an instance of InventoryCountingBatchNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryCountingBatchNumber);
  }
}

export namespace InventoryCountingBatchNumber {
  /**
   * Metadata information on all properties of the `InventoryCountingBatchNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingBatchNumber>[] = [{
    originalName: 'BatchNumber',
    name: 'batchNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ManufacturerSerialNumber',
    name: 'manufacturerSerialNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InternalSerialNumber',
    name: 'internalSerialNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExpiryDate',
    name: 'expiryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ManufactureDate',
    name: 'manufactureDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'AddmisionDate',
    name: 'addmisionDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Location',
    name: 'location',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Notes',
    name: 'notes',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseLineNumber',
    name: 'baseLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CounterType',
    name: 'counterType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CounterID',
    name: 'counterId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MultipleCounterRole',
    name: 'multipleCounterRole',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TrackingNote',
    name: 'trackingNote',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TrackingNoteLine',
    name: 'trackingNoteLine',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InventoryCountingBatchNumber {
    return deserializeComplexTypeV4(json, InventoryCountingBatchNumber);
  }
}
