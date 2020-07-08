/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesTaxInvoiceOperationCode
 */
export interface SalesTaxInvoiceOperationCode {
  /**
   * Op Code.
   * @nullable
   */
  opCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceOperationCode.build]] instead.
 */
export function createSalesTaxInvoiceOperationCode(json: any): SalesTaxInvoiceOperationCode {
  return SalesTaxInvoiceOperationCode.build(json);
}

/**
 * SalesTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxInvoiceOperationCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesTaxInvoiceOperationCode.opCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpCode', this, 'Edm.Int32');
}

export namespace SalesTaxInvoiceOperationCode {
  export function build(json: { [keys: string]: FieldType }): SalesTaxInvoiceOperationCode {
    return createComplexType(json, {
      OpCode: (opCode: number) => ({ opCode: edmToTs(opCode, 'Edm.Int32') })
    });
  }
}
