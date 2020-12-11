/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesTaxInvoiceLine
 */
export interface SalesTaxInvoiceLine {
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
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceLine.build]] instead.
 */
export function createSalesTaxInvoiceLine(json: any): SalesTaxInvoiceLine {
  return SalesTaxInvoiceLine.build(json);
}

/**
 * SalesTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxInvoiceLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxInvoiceLine> {
  /**
   * Representation of the [[SalesTaxInvoiceLine.refEntry1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RefEntry1', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesTaxInvoiceLine.refEntry2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RefEntry2', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesTaxInvoiceLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesTaxInvoiceLine);
  }
}

export namespace SalesTaxInvoiceLine {
  /**
   * Metadata information on all properties of the `SalesTaxInvoiceLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxInvoiceLine>[] = [{
    originalName: 'RefEntry1',
    name: 'refEntry1',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RefEntry2',
    name: 'refEntry2',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesTaxInvoiceLine {
    return deserializeComplexTypeV4(json, SalesTaxInvoiceLine);
  }
}
