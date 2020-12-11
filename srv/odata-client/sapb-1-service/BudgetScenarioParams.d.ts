import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BudgetScenarioParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetScenarioParams> {
    /**
     * Representation of the [[BudgetScenarioParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BudgetScenarioParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BudgetScenarioParams {
    /**
     * Metadata information on all properties of the `BudgetScenarioParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BudgetScenarioParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetScenarioParams;
}
//# sourceMappingURL=BudgetScenarioParams.d.ts.map