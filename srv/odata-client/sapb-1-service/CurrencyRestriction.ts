/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CurrencyRestriction
 */
export interface CurrencyRestriction {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: string;
  /**
   * Currency Code.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Currency Name.
   * @nullable
   */
  currencyName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
export function createCurrencyRestriction(json: any): CurrencyRestriction {
  return CurrencyRestriction.build(json);
}

/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CurrencyRestrictionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CurrencyRestriction.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');
  /**
   * Representation of the [[CurrencyRestriction.currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CurrencyCode', this, 'Edm.String');
  /**
   * Representation of the [[CurrencyRestriction.currencyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CurrencyName', this, 'Edm.String');
}

export namespace CurrencyRestriction {
  export function build(json: { [keys: string]: FieldType }): CurrencyRestriction {
    return createComplexType(json, {
      PaymentMethodCode: (paymentMethodCode: string) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.String') }),
      CurrencyCode: (currencyCode: string) => ({ currencyCode: edmToTs(currencyCode, 'Edm.String') }),
      CurrencyName: (currencyName: string) => ({ currencyName: edmToTs(currencyName, 'Edm.String') })
    });
  }
}
