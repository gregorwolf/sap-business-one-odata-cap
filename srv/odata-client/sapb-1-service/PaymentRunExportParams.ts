/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentRunExportParams
 */
export interface PaymentRunExportParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportParams.build]] instead.
 */
export function createPaymentRunExportParams(json: any): PaymentRunExportParams {
  return PaymentRunExportParams.build(json);
}

/**
 * PaymentRunExportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentRunExportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentRunExportParams> {
  /**
   * Representation of the [[PaymentRunExportParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of PaymentRunExportParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentRunExportParams);
  }
}

export namespace PaymentRunExportParams {
  /**
   * Metadata information on all properties of the `PaymentRunExportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentRunExportParams>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentRunExportParams {
    return deserializeComplexTypeV4(json, PaymentRunExportParams);
  }
}
