/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FifoLayer
 */
export interface FifoLayer {
  /**
   * Transaction Sequence Num.
   * @nullable
   */
  transactionSequenceNum?: number;
  /**
   * Layer Id.
   * @nullable
   */
  layerId?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: number;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[FifoLayer.build]] instead.
 */
export function createFifoLayer(json: any): FifoLayer {
  return FifoLayer.build(json);
}

/**
 * FifoLayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FifoLayerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FifoLayer> {
  /**
   * Representation of the [[FifoLayer.transactionSequenceNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionSequenceNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionSequenceNum', this, 'Edm.Int32');
  /**
   * Representation of the [[FifoLayer.layerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layerId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LayerID', this, 'Edm.Int32');
  /**
   * Representation of the [[FifoLayer.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[FifoLayer.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[FifoLayer.lineTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineTotal', this, 'Edm.Double');
  /**
   * Representation of the [[FifoLayer.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');

  /**
   * Creates an instance of FifoLayerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FifoLayer);
  }
}

export namespace FifoLayer {
  /**
   * Metadata information on all properties of the `FifoLayer` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FifoLayer>[] = [{
    originalName: 'TransactionSequenceNum',
    name: 'transactionSequenceNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LayerID',
    name: 'layerId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineTotal',
    name: 'lineTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FifoLayer {
    return deserializeComplexTypeV4(json, FifoLayer);
  }
}
