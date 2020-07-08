import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExpenseTypeParams
 */
export interface ExpenseTypeParams {
    /**
     * Expense Type.
     * @nullable
     */
    expenseType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ExpenseTypeParams.build]] instead.
 */
export declare function createExpenseTypeParams(json: any): ExpenseTypeParams;
/**
 * ExpenseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExpenseTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ExpenseTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ExpenseTypeParams;
}
//# sourceMappingURL=ExpenseTypeParams.d.ts.map