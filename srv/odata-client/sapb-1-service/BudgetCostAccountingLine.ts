/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BudgetCostAccountingLine
 */
export interface BudgetCostAccountingLine {
  /**
   * Distr Rule Code.
   * @nullable
   */
  distrRuleCode?: string;
  /**
   * Dimension.
   * @nullable
   */
  dimension?: number;
  /**
   * Distr Rule Debit Lc.
   * @nullable
   */
  distrRuleDebitLc?: number;
  /**
   * Distr Rule Debit Sc.
   * @nullable
   */
  distrRuleDebitSc?: number;
  /**
   * Distr Rule Credit Lc.
   * @nullable
   */
  distrRuleCreditLc?: number;
  /**
   * Distr Rule Credit Sc.
   * @nullable
   */
  distrRuleCreditSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BudgetCostAccountingLine.build]] instead.
 */
export function createBudgetCostAccountingLine(json: any): BudgetCostAccountingLine {
  return BudgetCostAccountingLine.build(json);
}

/**
 * BudgetCostAccountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetCostAccountingLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BudgetCostAccountingLine.distrRuleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistrRuleCode', this, 'Edm.String');
  /**
   * Representation of the [[BudgetCostAccountingLine.dimension]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimension: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Dimension', this, 'Edm.Int32');
  /**
   * Representation of the [[BudgetCostAccountingLine.distrRuleDebitLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleDebitLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistrRuleDebitLC', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetCostAccountingLine.distrRuleDebitSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleDebitSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistrRuleDebitSC', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetCostAccountingLine.distrRuleCreditLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCreditLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistrRuleCreditLC', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetCostAccountingLine.distrRuleCreditSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCreditSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistrRuleCreditSC', this, 'Edm.Double');
}

export namespace BudgetCostAccountingLine {
  export function build(json: { [keys: string]: FieldType }): BudgetCostAccountingLine {
    return createComplexType(json, {
      DistrRuleCode: (distrRuleCode: string) => ({ distrRuleCode: edmToTs(distrRuleCode, 'Edm.String') }),
      Dimension: (dimension: number) => ({ dimension: edmToTs(dimension, 'Edm.Int32') }),
      DistrRuleDebitLC: (distrRuleDebitLc: number) => ({ distrRuleDebitLc: edmToTs(distrRuleDebitLc, 'Edm.Double') }),
      DistrRuleDebitSC: (distrRuleDebitSc: number) => ({ distrRuleDebitSc: edmToTs(distrRuleDebitSc, 'Edm.Double') }),
      DistrRuleCreditLC: (distrRuleCreditLc: number) => ({ distrRuleCreditLc: edmToTs(distrRuleCreditLc, 'Edm.Double') }),
      DistrRuleCreditSC: (distrRuleCreditSc: number) => ({ distrRuleCreditSc: edmToTs(distrRuleCreditSc, 'Edm.Double') })
    });
  }
}
