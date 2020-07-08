/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DecimalData
 */
export interface DecimalData {
  /**
   * Value.
   * @nullable
   */
  value?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
export function createDecimalData(json: any): DecimalData {
  return DecimalData.build(json);
}

/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DecimalDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DecimalData.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Value', this, 'Edm.Double');
  /**
   * Representation of the [[DecimalData.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
}

export namespace DecimalData {
  export function build(json: { [keys: string]: FieldType }): DecimalData {
    return createComplexType(json, {
      Value: (value: number) => ({ value: edmToTs(value, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') })
    });
  }
}
