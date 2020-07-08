/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BatchNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace BatchNumber {
  export function build(json: { [keys: string]: FieldType }): BatchNumber {
    return createComplexType(json, {
      BatchNumber: (batchNumber: string) => ({ batchNumber: edmToTs(batchNumber, 'Edm.String') }),
      ManufacturerSerialNumber: (manufacturerSerialNumber: string) => ({ manufacturerSerialNumber: edmToTs(manufacturerSerialNumber, 'Edm.String') }),
      InternalSerialNumber: (internalSerialNumber: string) => ({ internalSerialNumber: edmToTs(internalSerialNumber, 'Edm.String') }),
      ExpiryDate: (expiryDate: Moment) => ({ expiryDate: edmToTs(expiryDate, 'Edm.DateTimeOffset') }),
      ManufacturingDate: (manufacturingDate: Moment) => ({ manufacturingDate: edmToTs(manufacturingDate, 'Edm.DateTimeOffset') }),
      AddmisionDate: (addmisionDate: Moment) => ({ addmisionDate: edmToTs(addmisionDate, 'Edm.DateTimeOffset') }),
      Location: (location: string) => ({ location: edmToTs(location, 'Edm.String') }),
      Notes: (notes: string) => ({ notes: edmToTs(notes, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      BaseLineNumber: (baseLineNumber: number) => ({ baseLineNumber: edmToTs(baseLineNumber, 'Edm.Int32') }),
      TrackingNote: (trackingNote: number) => ({ trackingNote: edmToTs(trackingNote, 'Edm.Int32') }),
      TrackingNoteLine: (trackingNoteLine: number) => ({ trackingNoteLine: edmToTs(trackingNoteLine, 'Edm.Int32') })
    });
  }
}
