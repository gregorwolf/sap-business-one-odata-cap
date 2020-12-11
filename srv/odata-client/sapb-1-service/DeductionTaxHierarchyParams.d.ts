import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DeductionTaxHierarchyParams
 */
export interface DeductionTaxHierarchyParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchyParams.build]] instead.
 */
export declare function createDeductionTaxHierarchyParams(json: any): DeductionTaxHierarchyParams;
/**
 * DeductionTaxHierarchyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeductionTaxHierarchyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxHierarchyParams> {
    /**
     * Representation of the [[DeductionTaxHierarchyParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DeductionTaxHierarchyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DeductionTaxHierarchyParams {
    /**
     * Metadata information on all properties of the `DeductionTaxHierarchyParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DeductionTaxHierarchyParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxHierarchyParams;
}
//# sourceMappingURL=DeductionTaxHierarchyParams.d.ts.map