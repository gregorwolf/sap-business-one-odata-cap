import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BudgetCostAccountingLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetCostAccountingLine> {
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
    /**
     * Creates an instance of BudgetCostAccountingLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BudgetCostAccountingLine {
    /**
     * Metadata information on all properties of the `BudgetCostAccountingLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BudgetCostAccountingLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetCostAccountingLine;
}
//# sourceMappingURL=BudgetCostAccountingLine.d.ts.map