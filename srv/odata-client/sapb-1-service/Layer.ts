/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Layer
 */
export interface Layer {
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
   * Doc Number.
   * @nullable
   */
  docNumber?: string;
  /**
   * Entry Date.
   * @nullable
   */
  entryDate?: Moment;
  /**
   * Current Cost.
   * @nullable
   */
  currentCost?: number;
  /**
   * Open Qty.
   * @nullable
   */
  openQty?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Layer.build]] instead.
 */
export function createLayer(json: any): Layer {
  return Layer.build(json);
}

/**
 * LayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LayerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Layer.transactionSequenceNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionSequenceNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionSequenceNum', this, 'Edm.Int32');
  /**
   * Representation of the [[Layer.layerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layerId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LayerID', this, 'Edm.Int32');
  /**
   * Representation of the [[Layer.docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocNumber', this, 'Edm.String');
  /**
   * Representation of the [[Layer.entryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EntryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Layer.currentCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currentCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CurrentCost', this, 'Edm.Double');
  /**
   * Representation of the [[Layer.openQty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openQty: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenQty', this, 'Edm.Double');
}

export namespace Layer {
  export function build(json: { [keys: string]: FieldType }): Layer {
    return createComplexType(json, {
      TransactionSequenceNum: (transactionSequenceNum: number) => ({ transactionSequenceNum: edmToTs(transactionSequenceNum, 'Edm.Int32') }),
      LayerID: (layerId: number) => ({ layerId: edmToTs(layerId, 'Edm.Int32') }),
      DocNumber: (docNumber: string) => ({ docNumber: edmToTs(docNumber, 'Edm.String') }),
      EntryDate: (entryDate: Moment) => ({ entryDate: edmToTs(entryDate, 'Edm.DateTimeOffset') }),
      CurrentCost: (currentCost: number) => ({ currentCost: edmToTs(currentCost, 'Edm.Double') }),
      OpenQty: (openQty: number) => ({ openQty: edmToTs(openQty, 'Edm.Double') })
    });
  }
}
