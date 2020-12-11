/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BillOfExchangeTransactionParams
 */
export interface BillOfExchangeTransactionParams {
  /**
   * Boe Transactionkey.
   * @nullable
   */
  boeTransactionkey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionParams.build]] instead.
 */
export function createBillOfExchangeTransactionParams(json: any): BillOfExchangeTransactionParams {
  return BillOfExchangeTransactionParams.build(json);
}

/**
 * BillOfExchangeTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransactionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransactionParams> {
  /**
   * Representation of the [[BillOfExchangeTransactionParams.boeTransactionkey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeTransactionkey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOETransactionkey', this, 'Edm.Int32');

  /**
   * Creates an instance of BillOfExchangeTransactionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BillOfExchangeTransactionParams);
  }
}

export namespace BillOfExchangeTransactionParams {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransactionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransactionParams>[] = [{
    originalName: 'BOETransactionkey',
    name: 'boeTransactionkey',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransactionParams {
    return deserializeComplexTypeV4(json, BillOfExchangeTransactionParams);
  }
}
