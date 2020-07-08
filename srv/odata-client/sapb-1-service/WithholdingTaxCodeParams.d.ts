import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WithholdingTaxCodeParams
 */
export interface WithholdingTaxCodeParams {
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodeParams.build]] instead.
 */
export declare function createWithholdingTaxCodeParams(json: any): WithholdingTaxCodeParams;
/**
 * WithholdingTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WithholdingTaxCodeParams.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WithholdingTaxCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxCodeParams;
}
//# sourceMappingURL=WithholdingTaxCodeParams.d.ts.map