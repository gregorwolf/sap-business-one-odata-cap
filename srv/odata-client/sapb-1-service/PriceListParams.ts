/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PriceListParams
 */
export interface PriceListParams {
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PriceListParams.build]] instead.
 */
export function createPriceListParams(json: any): PriceListParams {
  return PriceListParams.build(json);
}

/**
 * PriceListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PriceListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PriceListParams.priceListNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListNo', this, 'Edm.Int32');
}

export namespace PriceListParams {
  export function build(json: { [keys: string]: FieldType }): PriceListParams {
    return createComplexType(json, {
      PriceListNo: (priceListNo: number) => ({ priceListNo: edmToTs(priceListNo, 'Edm.Int32') })
    });
  }
}
