/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Counter Id.
   * @nullable
   */
  counterId?: number;
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
export class InventoryCountingSerialNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[InventoryCountingSerialNumber.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
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
}

export namespace InventoryCountingSerialNumber {
  export function build(json: { [keys: string]: FieldType }): InventoryCountingSerialNumber {
    return createComplexType(json, {
      ManufacturerSerialNumber: (manufacturerSerialNumber: string) => ({ manufacturerSerialNumber: edmToTs(manufacturerSerialNumber, 'Edm.String') }),
      InternalSerialNumber: (internalSerialNumber: string) => ({ internalSerialNumber: edmToTs(internalSerialNumber, 'Edm.String') }),
      ExpiryDate: (expiryDate: Moment) => ({ expiryDate: edmToTs(expiryDate, 'Edm.DateTimeOffset') }),
      ManufactureDate: (manufactureDate: Moment) => ({ manufactureDate: edmToTs(manufactureDate, 'Edm.DateTimeOffset') }),
      ReceptionDate: (receptionDate: Moment) => ({ receptionDate: edmToTs(receptionDate, 'Edm.DateTimeOffset') }),
      WarrantyStart: (warrantyStart: Moment) => ({ warrantyStart: edmToTs(warrantyStart, 'Edm.DateTimeOffset') }),
      WarrantyEnd: (warrantyEnd: Moment) => ({ warrantyEnd: edmToTs(warrantyEnd, 'Edm.DateTimeOffset') }),
      Location: (location: string) => ({ location: edmToTs(location, 'Edm.String') }),
      Notes: (notes: string) => ({ notes: edmToTs(notes, 'Edm.String') }),
      BatchID: (batchId: string) => ({ batchId: edmToTs(batchId, 'Edm.String') }),
      SystemSerialNumber: (systemSerialNumber: number) => ({ systemSerialNumber: edmToTs(systemSerialNumber, 'Edm.Int32') }),
      BaseLineNumber: (baseLineNumber: number) => ({ baseLineNumber: edmToTs(baseLineNumber, 'Edm.Int32') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      CounterID: (counterId: number) => ({ counterId: edmToTs(counterId, 'Edm.Int32') }),
      TrackingNote: (trackingNote: number) => ({ trackingNote: edmToTs(trackingNote, 'Edm.Int32') }),
      TrackingNoteLine: (trackingNoteLine: number) => ({ trackingNoteLine: edmToTs(trackingNoteLine, 'Edm.Int32') })
    });
  }
}
