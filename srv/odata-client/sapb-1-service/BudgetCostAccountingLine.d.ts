import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createBudgetCostAccountingLine(json: any): BudgetCostAccountingLine;
/**
 * BudgetCostAccountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BudgetCostAccountingLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BudgetCostAccountingLine.distrRuleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distrRuleCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetCostAccountingLine.dimension]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dimension: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetCostAccountingLine.distrRuleDebitLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distrRuleDebitLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetCostAccountingLine.distrRuleDebitSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distrRuleDebitSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetCostAccountingLine.distrRuleCreditLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distrRuleCreditLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetCostAccountingLine.distrRuleCreditSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distrRuleCreditSc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BudgetCostAccountingLine {
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetCostAccountingLine;
}
//# sourceMappingURL=BudgetCostAccountingLine.d.ts.map