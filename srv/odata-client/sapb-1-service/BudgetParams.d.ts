import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BudgetParams
 */
export interface BudgetParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BudgetParams.build]] instead.
 */
export declare function createBudgetParams(json: any): BudgetParams;
/**
 * BudgetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BudgetParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BudgetParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BudgetParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetParams;
}
//# sourceMappingURL=BudgetParams.d.ts.map