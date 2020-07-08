import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdParams
 */
export interface TaxCodeDeterminationTcdParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdParams.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdParams(json: any): TaxCodeDeterminationTcdParams;
/**
 * TaxCodeDeterminationTcdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdParams;
}
//# sourceMappingURL=TaxCodeDeterminationTcdParams.d.ts.map