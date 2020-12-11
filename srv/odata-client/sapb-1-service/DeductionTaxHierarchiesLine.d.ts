import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DeductionTaxHierarchiesLine
 */
export interface DeductionTaxHierarchiesLine {
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Deduction Percent.
     * @nullable
     */
    deductionPercent?: number;
    /**
     * Maximum Total.
     * @nullable
     */
    maximumTotal?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchiesLine.build]] instead.
 */
export declare function createDeductionTaxHierarchiesLine(json: any): DeductionTaxHierarchiesLine;
/**
 * DeductionTaxHierarchiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeductionTaxHierarchiesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeductionTaxHierarchiesLine> {
    /**
     * Representation of the [[DeductionTaxHierarchiesLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DeductionTaxHierarchiesLine.deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deductionPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DeductionTaxHierarchiesLine.maximumTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maximumTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DeductionTaxHierarchiesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DeductionTaxHierarchiesLine {
    /**
     * Metadata information on all properties of the `DeductionTaxHierarchiesLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DeductionTaxHierarchiesLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxHierarchiesLine;
}
//# sourceMappingURL=DeductionTaxHierarchiesLine.d.ts.map