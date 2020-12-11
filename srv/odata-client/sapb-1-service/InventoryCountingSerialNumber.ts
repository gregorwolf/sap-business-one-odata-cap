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
 * InventoryCountingSerialNumber
 */
export interface InventoryCountingSerialNumber {
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
   * Reception Date.
   * @nullable
   */
  receptionDate?: Moment;
  /**
   * Warranty Start.
   * @nullable
   */
  warrantyStart?: Moment;
  /**
   * Warranty End.
   * @nullable
   */
  warrantyEnd?: Moment;
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
   * Batch Id.
   * @nullable
   */
  batchId?: string;
  /**
   * System Serial Number.
   * @nullable
   */
  systemSerialNumber?: number;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
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
 * @deprecated Since v1.6.0. Use [[InventoryCountingSerialNumber.build]] instead.
 */
export function createInventoryCountingSerialNumber(json: any): InventoryCountingSerialNumber {
  return InventoryCountingSerialNumber.build(json);
}

/**
 * InventoryCountingSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingSerialNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingSerialNumber> {
  /**
   * Representation of the [[InventoryCountingSerialNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingSerialNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingSerialNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingSerialNumber.manufactureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufactureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingSerialNumber.receptionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receptionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReceptionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingSerialNumber.warrantyStart]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyStart: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyStart', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingSerialNumber.warrantyEnd]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyEnd: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyEnd', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryCountingSerialNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingSerialNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingSerialNumber.batchId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchID', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingSerialNumber.systemSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemSerialNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemSerialNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingSerialNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingSerialNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingSerialNumber.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingSerialNumber.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[InventoryCountingSerialNumber.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingSerialNumber.multipleCounterRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('MultipleCounterRole', this);
  /**
   * Representation of the [[InventoryCountingSerialNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingSerialNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');

  /**
   * Creates an instance of InventoryCountingSerialNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryCountingSerialNumber);
  }
}

export namespace InventoryCountingSerialNumber {
  /**
   * Metadata information on all properties of the `InventoryCountingSerialNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingSerialNumber>[] = [{
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
    originalName: 'ReceptionDate',
    name: 'receptionDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'WarrantyStart',
    name: 'warrantyStart',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'WarrantyEnd',
    name: 'warrantyEnd',
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
    originalName: 'BatchID',
    name: 'batchId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SystemSerialNumber',
    name: 'systemSerialNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseLineNumber',
    name: 'baseLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
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
  export function build(json: { [keys: string]: FieldType }): InventoryCountingSerialNumber {
    return deserializeComplexTypeV4(json, InventoryCountingSerialNumber);
  }
}
