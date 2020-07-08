/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentLinesBinAllocation
 */
export interface DocumentLinesBinAllocation {
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
 * @deprecated Since v1.6.0. Use [[DocumentLinesBinAllocation.build]] instead.
 */
export function createDocumentLinesBinAllocation(json: any): DocumentLinesBinAllocation {
  return DocumentLinesBinAllocation.build(json);
}

/**
 * DocumentLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLinesBinAllocationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentLinesBinAllocation.binAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLinesBinAllocation.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLinesBinAllocation.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');
}

export namespace DocumentLinesBinAllocation {
  export function build(json: { [keys: string]: FieldType }): DocumentLinesBinAllocation {
    return createComplexType(json, {
      BinAbsEntry: (binAbsEntry: number) => ({ binAbsEntry: edmToTs(binAbsEntry, 'Edm.Int32') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      SerialAndBatchNumbersBaseLine: (serialAndBatchNumbersBaseLine: number) => ({ serialAndBatchNumbersBaseLine: edmToTs(serialAndBatchNumbersBaseLine, 'Edm.Int32') }),
      BaseLineNumber: (baseLineNumber: number) => ({ baseLineNumber: edmToTs(baseLineNumber, 'Edm.Int32') })
    });
  }
}
