/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class TaxInvoiceReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxInvoiceReportParams> {
  /**
   * Representation of the [[TaxInvoiceReportParams.taxInvoiceReportNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxInvoiceReportNumber', this, 'Edm.String');

  /**
   * Creates an instance of TaxInvoiceReportParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxInvoiceReportParams);
  }
}

export namespace TaxInvoiceReportParams {
  /**
   * Metadata information on all properties of the `TaxInvoiceReportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxInvoiceReportParams>[] = [{
    originalName: 'TaxInvoiceReportNumber',
    name: 'taxInvoiceReportNumber',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxInvoiceReportParams {
    return deserializeComplexTypeV4(json, TaxInvoiceReportParams);
  }
}
