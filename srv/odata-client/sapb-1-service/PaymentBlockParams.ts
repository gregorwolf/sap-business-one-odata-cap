/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentBlockParams
 */
export interface PaymentBlockParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Payment Block Code.
   * @nullable
   */
  paymentBlockCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentBlockParams.build]] instead.
 */
export function createPaymentBlockParams(json: any): PaymentBlockParams {
  return PaymentBlockParams.build(json);
}

/**
 * PaymentBlockParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentBlockParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentBlockParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentBlockParams.paymentBlockCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentBlockCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentBlockCode', this, 'Edm.String');
}

export namespace PaymentBlockParams {
  export function build(json: { [keys: string]: FieldType }): PaymentBlockParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      PaymentBlockCode: (paymentBlockCode: string) => ({ paymentBlockCode: edmToTs(paymentBlockCode, 'Edm.String') })
    });
  }
}
