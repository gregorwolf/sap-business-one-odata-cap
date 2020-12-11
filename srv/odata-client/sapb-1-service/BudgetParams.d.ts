import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BudgetParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetParams> {
    /**
     * Representation of the [[BudgetParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BudgetParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BudgetParams {
    /**
     * Metadata information on all properties of the `BudgetParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BudgetParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetParams;
}
//# sourceMappingURL=BudgetParams.d.ts.map