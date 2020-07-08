/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * RoutingDateCalculationOutput
 */
export interface RoutingDateCalculationOutput {
  /**
   * Result Date.
   * @nullable
   */
  resultDate?: Moment;
  /**
   * Proportion.
   * @nullable
   */
  proportion?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationOutput.build]] instead.
 */
export function createRoutingDateCalculationOutput(json: any): RoutingDateCalculationOutput {
  return RoutingDateCalculationOutput.build(json);
}

/**
 * RoutingDateCalculationOutputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoutingDateCalculationOutputField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RoutingDateCalculationOutput.resultDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resultDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ResultDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RoutingDateCalculationOutput.proportion]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  proportion: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Proportion', this, 'Edm.Double');
}

export namespace RoutingDateCalculationOutput {
  export function build(json: { [keys: string]: FieldType }): RoutingDateCalculationOutput {
    return createComplexType(json, {
      ResultDate: (resultDate: Moment) => ({ resultDate: edmToTs(resultDate, 'Edm.DateTimeOffset') }),
      Proportion: (proportion: number) => ({ proportion: edmToTs(proportion, 'Edm.Double') })
    });
  }
}
