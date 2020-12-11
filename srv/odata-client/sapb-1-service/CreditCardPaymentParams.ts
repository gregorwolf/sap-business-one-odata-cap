/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CreditCardPaymentParams
 */
export interface CreditCardPaymentParams {
  /**
   * Due Date Code.
   * @nullable
   */
  dueDateCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditCardPaymentParams.build]] instead.
 */
export function createCreditCardPaymentParams(json: any): CreditCardPaymentParams {
  return CreditCardPaymentParams.build(json);
}

/**
 * CreditCardPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditCardPaymentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditCardPaymentParams> {
  /**
   * Representation of the [[CreditCardPaymentParams.dueDateCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDateCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DueDateCode', this, 'Edm.String');

  /**
   * Creates an instance of CreditCardPaymentParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CreditCardPaymentParams);
  }
}

export namespace CreditCardPaymentParams {
  /**
   * Metadata information on all properties of the `CreditCardPaymentParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditCardPaymentParams>[] = [{
    originalName: 'DueDateCode',
    name: 'dueDateCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CreditCardPaymentParams {
    return deserializeComplexTypeV4(json, CreditCardPaymentParams);
  }
}
