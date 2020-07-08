import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxInvoiceReportParams
 */
export interface TaxInvoiceReportParams {
    /**
     * Tax Invoice Report Number.
     * @nullable
     */
    taxInvoiceReportNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportParams.build]] instead.
 */
export declare function createTaxInvoiceReportParams(json: any): TaxInvoiceReportParams;
/**
 * TaxInvoiceReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxInvoiceReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxInvoiceReportParams.taxInvoiceReportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxInvoiceReportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxInvoiceReportParams;
}
//# sourceMappingURL=TaxInvoiceReportParams.d.ts.map