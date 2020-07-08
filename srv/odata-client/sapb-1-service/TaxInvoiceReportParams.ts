/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxInvoiceReportParams
 */
export interface TaxInvoiceReportParams {
  /**
   * Tax Invoice Report Number.
   * @nullable
   */
  taxInvoiceReportNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportParams.build]] instead.
 */
export function createTaxInvoiceReportParams(json: any): TaxInvoiceReportParams {
  return TaxInvoiceReportParams.build(json);
}

/**
 * TaxInvoiceReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxInvoiceReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxInvoiceReportParams.taxInvoiceReportNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxInvoiceReportNumber', this, 'Edm.String');
}

export namespace TaxInvoiceReportParams {
  export function build(json: { [keys: string]: FieldType }): TaxInvoiceReportParams {
    return createComplexType(json, {
      TaxInvoiceReportNumber: (taxInvoiceReportNumber: string) => ({ taxInvoiceReportNumber: edmToTs(taxInvoiceReportNumber, 'Edm.String') })
    });
  }
}
