/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SerialNumber
 */
export interface SerialNumber {
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
 * @deprecated Since v1.6.0. Use [[SerialNumber.build]] instead.
 */
export function createSerialNumber(json: any): SerialNumber {
  return SerialNumber.build(json);
}

/**
 * SerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SerialNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SerialNumber> {
  /**
   * Representation of the [[SerialNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[SerialNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[SerialNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SerialNumber.manufactureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufactureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SerialNumber.receptionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receptionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReceptionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SerialNumber.warrantyStart]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyStart: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyStart', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SerialNumber.warrantyEnd]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyEnd: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyEnd', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SerialNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[SerialNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[SerialNumber.batchId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchID', this, 'Edm.String');
  /**
   * Representation of the [[SerialNumber.systemSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemSerialNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemSerialNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SerialNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SerialNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[SerialNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[SerialNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');

  /**
   * Creates an instance of SerialNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SerialNumber);
  }
}

export namespace SerialNumber {
  /**
   * Metadata information on all properties of the `SerialNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SerialNumber>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): SerialNumber {
    return deserializeComplexTypeV4(json, SerialNumber);
  }
}
