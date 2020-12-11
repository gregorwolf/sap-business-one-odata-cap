/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BudgetCostAccountingLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetCostAccountingLine> {
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

  /**
   * Creates an instance of BudgetCostAccountingLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BudgetCostAccountingLine);
  }
}

export namespace BudgetCostAccountingLine {
  /**
   * Metadata information on all properties of the `BudgetCostAccountingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetCostAccountingLine>[] = [{
    originalName: 'DistrRuleCode',
    name: 'distrRuleCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Dimension',
    name: 'dimension',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DistrRuleDebitLC',
    name: 'distrRuleDebitLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DistrRuleDebitSC',
    name: 'distrRuleDebitSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DistrRuleCreditLC',
    name: 'distrRuleCreditLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DistrRuleCreditSC',
    name: 'distrRuleCreditSc',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BudgetCostAccountingLine {
    return deserializeComplexTypeV4(json, BudgetCostAccountingLine);
  }
}
