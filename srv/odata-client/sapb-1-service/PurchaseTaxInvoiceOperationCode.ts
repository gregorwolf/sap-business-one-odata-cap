/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PurchaseTaxInvoiceOperationCode
 */
export interface PurchaseTaxInvoiceOperationCode {
  /**
   * Op Code.
   * @nullable
   */
  opCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceOperationCode.build]] instead.
 */
export function createPurchaseTaxInvoiceOperationCode(json: any): PurchaseTaxInvoiceOperationCode {
  return PurchaseTaxInvoiceOperationCode.build(json);
}

/**
 * PurchaseTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PurchaseTaxInvoiceOperationCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PurchaseTaxInvoiceOperationCode.opCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpCode', this, 'Edm.Int32');
}

export namespace PurchaseTaxInvoiceOperationCode {
  export function build(json: { [keys: string]: FieldType }): PurchaseTaxInvoiceOperationCode {
    return createComplexType(json, {
      OpCode: (opCode: number) => ({ opCode: edmToTs(opCode, 'Edm.Int32') })
    });
  }
}
