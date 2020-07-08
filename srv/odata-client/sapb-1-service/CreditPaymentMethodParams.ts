/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CreditPaymentMethodParams
 */
export interface CreditPaymentMethodParams {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditPaymentMethodParams.build]] instead.
 */
export function createCreditPaymentMethodParams(json: any): CreditPaymentMethodParams {
  return CreditPaymentMethodParams.build(json);
}

/**
 * CreditPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditPaymentMethodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreditPaymentMethodParams.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentMethodCode', this, 'Edm.Int32');
}

export namespace CreditPaymentMethodParams {
  export function build(json: { [keys: string]: FieldType }): CreditPaymentMethodParams {
    return createComplexType(json, {
      PaymentMethodCode: (paymentMethodCode: number) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.Int32') })
    });
  }
}
