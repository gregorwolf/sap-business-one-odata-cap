/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PurchaseTaxInvoiceOperationCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PurchaseTaxInvoiceOperationCode> {
  /**
   * Representation of the [[PurchaseTaxInvoiceOperationCode.opCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpCode', this, 'Edm.Int32');

  /**
   * Creates an instance of PurchaseTaxInvoiceOperationCodeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PurchaseTaxInvoiceOperationCode);
  }
}

export namespace PurchaseTaxInvoiceOperationCode {
  /**
   * Metadata information on all properties of the `PurchaseTaxInvoiceOperationCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PurchaseTaxInvoiceOperationCode>[] = [{
    originalName: 'OpCode',
    name: 'opCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PurchaseTaxInvoiceOperationCode {
    return deserializeComplexTypeV4(json, PurchaseTaxInvoiceOperationCode);
  }
}
