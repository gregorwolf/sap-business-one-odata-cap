import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AdditionalExpensesParams
 */
export interface AdditionalExpensesParams {
    /**
     * Expens Code.
     * @nullable
     */
    expensCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[AdditionalExpensesParams.build]] instead.
 */
export declare function createAdditionalExpensesParams(json: any): AdditionalExpensesParams;
/**
 * AdditionalExpensesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AdditionalExpensesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AdditionalExpensesParams.expensCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expensCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace AdditionalExpensesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AdditionalExpensesParams;
}
//# sourceMappingURL=AdditionalExpensesParams.d.ts.map