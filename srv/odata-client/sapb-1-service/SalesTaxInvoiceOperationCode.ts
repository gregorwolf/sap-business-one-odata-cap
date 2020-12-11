/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class SalesTaxInvoiceOperationCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxInvoiceOperationCode> {
  /**
   * Representation of the [[SalesTaxInvoiceOperationCode.opCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpCode', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesTaxInvoiceOperationCodeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesTaxInvoiceOperationCode);
  }
}

export namespace SalesTaxInvoiceOperationCode {
  /**
   * Metadata information on all properties of the `SalesTaxInvoiceOperationCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxInvoiceOperationCode>[] = [{
    originalName: 'OpCode',
    name: 'opCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesTaxInvoiceOperationCode {
    return deserializeComplexTypeV4(json, SalesTaxInvoiceOperationCode);
  }
}
