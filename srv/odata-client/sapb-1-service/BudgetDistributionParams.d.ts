import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BudgetDistributionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetDistributionParams> {
    /**
     * Representation of the [[BudgetDistributionParams.divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    divisionCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BudgetDistributionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BudgetDistributionParams {
    /**
     * Metadata information on all properties of the `BudgetDistributionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BudgetDistributionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetDistributionParams;
}
//# sourceMappingURL=BudgetDistributionParams.d.ts.map