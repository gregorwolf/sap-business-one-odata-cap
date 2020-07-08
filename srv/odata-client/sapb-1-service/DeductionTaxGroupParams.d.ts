import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DeductionTaxGroupParams
 */
export interface DeductionTaxGroupParams {
    /**
     * Group Key.
     * @nullable
     */
    groupKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxGroupParams.build]] instead.
 */
export declare function createDeductionTaxGroupParams(json: any): DeductionTaxGroupParams;
/**
 * DeductionTaxGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeductionTaxGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DeductionTaxGroupParams.groupKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupKey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DeductionTaxGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxGroupParams;
}
//# sourceMappingURL=DeductionTaxGroupParams.d.ts.map