/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxInvoiceParams
 */
export interface TaxInvoiceParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceParams.build]] instead.
 */
export function createTaxInvoiceParams(json: any): TaxInvoiceParams {
  return TaxInvoiceParams.build(json);
}

/**
 * TaxInvoiceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxInvoiceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxInvoiceParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
}

export namespace TaxInvoiceParams {
  export function build(json: { [keys: string]: FieldType }): TaxInvoiceParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') })
    });
  }
}
