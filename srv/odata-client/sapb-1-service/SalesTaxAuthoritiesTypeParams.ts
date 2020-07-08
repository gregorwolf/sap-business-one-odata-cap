/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesTaxAuthoritiesTypeParams
 */
export interface SalesTaxAuthoritiesTypeParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthoritiesTypeParams.build]] instead.
 */
export function createSalesTaxAuthoritiesTypeParams(json: any): SalesTaxAuthoritiesTypeParams {
  return SalesTaxAuthoritiesTypeParams.build(json);
}

/**
 * SalesTaxAuthoritiesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxAuthoritiesTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesTaxAuthoritiesTypeParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');
}

export namespace SalesTaxAuthoritiesTypeParams {
  export function build(json: { [keys: string]: FieldType }): SalesTaxAuthoritiesTypeParams {
    return createComplexType(json, {
      Numerator: (numerator: number) => ({ numerator: edmToTs(numerator, 'Edm.Int32') })
    });
  }
}
