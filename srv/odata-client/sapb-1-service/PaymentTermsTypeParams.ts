/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PaymentTermsTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentTermsTypeParams.groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupNumber', this, 'Edm.Int32');
}

export namespace PaymentTermsTypeParams {
  export function build(json: { [keys: string]: FieldType }): PaymentTermsTypeParams {
    return createComplexType(json, {
      GroupNumber: (groupNumber: number) => ({ groupNumber: edmToTs(groupNumber, 'Edm.Int32') })
    });
  }
}
