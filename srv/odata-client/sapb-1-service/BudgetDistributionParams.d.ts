import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createBudgetDistributionParams(json: any): BudgetDistributionParams;
/**
 * BudgetDistributionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BudgetDistributionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BudgetDistributionParams.divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    divisionCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BudgetDistributionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetDistributionParams;
}
//# sourceMappingURL=BudgetDistributionParams.d.ts.map