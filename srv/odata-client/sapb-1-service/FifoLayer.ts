/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class FifoLayerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace FifoLayer {
  export function build(json: { [keys: string]: FieldType }): FifoLayer {
    return createComplexType(json, {
      TransactionSequenceNum: (transactionSequenceNum: number) => ({ transactionSequenceNum: edmToTs(transactionSequenceNum, 'Edm.Int32') }),
      LayerID: (layerId: number) => ({ layerId: edmToTs(layerId, 'Edm.Int32') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      LineTotal: (lineTotal: number) => ({ lineTotal: edmToTs(lineTotal, 'Edm.Double') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') })
    });
  }
}
