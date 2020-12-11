import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ExpenseTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExpenseTypeParams> {
    /**
     * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ExpenseTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExpenseTypeParams {
    /**
     * Metadata information on all properties of the `ExpenseTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExpenseTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExpenseTypeParams;
}
//# sourceMappingURL=ExpenseTypeParams.d.ts.map