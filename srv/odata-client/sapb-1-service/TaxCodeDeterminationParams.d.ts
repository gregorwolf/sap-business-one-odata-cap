import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationParams
 */
export interface TaxCodeDeterminationParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationParams.build]] instead.
 */
export declare function createTaxCodeDeterminationParams(json: any): TaxCodeDeterminationParams;
/**
 * TaxCodeDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationParams;
}
//# sourceMappingURL=TaxCodeDeterminationParams.d.ts.map