/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * StockTransferLinesBinAllocation
 */
export interface StockTransferLinesBinAllocation {
  /**
   * Bin Abs Entry.
   * @nullable
   */
  binAbsEntry?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Serial And Batch Numbers Base Line.
   * @nullable
   */
  serialAndBatchNumbersBaseLine?: number;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferLinesBinAllocation.build]] instead.
 */
export function createStockTransferLinesBinAllocation(json: any): StockTransferLinesBinAllocation {
  return StockTransferLinesBinAllocation.build(json);
}

/**
 * StockTransferLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferLinesBinAllocationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[StockTransferLinesBinAllocation.binAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
}

export namespace StockTransferLinesBinAllocation {
  export function build(json: { [keys: string]: FieldType }): StockTransferLinesBinAllocation {
    return createComplexType(json, {
      BinAbsEntry: (binAbsEntry: number) => ({ binAbsEntry: edmToTs(binAbsEntry, 'Edm.Int32') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      SerialAndBatchNumbersBaseLine: (serialAndBatchNumbersBaseLine: number) => ({ serialAndBatchNumbersBaseLine: edmToTs(serialAndBatchNumbersBaseLine, 'Edm.Int32') }),
      BaseLineNumber: (baseLineNumber: number) => ({ baseLineNumber: edmToTs(baseLineNumber, 'Edm.Int32') })
    });
  }
}
