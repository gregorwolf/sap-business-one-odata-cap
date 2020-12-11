/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BatchNumber
 */
export interface BatchNumber {
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
   * Manufacturing Date.
   * @nullable
   */
  manufacturingDate?: Moment;
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
 * @deprecated Since v1.6.0. Use [[BatchNumber.build]] instead.
 */
export function createBatchNumber(json: any): BatchNumber {
  return BatchNumber.build(json);
}

/**
 * BatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BatchNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BatchNumber> {
  /**
   * Representation of the [[BatchNumber.batchNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchNumber', this, 'Edm.String');
  /**
   * Representation of the [[BatchNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[BatchNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[BatchNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BatchNumber.manufacturingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufacturingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BatchNumber.addmisionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addmisionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AddmisionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BatchNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[BatchNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[BatchNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[BatchNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BatchNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[BatchNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');

  /**
   * Creates an instance of BatchNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BatchNumber);
  }
}

export namespace BatchNumber {
  /**
   * Metadata information on all properties of the `BatchNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BatchNumber>[] = [{
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
    originalName: 'ManufacturingDate',
    name: 'manufacturingDate',
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
  export function build(json: { [keys: string]: FieldType }): BatchNumber {
    return deserializeComplexTypeV4(json, BatchNumber);
  }
}
