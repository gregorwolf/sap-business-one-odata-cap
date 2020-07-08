/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TrackingNoteItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace TrackingNoteItem {
  export function build(json: { [keys: string]: FieldType }): TrackingNoteItem {
    return createComplexType(json, {
      TrackingNoteNumber: (trackingNoteNumber: number) => ({ trackingNoteNumber: edmToTs(trackingNoteNumber, 'Edm.Int32') }),
      TrackingNoteLineNumber: (trackingNoteLineNumber: number) => ({ trackingNoteLineNumber: edmToTs(trackingNoteLineNumber, 'Edm.Int32') }),
      ItemCCDNumber: (itemCcdNumber: string) => ({ itemCcdNumber: edmToTs(itemCcdNumber, 'Edm.String') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      CountryOfOrigin: (countryOfOrigin: string) => ({ countryOfOrigin: edmToTs(countryOfOrigin, 'Edm.String') }),
      CustomsGroupCode: (customsGroupCode: number) => ({ customsGroupCode: edmToTs(customsGroupCode, 'Edm.Int32') }),
      AccumulatedAPQuantity: (accumulatedApQuantity: number) => ({ accumulatedApQuantity: edmToTs(accumulatedApQuantity, 'Edm.Double') }),
      AccumulatedARQuantity: (accumulatedArQuantity: number) => ({ accumulatedArQuantity: edmToTs(accumulatedArQuantity, 'Edm.Double') }),
      AccumulatedRelocatedQuantity: (accumulatedRelocatedQuantity: number) => ({ accumulatedRelocatedQuantity: edmToTs(accumulatedRelocatedQuantity, 'Edm.Double') })
    });
  }
}
