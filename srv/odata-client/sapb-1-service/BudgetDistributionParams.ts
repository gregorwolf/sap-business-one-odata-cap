/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BudgetDistributionParams
 */
export interface BudgetDistributionParams {
  /**
   * Division Code.
   * @nullable
   */
  divisionCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BudgetDistributionParams.build]] instead.
 */
export function createBudgetDistributionParams(json: any): BudgetDistributionParams {
  return BudgetDistributionParams.build(json);
}

/**
 * BudgetDistributionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetDistributionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BudgetDistributionParams.divisionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  divisionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DivisionCode', this, 'Edm.Int32');
}

export namespace BudgetDistributionParams {
  export function build(json: { [keys: string]: FieldType }): BudgetDistributionParams {
    return createComplexType(json, {
      DivisionCode: (divisionCode: number) => ({ divisionCode: edmToTs(divisionCode, 'Edm.Int32') })
    });
  }
}
