import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createBudgetScenarioParams(json: any): BudgetScenarioParams;
/**
 * BudgetScenarioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BudgetScenarioParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BudgetScenarioParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BudgetScenarioParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetScenarioParams;
}
//# sourceMappingURL=BudgetScenarioParams.d.ts.map