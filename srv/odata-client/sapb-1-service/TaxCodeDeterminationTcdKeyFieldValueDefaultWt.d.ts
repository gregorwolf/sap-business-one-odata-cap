import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWt
 */
export interface TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
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
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyFieldValueDefaultWt(json: any): TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldValueDefaultWtField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdKeyFieldValueDefaultWt;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValueDefaultWt.d.ts.map