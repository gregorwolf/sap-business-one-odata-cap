/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BudgetScenarioParams
 */
export interface BudgetScenarioParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BudgetScenarioParams.build]] instead.
 */
export function createBudgetScenarioParams(json: any): BudgetScenarioParams {
  return BudgetScenarioParams.build(json);
}

/**
 * BudgetScenarioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetScenarioParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BudgetScenarioParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');
}

export namespace BudgetScenarioParams {
  export function build(json: { [keys: string]: FieldType }): BudgetScenarioParams {
    return createComplexType(json, {
      Numerator: (numerator: number) => ({ numerator: edmToTs(numerator, 'Edm.Int32') })
    });
  }
}
