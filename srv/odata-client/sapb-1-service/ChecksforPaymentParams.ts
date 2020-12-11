/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChecksforPaymentParams
 */
export interface ChecksforPaymentParams {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentParams.build]] instead.
 */
export function createChecksforPaymentParams(json: any): ChecksforPaymentParams {
  return ChecksforPaymentParams.build(json);
}

/**
 * ChecksforPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChecksforPaymentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChecksforPaymentParams> {
  /**
   * Representation of the [[ChecksforPaymentParams.checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckKey', this, 'Edm.Int32');

  /**
   * Creates an instance of ChecksforPaymentParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChecksforPaymentParams);
  }
}

export namespace ChecksforPaymentParams {
  /**
   * Metadata information on all properties of the `ChecksforPaymentParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChecksforPaymentParams>[] = [{
    originalName: 'CheckKey',
    name: 'checkKey',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChecksforPaymentParams {
    return deserializeComplexTypeV4(json, ChecksforPaymentParams);
  }
}
