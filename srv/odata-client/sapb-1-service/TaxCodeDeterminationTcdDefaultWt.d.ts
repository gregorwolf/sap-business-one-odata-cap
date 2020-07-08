import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdDefaultWt
 */
export interface TaxCodeDeterminationTcdDefaultWt {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdDefaultWt.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdDefaultWt(json: any): TaxCodeDeterminationTcdDefaultWt;
/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdDefaultWtField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdDefaultWt.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdDefaultWt.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdDefaultWt {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdDefaultWt;
}
//# sourceMappingURL=TaxCodeDeterminationTcdDefaultWt.d.ts.map