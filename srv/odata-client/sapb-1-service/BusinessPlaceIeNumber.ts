/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BusinessPlaceIeNumber
 */
export interface BusinessPlaceIeNumber {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Ie Number.
   * @nullable
   */
  ieNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceIeNumber.build]] instead.
 */
export function createBusinessPlaceIeNumber(json: any): BusinessPlaceIeNumber {
  return BusinessPlaceIeNumber.build(json);
}

/**
 * BusinessPlaceIeNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceIeNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BusinessPlaceIeNumber.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceIeNumber.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[BusinessPlaceIeNumber.ieNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ieNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IENumber', this, 'Edm.String');
}

export namespace BusinessPlaceIeNumber {
  export function build(json: { [keys: string]: FieldType }): BusinessPlaceIeNumber {
    return createComplexType(json, {
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      IENumber: (ieNumber: string) => ({ ieNumber: edmToTs(ieNumber, 'Edm.String') })
    });
  }
}
