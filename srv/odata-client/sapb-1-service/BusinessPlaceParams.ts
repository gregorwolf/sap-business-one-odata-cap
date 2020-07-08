/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BusinessPlaceParams
 */
export interface BusinessPlaceParams {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceParams.build]] instead.
 */
export function createBusinessPlaceParams(json: any): BusinessPlaceParams {
  return BusinessPlaceParams.build(json);
}

/**
 * BusinessPlaceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BusinessPlaceParams.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
}

export namespace BusinessPlaceParams {
  export function build(json: { [keys: string]: FieldType }): BusinessPlaceParams {
    return createComplexType(json, {
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') })
    });
  }
}
