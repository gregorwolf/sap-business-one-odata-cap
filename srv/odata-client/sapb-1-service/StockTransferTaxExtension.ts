/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * StockTransferTaxExtension
 */
export interface StockTransferTaxExtension {
  /**
   * Form Number.
   * @nullable
   */
  formNumber?: string;
  /**
   * Transaction Category.
   * @nullable
   */
  transactionCategory?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferTaxExtension.build]] instead.
 */
export function createStockTransferTaxExtension(json: any): StockTransferTaxExtension {
  return StockTransferTaxExtension.build(json);
}

/**
 * StockTransferTaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferTaxExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[StockTransferTaxExtension.formNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormNumber', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferTaxExtension.transactionCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionCategory: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TransactionCategory', this, 'Edm.String');
}

export namespace StockTransferTaxExtension {
  export function build(json: { [keys: string]: FieldType }): StockTransferTaxExtension {
    return createComplexType(json, {
      FormNumber: (formNumber: string) => ({ formNumber: edmToTs(formNumber, 'Edm.String') }),
      TransactionCategory: (transactionCategory: string) => ({ transactionCategory: edmToTs(transactionCategory, 'Edm.String') })
    });
  }
}
