import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpWithholdingTax
 */
export interface BpWithholdingTax {
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpWithholdingTax.build]] instead.
 */
export declare function createBpWithholdingTax(json: any): BpWithholdingTax;
/**
 * BpWithholdingTaxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpWithholdingTaxField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpWithholdingTax.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpWithholdingTax.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpWithholdingTax {
    function build(json: {
        [keys: string]: FieldType;
    }): BpWithholdingTax;
}
//# sourceMappingURL=BpWithholdingTax.d.ts.map