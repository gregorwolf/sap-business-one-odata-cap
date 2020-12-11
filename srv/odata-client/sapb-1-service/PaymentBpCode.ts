/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PaymentBpCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentBpCode> {
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

  /**
   * Creates an instance of PaymentBpCodeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentBpCode);
  }
}

export namespace PaymentBpCode {
  /**
   * Metadata information on all properties of the `PaymentBpCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentBpCode>[] = [{
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentBpCode {
    return deserializeComplexTypeV4(json, PaymentBpCode);
  }
}
