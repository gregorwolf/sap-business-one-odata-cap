/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentBpCode
 */
export interface PaymentBpCode {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentBpCode.build]] instead.
 */
export function createPaymentBpCode(json: any): PaymentBpCode {
  return PaymentBpCode.build(json);
}

/**
 * PaymentBpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentBpCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentBpCode.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentBpCode.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
}

export namespace PaymentBpCode {
  export function build(json: { [keys: string]: FieldType }): PaymentBpCode {
    return createComplexType(json, {
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') })
    });
  }
}
