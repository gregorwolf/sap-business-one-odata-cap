import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DeductionTaxHierarchyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DeductionTaxHierarchyParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DeductionTaxHierarchyParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxHierarchyParams;
}
//# sourceMappingURL=DeductionTaxHierarchyParams.d.ts.map