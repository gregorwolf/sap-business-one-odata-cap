import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DeductionTaxHierarchiesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace DeductionTaxHierarchiesLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxHierarchiesLine;
}
//# sourceMappingURL=DeductionTaxHierarchiesLine.d.ts.map