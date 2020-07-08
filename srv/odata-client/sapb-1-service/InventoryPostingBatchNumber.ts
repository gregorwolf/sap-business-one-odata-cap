/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryPostingBatchNumber
 */
export interface InventoryPostingBatchNumber {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
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
 * @deprecated Since v1.6.0. Use [[InventoryPostingBatchNumber.build]] instead.
 */
export function createInventoryPostingBatchNumber(json: any): InventoryPostingBatchNumber {
  return InventoryPostingBatchNumber.build(json);
}

/**
 * InventoryPostingBatchNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingBatchNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryPostingBatchNumber.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingBatchNumber.batchNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingBatchNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingBatchNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingBatchNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryPostingBatchNumber.manufactureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufactureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryPostingBatchNumber.addmisionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addmisionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AddmisionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryPostingBatchNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingBatchNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingBatchNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingBatchNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingBatchNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingBatchNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');
}

export namespace InventoryPostingBatchNumber {
  export function build(json: { [keys: string]: FieldType }): InventoryPostingBatchNumber {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      BatchNumber: (batchNumber: string) => ({ batchNumber: edmToTs(batchNumber, 'Edm.String') }),
      ManufacturerSerialNumber: (manufacturerSerialNumber: string) => ({ manufacturerSerialNumber: edmToTs(manufacturerSerialNumber, 'Edm.String') }),
      InternalSerialNumber: (internalSerialNumber: string) => ({ internalSerialNumber: edmToTs(internalSerialNumber, 'Edm.String') }),
      ExpiryDate: (expiryDate: Moment) => ({ expiryDate: edmToTs(expiryDate, 'Edm.DateTimeOffset') }),
      ManufactureDate: (manufactureDate: Moment) => ({ manufactureDate: edmToTs(manufactureDate, 'Edm.DateTimeOffset') }),
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
