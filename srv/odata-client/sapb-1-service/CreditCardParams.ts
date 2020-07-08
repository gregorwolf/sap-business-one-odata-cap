/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CreditCardParams
 */
export interface CreditCardParams {
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditCardParams.build]] instead.
 */
export function createCreditCardParams(json: any): CreditCardParams {
  return CreditCardParams.build(json);
}

/**
 * CreditCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditCardParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreditCardParams.creditCardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditCardCode', this, 'Edm.Int32');
}

export namespace CreditCardParams {
  export function build(json: { [keys: string]: FieldType }): CreditCardParams {
    return createComplexType(json, {
      CreditCardCode: (creditCardCode: number) => ({ creditCardCode: edmToTs(creditCardCode, 'Edm.Int32') })
    });
  }
}
