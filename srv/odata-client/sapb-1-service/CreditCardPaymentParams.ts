/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CreditCardPaymentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreditCardPaymentParams.dueDateCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDateCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DueDateCode', this, 'Edm.String');
}

export namespace CreditCardPaymentParams {
  export function build(json: { [keys: string]: FieldType }): CreditCardPaymentParams {
    return createComplexType(json, {
      DueDateCode: (dueDateCode: string) => ({ dueDateCode: edmToTs(dueDateCode, 'Edm.String') })
    });
  }
}
