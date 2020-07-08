import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxInvoiceParams
 */
export interface TaxInvoiceParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceParams.build]] instead.
 */
export declare function createTaxInvoiceParams(json: any): TaxInvoiceParams;
/**
 * TaxInvoiceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxInvoiceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxInvoiceParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TaxInvoiceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxInvoiceParams;
}
//# sourceMappingURL=TaxInvoiceParams.d.ts.map