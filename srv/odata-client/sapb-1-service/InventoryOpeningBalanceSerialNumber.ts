/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryOpeningBalanceSerialNumber
 */
export interface InventoryOpeningBalanceSerialNumber {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
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
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceSerialNumber.build]] instead.
 */
export function createInventoryOpeningBalanceSerialNumber(json: any): InventoryOpeningBalanceSerialNumber {
  return InventoryOpeningBalanceSerialNumber.build(json);
}

/**
 * InventoryOpeningBalanceSerialNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryOpeningBalanceSerialNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryOpeningBalanceSerialNumber> {
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.manufacturerSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturerSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ManufacturerSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.internalSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalSerialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InternalSerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.expiryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ExpiryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.manufactureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ManufactureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.receptionDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receptionDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReceptionDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.warrantyStart]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyStart: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyStart', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.warrantyEnd]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warrantyEnd: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('WarrantyEnd', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Location', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.notes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  notes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Notes', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.batchId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BatchID', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.systemSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemSerialNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SystemSerialNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.trackingNote]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNote: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNote', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceSerialNumber.trackingNoteLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLine', this, 'Edm.Int32');

  /**
   * Creates an instance of InventoryOpeningBalanceSerialNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryOpeningBalanceSerialNumber);
  }
}

export namespace InventoryOpeningBalanceSerialNumber {
  /**
   * Metadata information on all properties of the `InventoryOpeningBalanceSerialNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceSerialNumber>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
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
  export function build(json: { [keys: string]: FieldType }): InventoryOpeningBalanceSerialNumber {
    return deserializeComplexTypeV4(json, InventoryOpeningBalanceSerialNumber);
  }
}
