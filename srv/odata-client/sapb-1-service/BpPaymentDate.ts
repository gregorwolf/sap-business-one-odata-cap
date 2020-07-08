/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpPaymentDate
 */
export interface BpPaymentDate {
  /**
   * Payment Date.
   * @nullable
   */
  paymentDate?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpPaymentDate.build]] instead.
 */
export function createBpPaymentDate(json: any): BpPaymentDate {
  return BpPaymentDate.build(json);
}

/**
 * BpPaymentDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPaymentDateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpPaymentDate.paymentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDate: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentDate', this, 'Edm.String');
  /**
   * Representation of the [[BpPaymentDate.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace BpPaymentDate {
  export function build(json: { [keys: string]: FieldType }): BpPaymentDate {
    return createComplexType(json, {
      PaymentDate: (paymentDate: string) => ({ paymentDate: edmToTs(paymentDate, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
