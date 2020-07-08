/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PurchaseTaxInvoiceLine
 */
export interface PurchaseTaxInvoiceLine {
  /**
   * Ref Entry 1.
   * @nullable
   */
  refEntry1?: number;
  /**
   * Ref Entry 2.
   * @nullable
   */
  refEntry2?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceLine.build]] instead.
 */
export function createPurchaseTaxInvoiceLine(json: any): PurchaseTaxInvoiceLine {
  return PurchaseTaxInvoiceLine.build(json);
}

/**
 * PurchaseTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PurchaseTaxInvoiceLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PurchaseTaxInvoiceLine.refEntry1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RefEntry1', this, 'Edm.Int32');
  /**
   * Representation of the [[PurchaseTaxInvoiceLine.refEntry2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RefEntry2', this, 'Edm.Int32');
}

export namespace PurchaseTaxInvoiceLine {
  export function build(json: { [keys: string]: FieldType }): PurchaseTaxInvoiceLine {
    return createComplexType(json, {
      RefEntry1: (refEntry1: number) => ({ refEntry1: edmToTs(refEntry1, 'Edm.Int32') }),
      RefEntry2: (refEntry2: number) => ({ refEntry2: edmToTs(refEntry2, 'Edm.Int32') })
    });
  }
}
