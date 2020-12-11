/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TrackingNoteItem
 */
export interface TrackingNoteItem {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: number;
  /**
   * Tracking Note Line Number.
   * @nullable
   */
  trackingNoteLineNumber?: number;
  /**
   * Item Ccd Number.
   * @nullable
   */
  itemCcdNumber?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: string;
  /**
   * Customs Group Code.
   * @nullable
   */
  customsGroupCode?: number;
  /**
   * Accumulated Ap Quantity.
   * @nullable
   */
  accumulatedApQuantity?: number;
  /**
   * Accumulated Ar Quantity.
   * @nullable
   */
  accumulatedArQuantity?: number;
  /**
   * Accumulated Relocated Quantity.
   * @nullable
   */
  accumulatedRelocatedQuantity?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteItem.build]] instead.
 */
export function createTrackingNoteItem(json: any): TrackingNoteItem {
  return TrackingNoteItem.build(json);
}

/**
 * TrackingNoteItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteItem> {
  /**
   * Representation of the [[TrackingNoteItem.trackingNoteNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteItem.trackingNoteLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteItem.itemCcdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCcdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCCDNumber', this, 'Edm.String');
  /**
   * Representation of the [[TrackingNoteItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[TrackingNoteItem.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[TrackingNoteItem.countryOfOrigin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryOfOrigin: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryOfOrigin', this, 'Edm.String');
  /**
   * Representation of the [[TrackingNoteItem.customsGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsGroupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CustomsGroupCode', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteItem.accumulatedApQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedApQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumulatedAPQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[TrackingNoteItem.accumulatedArQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedArQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumulatedARQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[TrackingNoteItem.accumulatedRelocatedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumulatedRelocatedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumulatedRelocatedQuantity', this, 'Edm.Double');

  /**
   * Creates an instance of TrackingNoteItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TrackingNoteItem);
  }
}

export namespace TrackingNoteItem {
  /**
   * Metadata information on all properties of the `TrackingNoteItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteItem>[] = [{
    originalName: 'TrackingNoteNumber',
    name: 'trackingNoteNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TrackingNoteLineNumber',
    name: 'trackingNoteLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCCDNumber',
    name: 'itemCcdNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CountryOfOrigin',
    name: 'countryOfOrigin',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomsGroupCode',
    name: 'customsGroupCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccumulatedAPQuantity',
    name: 'accumulatedApQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumulatedARQuantity',
    name: 'accumulatedArQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumulatedRelocatedQuantity',
    name: 'accumulatedRelocatedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TrackingNoteItem {
    return deserializeComplexTypeV4(json, TrackingNoteItem);
  }
}
