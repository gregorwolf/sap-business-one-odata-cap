/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentTermsTypeParams
 */
export interface PaymentTermsTypeParams {
  /**
   * Group Number.
   * @nullable
   */
  groupNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentTermsTypeParams.build]] instead.
 */
export function createPaymentTermsTypeParams(json: any): PaymentTermsTypeParams {
  return PaymentTermsTypeParams.build(json);
}

/**
 * PaymentTermsTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentTermsTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentTermsTypeParams> {
  /**
   * Representation of the [[PaymentTermsTypeParams.groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of PaymentTermsTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentTermsTypeParams);
  }
}

export namespace PaymentTermsTypeParams {
  /**
   * Metadata information on all properties of the `PaymentTermsTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentTermsTypeParams>[] = [{
    originalName: 'GroupNumber',
    name: 'groupNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentTermsTypeParams {
    return deserializeComplexTypeV4(json, PaymentTermsTypeParams);
  }
}
